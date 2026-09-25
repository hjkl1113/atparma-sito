# Firme email — A.T. Consulting Parma

Due firme, una per casella. Generate il 25/09/2026 sui dati di `lib/studio-data.ts`.

| File | Casella | Contenuto |
|---|---|---|
| `sicuri.html` / `.txt` | sicuri@atparma.com | firma personale: nome, titoli, fisso e cellulare |
| `segreteria.html` / `.txt` | segreteria@atparma.com | firma di studio, impersonale: niente nome, niente cellulare |

La segreteria è impersonale di proposito: la casella la usa anche Casciaro da Outlook.

## Niente logo nelle firme — scelta del 25/09/2026

Le firme **non contengono il marchio**. Decisione dell'utente: Alessandro Sicuri firma come
**Dottore Commercialista e Revisore Legale**, che è attività personale e ordinistica, mentre
A.T. Consulting Parma è una S.R.L.S. di cui è socio al 49%. Mettere il marchio della società su
una firma personale confonde chi sta agendo.

Al posto del logo resta il **filetto verticale blu `#171695`** come accento.

### Il file del marchio resta comunque nel repo

`public/firma-at.png` è il **marchio autentico dello studio**, quello sulle fatture: scaricato da
Fatture in Cloud (`userdata/logos/288184`), **53×54 px, blu `#171695`**, legatura AT con la T
sovrapposta alla A come sulla targa dello studio. **53×54 è il massimo esistente** — verificato su
sette fatture emesse e sul file caricato nel gestionale.

Non è più usato dalle firme ma **va tenuto**: prima non esisteva in nessun repo una copia del
marchio vero. Il sito usa un `icon.svg` con una AT sans su nero, il portale un'icona su navy, le
creative social solo il wordmark: tre identità diverse, nessuna autentica.

Scartati lungo la ricerca, per non rifarla: il `logo_AT_meta_pack` in `~/Downloads` (lettere
accostate, non intrecciate — non è il marchio) e una ricostruzione vettoriale disegnata a mano
(proporzioni troppo distanti).

Se si recupera il **vettoriale** da chi ha fatto la targa, sostituire `public/firma-at.png`.

## Come si installano

**Webmail Aruba** — Impostazioni › Firma › attiva l'editor HTML (`<>`), incolla il contenuto
del file `.html`. Se l'editor HTML non c'è, usa il `.txt`.

**Apple Mail** — Mail › Impostazioni › Firme, crea la firma, poi apri il `.html` in Safari,
seleziona tutto (cmd+A), copia e incolla nel riquadro. Togli la spunta a «Corrispondi sempre
al font predefinito», altrimenti Mail appiattisce la formattazione.

**Outlook** — File › Opzioni › Posta › Firme. Outlook non accetta HTML incollato come codice:
apri il `.html` in un browser, copia il risultato **renderizzato** e incolla.

## Scelte fatte

- **Niente logo** e **niente PEC**: entrambi esclusi su richiesta (il logo per non legare la firma personale alla societa').
- **Area clienti** (`clienti.atparma.com`) presente accanto al sito: è il punto d'arrivo di
  tutti i servizi del catalogo, quindi in firma vale più del sito vetrina.
- **Nota privacy ridotta al solo rimando all'informativa** (`atparma.com/privacy`, verificata online). Tolte le formule di rito sulla riservatezza e sul cancellare il messaggio: non vincolano il destinatario a nulla e sono rumore.
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
