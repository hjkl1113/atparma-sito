# Proposta — secondo collettore: giurisprudenza e novità su crisi, fideiussioni, riscossione

> Stato: **PROPOSTA, da approvare prima di scrivere codice.** Redatta il 28/09/2026.
> Tutte le fonti elencate sono state provate davvero, non citate a memoria: gli esiti
> delle prove sono nella tabella della sezione 3.

## 1. Perché

Il motore Ratio oggi produce news fiscali quotidiane da un'unica fonte, la newsletter
Ratio che arriva via email. Funziona, ma ha due limiti:

- **copre solo il fisco corrente** (scadenze, adempimenti, agevolazioni) e ignora la
  giurisprudenza;
- **non presidia i tre temi a più alta intenzione di ricerca** per lo studio.

I tre filoni proposti:

| Filone | Pubblico | Perché conviene |
|---|---|---|
| **Crisi d'impresa e sovraindebitamento** | imprese e privati indebitati | competenza reale dello studio (pratica Sibomec); 6 articoli già online, fermi a giugno 2026 |
| **Fideiussioni bancarie** | imprenditori, soci garanti, privati | tema ad altissimo contenzioso: schema ABI, nullità antitrust, Sezioni Unite |
| **Contenzioso tributario vinto dal contribuente** | privati e piccole imprese con cartelle | «cartella esattoriale», «pignoramento», «rottamazione» sono ricerche a volume alto e intenzione altissima |

## 2. Cosa NON deve diventare

Non un aggregatore di notizie altrui. Il valore è nella **selezione e nella riscrittura**:
una sentenza a settimana, spiegata bene, vale più di dieci notizie copiate. La regola del
motore esistente resta: **mai testo di terzi verbatim, mai citare la testata come fonte**.

## 3. Le fonti: cosa funziona davvero

Prove eseguite il 28/09/2026 con richiesta diretta ai feed.

| Fonte | Esito | Giudizio |
|---|---|---|
| **unijuris.it/rss.xml** | ✅ 200, 10 voci | **La migliore per la crisi.** Osservatorio sulla giurisprudenza fallimentare: pubblica i provvedimenti di merito con tribunale e massima nel titolo. Esempi reali del giorno della prova: liquidazione controllata del socio illimitatamente responsabile (Avellino), esdebitazione dopo liquidazione controllata e difetto di meritevolezza (Treviso), esdebitazione a tre anni (Rimini) |
| **dirittobancario.it/feed** | ✅ 200, 10 voci | Utile per **fideiussioni e bancario**, ma rumoroso: molto materiale EBA e vigilanza prudenziale, da filtrare per parole chiave |
| **Google News RSS** (query mirate) | ✅ 200, voci pertinenti | **Il radar trasversale.** Copre tutti e tre i filoni. Nella prova ha intercettato subito «Fideiussioni Schema ABI: le Sezioni Unite alzano l'asticella per la nullità antitrust» e «Estratto di ruolo e cartella di pagamento: la Cassazione restringe l'accesso all'azione di accertamento negativo» |
| dirittodellacrisi.it | ❌ 404 su /feed, /rss, /feed/rss2 | nessun feed pubblico individuato |
| ilcaso.it | ❌ restituisce HTML, non RSS | scraping possibile ma fragile e da valutare sul piano dei termini d'uso |
| altalex.com | ❌ 200 ma zero voci | feed non utilizzabile così com'è |
| fiscooggi.it (Agenzia Entrate) | ❌ 403 | blocca le richieste automatiche |
| cortedicassazione.it | ❌ 403 | idem |
| def.finanze.it, giustizia-tributaria.it | ❌ 404 | nessun feed |

**Conseguenza pratica:** si parte con **Unijuris + Diritto Bancario + Google News**, che
coprono i tre filoni, e si tiene la lista delle fonti in un file di configurazione, così
aggiungerne una domani non richiede toccare il codice.

## 4. Il nodo del copyright, detto con precisione

- **Le sentenze non sono protette.** L'art. 5 della legge 633/1941 esclude dalla tutela
  gli atti ufficiali dello Stato, e le decisioni giudiziarie vi rientrano. Il testo di una
  sentenza si può quindi riportare e citare.
- **I commenti altrui sì.** L'articolo di Diritto Bancario o del Sole che commenta quella
  sentenza è opera dell'ingegno: da quello si prende **solo la notizia dell'esistenza**
  del provvedimento, mai il testo.
- **Google News** serve esclusivamente da segnalatore: dà il titolo e il link, e da lì si
  risale al provvedimento. Non si pubblica mai partendo dallo snippet.
- Regola operativa: **ogni pezzo cita autorità, data e numero** del provvedimento. Se non
  li abbiamo, non si pubblica.

## 5. Come si innesta sul motore esistente

Il 70% del lavoro è già scritto. Quello che serve è un secondo collettore che sbocca
nella stessa catena.

```
  NUOVO          giuris.py                    ESISTENTE
  ┌────────────────────────────┐        ┌──────────────────────┐
  │ legge i feed configurati   │        │  rewrite.py          │
  │ filtra per parole chiave   │───────▶│  (riscrittura AI)    │
  │ deduplica (link + titolo)  │        └──────────┬───────────┘
  │ ordina per pertinenza      │                   ▼
  └────────────────────────────┘        ┌──────────────────────┐
                                        │  notify.py           │
                                        │  (mail di approvazione│
                                        │   con i numeri)      │
                                        └──────────┬───────────┘
                                                   ▼  APPROVI TU
                                        ┌──────────────────────┐
                                        │  publish.py          │
                                        │  → news.json         │
                                        │  categoria           │
                                        │  "crisi-debiti"      │
                                        └──────────────────────┘
```

Da scrivere davvero:

1. `scripts/ratio/giuris.py` — il collettore: legge i feed, applica i filtri, produce lo
   stesso formato di «argomenti» che `rewrite.py` già digerisce.
2. `scripts/ratio/fonti-giuris.json` — configurazione: elenco feed, parole chiave per
   filone, soglie di pertinenza, numero massimo di pezzi per esecuzione.
3. Un job settimanale, sul modello di quello esistente in `scripts/ratio/launchd/`.

Non serve toccare `rewrite.py`, `notify.py` e `publish.py`, che già gestiscono la nuova
categoria `crisi-debiti` introdotta il 28/09/2026.

## 6. Le parole chiave dei tre filoni (prima bozza)

**Crisi e sovraindebitamento:** sovraindebitamento, esdebitazione, incapiente,
liquidazione controllata, concordato minore, ristrutturazione dei debiti del consumatore,
composizione negoziata, concordato semplificato, OCC, meritevolezza, liquidazione
giudiziale, adeguati assetti, art. 283, art. 268, art. 25-sexies.

**Fideiussioni:** fideiussione omnibus, schema ABI, nullità antitrust, garanzia,
garante, Sezioni Unite, coobbligato, escussione, contratto autonomo di garanzia.

**Riscossione e contenzioso:** cartella di pagamento, estratto di ruolo, intimazione,
notifica, irreperibilità, pignoramento, fermo amministrativo, ipoteca esattoriale,
rottamazione, definizione agevolata, prescrizione, Agenzia delle Entrate-Riscossione.

## 7. Cadenza e volumi proposti

- **Una esecuzione a settimana**, non quotidiana: la giurisprudenza non ha la stessa
  freschezza delle scadenze fiscali e un pezzo debole brucia il filone.
- **Da 1 a 3 pezzi per esecuzione**, con la stessa logica già usata dal motore: meglio
  meno e forti.
- Ogni pezzo sotto la categoria **Debiti e crisi**, con rimando automatico al servizio
  `/servizi/crisi-di-impresa` già configurato.

## 8. Cosa costa

| Voce | Stima |
|---|---|
| Sviluppo del collettore e configurazione | mezza giornata |
| Prova su tre settimane di arretrato, senza pubblicare | un'ora |
| Messa a regime con job settimanale | mezz'ora |
| Costo API per esecuzione | dell'ordine di pochi centesimi, come le news quotidiane |

## 9. Decisioni che servono da te

1. **Si parte con tre fonti o solo con Unijuris?** Unijuris da solo copre bene la crisi ed
   è il filone dove lo studio ha competenza reale. Le fideiussioni e la riscossione
   allargano il pubblico ma richiedono più filtro.
2. **Una firma diversa per la giurisprudenza?** I pezzi su sentenze hanno un taglio
   diverso dalle news fiscali: si possono tenere nella stessa sezione oppure in una
   rubrica dedicata.
3. **Fino a dove ci spingiamo sul contenzioso vinto dai contribuenti?** Raccontare vittorie
   contro la Riscossione attira molto, ma va evitato ogni tono che prometta risultati:
   resta informazione, non pubblicità di esiti.
