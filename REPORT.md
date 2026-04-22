# REPORT — VALIDAZIONE PROGETTO AT PARMA

**Data:** 2026-04-22  
**Versione:** 2.0  
**Scopo:** fotografia tecnica e operativa aggiornata del sistema `sito + portale`, pensata per chi deve validare il progetto prima di nuovo sviluppo.

## Legenda

- `Verificato nel codice`
- `Verificato in configurazione esterna`
- `Documentato ma non verificato`
- `Pianificato`
- `Superato / legacy`

## Executive Summary

Il progetto e' composto da due repo distinti:

- `sito` (`www.atparma.com`): marketing, pricing, funnel, tool, Stripe/PayPal
- `portale` (`clienti.atparma.com`): clienti, documenti, proforme, pratiche, firma OTP, lavoro operativo

Stato reale:

- il `sito` e' gia' commercialmente avanzato e live
- il `portale` e' gia' molto piu' di un MVP e ha molte aree operative vive
- il ponte `sito -> portale` non e' ancora chiuso end-to-end
- la memoria documentale era diventata frammentata e non piu' affidabile con una sola lettura

Verdetto sintetico:

| Area | Stato | Nota |
|---|---|---|
| Sito | giallo | forte su offerta e UX, ma pricing/source-of-truth non pulita |
| Portale | giallo-verde | base molto solida, ma onboarding pubblici e pagamenti non chiusi |
| Integrazione | rosso | vero collo di bottiglia del sistema |
| Pagamenti | giallo | sito one-shot ok, portale in transizione decisionale |
| Compliance | giallo | perimetro forte, implementazione ancora parziale |
| Documentazione | rosso | ora in fase di consolidamento |

## Repository, domini e ambienti

| Repo | Percorso | Scopo | Stato |
|---|---|---|---|
| sito | `/Users/alessandrosicuri/Desktop/studio at/sito` | marketing, catalogo, pagamenti sito | LIVE |
| portale | `/Users/alessandrosicuri/Desktop/studio at/portale` | gestione clienti, documenti, billing, pratiche | LIVE |

| Dominio / URL | Uso | Stato |
|---|---|---|
| `https://www.atparma.com` | sito pubblico | production corretta |
| `https://clienti.atparma.com` | portale clienti | production corretta |
| `https://at-parma.vercel.app` | deploy Vercel | presente nel codice sito come CTA pubblica ma non dovrebbe essere il target production |

## Stack reale

### Sito

- Next.js 16 + TypeScript
- Tailwind CSS v4
- Stripe + PayPal
- Vercel
- Vercel Blob
- Brevo
- pagine trust, tool gratuiti, funnel marketing

### Portale

- Next.js 16
- Prisma 7
- Neon PostgreSQL
- Cloudflare R2
- Brevo + Aruba SMTP
- FattureInCloud
- Sentry
- Turnstile
- modello multi-tenant gia' impostato nello schema

## Stato reale del sito

### Verificato nel codice

| Area | Stato | Riferimenti |
|---|---|---|
| Catalogo prezzi | presente e ampio | `app/lib/prezzi-default.ts` |
| Checkout Stripe | attivo | `app/api/checkout/route.ts`, `app/servizi/_components/checkout-form.tsx` |
| PayPal con verifica server-side | attivo | `app/api/paypal-notify/route.ts` |
| Webhook Stripe sito | presente | `app/api/webhook/route.ts` |
| Privacy pubblica | presente | `app/privacy/page.tsx` |
| Cookie banner | presente | `components/cookie-banner.tsx` |
| Trust/Sicurezza | presenti | `app/sicurezza/page.tsx`, `docs/MARKETING-TRUST-SIGNALS.md` |

### Pricing reale nel codice

Fonte piu' affidabile oggi: `app/lib/prezzi-default.ts`.

Servizi principali presenti nel catalogo:

- `730`
- `730 avanzato`
- `UPF base`
- `UPF avanzato`
- `Apertura professionista sola`
- bundle apertura + contabilita'
- contabilita' professionisti/artigiani
- `Consulenza su misura`

### Problema tecnico principale del sito

La source-of-truth prezzi non e' unificata.

| Punto | Stato | Valutazione |
|---|---|---|
| `app/lib/prezzi-default.ts` | catalogo di fatto reale | ok ma non unico |
| `app/api/prezzi/route.ts` | legge blob o default | utile ma non fonte unica effettiva |
| `app/pricing.tsx` | usa `/api/prezzi` solo per `active` | incoerente |
| `app/api/checkout/route.ts` | fallback legacy `730=79`, `piva=149` | rischio concreto |

### Flussi reali del sito

#### Checkout diretto

- Stripe e PayPal sono attivi per il perimetro one-shot del sito
- il webhook Stripe verifica la firma e invia email alla segreteria
- il webhook **non** crea utenti o clienti nel portale

#### Portale-first

Il sito punta gia' molti servizi a CTA esterne di onboarding portale.

Verifica nel codice:

- `app/servizi/_data/prodotti.ts` contiene 14 `ctaHref` verso `https://at-parma.vercel.app/onboarding/...`

Problema:

- il dominio usato e' il deploy Vercel, non `https://clienti.atparma.com`
- il portale non espone route dinamiche `/onboarding/[slug]` verificate nel codice

### Giudizio sintetico sul sito

Il sito e' forte commercialmente e ricco di contenuti e funnel, ma promette gia' un ponte col portale che oggi non e' ancora tecnicamente chiuso.

## Stato reale del portale

### Moduli effettivamente presenti

| Modulo | Stato | Riferimenti |
|---|---|---|
| Auth / onboarding base | LIVE | `src/app/(auth)/onboarding/*` |
| Clienti / anagrafica | LIVE | schema + dashboard |
| Documenti | LIVE | schema + route documenti |
| Billing / proforme | LIVE | schema + `api/billing/*` |
| Extra charges | LIVE | `src/app/api/extra-charges/route.ts` |
| Pratiche / kanban | LIVE | report + moduli dashboard |
| Quote / preventivi | LIVE | report + schema |
| Firma OTP / FEA | LIVE | report + route signature |
| Settings studio | LIVE | report + pagine settings |
| Tools Sprint A | LIVE | `/admin/tools`, `/client/tools`, `/api/products`, `/api/client-products`, `/api/tools/download` |

### Contraddizione importante gia' verificata

Parte del vecchio `portale/REPORT.md` conteneva un audit che descriveva Fase L Sprint A come assente. Il codice mostra invece route e pagine reali gia' presenti. Quella parte va considerata `Superata / legacy`.

### Onboarding reale del portale

Esiste un onboarding vero e verificato nel codice:

- `src/app/(auth)/onboarding/page.tsx`
- flow a step con AML/privacy/mandato/password

Non risultano invece presenti route tipo:

- `/onboarding/piva-professionista-forfettario`
- `/onboarding/contabilita-professionista-forfettario`
- `/onboarding/[slug]`

Quindi il portale ha un onboarding base, ma non l'onboarding servizio-specifico che il sito gia' presume esista.

### Billing e pagamenti portale

Lo schema mostra gia' evoluzione oltre il solo manuale puro:

- `Proforma.paymentStatus`
- `Proforma.paidAt`
- `Proforma.paidMethod`
- `Proforma.adminConfirmedSddAt`
- relazione `sddCollection`

Questo segnala che la direzione pagamenti esiste nello schema, ma non e' ancora congelata in modo coerente in tutti i documenti del repo.

### Gate ancora aperti

`BACKLOG.md` continua a mostrare aperti vari gate su:

- Turnstile
- consent flow completo
- AML UI/dashboard
- recovery 2FA
- test e2e inviti

Quindi il portale e' usabile, ma non ancora blindato come piattaforma da rollout ampio verso utenti esterni.

## Ponte sito -> portale

### Stato atteso

Il sito dovrebbe:

- vendere o qualificare il lead
- trasferire il contesto del servizio al portale
- permettere onboarding o attivazione coerenti

### Stato reale oggi

| Punto | Stato |
|---|---|
| Webhook sito -> portale | assente |
| Creazione automatica client nel portale dopo acquisto sito | assente |
| Provisioning account portale post-acquisto | assente |
| CTA portale-first nel sito | presenti |
| Dominio CTA corretto | no |
| Onboarding servizio-specifici nel portale | non trovati nel codice |

### Giudizio secco

Il ponte `sito -> portale` e' oggi **non allineato**:

- manuale sui flussi di acquisto sito
- rotto o incompleto sui flussi portale-first
- commercialmente promesso piu' di quanto tecnicamente chiuso

## Pricing e modello commerciale

### Regola attuale emersa dai ragionamenti consolidati

- `onorario studio` come base
- `spese vive separate` soprattutto su artigiani/commercianti
- `prezzo fisso` per i casi standard
- `a partire da` per i casi variabili
- bundle primo anno presenti nel catalogo

### Allineamento al mercato web

Lettura consolidata dai documenti di market research:

- `730` e `forfettario professionista` sono i segmenti piu' price-sensitive
- `artigiani/commercianti` e `semplificato` reggono meglio il premium
- il portale e' un differenziatore, ma non basta se il funnel tecnico non e' chiuso

## Pagamenti

### Sito

| Metodo | Stato |
|---|---|
| Stripe | LIVE |
| PayPal | LIVE |

### Portale

| Area | Stato |
|---|---|
| Proforme / FiC | LIVE |
| Reminder / batch | LIVE |
| SDD / SEPA | in evoluzione |
| TS Pay / O-1 / O-2 | documentati ma non consolidati nella memoria canonica |

### Punto critico

`portale/REPORT.md` e le discussioni piu' recenti non sono piu' perfettamente allineati sulla parte pagamenti/SEPA. Questa e' una delle aree dove e' piu' facile progettare sulla base sbagliata se non si consolida prima la memoria.

## Email, deliverability e domini

### Verificato in configurazione esterna

| Componente | Stato |
|---|---|
| SPF | ok |
| DMARC | ok (`p=none`) |
| Dominio Brevo `atparma.com` | autenticato |

Impatto pratico:

- OTP
- inviti staff
- reminder
- email transazionali

### Nota documentale

Il backlog segnava ancora DKIM/SPF/DMARC come punto aperto. Questa parte e' ormai da considerare `Superata / legacy`, almeno per la configurazione base deliverability.

## Compliance, privacy, AML e firma

### Fonte migliore

`portale/PERIMETRO-COMPLIANCE.md` e' oggi la fonte specialistica piu' affidabile del progetto.

### Stato reale sintetico

| Area | Stato |
|---|---|
| Privacy pubblica sito | LIVE |
| Cookie banner | LIVE |
| Consent tracking completo | parziale |
| AML backend | avanzato |
| AML UI completa | non chiusa |
| Firma OTP / FEA | LIVE |

Valutazione:

Il perimetro compliance e' pensato seriamente, ma l'implementazione non e' ancora chiusa in tutte le sue parti operative.

## Documentale, storage e server storico

Decisioni forti gia' prese:

- `TEMPORANEI` non si tocca
- deve restare archivio storico immutabile
- il documentale gestito futuro deve essere separato
- il portale deve governare metadati, permessi, audit e pubblicazione

Stato reale:

- ottima analisi e direzione architetturale
- non ancora un modulo operativo finale chiuso

## Contraddizioni trovate

| Tema | Drift rilevato | Stato corretto |
|---|---|---|
| Pricing sito | docs e funnel vecchi convivono con listino nuovo | il codice prezzi e' piu' affidabile |
| Bundle contabilità | top `HANDOFF` aggiornato, sezioni sotto ancora vecchie | drift documentale |
| CTA portale-first | sito presume onboarding specifici | portale non li espone nel codice |
| Dominio CTA | codice punta a `at-parma.vercel.app` | target production dovrebbe essere `clienti.atparma.com` |
| Fase L Sprint A | vecchi report la descrivono assente | codice mostra route e UI presenti |
| Claim esperienza | `Dal 2005` vs `20 anni` | claim non uniformato |
| Deliverability | backlog la segna aperta | DNS/Brevo base risultano ok |
| Pagamenti O-2 | docs fermi su versioni precedenti | memoria da congelare |

## Rischi aperti

### Commerciali

- CTA pubbliche rotte o incomplete sul portale-first
- prezzi e documenti non perfettamente allineati
- funnel piu' avanzato della parte operativa reale

### Tecnici

- source-of-truth prezzi frammentata
- ponte sito-portale manuale
- pagamenti portale non congelati in memoria canonica
- drift tra worktree e documentazione

### Compliance

- gate AML/consensi/2FA ancora aperti
- rischio di considerare chiuso un perimetro ancora ibrido

### Documentazione

- troppi file utili ma non consolidati
- rischio operativo elevato per chi entra nel progetto in corsa

## Checklist per validazione tecnica esterna

- [ ] verificare il ponte `sito -> portale`
- [ ] verificare la source-of-truth prezzi sito
- [ ] verificare gli onboarding servizio-specifici reali
- [ ] verificare lo stato pagamenti del portale rispetto alle decisioni recenti
- [ ] verificare i gate compliance realmente aperti
- [ ] verificare i drift docs vs codice piu' critici

## Conclusione finale

Il progetto ha una base prodotto forte e reale. Il problema principale oggi non e' la mancanza di funzionalita', ma la mancanza di allineamento tra:

- documentazione
- funnel commerciale
- integrazione sito-portale
- memoria dei pagamenti

Prima di nuovo sviluppo importante conviene:

1. consolidare la memoria
2. chiudere il ponte pubblico `sito -> portale`
3. unificare i prezzi del sito
4. congelare l'architettura pagamenti del portale
