#!/usr/bin/env python3
"""Motore di lettura giornaliera newsletter Ratio (Strada 1).

Legge dalla casella sicuri@atparma.com (IMAP, SOLA LETTURA) l'ultima
"Informazione Quotidiana" di Ratio, ne estrae l'indice degli argomenti e
il link al PDF, e produce un digest strutturato:

    output/AAAA-MM-GG-quotidiana.json   (dati strutturati)
    output/AAAA-MM-GG-quotidiana.md     (digest leggibile per revisione)

Uso:
    python3 read_daily.py                 # ultima quotidiana
    python3 read_daily.py --id 628        # messaggio IMAP specifico
    python3 read_daily.py --list          # elenca ultime email Ratio classificate
    python3 read_daily.py --list --limit 40

Nessuna pubblicazione automatica: l'output e' materiale interno da rivedere.
"""
from __future__ import annotations
import argparse
import json
import os
import re
import sys

import lib_ratio as R

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "output")

ICON = {
    "quotidiana": "📅", "notiziario": "📰", "aggiornamento": "🟡",
    "circolare": "🔵", "rumore": "🗑️", "altro": "•",
}


def slug_data(q: R.Quotidiana) -> str:
    """Ricava AAAA-MM-GG dal campo data del subject (gg/mm/aaaa)."""
    if q.data:
        m = re.match(r"(\d{1,2})/(\d{1,2})/(\d{4})", q.data)
        if m:
            g, mm, a = m.groups()
            return f"{a}-{int(mm):02d}-{int(g):02d}"
    return "senza-data"


def latest_quotidiana_id(M) -> str | None:
    """Trova il msg_id dell'ultima Informazione Quotidiana."""
    emails = R.list_emails(M)
    quot = [e for e in emails if e.categoria == "quotidiana"]
    return quot[-1].msg_id if quot else None


def cmd_list(M, limit: int) -> None:
    emails = R.list_emails(M, limit=limit)
    print(f"Ultime {len(emails)} email Ratio (piu' recenti in fondo):\n")
    for e in emails:
        print(f"[{e.msg_id:>4}] {e.date[:25]:25} {ICON.get(e.categoria,'•')} {e.categoria:13} | {e.subject[:66]}")
    from collections import Counter
    c = Counter(e.categoria for e in emails)
    print("\nRiepilogo:", ", ".join(f"{ICON.get(k,'•')} {k}={v}" for k, v in c.most_common()))


def write_digest(q: R.Quotidiana) -> tuple[str, str]:
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    slug = slug_data(q)
    base = f"{slug}-quotidiana"
    json_path = os.path.join(OUTPUT_DIR, base + ".json")
    md_path = os.path.join(OUTPUT_DIR, base + ".md")

    data = {
        "msg_id": q.msg_id,
        "numero": q.numero,
        "data": q.data,
        "data_iso": slug,
        "subject": q.subject,
        "date_header": q.date_header,
        "is_settimanale": q.is_settimanale,
        "n_argomenti": len(q.argomenti),
        "argomenti": q.argomenti,
        "pdf_link": q.pdf_link,
        "fonte": "Ratio - Centro Studi Castelli (servizioclienti@sistemaratio.it)",
        "nota_copyright": "Contenuto editoriale Ratio: NON ripubblicare verbatim. Solo spunti/riscritture originali.",
    }
    with open(json_path, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    lines = [
        f"# Digest Ratio — Informazione Quotidiana {q.numero or ''} del {q.data or '?'}",
        "",
        f"- **Fonte:** Ratio / Centro Studi Castelli",
        f"- **Messaggio IMAP:** {q.msg_id}",
        f"- **Ricevuta:** {q.date_header}",
        f"- **Tipo:** {'sintesi settimanale' if q.is_settimanale else 'quotidiana'}",
        f"- **Argomenti trattati:** {len(q.argomenti)}",
    ]
    if q.pdf_link:
        lines.append(f"- **PDF completo:** {q.pdf_link}")
    lines += [
        "",
        "## Argomenti del giorno",
        "",
    ]
    for i, a in enumerate(q.argomenti, 1):
        lines.append(f"{i}. {a}")
    lines += [
        "",
        "---",
        "> ⚠️ Contenuto editoriale Ratio protetto da copyright: usare come **spunto**,",
        "> riscrivere in versione originale prima di qualsiasi pubblicazione sul sito.",
        "",
        "## Selezione per il sito (da compilare in revisione)",
        "",
        "Segna con [x] gli argomenti da trasformare in news su /aggiornamenti-fiscali:",
        "",
    ]
    for a in q.argomenti:
        lines.append(f"- [ ] {a}")
    lines.append("")

    with open(md_path, "w") as f:
        f.write("\n".join(lines))
    return json_path, md_path


def main() -> int:
    ap = argparse.ArgumentParser(description="Motore lettura giornaliera Ratio")
    ap.add_argument("--id", help="msg_id IMAP specifico da parsare")
    ap.add_argument("--list", action="store_true", help="elenca email Ratio classificate")
    ap.add_argument("--limit", type=int, default=25, help="numero email da elencare (--list)")
    args = ap.parse_args()

    env = R.load_env()
    M = R.connect(env)
    try:
        if args.list:
            cmd_list(M, args.limit)
            return 0

        msg_id = args.id or latest_quotidiana_id(M)
        if not msg_id:
            print("Nessuna Informazione Quotidiana trovata in casella.", file=sys.stderr)
            return 1

        q = R.parse_quotidiana(M, msg_id)
        json_path, md_path = write_digest(q)

        print(f"✅ Digest generato per Quotidiana {q.numero or '?'} del {q.data or '?'}")
        print(f"   Argomenti estratti: {len(q.argomenti)}")
        print(f"   PDF: {'sì' if q.pdf_link else 'non trovato'}")
        print(f"   → {os.path.relpath(md_path)}")
        print(f"   → {os.path.relpath(json_path)}")
        if q.argomenti:
            print("\n   Anteprima argomenti:")
            for a in q.argomenti[:6]:
                print(f"     - {a}")
            if len(q.argomenti) > 6:
                print(f"     ... (+{len(q.argomenti) - 6})")
        return 0
    finally:
        M.logout()


if __name__ == "__main__":
    raise SystemExit(main())
