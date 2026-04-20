# Indagine di mercato prezzi AT Parma — brief operativo

**Data**: 2026-04-19
**Strumento scelto**: Perplexity Sonar Pro / Deep Research
**Responsabile**: Alessandro Sicuri
**Stato**: brief pronto, indagine da eseguire

---

## 1. Contesto e obiettivo

Pre go-live definitivo vogliamo validare che i prezzi esposti sul sito siano allineati al mercato italiano dei servizi fiscali online. Il listino anchor del 2026-04-19 (commit `631a93b`) ha alzato i prezzi del 25-30% rispetto alla versione precedente.

**Obiettivo**: capire se i prezzi attuali sono sottostimati, allineati o sovrastimati rispetto ai competitor principali (Fiscozen, TaxMan, FidoCommercialista, Partita IVA Semplice, Accountant, CommercialistaOnline, IoApro), e valutare se introdurre a listino 2 servizi oggi non esposti (contabilità ricorrente forfettario + artigiani).

**Output di questa sessione**: il brief che stai leggendo. La ricerca vera e propria la esegui tu su Perplexity. Quando hai i dati, sessione successiva produce il report comparativo con raccomandazioni.

---

## 2. Baseline AT Parma

Prezzi mappati da `app/lib/prezzi-default.ts` (fonte canonica).

| # | Servizio | Prezzo attuale | Stato |
|---|---|---|---|
| 1 | Apertura P.IVA Professionista (no CCIAA) | **€199** | A listino |
| 2 | Apertura P.IVA Artigiano/Commerciante (CCIAA + SIA camerale + INPS) | **€690** | A listino |
| 3 | Apertura P.IVA Forfettario (base) | **€690** | A listino |
| 4 | P.IVA Forfettario + Fatturazione elettronica (EFAT GIS Ranocchi) | **€750** | A listino |
| 5 | Dichiarazione 730 online | **€50 scontato da €79** (-37%) | A listino |
| 6a | Contabilità ricorrente forfettario (canone annuale) | — | **NON a listino** |
| 6b | Contabilità ricorrente artigiani/commercianti (canone annuale, gestione INPS) | — | **NON a listino** |

Storico prezzi (per contesto):
- P.IVA Prof: €149 → €199 (+33%)
- P.IVA Artigiano/Forfettario: €500 → €690 (+38%)
- P.IVA Forfettario+EFAT: €550 → €750 (+36%)
- 730: €79 → €50 scontato (sconto marketing introdotto, non aumento)

---

## 3. Prompt Perplexity Sonar Pro — pronti da copiare

Per ogni area: apri Perplexity Pro → avvia nuova conversazione → incolla il prompt → aspetta. Per le aree 1-5 usa **Sonar Pro** (più rapido). Per l'area 6 usa **Deep Research** (mercato meno trasparente, serve più scavo).

### 3.1 Area 1 — Apertura P.IVA Professionista (no CCIAA)

```
Indagine di mercato sui servizi di apertura Partita IVA online in
Italia per professionisti (categoria che non richiede iscrizione
CCIAA, solo gestione separata INPS o cassa professionale privata).
Anno di riferimento: 2026.

Cerca i competitor italiani principali con listino pubblicato sul
sito. Includi sicuramente (verifica prezzo aggiornato su ciascuno):

- Fiscozen
- TaxMan (taxman.it)
- FidoCommercialista
- Partita IVA Semplice
- Accountant / Accounto.it
- CommercialistaOnline
- IoApro

Aggiungi altri competitor che trovi con listino pubblico e prezzo
esplicito per "apertura Partita IVA professionista" o equivalente.

Per ogni competitor compila una riga con questi campi:

- competitor: nome
- prezzo: importo esatto una tantum in euro (NON canoni annuali)
- incluso: codice ATECO, iscrizione INPS gestione separata,
  consulenza regime fiscale, portale clienti, assistenza prima
  fatturazione, email benvenuto
- escluso: fatturazione elettronica? consulenza continua? contabilità?
- modello: SaaS automatizzato / studio con commercialista iscritto
  all'albo / piattaforma generalista
- tempi: giorni dichiarati per attivazione
- URL fonte: link diretto alla pagina con prezzo

Restituisci risultato in tabella markdown con colonne esatte
indicate sopra. Al fondo aggrega:

- prezzo MIN trovato
- prezzo MAX trovato
- MEDIANA
- nota su eventuali offerte freemium o primo mese gratuito
- nota su differenza prezzo SaaS vs studio reale (se evidente)

Cita sempre le fonti con link URL diretto alla pagina del listino
(non homepage).
```

### 3.2 Area 2 — Apertura P.IVA Artigiano/Commerciante

```
Indagine di mercato sui servizi di apertura Partita IVA online in
Italia per artigiani e commercianti (categoria che richiede oltre
all'apertura AE anche iscrizione Camera di Commercio con ComUnica,
iscrizione INPS gestione artigiani o commercianti, eventuale SCIA
al Comune o SUAP per attività con licenza). Anno 2026.

Cerca competitor italiani con listino pubblicato per questo servizio
completo (non solo apertura AE):

- Fiscozen
- TaxMan
- FidoCommercialista
- Partita IVA Semplice
- Accountant
- CommercialistaOnline
- IoApro
- studi commercialisti online che offrono il pacchetto completo
  CCIAA+INPS+SCIA

Per ogni competitor:

- competitor: nome
- prezzo: importo una tantum in euro
- incluso: apertura AE, CCIAA via ComUnica, INPS artigiani o
  commercianti, SCIA al Comune se applicabile, portale clienti,
  simulazione contributi
- escluso: fatturazione elettronica? licenze specifiche settoriali
  (HACCP, ASL)? contabilità annuale?
- modello: SaaS / studio / mix
- tempi: giorni dichiarati (CCIAA + INPS hanno tempi propri)
- URL fonte

Tabella markdown + aggregati min/max/mediana al fondo + citazioni
URL obbligatorie.

Se molti competitor offrono solo "apertura AE + INPS separata" ma
NON artigiani/commercianti, segnalalo: è un'indicazione che il
segmento artigiani è meno servito online.
```

### 3.3 Area 3 — Apertura P.IVA Forfettario (base)

```
Indagine di mercato sui servizi di apertura Partita IVA online in
regime forfettario in Italia, versione BASE (senza fatturazione
elettronica inclusa). Anno 2026.

Il regime forfettario nel 2026 in Italia prevede: imposta sostitutiva
5% per primi 5 anni startup (oppure 15%), limite ricavi €85.000,
coefficiente di redditività variabile per codice ATECO, gestione
separata INPS o cassa professionale.

Cerca competitor italiani con listino pubblicato per questo servizio:

- Fiscozen (piano forfettario apertura, escluso canone annuale)
- TaxMan
- FidoCommercialista
- Partita IVA Semplice
- Accountant
- CommercialistaOnline
- IoApro
- altri studi/SaaS con listino pubblico

Per ogni competitor:

- competitor: nome
- prezzo: importo una tantum per APERTURA in regime forfettario
  (NON canoni annuali ricorrenti, vedi area 6 per quelli)
- incluso: verifica requisiti forfettario, scelta coefficiente ATECO,
  apertura AE, INPS, simulazione imposta, portale clienti, eventuale
  cassa professionale
- escluso: fatturazione elettronica (quasi sempre a parte), contabilità
  ricorrente, dichiarazione redditi annuale
- modello: SaaS / studio / mix
- tempi: giorni
- URL fonte

Tabella + aggregati min/max/mediana + citazioni.

Segnala eventuali competitor che NON separano "apertura" da "canone
annuale" ma offrono solo pacchetto unificato (es. "prima annualità
tutto incluso"). In quel caso riporta il prezzo totale e nota che
non c'è scorporo.
```

### 3.4 Area 4 — P.IVA Forfettario + Fatturazione elettronica

```
Indagine di mercato su pacchetti apertura P.IVA forfettario italiano
che includono ANCHE la fatturazione elettronica per 12 mesi, nel
2026. Questo tipicamente coincide con licenza di software di
fatturazione (GIS Ranocchi EFAT, FattureInCloud, Aruba Fatturazione,
Fattura24, Libero Sì, ecc.) inclusa nel prezzo di apertura.

Cerca competitor:

- Fiscozen (piano con fattura elettronica)
- TaxMan
- FidoCommercialista
- Partita IVA Semplice
- Accountant
- IoApro
- studi che offrono bundle "apertura + primo anno fattura elettronica"

Per ogni competitor:

- competitor: nome
- prezzo: importo una tantum per pacchetto apertura + 12 mesi fatt.
  elettronica
- software fatturazione incluso: quale (marca) + piano
- incluso: apertura, INPS, verifica forfettario, fatt. elett. 12 mesi,
  setup SDI, anagrafica azienda, app mobile, conservazione 10 anni
- escluso: canone 2° anno in poi?
- modello: SaaS / studio
- tempi: giorni
- prezzo rinnovo 2° anno (se dichiarato)
- URL fonte

Tabella + aggregati min/max/mediana + citazioni.

Segnala chiaramente se il prezzo è "solo primo anno" vs "canone
annuale continuativo": è la differenza chiave per il confronto col
nostro €750 che include la licenza EFAT per 12 mesi.
```

### 3.5 Area 5 — Dichiarazione 730 online

```
Indagine di mercato sui servizi di compilazione e invio telematico
del modello 730 online in Italia per anno fiscale 2025 (dichiarazione
presentata nel 2026). Target: lavoratori dipendenti, pensionati,
percettori di redditi assimilati.

Cerca competitor italiani:

- CAF CGIL online
- CAF CISL online
- CAF UIL online
- ACLI
- SmartCAF
- 730.sos
- Fiscozen (730)
- TaxMan (730)
- FidoCommercialista (730)
- studi commercialisti online con servizio 730 a listino
- servizi post-precompilato Agenzia Entrate (assistenza al
  precompilato autonomo, es. piattaforme che danno checklist + review)

Per ogni competitor:

- competitor: nome
- prezzo: importo una tantum
- incluso: review precompilato, aggiunta detrazioni/deduzioni, invio
  telematico, gestione ricevute, assistenza integrazioni, archiviazione
  documenti
- escluso: 730 integrativo? multi-anno? Redditi PF per P.IVA?
- modello: CAF / studio commercialista online / SaaS
- tempi: giorni lavorativi
- URL fonte

Tabella + aggregati min/max/mediana + citazioni.

Segnala separatamente i CAF (prezzi tipicamente più bassi, €20-40)
dai servizi commercialisti online (€60-120 tipici) — sono due
segmenti di mercato distinti.
```

### 3.6 Area 6 — Contabilità ricorrente annuale (2 sotto-aree)

Usa **Deep Research** qui, non Sonar Pro. Prompt combinato:

```
Indagine di mercato APPROFONDITA sui servizi di contabilità ricorrente
annuale (canone 12 mesi) per Partite IVA italiane, offerti online nel
2026. Divido in due sotto-aree distinte:

SOTTO-AREA A: Contabilità forfettario (canone annuale)
Target: titolari P.IVA in regime forfettario già aperti, che cercano
gestione annuale online (non apertura). Include tipicamente:
- Conservazione documenti fiscali
- Registro contabile forfettario
- Calcolo imposta sostitutiva
- Gestione scadenze (F24, INPS, 1° e 2° acconto)
- Dichiarazione dei redditi annuale (Modello Redditi PF con LM)
- Eventuale fatturazione elettronica (se dovuta)
- Consulenza continuativa email/videocall

SOTTO-AREA B: Contabilità artigiani/commercianti con gestione INPS
Target: titolari P.IVA artigiani o commercianti (non forfettari) che
cercano gestione annuale completa. Include:
- Contabilità semplificata o ordinaria
- Liquidazioni IVA trimestrali/mensili
- F24 periodici
- Gestione INPS artigiani/commercianti (denunce, acconti, saldi)
- Modello Redditi PF/SP/SC
- Adempimenti camerali ricorrenti

Per OGNUNA delle 2 sotto-aree, cerca competitor italiani con listino
pubblicato:

- Fiscozen (piano annuale)
- TaxMan
- FidoCommercialista
- Partita IVA Semplice
- Accountant
- CommercialistaOnline
- IoApro
- studi commercialisti tradizionali online con listino per canone
  annuale (non preventivo su misura)
- software gestionali "con commercialista incluso" (es. Fatture in
  Cloud Pro, Aruba Commercialista)

Per ogni competitor restituisci TABELLA SEPARATA per sotto-area A e
sotto-area B con:

- competitor: nome
- canone: annuale in euro (€/anno)
- fatturazione: canone annuale intero o mensile ricorrente?
- incluso: elenca esplicito (contabilità, dichiarazione, scadenzario,
  fatt. elett., consulenza, portale)
- escluso: cosa è a parte (apertura, dichiarazione se non forfettario,
  casse professionali, contenzioso)
- modello: SaaS / studio / mix
- volume ricavi target: es. "fino a €30k", "fino a €85k"
- URL fonte

Alla fine di OGNI tabella: aggregati min/max/mediana.

IMPORTANTE: per la sotto-area B il mercato online è meno trasparente
— molti studi tradizionali lavorano a preventivo. Se trovi pochi
prezzi pubblici, segnalalo esplicitamente e dai range indicativi da
fonti secondarie (forum professionisti, gruppi Facebook, portali
tipo ProntoPro se hanno listini strutturati).

Cita sempre URL fonte.
```

---

## 4. Template tabella output

Per ogni area, dopo aver ricevuto la risposta Perplexity, copia qui
sotto la tabella e incolla i dati. Struttura uniforme per tutte le 6
aree (7 con 6a/6b separate):

### Area 1 — P.IVA Professionista

| Competitor | Prezzo | Incluso | Escluso | Modello | Tempi | URL |
|---|---|---|---|---|---|---|
| _(da compilare)_ | — | — | — | — | — | — |

Aggregati:
- MIN: €_
- MAX: €_
- MEDIANA: €_
- Note: _

**Nostra posizione**: €199 → _(sotto / allineato / sopra)_ rispetto alla mediana

### Area 2 — P.IVA Artigiano/Commerciante

| Competitor | Prezzo | Incluso | Escluso | Modello | Tempi | URL |
|---|---|---|---|---|---|---|
| | | | | | | |

Aggregati: MIN €_ / MAX €_ / MEDIANA €_
**Nostra posizione**: €690 → _

### Area 3 — P.IVA Forfettario base

| Competitor | Prezzo | Incluso | Escluso | Modello | Tempi | URL |
|---|---|---|---|---|---|---|
| | | | | | | |

Aggregati: MIN €_ / MAX €_ / MEDIANA €_
**Nostra posizione**: €690 → _

### Area 4 — P.IVA Forfettario + Fatt. elettronica

| Competitor | Prezzo | Software incluso | Rinnovo 2° anno | Modello | Tempi | URL |
|---|---|---|---|---|---|---|
| | | | | | | |

Aggregati: MIN €_ / MAX €_ / MEDIANA €_
**Nostra posizione**: €750 → _

### Area 5 — 730 online

| Competitor | Prezzo | Incluso | Escluso | Modello | Tempi | URL |
|---|---|---|---|---|---|---|
| | | | | | | |

Aggregati separati:
- Segmento CAF: MIN €_ / MAX €_ / MEDIANA €_
- Segmento commercialisti online: MIN €_ / MAX €_ / MEDIANA €_

**Nostra posizione**: €50 scontato da €79 → _

### Area 6a — Contabilità ricorrente forfettario

| Competitor | Canone annuale | Fatturazione | Incluso | Volume target | Modello | URL |
|---|---|---|---|---|---|---|
| | | | | | | |

Aggregati: MIN €_/anno / MAX €_/anno / MEDIANA €_/anno
**Decisione da prendere**: introdurre a listino? A quale prezzo?

### Area 6b — Contabilità ricorrente artigiani/commercianti

| Competitor | Canone annuale | Fatturazione | Incluso | Volume target | Modello | URL |
|---|---|---|---|---|---|---|
| | | | | | | |

Aggregati: MIN €_/anno / MAX €_/anno / MEDIANA €_/anno
Nota trasparenza mercato: _
**Decisione da prendere**: introdurre a listino? A quale prezzo?

---

## 5. Note operative

**Account Perplexity**:
- Perplexity Pro (€20/mese) ti dà accesso a Sonar Pro e Deep Research
- Deep Research ha limiti giornalieri nel piano Pro (300 ricerche/mese)
- Alternativa gratuita: Perplexity free ha Sonar base, meno completo

**Gestione citazioni**:
- Ogni risposta Perplexity include footnote con URL
- Copia sempre l'URL diretto alla pagina listino, non l'homepage
- Se un competitor cambia prezzo tra il momento della ricerca e il
  report finale, annota la data di consultazione nel template

**Stima tempi**:
- Sonar Pro: 5-10 min per area × 5 aree (1-5) = ~40 min
- Deep Research: 15-30 min per area × 1 area (6) = ~30 min
- Compilazione template: ~10 min per area
- **Totale stimato**: 2-3 ore di lavoro umano

**Consiglio workflow**:
1. Fai un'area alla volta, non tutte in batch (rischio confondere i dati)
2. Tra area e area, verifica manualmente 2-3 competitor sui loro siti
   reali — Perplexity a volte cita prezzi obsoleti
3. Salva le conversazioni Perplexity (bookmark nel tuo account) per
   poterle riaprire se serve chiarimenti in fase di report

---

## 6. Appendice 1 — Incoerenze prezzi nel sito (TODO a prescindere)

Durante il mapping sono state trovate **14 occorrenze** di prezzi
obsoleti nel codice/testo del sito. Vanno aggiornate a prescindere
dall'esito dell'indagine di mercato, in una sessione dedicata.

| # | File | Riga | Testo obsoleto | Valore canonico |
|---|---|---|---|---|
| 1 | `app/faq/page.tsx` | 38 | "parte da 149 euro" (P.IVA Professionista) | €199 |
| 2 | `app/faq/page.tsx` | 59 | "parte da 79 euro" (730) | €50 scontato da €79 |
| 3 | `app/servizi/_data/prodotti.ts` | 24 | metaDesc "730 online a 79 euro" | €50 scontato da €79 |
| 4 | `app/blog/aprire-partita-iva-online/page.tsx` | 239 | "Da 149 euro" | €199 |
| 5 | `app/blog/aprire-partita-iva-online/page.tsx` | 255 | "Da 500 euro/anno" (forfettario apertura) | €690 apertura |
| 6 | `app/blog/aprire-partita-iva-online/page.tsx` | 316 | "parte da 149 euro" | €199 |
| 7 | `app/blog/aprire-partita-iva-online/page.tsx` | 336 | "A partire da 149 euro" | €199 |
| 8 | `app/blog/commercialista-online/page.tsx` | 266 | "Da 79 euro" (730) | €50 scontato da €79 |
| 9 | `app/blog/commercialista-online/page.tsx` | 270 | "Da 149 euro" (P.IVA) | €199 |
| 10 | `app/blog/commercialista-online/page.tsx` | 274 | "Da 500 euro/anno" | €690 apertura |
| 11 | `app/blog/commercialista-online/page.tsx` | 324 | "730 da 79 euro, P.IVA da 149 euro" | €50 / €199 |
| 12 | `app/blog/come-fare-730-online/page.tsx` | 198, 335, 348, 372 | "Da 79 euro" (730, 4 occorrenze) | €50 scontato da €79 |
| 13 | `app/guide/documentazione-730/page.tsx` | 111, 149 | "€79" | €50 scontato da €79 |
| 14 | `app/guide/documentazione-partita-iva/page.tsx` | 141-142 | "Professionista (€170), Artigiano (€500), Forfettario (€500), Forfett+EFAT (€550)" | €199 / €690 / €690 / €750 |
| 15 | `REPORT.md` | 29-33, 40-42, 52-53 | Tabelle §2.1 e §2.2 obsolete | Tutti aggiornati |

**Nota**: il precedente prezzo P.IVA Professionista era **€149** (non
€150 come riportato in REPORT.md né €170 come nella guida). La memoria
`prezzi-allineamento.md` aveva una storia incerta — la verità è che
€149 era il prezzo dopo il listino commit `61f6b08`, prima che il
listino anchor di `631a93b` lo portasse a €199.

**Questi TODO vanno chiusi prima del go-live pubblico**. Rischio
reputazionale alto: un cliente che vede €149 in FAQ e poi €199 al
checkout può ritenere il sito ingannevole (art. 21 Codice Consumo).

---

## 7. Appendice 2 — Come interpretare i risultati

Quattro esiti possibili per ciascuna area, con criterio decisionale:

### 7.1 Sottostimato (sotto mediana di mercato, sotto MIN)

Il mercato tollera un prezzo più alto. Opzioni:
- **Alza gradualmente**: +10-15% ora, poi verifica conversion
- **Introduci anchor visivo**: se il mercato è a €250 e tu a €199,
  mostra €199 come "prezzo lancio" con data scadenza reale (non
  finto anchor, pratica commerciale ingannevole ex dir UE Omnibus
  2022)
- **Non fare nulla**: se la tua strategia è "entry price" per
  acquisire clienti e monetizzare sul ricorrente, tenere basso va
  bene

### 7.2 Allineato (±10% dalla mediana)

Prezzo ok, lavora sul **valore percepito** non sul numero:
- Arricchisci i bullet "incluso" nelle pagine prodotto
- Migliora la copia del CTA (es. "Sei al sicuro con commercialisti
  iscritti all'albo")
- Aggiungi elementi trust (testimonial reali quando arriveranno)

### 7.3 Sovrastimato (sopra MAX di mercato)

Rischio abbandono carrello alto. Opzioni:
- **Ricalibra**: porta in linea con MAX o mediana alta
- **Crea piano "basic"** sotto l'anchor corrente (es. "apertura
  express €149 senza portale", tieni €199 come "full")
- **Giustifica il premio**: se tu includi davvero qualcosa che gli
  altri non includono, rendilo ultra-evidente nella pagina prodotto
  (tabella comparativa, senza nominare concorrenti)

### 7.4 Servizio non a listino (6a / 6b)

Se il mercato mostra prezzo chiaro e volumi significativi per
contabilità ricorrente forfettario/artigiani:
- **Valuta introduzione** come nuovi `Servizio` in
  `app/lib/prezzi-default.ts`
- **Richiede**:
  - Nuova entry in `DEFAULT_PREZZI` con `id`, `price`, `slug`
  - Nuovo slug in `app/servizi/_data/prodotti.ts` con tagline,
    bullet, FAQ dedicate
  - Pagina prodotto `/servizi/contabilita-forfettario-annuale`
    (o simile)
  - Checkout adattato per prodotto ricorrente (Stripe subscription
    vs one-time?) — richiede decisione strutturale
  - ProductCredentials aggiornato (author + authorAlbo)
  - Aggiornamento FAQ, guida, blog con nuovo listino

Lavoro stimato: ~4-6 ore di sviluppo per ciascuna delle 2 aree se
decidi di introdurle. Non in questa sessione, in un plan dedicato.

---

## 8. Flusso operativo

1. **Apri Perplexity Pro** nel browser. Conferma di essere su piano
   Pro (non free).

2. **Esegui area per area**, non tutte in batch:
   - Nuova conversazione per ogni area (non riutilizzare thread
     precedenti — confondono il contesto)
   - Copia il prompt dal §3 del brief
   - Incolla in Perplexity e aspetta risposta completa
   - Controlla che la risposta contenga tabella + aggregati +
     citazioni URL
   - Se manca qualcosa, chiedi follow-up (es. "mancano aggregati
     finali")

3. **Compila il template §4** con i dati ricevuti, una tabella per
   area. Aggiungi sempre la data di consultazione (Perplexity a
   volte cita prezzi obsoleti; tu puoi verificare manualmente sui
   siti 3-4 competitor dopo l'estrazione).

4. **Segnala incoerenze** nei tuoi dati: se Perplexity dà prezzi
   diversi da quelli che vedi direttamente sul sito competitor,
   fidati del sito competitor (fonte diretta) e annota nel template.

5. **Salva il file aggiornato** come `docs/market-research-results-2026-04.md`
   (nuovo file, non sovrascrive questo brief). Committa quando hai
   finito la raccolta — questo brief non viene modificato.

6. **Torna in chat con me** e condividi il file results. Produrrò
   il **report comparativo** con raccomandazioni per ogni area
   (tenere/alzare/abbassare/introdurre), + eventuale plan di
   rettifica prezzi del listino.

7. **Sessione separata**: chiudi i 14 TODO di Appendice 1 (fix
   prezzi obsoleti nel sito). Non legato all'indagine, ma da fare
   prima del go-live a prescindere.

---

*Brief redatto: 2026-04-19 · Ultima revisione: 2026-04-19*
*Indagine da eseguire: non ancora avviata*
