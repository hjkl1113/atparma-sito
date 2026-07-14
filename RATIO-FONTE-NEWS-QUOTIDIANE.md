# Ratio come fonte per le news del sito (handoff per altro agente)

> Nota operativa creata il 2026-07-09. Analisi della casella `sicuri@atparma.com`
> per capire cosa arriva da Ratio (Centro Studi Castelli) e usarlo come **fonte
> per una sezione news/blog del sito atparma.com**.

## Fonte dati (come rileggere la casella)
- Casella: `sicuri@atparma.com` — **IMAP sola lettura**
- Credenziali: `~/formatemp-verifiche/.env` → `STUDIO_MAIL_USER` / `STUDIO_MAIL_PASS`, host `imap.atparma.com:993`
- Mittenti Ratio: `servizioclienti@sistemaratio.it`, `servizioclienti@gruppocastelli.com` (display "Ratio-CentroStudiCastelli" / "CentroStudiCastelli")

## Cosa arriva (finestra 13/05 → 09/07/2026, ~2 mesi: 66 mail)
**Rilevante per NEWS QUOTIDIANE del sito:**
- **Informazione Quotidiana n. NNN del gg/mm** — **cadenza giornaliera** (feriali). È la sintesi fiscale del giorno. Ultima vista: n.186 del 09/07/2026.
- **Sintesi operativa della settimana** — edizione del **sabato** della quotidiana (riepilogo settimanale).
- **Interpelli Agenzia Entrate [mese]** — **mensile** (es. "Interpelli AdE giugno 2026" il 01/07).
- **Comunicati straordinari** su provvedimenti (es. "Decreto fiscale 38/2026 convertito") — a evento.

## Idea d'uso sul sito
Alimentare una sezione **News/Aggiornamenti fiscali** con cadenza ~quotidiana/settimanale, usando l'Informazione Quotidiana come **spunto** (non copia).

## ⚠️ Vincolo copyright
I contenuti Ratio sono **protetti da diritto d'autore**: NON ripubblicare verbatim.
Usare solo come fonte/ispirazione e **riscrivere** con parole proprie, citando la
normativa di riferimento (non "fonte Ratio"). Verificare la licenza d'uso prima di
qualsiasi pubblicazione.

## Vedi anche
- Nota gemella lato portale: `portale/RATIO-CIRCOLARI-DA-INVIARE-CLIENTI.md` (le circolari periodiche da girare ai clienti).
