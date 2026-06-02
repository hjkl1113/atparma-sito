# Automazione post Facebook — A.T. Consulting Parma

Workflow n8n per pubblicazione mirata su Facebook (e Instagram, opzionale) con
**approval gate via Telegram bot** e **3 audience target**:

- **Privati** (consumatori, lavoratori dipendenti) → 730, sovraindebitamento, detrazioni
- **PMI / Imprenditori** → composizione negoziata, bilanci, crisi impresa, M&A
- **Artigiani / Commercianti** → apertura P.IVA artigiano, contabilità, scadenze

## Architettura

```
Google Sheets (calendario editoriale)
        ↓
   [Cron n8n 09:00]
        ↓
   Read row WHERE data=oggi AND status=pronto
        ↓
   AI Claude rewrite (prompt specifico per target)
        ↓
   Telegram bot → preview + [Pubblica/Salta] buttons
        ↓
   (se Pubblica) → POST graph.facebook.com/{page-id}/feed
        ↓
   Update sheet status=pubblicato + post_id
        ↓
   (24h dopo) → fetch engagement metrics → update sheet
```

## Prerequisiti — ordine critico

**Vanno completati nell'ordine sotto, prima di importare il workflow.**

### 1. ~~Conversione profilo professionale → Pagina Facebook classica~~ — non più necessaria

**Aggiornato 2026-05-29**: l'analisi ha verificato che le Graph API funzionano
direttamente sul profilo in modalità professionale (ID `61588678684920`) per i
nostri use case (pubblicazione post, reach metrics, comments). La conversione a
Pagina classica non è richiesta. Si salta direttamente a Meta App + token.

### 2. Meta App registrata su Meta for Developers

- Vai su `https://developers.facebook.com/apps/`
- Crea nuova app → Tipo "Business"
- Nome app: `AT Parma Social Automation` (o simile)
- Aggiungi prodotto **Facebook Login for Business** + **Pages API**

### 3. App in modalità Live + Business Verification

L'App parte in modalità Development (solo admin può usarla). Per pubblicare ad
altri serve:

- App Dashboard → Settings → Basic → switch a **Live**
- Avvia la **Business Verification** della tua azienda (documenti studio, p.iva)
- Tempi Meta: 3-7 giorni di review

### 4. Permessi App (richiesti via App Review)

Vai su App Dashboard → App Review → Permissions and Features → richiedi:

- `pages_manage_posts` — pubblicare post sulla pagina
- `pages_show_list` — leggere lista pagine gestite
- `pages_read_engagement` — leggere metriche post pubblicati
- `pages_read_user_content` — leggere contenuti pagina (opzionale)

Meta chiede un video screencast + descrizione d'uso. Approval: 3-5 giorni.

### 5. Generazione Page Access Token long-lived

Dopo che i permessi sono approvati:

```bash
# Passo A: scarica User Access Token (short-lived, 1h)
# Da Graph API Explorer: https://developers.facebook.com/tools/explorer/
# Seleziona la tua App, richiedi permessi pages_manage_posts, pages_show_list

# Passo B: converti in long-lived (60 giorni)
curl -X GET "https://graph.facebook.com/v18.0/oauth/access_token?\
grant_type=fb_exchange_token&\
client_id={APP_ID}&\
client_secret={APP_SECRET}&\
fb_exchange_token={SHORT_LIVED_USER_TOKEN}"

# Passo C: estrai Page Access Token long-lived
curl -X GET "https://graph.facebook.com/v18.0/me/accounts?access_token={LONG_LIVED_USER_TOKEN}"
# Nella risposta, copia `access_token` della tua Pagina AT Parma
# QUESTO è il token che usa n8n. Dura 60 giorni; va rinnovato.
```

Conserva il token in n8n come **Credential** (mai in plain text in workflow).

### 6. ✅ Telegram Bot per approval gate — FATTO 2026-06-02

Bot Telegram creato via `@BotFather`. Token + Chat ID salvati in
`.env.local` (mai committato). Vanno trasferiti nelle credentials di n8n
quando il workflow si attiva.

### 7. ✅ Google Sheets — calendario editoriale — FATTO 2026-06-02

Foglio "AT Parma — Calendario Social" creato e popolato dall'import
del CSV `scripts/n8n/calendario-social-seed.csv` (30 righe: 9 setup post
+ 21 post Mac plan 8 settimane). Schema completo in
`calendario-template.md`. URL del foglio NON committato (solo in
`.env.local` quando configureremo n8n).

Pre-import 3 setup manuali consigliati: convalida dati col B (`privati,pmi,artigiani`), convalida dati col H (`bozza,pronto,pubblicato,saltato,manuale`), blocco riga 1.

In sintesi:
- 1 riga = 1 post programmato
- Colonne chiave: `data`, `target`, `topic`, `articolo_url`, `bozza`, `status`, `post_id`, `reach_24h`, `engagement_24h`

Condividi il foglio con la **service account Google** che n8n usa (vedi sotto).

### 8. n8n attivo su n8n.atparma.com

Verificare che sia raggiungibile e funzionante. Credenziali admin necessarie.

In n8n configurare le **Credentials**:
- `Facebook Graph API` → Page Access Token (passo 5)
- `Telegram` → Bot Token (passo 6)
- `Google Sheets` → Service Account JSON (per leggere/scrivere il foglio)
- `Anthropic` → API key (per AI rewrite)

## Import del workflow

1. Apri n8n.atparma.com
2. Workflows → Import from File → seleziona `workflow-publisher.json`
3. Per ogni nodo che usa una credenziale, riassegna alla credenziale che hai
   configurato (n8n NON importa le credenziali per sicurezza)
4. Compila i 4 placeholder marcati `__TO_FILL__` nei parametri dei nodi:
   - `__SHEET_ID__` → ID del Google Sheet calendario
   - `__TELEGRAM_CHAT_ID__` → tuo chat ID Telegram
   - `__FB_PAGE_ID__` → ID della Pagina FB (formato `1234567890`)
   - `__SITE_URL__` → `https://www.atparma.com` (probabilmente già giusto)

## Test del workflow

1. Aggiungi una riga nel Google Sheet con `data` = oggi e `status` = `pronto`
2. In n8n apri il workflow → click su "Execute Workflow" (test manuale)
3. Verifica che:
   - n8n legga la riga
   - Claude generi il post draft
   - Ricevi il preview via Telegram
   - I pulsanti [Pubblica] / [Salta] funzionano
   - Il post finale appare sulla Pagina FB

Solo dopo test positivo, attivare il workflow per esecuzione automatica
(toggle "Active" in alto a destra).

## Cadenza consigliata

Per cominciare: **3 post / settimana**, uno per ogni target.

| Giorno | Target | Tono | Topic tipici |
|---|---|---|---|
| Lunedì | Privati | Colloquiale, prezzo evidente | 730, detrazioni, scadenze IRPEF |
| Mercoledì | PMI | Professionale, normativa | Composizione negoziata, bilanci, crisi |
| Venerdì | Artigiani | Concreto, numeri precisi | P.IVA artigiano, contabilità, INPS |

Cadenza scalabile a 4-5 post/settimana dopo 6-8 settimane di test.

## Manutenzione

- **Ogni 60 giorni**: rinnovare il Page Access Token (genera nuovo da Graph API
  Explorer, aggiorna credential n8n)
- **Ogni settimana**: riempire il calendario Google Sheets con i post della
  settimana successiva
- **Ogni mese**: revisione metriche reach/engagement nello sheet, identificare
  topic vincenti, aggiustare prompt AI

## Rollback / disattivazione

- Disattivare workflow: toggle "Active" → off in n8n
- Revocare token: Meta for Developers → App → Settings → invalidate tokens
- Cancellare bot Telegram: `@BotFather` → `/deletebot`

## Estensioni future

Non in questo setup iniziale, ma considerabili:

- **Cross-posting Instagram**: aggiungere nodo Instagram Graph API parallelo a
  quello FB. Usa Business Account IG collegato alla Pagina FB.
- **LinkedIn**: nodo LinkedIn Marketing API (richiede LinkedIn App separata).
- **Auto-fetch metriche 24h dopo**: secondo workflow con cron che legge le
  righe `pubblicato` con timestamp <24h fa, chiama Graph API per metriche, scrive
  reach/engagement nello sheet.
- **AI rewrite più sofisticata**: prompt template per target con esempi few-shot,
  variazione tono in base a giorno della settimana, A/B testing automatico.
- **Trigger da nuovo articolo blog**: aggiungere workflow alternativo che ascolta
  RSS di atparma.com/blog e crea automaticamente bozze quando esce un articolo.
