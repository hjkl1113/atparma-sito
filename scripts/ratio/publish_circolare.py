#!/usr/bin/env python3
"""Pubblica una bozza di approfondimento (circolare speciale) in lib/approfondimenti.json.

Uso:
    python3 publish_circolare.py output/bozze-circolari/2026-08-19-....json
    python3 publish_circolare.py <bozza.json> --in-vigore 2026-08-12 --news slug1,slug2

Non tocca il sito da solo: dopo la pubblicazione servono git add/commit/push.
"""
from __future__ import annotations
import argparse
import json
import os
import re
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
TARGET = os.path.join(ROOT, "lib", "approfondimenti.json")

CAMPI = [
    "slug", "titolo", "sommario", "data", "tipo", "riferimento", "inVigoreDal",
    "destinatari", "intro", "sezioni", "fonteNormativa", "newsCollegate",
]
DESTINATARI_OK = {"privati", "partite-iva", "imprese", "enti-non-profit"}


def pulisci_sezione(s: dict) -> dict:
    out = {k: v for k, v in s.items() if not k.startswith("_") and v not in (None, "", [])}
    out["chiRiguarda"] = [d for d in out.get("chiRiguarda", []) if d in DESTINATARI_OK]
    if not out["chiRiguarda"]:
        out.pop("chiRiguarda")
    return out


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("bozza")
    ap.add_argument("--in-vigore", help="data ISO di entrata in vigore")
    ap.add_argument("--news", help="slug delle news collegate, separati da virgola")
    args = ap.parse_args()

    with open(args.bozza) as f:
        b = json.load(f)

    if b.get("_warning_verbatim"):
        print("⚠️  la bozza ha warning anti-verbatim non risolti:")
        for w in b["_warning_verbatim"]:
            print("   -", w)
        risposta = input("Pubblico lo stesso? [s/N] ").strip().lower()
        if risposta != "s":
            print("annullato.")
            return 1

    if args.in_vigore:
        b["inVigoreDal"] = args.in_vigore
    if args.news:
        b["newsCollegate"] = [s.strip() for s in args.news.split(",") if s.strip()]

    voce = {k: b.get(k) for k in CAMPI if b.get(k) not in (None, "", [])}
    voce["sezioni"] = [pulisci_sezione(s) for s in b.get("sezioni", [])]
    voce["destinatari"] = [d for d in voce.get("destinatari", []) if d in DESTINATARI_OK]

    mancanti = [k for k in ("slug", "titolo", "sommario", "data", "tipo") if not voce.get(k)]
    if mancanti:
        raise SystemExit(f"campi obbligatori mancanti nella bozza: {mancanti}")
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", voce["data"]):
        raise SystemExit(f"data non valida: {voce['data']}")

    dati = json.load(open(TARGET)) if os.path.exists(TARGET) else []
    dati = [x for x in dati if x.get("slug") != voce["slug"]]
    dati.append(voce)
    dati.sort(key=lambda x: x["data"], reverse=True)
    with open(TARGET, "w") as f:
        json.dump(dati, f, indent=1, ensure_ascii=False)
        f.write("\n")

    print(f"✅ '{voce['titolo']}' pubblicato in lib/approfondimenti.json "
          f"({len(voce['sezioni'])} sezioni, totale {len(dati)} approfondimenti).")
    print("Ora: git add lib/approfondimenti.json && commit && push  -> online.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
