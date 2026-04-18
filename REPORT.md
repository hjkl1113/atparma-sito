# REPORT UNIFICATO — AT PARMA
## Sito www.atparma.com + Portale clienti.atparma.com

**Data:** 2026-04-18
**Versione:** 1.2

---

## 1. PANORAMICA DUE PROGETTI

| | **Sito (atparma.com)** | **Portale (clienti.atparma.com)** |
|---|---|---|
| **Scopo** | Marketing, acquisizione, vendita servizi/guide | Gestione quotidiana clienti esistenti |
| **Stack** | Next.js + Stripe + PayPal | Next.js + Prisma + Neon + R2 |
| **GitHub** | `hjkl1113/atparma-sito` | `hjkl1113/studio-atparma` |
| **GitLab** | — | `hjkl1113/piattaforma` |
| **Stato** | LIVE | LIVE |

**Nota:** WooCommerce **non è mai stato usato** — pagamenti via Stripe + PayPal nativi.

---

## 2. STRUTTURA PREZZI DEFINITIVA

### 2.1 Servizi sul sito

| Servizio | Prezzo | Stato |
|---|---|---|
| Dichiarazione 730 | €79 | Confermato |
| Apertura P.IVA Professionista | €150 | NUOVO |
| Apertura P.IVA Artigiano/Commerciante (SIA, INPS, CCIAA) | €500 | NUOVO |
| Apertura P.IVA Forfettario (caricamento documenti via portale) | €500 | NUOVO |
| Apertura P.IVA Forfettario + GIS Ranocchi (programma EFAT fatturazione) | €550/anno | NUOVO |
| Consulenza su misura | A preventivo | OK |

### 2.2 Servizi ricorrenti (portale)

| Servizio | Prezzo |
|---|---|
| Gestione contabilità forfettaria | da definire |
| Gestione 730 | €79 (una tantum) |
| Gestione forfettario + EFAT | €550/anno |

---

## 3. CATALOGO PRODOTTI DIGITALI

### 3.1 Guide gratuite (lead magnet) — Download libero per tutti

| Guida | Target | Funnel |
|---|---|---|
| Documentazione necessaria per 730 | Chi deve fare il 730 | → Acquisto servizio 730 €79 |
| Documentazione necessaria per apertura P.IVA | Chi apre P.IVA | → Acquisto servizio €150-550 |

**Posizionamento:** Gratuite sempre — funzionano come trust builder e lead capture.

### 3.2 Calcolatori gratuiti (lead magnet web)

| Tool | Funzione | Output |
|---|---|---|
| "Conviene il forfettario?" | Simulatore web interattivo | Risultato gratuito + email per report dettagliato |
| "SRL vs SAS vs DI?" | Confronto convenienza fiscale | Risultato gratuito + email per report dettagliato |

**Strategia:** Gratuito con lead capture — massimo intento nel funnel, costo acquisizione quasi zero.

### 3.3 Guide a pagamento (vendita sul sito)

| # | Prodotto | Prezzo | Tool allegato | Target |
|---|---|---|---|---|
| G1 | Regime Forfettario 2026 — Guida PDF | €27-37 | Simulatore tasse Excel | Forfettari |
| G2 | E-commerce Italia — Guida PDF | €37-47 | Simulatore margini netti | E-commerce |
| G3 | Adeguati Assetti Societari PMI — Guida PDF | €47-67 | Dashboard indicatori allerta | SRL, PMI |

**Nota:** Pianificazione Fiscale Annuale → contenuto del portale per clienti esistenti (loyalty), non prodotto separato.

### 3.4 Riepilogo modelli per guida

| Guida | Modello | Razionale |
|---|---|---|
| Documentazione 730 | **GRATUITA** | Pre-acquisto, riduce barriere |
| Documentazione P.IVA | **GRATUITA** | Pre-acquisto, riduce barriere |
| Calcolatore forfettario | **GRATUITO** | Lead magnet, alto intento |
| Calcolatore forma giuridica | **GRATUITO** | Lead magnet, alto intento |
| Guida Forfettario | **PAID €27-37** | Upsell post-acquisto calcolatore |
| Guida E-commerce | **PAID €37-47** | Nicchia specifica |
| Guida Adeguati Assetti | **PAID €47-67** | B2B, contenuto alto valore |

---

## 3.5 TOOL PUBBLICI LIVE (aggiornamento 2026-04-18)

Milestone A + E + F del piano "si-stasera-non-faremo" completate. 5 tool
pubblici live su www.atparma.com, hub centralizzato, nav consolidata.

| Tool | URL | Pubblico | Commit |
|---|---|---|---|
| Forfettario v2 | `/calcolatori/forfettario` | libero prof. + commercialista | `05fd099` + `b36c175` |
| Codice fiscale | `/strumenti/codice-fiscale` | tutti | `78eb91e` |
| Busta paga (lordo↔netto) | `/strumenti/buste-paga` | privati + commercialisti | `09ecbad` |
| IMU 2026 | `/strumenti/imu` | privati + commercialisti | `1ab1ec5` |
| Scadenziario 2026 | `/strumenti/scadenze` | liberi prof. + commercialisti | `f0491bc` |
| Hub strumenti | `/strumenti` | tutti | `c5c0276` |

**Feature trasversali** (su tutti i tool):
- Toggle 👤 Privato / 👔 Commercialista con CTA differenziata
- Waitlist Professio: lead email su `/api/lead-forfettario` (fonte variabile per segmentare)
- Modo privato → CTA servizi AT; modo commercialista → pitch Professio
- Metadata SEO + OG + sitemap.xml
- URL querystring sync per condivisione link pre-compilati (forfettario)

**Feature specifiche:**
- **Forfettario v2**: breakdown step-by-step con INPS deducibili anno prec.,
  box "Verifica risparmio" (2 slider what-if), share WhatsApp, lead magnet
  PDF client-side (jsPDF ~300KB dynamic import).
- **Codice fiscale**: calcolo diretto + decodifica inversa, 7.904 comuni
  italiani (dataset slim 309KB, lazy-load da `/data/comuni.json`),
  autocomplete + fallback codice catastale manuale.
- **Busta paga**: formula completa INPS 9,49% + IRPEF scaglioni + detrazione
  lavoro dipendente art. 13 TUIR + addizionali + trattamento integrativo.
  Calcolo inverso via bisezione (40 iterazioni).
- **IMU**: 7 categorie catastali con moltiplicatore corretto, esenzione
  abitazione principale, quota% + mesi, detrazione €200 lusso,
  rata acconto/saldo 50/50.
- **Scadenzario**: 37 scadenze 2026, 9 filtri chip, download .ics (RFC 5545)
  compatibile Google/Outlook/Apple, lead magnet "ricordami le scadenze".
- **Hub**: griglia 3 col con filtro "per chi" (privati/liberi prof./comm.).

**Endpoint API aggiunto**: `/api/lead-forfettario` (POST) — salva lead via Brevo con
contesto calcolo. Riusato dai 4 tool per waitlist Professio e lead magnet.

**Modifiche di navigazione**:
- Homepage nav: "Calcolatore" → "Strumenti" (link all'hub)
- Mobile menu: 5 link tool compattati in "Strumenti" unico
- Nav interna dei 5 tool: 5 voci consistenti (Servizi · Strumenti · Blog · FAQ · Contatti)

**Bug risolto (Milestone A)**: la card Ordinario del calcolatore forfettario
saltava il passaggio "Reddito lordo → deduzione INPS → imponibile IRPEF".
Ora mostra breakdown completo e simmetrico per i due regimi.

---

## 4. FUNNEL DI VENDITA

### 4.1 Funnel Forfettario

```
Lead arriva sul sito
    ↓
Scarica guida documentazione P.IVA (GRATIS)
    ↓
Email capturata
    ↓
Usa calcolatore "Conviene il forfettario?" (GRATIS)
    ↓
Risultato: "Per te conviene" + offerta servizio
    ↓
Acquista apertura P.IVA €500 (o €550 con EFAT)
    ↓
Accesso portale + guida PDF Forfettario omaggio
    ↓
Cliente servizio ricorrente €550/anno
```

### 4.2 Funnel 730

```
Lead arriva sul sito
    ↓
Scarica guida documentazione 730 (GRATUITA)
    ↓
Email capturata
    ↓
Offerta servizio 730 €79
    ↓
Acquista → accesso portale
```

### 4.3 Funnel Adeguati Assetti

```
Lead (SRL, PMI) raggiunge articolo/blog sul sito
    ↓
Scarica guida Adeguati Assetti €47-67
    ↓
Se apre attività con AT Parma → guida rimborsata/scontata
```

---

## 5. ANALISI DI MERCATO

### 5.1 Contesto numerico italiano

| Metrica | Dato |
|---|---|
| Commercialisti tradizionali (forfettario) | €500-1.000/anno |
| TaxMan / FidoCommercialista | €199-264/anno |
| Guide fiscali professionali | €25-40 a guida |
| CAC B2B servizi professionali | €200-800/cliente |
| Lead qualificato B2B | €100-300 |
| Conversione lead→cliente | 10-15% |
| Content marketing per commercialisti | +156% lead |

### 5.2 I due modelli a confronto

| | **Vendita guide (€27)** | **Lead magnet gratuito → cliente (€500/anno)** |
|---|---|---|
| **Ricavo unitario** | €27 | €500/anno × ~3 anni = €1.500 LTV |
| **Clienti necessari per €1.500** | ~56 vendite | 3 clienti |
| **Costo acquisizione stimato** | €5-15 a vendita (ads) | €20-50 a lead (ads) |
| **Margine netto (ads)** | ~€12-22 a vendita | ~€450-480 a cliente |
| **Volume realistico mese 1** | 10-30 vendite | 5-15 lead → 1-3 clienti |
| **Competizione** | Alta (migliaia di guide) | Bassa (nessuno fa questo in zona) |

### 5.3 Il calcolatore gratuito genera ~5-6x più ricavo a parità di spesa pubblicitaria rispetto alla vendita diretta di guide.

### 5.4 Chance fiducia contabilità online

| Segmento | Comportamento | Chance fiduccia |
|---|---|---|
| **Freelance / consulenti under 35** | Già abituati a servizi digitali | Alta (70-80%) |
| **Artigiani / commercianti 40-60** | Preferiscono il commercialista fisico | Bassa senza relazione pregressa (20-30%) |
| **E-commerce / startuppers** | Aperti al digitale, scelgono per costo/convenienza | Alta (60-70%) |

**Il portale è un differenziatore, non il prodotto.** Il cliente deve percepire: "C'è Alessandro/Pietro che conosco, e per la gestione quotidiana uso il portale."

---

## 6. DATABASE — DISTRIBUZIONE CLIENTI

**Totale clienti:** 184

| Categoria | Count |
|---|---|
| FORFETTARIO | 15 |
| SRLS | 20 |
| SRL | 18 |
| DITTA_IND | 14 |
| PF_UNICO | 6 |
| COOP | 2 |
| SSD | 1 |

**I 15 forfettari esistenti sono il banco di prova ideale** — già clienti, puoi proporgli il portale oggi.

---

## 7. DASHBOARD CLIENTE — STRUTTURA

### 7.1 Menu laterale cliente (portal)

| Sezione | Contenuto |
|---|---|
| Home | Riepilogo: prossima scadenza, ultima pratica, notifiche |
| Documenti | Scarica (F24, dichiarazioni) + carica (ricevute, estratti) |
| Pratiche | Stato pratiche in corso |
| Scadenze | Scadenze fiscali personali |
| Messaggi | Chat con lo studio |
| Strumenti & Guide | Guide acquistate + tool Excel |

### 7.2 Filosofia: "Vetrina + Upload"

- Il cliente vede solo quello che gli mandi tu (passivo)
- Può caricare documenti richiesti (interattivo)
- Minimo confusione, massima adozione

### 7.3 Staff (accesso completo)

| Persona | Ruolo |
|---|---|
| Alessandro + Pietro | ADMIN |
| Casciaro Sara + Susanna Bianchi | SENIOR_EMPLOYEE |

---

## 8. FUNZIONALITÀ DA IMPLEMENTARE

### 8.1 Collegamento Sito → Portale (Stripe webhook)

```
Acquisto sul sito (Stripe)
    ↓
Stripe invia webhook
    ↓
/api/webhook/stripe nel portale
    ↓
Verifica pagamento + crea account cliente
    ↓
Email attivazione con link
```

### 8.2 Flag visibilità documenti

| Campo | Funzione |
|---|---|
| `clientVisible` | Toggle: documento visibile al cliente o solo staff |
| `sharedUntil` | Link condivisione temporanea (7/15/30 giorni) per esterni senza account |

### 8.3 Sezione "Strumenti & Guide" nel portale

| Contenuto | Staff | Cliente con acquisto | Cliente senza acquisto |
|---|---|---|---|
| PDF Guida | ✅ Sempre | ✅ Sbloccato | 👁️ Anteprima + CTA acquisto |
| Tool Excel | ✅ Sempre | ✅ Scarica | ❌ Non visibile |
| Simulatore web | ✅ Sempre | ✅ Usa | ❌ Non visibile |

### 8.4 Bloccanti test interno

| # | Funzionalità | Stato |
|---|---|---|
| 1 | Captcha Turnstile da riattivare | Da fare |
| 2 | Flusso invito attivazione account clienti (end-to-end test) | Da fare |
| 3 | Primo accesso reale di Casciaro Sara e Susanna | Da fare |
| 4 | Rclone sul server fisico (sync 300GB → R2) | Da fare |

---

## 9. VISIONE SAAS — PROFESSIO

| Elemento | Dettaglio |
|---|---|
| Nome | PROFESSIO |
| Claim | "Il tuo studio, finalmente in un posto solo." |
| Target | Studi commercialisti 2-5 persone, 50-200 clienti |
| Pricing SaaS | Core €49 / Pro €79 / Wizard +€25 |
| Domini | professio.io, professio.it, professio.app |
| Probabilità | 65% |

---

## 10. REPOSITORY E LINK

| Progetto | URL |
|---|---|
| Sito AT Parma | https://github.com/hjkl1113/atparma-sito |
| Portale GitHub | https://github.com/hjkl1113/studio-atparma |
| Portale GitLab | https://gitlab.com/hjkl1113/piattaforma |
| Sito LIVE | https://www.atparma.com |
| Portale LIVE | https://clienti.atparma.com |

---

## 11. PROSSIMI PASSI

### Immediato (bloccanti test interno)
1. Riattivare Captcha Turnstile
2. Testare flusso invito account clienti
3. Abilitare Casciaro Sara e Susanna (insert SQL diretto)
4. Test interno con staff sui 15 forfettari

### Breve termine (collegamento Sito ↔ Portale)
5. Implementare Stripe webhook → crea account portale
6. Creare sezione "Strumenti & Guide" lato cliente
7. Creare guida documentazione 730 (GRATUITA)
8. Creare guida documentazione P.IVA (GRATUITA)
9. ~~Implementare calcolatore web "Conviene il forfettario?"~~ DONE 2026-04-17, refit 2026-04-18 (v2 con INPS deducibili, breakdown, share, PDF, toggle B2C/B2B)
10. ~~Aggiornare prezzi sul sito con struttura definitiva~~ DONE 2026-04-17

### Breve termine — NUOVI TOOL SEO (Milestone E + F, completata 2026-04-18)
- ~~Tool codice fiscale `/strumenti/codice-fiscale`~~ DONE 2026-04-18
- ~~Tool busta paga lordo-netto `/strumenti/buste-paga`~~ DONE 2026-04-18
- ~~Tool IMU 2026 `/strumenti/imu`~~ DONE 2026-04-18
- ~~Scadenzario 2026 `/strumenti/scadenze` con download .ics~~ DONE 2026-04-18
- ~~Hub /strumenti + nav consolidata~~ DONE 2026-04-18

### Medio termine (infoprodotti + altri tool P1)
11. Creare guida PDF Regime Forfettario 2026
12. Creare Simulatore Excel Forfettario
13. Implementare calcolatore "SRL vs SAS vs DI?" (tool P1)
14. Altri tool P1: IRPEF scaglioni, TFR, Ravvedimento operoso
15. Test portale con i 15 forfettari esistenti
16. Landing Professio separata (sottodominio o /professio)
17. Primi €300 Google Ads search sui tool SEO

### Lungo termine (Convenience Check + pacchetto logica condivisa)
- Milestone B: estrarre logica tool in `@atparma/fiscal-tools` o cartella
  condivisa tra sito e portale (source-of-truth singolo per evitare drift)
- Milestone D: Convenience Check automatico nel portale (cron trimestrale
  per-cliente, raccomandazione regime con AI narrativa)

---

## 12. VALUTAZIONE PROGETTO SITO

### Punti di forza
- Design curato (stile Aerial Gravitas, palette Carbon Frost)
- Struttura chiara con pricing, servizi, blog SEO
- Checkout Stripe + PayPal già funzionante
- Già LIVE

### Punti di debolezza
- Il funnel di acquisizione clienti non è ancora costruito
- Nessun blog articolo SEO in produzione
- Collegamento Sito → Portale post-acquisto non implementato

### Giudizio
Il sito è una *vetrina* ma non è ancora un *sistema di acquisizione*. Ha le fondamenta giuste, ma manca il motore che converte visitatori in clienti.

---

## 13. CHECKLIST — COSA MANCA

### Sito (atparma-sito)
- [x] Aggiornare prezzi dal placeholder (€149) alla struttura reale (€150-550) — 2026-04-17
- [x] Dashboard admin per gestire prodotti (add/remove + edit) — 2026-04-17
- [ ] Riscrivere blob `prezzi.json` in prod via /admin (serve dopo deploy Vercel)
- [ ] Collegamento Stripe → Portale (webhook post-acquisto)
- [ ] Landing page per "730 online" con guida gratuita
- [x] Implementare calcolatore "Conviene il forfettario?" — 2026-04-17
- [x] Fix bug breakdown ordinario + INPS deducibili + share + PDF — 2026-04-18
- [x] Tool codice fiscale `/strumenti/codice-fiscale` — 2026-04-18
- [x] Tool busta paga `/strumenti/buste-paga` — 2026-04-18
- [x] Tool IMU `/strumenti/imu` — 2026-04-18
- [x] Scadenzario fiscale 2026 `/strumenti/scadenze` — 2026-04-18
- [x] Hub `/strumenti` + nav consolidata — 2026-04-18
- [ ] Implementare calcolatore "SRL vs SAS vs DI?" (P1)
- [ ] Altri tool P1: IRPEF scaglioni, TFR, Ravvedimento operoso
- [ ] Landing Professio (sottodominio o /professio)
- [ ] Primi €300 Google Ads sui tool SEO

### Portale (clienti.atparma.com)
- [ ] Riattivare Captcha Turnstile
- [ ] Testare flusso invito account clienti (end-to-end)
- [ ] Abilitare Casciaro Sara e Susanna (insert SQL diretto)
- [ ] Sezione "Strumenti & Guide" lato cliente
- [ ] Flag clientVisible e sharedUntil sui documenti
- [ ] Test interno con i 15 forfettari esistenti
- [ ] Replicare tool sito nel portale (auth, precompilazione dati cliente)
- [ ] Convenience Check automatico (cron trimestrale + AI narrativa)

### Contenuti digitali
- [ ] Guida documentazione 730 (gratuita, PDF)
- [ ] Guida documentazione P.IVA (gratuita, PDF)
- [ ] Guida PDF Regime Forfettario 2026 (+ Simulatore Excel)
- [ ] Guida PDF E-commerce Italia
- [ ] Guida PDF Adeguati Assetti PMI

### Architettura
- [ ] Milestone B: estrarre logica tool in pacchetto condiviso `@atparma/fiscal-tools`
      o cartella sync tra sito e portale (single source of truth)

---

*Report compilato: 2026-04-14, aggiornato 2026-04-18*
