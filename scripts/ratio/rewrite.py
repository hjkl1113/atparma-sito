#!/usr/bin/env python3
"""Fase 2 — Riscrittura AI degli spunti Ratio in news ORIGINALI per il sito.

Prende un digest generato da read_daily.py, seleziona gli argomenti indicati e,
per ognuno, chiama Claude Sonnet 5 per produrre una news breve ORIGINALE
(titolo SEO, sommario, corpo ~400 parole, riferimenti normativi reali).
Le bozze vanno in output/bozze/ — NESSUNA pubblicazione: sono da approvare.

Uso:
    python3 rewrite.py --digest output/2026-07-09-quotidiana.json --pick 1,4,7
    python3 rewrite.py --digest output/2026-07-09-quotidiana.json --pick 1 --filone privati

Vincoli:
- Riscrittura ORIGINALE: mai testo Ratio verbatim; citare le norme, non "Ratio".
- Copre il pubblico del sito (privati/730-cripto, P.IVA/forfettari, imprese/crisi).
- Modello: claude-sonnet-5 (override con RATIO_REWRITE_MODEL nel .env).
"""
from __future__ import annotations
import argparse
import json
import os
import re
import sys
import urllib.request
import urllib.error

import lib_ratio as R

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "output")
BOZZE_DIR = os.path.join(OUTPUT_DIR, "bozze")
API_URL = "https://api.anthropic.com/v1/messages"

SYSTEM_PROMPT = (
    "Sei un copywriter fiscale per lo studio commercialista A.T. Consulting Parma. "
    "Scrivi news brevi, chiare e ORIGINALI su aggiornamenti fiscali italiani, per un "
    "pubblico non tecnico (privati, partite IVA forfettarie, piccole imprese). "
    "Ti viene fornito il TESTO FONTE reale della notizia (cronaca fiscale del giorno). "
    "REGOLE FERREE, non derogabili:\n"
    "(1) Basati ESCLUSIVAMENTE sui fatti contenuti nel TESTO FONTE. È VIETATO "
    "aggiungere, dedurre o 'ricordare' norme, circolari, sentenze, date, importi o "
    "percentuali che NON siano scritti nel testo fonte. Se non c'è, non esiste.\n"
    "(2) I riferimenti normativi vanno riportati SOLO se presenti nel testo fonte, "
    "copiandoli fedelmente (es. 'D.Lgs. 122/2026', 'D.M. 22.06.2026'). MAI inventarli. "
    "Se il testo non cita norme precise, lascia 'fonte_normativa' vuota.\n"
    "(3) Contenuto RISCRITTO in modo originale: mai copiare frasi verbatim; MAI citare "
    "come fonte 'Ratio', 'Italia Oggi', 'Il Sole 24 Ore' o altre testate.\n"
    "(4) Tono professionale ma accessibile; solo informazione, niente consulenza "
    "personalizzata o promesse.\n"
    "(5) Se l'argomento è troppo tecnico/di nicchia per il pubblico del sito, "
    "segnalalo con 'adatto_al_sito': false."
)

USER_TEMPLATE = """Riscrivi in una news ORIGINALE per il sito dello studio la notizia qui sotto.

Titolo dell'argomento: "{argomento}"
Filone editoriale suggerito: {filone}

--- TESTO FONTE (uso interno, NON citarlo e NON copiarlo alla lettera) ---
{testo_fonte}
--- FINE TESTO FONTE ---

Ricorda: usa SOLO fatti e riferimenti normativi presenti nel TESTO FONTE qui sopra;
non aggiungere nulla di tuo. Produci SOLO un oggetto JSON con questi campi (nessun testo fuori dal JSON):
{{
  "adatto_al_sito": true/false,
  "titolo": "titolo SEO, max ~65 caratteri, chiaro e concreto",
  "slug": "slug-url-minuscolo-con-trattini",
  "sommario": "1-2 frasi che riassumono la news (max ~160 caratteri, per meta description)",
  "corpo_md": "il corpo della news in Markdown, 300-450 parole, paragrafi brevi, eventualmente un elenco puntato; spiega cosa cambia e per chi, SOLO in base al testo fonte",
  "fonte_normativa": "SOLO i riferimenti normativi presenti nel testo fonte, copiati fedelmente (stringa vuota se il testo non ne cita)",
  "categoria": "uno tra: privati, partite-iva, imprese, generale"
}}"""


def call_claude(env: dict, argomento: str, filone: str, testo_fonte: str | None = None) -> dict:
    if not testo_fonte or not testo_fonte.strip():
        # Regola anti-allucinazione: senza il testo reale NON si riscrive.
        raise SystemExit(
            f"nessun testo fonte per '{argomento[:50]}' — salto per non allucinare"
        )
    api_key = env.get("ANTHROPIC_API_KEY") or os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        raise SystemExit(
            "ANTHROPIC_API_KEY mancante. Aggiungila a scripts/ratio/.env "
            "(riusa quella del portale) o come variabile d'ambiente."
        )
    model = env.get("RATIO_REWRITE_MODEL") or "claude-sonnet-5"
    payload = {
        "model": model,
        # margine ampio: Fable usa thinking "adaptive" di default (i token di
        # ragionamento contano sull'output e non devono troncare il JSON finale).
        "max_tokens": 3000,
        "system": SYSTEM_PROMPT,
        "messages": [
            {"role": "user", "content": USER_TEMPLATE.format(
                argomento=argomento, filone=filone, testo_fonte=testo_fonte.strip())}
        ],
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        API_URL, data=data, method="POST",
        headers={
            "content-type": "application/json",
            "x-api-key": api_key,
            "anthropic-version": "2023-06-01",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            body = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        raise SystemExit(f"Errore API ({e.code}): {e.read().decode('utf-8', 'replace')[:400]}")
    except urllib.error.URLError as e:
        raise SystemExit(f"Errore di rete: {e}")

    if body.get("stop_reason") == "refusal":
        raise SystemExit("La richiesta e' stata rifiutata dai classificatori di sicurezza.")
    text = "".join(b.get("text", "") for b in body.get("content", []) if b.get("type") == "text")
    return _parse_json_block(text), body.get("usage", {})


def _parse_json_block(text: str) -> dict:
    """Estrae il primo oggetto JSON dalla risposta (robusto a testo attorno)."""
    m = re.search(r"\{.*\}", text, re.S)
    if not m:
        raise SystemExit(f"Risposta non-JSON dal modello:\n{text[:300]}")
    return json.loads(m.group(0))


def slugify(s: str) -> str:
    s = s.lower()
    s = re.sub(r"[àáâä]", "a", s); s = re.sub(r"[èéêë]", "e", s)
    s = re.sub(r"[ìíîï]", "i", s); s = re.sub(r"[òóôö]", "o", s)
    s = re.sub(r"[ùúûü]", "u", s)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:80]


def write_bozza(digest_iso: str, idx: int, argomento: str, out: dict, usage: dict) -> str:
    os.makedirs(BOZZE_DIR, exist_ok=True)
    slug = out.get("slug") or slugify(out.get("titolo") or argomento)
    base = f"{digest_iso}-{idx:02d}-{slug}"
    md_path = os.path.join(BOZZE_DIR, base + ".md")
    lines = [
        "---",
        f"titolo: {out.get('titolo','')}",
        f"slug: {slug}",
        f"categoria: {out.get('categoria','generale')}",
        f"adatto_al_sito: {out.get('adatto_al_sito', True)}",
        f"data: {digest_iso}",
        f"fonte_normativa: {out.get('fonte_normativa','')}",
        f"spunto_ratio: {argomento}",
        f"fonte_verificata: True",
        f"stato: DA_APPROVARE",
        "---",
        "",
        f"> **Sommario:** {out.get('sommario','')}",
        "",
        out.get("corpo_md", ""),
        "",
        "---",
        f"<!-- token usati: in={usage.get('input_tokens','?')} out={usage.get('output_tokens','?')} -->",
        "",
    ]
    with open(md_path, "w") as f:
        f.write("\n".join(lines))
    return md_path


def main() -> int:
    ap = argparse.ArgumentParser(description="Riscrittura AI spunti Ratio -> bozze news (Sonnet 5)")
    ap.add_argument("--digest", required=True, help="path del JSON generato da read_daily.py")
    ap.add_argument("--pick", required=True, help="numeri argomenti (1-based) separati da virgola, es. 1,4,7")
    ap.add_argument("--filone", default="auto", help="privati | partite-iva | imprese | auto")
    args = ap.parse_args()

    env = R.load_env()
    with open(args.digest) as f:
        digest = json.load(f)
    argomenti = digest.get("argomenti", [])
    digest_iso = digest.get("data_iso", "senza-data")

    try:
        picks = [int(x) for x in re.split(r"[,\s]+", args.pick.strip()) if x]
    except ValueError:
        raise SystemExit("--pick deve contenere numeri separati da virgola, es. 1,4,7")

    # Scarica il PDF ed estrae il testo REALE di ogni articolo: senza questo la
    # riscrittura allucinerebbe. output/ è gitignorato → testo verbatim solo locale.
    print("Scarico il PDF della quotidiana ed estraggo gli articoli...")
    testi = R.fetch_article_texts(
        digest.get("pdf_link"), argomenti, OUTPUT_DIR, digest.get("numero"))
    if not testi:
        raise SystemExit(
            "Impossibile estrarre il testo dal PDF (pdf_link mancante o download fallito). "
            "Interrompo: senza fonte reale non si riscrive."
        )
    print(f"Testi estratti: {len(testi)}/{len(argomenti)} articoli.")

    print(f"Digest: Quotidiana {digest.get('numero','?')} del {digest.get('data','?')} — {len(argomenti)} argomenti")
    generati = []
    tot_in = tot_out = 0
    for n in picks:
        if not (1 <= n <= len(argomenti)):
            print(f"  ⚠️ #{n} fuori range, salto")
            continue
        argomento = argomenti[n - 1]
        testo = testi.get(argomento)
        if not testo:
            print(f"  ⚠️ #{n}: testo non estratto dal PDF, salto (niente allucinazioni)")
            continue
        print(f"  ✍️  #{n}: {argomento[:60]} ...")
        out, usage = call_claude(env, argomento, args.filone, testo)
        tot_in += usage.get("input_tokens", 0); tot_out += usage.get("output_tokens", 0)
        path = write_bozza(digest_iso, n, argomento, out, usage)
        flag = "" if out.get("adatto_al_sito", True) else "  [segnalata NON adatta al sito]"
        generati.append(path)
        print(f"       → {os.path.relpath(path)}{flag}")

    # stima costo Sonnet 5 (intro $2/$10 per 1M fino ago 2026)
    costo = tot_in / 1_000_000 * 2 + tot_out / 1_000_000 * 10
    print(f"\n✅ {len(generati)} bozze in output/bozze/ — da rivedere e approvare.")
    print(f"   Token: in={tot_in} out={tot_out}  |  costo stimato ~${costo:.4f}")
    print("   Nessuna pubblicazione: sono bozze interne.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
