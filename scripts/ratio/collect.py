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


def load_manifest() -> dict:
    """Mappa numero(str) -> {slug, titolo, path} scritta da notify.py."""
    if os.path.exists(MANIFEST):
        data = json.load(open(MANIFEST))
        return {str(it["n"]): it for it in data.get("items", [])}
    return {}


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


def body_text(msg) -> str:
    if msg.is_multipart():
        for part in msg.walk():
            if part.get_content_type() == "text/plain":
                payload = part.get_payload(decode=True)
                if payload:
                    return payload.decode(part.get_content_charset() or "utf-8", "replace")
        return ""
    payload = msg.get_payload(decode=True)
    return payload.decode(msg.get_content_charset() or "utf-8", "replace") if payload else ""


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
    by_slug = {it["slug"]: idx for idx, it in enumerate(news_items)}
    manifest = load_manifest()
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
        for mm in re.finditer(r"\bOK\b[\s:]*([\d ,]+)", head, re.I):
            for num in re.findall(r"\d+", mm.group(1)):
                slug, p = num_to_slug(num)
                if slug:
                    cmds.append(("OK", slug, p, ""))
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
        cmds = parse_commands(dh(msg.get("Subject")), body_text(msg))
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
                if item["slug"] in by_slug:
                    news_items[by_slug[item["slug"]]] = item
                else:
                    news_items.append(item); by_slug[item["slug"]] = len(news_items) - 1
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
