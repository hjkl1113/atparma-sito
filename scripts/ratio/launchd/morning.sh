#!/bin/bash
# Job del mattino: legge Ratio, scarica il PDF, sceglie e riscrive le news dal
# testo reale in BOZZE. --dry: NON invia alcuna mail (regola utente: mai mail
# in automatico). Le bozze si rivedono/pubblicano a mano in sessione.
# Serve /opt/homebrew/bin nel PATH per pdftotext.
cd "/Users/alessandrosicuri/Desktop/studio at/sito/scripts/ratio" || exit 1
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
python3 daily.py --n 4 --dry
