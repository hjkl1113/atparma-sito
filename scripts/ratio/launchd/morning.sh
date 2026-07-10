#!/bin/bash
# Job del mattino: legge Ratio, sceglie e riscrive le news, manda la mail di approvazione.
cd "/Users/alessandrosicuri/Desktop/studio at/sito/scripts/ratio" || exit 1
/usr/bin/python3 daily.py --send --n 4
