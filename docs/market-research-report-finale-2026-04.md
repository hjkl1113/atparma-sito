# Report decisionale prezzi AT Parma — sintesi finale

**Data**: 2026-04-19
**Metodologia**: cross-validazione dati raccolti da due AI (Claude WebSearch + ChatGPT con search OpenAI). Convergenza alta su tutti i competitor, qualche prezzo aggiuntivo da OpenAI (TaxMan €199, Fisco Adesso €350, SmartCAF €59,99) che completa il quadro.
**Output**: classificazione **tenere / abbassare / riposizionare / introdurre** voce per voce, con prezzi consigliati.

---

## 1. Executive summary

Il confronto strutturale tra AT Parma e competitor rivela un **problema di modello**, non solo di listino:
- I competitor digitali (Fiscozen, TaxMan, FidoCommercialista, Quickfisco, FlexTax, Fisco Adesso) vendono **sottoscrizioni annuali** (€199-599/anno) che includono apertura + gestione + fatturazione elettronica.
- AT Parma vende **aperture una tantum** senza canone ricorrente esposto, a prezzi che per il cliente sembrano confrontabili con un anno intero di servizio concorrente.

**Risultato**: 730 (€50) e Artigiano (€690) difendibili; Professionista (€199) fragile come prodotto semplice; Forfettario base (€690) e Forfettario+EFAT (€750) sovrastimati vs mercato digitale.

**Opportunità enorme**: 2 voci non a listino (contabilità ricorrente forfettario e artigiani) dove il mercato è chiaro e i margini interessanti.

---

## 2. Tabella master decisionale

| # | Servizio | Prezzo attuale | Mercato | Decisione | Prezzo proposto |
|---|---|---|---|---|---|
| 1 | Dichiarazione 730 | €50 da €79 | €39-128 | ✅ **TENERE** | €50 da €79 (invariato) |
| 2 | P.IVA Professionista | €199 | gratis/€199-499 abbonamenti | 🟡 **RIPOSIZIONARE** | €199 premium standalone + bundle alternativo |
| 3 | P.IVA Artigiano/Commerciante | €690 | €599+€200 Fiscozen, €560 FlexTax | ✅ **TENERE** | €690 (invariato) con narrazione migliorata |
| 4 | P.IVA Forfettario base | €690 | €199-499/anno abbonamenti | 🔴 **ABBASSARE o RIPOSIZIONARE** | Opzione bundle €549 con 12 mesi gestione |
| 5 | P.IVA Forfettario + EFAT | €750 | €399 Fiscozen tutto incluso | 🔴 **ABBASSARE o RIPOSIZIONARE** | Bundle €649 con 12 mesi gestione + fatturazione |
| 6a | Contabilità forfettario annuale | ❌ NON a listino | €199-499/anno | ⭐ **INTRODURRE** | €449/anno |
| 6b | Contabilità artigiani annuale | ❌ NON a listino | €399-599/anno | ⭐ **INTRODURRE** | €599/anno |

---

## 3. Analisi dettagliata voce per voce

### 3.1 Dichiarazione 730 — €50 da €79 ✅ TENERE

**Dati mercato (consolidati Claude + OpenAI)**:
- Precompilata Agenzia Entrate: gratis (self-service)
- CAF ACLI online (il730.online): da €39
- SmartCAF: €59,99 (per 730 singolo)
- CAF sindacati iscritti: €15-61 (variabile per reddito)
- CAF sindacati non iscritti: €50-128
- Commercialisti tradizionali: €100-150+

**Posizione AT Parma a €50**:
Sweet spot perfetto. Sopra il €39 CAF online (il cliente percepisce maggior valore: commercialista vero vs sportello generico), sotto commercialista tradizionale (€100+). L'anchor €79 barrato crea percezione "offerta limitata" compliance-safe perché il servizio è recente.

**Decisione**: TENERE senza modifiche. È il prodotto meglio posizionato del catalogo.

**Azione**: nessuna.

---

### 3.2 P.IVA Professionista — €199 🟡 RIPOSIZIONARE

**Dati mercato (consolidati)**:
- **TaxMan**: €199/anno IVA incl (apertura inclusa + dichiarazione + F24 + app fatturazione)
- **FidoCommercialista**: €264/anno + IVA (€322 incl) — apertura gratis
- **Fisco Adesso**: €350/anno + IVA
- **Quickfisco**: €365/anno IVA incl (apertura gratis professionisti)
- **FlexTax**: €366/anno IVA incl
- **Fiscozen**: €399/anno (gestione separata INPS) — apertura standalone €200 extra
- **ForfettApp**: €264/anno IVA incl (apertura inclusa)

**Problema**: TaxMan a **€199 = identico nostro prezzo** ma dà un anno intero di gestione. Il cliente che confronta in homepage scappa subito.

**Due strade possibili**:

**Strada A — Premium standalone (mantieni €199)**:
- Tieni €199 MA cambia la narrazione nella pagina prodotto
- Enfasi: "Non un'app SaaS, ma consulenza con commercialista iscritto all'albo (Parma o Brescia). Scelta codice ATECO personalizzata. Mandato professionale. Portale con mandato firmato."
- Aggiungi box comparativo esplicito: "Perché non paghi solo €199 per un'app"
- Target: clienti che cercano studio reale, non scalabile su cold traffic

**Strada B — Bundle entry (€249-299)**:
- Riposiziona come "Apertura + 3 mesi consulenza" a €249
- Include: apertura + consulenza codice ATECO + 3 chiamate + scadenziario primo trimestre
- Poi upgrade a "Contabilità forfettario annuale" €449 (vedi §3.6a)
- Migrazione naturale dall'onboarding al ricorrente

**Raccomandazione**: **Strada A** nel breve termine (zero sviluppo, solo copy), **Strada B** nel medio se introduciamo la contabilità ricorrente (trigger naturale).

**Azione**:
- Immediata: riscrivere pagina `/servizi/piva-professionista` con narrativa "studio reale vs app"
- Medio termine: bundle quando introduciamo §3.6a

---

### 3.3 P.IVA Artigiano/Commerciante — €690 ✅ TENERE

**Dati mercato**:
- **Fiscozen**: €599/anno forfettario artigiani/commercianti + €200 apertura standalone = €799 totale primo anno
- **Quickfisco**: €365/anno + €285 una tantum pratiche amministrative artigiani = €650 primo anno
- **FlexTax**: €560 IVA incl avvio artigiani, €399/anno dal 2° anno = €560 primo anno
- **FidoCommercialista**: €264/anno + IVA + €150+IVA iscrizione CCIAA primo anno = ~€476 primo anno

**Posizione AT Parma a €690**: allineato-alto ma difendibile. Siamo sopra la fascia digitale lean (€476-650 FlexTax/Fido/Quickfisco) ma vicini a Fiscozen (€799 con apertura + annuale).

**Condizione per restare competitivi**: il prezzo regge solo se la comunicazione evidenzia che AT Parma **include realmente**:
- Apertura P.IVA + CCIAA ComUnica + SCIA al SUAP/Comune (quando serve)
- Iscrizione INPS artigiani/commercianti (gestione dedicata)
- Consulenza codice ATECO artigianale/commerciale
- Portale clienti 12 mesi
- Simulazione contributi INPS

Oggi la pagina `/servizi/piva-artigiano-commerciante` elenca bene questi punti. ✅ Nessun cambio.

**Decisione**: TENERE €690, migliorare solo copy della pagina prodotto per evidenziare "cosa NON include chi costa meno" (es. chi chiede €365 + €285 = €650 non fa SCIA, non fa consulenza codice ATECO).

**Azione**: revisione copy pagina prodotto, no cambio prezzo.

---

### 3.4 P.IVA Forfettario base — €690 🔴 ABBASSARE o RIPOSIZIONARE

**Dati mercato**:
- **TaxMan**: €199/anno (apertura inclusa + gestione + fatturazione)
- **FidoCommercialista**: €264/anno + IVA (~€322 incl)
- **Fisco Adesso**: €350/anno + IVA
- **Quickfisco**: €365/anno IVA incl
- **FlexTax**: €366/anno IVA incl
- **Fiscozen**: €399/anno IVA incl (gestione separata)
- **ForfettApp**: €264/anno

**Problema critico**: il nostro €690 per **solo apertura** forfettario è **1,7x-3,5x il mercato** che include gestione annuale. Sul web freddo questo prezzo comunica "caro" prima ancora che il cliente legga cosa è incluso.

**Due strade**:

**Strada A — Abbassare apertura a €349**:
- Nuovo prezzo: €349 (in linea con Fisco Adesso, sopra TaxMan/Fido/Quickfisco)
- Narrativa: "Apertura premium con commercialista reale vs app SaaS. Mandato firmato, consulenza personalizzata, portale 12 mesi"
- Rischio: perdo margine (-49%), ma acquisisco più lead

**Strada B — Bundle "Apertura + primo anno gestione"**:
- Nuovo prezzo: €549 per bundle "apertura + 12 mesi contabilità forfettario"
- Equivalente percepito: apertura (€349 standalone) + gestione (€449/anno, vedi §3.6a) = €798 → bundle sconto a €549 = **31% di sconto**
- Messaggio: "Paghi €549, sei a posto per un anno intero. Dal 13° mese, canone €449/anno."
- Vantaggio: cattura cliente su intero ciclo, margine complessivo maggiore

**Raccomandazione**: **Strada B** (bundle). Sfrutta il trigger del momento acquisto per vincolare il cliente al ricorrente, che è il vero business (vedi §3.6a).

Se vuoi restare sulla logica una tantum semplice: **Strada A** (€349).

**Azione**:
- Decisione strategica di Alessandro: bundle o apertura-solo?
- Strada A: modifica solo `DEFAULT_PREZZI` (€690 → €349)
- Strada B: richiede introduzione §3.6a (Stripe subscription) + restructure checkout + nuova pagina prodotto "Apertura + gestione"

---

### 3.5 P.IVA Forfettario + EFAT — €750 🔴 ABBASSARE o RIPOSIZIONARE

**Dati mercato**:
- Fatturazione elettronica è **GIÀ INCLUSA** in quasi tutti gli abbonamenti annuali competitor:
  - Fiscozen €399 include fatture + conservazione
  - TaxMan €199 include fatture
  - Fido €264 include
  - Quickfisco, FlexTax, Fisco Adesso: idem

Valori aggiuntivi come software a parte:
- Aruba Fatturazione: €29,90/anno
- FattureInCloud forfettari: €48/anno
- Portale AgE: gratis

**Problema**: i nostri €60 extra per EFAT (da €690 a €750) sono **ingiustificabili** quando il mercato inchiude già fattura elettronica nei €199-399/anno. Il cliente che valuta vede "€750 = 1,9x Fiscozen che mi dà già tutto".

**Soluzioni**:

**Strada A — Unificare apertura (rimuovere EFAT separato)**:
- Elimina il prodotto "Forfettario + EFAT" dal catalogo
- Riduci "Forfettario base" a €399 includendo già fatturazione elettronica EFAT 12 mesi
- Allineato Fiscozen

**Strada B — Bundle apertura + gestione + fatturazione (€649)**:
- "Apertura + 12 mesi contabilità + fatturazione EFAT" a €649
- Competitivo vs Fiscozen €399 per il valore "studio reale + fatturazione premium GIS Ranocchi" (vs app no-name)
- Messaggio: "Stripe charge una tantum oggi, zero pensieri per 12 mesi"

**Raccomandazione**: **Strada B bundle €649**. Giustifica il premium vs Fiscozen (+€250) col valore studio reale + software fatturazione premium (GIS Ranocchi vs app generica). Coerente con strategia §3.4.

**Azione**: stessa decisione strategica di §3.4. Se bundle, richiede Stripe subscription + nuova struttura prodotto.

---

### 3.6a Contabilità forfettario annuale ⭐ INTRODURRE

**Non a listino oggi**. Opportunità grande.

**Dati mercato**:
- TaxMan: €199/anno
- FidoCommercialista: €264/anno + IVA
- ForfettApp: €264/anno
- Fisco Adesso: €350/anno + IVA
- Quickfisco: €365/anno
- FlexTax: €366/anno
- Fiscozen: €399/anno (gestione separata), €499/anno (casse private)

**Analisi OpenAI**: "range sensato €349-449/anno per versione base ben competitiva, oppure €499-599/anno per premium realmente assistita".

**Proposta AT Parma**: **€449/anno** per piano standard.
- Posizionamento: **30% sopra Fido/TaxMan** (giustificabile col valore "studio reale iscritto albo Parma/Brescia")
- **50€ sopra Fisco Adesso** (allineato al segmento medium-premium)
- **Sotto Fiscozen** per casse private (€499) pur essendo studio vero
- Include: contabilità, dichiarazione redditi (LM), scadenziario, 3 videocall/anno, fatturazione elettronica EFAT

**Piano premium opzionale**: **€599/anno** con video illimitate + consulenza straordinaria inclusa.

**Modello Stripe**: **subscription** (ricorrente annuale con tacito rinnovo e libera disdetta 30gg prima della scadenza). Richiede:
- Stripe Subscriptions (non one-time checkout)
- Nuovo componente checkout con selezione rinnovo automatico
- Gestione cancellation + dunning
- Email automatizzate (onboarding, pre-rinnovo, rinnovo, cancellazione)

**Azione**: plan di sviluppo dedicato (4-6h lavoro).

---

### 3.6b Contabilità artigiani/commercianti annuale ⭐ INTRODURRE

**Non a listino oggi**. Opportunità.

**Dati mercato**:
- Quickfisco (artigiani): €365-475/anno + €285 una tantum amministrativi
- FlexTax (artigiani dal 2° anno): €399/anno IVA incl
- Fiscozen (artigiani/commercianti forfettario): €599/anno
- FidoCommercialista (no piano dedicato artigiani, copre via variazioni)

**Gap di mercato**: meno trasparente del forfettario puro. Molti studi tradizionali lavorano a preventivo. I pochi prezzi pubblici sono €399-599/anno.

**Analisi OpenAI**: "spazio per listino AT Parma tra €449 e €599/anno, a seconda del supporto reale incluso".

**Proposta AT Parma**: **€599/anno** piano standard.
- Allineato a Fiscozen (copertura equivalente)
- Premio vs Quickfisco + FlexTax (~€100-200 in più) giustificato dal valore "presa in carico completa studio reale + gestione INPS artigiani/commercianti dedicata"
- Include: contabilità semplificata/ordinaria, IVA periodica, F24, gestione INPS artigiani/commercianti, Modello Redditi PF/SP

**Piano premium opzionale**: **€799/anno** con liquidazioni mensili + contabilità ordinaria + consulenza straordinaria.

**Modello Stripe**: stesso di §3.6a (subscription ricorrente).

**Azione**: stesso plan di §3.6a, possibilmente sviluppato insieme.

---

## 4. Modifiche strutturali richieste

### 4.1 Non invasive (solo copy + listino) — 1-2h

- Riscrivere pagina `/servizi/piva-professionista` con narrativa "studio reale vs app" (§3.2 strada A)
- Migliorare copy `/servizi/piva-artigiano-commerciante` con "cosa NON include chi costa meno" (§3.3)
- Fix 14 incoerenze prezzi obsoleti censiti in brief Perplexity (€149/€170/€79 vari)

### 4.2 Medio invasive (struttura catalogo) — 4-8h

**Scenario A — "solo abbassare"**:
- `DEFAULT_PREZZI`: forfettario base €690 → €349, rimuovere EFAT separato, riallineare
- Pagine prodotto aggiornate
- Nessuna subscription Stripe

**Scenario B — "bundle apertura + gestione ricorrente" (raccomandato)**:
- Nuovi prodotti in `DEFAULT_PREZZI`:
  - `contabilita-forfettario-annuale` €449/anno
  - `contabilita-artigiani-annuale` €599/anno
  - `bundle-piva-forfettario-primo-anno` €549 una tantum (poi €449/anno)
  - `bundle-piva-forfettario-efat-primo-anno` €649 una tantum (poi €449/anno)
- Rimuovere `piva-forfettario` (€690) e `piva-forfettario-efat` (€750) attuali
- Nuove pagine prodotto `/servizi/contabilita-forfettario`, `/servizi/contabilita-artigiani`
- **Stripe Subscriptions** (modifica `/api/checkout/route.ts` da one-time a subscription per nuovi prodotti)
- Email automatizzate rinnovo/cancellazione
- Portale clienti aggiornato per gestire stato abbonamento

### 4.3 Calendario decisionale

- **Oggi**: Alessandro decide scenario A o B
- **Entro 7 giorni**: fix 14 incoerenze prezzi obsoleti (§4.1) → prerequisite go-live
- **Entro 14 giorni** (se scenario B): sviluppo bundle + subscription Stripe
- **Entro 21 giorni**: test E2E checkout nuovo modello
- **Go-live pubblico**: dopo decisione strategica A/B completata

---

## 5. Prossimi step operativi (ordine priorità)

1. **Alessandro decide strategia A o B** (serve decisione umana, non tecnica)
2. **Fix incoerenze prezzi obsoleti** (14 occorrenze già censite nel brief)
3. **Riscrivere copy** `/servizi/piva-professionista` e `/servizi/piva-artigiano-commerciante`
4. **Se scenario A**: modifica solo `DEFAULT_PREZZI`, commit, blob admin, live (1h lavoro)
5. **Se scenario B**: plan dedicato per Stripe Subscriptions + nuovi prodotti + nuove pagine + portale (6-8h lavoro, sessione separata)
6. **Aggiornare REPORT.md a v1.8** con decisione presa e nuovo catalogo

---

## 6. Fonti dati

**Dati Claude (WebSearch + WebFetch verificati 2026-04-19)**:
- [Fiscozen Prezzi](https://www.fiscozen.it/prezzi/)
- [FidoCommercialista](https://fidocommercialista.it/apertura-partita-iva-online)
- [Quickfisco](https://quickfisco.it/)
- [FlexTax](https://flextax.it/costo-apertura-partita-iva/)

**Dati OpenAI (search ChatGPT 2026-04-19)**:
- Prezzi TaxMan: €199/anno IVA incl (apertura inclusa + dichiarazione + F24 + app)
- Prezzi Fisco Adesso: €350/anno + IVA
- Prezzi SmartCAF 730: €59,99 singolo
- Integrazione dati Fiscozen per segmenti artigiani vs gestione separata
- Conferma Quickfisco artigiani: €365/anno + €285 una tantum

**Segmento 730**:
- [il730.online CAF ACLI](https://il730.online/costo-730-caf/)
- [BonusX prezzi 730](https://bonusx.it/lavoratori-e-disoccupati/quanto-costa-fare-il-730/)
- [PMI.it costi 730](https://www.pmi.it/impresa/contabilita-e-fisco/409734/dichiarazione-redditi-2025-quanto-costa-caf-e-commercialista.html)

---

*Report consolidato 2026-04-19 — da due AI indipendenti + cross-validazione. Pronto per decisione strategica Alessandro.*
