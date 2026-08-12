#!/usr/bin/env python3
"""Orchestratore del mattino — un solo comando per l'intero flusso di invio.

1. Legge l'ultima "Informazione Quotidiana" di Ratio dalla casella.
2. Sceglie automaticamente le N notizie più utili per il pubblico del sito.
3. Le riscrive in versione originale con Sonnet 5 (bozze).
4. Manda la mail di approvazione a te (con i numeri per rispondere dal telefono).

Pensato per essere lanciato da un job automatico ogni mattina (launchd).

Uso:
    python3 daily.py                # invia davvero (per il job del mattino)
    python3 daily.py --dry          # prova: prepara le bozze ma NON invia
    python3 daily.py --n 4          # quante news preparare (default 4)
"""
from __future__ import annotations
import argparse
import json
import os
import re
import subprocess
import sys
import urllib.request
import urllib.error

import lib_ratio as R
import rewrite

HERE = os.path.dirname(__file__)
BOZZE_DIR = os.path.join(HERE, "output", "bozze")
MANIFEST = os.path.join(HERE, "output", "pending-manifest.json")
LOG = os.path.join(HERE, "output", "daily.log")
API_URL = "https://api.anthropic.com/v1/messages"


def log(msg: str) -> None:
    print(msg)
    try:
        with open(LOG, "a") as f:
            f.write(msg + "\n")
    except Exception:
        pass


def auto_pick(env: dict, argomenti: list[str], n: int) -> list[int]:
    """Chiede a Claude i numeri (1-based) delle N notizie più utili per il sito."""
    api_key = env.get("ANTHROPIC_API_KEY")
    model = env.get("RATIO_REWRITE_MODEL") or "claude-sonnet-5"
    elenco = "\n".join(f"{i+1}. {a}" for i, a in enumerate(argomenti))
    user = (
        "Sei l'editor del sito di uno studio commercialista. Il pubblico sono privati, "
        "partite IVA forfettarie e piccole imprese (non grandi società né super-tecnici). "
        f"Dal notiziario fiscale di oggi, scegli le notizie di MAGGIOR IMPATTO e utilità "
        "concreta per questo pubblico: scadenze, adempimenti, agevolazioni, novità che "
        "toccano davvero privati e piccole attività. Scarta gli argomenti di nicchia, "
        "troppo tecnici o rilevanti solo per grandi imprese/operatori specializzati.\n"
        f"Scegli AL MASSIMO {n} notizie, ma anche MENO se solo poche sono davvero di "
        "impatto: meglio 2 notizie forti che 4 riempitive. Non forzare il numero.\n\n"
        f"Notizie:\n{elenco}\n\n"
        f'Rispondi SOLO con un JSON: {{"scelte": [numeri]}} (da 1 a {n} numeri, i più rilevanti).'
    )
    payload = {
        # niente thinking:disabled — non supportato da Fable (default adaptive);
        # margine sui token perché il thinking non tronchi il JSON di risposta.
        "model": model, "max_tokens": 800,
        "messages": [{"role": "user", "content": user}],
    }
    req = urllib.request.Request(
        API_URL, data=json.dumps(payload).encode(), method="POST",
        headers={"content-type": "application/json", "x-api-key": api_key,
                 "anthropic-version": "2023-06-01"},
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        body = json.loads(resp.read().decode())
    text = "".join(b.get("text", "") for b in body.get("content", []) if b.get("type") == "text")
    m = re.search(r"\{.*\}", text, re.S)
    scelte = json.loads(m.group(0)).get("scelte", []) if m else []
    # normalizza: interi validi in range, unici, max n
    out = []
    for x in scelte:
        try:
            xi = int(x)
        except (TypeError, ValueError):
            continue
        if 1 <= xi <= len(argomenti) and xi not in out:
            out.append(xi)
    return out[:n]


def main() -> int:
    ap = argparse.ArgumentParser(description="Orchestratore mattutino Ratio")
    ap.add_argument("--dry", action="store_true", help="prepara le bozze ma non invia la mail")
    ap.add_argument("--n", type=int, default=4, help="quante news preparare (default 4)")
    ap.add_argument("--id", help="msg_id IMAP di una quotidiana specifica (default: l'ultima). Utile per i recuperi.")
    args = ap.parse_args()

    env = R.load_env()
    if not env.get("ANTHROPIC_API_KEY"):
        log("ERRORE: ANTHROPIC_API_KEY mancante in .env"); return 1

    M = R.connect(env)
    try:
        if args.id:
            q = R.parse_quotidiana(M, args.id)
        else:
            emails = R.list_emails(M)
            quot = [e for e in emails if e.categoria == "quotidiana"]
            if not quot:
                log("Nessuna Informazione Quotidiana in casella oggi."); return 1
            q = R.parse_quotidiana(M, quot[-1].msg_id)
    finally:
        M.logout()

    if not q.argomenti:
        log(f"Quotidiana {q.numero} senza argomenti estraibili."); return 1

    log(f"[daily] Quotidiana {q.numero} del {q.data} — {len(q.argomenti)} argomenti")

    # Scarica il PDF ed estrae il TESTO REALE di ogni articolo. Senza questo la
    # riscrittura inventa contenuti e norme (allucinazioni). output/ è gitignorato.
    testi = R.fetch_article_texts(
        q.pdf_link, q.argomenti, os.path.join(HERE, "output"), q.numero)
    if not testi:
        log("[daily] ERRORE: impossibile estrarre il testo dal PDF della quotidiana "
            "(pdf_link mancante o download fallito). Interrompo: senza fonte reale "
            "non si riscrive (regola anti-allucinazione)."); return 1
    log(f"[daily] Testi reali estratti: {len(testi)}/{len(q.argomenti)} articoli")

    scelte = auto_pick(env, q.argomenti, args.n)
    if not scelte:
        log("Selezione automatica vuota, salto."); return 1
    log(f"[daily] Scelte automatiche: {scelte}")

    # riscrive le scelte in bozze
    digest_iso = None
    m = re.match(r"(\d{1,2})/(\d{1,2})/(\d{4})", q.data or "")
    if m:
        g, mm, a = m.groups()
        digest_iso = f"{a}-{int(mm):02d}-{int(g):02d}"
    digest_iso = digest_iso or "senza-data"

    # pulizia: rimuovi eventuali bozze di oggi rimaste da run precedenti,
    # così la mail contiene solo le news fresche di questa esecuzione.
    import glob as _glob
    for old in _glob.glob(os.path.join(BOZZE_DIR, f"{digest_iso}-*.md")):
        try:
            os.remove(old)
        except OSError:
            pass

    generate = 0
    for pos, idx in enumerate(scelte, 1):
        argomento = q.argomenti[idx - 1]
        testo = testi.get(argomento)
        if not testo:
            log(f"[daily] salto #{pos} ({argomento[:45]}): testo non estratto dal PDF")
            continue
        log(f"[daily] riscrivo #{pos}: {argomento[:55]}")
        try:
            out, usage = rewrite.call_claude(env, argomento, "auto", testo)
        except SystemExit as e:
            log(f"   errore riscrittura: {e}"); continue
        rewrite.write_bozza(digest_iso, idx, argomento, out, usage)
        generate += 1

    if not generate:
        log("Nessuna bozza generata."); return 1

    # invia la mail (solo le bozze di oggi). notify scrive il manifest numero→slug.
    glob_oggi = os.path.join(BOZZE_DIR, f"{digest_iso}-*.md")
    cmd = [sys.executable, os.path.join(HERE, "notify.py"), "--bozze", glob_oggi]
    if not args.dry:
        cmd.append("--send")
    log(f"[daily] {'DRY' if args.dry else 'invio'} mail con {generate} bozze")
    res = subprocess.run(cmd, capture_output=True, text=True, cwd=HERE)
    log(res.stdout.strip())
    if res.returncode != 0:
        log("ERRORE notify: " + res.stderr.strip()); return 1
    log("[daily] fatto.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
