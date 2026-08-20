# Architettura — Ratio → News sito + Circolari clienti

> Documento master. Unifica e supera le due note di handoff:
> `sito/RATIO-FONTE-NEWS-QUOTIDIANE.md` e `portale/RATIO-CIRCOLARI-DA-INVIARE-CLIENTI.md`.
> Creato 2026-07-09. Stato: **DESIGN — da approvare prima di implementare le fasi 2+**.

## 1. Obiettivo

Trasformare il flusso editoriale **Ratio / Centro Studi Castelli** che arriva ogni
giorno su `sicuri@atparma.com` in due prodotti:

- **A) News pubbliche sul sito** (`/aggiornamenti-fiscali`) → contenuti fiscali
  freschi e continui → **SEO → visite** (obiettivo dichiarato: far crescere il traffico).
- **B) Circolari ai clienti del portale** → valore percepito, retention, upsell.

Principi trasversali: **human-in-the-loop** (niente pubblicazione/invio automatico),
**copyright-safe** (mai verbatim sul pubblico), **una sola fonte tecnica condivisa**.

## 2. Architettura a strati

```
                 ┌──────────────────────────────────────────────┐
   L0  FONTE      │  Casella sicuri@atparma.com  (IMAP sola lettura) │
                 └───────────────────────┬──────────────────────┘
                                         │
                 ┌───────────────────────▼──────────────────────┐
   L1  INGESTION │  Motore Ratio condiviso  (scripts/ratio/)      │  ✅ Fase 1 FATTA
       CORE      │  - legge, classifica (quotidiana/notiziario/    │
                 │    aggiornamento/circolare/rumore)              │
                 │  - estrae indice argomenti + link PDF           │
                 │  - output: feed strutturato JSON/MD             │
                 └───────────┬───────────────────────┬───────────┘
                             │                       │
              spunti news    │                       │  circolari periodiche
              (quotidiana)   │                       │  (notiziario/aggiornamento/interpelli)
                 ┌───────────▼──────────┐   ┌────────▼─────────────┐
   L2 RISCRITTURA│ Riscrittura AI news  │   │ Trattamento circolare │
      COPYRIGHT  │ (originale, cita      │   │ - se licenza Ratio    │
                 │  normativa non Ratio) │   │   redistributiva → OK │
                 │                       │   │ - altrimenti riscrivi │
                 └───────────┬──────────┘   └────────┬─────────────┘
                             │                       │
                 ┌───────────▼──────────────────────▼───────────┐
   L3  REVIEW     │  Gate di revisione umana (bozza → APPROVI tu)  │
       GATE       └───────────┬──────────────────────┬───────────┘
                             │                       │
        ┌──────────────────┼──────────────────────┐
        ▼                  ▼                      ▼
   ┌─────────┐      ┌─────────────┐      ┌────────────────┐
   │ SITO    │      │ META        │      │ PORTALE         │  L4
   │ /aggior-│      │ post FB/IG  │      │ circolari→clienti│
   │ namenti-│      │ quotidiani  │      │ via Brevo, segm. │
   │ fiscali │      │ (n8n esist.)│      │                  │
   └─────────┘      └─────────────┘      └────────────────┘
   SEO/traffico     awareness/social     retention/valore
```

## 3. Componenti nel dettaglio

### L1 — Motore Ratio condiviso  ✅ FATTO (Fase 1)
`sito/scripts/ratio/` — Python, gira sul Mac, IMAP sola lettura.
- `lib_ratio.py`: connessione, classificazione, parsing quotidiana (indice + PDF base64).
- `read_daily.py`: CLI (`--list`, `--id`, default ultima quotidiana) → digest JSON+MD in `output/`.
- **Perché condiviso**: sia il sito (news) sia il portale (circolari) leggono la stessa
  casella e la stessa tassonomia. Un solo punto di lettura evita doppioni e disallineamenti.

### L2 — Riscrittura AI / layer copyright
Trasforma gli **spunti** Ratio in contenuto **originale**.
- Input: item selezionati dal digest (titolo argomento + eventuale PDF).
- Motore: Claude via Anthropic API (chiave già usata altrove nei progetti).
- Output news sito: titolo SEO, sommario, corpo originale, **riferimenti normativi reali**
  (es. "art. X D.Lgs. Y"), MAI "fonte: Ratio".
- Output circolare portale: vedi §5 (dipende dalla licenza).

### L3 — Gate di revisione umana  →  **approvazione via mail** (scelta utente)
Nessuna pubblicazione/invio senza tua approvazione. Meccanismo scelto: **email**.
- Il motore genera le bozze (news / post / circolare) e te le **manda in una mail**
  a `sicuri@atparma.com` (una mail-digest con le proposte del giorno/settimana).
- **Tu rispondi dalla tua casella**: "OK 1,3,5" / "no il 2" / correzioni inline.
- Il motore rilegge la tua risposta via IMAP (già sa leggere la casella) e manda
  a L4 solo gli item approvati.
- **Perché funziona per te**: vivi in mail, zero nuove interfacce, approvi dal telefono.
- Regola di sicurezza: un item non passa a L4 finché non c'è una risposta esplicita
  di approvazione (default = non pubblicare).

### L4a-bis — Publisher sito `/approfondimenti`  ✅ FATTO (20.08.2026)
- Sezione parallela alle news brevi, per i contenuti **lunghi**: una circolare speciale o
  un decreto spiegato per intero, articolo per articolo.
- Dati: `lib/approfondimenti.json` + `lib/approfondimenti.ts`. Ogni voce ha `sezioni[]`
  (id-ancora, titolo, corpoHtml, chiRiguarda, decorrenza, riferimento) → l'indice interno
  e le etichette "decorrenza / chi riguarda" si generano da soli.
- Motore: `scripts/ratio/circolare.py` (Fable 5) → bozza in `output/bozze-circolari/` →
  revisione → `publish_circolare.py` → commit/push.
- **Copyright**: i PDF Ratio sono marcati "riproduzione vietata". Il PDF resta in locale,
  online va solo testo riscritto; lo script fa un controllo anti-verbatim a n-grammi (8 parole).
- Cross-link: `newsCollegate[]` collega l'approfondimento alle news brevi nate dallo stesso
  provvedimento; la pagina news mostra il link inverso.

### L4a — Publisher sito `/aggiornamenti-fiscali`
- Nuova sezione Next.js, separata dal blog delle guide lunghe.
- Dati: `lib/news.ts` (array tipizzato, come `lib/articoli.ts`) → pagina indice + pagina singola.
- **Entra in sitemap automaticamente** (la sitemap è già dinamica dopo il fix di oggi).
- News breve = parole chiave a coda lunga, contenuto datato, freschezza → segnale SEO.

### L4b — Dispatcher circolari portale
- Aggancio a `portale/PIANO-NOTIFICHE.md` (catalogo eventi/canali) — **non** creare logiche a parte.
- Invio via **Brevo bulk**, segmentato per `ClientCategory`.
- Mapping proposto (dall'analisi altro agente):
  | Circolare | A chi |
  |---|---|
  | Notiziario del Fisco | tutti i clienti |
  | Aggiornamento mensile | tutti |
  | Interpelli AdE | clienti evoluti (PMI/professionisti) |
  | Sintesi settimanale | opzionale, versione light |

### L4c — Publisher Meta (post quotidiani FB/IG)
- Dalla quotidiana → 1 post breve al giorno ("aggiornamento fiscale del giorno"):
  gancio + micro-spiegazione + CTA verso il sito (link a `/aggiornamenti-fiscali`
  o al servizio pertinente) → **social porta traffico al sito**.
- **Riusa l'infra esistente**: `sito/scripts/n8n/` ha già il workflow FB publisher con
  approval gate via Telegram + le creative ads (vedi `HANDOFF.md`). Qui l'approvazione
  passa dallo stesso gate mail di L3.
- Formato: immagine template (brand AT Parma) + testo riscritto originale. Niente testo Ratio verbatim.

## 4. Tassonomia email Ratio (fonte per il routing)

| Categoria | Esempio | Cadenza | Destinazione |
|---|---|---|---|
| 📅 quotidiana | Informazione Quotidiana 186 | giornaliera | → spunti news SITO |
| 📅 sintesi settimanale | ed. del sabato | settimanale | → news SITO / circolare light |
| 📰 notiziario del fisco | Notiziario 6/2026 | mensile | → circolare PORTALE |
| 🟡 aggiornamento mensile | Aggiornamento Giugno | mensile | → circolare PORTALE |
| 🔵 interpelli / comunicati | Interpelli AdE, Decreto 38/2026 | mensile/evento | → circolare PORTALE (evoluti) |
| 🗑️ rumore | webinar, VideoFisco, promo | varia | ignorato |

## 5. ⚠️ Copyright / licenza — DECISIONE CRITICA (blocca la fase portale)

I contenuti Ratio sono protetti. Due destinazioni, due regimi:

- **SITO (pubblico)** → **sempre riscrittura originale**. Nessuna ambiguità: il pubblico
  non si alimenta con testo Ratio verbatim. Si citano le norme, non "Ratio".
- **PORTALE (ai clienti)** → dipende dall'abbonamento:
  - Ratio vende un prodotto **"circolari per il cliente" personalizzabili su carta
    intestata** — *se* l'abbonamento dello studio lo include, la redistribuzione
    (anche verbatim, rebrandizzata) è **licenziata e lecita**.
  - Se l'abbonamento NON include quel prodotto → **riscrivere** in circolari proprie.

➡️ **Azione richiesta (tua)**: verificare cosa include l'abbonamento Ratio dello studio.
Da questa risposta dipende se la fase portale è "inoltro rebrandizzato" (semplice) o
"riscrittura" (come il sito).

**Verifica empirica 2026-07-09 — LICENZA RISOLTA ✅**
Il **Notiziario del Fisco** (mensile, da `servizioclienti@sistemaratio.it`) dichiara
nel corpo mail: *"È fornita in formato editabile (**Word** e Pdf) per l'invio
personalizzato anche parziale ai **Tuoi clienti**."* → **la redistribuzione ai clienti
è esplicitamente licenziata** (è lo scopo del prodotto).
- Ogni mail Notiziario contiene i link: **"Scarica versione Word"**, "Scarica versione Pdf",
  "Scarica **Guida all'invio**", + una **"versione breve" già pronta per l'invio**.
- I file si scaricano **direttamente dal link, SENZA login** (testato: Word =
  `application/msword` 6,25 MB; Guida = PDF; tutti HTTP 200). → **automatizzabile**.
- I link hanno forma `https://www.sistemaratio.it/docs/attachment/<id>` (l'`<id>` è nel
  parametro base64 `l=` del track-link `track.ratio.it`).
- Distinzione confermata: la **Informazione Quotidiana** è d'autore (solo spunti, →
  riscrittura sito); il **Notiziario del Fisco** è il prodotto *redistribuibile ai clienti*.

Conclusione: **Fase 4 (portale) SBLOCCATA** per il Notiziario del Fisco. Flusso:
scarica Word → carta intestata AT Parma (o versione breve) → invio segmentato clienti.
Restano da verificare le stesse condizioni per Aggiornamento mensile / Interpelli.

## 6. Dove gira cosa

| Strato | Dove | Note |
|---|---|---|
| L1 lettura IMAP | Mac (Python) | serverless IMAP scomodo; Mac ok per iniziare |
| L2 riscrittura AI | Mac (Python + Anthropic API) | on-demand, a comando |
| L3 revisione | Mac (file Markdown) | tu approvi |
| L4a sito | repo `atparma-sito` → Vercel | commit degli item approvati |
| L4b portale | repo `studio-atparma` → Brevo | invio segmentato |

Evoluzione futura (opzionale): spostare L1+L2 su un cron (Vercel/n8n) quando il flusso
è rodato e la licenza è chiarita. Per ora **Mac + gate umano**.

## 7. Piano contenuti SITO — cosa / frequenza / dove / come

- **COSA**: news fiscali brevi (300-500 parole) rilevanti per il pubblico dello studio,
  filtrate dalla quotidiana Ratio per pertinenza. 3 filoni: *privati/730-cripto*,
  *P.IVA/forfettari*, *imprese/crisi*. Scartare il tecnicismo puro (Pex, rappresentante
  fiscale…) che non interessa il target del sito.
- **FREQUENZA (Ibrido, scelta utente)**: 2-3 news brevi veloci in settimana +
  1 approfondimento settimanale più curato. Costanza > volume.
- **DOVE**: sezione dedicata `/aggiornamenti-fiscali` (feed, separata dal blog guide) +
  box "Ultimi aggiornamenti" in home per dare visibilità e link interni (SEO).
- **COME**: digest Ratio → riscrittura AI originale → **bozza via mail** → tua
  approvazione → commit/pubblicazione → entra in sitemap in automatico.

## 8. Roadmap a fasi

- **Fase 1 — Motore lettura** ✅ FATTO (`scripts/ratio/`, commit `0cb8914`).
- **Fase 1.5 — SEO foundation** ✅ FATTO oggi (sitemap dinamica, commit `cec15f0`).
- **Fase 2 — Riscrittura + bozze news via mail** (L2+L3): dal digest, genera bozze news
  originali e le manda in mail per approvazione. *Prossimo passo (scelta utente).*
- **Fase 3 — Sezione `/aggiornamenti-fiscali`** (L4a): pagine + `lib/news.ts` + pubblicazione.
- **Fase 4 — Circolari portale** (L4b): **SBLOCCATA** (licenza confermata §5 per il
  Notiziario del Fisco). Flusso: motore scarica il Word → carta intestata AT Parma (o
  "versione breve") → mapping segmenti `ClientCategory` → invio Brevo + aggancio PIANO-NOTIFICHE.
- **Fase 5 — Contenuti quotidiani Meta** (L4c): post FB/IG dalla quotidiana, riusando
  `scripts/n8n/` + creative esistenti. Approvazione dallo stesso gate mail.

## 9. Decisioni

1. ✅ **Cadenza sito**: Ibrido (news veloci + approfondimento settimanale).
2. ✅ **Sezione**: `/aggiornamenti-fiscali` separata dal blog.
3. ✅ **Approvazione**: via mail (rispondi dalla casella).
4. ✅ **Prossima fase**: Fase 2 (riscrittura + bozze news).
5. ✅ **Licenza Ratio** (§5): il Notiziario del Fisco è licenziato per l'invio ai clienti
   (Word editabile scaricabile senza login). Fase 4 sbloccata.
6. ⏳ **Riscrittura**: Claude via Anthropic API — confermare chiave e tono
   (divulgativo per privati / tecnico per imprese).
7. ⏳ **Meta** (Fase 5): confermare quando partire e se un post/giorno o meno.

## Vedi anche
- `sito/scripts/ratio/README.md` — uso del motore.
- `portale/RATIO-CIRCOLARI-DA-INVIARE-CLIENTI.md` — dettaglio circolari + aggancio portale.
- `portale/PIANO-NOTIFICHE.md` — catalogo eventi/canali per L4b.
