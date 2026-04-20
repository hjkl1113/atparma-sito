# Indagine mercato prezzi — analisi preliminare Claude

**Data**: 2026-04-19
**Fonte dati**: WebSearch + WebFetch su siti competitor (non Perplexity)
**Stato**: preliminare, da validare con indagine Perplexity dell'utente
**Nota metodologica**: alcune informazioni prezzi sono aggregate da articoli/recensioni, altre dirette dai siti dei competitor. Per decisioni finali verificare manualmente i listini correnti.

---

## 1. Finding strategico principale

**Il confronto "apertura una tantum" vs competitor è fuorviante**: tutti i competitor vendono **sottoscrizioni annuali** che includono apertura gratis + gestione 12 mesi + fatturazione elettronica. AT Parma invece vende l'apertura come prodotto una tantum senza canone ricorrente.

Quindi il cliente che confronta:
- **Fiscozen €399/anno** → apre P.IVA gratis + gestisce 12 mesi + fatturazione inclusa
- **AT Parma €199 apertura** → apre P.IVA, e poi? Serve cercare un altro commercialista? Quanto costa la gestione annuale?

Questo è il **gap strutturale** del catalogo: i competitor risolvono il problema del cliente per 12 mesi; noi risolviamo solo il primo step e lasciamo il cliente in dubbio.

---

## 2. Dati raccolti competitor (verificati via fetch diretto)

### 2.1 Fiscozen (listino pubblico — fiscozen.it/prezzi)

Tutti i prezzi includono **apertura P.IVA gratis** + **app fatture** + **commercialista dedicato** + **dichiarazione redditi** + **F24**.

| Segmento | Forfettario (IVA incl) | Semplificato/Ordinario (IVA escl) |
|---|---|---|
| Gestione separata INPS (consulenti, sviluppatori, designer) | **€399/anno** | €999/anno |
| ENPAP (psicologi) | €399/anno | €999/anno |
| Cassa privata (Forense, Inarcassa, ENPAM) | €499/anno | €1.199/anno |
| **INPS artigiani/commercianti** | **€599/anno** | €1.399/anno |

**Servizi extra una tantum**:
- Apertura P.IVA ditta individuale standalone: €200
- Variazione: €150
- Cessazione: €150

### 2.2 FidoCommercialista (fidocommercialista.it)

| Servizio | Prezzo |
|---|---|
| Forfettario annuale | **€264/anno + IVA** (~€322 incl) |
| Apertura P.IVA (nuovi) | **GRATIS** inclusa |
| Iscrizione CCIAA artigiani/commercianti (primo anno) | +€150+IVA |
| Variazioni (SCIA inclusa per artigiani) | €150 |
| Self-correction, DURC | €20 |
| Rateizzazione | fino a 24 mesi (€11/mese) |

Include: firma digitale, fatt. elettronica illimitata, F24, INPS separata, fino a 6 ATECO, commercialista dedicato, dichiarazione redditi (anche cripto/estero). **Soddisfatti o rimborsati 30gg**.

### 2.3 Quickfisco (quickfisco.it)

| Piano | Prezzo annuale (IVA incl) |
|---|---|
| Standard Forfettario | **€365/anno** |
| Premium Forfettario | €475/anno |

Include: fatturazione elettronica illimitata gratuita, dichiarazione primo anno, apertura P.IVA gratis per professionisti, consulenza fiscale continua.
Per artigiani/commercianti: **+€285 una tantum** per pratiche amministrative.
Sconto €30 primo anno per nuovi clienti.

### 2.4 FlexTax (flextax.it)

| Servizio | Prezzo |
|---|---|
| Apertura professionista (self-service) | €0-30 |
| Apertura artigiano/commerciante (self-service) | €200-500 |
| Abbonamento annuale professionisti | **da €366/anno** |
| Abbonamento annuale artigiani | **fino a €560/anno** |

Include: consulenza fiscale illimitata, dichiarazione redditi, FlexInvoice (fatturazione), simulatori.

### 2.5 ForfettApp

- **€264/anno IVA incl** — tutto incluso (apertura + gestione + fattura elettronica) per liberi professionisti

### 2.6 Segmento 730 (CAF e online)

| Fornitore | Prezzo |
|---|---|
| CAF CGIL/CISL/UIL iscritti sindacato | **€15-61** (in base al reddito) |
| CAF CGIL/CISL/UIL NON iscritti | **€50-128** |
| 730 Online CAF Acli | **da €39** |
| Commercialista tradizionale | **€100-150+** |

### 2.7 Fatturazione elettronica standalone (non rilevante ma contesto)

- Portale Agenzia Entrate: GRATIS
- Aruba: €29,90/anno
- FattureInCloud Forfettari: €48/anno

---

## 3. Confronto con listino AT Parma

### 3.1 Tabella di sintesi

| Servizio AT Parma | Nostro prezzo | Mercato competitor | Posizione |
|---|---|---|---|
| **Apertura P.IVA Professionista** (una tantum) | €199 | GRATIS inclusa in abbonamento annuale (Fiscozen, Fido, Quickfisco); €30-200 FlexTax/Fiscozen standalone | 🔴 Sovrastimato come **prodotto una tantum** |
| **Apertura P.IVA Artigiano/Commerciante** | €690 | €200-500 pratiche burocratiche + eventuale abbonamento annuale €560-599 | 🟡 Alto ma difficile comparare (dipende se il cliente vede €690 come una tantum o equivalente annuale) |
| **Apertura P.IVA Forfettario base** | €690 | GRATIS inclusa in abbonamento annuale €264-399 | 🔴 Molto sovrastimato |
| **P.IVA Forfettario + EFAT (12 mesi fatturazione)** | €750 | Fiscozen €399 tutto incluso (gestione 12 mesi + fatt.) | 🔴 Sovrastimato |
| **Dichiarazione 730** | €50 da €79 | CAF €30-50, online €39, commercialista €100+ | ✅ Allineato al segmento CAF/online, sotto mediana commercialisti |
| **Contabilità forfettario annuale** | NON ESPOSTO | €264-399 (mercato online) | ⚠️ **Opportunità mancata** |
| **Contabilità artigiani ricorrente** | NON ESPOSTO | €499-599 (Fiscozen, Fido) | ⚠️ **Opportunità mancata** |

### 3.2 La verità operativa

AT Parma vende **APERTURA ONE-SHOT** senza ricorrente. I competitor vendono **SOTTOSCRIZIONI ANNUALI** che inglobano l'apertura. Sono modelli di business diversi.

Due letture possibili dei nostri €690 forfettario apertura:
1. **"Solo apertura premium"**: rispetto a Fiscozen che ti dà GRATIS l'apertura + 12 mesi gestione a €399, siamo ingiustificatamente cari. Il cliente che confronta i prezzi homepage scappa.
2. **"Apertura + primo anno gestione implicito"**: il nostro €690 equivale al €399 Fiscozen + tempo consulenza professionista fisico, ok competitivo, ma la narrazione nel sito **non dice questo**.

---

## 4. Raccomandazioni strategiche

### 4.1 Prioritario — ristrutturare l'offerta

Il listino attuale (una tantum senza ricorrente esposto) ha 2 problemi:
1. I prezzi una tantum sembrano alti rispetto a competitor che includono 12 mesi
2. Non intercetta il segmento "gestione ricorrente" che è il vero motore economico dei competitor

**Opzione A — Bundle "primo anno completo"**:
- P.IVA Professionista + 12 mesi gestione: €450-550 (competitivo vs Fiscozen €399)
- P.IVA Artigiano + 12 mesi gestione: €790-890 (include CCIAA + INPS)
- P.IVA Forfettario + 12 mesi gestione + fattura elettronica: €550-650 (competitivo vs Fiscozen €399)
- Dopo il primo anno: canone ricorrente da ridefinire

**Opzione B — Dual pricing con entry low + canone annuale**:
- Apertura base: €99-149 (competitivo vs €30 FlexTax ma include consulenza reale)
- Gestione annuale forfettario: €350-450 (allineato mercato)
- Gestione annuale artigiani: €550-650 (allineato mercato)

**Opzione C — Posizionamento premium esplicito**:
- Tieni prezzi attuali (€199/€690/€750) MA ridefinisci la narrazione:
  - "Tu non paghi un'app, paghi commercialisti iscritti all'albo che ti seguono fisicamente a Parma"
  - Evidenzia differenziazione: studio reale, sede fisica, mandato firmato, ordine professionale
  - Target: clienti che vogliono commercialista "vero", non app SaaS
  - Rischio: audience ristretta, conversion lower

### 4.2 Secondario — introdurre contabilità ricorrente

**Aree 6a e 6b del brief non sono a listino**. Il mercato è chiaro:
- Forfettario annuale: €264-399 (tutti competitor online)
- Artigiani ricorrente: €499-599 (Fiscozen, Fido)

**Proposta prezzi AT Parma**:
- Contabilità forfettario annuale: €450-550 (premium vs €399 Fiscozen per il valore studio reale)
- Contabilità artigiani ricorrente: €690-790 (premium vs €599 Fiscozen)

Richiede: nuovi `Servizio` in `DEFAULT_PREZZI`, pagine prodotto, checkout Stripe **subscription** (non one-time).

### 4.3 Subito — niente da toccare

**730 a €50 scontato da €79**: perfetto. Si posiziona sopra CAF (€30-50) giustificando il margine col valore "commercialista vero che controlla detrazioni dimenticate" (narrativa già nella pagina prodotto). Sotto commercialista tradizionale (€100+). Sweet spot.

---

## 5. Limiti di questa analisi

1. **Dati parziali**: WebSearch/WebFetch hanno meno coverage di Perplexity Deep Research. Ho mancato TaxMan (prezzi non trovati), Accountant, CommercialistaOnline, IoApro.
2. **Prezzi possono variare**: alcuni fetch erano su articoli recensione, non direttamente sui listini aggiornati.
3. **Segmenti CAF non mappati nel dettaglio** per 730: i CAF hanno tariffe variabili per reddito (€15-128) non aggregabili in mediana unica.
4. **Non ho verificato condizioni contrattuali**: alcuni competitor fanno sottoscrizione con tacito rinnovo, altri con libera disdetta. Per una trattativa commerciale precisa servirebbe entrare nel dettaglio TOS.

---

## 6. Raccomandazione operativa

1. **Procedi comunque con Perplexity** per avere una seconda opinion + dati su TaxMan/Accountant/IoApro che mi sfuggono
2. **Confronta i dati Perplexity con questa tabella**: se confermano il pattern "competitor = abbonamento annuale", la raccomandazione strategica §4.1 è urgente
3. **Decisione Alessandro**: scegli tra opzione A (bundle), B (dual pricing), C (premium narrativo) — **questa è una decisione di posizionamento**, non solo pricing
4. **Contabilità ricorrente**: il gap è chiaro da entrambe le ricerche. Introdurla a listino richiede lavoro strutturale (Stripe subscriptions, nuove pagine prodotto) → plan dedicato in sessione successiva

---

## Fonti

- [Fiscozen Prezzi](https://www.fiscozen.it/prezzi/) — verificato 2026-04-19 via WebFetch
- [FidoCommercialista Apertura P.IVA](https://fidocommercialista.it/apertura-partita-iva-online) — verificato via WebFetch
- [Quickfisco homepage](https://quickfisco.it/) — verificato via WebFetch
- [FlexTax Costi](https://flextax.it/costo-apertura-partita-iva/) — verificato via WebFetch
- [Cristian Iovino — Prezzi Fiscozen 2026](https://cristianiovino.com/prezzi-fiscozen/)
- [Cristian Iovino — Alternative a Fiscozen 2026](https://cristianiovino.com/migliori-alternative-a-fiscozen/)
- [Cristian Iovino — Alternative a TaxMan App 2026](https://cristianiovino.com/migliori-alternative-a-taxman-app/)
- [Cristian Iovino — Migliori commercialisti online forfettario 2026](https://cristianiovino.com/migliori-commercialisti-online-per-il-regime-forfettario/)
- [Finanza Digitale — Migliori commercialisti online 2026](https://www.finanzadigitale.com/guide/miglior-commercialista-online/)
- [PMI.it — Costi 730 CAF vs Commercialista](https://www.pmi.it/impresa/contabilita-e-fisco/409734/dichiarazione-redditi-2025-quanto-costa-caf-e-commercialista.html)
- [BonusX — Prezzi 730 2026](https://bonusx.it/lavoratori-e-disoccupati/quanto-costa-fare-il-730/)
- [Money.it — Tariffe CAF 730 Redditi PF 2025](https://www.money.it/costi-dichiarazione-redditi-2025-caf-tariffe-aggiornate-730-redditi-pf)
- [ForfettApp Partita IVA gratis](https://www.forfettapp.it/partita-iva-gratis/)
- [Fatture in Cloud — Guida apertura P.IVA 2026](https://www.fattureincloud.it/guida-aprire-partita-iva/come-fare/)
- [INPS Gestioni artigiani e commercianti 2026](https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.02.gestioni-artigiani-e-commercianti-i-contributi-per-il-2026.html)

---

*Analisi compilata da Claude 2026-04-19 come check preliminare. L'analisi definitiva userà Perplexity Sonar Pro / Deep Research secondo il brief `market-research-brief-2026-04.md`.*
