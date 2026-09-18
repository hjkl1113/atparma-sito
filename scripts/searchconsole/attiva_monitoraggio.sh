#!/bin/bash
# Accende i due job di monitoraggio Search Console.
# Da lanciare DOPO aver completato CONFIGURAZIONE.md.
set -u
QUI="$(cd "$(dirname "$0")" && pwd)"
LA="$HOME/Library/LaunchAgents"

echo "Verifico che la configurazione sia a posto..."
if ! /usr/bin/python3 "$QUI/monitor.py" --modo settimanale >/dev/null 2>&1; then
  echo
  echo "La prova non e' riuscita. Lancia prima:"
  echo "    python3 \"$QUI/monitor.py\" --modo settimanale"
  echo "e risolvi quello che segnala (di solito: chiave mancante o 403)."
  echo "Istruzioni in $QUI/CONFIGURAZIONE.md"
  exit 1
fi
echo "  configurazione OK."

mkdir -p "$LA"
cat > "$LA/com.atparma.searchconsole.settimanale.plist" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>com.atparma.searchconsole.settimanale</string>
  <key>ProgramArguments</key><array>
    <string>/usr/bin/python3</string><string>$QUI/monitor.py</string>
    <string>--modo</string><string>settimanale</string><string>--send</string>
  </array>
  <key>StartCalendarInterval</key><dict>
    <key>Weekday</key><integer>1</integer><key>Hour</key><integer>8</integer><key>Minute</key><integer>45</integer>
  </dict>
  <key>StandardOutPath</key><string>$QUI/settimanale.out</string>
  <key>StandardErrorPath</key><string>$QUI/settimanale.err</string>
</dict></plist>
PLIST

cat > "$LA/com.atparma.searchconsole.giornaliero.plist" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>com.atparma.searchconsole.giornaliero</string>
  <key>ProgramArguments</key><array>
    <string>/usr/bin/python3</string><string>$QUI/monitor.py</string>
    <string>--modo</string><string>giornaliero</string><string>--send</string>
  </array>
  <key>StartCalendarInterval</key><array>
    <dict><key>Weekday</key><integer>2</integer><key>Hour</key><integer>8</integer><key>Minute</key><integer>45</integer></dict>
    <dict><key>Weekday</key><integer>3</integer><key>Hour</key><integer>8</integer><key>Minute</key><integer>45</integer></dict>
    <dict><key>Weekday</key><integer>4</integer><key>Hour</key><integer>8</integer><key>Minute</key><integer>45</integer></dict>
    <dict><key>Weekday</key><integer>5</integer><key>Hour</key><integer>8</integer><key>Minute</key><integer>45</integer></dict>
  </array>
  <key>StandardOutPath</key><string>$QUI/giornaliero.out</string>
  <key>StandardErrorPath</key><string>$QUI/giornaliero.err</string>
</dict></plist>
PLIST

for L in com.atparma.searchconsole.settimanale com.atparma.searchconsole.giornaliero; do
  launchctl unload "$LA/$L.plist" 2>/dev/null
  launchctl load  "$LA/$L.plist" && echo "  acceso: $L"
done
echo
echo "Fatto. Lunedi' alle 08:45 arriva il primo report."
echo "Per spegnerli: launchctl unload ~/Library/LaunchAgents/com.atparma.searchconsole.*.plist"
