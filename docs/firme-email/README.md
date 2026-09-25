# Firme email — A.T. Consulting Parma

Due firme, una per casella. Generate il 25/09/2026 sui dati di `lib/studio-data.ts`.

| File | Casella | Contenuto |
|---|---|---|
| `sicuri.html` / `.txt` | sicuri@atparma.com | firma personale: nome, titoli, fisso e cellulare |
| `segreteria.html` / `.txt` | segreteria@atparma.com | firma di studio, impersonale: niente nome, niente cellulare |

La segreteria è impersonale di proposito: la casella la usa anche Casciaro da Outlook.

## Prerequisito: il logo deve stare online

L'HTML richiama `https://www.atparma.com/firma-at.png` (in `public/firma-at.png`).
**Finché quel file non è in produzione, nelle mail si vede un riquadro vuoto.** Il PNG è
il monogramma «AT» di `app/icon.svg` convertito a 192 px: gli SVG nelle mail non si vedono.

## Come si installano

**Webmail Aruba** — Impostazioni › Firma › attiva l'editor HTML (`<>`), incolla il contenuto
del file `.html`. Se l'editor HTML non c'è, usa il `.txt`.

**Apple Mail** — Mail › Impostazioni › Firme, crea la firma, poi apri il `.html` in Safari,
seleziona tutto (cmd+A), copia e incolla nel riquadro. Togli la spunta a «Corrispondi sempre
al font predefinito», altrimenti Mail appiattisce la formattazione.

**Outlook** — File › Opzioni › Posta › Firme. Outlook non accetta HTML incollato come codice:
apri il `.html` in un browser, copia il risultato **renderizzato** e incolla.

## Scelte fatte

- **Niente PEC**: esclusa su richiesta.
- **Area clienti** (`clienti.atparma.com`) presente accanto al sito: è il punto d'arrivo di
  tutti i servizi del catalogo, quindi in firma vale più del sito vetrina.
- **Disclaimer in due righe**, non la versione lunga.
- Colori dal sito: accento `#4A9FD8`, monogramma su `#0A0A0A`.
- Tabelle e stili inline: è l'unico modo perché la firma regga su Outlook.
- Larghezza fissa 470 px, così la riga del disclaimer allinea col blocco.

## ⚠️ Punto aperto: art. 2250 c.c.

A.T. Consulting Parma è una **S.R.L.S.**, e l'art. 2250 del Codice Civile impone che negli
**atti e nella corrispondenza** delle società di capitali compaiano sede, ufficio del registro
delle imprese e **numero REA**, e per le S.R.L. anche il **capitale sociale** (versato ed
esistente secondo l'ultimo bilancio). La posta elettronica è corrispondenza a tutti gli effetti.

Oggi in firma ci sono sede e recapiti, ma **mancano REA, registro imprese e capitale sociale**,
e la P.IVA non è stata inserita. Quei dati non sono nei file dello studio e non sono stati
inventati: vanno forniti e poi aggiunti alla riga del disclaimer.

Mancano per la stessa ragione i **numeri di iscrizione** all'Ordine dei Dottori Commercialisti
di Parma e al Registro dei Revisori Legali, che in una firma professionale di solito compaiono.
