#!/bin/bash
# Job "collect": legge dalla casella le tue risposte di approvazione ([OK] ai
# numeri/slug nella mail del mattino) e pubblica le news approvate sul sito.
# collect.py e' IDEMPOTENTE (traccia i Message-ID gia' processati): puo' girare
# piu' volte al giorno senza doppioni. Il tuo "OK" nella mail e' il gate: senza
# risposta non pubblica nulla. Serve /opt/homebrew/bin per pdftotext.
set -o pipefail
RATIO="/Users/alessandrosicuri/Progetti claude/atparma/sito/scripts/ratio"
REPO="/Users/alessandrosicuri/Progetti claude/atparma/sito"
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

echo "===== [$(date)] collect avvio ====="
cd "$RATIO" || exit 1
python3 collect.py --apply || { echo "collect.py errore"; exit 1; }

cd "$REPO" || exit 1
# 1) se news.json e' cambiato, committa
if ! git diff --quiet -- lib/news.json; then
  git add lib/news.json
  git commit -q -m "feat(news): pubblicazione automatica news approvate via mail

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
  echo "commit creato per news.json aggiornato"
else
  echo "nessuna modifica a news.json"
fi
# 2) se il locale e' avanti rispetto a origin (anche per push falliti in passato), pusha
AHEAD=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo 0)
if [ "${AHEAD:-0}" -gt 0 ]; then
  if GIT_TERMINAL_PROMPT=0 git push origin HEAD; then
    echo "push OK ($AHEAD commit) -> online su Vercel"
  else
    echo "PUSH FALLITO: commit locali presenti ($AHEAD), da pushare a mano/prossimo giro"
  fi
else
  echo "niente da pushare"
fi
echo "===== [$(date)] collect fine ====="
