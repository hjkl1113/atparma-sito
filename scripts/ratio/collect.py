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

    ids = set()
    for marker in ("[OK]", "[MODIFICA]"):
        typ, data = M.search(None, "SINCE", since, "SUBJECT", f'"{marker}"')
        if typ == "OK" and data[0]:
            ids.update(data[0].split())

    if not ids:
        print(f"Nessuna risposta [OK]/[MODIFICA] negli ultimi {args.days} giorni.")
        M.logout(); return 0

    news_items = publish.load_news()
    by_slug = {it["slug"]: idx for idx, it in enumerate(news_items)}
    pubblicati, modifiche, skip = [], [], []

    for i in sorted(ids, key=lambda x: int(x)):
        typ, d = M.fetch(i, "(BODY.PEEK[])")
        if typ != "OK":
            continue
        msg = email.message_from_bytes(d[0][1])
        mid = dh(msg.get("Message-ID")) or f"uid-{i.decode()}"
        if mid in processed:
            continue
        subj = dh(msg.get("Subject"))
        m = re.search(r"\[(OK|MODIFICA)\]\s*([a-z0-9-]+)", subj, re.I)
        if not m:
            continue
        azione, slug = m.group(1).upper(), m.group(2).strip()
        path = bozza_by_slug(slug)
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
            note = body_text(msg).strip()
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
