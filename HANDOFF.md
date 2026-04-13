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
