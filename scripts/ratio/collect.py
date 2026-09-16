#!/usr/bin/env python3
"""Fase L3 (collect) — legge le risposte di approvazione e pubblica.

Cerca nella casella le risposte con oggetto:
    [OK] <slug>          -> pubblica la bozza (upsert in lib/news.json)
    [MODIFICA] <slug>    -> riporta le note per la rigenerazione
Evita doppioni tracciando i Message-ID già processati.

Uso:
    python3 collect.py            # DRY-RUN: mostra cosa farebbe, non pubblica
    python3 collect.py --apply    # pubblica davvero le [OK]

Poi: git add lib/news.json && commit && push  -> le news vanno online.
"""
from __future__ import annotations
import argparse
import email
import glob
import json
import os
import re
from datetime import datetime, timedelta
from email.header import decode_header, make_header

import lib_ratio as R
import publish  # riuso parse_bozza / to_news_item / load_news / NEWS_JSON

BOZZE_DIR = os.path.join(os.path.dirname(__file__), "output", "bozze")
STATE = os.path.join(os.path.dirname(__file__), "output", "processed-replies.json")
MODIFICHE = os.path.join(os.path.dirname(__file__), "output", "modifiche-richieste.md")
MANIFEST = os.path.join(os.path.dirname(__file__), "output", "pending-manifest.json")


def load_manifest(data_label: str | None = None) -> dict:
    """Mappa numero(str) -> {slug, titolo, path} scritta da notify.py.

    Se `data_label` e' valorizzata (ricavata dall'oggetto della risposta, che
    contiene la data della mail di approvazione) si usa il manifest di quella
    giornata: cosi' una risposta che arriva il giorno dopo non finisce sulle
    news sbagliate. Altrimenti si ricade sul manifest corrente.
    """
    if data_label:
        # L'oggetto indica a quale mail si riferisce la risposta: si usa SOLO il
        # manifest di quel giorno. Se manca, non si ricade su quello corrente,
        # perche' significherebbe applicare la risposta alle news sbagliate.
        path = os.path.join(os.path.dirname(MANIFEST),
                            f"pending-manifest-{data_label}.json")
        if not os.path.exists(path):
            return {}
    else:
        path = MANIFEST
        if not os.path.exists(path):
            return {}
    data = json.load(open(path))
    return {str(it["n"]): it for it in data.get("items", [])}


def data_da_subject(subj: str) -> str | None:
    """Estrae la data dall'oggetto: 'Bozze aggiornamenti fiscali - 2026-09-13'."""
    m = re.search(r"(\d{4}-\d{2}-\d{2})", subj or "")
    return m.group(1) if m else None


def dh(s):
    try:
        return str(make_header(decode_header(s or "")))
    except Exception:
        return s or ""


def load_state() -> set:
    if os.path.exists(STATE):
        return set(json.load(open(STATE)))
    return set()


def save_state(s: set) -> None:
    os.makedirs(os.path.dirname(STATE), exist_ok=True)
    json.dump(sorted(s), open(STATE, "w"), indent=2)


def bozza_by_slug(slug: str) -> str | None:
    for p in glob.glob(os.path.join(BOZZE_DIR, "*.md")):
        fm = publish.parse_bozza(p)["fm"]
        if fm.get("slug", "").strip() == slug:
            return p
    return None


def _html_to_text(html: str) -> str:
    """Riduce l'HTML a testo: serve per le risposte inviate da telefono, che
    spesso non hanno alcuna parte text/plain."""
    import html as _html
    txt = re.sub(r"(?is)<(script|style).*?</\1>", " ", html)
    txt = re.sub(r"(?i)<br\s*/?>|</p>|</div>|</li>", "\n", txt)
    txt = re.sub(r"<[^>]+>", " ", txt)
    return _html.unescape(txt)


def body_text(msg) -> str:
    """Testo della risposta. Preferisce text/plain; se manca (tipico delle mail
    inviate da iPhone) ricade sulla parte HTML ripulita."""
    plain, html = "", ""
    for part in (msg.walk() if msg.is_multipart() else [msg]):
        ctype = part.get_content_type()
        if ctype not in ("text/plain", "text/html"):
            continue
        payload = part.get_payload(decode=True)
        if not payload:
            continue
        testo = payload.decode(part.get_content_charset() or "utf-8", "replace")
        if ctype == "text/plain" and not plain:
            plain = testo
        elif ctype == "text/html" and not html:
            html = testo
    if plain.strip():
        return plain
    return _html_to_text(html) if html else ""


def main() -> int:
    ap = argparse.ArgumentParser(description="Legge le risposte di approvazione e pubblica (L3)")
    ap.add_argument("--apply", action="store_true", help="pubblica davvero (default: dry-run)")
    ap.add_argument("--days", type=int, default=10, help="finestra ricerca (giorni)")
    args = ap.parse_args()

    env = R.load_env()
    M = R.connect(env)
    processed = load_state()
    since = (datetime.now() - timedelta(days=args.days)).strftime("%d-%b-%Y")

    # Cerca marcatori nel subject (bottoni) E le risposte alla mail (numeri nel testo).
    ids = set()
    for field, val in (("SUBJECT", '"[OK]"'), ("SUBJECT", '"[MODIFICA]"'),
                       ("SUBJECT", '"Bozze aggiornamenti"')):
        typ, data = M.search(None, "SINCE", since, field, val)
        if typ == "OK" and data[0]:
            ids.update(data[0].split())

    if not ids:
        print(f"Nessuna risposta negli ultimi {args.days} giorni.")
        M.logout(); return 0

    news_items = publish.load_news()
    manifest = {}  # risolto per ogni risposta in base alla data nell'oggetto
    pubblicati, modifiche, skip = [], [], []

    def num_to_slug(n: str):
        it = manifest.get(str(int(n)))
        return (it["slug"], bozza_by_slug(it["slug"])) if it else (None, None)

    def parse_commands(subj: str, body: str):
        """Ritorna lista (azione, slug, path, note) da subject e/o testo risposta."""
        cmds = []
        for az, sl in re.findall(r"\[(OK|MODIFICA)\]\s*([a-z0-9-]+)", subj, re.I):
            cmds.append((az.upper(), sl, bozza_by_slug(sl), ""))
        head = body[:800]  # la risposta sta in cima; ignora l'email citata sotto
        # numeri dopo "OK", separati da spazi/virgole o da connettori (e, ed, and, &):
        # gestisce "OK 1 2", "OK 1,2", "OK 1 e 2", "OK 1 and 2". Si ferma a parole
        # non-numeriche (es. "no 3 e 4" NON viene incluso tra gli OK).
        for mm in re.finditer(r"\bOK\b[\s:]*((?:\d+[\s,]*(?:e|ed|and|&)?[\s,]*)+)", head, re.I):
            for num in re.findall(r"\d+", mm.group(1)):
                slug, p = num_to_slug(num)
                if slug:
                    cmds.append(("OK", slug, p, ""))
        # Approvazione "in blocco": e' il modo in cui le risposte vengono
        # scritte davvero ("ok a tutti", "ok tutte", "ok tutti e 4", "vanno
        # bene tutte"). Si applica solo se non e' gia' stato indicato almeno un
        # numero, cosi' "OK 1 3" continua a valere come selezione puntuale.
        if not cmds and re.search(
                r"(?<!\bnon\s)(?:\bok\b|\bvanno\s+bene\b|\bpubblica\b)"
                r"[\s,:]*(?:a\s*|per\s*)?tutt[iaeo]\b", head, re.I):
            for n in sorted(manifest, key=lambda x: int(x)):
                slug, p_ = num_to_slug(n)
                if slug:
                    cmds.append(("OK", slug, p_, ""))

        for mm in re.finditer(r"\bMODIFICA\b[\s#]*(\d+)\s*:?\s*([^\n]*)", head, re.I):
            slug, p = num_to_slug(mm.group(1))
            if slug:
                cmds.append(("MODIFICA", slug, p, mm.group(2).strip()))
        return cmds

    for i in sorted(ids, key=lambda x: int(x)):
        typ, d = M.fetch(i, "(BODY.PEEK[])")
        if typ != "OK":
            continue
        msg = email.message_from_bytes(d[0][1])
        mid = dh(msg.get("Message-ID")) or f"uid-{i.decode()}"
        if mid in processed:
            continue
        subj = dh(msg.get("Subject"))
        manifest = load_manifest(data_da_subject(subj))
        cmds = parse_commands(subj, body_text(msg))
        seen = set()
        for azione, slug, path, note in cmds:
            if (azione, slug) in seen:
                continue
            seen.add((azione, slug))
            if not path:
                skip.append((slug, "bozza non trovata in output/bozze/"))
                continue
            if azione == "OK":
                item = publish.to_news_item(publish.parse_bozza(path))
                publish.upsert(news_items, item)  # dedup per slug O titolo
                pubblicati.append((slug, mid))
            else:  # MODIFICA
                modifiche.append((slug, note[:500]))
                processed.add(mid)

    print(f"Risposte trovate: OK={len(pubblicati)}  MODIFICA={len(modifiche)}  ignorate={len(skip)}")
    for s, _ in pubblicati:
        print(f"  ✅ pubblica: {s}")
    for s, _ in modifiche:
        print(f"  ✏️ modifica richiesta: {s}")
    for s, why in skip:
        print(f"  ⚠️ {s}: {why}")

    if modifiche:
        os.makedirs(os.path.dirname(MODIFICHE), exist_ok=True)
        with open(MODIFICHE, "a") as f:
            for s, note in modifiche:
                f.write(f"\n## {s}\n{note}\n")
        print(f"\nNote di modifica salvate in {os.path.relpath(MODIFICHE)} (da rigenerare).")

    if not args.apply:
        M.logout()
        print("\nDRY-RUN: niente pubblicato. Aggiungi --apply per pubblicare le [OK].")
        return 0

    news_items.sort(key=lambda x: x.get("data", ""), reverse=True)
    with open(publish.NEWS_JSON, "w") as f:
        json.dump(news_items, f, ensure_ascii=False, indent=2); f.write("\n")
    for _, mid in pubblicati:
        processed.add(mid)
    save_state(processed)
    M.logout()
    print(f"\n✅ {len(pubblicati)} news pubblicate in lib/news.json (totale {len(news_items)}).")
    print("Ora: git add lib/news.json && commit && push  -> online.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
