#!/bin/bash
# Job del mattino: legge Ratio, scarica il PDF, sceglie e riscrive le news dal
# testo reale e INVIA la mail di approvazione interna a sicuri@atparma.com
# (comportamento voluto: l'automazione del mattino deve mandarla da sola).
# daily.py invia di default; NON esiste --send. Serve /opt/homebrew/bin per pdftotext.
cd "/Users/alessandrosicuri/Progetti claude/atparma/sito/scripts/ratio" || exit 1
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
python3 daily.py --n 4
