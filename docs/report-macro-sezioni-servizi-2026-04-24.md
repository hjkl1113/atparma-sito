# Report — Macro-Sezioni Servizi Sito

**Data:** 2026-04-24  
**Repo:** `atparma-sito`  
**Stato:** report di lavoro separato, non sostituisce i file canonici `REPORT.md` / `HANDOFF.md`

## Scopo

Definire una struttura chiara per il riposizionamento del catalogo servizi del sito in 3 macro-sezioni:

- `Dichiarazioni`
- `Professionista`
- `Artigiani e Commercianti`

L'obiettivo e' migliorare navigazione, orientamento utente e coerenza commerciale senza toccare, per ora, i file canonici consolidati.

## Sintesi Esecutiva

- Il piano area-based e' ancora vivo nella memoria di progetto, soprattutto in `REPORT.txt` e nei file legacy del 2026-04-22.
- Nel codice attuale le landing di area non esistono ancora.
- Il sito oggi usa ancora una struttura ibrida: catalogo prodotti + 3 aree di specializzazione generiche.
- Le schede prodotto restano il punto corretto di conversione.
- Le future landing di area devono essere pagine di orientamento, non sostituti delle schede prodotto.
- I servizi specialistici `consulenza-fiscale`, `crisi-di-impresa`, `consulenza-finanziaria` vanno tenuti fuori dal catalogo area-based principale.
- Punto importante emerso dal codice: i `ctaHref` dei prodotti non puntano piu' a `at-parma.vercel.app`, ma a `https://clienti.atparma.com/login?next=/onboarding?service=...`.

## Stato Verificato Nel Codice

### Route oggi presenti sotto `app/servizi`

- `/servizi`
- `/servizi/[slug]`
- `/servizi/[slug]/checkout`

### Stato attuale della pagina `/servizi`

La pagina `app/servizi/page.tsx` mostra oggi:

- una sezione `Servizi online acquistabili` basata sul catalogo prezzi attivo
- una sezione `Aree di specializzazione` con 3 voci generiche:
  - `Consulenza fiscale`
  - `Crisi di impresa`
  - `Consulenza finanziaria`

Questa struttura non riflette ancora il riposizionamento commerciale per aree operative (`730/UPF`, `Professionista`, `Artigiani e Commercianti`).

### Stato attuale della home

La home `app/page.tsx` contiene ancora una sezione `Cosa facciamo` con 3 card generiche di specializzazione. Non esiste ancora un entrypoint area-first per i servizi commerciali acquistabili.

### Catalogo reale disponibile

Il catalogo attivo in `app/lib/prezzi-default.ts` e `app/servizi/_data/prodotti.ts` contiene 14 slug prodotto effettivamente mappati.

### Wiring attuale verso il portale

In `app/servizi/_data/prodotti.ts`:

- `PORTAL_BASE_URL = "https://clienti.atparma.com"`
- il helper `portalOnboardingLoginHref()` costruisce URL nel formato:
  - `https://clienti.atparma.com/login?next=/onboarding?service=<service>`

Questo riduce il rischio di implementare le macro-sezioni adesso: le landing di area possono limitarsi a orientare l'utente verso le schede prodotto, senza dover inventare nuovi flussi di onboarding.

### Redirect legacy gia' presenti

In `next.config.ts` esistono gia' redirect 301 da:

- `/servizi/piva-forfettario` -> `/servizi/piva-professionista`
- `/servizi/piva-forfettario-efat` -> `/servizi/piva-professionista`
- relative varianti `/checkout`

Questi redirect vanno mantenuti.

## Nota Documentale

Rispetto al codice attuale c'e' un piccolo drift documentale:

- `REPORT.md` e `HANDOFF.md` del sito parlano ancora di CTA verso `at-parma.vercel.app`
- il codice corrente usa gia' `clienti.atparma.com`
- `REPORT.txt` conserva invece il WIP corretto sulle 3 macro-sezioni

Questo report nasce anche per congelare una fotografia pratica senza modificare i canonici consolidati.

## Decisione Di Struttura

### Macro-sezione 1 — `/servizi/dichiarazioni`

Etichetta editoriale: `Dichiarazioni`

Prodotti inclusi:

- `dichiarazione-730`
- `dichiarazione-730-avanzato`
- `dichiarazione-upf-base`
- `dichiarazione-upf-avanzato`

Logica UX consigliata:

- prima scelta: `730` vs `Redditi PF`
- seconda scelta: `standard` vs `caso complesso`

Ruolo della landing:

- aiutare l'utente a capire quale dichiarativo gli serve
- portarlo alla scheda prodotto giusta
- non sostituire la scheda prodotto nel momento della conversione

### Macro-sezione 2 — `/servizi/professionista`

Etichetta editoriale: `Professionista`

Prodotti inclusi:

- `apertura-professionista-sola`
- `piva-professionista`
- `piva-professionista-semplificato`
- `contabilita-professionista-forfettario`
- `contabilita-professionista-semplificata`

Logica UX consigliata:

- prima scelta: `devi aprire la P.IVA` oppure `hai gia' la P.IVA`
- seconda scelta: `forfettario` oppure `semplificato`

Asset da integrare nella landing:

- il calcolatore `Conviene il forfettario?`

### Macro-sezione 3 — `/servizi/artigiani-commercianti`

Etichetta editoriale: `Artigiani e Commercianti`

Prodotti inclusi:

- `piva-artigiano-commerciante`
- `piva-artigiano-commerciante-forfettario`
- `piva-artigiano-commerciante-semplificato`
- `contabilita-artigiano-forfettario`
- `contabilita-artigiano-semplificata`

Logica UX consigliata:

- prima scelta: `devi aprire da zero` oppure `vuoi solo la gestione annuale`
- seconda scelta: `forfettario` oppure `semplificato`

Asset da integrare nella landing:

- il wizard `preventivo-artigiano-commerciante`

## Servizi Da Tenere Fuori Dal Catalogo Area-Based

Questi slug vanno mantenuti distinti come consulenze specialistiche o incarichi complessi:

- `consulenza-fiscale`
- `crisi-di-impresa`
- `consulenza-finanziaria`

Motivo:

- non sono prodotti di orientamento standardizzato come i dichiarativi o i bundle P.IVA/contabilita'
- hanno una logica piu' vicina alla consulenza su misura che al catalogo operativo guidato

## Mapping Operativo Slug -> Macro-Area

| Macro-area | Slug pagina prodotto |
|---|---|
| Dichiarazioni | `dichiarazione-730` |
| Dichiarazioni | `dichiarazione-730-avanzato` |
| Dichiarazioni | `dichiarazione-upf-base` |
| Dichiarazioni | `dichiarazione-upf-avanzato` |
| Professionista | `apertura-professionista-sola` |
| Professionista | `piva-professionista` |
| Professionista | `piva-professionista-semplificato` |
| Professionista | `contabilita-professionista-forfettario` |
| Professionista | `contabilita-professionista-semplificata` |
| Artigiani e Commercianti | `piva-artigiano-commerciante` |
| Artigiani e Commercianti | `piva-artigiano-commerciante-forfettario` |
| Artigiani e Commercianti | `piva-artigiano-commerciante-semplificato` |
| Artigiani e Commercianti | `contabilita-artigiano-forfettario` |
| Artigiani e Commercianti | `contabilita-artigiano-semplificata` |

## Nota Importante Sul Parametro `service` Verso Il Portale

Lo slug pagina e il valore `service` usato nei CTA del portale non coincidono sempre.

Eccezioni gia' presenti nel codice:

- pagina `dichiarazione-730` -> service `730`
- pagina `piva-professionista` -> service `piva-professionista-forfettario`

Conclusione pratica:

- le landing di area non devono duplicare o riscrivere logiche di onboarding
- devono portare alla scheda prodotto corretta
- la scheda prodotto resta il punto dove il `ctaHref` verso il portale e' gia' governato dal codice

## Impatto Consigliato Sulla Home

### Stato attuale

La home ha una sezione `Cosa facciamo` con 3 card generiche non collegate al nuovo impianto commerciale.

### Proposta

Sostituire quel blocco con 3 macro-card area-first:

- `Dichiarazioni`
- `Professionista`
- `Artigiani e Commercianti`

Ogni card deve:

- spiegare in 1 riga per chi e'
- portare alla landing di area
- non mandare direttamente al checkout o al portale

Il blocco `Pricing / Servizi online` puo' restare sotto come catalogo completo.

## Impatto Consigliato Su `/servizi`

### Stato attuale

Pagina ibrida:

- catalogo prodotti online
- aree specialistiche generiche

### Proposta

Nuova struttura:

1. Hero introduttivo breve
2. 3 macro-card in evidenza
3. sezioni raggruppate per area con card prodotto
4. blocco finale `Consulenze specialistiche`

Formula consigliata:

- `Servizi online per area`
- `Consulenze specialistiche su misura`

Da evitare:

- mantenere la doppia logica attuale che mescola catalogo operativo e aree professionali in modo poco leggibile

## Struttura Minima Consigliata Delle Landing Di Area

Ogni landing dovrebbe avere almeno:

1. hero con promessa dell'area
2. blocco `come scegliere`
3. card dei prodotti inclusi
4. checklist / documenti tipici
5. FAQ specifiche dell'area
6. CTA alle schede prodotto

Regola chiave:

- landing di area = orientamento
- scheda prodotto = conversione

## Redirect E SEO

### Redirect da aggiungere

Alias utile:

- `/servizi/artigiano-commerciante` -> `/servizi/artigiani-commercianti`

Motivo:

- intercetta il naming singolare senza confliggere con il prodotto esistente `piva-artigiano-commerciante`

### Redirect da NON fare

- non fare redirect 301 dalle schede prodotto attive alle landing di area

Motivo:

- sarebbe un errore sia SEO sia di conversione
- le schede prodotto hanno gia' ruolo commerciale e, in molti casi, wiring verso il portale

### Canonical consigliati

- ogni landing di area ha il proprio canonical
- ogni scheda prodotto mantiene il proprio canonical

## Impatto Sul Portale

### Dipendenza minima reale

Per implementare le macro-sezioni del sito non serve aspettare nuove route dedicate nel portale.

Flusso consigliato:

1. `Home` -> landing di area
2. landing di area -> scheda prodotto
3. scheda prodotto -> onboarding/login del portale

Questo e' il punto che rende l'implementazione pragmatica:

- il `sito` puo' diventare area-first nella navigazione
- il `portale` puo' restare prodotto-first nel passaggio di onboarding

## Ordine Di Implementazione Consigliato

1. creare le 3 landing:
   - `/servizi/dichiarazioni`
   - `/servizi/professionista`
   - `/servizi/artigiani-commercianti`
2. rifare `/servizi` con 3 macro-card + gruppi per area
3. rifare la sezione home `Cosa facciamo` in ottica area-first
4. aggiungere il redirect alias singolare/plurale
5. verificare link interni, sitemap, Search Console e breadcrumb

## Decisioni Già Congelate Da Questo Report

1. naming editoriale confermato:
   - `Dichiarazioni`
   - `Professionista`
   - `Artigiani e Commercianti`
2. route consigliata confermata:
   - `/servizi/artigiani-commercianti`
3. i servizi specialistici restano separati dal catalogo area-based
4. le schede prodotto restano le pagine canoniche di conversione
5. le macro-sezioni sono pagine di orientamento, non sostituti delle schede prodotto

## Prossimo Step Naturale

Se si decide di implementare, il lavoro successivo puo' partire senza toccare la memoria canonica consolidata, intervenendo solo su:

- `app/page.tsx`
- `app/servizi/page.tsx`
- nuove route area-based sotto `app/servizi/`
- `next.config.ts` per il solo alias aggiuntivo
