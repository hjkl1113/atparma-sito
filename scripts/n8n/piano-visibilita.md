# Piano visibilità — atparma.com

Strategia operativa per amplificare la visibilità del sito atparma.com,
con focus iniziale sui **2 articoli blog appena pubblicati**
(sovraindebitamento + composizione negoziata), e impostazione strutturale
per crescita organica nei prossimi 6-12 mesi.

Sequenza time-sensitive: i primi 7 giorni dalla pubblicazione blog sono
critici per il momentum SEO. Più tardi muovi, più lento sarà il ranking.

---

## Settimana 1 — Quick wins SEO (30-60 min totali)

### A. Google Search Console — submit URL nuovi articoli

Senza submit manuale, Google indicizza un nuovo URL in 1-2 settimane.
Con submit, scende a 1-3 giorni.

1. Apri `https://search.google.com/search-console` con account proprietario
   del dominio `atparma.com`
2. Seleziona la proprietà `atparma.com`
3. In alto, barra "Controllo URL" (URL inspection), incolla:
   - `https://www.atparma.com/blog/sovraindebitamento-2026-come-uscire-dai-debiti`
4. Click "Test URL" → aspetta 30 sec
5. Click "Richiedi indicizzazione" → conferma
6. Ripeti con:
   - `https://www.atparma.com/blog/composizione-negoziata-crisi-impresa-2026`

Tempo: 5 minuti.

### B. Sitemap — verifica include nuovi articoli

1. Apri `https://www.atparma.com/sitemap.xml` in browser
2. Cerca "sovraindebitamento" — dovrebbe esserci una `<url>` entry
3. Cerca "composizione-negoziata" — idem
4. Se mancano, è un bug deploy: ricontrolla `app/sitemap.ts`

In Search Console:
1. Menu sinistra → "Sitemap"
2. Inserisci `sitemap.xml` (URL relativo)
3. Submit → se già presente, fai "Re-submit" per accelerare il crawl

Tempo: 5 minuti.

### C. Bing Webmaster Tools

Bing pesa meno di Google in Italia (1-2% mercato vs ~95%) ma è gratis e
veloce. ChatGPT/Copilot lo usano come search engine.

1. `https://www.bing.com/webmasters/`
2. Se non c'è ancora il sito: aggiungilo, verifica via meta tag o file
3. Sitemap → submit `https://www.atparma.com/sitemap.xml`
4. URL Inspect dei 2 articoli → "Submit URL"

Tempo: 10 minuti.

### D. Validazione rich results

I 2 articoli usano schema JSON-LD `Article` + **`FAQPage`** (nuova
convenzione). Verificare che Google li parsi correttamente:

1. `https://search.google.com/test/rich-results`
2. Incolla URL sovraindebitamento → "Test URL"
3. Verifica che vedi sezioni "Article" + "FAQ" rilevate
4. Ripeti col secondo articolo

Se uno dei due fallisce: c'è un bug nello script JSON-LD da fixare prima
del crawl Google.

Tempo: 10 minuti.

### E. IndexNow (per Bing/Yandex)

Endpoint moderno che notifica i motori di ricerca della nuova URL in
tempo reale. Più rapido del submit manuale.

Per ora **non implementato sul sito**, ma è un nice-to-have da valutare:
si fa con una API key + una chiamata POST quando esce nuovo articolo.
Vedi `https://www.indexnow.org/` per docs.

---

## Settimana 1-2 — Local SEO (2-3h)

### A. Google Business Profile (priorità massima per local)

Se NON esiste ancora:

1. `https://business.google.com` → crea profilo con dati esatti:
   - Nome: **A.T. Consulting Parma**
   - Categoria primaria: **Studio di commercialisti**
   - Categorie secondarie: **Servizi di consulenza fiscale**, **Studio legale tributario**
   - Indirizzo: **Borgo Riccio da Parma 5, 43121 Parma PR**
   - Telefono: **+39 0521 247721**
   - Sito web: **https://www.atparma.com**
   - Orari: lun-ven 09:00-13:00 / 15:00-18:00 (verifica con segreteria)
2. Verifica proprietà: Google manda un postcard col PIN a Borgo Riccio
   (3-7 giorni). Quando arriva, inserisci il PIN per attivare il profilo.

Se ESISTE già (verifica cercando "A.T. Consulting Parma" su Google Maps):

1. Reclama proprietà se non ce l'hai
2. Verifica NAP consistency: Nome / Address / Phone IDENTICI a quelli del sito
3. Le incongruenze NAP danneggiano il ranking locale

### B. Foto profilo + copertina GBP

Usa le foto reali della sede già nel repo:

- **Foto profilo** (squared, mostrata nel pin Maps):
  `public/images/studio/sede-facciata-rose.jpg`
- **Foto copertina** (1080×608 minimo, 16:9 ideale):
  `public/ads/profile-cover/cover-google-1920x1080.jpg`
- **Foto aggiuntive** (sezione "Foto da titolare"):
  - `sede-cortile-vaso.jpg`
  - `sede-archi-cortile.jpg`
  - `sede-rose-rampicanti.jpg`

Upload da `business.google.com` → Foto → Aggiungi.

Tempo: 20 minuti.

### C. Post Google Business

Google Business permette di pubblicare "Post" tipo aggiornamenti che
appaiono nel Knowledge Panel quando uno cerca il tuo studio.

Pubblica i 2 articoli blog come Post GBP:

1. Tipo Post: "Aggiornamento"
2. Titolo: "Sovraindebitamento 2026: come uscire dai debiti"
3. Testo (max 1500 caratteri): primo paragrafo dell'articolo
4. CTA: "Scopri di più" → link diretto all'articolo
5. Immagine: `public/ads/topical/sovraindebitamento-1x1.jpg`

Ripeti per Composizione Negoziata.

Tempo: 15 minuti.

### D. Schema.org `AccountingService` — verifica

Il sito ha già un `AccountingService` schema in `app/layout.tsx` con:
- `geo.latitude`/`geo.longitude`
- `address.streetAddress` / `addressLocality` etc.
- `priceRange: "$$"`
- `openingHoursSpecification`

Verifica le coordinate latitude/longitude siano quelle esatte di
Borgo Riccio 5 (apri Google Maps, click destro su pin → "Cosa c'è qui" →
mostra `44.8015, 10.3279`). Se diverse, aggiorna il file.

---

## Settimana 1-2 — Internal linking audit (30 min)

L'internal linking distribuisce "link juice" tra le pagine del sito ed è
un segnale di rilevanza per Google.

### A. Articoli blog correlati

I 2 articoli nuovi si linkano già a vicenda (cablato durante l'implementazione).
Verifica che altri articoli blog correlati abbiano un link verso i 2 nuovi:

| Articolo esistente | Dovrebbe linkare a | Dove inserire |
|---|---|---|
| `commercialista-online` | sovraindebitamento + composizione negoziata | nella sezione "Quando rivolgersi" o "Servizi offerti" |
| `aprire-partita-iva-online` | composizione negoziata (per imprenditori) | nel paragrafo "Cosa succede se l'attività va male" |
| `quanto-costa-commercialista-online` | sovraindebitamento (servizi a tariffa OCC) | nella sezione "Servizi a tariffa fissa" |

Modifica minima: **1 paragrafo per ciascuno**. Forma: `<Link href="...">testo
contestuale</Link>` con anchor text che contiene la keyword target.

### B. Pagine servizio → articoli blog

`app/servizi/[slug]/page.tsx` ora ha il campo `articoli?` (introdotto in
sessione precedente). Verifica che `/servizi/crisi-di-impresa` mostri il
box "Approfondimenti" con i 2 link → già fatto.

Estensione futura: popolare `articoli?` anche su altre competenze:
- `/servizi/consulenza-fiscale` → link a `regime-forfettario-2026`, `come-fare-730-online`
- `/servizi/consulenza-finanziaria` → link a `quanto-costa-commercialista-online`

### C. Footer / Header

Verifica che il footer del sito linki almeno una volta:
- `/blog` (hub blog)
- `/servizi/crisi-di-impresa` (pagina hub del cluster)
- `/contatti`

Se mancano, aggiungili.

---

## Settimana 1-2 — Distribuzione contenuti

### A. Post Facebook (vedi `claude-chrome-instructions.md`)

3 post mirati (privati / PMI / artigiani) — già pronti.

### B. LinkedIn personale (Sicuri + Ponzi)

Pubblicare un post LinkedIn personale per ciascuno dei 2 soci, che linka uno
dei 2 articoli. Tono **personale, riflessivo**, NON promozionale.

Esempio per Sicuri (sovraindebitamento):

```
In Italia il sovraindebitamento delle persone fisiche è un fenomeno che
nei prossimi anni esploderà — l'inflazione cumulata 2022-2025 ha
peggiorato la situazione di chi era già al limite, e ora vedo sempre più
clienti chiedersi se esiste una via legale per uscirne.

Esiste, ed è prevista dal Codice della Crisi (CCII). Quattro procedure
diverse, una novità importante (l'esdebitazione dell'incapiente art. 283)
che permette in alcuni casi di cancellare i debiti senza pagare nulla.

Ho scritto una guida che spiega chi può accedere e come funziona, l'ho
pubblicata sul sito dello studio:
[link articolo]

Spero possa aiutare qualcuno a capire che strumenti ha.
```

Ponzi può fare analogo su composizione negoziata.

### C. Newsletter Brevo (clienti esistenti)

Se Brevo è attivo per AT Parma (email transactional + marketing):

1. Crea una campagna "Aggiornamenti normativi maggio 2026"
2. Subject: "Sovraindebitamento e crisi d'impresa: cosa cambia nel 2026"
3. Corpo: paragrafo intro + 2 link card ai 2 articoli + firma studio
4. Lista invio: tutti i clienti attivi che hanno acconsentito al marketing

Apertura tipica per email del genere a clienti esistenti: 35-45%.

### D. Email signature

Aggiungere link al blog nell'email signature di Sicuri, Ponzi, segreteria:

```
A.T. Consulting Parma — Dottori commercialisti
Borgo Riccio da Parma 5, 43121 Parma
www.atparma.com  |  0521 247721
Aggiornamenti dal blog: www.atparma.com/blog
```

Ogni email che mandate diventa promozione passiva del blog.

---

## Settimana 2-4 — Authority building

### A. Backlink da fonti autorevoli locali

Inviare gli articoli all'Ordine dei Dottori Commercialisti di Parma:

1. Apri `https://www.odcecpr.it/`
2. Sezione "Contatti" o "Segreteria"
3. Email: "Buongiorno, il nostro studio ha pubblicato 2 guide aggiornate
   al Codice della Crisi 2026 (sovraindebitamento + composizione negoziata).
   Sarebbero materiali utili da inserire nella newsletter Ordine o nella
   sezione formazione. Allego i link: ..."

Anche un solo link dall'Ordine ha peso autoritario alto per il dominio.

### B. Backlink da colleghi commercialisti

Se hai relazioni con altri studi del Tribunale di Parma (anche solo per
conoscenza professionale), proponi uno scambio:

- Tu segnali sul tuo blog un articolo del loro (es. specializzato in
  fiscalità internazionale o lavoro)
- Loro segnalano i tuoi su crisi d'impresa

Non è quid-pro-quo formale, è networking. Funziona se il rapporto è
genuino.

### C. Profilo LinkedIn azienda + personale

Verifica che la company page LinkedIn di A.T. Consulting Parma esista,
abbia link al sito, e ripubblichi i 2 articoli come post dell'azienda.

Profili personali Sicuri e Ponzi:
- Bio: aggiungi `https://www.atparma.com` se manca
- Esperienza: aggiungi posizione attuale linkando alla company page
- Pubblicazioni: aggiungi i 2 articoli (sezione "Pubblicazioni" di LinkedIn)

### D. Menzione nei colloqui clienti

Quando ricevi clienti per consulenze su temi correlati, **menziona
attivamente** gli articoli:

> "Sì, su questo punto abbiamo scritto una guida specifica, te la mando
> via email se vuoi rileggerla con calma a casa"

Risultato: link diretto inviato a clienti reali (high-trust traffic) +
crei autorità del marchio personale (sei "l'autore che scrive guide").

---

## Settimana 2-4 — Attivazione tracking

Il tracking è cablato nel codice (vedi `lib/meta-capi.ts`, `lib/ads-tracking.ts`,
`components/google-tag.tsx`) ma **dormiente** finché non setti le env vars
su Vercel.

### A. Google Analytics 4

1. `https://analytics.google.com` con account Google
2. Amministrazione → Crea property → "AT Parma sito"
3. Configura stream Web → URL `https://www.atparma.com`
4. Copia il **Measurement ID** (formato `G-XXXXXXXXXX`)

### B. Google Ads (solo se prevedi ads paid in futuro)

1. `https://ads.google.com` (stesso account Google)
2. Crea account → segui wizard
3. Tools → Conversions → Crea conversione "Purchase" + "Lead"
4. Salva ID account (`AW-XXXXXXXXX`) e label conversioni

### C. Meta Pixel + CAPI

1. `https://business.facebook.com/events_manager2/`
   (richiede Pagina FB classica → in attesa migrazione)
2. Crea Dataset (Pixel) per atparma.com
3. Salva Pixel ID (15-16 cifre)
4. Settings → Conversions API → Generate Access Token
5. Salva il token segreto

### D. Vercel env vars

Vai su `https://vercel.com/[username]/atparma-sito/settings/environment-variables`
e aggiungi (sia Production che Preview):

```
NEXT_PUBLIC_GA4_ID = G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID = AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_PURCHASE = ...
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_LEAD = ...
NEXT_PUBLIC_META_PIXEL_ID = ...
META_PIXEL_ID = ...
META_CAPI_ACCESS_TOKEN = ...
META_CAPI_TEST_EVENT_CODE = (vuoto in prod)
```

Dopo aver salvato, **redeploya** la production (1 click su dashboard
Vercel) per applicare le env vars.

### E. Test eventi

1. Meta Events Manager → Test Events: incolla URL del sito, naviga,
   verifica che eventi arrivino
2. GA4 → Configura → DebugView: stesso test

---

## Settimana 4+ — Metriche da osservare

### A. SEO ranking dei 2 articoli

Settimanale (5 minuti):

1. Apri Google in modalità incognito
2. Cerca:
   - `site:atparma.com sovraindebitamento`
   - `site:atparma.com composizione negoziata`
   - `sovraindebitamento Parma`
   - `composizione negoziata Parma`
3. Annota posizione

**Target realistico**:
- Settimana 4: top 30 per keyword locali
- Settimana 8: top 10 per keyword locali, top 30 per head term
- Settimana 12-16: top 5 per keyword locali, top 10 per head term

### B. Traffico organico (Google Search Console)

1. GSC → Performance → "Search Type: Web"
2. Filtra per URL: i 2 articoli
3. Annota mensilmente: impressions, clicks, CTR, posizione media

**Target realistico**:
- Mese 1: 100-300 impressions cumulate, 5-15 clicks
- Mese 3: 1.000-3.000 impressions, 50-150 clicks (target del piano)
- Mese 6: 5.000+ impressions, 200+ clicks

### C. Conversioni form contatti

Da GA4 (con UTM dei post FB e LinkedIn):

1. Esplora → Sorgente di traffico → filtra `medium = organic_social`
2. Vedere quante sessioni hanno completato il form contatti
3. Confrontare per `utm_campaign` (privati / pmi / artigiani)

**Target realistico**: 1-5 lead/mese dai post organici nei primi 3 mesi.

### D. Posizione GBP locale

Cercando da Parma "commercialista" o "studio commercialista", AT Parma
deve apparire nella mappa locale (3-pack) entro 6-8 settimane dal setup
del GBP.

---

## Anti-pattern da evitare

❌ **Comprare backlink** da farm SEO — Google li penalizza, rovinano il
ranking organico per mesi

❌ **Keyword stuffing** nei titoli e meta description — già evitato negli
articoli pubblicati, ma occhio quando ne scriverai altri

❌ **Pagine doorway** sui topic locali tipo `/commercialista-parma`,
`/commercialista-piacenza` — Google le riconosce come thin content

❌ **Auto-spam su forum/commenti** col link al blog — controproducente,
Google considera spam i backlink da commenti generici

❌ **Pubblicare 5+ post FB al giorno** sperando in più reach — algoritmo
Meta penalizza la "frequency without depth"

---

## Roadmap di lungo periodo (mese 3+)

Quando i 2 articoli pillar mostrano ranking solido (top 10 per keyword
locali), valuta:

1. **Articoli figli del cluster**:
   - "Ristrutturazione debiti del consumatore (art. 67-73 CCII)" — già
     scelto, da scrivere
   - "Esdebitazione dell'incapiente: requisiti pratici e Tribunale di Parma"
   - "Come si calcola il costo della procedura di sovraindebitamento"
   - "Concordato semplificato art. 25-sexies: quando ha senso"
   - "Doveri dei sindaci nel CCII (art. 25-octies) dopo il Correttivo-ter"

2. **Lead magnet PDF** (download in cambio email):
   - "Checklist sovraindebitamento: 12 documenti da preparare prima
     dell'OCC"
   - "Guida fiscale 2026 — 15 detrazioni dimenticate"

3. **Tool gratuiti interattivi** estesi:
   - Esiste già `/calcolatori/forfettario`
   - Valutare: "Stima costo procedura sovraindebitamento" (input: importo
     debiti, esposizione tipo) — generato lead alta qualità

4. **Strategia Meta Ads paid** (solo dopo che Pagina FB ha >500 follower
   e i 3-4 post organici hanno performato bene):
   - Campagna **Sales** per servizio 730 (€50 prezzo aggressivo, lead
     facile)
   - Campagna **Lead** per consulenza crisi d'impresa (alto valore B2B)
