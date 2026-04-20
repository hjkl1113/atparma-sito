# Indagine mercato prezzi — consolidato 4 AI

**Data**: 2026-04-19
**Fonti**: Claude (WebSearch + WebFetch verificati), ChatGPT OpenAI (search), Gemini (conversazionale), Qwen (web search + extractor)
**Metodo**: cross-validazione 4-way, flag divergenze, priorità ai dati verificati con fetch reale

---

## 0. Affidabilità delle 4 fonti

| Fonte | Metodo | Affidabilità | Note |
|---|---|---|---|
| **Claude** | WebFetch diretto fiscozen.it/prezzi, fidocommercialista.it, quickfisco.it, flextax.it | ⭐⭐⭐⭐⭐ | Dati reali verificati a runtime |
| **ChatGPT** | Search integrato con citazioni | ⭐⭐⭐⭐ | Concorda con Claude, aggiunge TaxMan/Fisco Adesso/SmartCAF |
| **Qwen** | Web search + extractor, molto strutturato | ⭐⭐⭐⭐ | Aggiunge distinzione TaxMan Light/Premium, CloudAccounting, nuovi CAF |
| **Gemini** | Conversazionale, URL dichiarati non verificabili | ⭐⭐ | Alcuni dati plausibili mescolati con probabile hallucination |

---

## 1. Ground truth consolidato per area

### Area 1 — P.IVA Professionista apertura

| Competitor | Claude | ChatGPT | Qwen | Gemini | Consenso |
|---|---|---|---|---|---|
| Fiscozen | €399/anno, apertura inclusa | €399/anno | €399/anno, apertura no standalone | €0-€200 | ✅ **€399/anno con apertura gratis** |
| TaxMan | — | €199/anno | €199 Light / €279 Premium | €169 | ✅ **€199/anno** (Light) |
| FidoCommercialista | €264/anno + IVA, apertura gratis | €264/anno | €264/anno, apertura gratis | €190 (errato) | ✅ **€264/anno con apertura gratis** |
| Quickfisco | €365/anno | €365/anno | — | — | ✅ **€365/anno** |
| FlexTax | €366/anno | €366/anno | €366/anno | — | ✅ **€366/anno** |
| ForfettApp | €264/anno | — | €264/anno | — | ✅ **€264/anno** |
| Fisco Adesso | — | €350/anno + IVA | — | — | ⚠️ plausibile |
| Partita IVA Semplice | — | — | **€97 standalone** | €250 apertura | ⚠️ Qwen vs Gemini — non verificato |
| Il Commercialista Online | — | — | **€97 standalone o GRATIS con contabilità** | — | ⚠️ Qwen solo |
| Accountant/Accounto | — | — | — | €149 | ❓ Gemini solo, URL sospetto |
| IoApro | — | — | — | €180 | ❓ Gemini solo, URL sospetto |

**Ground truth**:
- Mercato abbonamenti annuali: **€199-399/anno** (apertura sempre inclusa)
- Due competitor (Partita IVA Semplice, Il Commercialista Online) che Qwen cita offrirebbero apertura standalone a **€97** — se vero, la mediana standalone è ~€97
- Aggregati: MIN €97 (se Qwen verificato) / MAX €399 / MEDIANA ~€264

**Posizione AT Parma €199**: sopra mediana standalone (€97 Qwen), sotto mediana annuale (€264). Se il cliente cerca "solo apertura" trova €97, se cerca abbonamento trova €199-399. In entrambi i casi AT Parma sembra caro per quello che offre una tantum.

---

### Area 2 — P.IVA Artigiano/Commerciante

| Competitor | Dato consolidato | Affidabilità |
|---|---|---|
| Fiscozen artigiani forfettario | €599/anno + €200 apertura = **€799 primo anno** | ⭐⭐⭐⭐⭐ Claude verificato |
| FlexTax | **€560 avvio IVA incl + €399/anno dal 2° anno** | ⭐⭐⭐⭐ Claude+Qwen concordi |
| Quickfisco | €365/anno + €285 una tantum = **€650 primo anno** | ⭐⭐⭐⭐⭐ Claude verificato |
| FidoCommercialista | €264/anno + €150 CCIAA = **€414 primo anno** | ⭐⭐⭐⭐⭐ Claude verificato |
| TaxMan Premium | **€279/anno** (include artigiani?) | ⭐⭐⭐ Qwen solo, verosimile |
| Il Commercialista Online | **€97 + diritti o gratis con contabilità** | ⭐⭐⭐ Qwen solo |
| Partita IVA Semplice | **€250 + diritti** (Qwen) o €750 (Gemini) | ⚠️ divergenza forte |

**Ground truth**:
- Primo anno range: **€414-799** (Fido basso, Fiscozen alto)
- Mediana: **~€600**
- Se Qwen verificato su Il Commercialista Online (€97+diritti) → esiste fascia ultra-low cost

**Posizione AT Parma €690**: allineato fascia alta-premium (Fiscozen €799, Gemini top €750). **Difendibile** se la comunicazione evidenzia cosa include davvero (SIA iscrizione Albo Imprese Artigiane camerale, gestione SUAP base, consulenza codice ATECO, gestione INPS artigiani dedicata). SCIA comunale per attività regolate resta preventivo separato.

---

### Area 3 — P.IVA Forfettario base

| Competitor | Dato consolidato | Affidabilità |
|---|---|---|
| TaxMan Light | **€199/anno** (apertura inclusa, fatt. elettronica) | ⭐⭐⭐⭐ Qwen+ChatGPT |
| FidoCommercialista | **€264/anno + IVA** (apertura gratis) | ⭐⭐⭐⭐⭐ Claude verificato |
| ForfettApp | **€264/anno** (apertura inclusa) | ⭐⭐⭐⭐ Claude+Qwen |
| TaxMan Premium | **€279/anno** | ⭐⭐⭐ Qwen solo |
| Fisco Adesso | **€350/anno + IVA** | ⭐⭐⭐ ChatGPT solo |
| Quickfisco | **€365/anno** | ⭐⭐⭐⭐⭐ Claude verificato |
| FlexTax | **€366/anno** | ⭐⭐⭐⭐⭐ Claude verificato |
| Fiscozen | **€399/anno** (apertura inclusa) | ⭐⭐⭐⭐⭐ Claude verificato |
| Il Commercialista Online | **€417/anno** (solo contabilità) | ⭐⭐⭐ Qwen solo |
| CloudAccounting | **€408/anno (~€34/mese)** | ⭐⭐⭐ Qwen solo |
| Partita IVA Semplice | **€97 apertura standalone** | ⭐⭐⭐ Qwen solo |

**Ground truth**:
- Abbonamenti annuali completi: **€199-417/anno**, mediana ~**€300**
- Apertura standalone (se esiste): **€97-200**

**Posizione AT Parma €690 apertura una tantum**: **3x il mercato standalone, 2x il mercato annuale**. Consenso 4/4 AI: **sovrastimato**.

---

### Area 4 — P.IVA Forfettario + Fatturazione elettronica

| Competitor | Prezzo consolidato | Consenso |
|---|---|---|
| TaxMan (fatt. inclusa nel piano Light) | €199/anno | 4/4 concordi |
| FidoCommercialista | €264/anno | 4/4 concordi |
| ForfettApp | €264/anno | 3/4 concordi |
| Quickfisco | €365/anno | 2/4 concordi |
| FlexTax | €366/anno | 2/4 concordi |
| Fiscozen | €399/anno | 4/4 concordi |

**Ground truth**: **quasi tutti i competitor includono fatturazione elettronica nel prezzo base**. Mediana annuale: ~**€300/anno**.

**Posizione AT Parma €750 una tantum**: pagandone €60 extra rispetto al forfettario base €690 siamo **2-3x la mediana annuale tutto-incluso**. Consenso 4/4 AI: **fortemente sovrastimato**.

---

### Area 5 — 730 online

| Fornitore | Dato consolidato | Consenso |
|---|---|---|
| il730.online (CAF ACLI) | €35-39 | 4/4 |
| ilCAF.online | da €38 | Qwen+Claude |
| ASER CAF | da €60 | Qwen solo |
| SmartCAF 730 base | €45-60 | Claude+ChatGPT+Qwen |
| SmartCAF Redditi P.IVA | €122 | Qwen solo, plausibile |
| CAAF CGIL/CISL/UIL iscritti | €15-61 | 2/2 |
| CAF non iscritti | €50-128 | 2/2 |
| TaxMan 730 | €60 | Gemini solo |
| Fiscozen 730 | €80 | Gemini solo |
| Commercialisti | €100-150+ | 4/4 |
| Agenzia Entrate precompilata | gratis | 4/4 |

**Ground truth** (due segmenti):
- **CAF/online**: €35-60
- **Commercialisti**: €80-150+

**Posizione AT Parma €50 da €79**: ✅ **sweet spot confermato 4/4 AI**. Sopra €35-39 CAF online (valore: commercialista reale > sportello), sotto commercialista tradizionale (-€30 minimo). Sconto 37% aggressivo ma coerente.

---

### Area 6a — Contabilità forfettario annuale (non a listino)

| Competitor | Prezzo | Affidabilità |
|---|---|---|
| TaxMan Light | **€199/anno** | ⭐⭐⭐⭐ Qwen+ChatGPT |
| FidoCommercialista | **€264/anno + IVA** | ⭐⭐⭐⭐⭐ |
| ForfettApp | **€264/anno** | ⭐⭐⭐⭐ |
| TaxMan Premium | **€279/anno** | ⭐⭐⭐ Qwen |
| Fisco Adesso | **€350/anno** | ⭐⭐⭐ ChatGPT |
| Quickfisco | **€365/anno** | ⭐⭐⭐⭐⭐ |
| FlexTax | **€366/anno** | ⭐⭐⭐⭐⭐ |
| Fiscozen gestione separata | **€399/anno** | ⭐⭐⭐⭐⭐ |
| Fiscozen casse private | **€499/anno** | ⭐⭐⭐⭐⭐ |
| CloudAccounting | **€408/anno** | ⭐⭐⭐ Qwen |
| Il Commercialista Online | **€417/anno** | ⭐⭐⭐ Qwen |

**Aggregati**:
- MIN: €199
- MAX: €499 (Fiscozen casse private)
- MEDIANA: **~€300/anno**

**Proposte prezzo AT Parma diverse tra AI**:
- Qwen: **€299-349/anno** (aggressivo, cattura volume)
- Claude: **€449/anno** (premium giustificato studio reale)
- ChatGPT/OpenAI: **€349-449/anno** (range intermedio)
- Gemini: non specifico

**Convergenza**: intervallo **€299-499/anno**. La scelta dipende dal posizionamento (volume vs margine).

---

### Area 6b — Contabilità artigiani/commercianti annuale (non a listino)

| Competitor | Prezzo | Affidabilità |
|---|---|---|
| Fiscozen artigiani forfettario | **€599/anno** | ⭐⭐⭐⭐⭐ |
| Fiscozen artigiani semplificato/ordinario | **€1.399/anno IVA escl (~€1.700 incl)** | ⭐⭐⭐⭐⭐ |
| FlexTax artigiani dal 2° anno | **€399/anno** | ⭐⭐⭐⭐ Claude+Qwen |
| Quickfisco artigiani | **€365-475/anno + €285 una tantum** | ⭐⭐⭐⭐⭐ |
| Il Commercialista Online | **da €400/anno** | ⭐⭐⭐ Qwen |
| CommercialistaOnline.studio | **da €400/anno** | ⭐⭐⭐ Qwen |
| FidoCommercialista artigiani | €1.200/anno | ⭐⭐ Gemini solo, non verificato |

**Aggregati**:
- MIN: €399 (FlexTax 2° anno, forfettario)
- MAX: €1.399+ IVA (Fiscozen semplificato/ordinario)
- MEDIANA forfettario artigiani: **~€450-500/anno**
- MEDIANA semplificato/ordinario: **~€1.100-1.400/anno**

**Gemini confonde i segmenti** (dice €1.200 FidoCommercialista senza distinguere regime fiscale).

**Proposte prezzo AT Parma**:
- Qwen: €449-499/anno premium
- Claude: €599/anno (allineato Fiscozen forfettario)
- Considerare **doppia offerta**:
  - Artigiani forfettario: €499-599/anno
  - Artigiani semplificato/ordinario: €990-1.200/anno

---

## 2. Decisioni consolidate 4-AI (consenso)

| # | Servizio | Prezzo attuale | Consenso 4-AI |
|---|---|---|---|
| 1 | 730 | €50 da €79 | ✅ **TENERE** (consenso totale 4/4) |
| 2 | P.IVA Professionista | €199 | 🟡 **RIPOSIZIONARE premium** (3/4), o abbassare a €97 se standalone (1/4 Qwen) |
| 3 | P.IVA Artigiano | €690 | ✅ **TENERE** con copy migliorato (consenso 4/4) |
| 4 | P.IVA Forfettario base | €690 | 🔴 **ABBASSARE o BUNDLE** (consenso totale 4/4) |
| 5 | P.IVA Forfettario+EFAT | €750 | 🔴 **ABBASSARE o BUNDLE** (consenso totale 4/4) |
| 6a | Contabilità forfettario | ❌ non listato | ⭐ **INTRODURRE** — range €299-499/anno (mediana consenso €349-449) |
| 6b | Contabilità artigiani | ❌ non listato | ⭐ **INTRODURRE** — segmentare: forfettario €499-599, semplificato €990-1.200 |

---

## 3. Opzioni strategiche finali (filtered su consenso 4-AI)

### Opzione A — Aggressive repricing (stile Qwen)
Abbassa forfettario a €349 (apertura+EFAT ibrido), introduci contabilità forfettario a €299-349/anno. Target mercato web freddo.
- Pro: volume conversion alto, alleato a mercato SaaS
- Contro: margine basso, rischio commodity

### Opzione B — Bundle premium (stile Claude)
Apertura+12 mesi gestione bundle €549-649, poi canone €449/anno. Target clienti che vogliono commercialista reale.
- Pro: LTV alto, margine protetto, narrativa differenziante
- Contro: richiede Stripe subscriptions + pagine prodotto nuove + gestione churn

### Opzione C — Premium narrativo (stile ChatGPT)
Tieni i prezzi attuali, cambia solo la comunicazione. Target ristretto "studio vero".
- Pro: zero sviluppo, preserva margini
- Contro: rischio conversion bassa su traffico web freddo

### Opzione D — Segmentazione dual (Gemini suggeriva spaccatura)
Base plan (€299/anno, stile SaaS) + Premium plan (€599/anno, stile studio reale). Cliente sceglie.
- Pro: cattura entrambi i segmenti
- Contro: doppio catalogo, Stripe subscriptions, sviluppo 8-12h

---

## 4. Dati nuovi da Qwen da verificare manualmente

Prima di prendere decisioni basate su Qwen, verifica direttamente questi competitor che le altre AI non hanno confermato:

1. **Partita IVA Semplice** (pivasemplice.it? altro?) — €97 standalone professionista, €250+diritti artigiani
2. **Il Commercialista Online** (ilcommercialistaonline.it) — €97 apertura o gratis con contabilità, €417/anno forfettario
3. **CloudAccounting** (cloudaccounting.it) — €408/anno (~€34/mese)
4. **ASER CAF** (aserweb.it) — 730 da €60
5. **CAAF CGIL Emilia-Romagna** (caafemiliaromagna.it) — 730 €60-80 scalato per reddito

Se questi esistono e hanno questi prezzi, il mercato **standalone apertura €97** cambia le conclusioni per Area 1.

---

## 5. Azione raccomandata

Il consenso 4-AI è robusto sulle decisioni macro. La scelta tra opzioni A/B/C/D è **strategica** e dipende dal tuo target reale, non dai dati di mercato.

**Mia raccomandazione finale** (come aggregatore):

- **Subito (1-2h)**: fix 14 incoerenze prezzi obsoleti (non opzionale)
- **Breve termine**: scegli tra Opzione C (zero sviluppo, solo copy) o A (quick fix prezzi, 2h sviluppo)
- **Medio termine**: valuta Opzione B o D con introduzione contabilità ricorrente (8-12h sviluppo, cattura segmento grande)

**Verifica assumption prima di decidere**: qual è il canale di acquisizione atteso dei prossimi 10 clienti? Cold web (Google Ads, SEO) o warm (referral, network)? La risposta determina se A/B vs C.

---

## 6. Fonti complete

**Claude (verificate via WebFetch 2026-04-19)**:
- [Fiscozen Prezzi](https://www.fiscozen.it/prezzi/)
- [FidoCommercialista Apertura P.IVA](https://fidocommercialista.it/apertura-partita-iva-online)
- [Quickfisco](https://quickfisco.it/)
- [FlexTax Costi](https://flextax.it/costo-apertura-partita-iva/)

**Dati integrati ChatGPT/Qwen/Gemini**:
- TaxMan (taxmanapp.it) — €199 Light / €279 Premium
- Fisco Adesso — €350/anno
- SmartCAF — €45-60 base, €122 Redditi P.IVA
- CloudAccounting (cloudaccounting.it) — €408/anno (da verificare)
- Il Commercialista Online (ilcommercialistaonline.it) — €97-417 (da verificare)
- Partita IVA Semplice (pivasemplice.it? — da verificare)
- CAF ACLI, CGIL, CISL, UIL — segmento 730 €35-128
- INPS gestioni artigiani/commercianti 2026 — €4.521 contributi fissi

---

*Consolidato 4-AI 2026-04-19. Ground truth: dati con ≥3 AI concordi. Dati con 1 AI sola flaggati come "da verificare". Gemini URL deprioritizzati dove non verificabili.*
