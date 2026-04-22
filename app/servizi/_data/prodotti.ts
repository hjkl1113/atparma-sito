export type PriceFormat = "fisso" | "da" | "preventivo";

export interface ProdottoServizio {
  slug: string;
  prezzoId: string;
  title: string;
  tagline: string;
  metaDesc: string;
  perChi: string[];
  bullets: string[];
  esclusi: string[];
  processTitle?: string;
  process: { step: string; body: string }[];
  priceFormat?: PriceFormat;
  priceBlurb?: string;
  priceSuffix?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaNote?: string;
  closingBlurb?: string;
  closingCtaLabel?: string;
  showForfettarioCalculator?: boolean;
  calculatorHeroBanner?: boolean;
  hidePostPaymentSection?: boolean;
  docs: string[];
  deliveryDays: string;
  faqs: { q: string; a: string }[];
}

export const PRODOTTI: Record<string, ProdottoServizio> = {
  "dichiarazione-730": {
    slug: "dichiarazione-730",
    prezzoId: "730",
    title: "Dichiarazione 730 online",
    tagline:
      "Compilazione e invio del tuo 730 da dottori commercialisti. Zero file all'Agenzia, tutto dal portale. Massimizziamo le detrazioni a cui hai diritto.",
    metaDesc:
      "730 online a 50 euro (prezzo di lancio, listino 79): compilazione, invio telematico e controllo detrazioni da dottori commercialisti. Portale clienti per upload documenti.",
    perChi: [
      "Lavoratori dipendenti e pensionati",
      "Percettori di redditi assimilati (collaborazioni, tirocini retribuiti)",
      "Chi ha spese mediche, bonus edilizi, carichi familiari da dichiarare",
      "Chi non si fida del solo 730 precompilato automatico",
    ],
    bullets: [
      "Controllo completo del 730 precompilato scaricato dall'Agenzia delle Entrate",
      "Aggiunta di detrazioni e deduzioni mancanti (mediche, edilizie, figli, mutuo, istruzione)",
      "Calcolo imposta netta, verifica rimborso o a debito",
      "Invio telematico all'Agenzia delle Entrate con ricevuta",
      "Conservazione sicura dei documenti nel portale clienti per 5 anni (retention fiscale)",
      "Assistenza per eventuali richieste di integrazione documentale",
      "Spiegazione chiara del risultato via portale o videocall",
    ],
    esclusi: [
      "Modello Redditi PF per titolari di Partita IVA (servizio a parte)",
      "Dichiarazioni IMU e TARI (richiedere preventivo)",
      "Integrazioni di dichiarazioni di anni precedenti (preventivo separato)",
      "Dichiarazione IVS e ISEE (servizio dedicato CAF, non incluso)",
    ],
    processTitle: "Dal mandato all'invio, in 7 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri e paghi la caparra di 10 euro (Stripe o PayPal). Attivi l'account e accedi alla checklist personalizzata.",
      },
      {
        step: "2. Firma del mandato",
        body: "Firmi digitalmente il mandato professionale direttamente dal portale. Zero carta, zero passaggi in studio.",
      },
      {
        step: "3. Carichi i documenti",
        body: "CU, spese mediche, bonifici bonus edilizi, mutuo, spese istruzione. Checklist guidata con upload sicuro.",
      },
      {
        step: "4. Precompilata",
        body: "Se hai già scaricato la precompilata con SPID/CIE, la carichi direttamente. Altrimenti firmi la delega e la scarichiamo noi via Entratel.",
      },
      {
        step: "5. Revisione bozza e scelte",
        body: "Ti mostriamo la bozza del 730 con tutte le detrazioni. Indichi se hai un sostituto d'imposta o chiedi rimborso su IBAN, scegli se pagare eventuali debiti in busta paga o con F24, destinazione 5/8/2 per mille. Firmi l'impegno a trasmettere.",
      },
      {
        step: "6. Saldo 40 euro",
        body: "Paghi il saldo solo dopo aver validato la bozza. Il pagamento sblocca l'invio telematico all'Agenzia delle Entrate.",
      },
      {
        step: "7. Invio e ricevuta",
        body: "Trasmettiamo il 730 all'ADE. Ricevuta nel portale e conservazione documenti per 5 anni.",
      },
    ],
    priceBlurb:
      "Caparra di 10 euro alla registrazione, saldo di 40 euro dopo la firma della bozza. Niente costi nascosti.",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/730",
    ctaNote:
      "Caparra 10 euro via Stripe o PayPal. Saldo dopo la validazione della bozza. Fattura elettronica automatica.",
    closingBlurb:
      "Iscriviti al portale e versa la caparra di 10 euro. Carichi i documenti quando vuoi, ti mostriamo la bozza e solo dopo la tua validazione versi i 40 euro di saldo per sbloccare l'invio. 730 trasmesso in 7-10 giorni lavorativi dalla consegna completa.",
    closingCtaLabel: "Inizia sul portale",
    showForfettarioCalculator: false,
    docs: [
      "Certificazione Unica (CU) del datore di lavoro o INPS",
      "Tessera sanitaria / codice fiscale (tuo e familiari a carico)",
      "Spese mediche, farmaci, dentista, occhiali (scontrini parlanti)",
      "Documentazione bonus edilizi: bonifici, fatture, comunicazioni ENEA",
      "Contratto di mutuo + quietanze interessi passivi (prima casa)",
      "Spese di istruzione (tasse universitarie, scuola paritaria, mensa)",
      "Polizze assicurative vita/infortuni, contributi previdenziali volontari",
    ],
    deliveryDays: "in 7-10 giorni lavorativi dalla consegna completa dei documenti",
    faqs: [
      {
        q: "Posso fare il 730 da solo col precompilato?",
        a: "Si, ma il precompilato spesso manca di spese mediche non inviate dal farmacista, bonus edilizi, detrazioni per familiari. Un commercialista verifica ogni voce: spesso il recupero vale più del costo del servizio.",
      },
      {
        q: "Quanto dura il processo?",
        a: "Dalla consegna completa dei documenti al 730 inviato passano 7-10 giorni lavorativi, margine operativo incluso per i picchi stagionali. Puoi iniziare a caricare documenti subito dopo l'iscrizione al portale e la firma del mandato.",
      },
      {
        q: "Non ho un sostituto d'imposta (datore di lavoro o pensione). Posso comunque fare il 730?",
        a: "Si. Il rimborso arriva direttamente dall'Agenzia delle Entrate sull'IBAN che indichi nel portale (tempi tipici 6-12 mesi). Se emerge un debito, il pagamento avviene obbligatoriamente con F24: puoi scegliere tra unica soluzione entro luglio, oppure rateizzazione fino a 6 rate mensili (giugno-novembre) se l'importo supera 257,52 euro. Le rate successive alla prima maturano interessi del 4% annuo.",
      },
      {
        q: "Ho un debito ma preferisco pagarlo con F24 invece che in busta paga. Si può?",
        a: "Si. In fase di revisione bozza puoi scegliere se far trattenere il debito in busta paga (unica o fino a 5 rate) oppure pagarlo autonomamente con F24. Nel portale indichi la modalità preferita e prepariamo il modello corretto.",
      },
      {
        q: "Perché una caparra di 10 euro?",
        a: "Paghi 10 euro alla registrazione per bloccare la pratica. I rimanenti 40 euro li versi solo dopo aver visto la bozza e aver firmato l'impegno a trasmettere. Totale 50 euro, come prezzo di listino (79 euro).",
      },
      {
        q: "Posso vedere la bozza prima di pagare il saldo?",
        a: "Si, sempre. Ti mostriamo la bozza completa con detrazioni, calcolo imposta e scelta del 5, 8 e 2 per mille. Solo dopo la tua validazione e firma dell'impegno a trasmettere ti chiediamo il saldo: il pagamento sblocca l'invio telematico.",
      },
      {
        q: "Ho già scaricato la precompilata con SPID. Devo comunque firmare la delega?",
        a: "No. Se ci carichi la precompilata scaricata da te nel portale, saltiamo la delega. Se invece non l'hai ancora scaricata, firmi la delega alla consultazione e la scarichiamo noi dall'Agenzia delle Entrate via Entratel.",
      },
      {
        q: "Cosa succede se mi accorgo di aver dimenticato una spesa?",
        a: "Prima dell'invio nessun problema, basta caricare il documento mancante dal portale. Dopo l'invio si fa un 730 integrativo (servizio a parte).",
      },
      {
        q: "Ricevo il rimborso direttamente dallo studio?",
        a: "No. Il rimborso o debito transita dal sostituto d'imposta (datore di lavoro/INPS) in busta paga/pensione, tipicamente da luglio a novembre.",
      },
      {
        q: "Le spese mediche le trovate voi nel precompilato?",
        a: "Il precompilato include solo quelle trasmesse dal Sistema TS (farmacie, ospedali, medici convenzionati). Scontrini cartacei di strutture private, veterinario, pedagogista: servi tu. Sul portale ti guidiamo su come organizzarli.",
      },
    ],
  },
  "piva-professionista": {
    slug: "piva-professionista",
    prezzoId: "piva-prof",
    title: "Apertura P.IVA Professionista forfettario + contabilità annuale",
    tagline:
      "Un solo bundle tutto incluso: apriamo la P.IVA forfettario, gestiamo contabilità, fatturazione elettronica e dichiarazione dei redditi per l'intero anno. Dottori commercialisti iscritti all'albo, portale clienti sempre attivo.",
    metaDesc:
      "P.IVA forfettario + contabilità annuale a 549 euro primo anno. Apertura, fatturazione elettronica EFAT, dichiarazione redditi, F24 inclusi. Rinnovo annuale, prezzo bloccato 3 anni con formula triennale opzionale. Dottori commercialisti a Parma.",
    perChi: [
      "Freelance e professionisti forfettari con ricavi fino a 85.000 euro",
      "Consulenti, designer, sviluppatori, copywriter, traduttori",
      "Chi vuole un commercialista unico che segue tutto l'anno, non un servizio spot",
      "Dipendenti che affiancano un'attività autonoma e vogliono stare tranquilli sulle scadenze",
    ],
    bullets: [
      "Apertura Partita IVA in regime forfettario presso l'Agenzia delle Entrate",
      "Consulenza iniziale: codice ATECO, cassa previdenziale, simulazione imposte (5% startup o 15%)",
      "Iscrizione gestione separata INPS o cassa professionale",
      "Contabilità annuale completa fino a 20 fatture/anno, registri cronologici, LIPE se dovute",
      "Dichiarazione dei redditi annuale (Redditi PF) con invio telematico",
      "Fatturazione elettronica EFAT Ranocchi inclusa il primo anno",
      "Calcolo e predisposizione F24: 2 acconti IRPEF + saldo + contributi INPS",
      "Portale clienti con upload documenti, scadenzario, archivio 10 anni + 2 videocall l'anno",
    ],
    esclusi: [
      "Volumi oltre 20 fatture/anno: rivalutazione preventivo dall'anno successivo",
      "Iscrizione CCIAA e INPS artigiani/commercianti (per attività artigianali serve il piano Artigiano/Commerciante)",
      "Iscrizione casse private (Inarcassa, Forense, ENPAP, ecc.): gestibile su richiesta con maggiorazione",
      "Contenzioso tributario, verifiche fiscali, consulenze straordinarie fuori scope",
    ],
    processTitle: "Dall'iscrizione alla P.IVA attiva, in 7 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri gratis su clienti.atparma.com. Nessun pagamento in questa fase.",
      },
      {
        step: "2. Consulenza iniziale (opzionale)",
        body: "Se preferisci, videocall gratuita con un commercialista per scelta ATECO, cassa previdenziale e simulazione imposte personalizzata. Puoi anche saltare questo passaggio se hai già le idee chiare.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato professionale nel portale. Scegli tu: annuale (rinnovo tacito, disdetta 60 giorni) oppure triennale con prezzo bloccato 549 euro per tutti e 3 gli anni.",
      },
      {
        step: "4. Pagamento primo anno",
        body: "Paghi 549 euro con Stripe o PayPal alla firma del mandato. È l'unico passaggio di pagamento per l'apertura.",
      },
      {
        step: "5. Apertura P.IVA",
        body: "Entro 5 giorni lavorativi dalla firma la tua P.IVA forfettaria è attiva. Calendario scadenze e fatturazione EFAT attivati nel portale.",
      },
      {
        step: "6. Gestione annuale",
        body: "Fatturi tu direttamente da EFAT (inclusa il primo anno, self-serve). Registriamo tutto, calcoliamo F24 e prepariamo la dichiarazione dei redditi. 2 videocall/anno di check. Add-on opzionale: fatturazione assistita +99 euro/anno, crei la proforma dal portale e la segreteria invia allo SdI per te.",
      },
      {
        step: "7. Rinnovo",
        body: "Formula annuale: fattura di rinnovo ogni anno, puoi disdire con 60 giorni di preavviso. Formula triennale: prezzo bloccato 549 euro per tutti e 3 gli anni. Oltre 20 fatture/anno: preventivo aggiornato prima del rinnovo, mai a sorpresa.",
      },
    ],
    priceBlurb:
      "549 euro primo anno. Rinnovo annuale con disdetta libera, oppure triennale con prezzo bloccato 549 euro per 3 anni. Add-on fatturazione assistita +99 euro/anno opzionale. Paghi solo dopo aver firmato il mandato nel portale.",
    priceSuffix: "primo anno",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/piva-professionista-forfettario",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento 549 euro alla firma del mandato (annuale o triennale). Fatturazione elettronica automatica.",
    closingBlurb:
      "Iscriviti gratis al portale, facciamo insieme la consulenza iniziale, firmi il mandato (annuale o triennale a prezzo bloccato) e solo a quel punto versi i 549 euro del primo anno. P.IVA attiva entro 5 giorni lavorativi dalla firma.",
    closingCtaLabel: "Inizia sul portale",
    showForfettarioCalculator: true,
    calculatorHeroBanner: true,
    hidePostPaymentSection: true,
    docs: [
      "Carta d'identità o passaporto in corso di validità",
      "Codice fiscale (tessera sanitaria)",
      "Indirizzo sede operativa e domicilio fiscale",
      "Descrizione dell'attività che vuoi svolgere (al codice ATECO ci pensiamo noi)",
      "IBAN per eventuali pagamenti F24 via addebito diretto",
    ],
    deliveryDays: "entro 5 giorni lavorativi dalla firma del mandato nel portale",
    faqs: [
      {
        q: "Cosa include esattamente il bundle a 549 euro?",
        a: "Apertura P.IVA forfettaria, consulenza iniziale, iscrizione INPS, contabilità annuale fino a 20 fatture, dichiarazione dei redditi PF, fatturazione elettronica EFAT Ranocchi inclusa il primo anno, F24 calcolati e predisposti, portale clienti e 2 videocall di check nell'anno. Non è un servizio spot di sola apertura: è il commercialista unico per tutto l'anno.",
      },
      {
        q: "Posso scegliere tra annuale e triennale?",
        a: "Sì, decidi tu al momento della firma del mandato. Annuale: rinnovo tacito a fine anno, puoi disdire con 60 giorni di preavviso via PEC. Triennale: prezzo bloccato 549 euro per tutti e 3 gli anni (garanzia contro aumenti di listino). Stessa copertura di servizio, cambia solo la durata dell'impegno reciproco.",
      },
      {
        q: "Come si rinnova dopo il primo anno?",
        a: "Sul piano annuale: a inizio anno solare riemettiamo la fattura di 549 euro (salvo eventuale aggiornamento listino comunicato 60 giorni prima) e continuiamo a gestire contabilità e scadenze. Sul piano triennale: prezzo bloccato 549 euro, nessun aumento per 3 anni. In entrambi i casi, se superi 20 fatture l'anno precedente ti contattiamo con il preventivo aggiornato prima del rinnovo: nessuna sorpresa in fattura.",
      },
      {
        q: "Cosa succede se supero le 20 fatture nell'anno?",
        a: "Niente blocco durante l'anno in corso: gestiamo tutto regolarmente. Dall'anno successivo applichiamo un preventivo maggiorato (scaglione 2) proporzionale al volume, che ti comunichiamo prima del rinnovo. Così eviti di pagare di più senza motivo se i volumi restano bassi.",
      },
      {
        q: "Cosa succede se supero gli 85.000 euro di ricavi?",
        a: "Esci automaticamente dal forfettario dall'anno successivo e passi al regime semplificato o ordinario. Il bundle a 549 euro copre il forfettario: se superi la soglia facciamo un nuovo preventivo dedicato al regime superiore (gestione più complessa, IVA ordinaria, registri). Ti avvisiamo in tempo per pianificare.",
      },
      {
        q: "La fatturazione elettronica EFAT è davvero inclusa?",
        a: "Sì, il primo anno è inclusa nel prezzo (valore listino ~50 euro/anno). Usiamo EFAT Ranocchi: fatturi tu direttamente dal portale EFAT, la fattura va allo SdI. Dal secondo anno la licenza EFAT si rinnova insieme al bundle. Se non vuoi occuparti dell'invio, c'è l'add-on fatturazione assistita a 99 euro/anno (vedi domanda successiva).",
      },
      {
        q: "Cos'è la fatturazione assistita (add-on +99 euro/anno)?",
        a: "Add-on opzionale per chi non vuole occuparsi personalmente della fatturazione elettronica. Crei la proforma dal portale clienti.atparma.com in 30 secondi (cliente, articoli, aliquota) e la nostra segreteria la trasforma in fattura elettronica e la invia allo SdI entro il giorno lavorativo successivo. Fino a 20 fatture/anno incluse, poi preventivo. Attivabile in qualsiasi momento dal portale, pagamento contestuale al bundle annuale.",
      },
      {
        q: "Faccio anche il 730 per dipendenti di famiglia?",
        a: "Il bundle copre la dichiarazione Redditi PF per la tua P.IVA forfettaria. Se vuoi gestire il 730 di un familiare (coniuge dipendente, pensionato) è un servizio a parte da 50 euro — ma lo colleghiamo allo stesso portale per non duplicare documenti.",
      },
      {
        q: "Quanto supporto è incluso?",
        a: "Accesso illimitato al portale per domande scritte, risposta entro 1 giorno lavorativo. In più 2 videocall programmate all'anno (una post-apertura, una pre-dichiarazione). Consulenze extra e verifiche straordinarie si concordano a parte.",
      },
      {
        q: "Sono iscritto a cassa privata (Inarcassa, Forense, ENPAP): va bene questo bundle?",
        a: "Sì, il bundle copre la gestione forfettaria con cassa privata, ma l'iscrizione iniziale ha procedure specifiche per ogni cassa e richiede una maggiorazione una tantum da concordare. Ne parliamo nella consulenza iniziale prima della firma del mandato.",
      },
    ],
  },
  "piva-professionista-semplificato": {
    slug: "piva-professionista-semplificato",
    prezzoId: "piva-prof-semp",
    title: "Apertura P.IVA Professionista semplificata + contabilità annuale",
    tagline:
      "Bundle tutto incluso per professionisti in regime semplificato/ordinario: apertura P.IVA, IVA periodica, contabilità completa, dichiarazione redditi e fatturazione elettronica per l'intero anno. Indicato se prevedi ricavi oltre 85.000 euro o vuoi portare in deduzione spese rilevanti.",
    metaDesc:
      "P.IVA professionista regime semplificato/ordinario a 1.647 euro primo anno. Apertura + contabilità annuale + IVA periodica + dichiarazione redditi + EFAT inclusi. Dottori commercialisti a Parma.",
    perChi: [
      "Professionisti con ricavi previsti oltre 85.000 euro/anno",
      "Chi ha spese rilevanti da dedurre (strumenti, affitti, collaboratori)",
      "Chi ha superato la soglia forfettaria e deve passare al regime semplificato/ordinario",
      "Professionisti che preferiscono detrazione analitica dei costi rispetto al coefficiente forfettario",
    ],
    bullets: [
      "Apertura Partita IVA in regime semplificato/ordinario presso l'Agenzia delle Entrate",
      "Consulenza iniziale: codice ATECO, cassa previdenziale, analisi convenienza regime",
      "Iscrizione gestione separata INPS o cassa professionale",
      "Contabilità annuale completa con registri IVA acquisti/vendite/corrispettivi",
      "Liquidazioni IVA periodiche (trimestrali o mensili) e LIPE",
      "Dichiarazione dei redditi annuale (Redditi PF) + Modello IVA annuale",
      "Fatturazione elettronica EFAT Ranocchi inclusa il primo anno",
      "Calcolo e predisposizione F24 IVA, IRPEF (2 acconti + saldo) e contributi INPS",
      "Portale clienti con upload documenti, scadenzario, archivio 10 anni + 2 videocall l'anno",
    ],
    esclusi: [
      "Contabilità ordinaria con doppia partita per volumi molto elevati: rivalutazione preventivo",
      "Iscrizione CCIAA e INPS artigiani/commercianti (per attività artigianali serve il piano Artigiano/Commerciante)",
      "Iscrizione casse private (Inarcassa, Forense, ENPAP, ecc.): gestibile su richiesta con maggiorazione",
      "Contenzioso tributario, verifiche fiscali, consulenze straordinarie fuori scope",
    ],
    processTitle: "Dall'iscrizione alla P.IVA attiva, in 6 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri gratis su clienti.atparma.com. Nessun pagamento in questa fase.",
      },
      {
        step: "2. Consulenza iniziale",
        body: "Videocall con un commercialista per scelta ATECO, cassa previdenziale, analisi convenienza semplificato vs ordinario e pianificazione fiscale.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato professionale nel portale. Scegli annuale o triennale con prezzo bloccato.",
      },
      {
        step: "4. Pagamento primo anno",
        body: "Paghi 1.647 euro con Stripe o PayPal alla firma del mandato.",
      },
      {
        step: "5. Apertura P.IVA",
        body: "Entro 5 giorni lavorativi dalla firma la tua P.IVA semplificata è attiva. Registri IVA e EFAT configurati nel portale.",
      },
      {
        step: "6. Gestione annuale",
        body: "Registriamo fatture attive e passive, calcoliamo liquidazioni IVA periodiche, prepariamo F24, dichiarazioni di fine anno. 2 videocall di check all'anno.",
      },
    ],
    priceFormat: "da",
    priceBlurb:
      "1.647 euro primo anno per casi standard. Include apertura + contabilità + IVA + dichiarazione + EFAT. Rinnovo annuale con disdetta libera o triennale a prezzo bloccato. Se il tuo caso include dipendenti, volumi elevati o complessità particolari, il prezzo finale lo definiamo con un check-up preventivo prima del mandato. Paghi solo dopo aver firmato il mandato nel portale.",
    priceSuffix: "primo anno",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/piva-professionista-semplificato",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento 1.647 euro alla firma del mandato. Fatturazione elettronica automatica.",
    closingBlurb:
      "Iscriviti gratis al portale, facciamo insieme la consulenza iniziale per valutare la convenienza del regime semplificato, firmi il mandato e solo a quel punto versi i 1.647 euro del primo anno. P.IVA attiva entro 5 giorni lavorativi dalla firma.",
    closingCtaLabel: "Inizia sul portale",
    showForfettarioCalculator: true,
    hidePostPaymentSection: true,
    docs: [
      "Carta d'identità o passaporto in corso di validità",
      "Codice fiscale (tessera sanitaria)",
      "Indirizzo sede operativa e domicilio fiscale",
      "Descrizione dell'attività che vuoi svolgere",
      "Stima ricavi e spese previsti per il primo anno (utile per la consulenza)",
      "IBAN per eventuali pagamenti F24 via addebito diretto",
    ],
    deliveryDays: "entro 5 giorni lavorativi dalla firma del mandato nel portale",
    faqs: [
      {
        q: "Quando conviene il regime semplificato rispetto al forfettario?",
        a: "Quando prevedi ricavi oltre 85.000 euro/anno (limite forfettario) oppure quando hai spese deducibili alte che il coefficiente forfettario non riflette (es. strumenti, collaboratori, affitti studio). Nella consulenza iniziale facciamo una simulazione personalizzata prima che tu scelga il regime.",
      },
      {
        q: "Qual è la differenza tra semplificato e ordinario?",
        a: "Il regime semplificato ha registri meno complessi ed è il default fino a 500.000 euro di ricavi per servizi (400.000 per beni). Oltre queste soglie passi all'ordinario con doppia partita, bilancio e adempimenti più complessi. Il bundle a 1.647 euro copre il semplificato: se arrivi all'ordinario rifacciamo il preventivo in base al volume effettivo.",
      },
      {
        q: "Cosa include il bundle a 1.647 euro?",
        a: "Apertura P.IVA, consulenza iniziale, iscrizione INPS, contabilità completa con registri IVA, liquidazioni IVA periodiche (trimestrali/mensili), LIPE, dichiarazione Redditi PF + Modello IVA annuale, fatturazione elettronica EFAT, F24 calcolati, portale clienti con 2 videocall/anno.",
      },
      {
        q: "Posso scegliere tra liquidazione IVA trimestrale o mensile?",
        a: "Puoi optare per la liquidazione trimestrale se i ricavi dell'anno precedente sono sotto 500.000 euro (servizi) o 400.000 (beni), pagando un interesse dell'1% trimestrale. Oltre queste soglie è obbligatoria mensile. Decidiamo insieme in consulenza.",
      },
      {
        q: "Posso passare dal forfettario a questo bundle?",
        a: "Sì. Se superi 85.000 euro di ricavi nel forfettario, dall'anno successivo devi passare al semplificato: gestiamo la transizione senza interruzione di servizio, mantenendo portale e storico. Ti contattiamo in tempo utile per firmare il nuovo mandato prima dell'inizio dell'anno fiscale.",
      },
      {
        q: "Come si rinnova dopo il primo anno?",
        a: "Formula annuale: rinnovo tacito a 1.647 euro (salvo aggiornamenti di listino comunicati 60 giorni prima), disdetta con 60 giorni di preavviso via PEC. Formula triennale: prezzo bloccato per 3 anni, nessun aumento. Se il volume cresce oltre i limiti del semplificato, preventivo aggiornato prima del rinnovo.",
      },
      {
        q: "Sono iscritto a cassa privata (Inarcassa, Forense, ENPAP): va bene?",
        a: "Sì, il bundle copre anche la gestione con cassa privata, ma l'iscrizione iniziale ha procedure specifiche per ogni cassa e richiede una maggiorazione una tantum da concordare. Ne parliamo nella consulenza iniziale prima della firma del mandato.",
      },
      {
        q: "Quanto supporto è incluso?",
        a: "Accesso illimitato al portale per domande scritte (risposta entro 1 giorno lavorativo), 2 videocall programmate all'anno (una post-apertura, una pre-dichiarazione), gestione scadenze IVA e IRPEF. Consulenze extra e verifiche straordinarie si concordano a parte.",
      },
    ],
  },
  "piva-artigiano-commerciante": {
    slug: "piva-artigiano-commerciante",
    prezzoId: "piva-art",
    title: "Apertura P.IVA Artigiano o Commerciante",
    tagline:
      "Per chi apre un'attività artigianale o commerciale: apertura Partita IVA con iscrizione CCIAA, INPS artigiani/commercianti e SIA. Tutto incluso, tutto online.",
    metaDesc:
      "P.IVA artigiani e commercianti a 610 euro: apertura + CCIAA + INPS artigiani/commercianti + SIA + portale clienti 12 mesi. Rimborsi spese e tributi pubblici separati. Commercialista online.",
    perChi: [
      "Artigiani (elettricisti, idraulici, parrucchieri, estetiste, riparatori)",
      "Commercianti (negozi fisici, e-commerce, ristorazione, ambulanti)",
      "Chi apre un'attività con locali, merci, rapporti di lavoro",
      "Soci di società di persone per quote lavorative",
    ],
    bullets: [
      "Consulenza preliminare su codice ATECO e qualifica artigiana/commerciale",
      "Apertura Partita IVA presso l'Agenzia delle Entrate",
      "Iscrizione alla Camera di Commercio (CCIAA) con ComUnica",
      "Iscrizione INPS gestione artigiani o commercianti (aliquota 24% 2026, minimale circa 4.208 euro)",
      "Iscrizione SIA (Servizi Integrati Albo) per artigiani, ove richiesto",
      "Gestione delle pratiche SUAP (se attività con licenze specifiche)",
      "Portale clienti per 12 mesi",
      "Simulazione iniziale contributi fissi e variabili",
    ],
    esclusi: [
      "Fatturazione elettronica (da attivare a parte)",
      "Licenze specifiche (SCIA, autorizzazioni ASL, HACCP per alimenti): gestibili su richiesta con preventivo",
      "Contabilità annuale e tenuta registri (servizio a parte)",
      "Dichiarazione dei redditi annuale (da preventivare)",
      "Consulenza lavoro per assunzioni dipendenti (servizio dedicato)",
    ],
    processTitle: "Dall'iscrizione al portale alla P.IVA attiva, in 5 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri gratis su clienti.atparma.com. Zero caparra, zero impegno fino alla firma del mandato.",
      },
      {
        step: "2. Consulenza iniziale",
        body: "Videocall con un commercialista: scelta codice ATECO, verifica requisiti artigiano/commerciante, pianificazione CCIAA, SCIA necessarie per la tua attività.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato professionale con il dettaglio esatto di onorario + tributi pubblici applicabili alla tua provincia.",
      },
      {
        step: "4. Pagamento",
        body: "Paghi 610 euro direttamente nel portale con Stripe o PayPal. Rimborsi spese e tributi pubblici (bolli CCIAA, diritti, eventuale SCIA comunale) li paghi direttamente agli enti o a parte come rimborso, secondo bozza mandato.",
      },
      {
        step: "5. Apertura e iscrizioni",
        body: "Entro 10 giorni lavorativi: P.IVA attiva, CCIAA completata con ComUnica, INPS artigiani/commercianti attivo, SIA se richiesta. Tutti i documenti sul portale.",
      },
    ],
    priceBlurb:
      "610 euro onorario apertura (500 + IVA). Include P.IVA + CCIAA + INPS artigiani/commercianti + SIA + portale clienti 12 mesi. Rimborsi spese e tributi pubblici dovuti agli enti sono a parte, importi esatti nella bozza di mandato. La contabilità annuale si concorda a parte.",
    priceSuffix: "apertura",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/piva-artigiano-commerciante",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento 610 euro alla firma del mandato. Rimborsi spese e tributi pubblici a parte.",
    closingBlurb:
      "Iscriviti gratis al portale, facciamo insieme la verifica qualifica artigiana/commerciale e la consulenza iniziale. Firmi il mandato con il dettaglio esatto di onorario + tributi pubblici applicabili alla tua provincia. P.IVA attiva entro 10 giorni lavorativi dalla firma.",
    closingCtaLabel: "Inizia sul portale",
    hidePostPaymentSection: true,
    docs: [
      "Carta d'identità o passaporto in corso di validità",
      "Codice fiscale",
      "Indirizzo sede operativa (contratto di locazione o atto di proprietà)",
      "Descrizione dell'attività e locali dove la svolgi",
      "Eventuali licenze già in possesso (SCIA, autorizzazioni sanitarie)",
      "Documenti di eventuali soci (per società di persone)",
      "IBAN per pagamento contributi INPS",
    ],
    deliveryDays: "entro 10 giorni lavorativi (CCIAA + INPS richiedono tempi propri)",
    faqs: [
      {
        q: "Posso essere contemporaneamente artigiano e commerciante?",
        a: "Generalmente no: l'attività prevalente determina l'iscrizione INPS. In casi specifici (es. artigiano che vende anche prodotti) si valuta caso per caso. Ne parliamo in consulenza.",
      },
      {
        q: "Qual è la differenza rispetto al bundle Professionista forfettario a 549 euro?",
        a: "Il bundle Professionista (549 euro primo anno, rinnovo annuale o triennale a prezzo bloccato) è pensato per l'attività intellettuale (consulenze, servizi non manuali) e include apertura + contabilità annuale + EFAT + dichiarazione redditi. L'artigiano/commerciante ha invece attività manuale o di vendita e serve CCIAA + INPS specifica + SIA: cambiano sia la burocrazia sia i costi. Qui paghi una tantum l'apertura, la gestione annuale si concorda a parte.",
      },
      {
        q: "Posso scegliere il regime forfettario?",
        a: "Si, se rispetti i requisiti (ricavi sotto 85.000 euro, niente redditi da lavoro dipendente o pensione oltre 35.000 euro lordi nell'anno precedente con rapporto ancora in essere, spese per dipendenti entro 20.000 euro, ecc.). In consulenza valutiamo insieme.",
      },
      {
        q: "Quanto pago di INPS l'anno?",
        a: "Nel 2026 la gestione artigiani/commercianti ha aliquota 24% sul reddito d'impresa con un minimale di circa 4.208 euro anche se non guadagni nulla. Eventuali riduzioni per under 21 o pensionati: le verifichiamo in consulenza.",
      },
      {
        q: "Serve anche l'iscrizione INAIL?",
        a: "Se hai dipendenti si, la gestiamo con maggiorazione da concordare. Senza dipendenti generalmente no, ma dipende dal settore (es. edilizia).",
      },
    ],
  },
  "piva-artigiano-commerciante-forfettario": {
    slug: "piva-artigiano-commerciante-forfettario",
    prezzoId: "piva-art-forf",
    title: "Apertura Artigiano/Commerciante forfettario + contabilità annuale",
    tagline:
      "Bundle tutto incluso per chi apre un'attività artigianale o commerciale in regime forfettario: apertura P.IVA, CCIAA, SIA, INPS artigiani/commercianti e 12 mesi di contabilità annuale con fatturazione elettronica EFAT.",
    metaDesc:
      "Artigiano o Commerciante forfettario con bundle primo anno a 1.220 euro. Apertura + CCIAA + SIA + INPS + contabilità annuale + EFAT inclusi. Un solo mandato, rinnovo annuale. Onorario studio, tributi pubblici a parte. Dottori commercialisti a Parma.",
    perChi: [
      "Artigiani (elettricisti, idraulici, parrucchieri, estetiste, riparatori) con ricavi attesi sotto 85.000 euro",
      "Commercianti (negozi, e-commerce, ambulanti) in regime forfettario",
      "Chi vuole un bundle unico apertura + gestione annuale invece di pagare due cose separate",
      "Chi preferisce prezzo bloccato primo anno senza sorprese ai rinnovi",
    ],
    bullets: [
      "Apertura Partita IVA presso l'Agenzia delle Entrate",
      "Iscrizione CCIAA con ComUnica (diritti segreteria e bolli esclusi)",
      "Iscrizione Albo Imprese Artigiane (SIA) per artigiani",
      "Iscrizione INPS gestione artigiani o commercianti (aliquota 24% o 24,48%)",
      "Verifica requisiti forfettario e coefficiente ATECO corretto",
      "Contabilità annuale forfettario completa fino a 20 fatture/anno",
      "Dichiarazione dei redditi annuale (Redditi PF con quadro LM)",
      "Fatturazione elettronica EFAT Ranocchi inclusa il primo anno",
      "Calcolo e predisposizione F24: imposta sostitutiva + contributi INPS",
      "Portale clienti con upload documenti, scadenzario, archivio 10 anni + 2 videocall/anno",
    ],
    esclusi: [
      "Tributi e diritti pubblici (bolli CCIAA, diritto annuale, SIA, SCIA comunale): dovuti agli enti e pagati direttamente dal cliente",
      "SCIA al SUAP comunale per attività regolate (esercizio pubblico, estetista, parrucchiere, alimentaristi): gestibile con preventivo dedicato",
      "Autorizzazioni sanitarie USL + HACCP per attività alimentari: gestibili con preventivo dedicato",
      "Volumi oltre 20 fatture/anno: rivalutazione preventivo dall'anno successivo",
      "Iscrizione casse private: gestibile su richiesta con maggiorazione",
    ],
    processTitle: "Dall'iscrizione al portale alla P.IVA attiva, in 6 passi",
    process: [
      {
        step: "1. Preventivo indicativo e iscrizione portale",
        body: "Usa il tool preventivo per vedere i tributi e diritti pubblici applicabili alla tua provincia. Poi ti registri gratis su clienti.atparma.com.",
      },
      {
        step: "2. Consulenza iniziale",
        body: "Videocall con un commercialista per verifica requisiti forfettario, codice ATECO corretto, simulazione imposte e SCIA necessarie in base alla tipologia.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato professionale con conferma esatta degli oneri pubblici applicabili al tuo Comune.",
      },
      {
        step: "4. Pagamento primo anno",
        body: "Paghi 1.220 euro con Stripe o PayPal. I tributi e diritti pubblici li paghi direttamente agli enti competenti, secondo bozza mandato.",
      },
      {
        step: "5. Apertura e iscrizioni",
        body: "Entro 10 giorni lavorativi: P.IVA attiva, CCIAA + SIA + INPS completati. Tutti i documenti sul portale.",
      },
      {
        step: "6. Gestione annuale",
        body: "Fatturazione EFAT attiva, contabilità gestita, F24 calcolati, dichiarazione dei redditi predisposta. 2 videocall/anno di check.",
      },
    ],
    priceFormat: "da",
    priceBlurb:
      "1.220 euro primo anno per casi standard. Un solo mandato, una fattura, rinnovo annuale con prezzo predicibile. Include apertura + CCIAA + SIA + INPS + 12 mesi contabilità forfettario + EFAT. Tributi e diritti pubblici dovuti agli enti sono a parte, importi esatti nella bozza di mandato. Se il tuo caso include SCIA/USL/HACCP, volumi oltre 20 fatture/anno o subentro critico, il prezzo finale lo definiamo con un check-up preventivo prima del mandato.",
    priceSuffix: "primo anno",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/piva-artigiano-commerciante-forfettario",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento 1.220 euro alla firma del mandato. Tributi pubblici pagati direttamente agli enti.",
    closingBlurb:
      "Iscriviti gratis al portale, facciamo insieme la verifica dei requisiti forfettario e la consulenza iniziale. Firmi il mandato con il dettaglio esatto di onorario + tributi pubblici applicabili alla tua provincia. P.IVA attiva entro 10 giorni lavorativi.",
    closingCtaLabel: "Inizia sul portale",
    hidePostPaymentSection: true,
    docs: [
      "Carta d'identità o passaporto in corso di validità",
      "Codice fiscale",
      "Indirizzo sede operativa (contratto di locazione o atto di proprietà)",
      "Descrizione dell'attività e locali dove la svolgi",
      "Eventuali licenze già in possesso (SCIA, autorizzazioni sanitarie)",
      "Documenti di eventuali soci (per società di persone)",
      "IBAN per pagamento contributi INPS",
    ],
    deliveryDays: "entro 10 giorni lavorativi (CCIAA + INPS richiedono tempi propri)",
    faqs: [
      {
        q: "Cosa include il bundle a 1.220 euro?",
        a: "Apertura P.IVA, CCIAA via ComUnica, SIA, iscrizione INPS artigiani/commercianti, 12 mesi di contabilità forfettario (fino a 20 fatture), dichiarazione redditi (Redditi PF con LM), fatturazione elettronica EFAT, F24 calcolati, portale clienti con 2 videocall/anno. Il valore del bundle sta nell'avere un solo mandato, una sola fattura, rinnovo annuale con prezzo predicibile e nessuna frammentazione tra aperture e gestione.",
      },
      {
        q: "Cosa NON include?",
        a: "I tributi e diritti pubblici dovuti agli enti (bolli, diritti CCIAA, SIA, SCIA comunale se applicabile, USL per alimentaristi) non sono nell'onorario: li paghi direttamente a CCIAA, Comune e USL secondo i loro tariffari, che variano per provincia. Nel preventivo indicativo del sito trovi una stima; l'importo esatto è nella bozza di mandato.",
      },
      {
        q: "Devo verificare se posso fare forfettario?",
        a: "Sì: il forfettario ha requisiti di legge stringenti (ricavi sotto 85.000 euro, no redditi da lavoro dipendente o pensione sopra 35.000 euro lordi nell'anno precedente se il rapporto è ancora in essere, spese per dipendenti entro 20.000 euro, no partecipazioni societarie dominanti, no committente ex datore di lavoro). Puoi fare una prima verifica col tool online, la conferma definitiva la facciamo in consulenza prima di firmare il mandato.",
      },
      {
        q: "Come si rinnova dopo il primo anno?",
        a: "Dal secondo anno paghi solo la contabilità annuale (610 euro forfettario, listino attuale), non ripeti apertura e iscrizioni che sono definitive. Il rinnovo è tacito, disdetta con 60 giorni di preavviso via PEC.",
      },
      {
        q: "Quanto pago di INPS all'anno?",
        a: "Nel 2026 la gestione artigiani ha contributi fissi 4.521,36 euro/anno sul minimale (4.611,64 per commercianti), pagabili in 4 rate trimestrali. Se superi il minimale, il 24% (24,48% commercianti) sul reddito eccedente. Non è incluso nel bundle: è un costo separato verso l'INPS.",
      },
      {
        q: "Cosa succede se supero gli 85.000 euro di ricavi?",
        a: "Esci dal forfettario dall'anno successivo e passi al semplificato/ordinario. Il bundle artigiano semplificato (2.074 euro primo anno) copre la transizione senza interruzione di servizio, mantenendo portale e storico.",
      },
    ],
  },
  "piva-artigiano-commerciante-semplificato": {
    slug: "piva-artigiano-commerciante-semplificato",
    prezzoId: "piva-art-semp",
    title: "Apertura Artigiano/Commerciante semplificato + contabilità annuale",
    tagline:
      "Bundle per chi apre un'attività artigianale o commerciale con ricavi previsti oltre 85.000 euro o con spese rilevanti da dedurre: apertura P.IVA, CCIAA, SIA, INPS, 12 mesi di contabilità semplificata con IVA periodica.",
    metaDesc:
      "Artigiano o Commerciante regime semplificato con bundle primo anno a 2.074 euro. Apertura + CCIAA + SIA + INPS + contabilità annuale + IVA + EFAT inclusi. Onorario studio, tributi pubblici a parte. Dottori commercialisti a Parma.",
    perChi: [
      "Artigiani con ricavi previsti oltre 85.000 euro/anno",
      "Commercianti con volumi rilevanti (negozi medi, ristoranti, e-commerce strutturati)",
      "Chi ha spese deducibili alte che il forfettario non riflette (locali, materiali, collaboratori)",
      "Chi sta uscendo dal forfettario e deve passare al regime ordinario semplificato",
    ],
    bullets: [
      "Apertura Partita IVA presso l'Agenzia delle Entrate",
      "Iscrizione CCIAA con ComUnica (diritti e bolli esclusi)",
      "Iscrizione Albo Imprese Artigiane (SIA) per artigiani",
      "Iscrizione INPS gestione artigiani o commercianti",
      "Consulenza iniziale: codice ATECO, analisi convenienza regime, pianificazione fiscale",
      "Contabilità annuale con registri IVA acquisti/vendite/corrispettivi",
      "Liquidazioni IVA periodiche (trimestrali o mensili) e LIPE",
      "Dichiarazione dei redditi annuale (Redditi PF) + Modello IVA annuale",
      "Fatturazione elettronica EFAT Ranocchi inclusa il primo anno",
      "Calcolo e predisposizione F24 IVA, IRPEF, contributi INPS",
      "Portale clienti con upload documenti, scadenzario, archivio 10 anni + 2 videocall/anno",
    ],
    esclusi: [
      "Tributi e diritti pubblici (bolli CCIAA, diritto annuale, SIA, SCIA comunale): dovuti agli enti",
      "SCIA al SUAP comunale per attività regolate: gestibile con preventivo dedicato",
      "Autorizzazioni sanitarie USL + HACCP per attività alimentari: preventivo dedicato",
      "Contabilità ordinaria (doppia partita) per volumi molto alti: preventivo aggiornato",
      "Iscrizione casse private: gestibile su richiesta con maggiorazione",
    ],
    processTitle: "Dal preventivo alla P.IVA attiva, in 6 passi",
    process: [
      {
        step: "1. Preventivo indicativo e iscrizione portale",
        body: "Tool preventivo per stima tributi pubblici della tua provincia. Registrazione gratuita portale.",
      },
      {
        step: "2. Consulenza iniziale",
        body: "Videocall per verifica convenienza semplificato vs ordinario, codice ATECO, pianificazione liquidazioni IVA.",
      },
      {
        step: "3. Firma del mandato",
        body: "Mandato digitale con dettaglio esatto onorario + tributi pubblici applicabili.",
      },
      {
        step: "4. Pagamento primo anno",
        body: "2.074 euro con Stripe o PayPal. Tributi pubblici pagati direttamente agli enti.",
      },
      {
        step: "5. Apertura e iscrizioni",
        body: "Entro 10 giorni lavorativi: P.IVA attiva, CCIAA + SIA + INPS completati, registri IVA configurati.",
      },
      {
        step: "6. Gestione annuale",
        body: "Registrazioni, liquidazioni IVA, F24, dichiarazioni. 2 videocall/anno di check.",
      },
    ],
    priceFormat: "da",
    priceBlurb:
      "2.074 euro primo anno per casi standard. Un solo mandato, rinnovo annuale. Include apertura + CCIAA + SIA + INPS + 12 mesi contabilità semplificata + IVA + EFAT. Tributi pubblici dovuti agli enti a parte, importi esatti nella bozza di mandato. Se il tuo caso include dipendenti, SCIA/USL/HACCP, magazzino complesso o volumi elevati, il prezzo finale lo definiamo con un check-up preventivo prima del mandato.",
    priceSuffix: "primo anno",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/piva-artigiano-commerciante-semplificato",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento 2.074 euro alla firma del mandato.",
    closingBlurb:
      "Iscriviti al portale, verifichiamo insieme convenienza semplificato vs ordinario. Firmi il mandato con dettaglio esatto onorario + tributi pubblici. P.IVA attiva entro 10 giorni lavorativi.",
    closingCtaLabel: "Inizia sul portale",
    hidePostPaymentSection: true,
    docs: [
      "Carta d'identità o passaporto in corso di validità",
      "Codice fiscale",
      "Indirizzo sede operativa (contratto di locazione o atto di proprietà)",
      "Descrizione dell'attività e locali dove la svolgi",
      "Stima ricavi e spese previsti (utile per la consulenza)",
      "Eventuali licenze già in possesso",
      "IBAN per pagamento contributi INPS",
    ],
    deliveryDays: "entro 10 giorni lavorativi (CCIAA + INPS richiedono tempi propri)",
    faqs: [
      {
        q: "Cosa include il bundle a 2.074 euro?",
        a: "Apertura P.IVA, CCIAA via ComUnica, SIA, INPS artigiani/commercianti, 12 mesi contabilità semplificata con registri IVA, liquidazioni IVA periodiche, LIPE, dichiarazione Redditi PF + IVA annuale, fatturazione elettronica EFAT, F24 calcolati, portale clienti con 2 videocall/anno. Il valore del bundle sta nell'avere un solo mandato e rinnovo annuale predicibile, senza frammentare apertura e gestione.",
      },
      {
        q: "Quando conviene il semplificato rispetto al forfettario?",
        a: "Con ricavi previsti oltre 85.000 euro/anno (soglia forfettario) oppure se hai spese deducibili alte che il coefficiente forfettario non riflette (locali commerciali, materiali, collaboratori, merci). In consulenza iniziale facciamo una simulazione personalizzata.",
      },
      {
        q: "IVA trimestrale o mensile?",
        a: "Trimestrale se ricavi anno precedente sotto 500.000 euro (servizi) o 400.000 (beni), pagando un interesse 1% trimestrale. Oltre, obbligatoria mensile. Decidiamo in consulenza in base ai tuoi volumi attesi.",
      },
      {
        q: "Cosa non è incluso?",
        a: "I tributi e diritti pubblici dovuti agli enti (CCIAA, SIA, SCIA comunale, USL per alimentaristi) sono a parte. Stima nel preventivo online, importo esatto nella bozza di mandato.",
      },
      {
        q: "Come si rinnova?",
        a: "Dal secondo anno paghi solo la contabilità annuale semplificata (1.464 euro listino attuale). Rinnovo tacito, disdetta 60 giorni preavviso via PEC.",
      },
      {
        q: "Posso passare dal forfettario a questo bundle?",
        a: "Sì. Se superi 85.000 euro di ricavi nel forfettario dall'anno successivo devi passare al semplificato: gestiamo la transizione senza interruzione di servizio, mantenendo portale e storico.",
      },
    ],
  },
  "contabilita-professionista-forfettario": {
    slug: "contabilita-professionista-forfettario",
    prezzoId: "cont-prof-forf",
    title: "Contabilità annuale P.IVA Professionista forfettario",
    tagline:
      "Hai già la P.IVA forfettaria e vuoi cambiare commercialista? Gestiamo contabilità, F24, dichiarazione dei redditi e fatturazione elettronica per tutto l'anno. Portale clienti, dottori commercialisti iscritti all'albo.",
    metaDesc:
      "Contabilità annuale P.IVA forfettario a 449 euro: gestione fatture, F24, dichiarazione redditi PF, EFAT inclusa. Per chi ha già P.IVA attiva e vuole cambiare commercialista. Rinnovo annuale o triennale price-lock.",
    perChi: [
      "Freelance e professionisti forfettari con P.IVA già aperta che vogliono cambiare commercialista",
      "Chi ha iniziato con un CAF o un commercialista tradizionale e cerca un servizio digitale con portale",
      "Professionisti stanchi di pagare tariffe opache o di non ricevere aggiornamenti chiari",
      "Forfettari fino a 85.000 euro con massimo 20 fatture/anno",
    ],
    bullets: [
      "Subentro gestito: recuperiamo documenti e storico dal commercialista precedente con la tua delega",
      "Contabilità annuale completa fino a 20 fatture/anno, registri cronologici",
      "Dichiarazione dei redditi annuale (Redditi PF) con invio telematico",
      "Fatturazione elettronica EFAT Ranocchi inclusa per 12 mesi (valore ~50 euro)",
      "Calcolo e predisposizione F24: 2 acconti IRPEF + saldo + contributi INPS",
      "Gestione scadenzario: INPS gestione separata o cassa privata, bolli, rinnovi",
      "Portale clienti con upload documenti, archivio 10 anni, notifiche scadenze",
      "2 videocall l'anno incluse (una post-subentro, una pre-dichiarazione)",
    ],
    esclusi: [
      "Apertura P.IVA (se non hai ancora aperto, scegli il bundle Apertura + contabilità a 549 euro)",
      "Volumi oltre 20 fatture/anno: rivalutazione preventivo dall'anno successivo",
      "Iscrizione casse private (Inarcassa, Forense, ENPAP): maggiorazione una tantum da concordare",
      "Contenzioso tributario, verifiche fiscali, consulenze straordinarie fuori scope",
    ],
    processTitle: "Dal subentro alla prima dichiarazione, in 6 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri gratis su clienti.atparma.com. Nessun pagamento in questa fase, nessun vincolo.",
      },
      {
        step: "2. Check-up iniziale (opzionale)",
        body: "Se preferisci, videocall gratuita: analizziamo il tuo storico, eventuali scadenze pendenti e ti confermiamo il preventivo. Puoi anche saltare e andare direttamente al mandato.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato professionale. Scegli: annuale (rinnovo tacito, disdetta 60 giorni via PEC) oppure triennale con prezzo bloccato 449 euro per tutti e 3 gli anni.",
      },
      {
        step: "4. Pagamento primo anno",
        body: "Paghi 449 euro con Stripe o PayPal alla firma. Unico passaggio di pagamento per attivare il servizio.",
      },
      {
        step: "5. Takeover",
        body: "Recuperiamo documentazione dal commercialista precedente con la tua delega, attiviamo EFAT con i tuoi dati, subentriamo nel cassetto fiscale. Ci pensiamo noi: tu resti tranquillo.",
      },
      {
        step: "6. Gestione annuale e rinnovo",
        body: "Fatturi da EFAT (self-serve), registriamo tutto, calcoliamo F24 e prepariamo la dichiarazione dei redditi. A fine anno: rinnovo automatico al prezzo concordato. Oltre 20 fatture/anno: preventivo aggiornato prima del rinnovo.",
      },
    ],
    priceBlurb:
      "449 euro primo anno. Rinnovo annuale con disdetta libera (60 giorni), oppure triennale con prezzo bloccato 449 euro per 3 anni. Add-on fatturazione assistita +99 euro/anno opzionale. Paghi solo dopo la firma del mandato nel portale.",
    priceSuffix: "primo anno",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/contabilita-professionista-forfettario",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento 449 euro alla firma del mandato. Subentro gestito dalla segreteria.",
    closingBlurb:
      "Iscriviti gratis al portale, firmi il mandato (annuale o triennale a prezzo bloccato) e versi 449 euro del primo anno. Ci occupiamo del subentro dal tuo commercialista precedente con la tua delega: tu non muovi un documento.",
    closingCtaLabel: "Inizia sul portale",
    showForfettarioCalculator: true,
    calculatorHeroBanner: true,
    hidePostPaymentSection: true,
    docs: [
      "Codice fiscale e dati P.IVA già attiva",
      "Copia ultimo modello Redditi PF presentato (se disponibile)",
      "Elenco fatture emesse dell'anno in corso (se già iniziato l'esercizio)",
      "Dati cassa previdenziale (INPS gestione separata o cassa privata)",
      "IBAN per pagamenti F24 via addebito diretto",
    ],
    deliveryDays: "subentro completato entro 10 giorni lavorativi dalla firma del mandato",
    faqs: [
      {
        q: "Come avviene il subentro dal commercialista precedente?",
        a: "Firmi una delega nel portale, noi contattiamo il commercialista precedente per ricevere copia dei documenti fiscali degli ultimi esercizi (dichiarazioni, registri, corrispondenza con l'Agenzia). È un passaggio standard e deontologico: il tuo vecchio commercialista è tenuto a consegnare i documenti entro tempi ragionevoli. Se ci sono ritardi o contestazioni ti assistiamo.",
      },
      {
        q: "Cosa include il servizio a 449 euro?",
        a: "Contabilità annuale forfettaria fino a 20 fatture, dichiarazione Redditi PF con invio telematico, fatturazione elettronica EFAT inclusa 12 mesi, F24 calcolati (acconti + saldo IRPEF + contributi INPS), gestione scadenzario, portale clienti, 2 videocall di check. Non è un servizio spot: è il commercialista unico per tutto l'anno.",
      },
      {
        q: "Posso scegliere tra annuale e triennale?",
        a: "Sì. Annuale: rinnovo tacito a fine anno, disdetta con 60 giorni di preavviso via PEC. Triennale: prezzo bloccato 449 euro per tutti e 3 gli anni, garanzia contro aumenti di listino. Stessa copertura di servizio, cambia solo la durata dell'impegno.",
      },
      {
        q: "Ho cambiato commercialista a metà anno: gestite anche il parziale?",
        a: "Sì, ma è opportuno fare un check-up gratuito iniziale: valutiamo quanto lavoro è già stato fatto dal commercialista precedente (F24 trasmessi, fatture registrate, eventuali dichiarazioni pendenti) per capire da dove ripartire e se il prezzo standard copre tutto o se serve un adeguamento puntuale per il solo primo periodo.",
      },
      {
        q: "Cosa succede se supero le 20 fatture l'anno?",
        a: "Niente blocco durante l'anno: gestiamo tutto regolarmente. Dall'anno successivo applichiamo un preventivo maggiorato proporzionale al volume, comunicato prima del rinnovo. Nessuna sorpresa in fattura.",
      },
      {
        q: "E se supero gli 85.000 euro di ricavi?",
        a: "Esci dal forfettario dall'anno successivo e passi al regime semplificato o ordinario. Ti proponiamo il bundle Contabilità professionista semplificata (da 1.464 euro/anno per casi standard) con la continuità del servizio. Ti avvisiamo per tempo per pianificare.",
      },
      {
        q: "EFAT Ranocchi è davvero inclusa?",
        a: "Sì, il primo anno la licenza EFAT è inclusa (valore listino ~50 euro/anno). Dal secondo anno si rinnova insieme al bundle. Se non vuoi occuparti dell'invio puoi attivare l'add-on fatturazione assistita a 99 euro/anno: crei la proforma dal portale, la segreteria invia allo SdI per te.",
      },
      {
        q: "Sono iscritto a cassa privata (Inarcassa, Forense, ENPAP): va bene?",
        a: "Sì, il bundle copre la gestione forfettaria con cassa privata. L'iscrizione iniziale e le specificità di ogni cassa richiedono una maggiorazione una tantum che concordiamo nel check-up. La gestione annuale rientra nel prezzo standard.",
      },
    ],
  },
  "contabilita-professionista-semplificata": {
    slug: "contabilita-professionista-semplificata",
    prezzoId: "cont-prof-semp",
    title: "Contabilità annuale P.IVA Professionista semplificata",
    tagline:
      "Hai già una P.IVA in regime semplificato o ordinario e vuoi cambiare commercialista? Gestiamo contabilità completa, IVA periodica, dichiarazione redditi e fatturazione elettronica. Portale clienti, dottori commercialisti iscritti all'albo.",
    metaDesc:
      "Contabilità annuale P.IVA semplificata/ordinaria da 1.464 euro per casi standard: IVA periodica, F24, Redditi PF, EFAT inclusa. Per professionisti con P.IVA già aperta che cercano un commercialista digitale.",
    perChi: [
      "Professionisti con P.IVA in regime semplificato o ordinario che vogliono cambiare commercialista",
      "Consulenti e liberi professionisti oltre 85.000 euro di ricavi",
      "Chi ha spese rilevanti da portare in deduzione e non può stare in forfettario",
      "Chi cerca un commercialista digitale con portale e fatturazione elettronica inclusa",
    ],
    bullets: [
      "Subentro gestito: recuperiamo documenti e storico dal commercialista precedente con la tua delega",
      "Contabilità annuale semplificata (o ordinaria se richiesto): registri IVA, cronologico, cespiti",
      "Liquidazioni IVA periodiche (mensili o trimestrali a seconda del regime)",
      "Dichiarazione Redditi PF + Dichiarazione IVA annuale con invio telematico",
      "Fatturazione elettronica EFAT Ranocchi inclusa per 12 mesi",
      "Calcolo e predisposizione F24: IVA periodica, IRPEF, addizionali, contributi INPS",
      "Gestione LIPE trimestrali, esterometro se dovuto",
      "Portale clienti, archivio 10 anni, 2 videocall di check incluse",
    ],
    esclusi: [
      "Apertura P.IVA (se non hai aperto, scegli il bundle Apertura + contabilità a 1.647 euro primo anno)",
      "Dipendenti e collaboratori (gestione paghe): preventivo separato",
      "Contenzioso tributario, verifiche fiscali, bilanci societari complessi",
      "Iscrizione casse private: maggiorazione una tantum da concordare",
    ],
    processTitle: "Dal subentro alla prima dichiarazione, in 6 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri gratis su clienti.atparma.com. Nessun pagamento in questa fase.",
      },
      {
        step: "2. Check-up iniziale (opzionale)",
        body: "Videocall gratuita con un commercialista: analizziamo il tuo storico, scadenze IVA pendenti e confermiamo il preventivo. Puoi anche saltare e firmare direttamente il mandato.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato. Annuale (rinnovo tacito, disdetta 60 giorni via PEC) oppure triennale con prezzo bloccato (concordato al check-up preventivo) per 3 anni.",
      },
      {
        step: "4. Pagamento primo anno",
        body: "Paghi il prezzo concordato (da 1.464 euro per casi standard) con Stripe o PayPal alla firma. Unico passaggio di pagamento.",
      },
      {
        step: "5. Takeover",
        body: "Con la tua delega recuperiamo documenti dal commercialista precedente (dichiarazioni, registri IVA, LIPE, cespiti), subentriamo nel cassetto fiscale e attiviamo EFAT. Tu resti tranquillo.",
      },
      {
        step: "6. Gestione annuale e rinnovo",
        body: "Gestiamo IVA periodica, LIPE, F24, dichiarazioni. Fatturi da EFAT (self-serve). A fine anno: rinnovo al prezzo concordato. Se la complessità cresce (esterometro, dipendenti) aggiorniamo il preventivo prima del rinnovo.",
      },
    ],
    priceFormat: "da",
    priceBlurb:
      "Da 1.464 euro primo anno per casi standard. Rinnovo annuale con disdetta libera (60 giorni), oppure triennale con prezzo bloccato per 3 anni. Se il tuo caso include dipendenti, volumi elevati, ristrutturazione pregressa di registri IVA o subentro critico, il prezzo finale lo definiamo con un check-up preventivo prima del mandato. Paghi solo dopo la firma del mandato nel portale.",
    priceSuffix: "primo anno",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/contabilita-professionista-semplificata",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento alla firma del mandato (da 1.464 euro per casi standard). Subentro gestito dalla segreteria.",
    closingBlurb:
      "Iscriviti gratis al portale, firmi il mandato (annuale o triennale a prezzo bloccato) e versi il primo anno (da 1.464 euro per casi standard). Ci occupiamo del subentro completo: recupero documenti, cassetto fiscale, EFAT.",
    closingCtaLabel: "Inizia sul portale",
    showForfettarioCalculator: false,
    hidePostPaymentSection: true,
    docs: [
      "Codice fiscale e dati P.IVA già attiva",
      "Ultimo modello Redditi PF + Dichiarazione IVA presentati",
      "Elenco fatture emesse e ricevute dell'anno in corso",
      "Registri IVA e cespiti aggiornati (forniti dal commercialista precedente con delega)",
      "IBAN per pagamenti F24 via addebito diretto",
    ],
    deliveryDays: "subentro completato entro 15 giorni lavorativi dalla firma del mandato",
    faqs: [
      {
        q: "Cosa include il servizio da 1.464 euro?",
        a: "Contabilità annuale semplificata (o ordinaria se necessaria), liquidazioni IVA periodiche, LIPE trimestrali, F24 completi, Dichiarazione Redditi PF e IVA annuale, EFAT inclusa 12 mesi, portale clienti, 2 videocall di check. È il commercialista unico per tutto l'anno. Prezzo base per casi standard: se il tuo caso ha dipendenti, volumi elevati o subentro critico, il prezzo finale si concorda al check-up preventivo.",
      },
      {
        q: "Semplificato o ordinario: cambia qualcosa?",
        a: "Il prezzo è uguale per entrambi i regimi. La differenza è nei registri (ordinario ha partita doppia, più rigoroso). Nel check-up iniziale valutiamo qual è il regime più adatto in base ai tuoi ricavi, costi e natura dell'attività.",
      },
      {
        q: "Posso scegliere tra annuale e triennale?",
        a: "Sì. Annuale: rinnovo tacito, disdetta con 60 giorni di preavviso via PEC. Triennale: prezzo bloccato (concordato al check-up preventivo) per 3 anni, garanzia contro aumenti di listino. Stessa copertura, cambia solo l'impegno.",
      },
      {
        q: "Ho dipendenti: è incluso?",
        a: "No, la gestione paghe (cedolini, F24 dipendenti, UNIEMENS) è un servizio a parte con prezzo per dipendente/mese. Se hai collaboratori facciamo un preventivo dedicato nel check-up iniziale.",
      },
      {
        q: "Come avviene il subentro dal commercialista precedente?",
        a: "Firmi delega nel portale, noi contattiamo il vecchio commercialista per ricevere registri IVA, cronologico, cespiti, dichiarazioni e corrispondenza con l'Agenzia. Il passaggio è standard e deontologico: il vecchio commercialista è tenuto a consegnare entro tempi ragionevoli.",
      },
      {
        q: "E la fatturazione elettronica EFAT?",
        a: "Inclusa 12 mesi (valore ~50 euro). Dal secondo anno si rinnova insieme al bundle. Add-on opzionale: fatturazione assistita +99 euro/anno, la segreteria invia le tue fatture allo SdI (fino a 20/anno).",
      },
      {
        q: "Cosa succede se rientro sotto 85.000 euro e voglio tornare al forfettario?",
        a: "Se sei uscito dal forfettario per superamento soglia, puoi rientrare solo dopo un triennio di permanenza nel regime ordinario/semplificato (vincolo triennale del forfettario). Valutiamo insieme se conviene e in caso ti trasferiamo al bundle Contabilità forfettario a 449 euro.",
      },
    ],
  },
  "contabilita-artigiano-forfettario": {
    slug: "contabilita-artigiano-forfettario",
    prezzoId: "cont-art-forf",
    title: "Contabilità annuale P.IVA Artigiano/Commerciante forfettario",
    tagline:
      "Hai già la P.IVA artigiana o commerciale in forfettario e vuoi cambiare commercialista? Gestiamo contabilità, INPS artigiani, adempimenti CCIAA, dichiarazione redditi e fatturazione elettronica per tutto l'anno.",
    metaDesc:
      "Contabilità annuale artigiano/commerciante forfettario a 610 euro: INPS artigiani, CCIAA, F24, Redditi PF, EFAT inclusa. Per chi ha P.IVA attiva e vuole cambiare commercialista.",
    perChi: [
      "Artigiani e commercianti forfettari con P.IVA già aperta che vogliono cambiare commercialista",
      "Elettricisti, idraulici, estetiste, parrucchieri, negozianti, ambulanti in forfettario",
      "Chi è stanco del commercialista tradizionale e cerca portale + fatturazione elettronica inclusa",
      "Forfettari fino a 85.000 euro con massimo 20 fatture/anno",
    ],
    bullets: [
      "Subentro gestito: recuperiamo documenti dal commercialista precedente con la tua delega",
      "Contabilità annuale forfettaria fino a 20 fatture/anno, registri cronologici",
      "Gestione INPS artigiani/commercianti: 4 F24 trimestrali + conguaglio su reddito eccedente il minimale",
      "Adempimenti CCIAA: diritto annuale, comunicazioni variazioni registro imprese",
      "Dichiarazione Redditi PF con invio telematico",
      "Fatturazione elettronica EFAT Ranocchi inclusa per 12 mesi",
      "Portale clienti, archivio 10 anni, calendario scadenze personalizzato",
      "2 videocall l'anno incluse",
    ],
    esclusi: [
      "Apertura P.IVA (se non hai ancora aperto, scegli il bundle Apertura + contabilità a 1.220 euro)",
      "Gestione dipendenti (cedolini, UNIEMENS, INAIL): preventivo a parte",
      "Volumi oltre 20 fatture/anno: rivalutazione preventivo dall'anno successivo",
      "Contenzioso tributario, verifiche fiscali, consulenze straordinarie",
    ],
    processTitle: "Dal subentro alla prima dichiarazione, in 6 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri gratis su clienti.atparma.com. Nessun pagamento in questa fase.",
      },
      {
        step: "2. Check-up iniziale (opzionale)",
        body: "Videocall gratuita: analizziamo storico, scadenze INPS artigiani pendenti, CCIAA e confermiamo il preventivo. Puoi anche saltare e firmare direttamente.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato. Annuale (rinnovo tacito, disdetta 60 giorni via PEC) oppure triennale con prezzo bloccato 610 euro per 3 anni.",
      },
      {
        step: "4. Pagamento primo anno",
        body: "Paghi 610 euro con Stripe o PayPal alla firma del mandato. Unico passaggio di pagamento.",
      },
      {
        step: "5. Takeover",
        body: "Con la tua delega recuperiamo documenti dal vecchio commercialista, subentriamo nel cassetto fiscale, attiviamo EFAT e prendiamo in carico INPS artigiani e CCIAA. Tu resti tranquillo.",
      },
      {
        step: "6. Gestione annuale e rinnovo",
        body: "Gestiamo contabilità, F24 INPS trimestrali, diritto CCIAA, dichiarazione redditi. Fatturi da EFAT (self-serve). A fine anno: rinnovo al prezzo concordato. Oltre 20 fatture: preventivo aggiornato prima del rinnovo.",
      },
    ],
    priceFormat: "da",
    priceBlurb:
      "610 euro primo anno per casi standard. Rinnovo annuale con disdetta libera (60 giorni), oppure triennale con prezzo bloccato 610 euro per 3 anni. Add-on fatturazione assistita +99 euro/anno opzionale. Se il tuo caso include SCIA/USL/HACCP, volumi oltre 20 fatture, subentro critico o arretrati da sistemare, il prezzo finale lo definiamo con un check-up preventivo prima del mandato.",
    priceSuffix: "primo anno",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/contabilita-artigiano-forfettario",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento 610 euro alla firma del mandato. Subentro gestito dalla segreteria.",
    closingBlurb:
      "Iscriviti gratis al portale, firmi il mandato (annuale o triennale a prezzo bloccato) e versi 610 euro del primo anno. Ci occupiamo del subentro completo: documenti, cassetto fiscale, INPS artigiani, CCIAA, EFAT.",
    closingCtaLabel: "Inizia sul portale",
    showForfettarioCalculator: true,
    calculatorHeroBanner: true,
    hidePostPaymentSection: true,
    docs: [
      "Codice fiscale e dati P.IVA già attiva",
      "Copia ultimo modello Redditi PF presentato",
      "Elenco fatture emesse dell'anno in corso",
      "Posizione INPS artigiani/commercianti (numero matricola)",
      "Eventuale documentazione CCIAA (visura aggiornata)",
      "IBAN per pagamenti F24 via addebito diretto",
    ],
    deliveryDays: "subentro completato entro 10 giorni lavorativi dalla firma del mandato",
    faqs: [
      {
        q: "Perché costa 610 euro e il professionista forfettario 449?",
        a: "La gestione artigiano/commerciante aggiunge tre adempimenti ricorrenti rispetto al professionista: 4 F24 trimestrali INPS artigiani con conguaglio a fine anno, diritto annuale CCIAA con eventuali variazioni registro imprese, e controllo minimale/massimale contributivo. È un carico di lavoro stabilmente superiore, non un sovrapprezzo arbitrario.",
      },
      {
        q: "Ho dipendenti in negozio o in bottega: è incluso?",
        a: "No, la gestione paghe (cedolini, F24 dipendenti, UNIEMENS, INAIL) è un servizio a parte con prezzo per dipendente/mese. Nel check-up iniziale facciamo un preventivo dedicato.",
      },
      {
        q: "Come avviene il subentro dal commercialista precedente?",
        a: "Firmi delega nel portale, noi contattiamo il vecchio commercialista per ricevere registri, dichiarazioni, F24 INPS storici e corrispondenza CCIAA. Il passaggio è standard: il vecchio commercialista è tenuto a consegnare entro tempi ragionevoli.",
      },
      {
        q: "Posso scegliere tra annuale e triennale?",
        a: "Sì. Annuale: rinnovo tacito, disdetta con 60 giorni di preavviso via PEC. Triennale: prezzo bloccato 610 euro per 3 anni, garanzia contro aumenti. Stessa copertura di servizio.",
      },
      {
        q: "Cosa succede se supero le 20 fatture o gli 85.000 euro?",
        a: "Oltre 20 fatture/anno: rivalutiamo il preventivo dall'anno successivo, mai a sorpresa. Oltre 85.000 euro di ricavi: esci dal forfettario e passi al regime semplificato (bundle Contabilità artigiano semplificata da 1.464 euro/anno). Ti avvisiamo per tempo.",
      },
      {
        q: "EFAT è inclusa davvero?",
        a: "Sì, primo anno incluso (valore ~50 euro/anno). Dal secondo anno si rinnova insieme al bundle. Add-on fatturazione assistita +99 euro/anno: la segreteria invia allo SdI per te (fino a 20 fatture/anno).",
      },
      {
        q: "Lavoro nell'edilizia / estetica / altro settore regolamentato: gestite SCIA, autorizzazioni sanitarie?",
        a: "La gestione ordinaria del bundle copre INPS, CCIAA, fisco. Variazioni SCIA, autorizzazioni USL, iscrizioni albi settoriali sono servizi puntuali che preventiviamo a parte quando servono (non sono adempimenti ricorrenti).",
      },
    ],
  },
  "contabilita-artigiano-semplificata": {
    slug: "contabilita-artigiano-semplificata",
    prezzoId: "cont-art-semp",
    title: "Contabilità annuale P.IVA Artigiano/Commerciante semplificata",
    tagline:
      "Hai già la P.IVA artigiana o commerciale in regime semplificato/ordinario e vuoi cambiare commercialista? Gestiamo contabilità completa, IVA periodica, INPS artigiani, CCIAA, dichiarazione redditi e fatturazione elettronica.",
    metaDesc:
      "Contabilità annuale artigiano/commerciante semplificata da 1.464 euro: IVA periodica, INPS artigiani, CCIAA, F24, Redditi PF, EFAT inclusa. Per P.IVA già attiva oltre 85.000 euro.",
    perChi: [
      "Artigiani e commercianti in regime semplificato o ordinario con P.IVA già aperta",
      "Negozianti, ristoratori, laboratori artigianali oltre 85.000 euro di ricavi",
      "Chi ha spese rilevanti da dedurre (locazioni, materie prime, mezzi)",
      "Chi cerca un commercialista digitale con portale e fatturazione elettronica inclusa",
    ],
    bullets: [
      "Subentro gestito: recuperiamo documenti e storico dal commercialista precedente con delega",
      "Contabilità annuale semplificata (o ordinaria se richiesto): registri IVA, cronologico, cespiti",
      "Liquidazioni IVA periodiche (mensili o trimestrali), LIPE trimestrali, esterometro se dovuto",
      "Gestione INPS artigiani/commercianti: 4 F24 trimestrali + conguaglio",
      "Adempimenti CCIAA: diritto annuale, variazioni registro imprese",
      "Dichiarazione Redditi PF + Dichiarazione IVA annuale con invio telematico",
      "Fatturazione elettronica EFAT Ranocchi inclusa per 12 mesi",
      "Portale clienti, archivio 10 anni, 2 videocall di check incluse",
    ],
    esclusi: [
      "Apertura P.IVA (se non hai aperto, scegli il bundle Apertura + contabilità a 2.074 euro)",
      "Gestione dipendenti (paghe, UNIEMENS, INAIL): preventivo per dipendente/mese",
      "Contenzioso tributario, verifiche fiscali, bilanci societari complessi",
      "SCIA, autorizzazioni USL, iscrizioni albi settoriali: preventivo puntuale",
    ],
    processTitle: "Dal subentro alla prima dichiarazione, in 6 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri gratis su clienti.atparma.com. Nessun pagamento in questa fase.",
      },
      {
        step: "2. Check-up iniziale (opzionale)",
        body: "Videocall gratuita: analizziamo storico, scadenze IVA e INPS pendenti, CCIAA, confermiamo il preventivo. Puoi anche saltare e firmare direttamente.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato. Annuale (rinnovo tacito, disdetta 60 giorni via PEC) oppure triennale con prezzo bloccato 1.464 euro per 3 anni.",
      },
      {
        step: "4. Pagamento primo anno",
        body: "Paghi 1.464 euro con Stripe o PayPal alla firma. Unico passaggio di pagamento.",
      },
      {
        step: "5. Takeover",
        body: "Con la tua delega recuperiamo documenti dal vecchio commercialista (registri IVA, cespiti, F24 INPS, dichiarazioni), subentriamo nel cassetto fiscale e attiviamo EFAT.",
      },
      {
        step: "6. Gestione annuale e rinnovo",
        body: "Gestiamo IVA periodica, LIPE, F24 INPS artigiani, CCIAA, dichiarazioni. Fatturi da EFAT. A fine anno: rinnovo al prezzo concordato. Se la complessità cresce aggiorniamo preventivo prima del rinnovo.",
      },
    ],
    priceFormat: "da",
    priceBlurb:
      "1.464 euro primo anno per casi standard. Rinnovo annuale con disdetta libera (60 giorni), oppure triennale con prezzo bloccato 1.464 euro per 3 anni. Se il tuo caso include dipendenti, SCIA/USL/HACCP, magazzino complesso, volumi elevati o subentro critico, il prezzo finale lo definiamo con un check-up preventivo prima del mandato. Paghi solo dopo la firma del mandato nel portale.",
    priceSuffix: "primo anno",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/contabilita-artigiano-semplificata",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento 1.464 euro alla firma del mandato. Subentro gestito dalla segreteria.",
    closingBlurb:
      "Iscriviti gratis al portale, firmi il mandato (annuale o triennale a prezzo bloccato) e versi 1.464 euro del primo anno. Ci occupiamo del subentro completo: registri IVA, cassetto fiscale, INPS artigiani, CCIAA, EFAT.",
    closingCtaLabel: "Inizia sul portale",
    showForfettarioCalculator: false,
    hidePostPaymentSection: true,
    docs: [
      "Codice fiscale e dati P.IVA già attiva",
      "Ultimo modello Redditi PF + Dichiarazione IVA presentati",
      "Elenco fatture emesse e ricevute dell'anno in corso",
      "Registri IVA, cronologico, cespiti aggiornati (forniti con delega dal commercialista precedente)",
      "Posizione INPS artigiani/commercianti e visura CCIAA aggiornata",
      "IBAN per pagamenti F24 via addebito diretto",
    ],
    deliveryDays: "subentro completato entro 15 giorni lavorativi dalla firma del mandato",
    faqs: [
      {
        q: "Cosa include il servizio a 1.464 euro?",
        a: "Contabilità semplificata (o ordinaria), IVA periodica, LIPE, F24 completi, INPS artigiani trimestrali, CCIAA annuale, Redditi PF + Dichiarazione IVA, EFAT inclusa 12 mesi, portale clienti, 2 videocall di check. È il commercialista unico per tutto l'anno.",
      },
      {
        q: "Semplificato o ordinario: cambia qualcosa?",
        a: "Il prezzo è uguale per entrambi i regimi. L'ordinario ha partita doppia e bilancio d'esercizio, più rigoroso ma richiesto solo se superi soglie precise o se sei società di capitali. Nel check-up valutiamo il regime corretto.",
      },
      {
        q: "Ho dipendenti: gestite voi le paghe?",
        a: "La gestione paghe (cedolini, F24 dipendenti, UNIEMENS, INAIL, CU) è un servizio a parte con prezzo per dipendente/mese. Facciamo un preventivo dedicato nel check-up iniziale in base al numero e alla tipologia contrattuale.",
      },
      {
        q: "Come avviene il subentro dal commercialista precedente?",
        a: "Firmi delega nel portale, noi contattiamo il vecchio commercialista per ricevere tutti i documenti: registri IVA, cronologico, cespiti, dichiarazioni, F24 INPS/CCIAA storici. Il passaggio è standard e deontologico.",
      },
      {
        q: "Posso scegliere tra annuale e triennale?",
        a: "Sì. Annuale: rinnovo tacito, disdetta con 60 giorni di preavviso via PEC. Triennale: prezzo bloccato 1.464 euro per 3 anni, garanzia contro aumenti di listino.",
      },
      {
        q: "E se rientro sotto gli 85.000 euro e voglio tornare al forfettario?",
        a: "Se sei uscito dal forfettario per superamento soglia, puoi rientrare solo dopo un triennio nel regime semplificato/ordinario (vincolo triennale). Valutiamo insieme la convenienza e ti trasferiamo al bundle Contabilità artigiano forfettario a 610 euro/anno.",
      },
      {
        q: "Gestite anche SCIA, autorizzazioni USL, variazioni CCIAA straordinarie?",
        a: "Il bundle copre l'ordinaria: IVA, INPS, CCIAA, fisco. Pratiche puntuali (SCIA per nuova attività, autorizzazioni sanitarie, variazioni straordinarie registro imprese) le preventiviamo a parte quando servono.",
      },
    ],
  },
  "dichiarazione-730-avanzato": {
    slug: "dichiarazione-730-avanzato",
    prezzoId: "730-avanzato",
    title: "Dichiarazione 730 avanzata",
    tagline:
      "730 per casi complessi che richiedono attenzione analitica: redditi esteri, ristrutturazioni/superbonus con storici pluriennali, bonus multipli, immobili all'estero, redditi da trading. Onorario tarato sulla complessità reale.",
    metaDesc:
      "730 avanzato da 98 euro per casi complessi: redditi esteri, superbonus/ristrutturazioni pluriennali, bonus multipli, trading. Dottori commercialisti a Parma.",
    perChi: [
      "Chi ha redditi prodotti all'estero (lavoro, dividendi, pensioni estere) o credito d'imposta estero",
      "Chi ha superbonus, bonus ristrutturazioni o ecobonus con storici pluriennali da ricostruire",
      "Chi cumula più bonus edilizi/arredi/verde con soglie distinte da gestire",
      "Chi possiede immobili all'estero (quadro RW, IVIE, IVAFE)",
      "Chi ha redditi da trading, partecipazioni estere, cripto o strumenti finanziari esteri",
    ],
    bullets: [
      "Controllo completo del 730 precompilato e integrazione dei quadri mancanti",
      "Gestione quadro RW per monitoraggio fiscale immobili e asset esteri",
      "Calcolo IVIE e IVAFE su immobili e prodotti finanziari detenuti all'estero",
      "Ricostruzione storico bonus edilizi pluriennali (rate superbonus, ristrutturazioni, ecobonus)",
      "Credito d'imposta estero per redditi prodotti fuori Italia (convenzioni contro doppie imposizioni)",
      "Gestione redditi da trading e plusvalenze finanziarie estere",
      "Invio telematico all'Agenzia delle Entrate con ricevuta",
      "Archivio documenti nel portale clienti per 5 anni",
      "Assistenza integrazione documentale e spiegazione risultato via portale o videocall",
    ],
    esclusi: [
      "Modello Redditi PF per titolari di Partita IVA (servizio a parte)",
      "Dichiarazioni IMU, TARI (preventivo dedicato)",
      "Integrazioni dichiarazioni anni precedenti (ravvedimento operoso separato)",
      "Contenzioso tributario, risposta a lettere di compliance (preventivo puntuale)",
    ],
    processTitle: "Dal mandato all'invio, in 7 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri e paghi la caparra di 10 euro (Stripe o PayPal). Attivi l'account e accedi alla checklist personalizzata.",
      },
      {
        step: "2. Check-up iniziale",
        body: "Videocall di inquadramento: mappiamo i quadri complessi (RW, esteri, bonus pluriennali) e confermiamo l'onorario finale prima della firma mandato.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato professionale direttamente dal portale con importo concordato.",
      },
      {
        step: "4. Raccolta documenti",
        body: "Checklist guidata per redditi esteri, CU estere, estratti conto esteri, storici bonus edilizi, documenti trading. Upload sicuro.",
      },
      {
        step: "5. Lavorazione e bozza",
        body: "Compiliamo i quadri, calcoliamo IVIE/IVAFE, credito d'imposta estero, ricostruiamo storici bonus pluriennali. Ti mostriamo la bozza con riepilogo dettagliato.",
      },
      {
        step: "6. Revisione e scelte",
        body: "Ti mostriamo il risultato con le scelte rilevanti (sostituto d'imposta, 5/8/2 per mille, rate F24). Firmi l'impegno a trasmettere.",
      },
      {
        step: "7. Invio telematico",
        body: "Inviamo telematicamente all'Agenzia delle Entrate, ti consegniamo ricevuta e copia firmata archiviata nel portale.",
      },
    ],
    priceFormat: "da",
    priceBlurb:
      "98 euro è il punto di partenza per un 730 avanzato standard (es. quadro RW semplice, 1-2 bonus pluriennali). Se hai molti quadri esteri, più immobili all'estero, storici bonus articolati su più cantieri, l'onorario finale lo definiamo nel check-up iniziale prima della firma del mandato. Nessuna sorpresa dopo.",
    priceSuffix: "dichiarazione",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/dichiarazione-730-avanzato",
    ctaNote:
      "Caparra 10 euro all'iscrizione portale. Saldo onorario concordato alla firma del mandato.",
    closingBlurb:
      "Iscriviti al portale, facciamo insieme il check-up iniziale per mappare la complessità del tuo caso. Firmi il mandato con onorario concordato e lavoriamo la dichiarazione con i quadri avanzati gestiti correttamente.",
    closingCtaLabel: "Inizia sul portale",
    hidePostPaymentSection: true,
    docs: [
      "CU Italia ed eventuali CU estere (o certificazioni redditi esteri equivalenti)",
      "Estratti conto bancari esteri e dossier titoli esteri al 31/12",
      "Rogiti e visure immobili all'estero per IVIE",
      "Storico bonus edilizi: fatture, bonifici parlanti, asseverazioni tecniche, comunicazioni ENEA",
      "Documentazione redditi da trading (CU broker o estratti operazioni)",
      "Visura catastale aggiornata per immobili italiani",
    ],
    deliveryDays: "entro 15-20 giorni lavorativi dall'arrivo documentazione completa",
    faqs: [
      {
        q: "Qual è la differenza tra 730 standard e 730 avanzato?",
        a: "Il 730 standard (50 euro) copre casi lineari: dipendenti/pensionati con spese mediche, mutuo, figli, bonus edilizi con storico semplice. Il 730 avanzato serve quando devi compilare quadri dedicati (RW per monitoraggio fiscale estero, IVIE/IVAFE, credito d'imposta estero) o ricostruire storici bonus edilizi pluriennali complessi. Il tempo analitico richiesto è superiore, l'onorario riflette questa differenza.",
      },
      {
        q: "Perché il prezzo è 'da 98 euro' e non fisso?",
        a: "Perché la complessità effettiva la vediamo solo nel check-up iniziale: un quadro RW con un conto estero è diverso da tre conti in tre Paesi diversi, un superbonus con un'asseverazione è diverso da cumulo ristrutturazioni + ecobonus + sismabonus con più cantieri. L'onorario finale te lo confermiamo prima della firma del mandato, mai a sorpresa dopo.",
      },
      {
        q: "Se ho solo spese mediche e bonus ristrutturazione semplice?",
        a: "Basta il 730 standard a 50 euro. Il 730 avanzato è per chi ha quadri esteri o storici bonus articolati che richiedono ricostruzione analitica.",
      },
      {
        q: "Gestite anche il quadro RW per cripto?",
        a: "Sì, il quadro RW copre cripto-attività detenute su wallet o exchange esteri, con calcolo plusvalenze e monitoraggio fiscale. È uno dei casi tipici del 730 avanzato.",
      },
      {
        q: "Ho un immobile all'estero: quanto incide sul prezzo?",
        a: "Un immobile singolo con documentazione pulita rientra nel base 98 euro. Più immobili, o documentazione da ricostruire con catasto estero non disponibile, alzano l'onorario: lo confermiamo nel check-up.",
      },
      {
        q: "Posso usare la precompilata dell'Agenzia anche in questi casi?",
        a: "La precompilata non copre i quadri avanzati (RW, IVIE, IVAFE, crediti esteri): sono quadri che devi compilare manualmente. Il rischio fai-da-te su questi quadri è alto (sanzioni da 3% a 15% sugli importi non dichiarati per RW). Il 730 avanzato esiste proprio per evitare questi errori.",
      },
    ],
  },
  "dichiarazione-upf-base": {
    slug: "dichiarazione-upf-base",
    prezzoId: "upf-base",
    title: "Modello Redditi PF (UPF) — base",
    tagline:
      "Dichiarazione Modello Redditi Persone Fisiche per chi non può usare il 730. Compilazione e invio telematico all'Agenzia delle Entrate da dottori commercialisti iscritti all'albo.",
    metaDesc:
      "Modello Redditi PF (UPF) a 98 euro: dichiarazione per ex P.IVA cessate, redditi fondiari, redditi assimilati che escludono il 730. Dottori commercialisti a Parma.",
    perChi: [
      "Ex titolari di P.IVA cessata nell'anno (senza strascichi pluriennali complessi)",
      "Chi ha redditi fondiari da più immobili che il 730 non riesce a gestire correttamente",
      "Chi ha redditi assimilati che escludono l'uso del 730",
      "Eredi che devono presentare la dichiarazione per conto del de cuius",
      "Chi ha perso il sostituto d'imposta durante l'anno e non può usare il 730",
    ],
    bullets: [
      "Compilazione Modello Redditi PF con tutti i quadri necessari (RA, RB, RC, RP, RN)",
      "Gestione redditi fondiari multipli (più immobili, comproprietà, usufrutti)",
      "Calcolo IRPEF netta con scaglioni e addizionali regionali/comunali",
      "Verifica detrazioni applicabili (mediche, mutuo, ristrutturazioni, carichi familiari)",
      "Calcolo rate F24 e saldo/acconti imposte",
      "Invio telematico all'Agenzia delle Entrate con ricevuta",
      "Archivio documenti nel portale clienti per 5 anni (retention fiscale)",
      "Spiegazione chiara del risultato via portale o videocall",
    ],
    esclusi: [
      "Quadri avanzati RW (monitoraggio fiscale estero), RT (plusvalenze), RM (redditi a tassazione separata): servizio UPF avanzato",
      "Dichiarazioni per titolari di P.IVA attiva nell'anno (serve contabilità annuale)",
      "Contenzioso tributario e risposta a lettere di compliance (preventivo dedicato)",
      "Dichiarazioni integrative o ravvedimento operoso per anni precedenti (preventivo separato)",
    ],
    processTitle: "Dal mandato all'invio, in 6 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri gratis su clienti.atparma.com. Nessun pagamento in questa fase.",
      },
      {
        step: "2. Check-up iniziale",
        body: "Videocall breve per confermare che UPF base copre il tuo caso (senza quadri avanzati RW/RT/RM). Se emergono quadri avanzati ti indirizziamo su UPF avanzato con onorario concordato.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato professionale direttamente dal portale.",
      },
      {
        step: "4. Raccolta documenti",
        body: "Checklist guidata: CU, redditi fondiari, documenti detrazioni. Upload sicuro nel portale.",
      },
      {
        step: "5. Compilazione e bozza",
        body: "Compiliamo i quadri e ti mostriamo la bozza con riepilogo di IRPEF, addizionali, crediti e rate F24.",
      },
      {
        step: "6. Invio telematico",
        body: "Inviamo telematicamente all'Agenzia delle Entrate, ti consegniamo ricevuta e copia firmata archiviata nel portale.",
      },
    ],
    priceFormat: "fisso",
    priceBlurb:
      "98 euro IVA inclusa per UPF base lineare. Se il check-up rileva quadri avanzati (RW per conti esteri, RT per plusvalenze, redditi esteri complessi) ti indirizziamo su UPF avanzato, con onorario concordato prima della firma del mandato.",
    priceSuffix: "dichiarazione",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/dichiarazione-upf-base",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento 98 euro alla firma del mandato.",
    closingBlurb:
      "Iscriviti al portale, facciamo il check-up per confermare che UPF base copre il tuo caso, firmi il mandato e lavoriamo la dichiarazione. Invio telematico e archivio documenti inclusi.",
    closingCtaLabel: "Inizia sul portale",
    hidePostPaymentSection: true,
    docs: [
      "CU dei sostituti d'imposta (se presenti)",
      "Visure catastali aggiornate e contratti di locazione per immobili",
      "Documentazione spese detraibili (mediche, mutuo, ristrutturazioni, istruzione, figli)",
      "Eventuali F24 già versati per acconti anno in corso",
      "Codice fiscale e documento d'identità",
    ],
    deliveryDays: "entro 10-15 giorni lavorativi dall'arrivo documentazione completa",
    faqs: [
      {
        q: "Qual è la differenza tra 730 e Modello Redditi PF (UPF)?",
        a: "Il 730 è riservato a lavoratori dipendenti e pensionati con situazione fiscale lineare. Il Modello Redditi PF (UPF) serve invece quando hai cessato la P.IVA nell'anno, hai redditi fondiari complessi, hai perso il sostituto d'imposta, o hai quadri che il 730 non gestisce. Il risultato fiscale è analogo, cambia il modello e il canale di invio.",
      },
      {
        q: "Perché UPF base costa 98 euro e il 730 solo 50 euro?",
        a: "Il Modello Redditi PF richiede più quadri, calcoli di saldo/acconti separati (non c'è sostituto d'imposta che trattiene), più controlli incrociati con anagrafiche diverse. Il tempo di lavorazione è superiore al 730 standard, l'onorario riflette questa differenza.",
      },
      {
        q: "Se ho quadro RW per conti esteri?",
        a: "Ti serve UPF avanzato (da 198 euro). Il quadro RW per monitoraggio fiscale estero, RT per plusvalenze finanziarie, RM per redditi a tassazione separata richiedono competenze e tempi diversi. Il check-up iniziale ti indirizza sul servizio corretto.",
      },
      {
        q: "Posso passare dal 730 a UPF se mi accorgo che mi serve UPF?",
        a: "Sì, prima della firma del mandato si cambia direzione senza costi aggiuntivi. Dopo la firma, la differenza di onorario la recuperiamo su eventuali integrazioni.",
      },
      {
        q: "Gestite anche dichiarazioni per eredi?",
        a: "Sì, la dichiarazione dei redditi del de cuius rientra in UPF. Se il caso richiede quadri avanzati (eredità di P.IVA, immobili esteri) ti indirizziamo su UPF avanzato con preventivo concordato.",
      },
    ],
  },
  "dichiarazione-upf-avanzato": {
    slug: "dichiarazione-upf-avanzato",
    prezzoId: "upf-avanzato",
    title: "Modello Redditi PF (UPF) — avanzata",
    tagline:
      "UPF con quadri complessi: RW per conti e cripto esteri, RT plusvalenze, redditi esteri con credito d'imposta, IVIE/IVAFE, P.IVA cessata con strascichi pluriennali. Onorario tarato sulla complessità reale.",
    metaDesc:
      "UPF avanzato da 198 euro: quadri RW, RT, redditi esteri, IVIE/IVAFE, P.IVA cessata con strascichi. Dottori commercialisti a Parma per casi complessi.",
    perChi: [
      "Chi detiene conti correnti, dossier titoli o cripto-attività su exchange esteri (quadro RW)",
      "Chi ha plusvalenze da strumenti finanziari, partecipazioni o cripto (quadro RT)",
      "Chi ha redditi prodotti all'estero con credito d'imposta (convenzioni doppie imposizioni)",
      "Chi possiede immobili all'estero (calcolo IVIE e IVAFE)",
      "Ex titolari di P.IVA cessata con strascichi pluriennali (beni strumentali, rateazioni, crediti IVA)",
    ],
    bullets: [
      "Compilazione quadri RA, RB, RC, RP, RN (base UPF) + quadri avanzati necessari",
      "Quadro RW per monitoraggio fiscale di asset esteri (bancari, finanziari, immobiliari, cripto)",
      "Quadro RT per plusvalenze finanziarie e partecipazioni estere",
      "Calcolo IVIE e IVAFE su immobili e prodotti finanziari detenuti all'estero",
      "Credito d'imposta estero per redditi prodotti fuori Italia (convenzioni contro doppie imposizioni)",
      "Gestione strascichi P.IVA cessata (cessione beni strumentali, rate pluriennali, crediti IVA residui)",
      "Invio telematico all'Agenzia delle Entrate con ricevuta",
      "Archivio documenti nel portale clienti per 5 anni",
    ],
    esclusi: [
      "Dichiarazioni per titolari di P.IVA attiva (serve contabilità annuale)",
      "Dichiarazioni IMU, TARI (preventivo dedicato)",
      "Contenzioso tributario, risposta a lettere di compliance (preventivo puntuale)",
      "Dichiarazioni integrative anni precedenti (ravvedimento operoso separato)",
    ],
    processTitle: "Dal mandato all'invio, in 7 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri e paghi la caparra di 10 euro (Stripe o PayPal). Attivi l'account e accedi alla checklist personalizzata.",
      },
      {
        step: "2. Check-up iniziale",
        body: "Videocall di inquadramento: mappiamo i quadri necessari (RW, RT, esteri, IVIE/IVAFE) e confermiamo l'onorario finale prima della firma del mandato.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato professionale con importo concordato.",
      },
      {
        step: "4. Raccolta documenti",
        body: "Checklist guidata: CU, redditi esteri, estratti conto esteri, dossier titoli, visure immobili esteri, documentazione trading/cripto.",
      },
      {
        step: "5. Compilazione e bozza",
        body: "Compiliamo i quadri avanzati, calcoliamo IVIE/IVAFE, credito d'imposta estero, gestiamo strascichi P.IVA. Ti mostriamo la bozza con riepilogo dettagliato.",
      },
      {
        step: "6. Revisione e scelte",
        body: "Verifica finale dei quadri e conferma delle scelte rilevanti (rate F24, 5/8/2 per mille). Firmi l'impegno a trasmettere.",
      },
      {
        step: "7. Invio telematico",
        body: "Inviamo telematicamente all'Agenzia delle Entrate, ti consegniamo ricevuta e copia firmata archiviata nel portale.",
      },
    ],
    priceFormat: "da",
    priceBlurb:
      "198 euro è il punto di partenza per UPF avanzato standard (es. RW con un conto estero, una sola plusvalenza, un immobile estero). Se hai più asset esteri in Paesi diversi, cumulo di RW + RT + redditi esteri complessi, strascichi P.IVA pluriennali, l'onorario finale lo definiamo nel check-up iniziale prima della firma del mandato. Nessuna sorpresa dopo.",
    priceSuffix: "dichiarazione",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/dichiarazione-upf-avanzato",
    ctaNote:
      "Caparra 10 euro all'iscrizione portale. Saldo onorario concordato alla firma del mandato.",
    closingBlurb:
      "Iscriviti al portale, facciamo insieme il check-up iniziale per mappare la complessità del tuo caso. Firmi il mandato con onorario concordato e lavoriamo la dichiarazione con i quadri avanzati gestiti correttamente.",
    closingCtaLabel: "Inizia sul portale",
    hidePostPaymentSection: true,
    docs: [
      "CU Italia ed eventuali CU estere (o certificazioni redditi esteri equivalenti)",
      "Estratti conto bancari esteri e dossier titoli esteri al 31/12",
      "Rogiti e visure immobili all'estero per IVIE",
      "Documentazione cripto: export exchange, wallet address, operazioni",
      "Documentazione trading: CU broker, estratti operazioni, plusvalenze realizzate",
      "Per ex P.IVA cessata: libro beni strumentali, eventuali crediti IVA residui",
    ],
    deliveryDays: "entro 15-20 giorni lavorativi dall'arrivo documentazione completa",
    faqs: [
      {
        q: "Qual è la differenza tra UPF base e UPF avanzato?",
        a: "UPF base (98 euro) copre casi lineari: ex P.IVA cessata senza strascichi, redditi fondiari, redditi assimilati. UPF avanzato (da 198 euro) serve quando devi compilare quadri RW (monitoraggio fiscale estero), RT (plusvalenze), RM (tassazione separata), gestire redditi esteri con credito d'imposta, calcolare IVIE/IVAFE. Il tempo analitico è superiore, l'onorario riflette questa differenza.",
      },
      {
        q: "Perché il prezzo è 'da 198 euro' e non fisso?",
        a: "La complessità effettiva la vediamo nel check-up iniziale: un quadro RW con un conto estero è diverso da tre conti in tre Paesi diversi, una plusvalenza su un broker è diversa da cumulo RT multi-broker + cripto + partecipazioni estere. L'onorario finale te lo confermiamo prima della firma del mandato.",
      },
      {
        q: "Gestite il quadro RW per cripto-attività?",
        a: "Sì, il quadro RW copre cripto-attività detenute su wallet o exchange esteri. Calcoliamo le plusvalenze realizzate (quadro RT) e compiliamo il monitoraggio fiscale. È uno dei casi tipici di UPF avanzato.",
      },
      {
        q: "Ho un immobile all'estero: quanto incide sul prezzo?",
        a: "Un immobile singolo con documentazione pulita (rogito, visura catastale estera, valore catastale o di mercato) rientra nel base da 198 euro. Più immobili in Paesi diversi, documentazione da ricostruire o valutazione di mercato da integrare alzano l'onorario: lo confermiamo nel check-up.",
      },
      {
        q: "Ho cessato la P.IVA a giugno: serve UPF avanzato?",
        a: "Dipende. Se la cessazione è stata pulita (no beni strumentali da cedere, no crediti IVA residui, no ratei pluriennali) UPF base può bastare. Se ci sono strascichi (cessione beni, crediti IVA, rate superbonus ereditate) serve UPF avanzato. Il check-up iniziale ti indirizza.",
      },
      {
        q: "Rischio sanzioni se non dichiaro conti esteri nel RW?",
        a: "Sì, e sono pesanti: dal 3% al 15% degli importi non dichiarati per Paesi collaborativi, fino al 30% per Paesi black list. Anche per saldi minimi. UPF avanzato copre la compilazione corretta del RW per evitare questi rischi.",
      },
    ],
  },
  "apertura-professionista-sola": {
    slug: "apertura-professionista-sola",
    prezzoId: "apertura-prof-sola",
    title: "Apertura P.IVA Professionista (solo apertura)",
    tagline:
      "Apertura Partita IVA professionista (gestione separata INPS o cassa privata) come servizio una tantum. Scelta codice ATECO, regime fiscale e cassa previdenziale. Senza contabilità annuale inclusa e senza rinnovo tacito.",
    metaDesc:
      "Apertura P.IVA professionista a 183 euro, servizio una tantum. Scelta codice ATECO, regime forfettario/semplificato, iscrizione INPS/cassa. Dottori commercialisti a Parma.",
    perChi: [
      "Chi vuole aprire oggi per iniziare a fatturare e decidere con calma a chi affidare la gestione annuale",
      "Chi preferisce separare l'apertura (servizio una tantum) dalla contabilità annuale",
      "Chi ha un altro studio per la gestione ma vuole farsi aprire la P.IVA correttamente da noi",
      "Chi vuole l'apertura fatta con attenzione al regime e alla cassa corretti, senza vincoli di mandato annuale",
    ],
    bullets: [
      "Apertura Partita IVA presso l'Agenzia delle Entrate",
      "Consulenza iniziale: scelta codice ATECO, regime fiscale (forfettario o semplificato), cassa previdenziale",
      "Iscrizione gestione separata INPS o cassa privata (Inarcassa, Forense, ENPAP, ecc.)",
      "Verifica requisiti forfettario se applicabile",
      "Attivazione cassetto fiscale e codici di accesso",
      "Documentazione completa archiviata nel portale clienti",
    ],
    esclusi: [
      "Contabilità annuale (registrazioni, F24, dichiarazioni, IVA periodica): servizio separato",
      "Fatturazione elettronica EFAT: da attivare con contabilità annuale o acquistabile a parte",
      "Supporto post-apertura oltre la conferma documentazione: richiede mandato di contabilità",
      "Iscrizione CCIAA e INPS artigiani/commercianti (per attività artigianali/commerciali serve bundle Artigiano)",
    ],
    processTitle: "Dall'iscrizione alla P.IVA attiva, in 5 passi",
    process: [
      {
        step: "1. Iscrizione al portale",
        body: "Ti registri gratis su clienti.atparma.com. Nessun pagamento in questa fase.",
      },
      {
        step: "2. Consulenza iniziale",
        body: "Videocall con un commercialista: scelta codice ATECO corretto, verifica convenienza forfettario vs semplificato, iscrizione INPS o cassa privata corretta.",
      },
      {
        step: "3. Firma del mandato una tantum",
        body: "Firmi digitalmente il mandato per la sola apertura. Nessun vincolo di contabilità annuale, nessun rinnovo tacito.",
      },
      {
        step: "4. Pagamento",
        body: "Paghi 183 euro con Stripe o PayPal alla firma del mandato. Unico passaggio di pagamento.",
      },
      {
        step: "5. Apertura",
        body: "Entro 5 giorni lavorativi la P.IVA è attiva e iscritta a INPS/cassa. Documentazione completa nel portale.",
      },
    ],
    priceFormat: "fisso",
    priceBlurb:
      "183 euro una tantum per l'apertura completa. Nessun abbonamento, nessun rinnovo. Se successivamente decidi di affidarci anche la contabilità annuale, il prezzo pieno del bundle contabilità è disponibile sul portale. Nessun obbligo.",
    priceSuffix: "una tantum",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/apertura-professionista-sola",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento 183 euro alla firma del mandato. Servizio una tantum senza vincoli.",
    closingBlurb:
      "Iscriviti gratis al portale, facciamo la consulenza iniziale per verificare il regime corretto e la cassa previdenziale giusta, firmi il mandato una tantum e versi 183 euro. P.IVA attiva entro 5 giorni lavorativi, senza impegno per la gestione annuale.",
    closingCtaLabel: "Inizia sul portale",
    hidePostPaymentSection: true,
    docs: [
      "Carta d'identità o passaporto in corso di validità",
      "Codice fiscale (tessera sanitaria)",
      "Indirizzo sede operativa e domicilio fiscale",
      "Descrizione dell'attività che vuoi svolgere",
      "Eventuali iscrizioni ad albi professionali",
    ],
    deliveryDays: "entro 5 giorni lavorativi dalla firma del mandato nel portale",
    faqs: [
      {
        q: "Perché scegliere solo apertura senza contabilità?",
        a: "È la scelta giusta se vuoi aprire oggi per iniziare a fatturare senza vincoli di mandato annuale: firmi una tantum, paghi una tantum, P.IVA attiva. Successivamente puoi decidere con calma se affidarci anche la contabilità o rivolgerti altrove. Nessun rinnovo tacito.",
      },
      {
        q: "Posso passare alla contabilità con voi in un secondo momento?",
        a: "Sì, in qualunque momento puoi aprire un mandato di contabilità (bundle forfettario a 549 euro o semplificato da 1.647 euro). L'apertura già fatta non viene riconteggiata.",
      },
      {
        q: "È disponibile anche per artigiani/commercianti?",
        a: "No, questo servizio è dedicato ai soli professionisti (gestione separata INPS o cassa privata). Per artigiani/commercianti l'apertura richiede CCIAA, SIA, INPS artigiani ed è gestita con un bundle dedicato (apertura artigiano/commerciante a 610 euro).",
      },
      {
        q: "Cosa include il prezzo 183 euro?",
        a: "L'onorario dello studio per l'apertura completa: dichiarazione di inizio attività all'Agenzia delle Entrate, iscrizione INPS gestione separata o cassa privata (onorario, maggiorazioni per casse con procedure specifiche a parte), consulenza iniziale per scelta regime e ATECO, attivazione cassetto fiscale. Non include adempimenti successivi (quelli sono il ruolo del commercialista che gestirà la contabilità annuale).",
      },
      {
        q: "Il forfettario ha davvero requisiti stringenti?",
        a: "Sì, il forfettario ha requisiti di legge stringenti (ricavi sotto 85.000 euro, no redditi da lavoro dipendente sopra 35.000 euro lordi, no partecipazioni dominanti, no committente ex datore di lavoro). Nella consulenza iniziale verifichiamo se sei effettivamente idoneo prima dell'apertura.",
      },
    ],
  },
};

export function getProdotto(slug: string): ProdottoServizio | undefined {
  return PRODOTTI[slug];
}

export function getAllProdotti(): ProdottoServizio[] {
  return Object.values(PRODOTTI);
}
