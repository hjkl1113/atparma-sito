# 📌 Note sessione 27/04/2026 — passaggio Windows → Mac

> File temporaneo cross-PC. Eliminare a sessione chiusa.
> Stato consolidato della sessione 26/04 sera: refactor OG sito + email "Benvenuto" portale + audit Vercel + Turnstile live + setup Google/Meta avviato.

## Stato repo a fine 26/04

**atparma-sito** (`origin/main` HEAD `001cf6b`): working tree pulito.
**studio-atparma** (`origin/main` + `gitlab/main` HEAD `2e7fc14`): working tree pulito.

Su Mac: `git pull` su entrambi e si parte già allineati.

## 🎯 Priorità sessione mattina 27/04 — sessione visiva unica (~2 ore)

Obiettivo: chiudere TUTTI gli asset Google + Meta in un colpo riusando la stessa uscita per foto/video.

### 1. 🎥 Video verifica Google Business Profile (30 sec, 9:16)

Una sola ripresa continua, no audio, no tagli, no zoom:

- **0-5s** — esterno: insegna "A.T. Consulting Parma" + civico Borgo Riccio 5 visibile
- **5-10s** — porta d'ingresso, apertura, entrata
- **10-18s** — interno: scrivanie, ambiente lavoro (no clienti riconoscibili)
- **18-25s** — close-up: targa professionale dottore commercialista o monitor con software fiscale (GIS Ranocchi)
- **25-30s** — persona (te o staff) si siede e inizia a lavorare al pc

Carica da `business.google.com` (sezione Foto) o app Google Maps. Approvazione Google 3-5 gg.

### 2. 📸 Sessione foto studio (5-6 scatti cross-canale)

Stessa uscita del video, scatta:

- Insegna esterna + civico (per FB cover + GBP)
- Ingresso porta principale
- Interno: scrivanie, ambiente lavoro (no clienti riconoscibili)
- Targa professionale o monitor con software fiscale (autorevolezza)
- Foto staff (te + Aldo Ponzi + Pietro Franzosi se disponibili) — anche per la futura Pagina Team del sito

### 3. 🎨 Logo + copertina FB — Claude genera asset coerenti col brand sito

Riusa il template OG `app/og/route.tsx` (palette navy → blue):

- **Logo PNG 1080×1080** → FB profile pic + GBP profile + favicon HD
- **Copertina FB 1640×856** → gradient navy + claim "Dottori commercialisti iscritti all'Albo · risposta 24h"

Generazione via nuova route `app/og-asset/route.tsx` o estensione di `app/og/route.tsx` con slug `logo-square` / `cover-fb`. ~10-15 min.

### 4. ⬆️ Upload asset

- **FB Page**: profile pic (logo) + cover + Foto sezione (5-6 foto studio)
- **GBP**: foto (stesse foto) + video verifica (punto 1)
- **Sito**: aggiornare `app/layout.tsx` JSON-LD `image:` e `logo:` da `/images/parma-duomo-aerial.jpg` a nuovo logo (oggi sono entrambi il Duomo, sbagliato per schema.org)

### 5. ⏰ Sbloccare orari FB Page

Probabilmente serve "Pubblica pagina" prima. A pagina pubblica, aggiungi `Lun-Ven 09:00-18:00`.

### 6. 🔵 Setup Meta Business Manager separato per AT Parma

`business.facebook.com` → "Crea nuovo Business Manager":

- Nome: `A.T. Consulting Parma`
- P.IVA `02794450342`
- Aggiungi Pagina FB appena creata + dominio `atparma.com` (verifica DNS TXT su Aruba)
- Crea Meta Pixel "AT Parma Site" → prendi Pixel ID → passalo a Claude
- **NON aggiungere asset AT al BM ZenPaw e viceversa** (separazione fiscale + asset)

### 7. 📍 Claude integra Meta Pixel nel sito (5 min)

Appena ha Pixel ID, Claude aggiunge nel layout sito (gated dietro consent come Vercel Analytics).

## Stato Google attuale (26/04 sera)

- ✅ **Search Console** verificato (meta tag `tnet8EIZX4RXI4SWgdLc6OGSOQOV-0UrOgADZNYOYgg` in `app/layout.tsx`)
- ⏳ **GBP** "AT Consulting Parma" pending verifica video
- ❌ Vecchia pagina FB "AT Studio Professionale" eliminata (irrecuperabile)
- 🟡 Nuova pagina FB "A.T. Consulting Parma" creata 80% (mancano logo, copertina, orari, foto)
- ⏳ Meta BM AT Parma da creare separato

Account proprietario: Gmail personale di Alessandro (`alessandro.sicuri@gmail.com` — verificare spelling esatta). `segreteria@atparma.com` come account Google è bloccato Workspace, non utilizzabile finché non si fa recovery o si crea `studioatparma@gmail.com` (in creazione, sospeso a "Conferma impostazioni").

## Backlog post-sessione visiva

- Aspettare 3-5 gg approvazione GBP → profilo visibile su Google Maps
- **Pagina Team sito** (1-2 ore) — usa le foto staff scattate al punto 2
- Sblocco/finalizzazione account Gmail operativo per staff
- Aggiungere Manager su GBP + FB Page (staff + secondary admin redundancy)
- Cleanup Vercel: disconnettere git da `portale`, `studio-atparma`, `zenpaw-sito` (3 progetti dupli)
- Wave 1 PIANO-NOTIFICHE portale (sessione dedicata, parecchie ore)
- Sitemap dinamico sito (5 min, low-priority — non block-ship per indicizzazione)
- Author bio + JSON-LD Person sotto articoli blog (E-E-A-T per ranking YMYL fiscale)

## Decisione strategica 26/04 sera — automazioni SaaS

**n8n.atparma.com → DORMIENTE.** Era nel vecchio progetto, oggi nessun workflow live. Decisione: lo tengo come istanza riservata a futuro AI batch (Ollama+Qwen per digest normativi / classificazione documenti), non più nel critical path.

**Stack PROFESSIO SaaS = code-first sul portale Next.js già esistente:**
- Vercel Cron (workflow schedulati) + Server Actions (event-driven) + Webhook handlers
- Inngest se servirà durable workflow (OCR batch, email massa) — non urgente
- Multi-tenancy già risolta da Prisma `studioId` filter

**Niente migration n8n→code da fare.** Quando arriva il 2° cliente PROFESSIO il code è già pronto.

Razionale completo nella memory `project_automation_strategy.md` (su Mac non accessibile, le memory sono machine-local — questa nota duplica le decisioni chiave per riferimento cross-PC).

## Riferimenti

- Sito: `app/og/route.tsx` (template OG da riusare per logo/copertina)
- Sito: `app/layout.tsx` JSON-LD AccountingService (da correggere image/logo)
- Portale: nessun lavoro pending stasera, working tree clean
- Portale: cron Vercel attivi `/api/cron/reminders`, `/api/cron/quote-expiry` (più 2 da verificare)

---

**A sessione chiusa:** elimina questo file con `rm docs/note-sessione-27-04.md && git add . && git commit -m "chore: rimuovo note sessione 27/04"`.
