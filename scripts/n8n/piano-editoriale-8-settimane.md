# Piano editoriale 8 settimane — Pagina Facebook A.T. Parma

24 post programmati (3 a settimana × 8 settimane) per riempire il calendario
editoriale Google Sheet e alimentare il workflow n8n quando attivo.

**Rotazione fissa**:
- **Lunedì** → target **Privati** (730, sovraindebitamento, detrazioni, calcolatore forfettario)
- **Mercoledì** → target **PMI** (composizione negoziata, bilanci, crisi impresa, fiscalità d'impresa)
- **Venerdì** → target **Artigiani/Commercianti** (P.IVA, scadenze CCIAA, contabilità, INPS)

Orario standard pubblicazione: **09:00-10:00** (orario di massima attenzione
del target adulto-professionista italiano).

---

## Calendario 24 post (formato pronto per Google Sheet)

Copia il blocco sotto nel foglio "AT Parma — Calendario Social".

```
data        | target     | topic                                | articolo_url                                                             | prezzo | cta_url_short                                                            | status
2026-06-01  | privati    | Sovraindebitamento privati           | https://www.atparma.com/blog/sovraindebitamento-2026-come-uscire-dai-debiti |        | /contatti?ref=fb-sovraind-priv                                          | pronto
2026-06-03  | pmi        | Composizione negoziata 2026          | https://www.atparma.com/blog/composizione-negoziata-crisi-impresa-2026     |        | /contatti?ref=fb-cn-pmi                                                 | pronto
2026-06-05  | artigiani  | Sovraindebitamento artigiani         | https://www.atparma.com/blog/sovraindebitamento-2026-come-uscire-dai-debiti |        | /contatti?ref=fb-sovraind-art                                           | pronto
2026-06-08  | privati    | Dichiarazione 730 — scadenze         | https://www.atparma.com/blog/come-fare-730-online                          | 50     | /servizi/dichiarazione-730                                              | bozza
2026-06-10  | pmi        | Doveri sindaci art. 25-octies        | https://www.atparma.com/blog/composizione-negoziata-crisi-impresa-2026     |        | /servizi/crisi-di-impresa                                               | bozza
2026-06-12  | artigiani  | Apertura P.IVA artigiano             | https://www.atparma.com/blog/aprire-partita-iva-online                     | 610    | /servizi/piva-artigiano-commerciante                                    | bozza
2026-06-15  | privati    | Regime forfettario 2026 — chi può    | https://www.atparma.com/blog/regime-forfettario-2026                       | 549    | /calcolatori/forfettario                                                | bozza
2026-06-17  | pmi        | Bilancio 2025 — quando va depositato |                                                                          |        | /servizi/consulenza-fiscale                                             | bozza
2026-06-19  | artigiani  | Scadenze fiscali giugno              |                                                                          |        | /strumenti/scadenze                                                     | bozza
2026-06-22  | privati    | Quadro RW cripto 2026                | https://www.atparma.com/blog/cripto-quadro-rw-2026                         | 98     | /servizi/quadro-rw                                                      | bozza
2026-06-24  | pmi        | Esperto indipendente CCII            | https://www.atparma.com/blog/composizione-negoziata-crisi-impresa-2026     |        | /servizi/crisi-di-impresa                                               | bozza
2026-06-26  | artigiani  | Contabilità semplificata             |                                                                          | 1464   | /servizi/contabilita-professionista-semplificata                        | bozza
2026-06-29  | privati    | 730 precompilato — conviene?         | https://www.atparma.com/blog/730-precompilato-conviene                     | 50     | /servizi/dichiarazione-730                                              | bozza
2026-07-01  | pmi        | Misure protettive composizione neg.  | https://www.atparma.com/blog/composizione-negoziata-crisi-impresa-2026     |        | /servizi/crisi-di-impresa                                               | bozza
2026-07-03  | artigiani  | INPS gestione artigiani — calcolo    |                                                                          |        | /calcolatori/forfettario                                                | bozza
2026-07-06  | privati    | Detrazioni dimenticate nel 730       | https://www.atparma.com/blog/come-fare-730-online                          | 50     | /servizi/dichiarazione-730                                              | bozza
2026-07-08  | pmi        | Concordato preventivo vs comp.neg.   | https://www.atparma.com/blog/composizione-negoziata-crisi-impresa-2026     |        | /servizi/crisi-di-impresa                                               | bozza
2026-07-10  | artigiani  | Fatturazione elettronica forfettari  |                                                                          |        | /servizi/piva-professionista                                            | bozza
2026-07-13  | privati    | Ravvedimento operoso cripto          | https://www.atparma.com/blog/ravvedimento-cripto-quadro-rw                 |        | /servizi/quadro-rw-ravvedimento                                         | bozza
2026-07-15  | pmi        | OCC e ruolo nel CCII                 | https://www.atparma.com/blog/sovraindebitamento-2026-come-uscire-dai-debiti |        | /servizi/crisi-di-impresa                                               | bozza
2026-07-17  | artigiani  | F24 a pagamento — quando scatta      |                                                                          |        | /strumenti/scadenze                                                     | bozza
2026-07-20  | privati    | Calcolatore forfettario gratuito     | https://www.atparma.com/calcolatori/forfettario                            |        | /calcolatori/forfettario                                                | bozza
2026-07-22  | pmi        | Piano risanamento attestato art.56   | https://www.atparma.com/blog/composizione-negoziata-crisi-impresa-2026     |        | /servizi/crisi-di-impresa                                               | bozza
2026-07-24  | artigiani  | Commercialista online vs studio      | https://www.atparma.com/blog/commercialista-online                         |        | /contatti                                                               | bozza
```

**Note pratiche**:
- `cta_url_short` è il path relativo: completalo con `https://www.atparma.com`
  + parametri UTM al momento della generazione del post (vedi sotto)
- I primi 3 post (1-2-3 giugno) sono già coperti dai 3 post sovraindebitamento
  pronti in `posts-sovraindebitamento.md` — usa quelli direttamente, non
  rigenerare via AI
- I post dal 4 in poi vengono generati via workflow n8n con AI Claude
  (prompt template sotto)

---

## Mix tematico — distribuzione 24 post

| Categoria | N. post | % |
|---|---|---|
| **Rilancio articoli blog esistenti** | 14 | 58% |
| **Scadenze fiscali / promemoria** | 5 | 21% |
| **Strumenti gratuiti** (calcolatori, simulatori) | 3 | 12% |
| **Brand / sede / chi siamo** | 2 | 8% |

Razionale: il **rilancio degli articoli blog è la spina dorsale** perché
crea traffico al sito (= conversioni potenziali). Le scadenze fiscali sono
**alto engagement** ma basso intent commerciale (servono a tenere "vivo"
il profilo). I calcolatori sono **lead magnet** indiretti.

---

## Banca di topic per target — riserva per estensioni

### Privati (oltre i post sopra)

- "Bonus casa 2026: tutti i bonus attivi e come accumularli"
- "Cosa fare se ti arriva una cartella esattoriale: 3 step prima del
  ricorso"
- "Detrazione spese mediche: cosa rientra (e cosa molti dimenticano)"
- "Mutuo prima casa: quando conviene rifinanziare nel 2026"
- "Pensione integrativa: vantaggi fiscali del versamento dedotto"
- "Successione: quando serve il commercialista e cosa preparare"
- "Cripto in dichiarazione: tassazione del 26% sui guadagni"
- "Bollo auto e fisco: cosa cambia per chi vende auto usata"

### PMI / Imprenditori (oltre i post sopra)

- "Continuità aziendale: come fare il test ai sensi dell'art. 13 CCII"
- "Indici della crisi: i 6 segnali da monitorare in azienda"
- "Bilanci 2025: la nota integrativa e il rendiconto finanziario"
- "Accordo di ristrutturazione dei debiti art. 57 CCII"
- "Operazioni di M&A: due diligence fiscale in 5 punti"
- "Bandi PNRR per PMI: tre aperti questo mese"
- "Audit interno: quando è obbligatorio e come si svolge"
- "Soci di SRL: la responsabilità per le imposte non pagate"

### Artigiani / Commercianti (oltre i post sopra)

- "CCIAA: scadenze diritto camerale 2026"
- "ISA artigiani: chi è esonerato e chi no"
- "Modello F23 vs F24: quando usare uno e l'altro"
- "Cassetto previdenziale INPS: come consultarlo (e perché farlo
  trimestralmente)"
- "Apertura conto corrente dedicato P.IVA: pro e contro"
- "Spesometro estero: per chi è obbligatorio"
- "Lavoro accessorio: voucher e PrestO oggi"
- "Sospensione attività P.IVA: come si fa (senza chiudere)"

---

## Template prompt AI per generazione post (n8n)

Quando il workflow n8n attiva la generazione AI per un post, usa il
template che corrisponde al `target`:

### Target = `privati`

```
Sei il social media manager di A.T. Consulting Parma, studio di
commercialisti boutique con sede in Borgo Riccio da Parma 5.

Scrivi un post Facebook in italiano per AUDIENCE CONSUMATORI / PRIVATI /
LAVORATORI DIPENDENTI.

Tono: caldo, colloquiale, "tu" diretto, esempi quotidiani. Mai pomposo,
mai legalese pesante, mai paternalistico.

Vincoli:
- Massimo 600 caratteri (sopra il fold senza "Visualizza altro")
- Esordio con una domanda concreta o numero d'effetto
- Cita il prezzo se fornito (€{prezzo})
- Una sola CTA chiara, mai più di una
- Link finale con UTM: {cta_url}?utm_source=facebook&utm_medium=organic_social&utm_campaign=fb_privati_{topic_slug}&utm_content={data}
- Massimo 3 hashtag pertinenti alla fine

Argomento: {topic}
Articolo blog di riferimento (rilancia se presente): {articolo_url}
Prezzo del servizio (se applicabile): €{prezzo}
CTA URL base: {cta_url_short}

Genera SOLO il testo del post, niente intro o spiegazioni esterne.
```

### Target = `pmi`

```
Sei il social media manager di A.T. Consulting Parma, studio specializzato
in crisi d'impresa, composizione negoziata, bilanci, M&A.

Scrivi un post Facebook in italiano per AUDIENCE IMPRENDITORI PMI /
AMMINISTRATORI / SINDACI E REVISORI.

Tono: professionale, autorevole, basato su dati e normativa. Tu
professionale. Cita norme (CCII art. X, D.Lgs. Y, Cass. Z) quando
rilevanti.

Vincoli:
- Massimo 700 caratteri
- Esordio con un dato statistico, una norma fresca, o un problema
  operativo concreto
- Tono che ispira fiducia tecnica
- Non promettere risultati, parla di metodo
- Link finale con UTM: {cta_url}?utm_source=facebook&utm_medium=organic_social&utm_campaign=fb_pmi_{topic_slug}&utm_content={data}
- Hashtag professionali, massimo 4

Argomento: {topic}
Articolo blog: {articolo_url}
CTA URL base: {cta_url_short}

Genera SOLO il testo del post.
```

### Target = `artigiani`

```
Sei il social media manager di A.T. Consulting Parma.

Scrivi un post Facebook in italiano per AUDIENCE ARTIGIANI / COMMERCIANTI
/ PICCOLI IMPRENDITORI con P.IVA semplice.

Tono: concreto, pragmatico, numeri precisi, niente marketing speak. Tu
diretto ma rispettoso. Il lettore è una persona pratica con poco tempo.

Vincoli:
- Massimo 550 caratteri
- Cita SEMPRE costi precisi se forniti (€{prezzo})
- Cita SEMPRE scadenze precise se rilevanti
- Niente "soluzioni innovative", "approccio personalizzato"
- Parla in termini di tempo / soldi / cosa serve / cosa rischi
- Link finale con UTM: {cta_url}?utm_source=facebook&utm_medium=organic_social&utm_campaign=fb_artigiani_{topic_slug}&utm_content={data}
- Massimo 3 hashtag

Argomento: {topic}
Articolo blog: {articolo_url}
Prezzo (se applicabile): €{prezzo}
CTA URL base: {cta_url_short}

Genera SOLO il testo del post.
```

---

## Cadenza definitiva del workflow

### Fase 1 — Settimane 1-4 (pubblicazione manuale)

- I 3 post sovraindebitamento + 9 post successivi sono pubblicati **a mano**
  via Claude for Chrome (vedi `claude-chrome-instructions.md`)
- Workflow n8n NON attivo
- Obiettivo: osservare quali post generano engagement reale, raffinare i
  prompt AI in base ai vincitori

### Fase 2 — Settimane 5-8 (n8n con approval Telegram)

- Workflow n8n importato e attivo
- AI genera la bozza ogni mattina, tu approvi via Telegram
- Pubblica solo dopo tuo "Pubblica" entro 30 min
- Obiettivo: ridurre tempo umano da 10 min a 30 sec per post

### Fase 3 — Settimane 9+ (full-auto su segmenti a basso rischio)

- Per la categoria "Scadenze fiscali" (basso rischio editoriale): full-auto
- Per le altre categorie: continua approval Telegram
- Obiettivo: scalare la presenza senza scalare il tempo umano

---

## Metriche per ottimizzazione (settimanale)

Estrai dal Google Sheet ogni venerdì pomeriggio (15 min):

### Per target

| Target | Reach medio/post | Engagement rate | CTR link | Conversioni form |
|---|---|---|---|---|
| Privati | … | … | … | … |
| PMI | … | … | … | … |
| Artigiani | … | … | … | … |

Quale target ha **engagement > 2x della media**? Ri-priorizzare nel
calendario successivo.

### Per topic

Quali argomenti hanno performato meglio della media? Replicare quel
topic con angolazione diversa nelle 4 settimane successive.

### Per orario di pubblicazione

Inizialmente tutti i post escono alle 09:00-10:00. Dopo 4 settimane di
dati, **A/B test orario**: 1 post a settimana esce alle 13:00 e 1 alle
20:00. Confronta reach.

---

## Iterazione

### Dopo 4 settimane

Review obbligatoria:
- Identificare i 3 post con engagement più alto → modello di riferimento
  per i prompt AI nelle 4 settimane successive
- Identificare i 3 post con engagement più basso → escludere quel tipo
  di angolazione dal calendario

### Dopo 8 settimane

Decisione strategica:
- **Continuare** col workflow attuale (organic-only, 3 post/settimana)?
- **Scalare** a 4-5 post/settimana?
- **Attivare Meta Ads** boostando i 3 post che hanno performato meglio?
- **Espandere** ad Instagram (stessi post + Reels)?
- **Espandere** a LinkedIn (con tono diverso, più B2B)?

Decisione basata su:
- Lead generati da UTM `fb_*` in GA4
- Conversioni form contatti
- Crescita follower Pagina FB
- Tempo umano effettivamente speso

---

## Estensioni future (non in scope)

- Cross-posting su Instagram (Stories + Reels usando gli stessi visual)
- Cross-posting su LinkedIn (con copy adattato, tono più B2B)
- Auto-fetch metriche reach/engagement 24h dopo via n8n + Meta Graph API
- AI rewrite di post che hanno performato bene per replicare lo stile
- Boost automatico (Meta Ads) dei post che superano X engagement organico
- Sentiment analysis sui commenti per fare retargeting smart
