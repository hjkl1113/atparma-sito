# Istruzioni per Claude for Chrome — Pubblicazione 3 post FB sovraindebitamento

Documento operativo da usare con l'**estensione Claude for Chrome** per
pubblicare i 3 post FB sul sovraindebitamento (uno per target) sulla Pagina
Facebook AT Parma, con tua supervisione.

I 3 testi dei post sono in `scripts/n8n/posts-sovraindebitamento.md`.
Il visual da allegare è in `public/ads/topical/sovraindebitamento-1x1.jpg`.

---

## Pre-requisiti (prima di iniziare)

Controlla che tutto sia in ordine, **2 minuti**:

- [ ] **Claude for Chrome** installato e loggato col tuo account Anthropic.
  Se non l'hai ancora: `https://www.anthropic.com/claude-for-chrome` (richiede
  subscription Claude Max o invito Research Preview)
- [ ] Sei **loggato su Facebook** nel browser dove gira Claude for Chrome
- [ ] La **Pagina AT Parma** è aperta come tab attivo (URL del tipo
  `facebook.com/[atparma-page-id]`)
- [ ] Hai **questo file** aperto in un tab vicino, così copi-incolli al volo
  - Anche `posts-sovraindebitamento.md` aperto in altro tab per il testo
    completo dei 3 post
- [ ] La **cartella con il visual** è aperta su Finder:
  `~/Desktop/studio at/sito/public/ads/topical/`
- [ ] Hai **15-20 minuti** liberi (1 post = 5-7 minuti tra preview e pubblicazione)

---

## Note di sicurezza (importanti)

- ❌ **MAI dare a Claude Chrome il Page Access Token Meta o qualsiasi token API**
  (verrebbe loggato in chat e potrebbe essere usato per accessi indesiderati)
- ❌ **MAI usarlo per dashboard portale clienti, gestionali fiscali, banca,
  PEC** o pagamenti — solo per task social pubblici a basso rischio
- ✅ Tieni l'opzione **"ask before acting"** ATTIVA per le prime 10 esecuzioni
  (lo trovi nelle preferenze dell'estensione)
- ✅ Dopo ogni pubblicazione, **screenshot del post pubblicato** (con URL
  visibile) e salvalo come prova in `scripts/n8n/log/`

---

## Workflow consigliato

**NON pubblicare tutti e 3 i post in fila**. Meta ha algoritmi anti-spam che
penalizzano pagine che fanno burst di pubblicazione su account nuovi.

Cadenza ideale: **1 post al giorno**, lun/mer/ven della stessa settimana:

| Giorno | Post | Target |
|---|---|---|
| **Lunedì** ore 09:00-10:00 | Post 1 | Privati |
| **Mercoledì** ore 09:00-10:00 | Post 2 | PMI |
| **Venerdì** ore 09:00-10:00 | Post 3 | Artigiani |

Se preferisci pubblicare **tutti i 3 oggi**, lascia almeno **3-4 ore** tra
uno e l'altro (es. 09:00, 13:00, 19:00).

Se la **Pagina FB classica è già migrata** dal profilo pro, usa la variante
"PROGRAMMATA" di ogni post (sotto): Claude clicca "Programma" invece di
"Pubblica" e imposta data/ora. Su profilo pro **la programmazione nativa non
è disponibile**, devi pubblicare al momento (o usare Meta Business Suite, ma
quella si configura solo dopo migrazione Pagina).

---

## POST 1 — Privati (lunedì)

Apri il tab Pagina FB AT Parma, poi apri la chat di Claude Chrome e
**incolla questo blocco**:

```
Apri la mia Pagina Facebook AT Parma (è il tab attivo).
Clicca su "Crea post".

Incolla esattamente questo testo nel box del post:

«
Stai facendo fatica a pagare cartelle, finanziarie o un mutuo?

Nel 2026 esistono procedure legali concrete per uscirne. Il Codice della Crisi (CCII) prevede 4 strade diverse, con esiti che vanno dalla ristrutturazione dei debiti alla cancellazione totale dell'esposizione (esdebitazione dell'incapiente, art. 283).

Dal deposito della domanda scatta la sospensione automatica dei pignoramenti per 180 giorni. Anche le esecuzioni in corso si fermano.

Abbiamo scritto una guida che spiega chi può accedere, quali debiti rientrano (cartelle, INPS, IVA, mutui) e quali no, quanto costa la procedura e quali sono gli OCC competenti per il Tribunale di Parma.

Leggila qui: www.atparma.com/blog/sovraindebitamento-2026-come-uscire-dai-debiti?utm_source=facebook&utm_medium=organic_social&utm_campaign=fb_privati_sovraindebitamento&utm_content=2026-06-02

#sovraindebitamento #commercialistaparma #debiti
»

Poi allega questa foto:
/Users/alessandrosicuri/Desktop/studio at/sito/public/ads/topical/sovraindebitamento-1x1.jpg

NON pubblicare ancora. Mostrami l'anteprima del post così verifico.
Quando ti dico "ok pubblica", clicca "Pubblica".
```

Dopo che Claude pubblica:
- Aspetta che la timeline si aggiorni
- Salva screenshot del post live in `scripts/n8n/log/2026-XX-XX-post-1-privati.png`

### Variante PROGRAMMATA (solo se Pagina classica)

Sostituisci l'ultima riga con:
```
NON pubblicare ancora. Apri "Opzioni di pubblicazione" → "Programma post".
Imposta data: prossimo lunedì alle 09:30.
Mostrami l'anteprima.
Quando confermo, clicca "Programma".
```

---

## POST 2 — PMI / Imprenditori (mercoledì)

Stesso flusso del POST 1, incolla questo blocco in Claude Chrome:

```
Apri la mia Pagina Facebook AT Parma (è il tab attivo).
Clicca su "Crea post".

Incolla esattamente questo testo nel box del post:

«
Imprenditori e organi di controllo: il sovraindebitamento NON è solo per i consumatori.

Il CCII (D.Lgs. 14/2019, modificato dal Correttivo-ter D.Lgs. 136/2024) prevede procedure specifiche anche per imprenditori minori, agricoli, start-up innovative e professionisti. Concordato minore (art. 74-83), liquidazione controllata (art. 268-277), esdebitazione dell'incapiente (art. 283): strumenti distinti, presupposti specifici, esiti diversi.

Per le imprese sopra soglia esistono invece la composizione negoziata e il concordato preventivo. Sindaci e revisori hanno oggi precisi doveri di segnalazione (art. 25-octies) della crisi all'organo amministrativo: l'omessa segnalazione espone a responsabilità civile.

La nostra guida spiega in dettaglio le 4 procedure CCII, il ruolo dell'OCC, i requisiti di meritevolezza e quali debiti sono falcidiabili.

Leggi: www.atparma.com/blog/sovraindebitamento-2026-come-uscire-dai-debiti?utm_source=facebook&utm_medium=organic_social&utm_campaign=fb_pmi_sovraindebitamento&utm_content=2026-06-04

#crisidimpresa #CCII #commercialistaparma #procedureconcorsuali
»

Poi allega questa foto:
/Users/alessandrosicuri/Desktop/studio at/sito/public/ads/topical/sovraindebitamento-1x1.jpg

NON pubblicare ancora. Mostrami l'anteprima.
Quando ti dico "ok pubblica", clicca "Pubblica".
```

---

## POST 3 — Artigiani / Commercianti (venerdì)

Stesso flusso, incolla in Claude Chrome:

```
Apri la mia Pagina Facebook AT Parma (è il tab attivo).
Clicca su "Crea post".

Incolla esattamente questo testo nel box del post:

«
Artigiani e commercianti in difficoltà con cartelle esattoriali, INPS, IVA o debiti commerciali: ci sono procedure CCII che ti permettono di ridurre o cancellare il debito.

Cosa rientra: cartelle Agenzia Entrate Riscossione, contributi INPS gestione separata e artigiani-commercianti, IVA (falcidiabile dopo Cass. 2020), debiti verso fornitori, mutui, finanziarie.

Cosa NON rientra: multe, sanzioni penali, alimenti.

Tempi reali: 60-120 giorni di preparazione + 6-12 mesi per omologazione (ristrutturazione del consumatore o concordato minore). Liquidazione controllata: fino a 3 anni, poi esdebitazione di diritto.

Costo procedura: tariffe ministeriali, in genere 2.000-6.000 € totali secondo valore dei debiti.

Tutto nella guida: www.atparma.com/blog/sovraindebitamento-2026-come-uscire-dai-debiti?utm_source=facebook&utm_medium=organic_social&utm_campaign=fb_artigiani_sovraindebitamento&utm_content=2026-06-06

#partitaiva #artigiani #sovraindebitamento #parma
»

Poi allega questa foto:
/Users/alessandrosicuri/Desktop/studio at/sito/public/ads/topical/sovraindebitamento-1x1.jpg

NON pubblicare ancora. Mostrami l'anteprima.
Quando ti dico "ok pubblica", clicca "Pubblica".
```

---

## Cosa fare DOPO i 3 post

1. **Riposo** 7 giorni. Non pubblicare altri 3 post fiscali consecutivi
   (l'algoritmo Meta penalizza la monotonia tematica). Settimana prossima
   alterna con altri topic (es. 730, P.IVA, calcolatori).
2. **Monitoraggio metriche** dopo 24-48h da ogni post:
   - Apri Meta Business Suite (se Pagina migrata) → Insights → Post performance
   - Annota: reach, engagement (like+commenti+condivisioni), CTR sul link, save
   - Salva i valori nel Google Sheet "AT Parma — Calendario Social" colonne
     `reach_24h` e `engagement_24h`
3. **Analisi** dopo 7-10 giorni:
   - Quale dei 3 target ha avuto reach/engagement più alto?
   - Quale CTA ha generato più click? (UTM `fb_privati_*` vs `fb_pmi_*` vs
     `fb_artigiani_*` in GA4, una volta che GA4 sarà attivo)
   - Quale orario di pubblicazione ha performato meglio?
4. **Iterazione**: usa i dati per riempire il calendario settimana 2 con
   più peso sul target/orario/topic vincente.

---

## Troubleshooting

**Claude non riesce ad allegare l'immagine**: probabilmente il box upload FB
è cambiato. Apri il file Finder manualmente, fai drag&drop nel box.

**Claude pubblica per sbaglio prima della tua conferma**: se hai dimenticato
"NON pubblicare ancora" nel prompt. Cancella subito il post da FB
(menu ⋯ → Elimina), correggi prompt, riprova.

**Il post sembra pubblicato in stato "bozza" e non visibile**: probabilmente
Claude ha cliccato "Salva bozza" invece di "Pubblica". Vai sulla Pagina,
sezione Bozze, e pubblica manualmente.

**FB chiede di "verificare l'identità del gestore della Pagina"**: è normale
per Pagine nuove. Procedi col flow di verifica una tantum.

---

## Rollback

Se uno dei post genera reazioni negative o reclami:

1. Vai sul post pubblicato su FB
2. Menu ⋯ → "Elimina post" (resta sul tuo profilo, scompare per tutti)
3. Aggiorna `scripts/n8n/log/` con nota "rimosso il [data] per [motivo]"
4. Se la causa era nel copy, modifica `posts-sovraindebitamento.md` per le
   prossime iterazioni
