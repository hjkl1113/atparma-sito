# Handoff

Ultimo aggiornamento: `2026-04-13 19:48`

## Leggere Per Prime

1. `REPORT.md`
2. `HANDOFF.md`
3. `CLAUDE.md`

## Stato Attuale

- Repo sito pubblico `www.atparma.com`
- Stack: Next.js 16, React 19, Stripe, PayPal, Vercel Blob, Brevo
- Pagamenti scelti: `Stripe + PayPal`
- Nessun nuovo flusso WooCommerce da introdurre

## Cosa E' Gia' Sistemato

1. Checkout Stripe raccoglie dati minimi: nome, email, CF/P.IVA
2. Webhook Stripe verifica `STRIPE_WEBHOOK_SECRET`
3. Notifica PayPal verifica l'ordine server-side via API prima di inviare email
4. Lint e build del sito risultano OK
5. Report progetto aggiornato alla versione `1.0`

## Cosa Manca Ancora

1. Configurazione env live su Vercel:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `PAYPAL_CLIENT_ID`
   - `PAYPAL_CLIENT_SECRET`
2. Collegamento automatico ai record del portale/Fase L
3. Prezzi finali catalogo
4. Switchover completo dominio `www.atparma.com`

## Regola Per Evitare Sovrapposizioni

Prima di iniziare su un altro PC:

1. fai `git pull` su `main`
2. apri `REPORT.md` e `HANDOFF.md`
3. verifica che il worktree sia pulito con `git status --short --branch`
4. non partire da note vecchie che parlano di auto-creazione account gia' pronta: non e' ancora chiusa lato portale

## Collegamento Con Il Portale

Il sito e il portale devono convergere su questa architettura comune:

1. `Stripe` primario
2. `PayPal` secondario
3. `pending_product_unlocks` e `commerce_webhook_events` nel portale come foundation
4. niente WooCommerce nel nuovo flusso

## Dipendenze Portale — Bundle P.IVA Professionista Forfettario

Il tab sito `/servizi/piva-professionista` ora redirige al portale per l'onboarding del bundle €449 primo anno, portale-first. Nessun vincolo triennale imposto: mandato annuale default (rinnovo tacito, disdetta 60gg via PEC) oppure triennale opzionale con prezzo bloccato €449 per 3 anni come incentivo fedeltà.

Nel repo portale serve:

1. Endpoint `/onboarding/piva-professionista-forfettario` con workflow stateful 7-step (iscrizione → consulenza → scelta mandato annuale/triennale → pagamento → apertura → gestione → rinnovo)
2. Due template PDF mandato professionale forfettario: annuale + triennale con clausola price-lock €449
3. Firma elettronica remota (Namirial/Aruba) sul mandato scelto
4. Stripe checkout "€449 primo anno" con `metadata.durata=annuale|triennale` e `metadata.service=piva-professionista-forfettario`
5. Cron rinnovo: su piano annuale fattura €449 + eventuale aggiornamento listino con preavviso 60gg; su piano triennale fattura €449 bloccata. Entrambi con controllo volumi fatture: se >20 → alert per preventivo maggiorato prima del rinnovo
6. Integrazione EFAT Ranocchi: onboarding automatico (anagrafica, logo, SDI) post-firma mandato. Cliente fattura direttamente da EFAT (self-serve) salvo attivi l'add-on fatturazione assistita
7. Archivio documenti 10 anni nel portale + scadenzario contabile popolato automaticamente
8. **Add-on fatturazione assistita (+€99/anno)**: UI nel portale per creare proforma (cliente, articoli, aliquote, bolli) → output PDF + XML FatturaPA → notifica alla segreteria → segreteria rivede e invia allo SdI via EFAT (flusso semi-manuale MVP, stimato 30-60s per fattura). Fino a 20 fatture/anno incluse nell'add-on, oltre preventivo. Opt-in dal portale, pagamento contestuale al rinnovo bundle
9. **Da verificare con Ranocchi prima di go-live portale**: esistenza API EFAT per auto-invio SdI (eliminerebbe touch manuale segreteria). Alternativa se API assenti: intermediario SdI diretto (Aruba Fatture PA, Acube, Fattura24) con EFAT come solo archivio

Non chiudere il flusso sito finché questi step portale non sono online (oggi il link punta già al portale, ma l'endpoint onboarding deve esistere entro go-live).

## Prossima Sessione Portale — Architettura Clienti

Decisione approvata: Cliente unico (persona fisica per CF) + profili servizio separati.

- Anagrafica: `Cliente { cf, nome, cognome, email, tel }` con relazione 1:N verso `Profilo<Servizio>` (Profilo730, ProfiloPIVA, ProfiloContabilita).
- Familiari a carico 730 modellati come altri `Cliente` collegati via relazione `nucleoFamiliare`.
- Dashboard portale segmentata in tab in base ai profili attivi (un 730-only non vede tab fatture/scadenze P.IVA).
- Retention differenziata per tipo profilo: 730 = 5 anni, P.IVA = 10 anni.
- Un freelance con P.IVA che fa anche 730 familiare sta in un solo record `Cliente` con due profili collegati. Zero duplicati.

Non implementare codice portale nel repo sito.

## File Chiave

1. `app/pricing.tsx`
2. `app/api/checkout/route.ts`
3. `app/api/webhook/route.ts`
4. `app/api/paypal-notify/route.ts`
5. `REPORT.md`

## Comandi Utili

```bash
npm install
npm run lint
npm run build
git status --short --branch
```
