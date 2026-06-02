# Google Sheets: schema del calendario editoriale

Foglio: **AT Parma — Calendario Social**

Una riga = un post programmato. Il workflow n8n legge ogni mattina la riga
con `data` = oggi e `status` = `pronto`.

## Schema colonne

| Colonna | Tipo | Esempio | Descrizione |
|---|---|---|---|
| `data` | DATE | `2026-06-02` | Data di pubblicazione programmata (giorno) |
| `target` | ENUM | `privati` | `privati` \| `pmi` \| `artigiani` |
| `topic` | TEXT | `Dichiarazione 730` | Argomento del post (per memoria umana) |
| `articolo_url` | URL | `https://www.atparma.com/blog/come-fare-730-online` | Link articolo blog da rilanciare (opzionale) |
| `prezzo` | NUMBER | `50` | Prezzo da menzionare (opzionale) |
| `cta_url` | URL | `https://www.atparma.com/contatti?ref=fb-730` | URL di destinazione con UTM |
| `bozza` | TEXT | (vuota) | Bozza scritta a mano (opzionale, override AI) |
| `status` | ENUM | `pronto` | `bozza` \| `pronto` \| `pubblicato` \| `saltato` \| `manuale` |
| `post_id` | TEXT | `123456789_987654321` | ID post FB generato dopo pubblicazione |
| `pubblicato_il` | DATETIME | `2026-06-02 09:15` | Timestamp effettivo pubblicazione |
| `reach_24h` | NUMBER | `420` | Reach 24h dopo (fetched da Graph API) |
| `engagement_24h` | NUMBER | `18` | Like + commenti + condivisioni |
| `note` | TEXT | (libero) | Memo umani |

### Valori `target` e tono associato

| Target | Tono | Esempio incipit | CTA tipico |
|---|---|---|---|
| `privati` | Colloquiale, "tu" diretto, esempi quotidiani | "Devi fare il 730 ma non sai da dove partire?" | "Prenota in 5 minuti" |
| `pmi` | Professionale, normativo, dati statistici | "Nel 2025 Unioncamere ha registrato 3.600 istanze di composizione negoziata" | "Richiedi un check di sostenibilità" |
| `artigiani` | Concreto, numeri precisi, scadenze | "Aprire P.IVA artigiana: €610 + CCIAA + INPS" | "Preventivo gratuito" |

### Valori `status`

- `bozza` — riga in lavorazione, workflow la ignora
- `pronto` — pronta per pubblicazione automatica
- `pubblicato` — workflow l'ha già pubblicata (set da n8n)
- `saltato` — utente ha rifiutato preview Telegram (set da n8n)
- `manuale` — riga con copy pre-scritta che va pubblicata a mano (workflow la ignora). Usato per i 9 post di setup in `post-setup-9.md` (sett 1-3, identità profilo).

## Esempio compilato (prima settimana — 02/06 → 06/06)

```
| data       | target     | topic                          | articolo_url                                                       | prezzo | cta_url                                          | status  |
|------------|------------|--------------------------------|--------------------------------------------------------------------|--------|--------------------------------------------------|---------|
| 2026-06-02 | privati    | Dichiarazione 730              | https://www.atparma.com/blog/come-fare-730-online                  | 50     | https://www.atparma.com/contatti?ref=fb-730      | pronto  |
| 2026-06-04 | pmi        | Composizione negoziata 2026    | https://www.atparma.com/blog/composizione-negoziata-crisi-impresa-2026 |    | https://www.atparma.com/contatti?ref=fb-crisi    | pronto  |
| 2026-06-06 | artigiani  | Aprire P.IVA artigiano         |                                                                    | 610    | https://www.atparma.com/contatti?ref=fb-piva-art | pronto  |
| 2026-06-09 | privati    | Sovraindebitamento             | https://www.atparma.com/blog/sovraindebitamento-2026-come-uscire-dai-debiti |    | https://www.atparma.com/contatti?ref=fb-debiti   | bozza   |
| 2026-06-11 | pmi        | Doveri sindaci art. 25-octies  | https://www.atparma.com/blog/composizione-negoziata-crisi-impresa-2026 |    | https://www.atparma.com/contatti?ref=fb-sindaci  | bozza   |
| 2026-06-13 | artigiani  | Scadenze fiscali giugno        |                                                                    |        | https://www.atparma.com/strumenti/scadenze        | bozza   |
```

## Prompt AI per ogni target (riferimento per il nodo Claude in n8n)

Il workflow chiama Claude con un prompt template che dipende dal valore di
`target`. Il nodo Claude in n8n usa questi prompt come `system message`.

### Target = `privati`

```
Sei il social media manager di A.T. Consulting Parma, uno studio di
commercialisti boutique con sede in Borgo Riccio da Parma 5. Scrivi un post
Facebook in italiano per audience CONSUMATORI / PRIVATI / LAVORATORI DIPENDENTI.

Tono: caldo, colloquiale, "tu" diretto, esempi quotidiani. Mai pomposo, mai
freddo, mai legalese pesante.

Vincoli:
- Massimo 600 caratteri (per stay above-the-fold senza "Visualizza altro")
- Esordio con una domanda, problema riconoscibile, o numero d'effetto
- Cita il prezzo se fornito ({prezzo})
- Chiudi con una sola CTA chiara, mai più di una
- Link finale: {cta_url}
- Massimo 3 hashtag pertinenti alla fine

Argomento del post: {topic}
Articolo blog di riferimento (se vuoi rilanciarlo): {articolo_url}
Prezzo del servizio: €{prezzo}
CTA URL: {cta_url}

Genera SOLO il testo del post, senza intro o spiegazioni.
```

### Target = `pmi`

```
Sei il social media manager di A.T. Consulting Parma, studio di commercialisti
specializzato anche in crisi d'impresa, composizione negoziata, bilanci,
operazioni straordinarie. Scrivi un post Facebook in italiano per audience
IMPRENDITORI PMI / AMMINISTRATORI / SINDACI E REVISORI.

Tono: professionale, autorevole, basato su dati e normativa. Tu professionale.
Mai paternalistico, mai vago. Cita norme (CCII art. X, D.Lgs.) quando rilevanti.

Vincoli:
- Massimo 700 caratteri (audience più paziente del B2C)
- Esordio con un dato statistico, una norma fresca, un problema operativo
- Tono che ispira fiducia tecnica
- Non promettere risultati, parla di metodo
- Link finale: {cta_url}
- Hashtag professionali, massimo 4

Argomento: {topic}
Articolo blog: {articolo_url}
CTA URL: {cta_url}

Genera SOLO il testo del post, senza intro o spiegazioni.
```

### Target = `artigiani`

```
Sei il social media manager di A.T. Consulting Parma. Scrivi un post Facebook
in italiano per audience ARTIGIANI / COMMERCIANTI / PICCOLI IMPRENDITORI con
P.IVA semplice.

Tono: concreto, pragmatico, numeri precisi, niente marketing speak. Tu diretto
ma rispettoso. Il lettore è una persona pratica con poco tempo.

Vincoli:
- Massimo 550 caratteri
- Cita SEMPRE costi precisi se forniti (€{prezzo})
- Cita SEMPRE scadenze precise se rilevanti
- Niente "soluzioni innovative", "approccio personalizzato", parole vuote
- Parla in termini di tempo / soldi / cosa serve / cosa rischi
- Link finale: {cta_url}
- Massimo 3 hashtag

Argomento: {topic}
Articolo blog: {articolo_url}
Prezzo: €{prezzo}
CTA URL: {cta_url}

Genera SOLO il testo del post, senza intro o spiegazioni.
```

## UTM convention per cta_url

Usa parametri UTM consistenti così GA4 traccia da dove vengono i lead:

```
?utm_source=facebook
&utm_medium=organic_social
&utm_campaign=fb_{target}_{topic_slug}
&utm_content={data}
```

Esempio:
```
https://www.atparma.com/contatti
?utm_source=facebook
&utm_medium=organic_social
&utm_campaign=fb_privati_730
&utm_content=2026-06-02
```

Quando attiveremo il Pixel + CAPI (vedi `lib/meta-capi.ts`), useremo invece
`fbc`/`fbp` automatici di Meta per il tracking, mantenendo gli UTM come
backup per GA4.

## Metriche da osservare nelle prime 8 settimane

Da estrarre dallo sheet per capire cosa funziona:

- **Per target**: reach medio, engagement rate medio, CTR sul link
- **Per topic**: quali argomenti hanno engagement > 2x media
- **Per giorno della settimana**: lunedì vs mercoledì vs venerdì
- **Per ora di pubblicazione**: 09:00 vs 13:00 vs 18:00 (variare nel calendario)

Dopo 8 settimane di dati, riprompare l'AI con esempi dei post che hanno
performato meglio per stringere lo stile.
