# Costi burocratici apertura P.IVA artigiano/commerciante

Fonte di verità per il tool `/strumenti/preventivo-artigiano-commerciante`.
Tutti i dati sono **verificati da fonti ufficiali** con link e data di
ultima verifica. Review semestrale programmata via GitHub Actions
(`.github/workflows/legal-review-reminder.yml`).

## Struttura

| File | Contenuto | Aggiornamento tipico |
|---|---|---|
| `nazionali.ts` | Bolli ComUnica, diritti segreteria CCIAA, diritto annuale, INPS 2026 | Annuale (decreti MISE + circolari INPS) |
| `scia-usl.ts` | Range costi SCIA comunale + USL/HACCP + SCIA abilitative | Semestrale (dati pubblici aggregati) |
| `index.ts` | API pubblica `calcolaPreventivo()` + `AT_PARMA_LISTINO` | Allineato a `app/lib/prezzi-default.ts` |
| `types.ts` | Tipi TS condivisi | Solo se cambia struttura dati |

## Fonti ufficiali

### Bolli e diritti CCIAA
- [Decreto MISE 17/07/2012 — Tabella A diritti di segreteria](https://www.mise.gov.it/images/stories/documenti/Decreto_17_07_2012.pdf) — base normativa
- [DPR 642/1972 — Imposta di bollo](https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;642) — €17,50 ComUnica

### Diritto camerale annuale 2026
- [MIMIT nota n. 0009347 del 16/01/2026](https://www.mimit.gov.it/) — importi 2026 invariati
- Misura fissa €200 × riduzione -50% = **€100 effettivi** per fatturato fino €100k
- Tetto massimo €20.000

### INPS artigiani/commercianti 2026
- [INPS Circolare n. 14/2026 del 9 febbraio](https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.02.gestioni-artigiani-e-commercianti-i-contributi-per-il-2026.html)
- Minimale: €18.808
- Aliquote: 24% artigiani, 24,48% commercianti
- Contributi fissi: €4.521,36 artigiani / €4.611,64 commercianti
- Iscrizione: gratuita

### Apertura P.IVA Agenzia Entrate
- [AA9/12 — Persona Fisica](https://www.agenziaentrate.gov.it/portale/schede/istanze/aa9_11-apertura-variazione-chiusura-pf) — **gratuita**, no bollo

## Filosofia dei dati

**Range vs valore puntuale**: per ogni voce esponiamo `min` e `max` per riflettere
variazioni reali (province diverse, Comuni diversi, tipologie attività).
Il tool finale mostra sempre range, mai valore singolo, per non esporsi
a reclami se il cliente paga poi cifra diversa.

**Disclaimer "stima indicativa"**: ogni preventivo generato DEVE contenere
disclaimer chiaro che l'importo esatto verrà comunicato in consulenza /
via mandato puntuale. Il tool è lead magnet + guida indicativa, non
quotation vincolante.

## Review

Questo file e i dati contenuti sono soggetti a revisione semestrale via
GitHub Actions. Ogni 19 aprile e 19 ottobre viene aperto automaticamente
un issue con checklist delle fonti da riverificare. Inoltre ogni modifica
deve aggiornare `ultimaVerifica` nella voce interessata.

Ultima revisione complessiva: **2026-04-20**
