# Motore newsletter Ratio → contenuti sito

Legge la casella **sicuri@atparma.com** (IMAP, **sola lettura**) ed estrae gli
aggiornamenti fiscali di **Ratio / Centro Studi Castelli** per alimentare la
sezione news del sito (`/aggiornamenti-fiscali`, in arrivo) e, in futuro,
l'inoltro circolari ai clienti del portale.

## Obiettivo di business

Contenuti fiscali freschi e continui → SEO → **visite al sito**. La quotidiana
Ratio è la miniera di spunti: 18 argomenti al giorno, sempre aggiornati.

## Cosa arriva da Ratio (tassonomia)

| Categoria | Esempio subject | Frequenza | Uso |
|---|---|---|---|
| 📅 `quotidiana` | *Informazione Quotidiana 186 del 9/07/2026* | giornaliera | spunti news sito |
| 📰 `notiziario` | *Ratio Notiziario del Fisco 6/2026* | mensile | approfondimenti |
| 🟡 `aggiornamento` | *Aggiornamento mensile Giugno 2026* | mensile | circolari clienti |
| 🔵 `circolare` | circolari tematiche/speciali | periodica | carta intestata + portale |
| 🗑️ `rumore` | webinar, VideoFisco, ebook, offerte | varia | ignorato |

## Uso

```bash
cd scripts/ratio

# Elenca le ultime email Ratio classificate
python3 read_daily.py --list --limit 30

# Genera il digest dell'ultima Informazione Quotidiana
python3 read_daily.py

# Genera il digest di un messaggio specifico
python3 read_daily.py --id 628

# FASE 2 — riscrivi gli argomenti scelti in bozze news originali (Sonnet 5)
python3 rewrite.py --digest output/2026-07-09-quotidiana.json --pick 5,18

# FASE L4a — pubblica una bozza approvata nella sezione /aggiornamenti-fiscali
python3 publish.py output/bozze/2026-07-09-05-rottamazione-....md
# poi: git add lib/news.json && git commit && git push  → va online

# CIRCOLARI SPECIALI — approfondimenti lunghi in /approfondimenti
python3 circolare.py --uid 328 --list            # elenca i blocchi (1 articolo = 1 blocco)
python3 circolare.py --uid 328 --pick 1,2,12     # riscrive i blocchi scelti con Fable 5
python3 publish_circolare.py output/bozze-circolari/2026-08-19-....json \
        --in-vigore 2026-08-12 --news slug-news-collegata
# poi: git add lib/approfondimenti.json && commit && push  -> online

# FASE L3 — approvazione via mail (invio + lettura risposte)
python3 notify.py                 # DRY-RUN: compone la mail (output/anteprima-mail-approvazione.html)
python3 notify.py --send          # invia la mail di approvazione a STUDIO_MAIL_USER
python3 collect.py                # DRY-RUN: mostra le risposte [OK]/[MODIFICA] trovate
python3 collect.py --apply        # pubblica le [OK] in lib/news.json
# poi: git add lib/news.json && git commit && git push  → online
```

**Flusso completo automatizzabile:** `read_daily.py` → `rewrite.py` → `notify.py --send`
(ti arriva la mail) → premi Approva/Modifica → `collect.py --apply` (pubblica) → commit/push.
Invio via SMTP Aruba (`smtp.aruba.it:465`, credenziali `STUDIO_MAIL_*` in `~/formatemp-verifiche/.env`).

`rewrite.py` chiama Claude (modello `claude-sonnet-5`, override con `RATIO_REWRITE_MODEL`)
via `ANTHROPIC_API_KEY` (in `.env`, riusata dal portale). Produce bozze originali in
`output/bozze/` con frontmatter (titolo SEO, slug, categoria, `stato: DA_APPROVARE`)
e stima del costo. Nessuna pubblicazione: le bozze si rivedono/approvano prima.

`circolare.py` tratta le **circolari speciali** (mail classificate `circolare`):
scarica il PDF, lo spezza nei blocchi tematici, riscrive ogni blocco con Fable 5 in una
sezione originale e produce una bozza JSON in `output/bozze-circolari/`. Include un
**controllo anti-verbatim** (n-grammi di 8 parole in comune con la fonte): i PDF Ratio sono
marcati "riproduzione vietata", sul sito va solo testo riscritto con citazione delle norme.

Output in `output/` (ignorato da git):
- `AAAA-MM-GG-quotidiana.json` — dati strutturati (numero, data, argomenti[], pdf_link)
- `AAAA-MM-GG-quotidiana.md` — digest leggibile con checklist di selezione per il sito

## Credenziali

Lette da `~/formatemp-verifiche/.env` (fallback automatico) o da un `.env`
locale in questa cartella. Variabili: `IMAP_HOST`, `IMAP_PORT`,
`STUDIO_MAIL_USER`, `STUDIO_MAIL_PASS`. Vedi `.env.example`.

## Flusso previsto (a fasi)

1. **[FATTO] Motore lettura giornaliera** — questo script. Produce il digest interno.
2. **[PROSSIMO] Sezione `/aggiornamenti-fiscali`** — dal digest, selezione manuale
   → riscrittura originale AI → bozza → **tua approvazione** → pubblicazione.
3. **[DOPO] Circolari ai clienti portale** — inoltro circolari re-brandate su
   carta intestata studio. NB: i PDF Ratio stanno dietro login al portale
   `sistemaratio.it`, non nel corpo email → servirà l'accesso al portale Ratio.

## Vincoli

- ⚠️ **Copyright**: i contenuti editoriali Ratio non si ripubblicano verbatim.
  Solo spunti e riscritture originali. Le circolari personalizzabili sono
  invece licenziate da Ratio per il re-branding studio.
- 🔒 **Sola lettura**: lo script non modifica/sposta/cancella email.
- 🚫 **Nessuna pubblicazione automatica**: l'output è materiale da rivedere.
