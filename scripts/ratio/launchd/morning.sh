#!/bin/bash
# Job del mattino: legge Ratio, scarica il PDF, sceglie e riscrive le news dal
# testo reale, manda la mail di approvazione. daily.py INVIA di default (--dry
# per non inviare); NON esiste --send. Serve /opt/homebrew/bin nel PATH per pdftotext.
cd "/Users/alessandrosicuri/Desktop/studio at/sito/scripts/ratio" || exit 1
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
python3 daily.py --n 4
