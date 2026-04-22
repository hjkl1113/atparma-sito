# Handoff

Ultimo aggiornamento: `2026-04-22 (UPF + disclaimer detrazioni + copy fix apertura prof)`

## WIP — Riposizionamento macro-sezioni /servizi

Riposizionamento in corso verso 3 macro-sezioni: Dichiarazioni Redditi, Professionista, Artigiani/Commercianti. La navigazione si apre per checklist dentro ogni macro invece che in griglia piatta.

**Fatto in questa sessione (2026-04-22):**

- **UPF prezzi e prodotti (2 nuovi SKU)**:
  - `upf-base` €98 fisso — dichiarazione Modello Redditi PF per casi lineari (ex P.IVA cessata, redditi fondiari, redditi assimilati)
  - `upf-avanzato` da €198 — UPF con quadri RW/RT/RM, redditi esteri, IVIE/IVAFE, strascichi P.IVA pluriennali
  - Aggiunti in `app/lib/prezzi-default.ts` e `app/servizi/_data/prodotti.ts` con FAQ, process, docs completi
- **Disclaimer detrazioni IRPEF nel calcolatore forfettario**: sotto il verdetto c'è ora una riga che segnala che il calcolo non include detrazioni (mutui, spese mediche, bonus edilizi) con CTA contatti. Scelta strategica: non estendere il calcolatore gratuito con campi detrazioni per non regalare il calcolo preciso che è il valore della consulenza.
- **Copy fix `apertura-professionista-sola`**: rimossa positioning "per chi ha già un commercialista" — riposizionato come servizio una tantum aperto a tutti, senza vincoli di mandato annuale. Toccati tagline, metaDesc, perChi, FAQ in `prodotti.ts` e desc in `prezzi-default.ts`.

**Da fare nelle prossime sessioni:**

- Refactor pagina `/servizi` → 3 macro-card invece di listing piatto
- Tre landing `/servizi/dichiarazioni`, `/servizi/professionista`, `/servizi/artigiano-commerciante` con checklist/wizard interni
- Home page: refactor griglia servizi in 3 macro-card
- Redirect 301 slug vecchi → nuovi URL sezionali
- Valutazione cont-prof-forf €449 → €499 (ridurre delta vs bundle €549 da €100 a €50) — da decidere dopo aver visto la struttura a 3 sezioni
- Enfasi "crisi da sovraindebitamento" (PF + aziende) — rimandato esplicitamente dall'utente

## Nuova Matrice Pricing — Applicata 2026-04-22

Sintesi ibrida tra Report GPT-5.4 (2026-04-21) e consenso 4-AI (market-research 2026-04-19): premium dove regge (semplificato, artigiani), allineata al mercato sui segmenti price-sensitive (forfettario professionista). Tributi pubblici separati dall'onorario studio su tutte le tipologie artigiano/commerciante.

| Servizio | Vecchio | Nuovo | Formato |
|---|---:|---:|---|
| 730 standard | €50 | €50 | fisso (promo, listino 79) |
| 730 avanzato (nuovo) | — | €98 | da |
| Apertura Professionista sola (nuovo) | — | €183 | fisso |
| Apertura Prof forfettario + contabilità | €449 | €549 | fisso |
| Apertura Prof semplificata + contabilità | €1.099 | €1.647 | da |
| Apertura Artigiano/Commerciante sola | €610 | €610 | fisso |
| Apertura Artigiano forfettario + contabilità | €1.190 | €1.220 | da |
| Apertura Artigiano semplificata + contabilità | €1.690 | €2.074 | da |
| Contabilità Prof forfettario | €349 | €449 | fisso |
| Contabilità Prof semplificata | €899 | €1.464 | da |
| Contabilità Artigiano forfettario | €599 | €610 | da |
| Contabilità Artigiano semplificata | €1.190 | €1.464 | da |

Implementazione applicata in sessione 2026-04-22:
- `app/lib/prezzi-default.ts`: nuovo listino completo (13 entries)
- `app/servizi/_data/prodotti.ts`: aggiornati testi prodotti + 2 nuovi (730 avanzato, apertura prof sola)
- `app/servizi/[slug]/page.tsx`: VerificaRequisitiForfettario aggiornato (549/1647) + CTA check-up wizard su 5 pagine artigiano
- `app/strumenti/preventivo-artigiano-commerciante/wizard.tsx`: note contabilità annuale + bundle primo anno aggiornati
- `app/blog/aprire-partita-iva-online`, `app/blog/commercialista-online`, `app/guide/documentazione-partita-iva`, `app/faq`: "da 449" → "da 549" (bundle Prof forfettario)
- `originalPrice` EU Omnibus: rimossi riferimenti su bundle Prof forfettario e artigiano (erano ≤ nuovo prezzo)

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

Il tab sito `/servizi/piva-professionista` ora redirige al portale per l'onboarding del bundle €549 primo anno, portale-first. Nessun vincolo triennale imposto: mandato annuale default (rinnovo tacito, disdetta 60gg via PEC) oppure triennale opzionale con prezzo bloccato €549 per 3 anni come incentivo fedeltà.

Nel repo portale serve:

1. Endpoint `/onboarding/piva-professionista-forfettario` con workflow stateful 7-step (iscrizione → consulenza → scelta mandato annuale/triennale → pagamento → apertura → gestione → rinnovo)
2. Due template PDF mandato professionale forfettario: annuale + triennale con clausola price-lock €549
3. Firma elettronica remota (Namirial/Aruba) sul mandato scelto
4. Stripe checkout "€549 primo anno" con `metadata.durata=annuale|triennale` e `metadata.service=piva-professionista-forfettario`
5. Cron rinnovo: su piano annuale fattura €549 + eventuale aggiornamento listino con preavviso 60gg; su piano triennale fattura €549 bloccata. Entrambi con controllo volumi fatture: se >20 → alert per preventivo maggiorato prima del rinnovo
6. Integrazione EFAT Ranocchi: onboarding automatico (anagrafica, logo, SDI) post-firma mandato. Cliente fattura direttamente da EFAT (self-serve) salvo attivi l'add-on fatturazione assistita
7. Archivio documenti 10 anni nel portale + scadenzario contabile popolato automaticamente
8. **Add-on fatturazione assistita (+€99/anno)**: UI nel portale per creare proforma (cliente, articoli, aliquote, bolli) → output PDF + XML FatturaPA → notifica alla segreteria → segreteria rivede e invia allo SdI via EFAT (flusso semi-manuale MVP, stimato 30-60s per fattura). Fino a 20 fatture/anno incluse nell'add-on, oltre preventivo. Opt-in dal portale, pagamento contestuale al rinnovo bundle
9. **Da verificare con Ranocchi prima di go-live portale**: esistenza API EFAT per auto-invio SdI (eliminerebbe touch manuale segreteria). Alternativa se API assenti: intermediario SdI diretto (Aruba Fatture PA, Acube, Fattura24) con EFAT come solo archivio

Non chiudere il flusso sito finché questi step portale non sono online (oggi il link punta già al portale, ma l'endpoint onboarding deve esistere entro go-live).

## Dipendenze Portale — 4 Bundle Contabilità Annuale (subentro)

Aggiunti 2026-04-21 nel catalogo sito 4 bundle per clienti con P.IVA già aperta che vogliono cambiare commercialista. Portale-first: nessun checkout sito, tutto il flusso nel portale. **Prezzi aggiornati alla matrice pricing ibrida 2026-04-22.**

Slug sito → endpoint portale richiesto:

1. `/servizi/contabilita-professionista-forfettario` (€449) → `/onboarding/contabilita-professionista-forfettario`
2. `/servizi/contabilita-professionista-semplificata` (da €1.464) → `/onboarding/contabilita-professionista-semplificata`
3. `/servizi/contabilita-artigiano-forfettario` (da €610) → `/onboarding/contabilita-artigiano-forfettario`
4. `/servizi/contabilita-artigiano-semplificata` (da €1.464) → `/onboarding/contabilita-artigiano-semplificata`

Workflow stateful 6-step per ciascuno:

1. Iscrizione portale (zero caparra)
2. Check-up iniziale gratuito opzionale (videocall con commercialista, analisi storico, scadenze pendenti)
3. Firma mandato professionale — annuale default (rinnovo tacito, disdetta 60gg PEC) oppure triennale price-lock opzionale
4. Stripe/PayPal checkout al prezzo del bundle con `metadata.service=contabilita-{prof,art}-{forfettario,semplificata}` e `metadata.durata=annuale|triennale`
5. **Takeover gestito dalla segreteria**: con delega del cliente, contatto al commercialista precedente per recupero documenti (dichiarazioni, registri IVA, cespiti, F24 INPS/CCIAA, corrispondenza AdE). Subentro nel cassetto fiscale. Attivazione EFAT Ranocchi con onboarding anagrafica/logo/SDI. Entro 10-15 giorni lavorativi dalla firma mandato.
6. Gestione annuale + rinnovo (cron identico ai bundle apertura): rilevamento volumi fatture >20 → alert per preventivo maggiorato prima del rinnovo; triennale → prezzo bloccato per 3 anni; annuale → riemissione fattura con eventuale aggiornamento listino notificato 60gg prima.

Nel repo portale servono:

1. Quattro endpoint `/onboarding/contabilita-*` con workflow stateful 6-step descritto sopra
2. Template PDF mandato professionale "contabilità annuale subentro" nelle 4 varianti (prof forf, prof semp, art forf, art semp) × 2 durate (annuale/triennale)
3. Modulo delega al commercialista precedente (PDF firmabile nel portale) per recupero documenti
4. Flusso segreteria "takeover queue": cruscotto interno per tracciare richieste documenti al commercialista precedente, ricezione, onboarding EFAT, conferma al cliente
5. Stripe checkout parametrizzato per i 4 prezzi (449/1464/610/1464) con metadata corretti
6. Cron rinnovo identico ai bundle apertura con i nuovi prezzi e le soglie volume per forfettari (>20 fatture)
7. Add-on fatturazione assistita (+€99/anno) già definito per il bundle P.IVA professionista: stesso add-on applicabile ai 4 bundle contabilità (UI proforma + flusso segreteria → SdI)

Autori assegnati lato sito (mirror nel portale):
- `contabilita-professionista-*` → Pietro Franzosi (albo Parma)
- `contabilita-artigiano-*` → Aldo Ponzi (albo Brescia)

## Dipendenze Portale — Apertura Artigiano/Commerciante sola (€610)

Dal 2026-04-21 anche il tab `piva-artigiano-commerciante` (apertura sola, senza contabilità annuale) è portale-first. Nessun checkout sito: CTA → `https://at-parma.vercel.app/onboarding/piva-artigiano-commerciante`.

Workflow stateful 5-step nel portale:

1. Iscrizione portale (zero caparra)
2. Consulenza iniziale videocall (verifica ATECO, qualifica artigiano/commerciante, SCIA necessarie)
3. Firma mandato professionale apertura artigiano/commerciante (solo apertura, non include contabilità)
4. Stripe/PayPal checkout €610 (onorario studio 500 + IVA) con `metadata.service=piva-artigiano-commerciante`. Rimborsi spese e tributi pubblici (CCIAA, SIA, SCIA, USL, bolli) gestiti a parte — stima nel wizard preventivo, importo esatto nella bozza di mandato
5. Apertura + CCIAA (ComUnica) + INPS artigiani/commercianti + SIA entro 10gg lavorativi

Nel repo portale serve:
1. Endpoint `/onboarding/piva-artigiano-commerciante`
2. Template PDF mandato "apertura artigiano/commerciante" (senza clausola contabilità annuale — da rinnovare o upgrade a bundle `piva-artigiano-commerciante-forfettario`/`-semplificato` se il cliente poi vuole anche la gestione)
3. Calcolatore tributi pubblici per provincia (bolli CCIAA, diritto annuale, SIA, SCIA comunale) da includere nella bozza mandato
4. Stripe checkout €610 con `metadata.service=piva-artigiano-commerciante` e `metadata.durata=none` (apertura una tantum, rimborsi spese fuori transazione)

Nota: questo tab è l'unico bundle apertura "pure" rimasto (senza contabilità annuale inclusa). Usato da chi ha già commercialista per la gestione oppure è indeciso e vuole solo partire.

## Strategia Pagamenti Portale

Decisione 2026-04-21: i pagamenti del portale (bundle nuovi + rinnovi + add-on) usano **Stripe Checkout hosted + webhook + save PM per rinnovo**. Coerente col sito, nessun nuovo stack da introdurre.

### Flusso pagamento iniziale (firma mandato)

1. Cliente firma il mandato nel portale (firma digitale remota Namirial/Aruba)
2. Schermata "Conferma e paga" con riepilogo servizio + importo + durata (annuale/triennale dove previsto)
3. Server portale crea Stripe Checkout Session via API con:
   - `mode: "payment"`
   - `customer: portale.stripeCustomerId` (stesso customer per tutti i servizi del cliente)
   - `payment_method_types: ["card", "klarna"]` se importo ≥ €400, altrimenti `["card"]`
   - `metadata: { service, durata, clienteId, mandatoId }`
   - `payment_intent_data.setup_future_usage: "off_session"` per salvare il PM per rinnovi futuri
4. Redirect a `checkout.stripe.com` (hosted, PCI a carico Stripe)
5. Return al portale su successo: stato "pending conferma webhook"
6. Webhook `checkout.session.completed` attiva la pratica (avvia onboarding EFAT, sblocca la tab servizio, email conferma al cliente via Brevo)

### Flusso rinnovi automatici

1. Cron 30gg prima della scadenza mandato annuale:
   - Email anteprima con importo e aggiornamento listino (se previsto)
   - Invio `PaymentIntent` off_session sul PM salvato con `off_session: true, confirm: true`
2. Successo: fattura generata, scadenza mandato prolungata, email conferma
3. Fallimento (carta scaduta, fondi insufficienti):
   - Retry automatico dopo 3gg e 7gg (2 tentativi)
   - Email al cliente con link "Aggiorna metodo di pagamento" (Stripe Billing Portal o checkout one-shot)
   - Se nessun pagamento entro la scadenza mandato: sospensione servizio e alert segreteria

### PayPal parallelo

- Mantenere flusso PayPal attuale con `enable-funding=paylater` per clienti che preferiscono rateizzare via PayPal Pay Later (3 rate senza interessi)
- Niente rinnovo automatico PayPal (l'API PayPal Subscriptions è più fragile): per clienti PayPal i rinnovi restano one-shot (email 30gg prima con link al checkout)

### SEPA SDD (fase 2)

- Post go-live, valutare SEPA SDD per clienti ricorrenti che preferiscono addebito diretto
- Costo inferiore a carte, ma setup più complesso (mandato SDD, gestione insoluti/storni)
- Non blocca il go-live, si aggiunge quando volumi lo giustificano

### BNPL sito (già implementato)

Il sito ha già Klarna (Stripe) + PayPal Pay Later abilitati automaticamente per importi ≥ €400. In pratica oggi il sito non ha bundle ≥ €400 (tutti sono portale-first), ma la logica resta per eventuali servizi one-shot futuri.

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
