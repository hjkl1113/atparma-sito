# Piano organico IG + FB — A.T. Consulting Parma

**Versione**: 1.0
**Data creazione**: 2026-05-30
**Owner**: Alessandro (review) · Sara (esecuzione operativa) · Claude/n8n (automazione produzione)
**Orizzonte**: 90 giorni (Q3 2026 estivo: giugno – agosto)
**Obiettivo**: 2-5 lead qualificati/mese dai social entro fine sett 12, **a costo zero ads**

---

## Origine e differenze vs piano ZenPaw

Riadattamento del piano organico originariamente prodotto per ZenPaw (e-commerce pet,
target donne 35-65 Nord IT) tramite ultraplan Claude.ai + OpenAI. Mantiene
**l'architettura algoritmica** (frequenze, primi 60 min, gerarchia CTA, cronologia 5gg,
soglia anti-abbandono 45gg) e **cambia tutto il contenuto** per coerenza con la
professione commercialista.

| Tema | ZenPaw | AT Consulting |
|---|---|---|
| Goal social | Vendita prodotto | Lead qualificato → DM → consulenza tel → preventivo → cliente |
| Funnel time-to-close | 60-90 gg cold→buy | 90-180 gg (decisione "alta frizione": si cambia commercialista 1 volta ogni 5+ anni) |
| Soggetto | *"Se il tuo cane fa X…"* (audience larga riconosce) | *"Se hai P.IVA forfettaria e fai X…"* (audience stratificata per persona) |
| Buyer persona | 1 grande (donne 35-65 Nord IT) | **3 persona separate** — privati / micro-impresa / PMI |
| Piattaforme | IG primario, FB secondario | **FB primario, IG secondario, LinkedIn personale Franzosi/Ponzi gold per B2B** |
| Tone | Caldo / emotivo / casa | Autorevole + umano + sobrio. **No claim numerici non dimostrabili** (deontologia ODCEC) |
| Asset visivo unico | Pet + casa | **Sede storica Borgo Riccio** (cortile, arco rose, porticato) — presenza fisica + autorevolezza + 20+ anni |

## Stato bloccanti — aggiornamento 2026-05-29

> **La migrazione del profilo FB pro a Pagina classica NON è più necessaria.**
> Analisi del 29/05 ha verificato che Graph API funzionano direttamente sui
> profili in modalità professionale per i nostri use case (pubblicazione post,
> reach metrics, comments). Il workflow n8n può partire appena Telegram bot +
> Google Sheet sono configurati. `HANDOFF.md` e `scripts/n8n/README.md` da
> aggiornare in questo commit.

Conseguenza pratica: **il piano è eseguibile dalla settimana 1** senza attendere
3-7 giorni Meta + 3-5 giorni App Review.

---

## 1. Posizionamento + 3 buyer persona

**Promessa editoriale (bio FB + IG)**:
> *"Risparmi tempo e tasse. Senza errori, senza panico, senza pagare il commercialista per ricordarti le scadenze."*

| Persona | Età | Servizi hero | Dolore primario | Hashtag-keyword |
|---|---|---|---|---|
| **Privato** | 35-65 | 730, IMU, successioni, ravvedimenti | *"non so se posso scaricare X"*, *"ho dimenticato una scadenza"* | `#730` `#IMU` `#dichiarazioneredditi` |
| **Micro-impresa** | 28-50 | P.IVA forfettaria, artigiani/commercianti, srls | *"il forfettario conviene ancora?"*, *"INPS o cassa?"* | `#partitaiva` `#regimeforfettario` `#commercialistaonline` |
| **PMI** | 40-60 | Bilanci, fiscale ordinario, crisi impresa, M&A, composizione negoziata | *"voglio chiudere senza fallire"*, *"i miei numeri sono sani?"* | `#PMI` `#crisidimpresa` `#bilancio2026` |

Rotazione settimanale persona: **L privato · Ma micro · Me PMI · G fiducia/sede · V mix con link blog**. Non sovrapporre 2 persona nello stesso giorno (segnale di dispersione per l'algoritmo).

## 2. 4 pilastri di contenuto (verticalità totale 90 gg)

1. **Dolore fiscale reale** — scadenza saltata, errore F24, ravvedimento operoso, dubbio agevolazione → *"ti riconosci?"*
2. **Educazione semplice** — *"quando conviene il forfettario"*, *"differenza 730/Unico"*, *"cosa scaricare per casa in affitto"*
3. **Soluzione concreta** — checklist scaricabile, calcolatore forfettario sul sito, calendario PDF, screen del portale clienti
4. **Fiducia e identità studio** — Franzosi/Ponzi (dottori iscritti Albo), sede storica Parma, 20+ anni, 200+ aziende

**Regola d'oro**: per 90 giorni **non alternare** con meme, motivazionale, offerte, post aziendali generici. Verticalità totale. Pena: algoritmo non capisce la nicchia e non distribuisce.

## 3. Frequenze + ripartizione piattaforme

| Formato | FB (primario) | IG (secondario) | LinkedIn (Franzosi + Ponzi personali) |
|---|---|---|---|
| **Reels/Video** | **3/sett** native upload (no link IG) | **3/sett** (stessi) | 1/sett (focus PMI/crisi) |
| **Caroselli** | **2/sett** | **2/sett** | 1/sett (sintesi normativa) |
| **Long-form con link blog** | **1/sett** (venerdì) — riusa articoli SEO già live | — | 1/sett (post lungo testuale) |
| **Stories** | 2-3/giorno | **5-8/giorno** | — |
| **Live** | **0** fino a 500 follower IT | **0** fino a 300 follower IT | — |

Totale produzione: **5-6 originali/settimana**, riciclati cross-platform. Batch 2 sessioni 3h (mer + dom sera) con Sara su coordinamento + tu su review legale-deontologica.

## 4. Format Reels (4 tipi rotanti)

- **Sintomo nascosto** — *"Se hai P.IVA forfettaria da meno di 6 mesi e non hai ancora ricevuto QUESTO documento, c'è un problema."* (hook 0-2s, problema 3-8s, spiegazione 9-20s, CTA 21-30s)
- **Errore comune** — *"L'errore che fa 1 forfettario su 3 alla prima fattura."* · *"Il dato che nessuno controlla sulla precompilata 730."*
- **Prima/Dopo** — screen documenti caos → portale clienti ordinato · sede esterna → cortile interno
- **Mini-guida visiva** — *"Calendario IMU 2026 in 30 secondi"* · *"3 spese che TUTTI dimenticano nel 730"*

Durata 20-40s. Hook con **numero specifico** o **scadenza imminente** nei primi 1.5s.

## 5. Caroselli — formula 8-9 slide

`1 promessa` → `2 problema` → `3-6 punti` → `7 errore tipico` → `8 checklist` → `9 CTA save+DM`.

Esempi pronti (alto save-rate per la nicchia):

- *"Aprire P.IVA: 7 cose da decidere PRIMA di andare dal commercialista"*
- *"Checklist 730 2026: 12 documenti da preparare"*
- *"Forfettario o ordinario? La tabella decisionale in 8 slide"*
- *"IMU 2026: chi paga, chi è esente, quanto e quando"*
- *"Ravvedimento operoso: come sanare un errore senza farsi male"*
- *"Calendario scadenze giugno 2026 (privato + P.IVA)"*

CTA: *"Salva questa checklist: ti servirà a giugno quando arriva la scadenza."*

## 6. Stories — sequenza 5 frame/giorno

1. Micro-domanda (*"Hai mai dimenticato una scadenza fiscale?"*)
2. Sondaggio sì/no o slider
3. Validazione + mini-spiegazione
4. Box domanda (*"Qual è la cosa che più ti confonde del 730?"*)
5. CTA DM keyword (*"Scrivi '730' e ti mando la checklist gratuita"*)

Keyword come lead magnet automatico → DM bot risponde con PDF checklist + invito consulenza 15 min gratuita:
`730` · `IMU` · `FORFETTARIO` · `PIVA` · `SCADENZE` · `RW` · `CRISI`

## 7. Hashtag (5-8 totali, rotati ogni 3-4 post)

- 2 grandi: `#commercialista` `#fisco`
- 3 medi: `#partitaiva` `#730` `#regimeforfettario`
- 2-3 piccoli/locali: `#commercialistaparma` `#commercialistaonline` `#PMIitalia`

Prepara 4 set ruotabili (uno per persona + uno generale). Riusare sempre lo stesso = bot signal.

## 8. CTA — gerarchia per forza algoritmica

1. *"Manda questo a chi ha appena aperto P.IVA"* → **DM share** (top 2026)
2. *"Salva questa checklist: ti servirà al CAF/commercialista"* → **save**
3. *"Scrivi nei commenti: hai aperto P.IVA o stai pensando di aprirla?"* → **commento lungo**
4. *"Rispondi alla storia: per quale scadenza vorresti un promemoria?"* → **DM reply**
5. *"Vota nelle storie: 730 o Unico per te?"* → poll

**Mai**: *"contattaci"*, *"link in bio"* secco, *"scopri di più"*.

## 9. Cronologia settimanale (1-1.5h/giorno + 2 batch 3h)

Orari critici per IT 35-60: **12:30-13:30** (pausa pranzo) + **20:30-22:00** (dopo cena).

| Giorno | 08:00-09:00 | 12:30-13:30 | 20:00-22:00 |
|---|---|---|---|
| **Lun** — Carosello educativo (privati) | Pianifica 5 contenuti + copy (15') | Carosello *"Checklist 730 2026"* + monitoring (60') | 4-5 stories serali + commenti su 5 account adiacenti (35') |
| **Mar** — Reel sintomo (P.IVA) | 2 stories mattutine (10') | Reel *"Se hai P.IVA da <6 mesi…"* + DM a 5 contatti (60') | 3 stories poll + interazioni su 5 profili commercialisti IT (35') |
| **Mer** — Carosello soluzione (PMI) | Stories box domanda (10') | Carosello *"Forfettario o ordinario"* + monitoring (60') | Quiz + commenti su 5 consulenti del lavoro (35') |
| **Gio** — Reel fiducia/sede | 2 stories (10') | Reel *"Il nostro cortile interno"* + storytelling 20 anni | Countdown blog ven + commenti adiacenti (30') |
| **Ven** — Long-form FB + carosello "salva" | Stories anticipazione (10') | Post FB con link articolo blog + carosello salva (60') | 4-5 stories weekend + interazioni mirate (35') |
| **Sab-Dom** | — | Solo 3-4 stories + risposte DM. **Niente post nuovi**. Batch settimana dopo. | — |

**Protocollo primi 60 min post-pubblicazione (sacro)**:
- 30 min prima: 2-3 stories attive (*"tra poco esce X"*)
- Subito dopo: ricondividi nelle stories con sticker *"ti è utile?"*
- Manda DM a 5-10 contatti reali (ex-clienti, network professionale) con *"secondo te è chiaro?"*
- Rispondi a ogni commento entro 5 min, **risposte 8-10 parole minimo**, rilancia con domanda

## 10. Crescita manuale (30 min/giorno fissi)

Interagisci ogni giorno con **30 account adiacenti IT** (NON competitor diretti):

- Consulenti del lavoro Parma/Emilia
- Avvocati tributaristi
- Commercialisti micro/local con 5k-50k follower (NON i grandi nazionali)
- Associazioni di categoria locali (CNA Parma, Confartigianato, Confindustria, Confcommercio)
- Studi notarili
- CAF locali
- Pagine FB di gruppi imprenditoriali zona Parma/Reggio/Modena

Commenti di valore (3-4 frasi, mai *"interessante!"*). Esempio:
> *"Sul forfettario aggiungerei che la soglia 85k impatta diversamente artigiani vs liberi professionisti per il calcolo INPS — vale la pena spiegarlo nei prossimi contenuti."*

**LinkedIn personale Franzosi/Ponzi**: commenti settimanali sotto post di giudici tributari + dirigenti AdE + giornalisti fiscali (Il Sole 24 Ore, Italia Oggi). Apre visibilità su community competente.

## 11. KPI da guardare (niente vanity)

| Periodo | Cosa misurare |
|---|---|
| Sett 1-2 | Solo costanza pubblicazione + risposta entro 5 min |
| Sett 3-4 | Save rate caroselli, commenti 8+ parole, DM aperti da keyword stories |
| Sett 5-8 | Visite profilo → click bio → click sito (warm traffic per ads futuri), 1-2 Reel sopra 1k impressions |
| Sett 9-12 | **Lead qualificati** (DM con domanda concreta su servizio → consulenza fissata) — KPI commerciale vero. Anche 2-3/sett = win |

Vanity da ignorare: follower count, like generici.

## 12. Forecast realistico 12 settimane

| Settimana | Aspettativa |
|---|---|
| 1-2 | Zero crescita. Algoritmo calibra. **Soglia rossa di abbandono: NON mollare prima del gg 45.** |
| 3-4 | Primi Reel sopra 500 impressions, primi save organici, 30-80 follower IT veri |
| 5-8 | Reel 2k-10k views (se hook centrato), primi DM lead, profilo riconosciuto da algoritmo come "verticale fiscale" |
| 9-12 | **2-5 lead qualificati/mese** dai social. Da qui ha senso accendere Meta Ads (atterrare da ad su FB/IG vuoto = CR -30/40%) |

## 13. Asset già esistenti da sfruttare

- **Sede Borgo Riccio**: 4 foto landscape + cortile + arco rose + porticato (commit `d10ce09`). Spina dorsale visiva "fiducia + storia + presenza fisica" — usa ogni 5 post.
- **Blog SEO già live**: 8+ articoli pillar (730 precompilato, P.IVA online, forfettario 2026, crisi impresa, sovraindebitamento, ravvedimento RW, IMU, calendario scadenze) → **1 long-form FB/sett con link** = costo produzione zero.
- **Calcolatore forfettario** `/calcolatori/forfettario` → CTA stories *"calcola in 2 min se ti conviene"*.
- **Calendario scadenze fiscali** `/calendario-scadenze-fiscali` → carosello mensile *"scadenze del mese in 8 slide"*.
- **Workflow n8n già pronto** (`scripts/n8n/workflow-publisher.json`): cron 09:00 → Google Sheet → AI rewrite per persona → Telegram approval gate → Graph API. Esegue **70% di questo piano in automatico** (tu approvi via Telegram, n8n pubblica).

## 14. Azione immediata (questa settimana)

1. ~~Verifica migrazione Pagina FB~~ — **rimosso, non necessaria** (analisi 2026-05-29)
2. **Bio FB AT Consulting Parma** ottimizzata + foto copertina che usa cortile rose
3. **Bio IG** (verifica se esiste o creare nuovo): *"Studio commercialisti Parma + tutta Italia · 730 · P.IVA · IMU · PMI · Scrivi '730' per la checklist gratuita · clienti.atparma.com"*
4. **Lista 30 account adiacenti IT** da seguire/interagire ogni giorno (drafabile separatamente)
5. **Sheet calendario social** popolato con 4 settimane (1 hero/sett × 3 persona)
6. **Bot Telegram via @BotFather** (5 min) — token + chat ID per approval gate n8n
7. **Batch produzione settimana 1**: cfr. `scripts/n8n/post-setup-9.md` per i 9 post di setup con copy completa già pronta

## 15. Out of scope espliciti primo trimestre

- **Niente Meta Ads** fino a 200-300 follower IT veri (CR ad su feed FB vuoto = bruci budget)
- **Niente Live** fino a 500 follower IT
- **Niente collaborazioni / sponsor influencer**
- **Niente offerte/sconti** dichiarati in feed (deontologia ODCEC: pubblicità professionale ammessa con vincoli — niente comparativa, niente claim non dimostrabili, niente *"garantito"*)
- **Niente post statico** dopo i primi 9 di setup (deprioritizzati dal 2024)

## 16. Verification — come capire se sta funzionando

| Settimana | Check |
|---|---|
| **1** | Pubblicazione costante, profilo presentabile. Ogni post all'orario giusto, ogni commento risposto entro 5 min, 30 min/giorno interazioni mirate **fatti davvero**. |
| **2** | Primi save su almeno 1 carosello + primi DM da box domanda stories. Se **zero save** → hook caroselli troppo generici, rivedere. |
| **3** | Almeno 1 Reel sopra 500 impressions. Se sempre sotto 100 → algoritmo non ha ancora capito la nicchia, verifica che **tutti** i contenuti siano nei 4 pilastri. |
| **4** | 50+ follower IT (no fake) + 1-2 Reel sopra 5k views. Se <30 follower a fine sett 4 → errore hook (rivedere primi 2 sec) o orari (verifica 12:30 e 20:30 davvero rispettati). |

**Soglia rossa**: se a fine settimana 6 (gg 42) zero Reel ha superato 1k impressions, qualcosa è fuori posto — probabilmente non sei abbastanza verticale (troppi temi diversi) o gli hook sono cataloghi mascherati. **Pivot dei format, non quit.**

---

## Allegati

- `scripts/n8n/post-setup-9.md` — i 9 post di setup con copy hook+body+CTA già pronta
- `scripts/n8n/workflow-publisher.json` — workflow n8n importabile per automatizzare pubblicazione dopo approval Telegram
- `scripts/n8n/calendario-template.md` — schema Google Sheet + prompt AI per 3 persona
