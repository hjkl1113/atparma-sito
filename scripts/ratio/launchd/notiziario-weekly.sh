#!/bin/bash
# Job settimanale: genera il notiziario AUDIO della settimana dalle news
# pubblicate (ultimi 7 giorni di lib/news.json), poi commit + push cosi' il
# player sul sito riproduce il recap nuovo. Voce edge-tts IsabellaNeural a -15%
# (default gia' in audio.py). Serve /opt/homebrew/bin per ffmpeg/edge-tts.
set -o pipefail
RATIO="/Users/alessandrosicuri/Desktop/studio at/sito/scripts/ratio"
REPO="/Users/alessandrosicuri/Desktop/studio at/sito"
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

echo "===== [$(date)] notiziario settimanale avvio ====="
cd "$RATIO" || exit 1
python3 audio.py --days 7 || { echo "audio.py errore"; exit 1; }

cd "$REPO" || exit 1
if git diff --quiet -- public/notiziario/latest.m4a lib/notiziario.json; then
  echo "nessuna variazione al notiziario"
else
  git add public/notiziario/latest.m4a lib/notiziario.json
  git commit -q -m "feat(notiziario): recap audio settimanale automatico

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
  echo "commit creato"
fi
AHEAD=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo 0)
if [ "${AHEAD:-0}" -gt 0 ]; then
  if GIT_TERMINAL_PROMPT=0 git push origin HEAD; then
    echo "push OK ($AHEAD commit) -> notiziario live sul sito"
  else
    echo "PUSH FALLITO: commit locale presente ($AHEAD), da pushare a mano/prossimo giro"
  fi
else
  echo "niente da pushare"
fi
echo "===== [$(date)] notiziario settimanale fine ====="
