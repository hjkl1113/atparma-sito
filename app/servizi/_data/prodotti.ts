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
  priceBlurb?: string;
  priceSuffix?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaNote?: string;
  closingBlurb?: string;
  closingCtaLabel?: string;
  showForfettarioCalculator?: boolean;
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
      "P.IVA forfettario + contabilità annuale a 449 euro (listino 549). Apertura, fatturazione elettronica EFAT, dichiarazione redditi, F24 inclusi. Rinnovo annuale, prezzo bloccato 3 anni con formula triennale opzionale. Dottori commercialisti a Parma.",
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
        step: "2. Consulenza iniziale",
        body: "Videocall gratuita con un commercialista: scelta ATECO, cassa previdenziale, simulazione imposte personalizzata.",
      },
      {
        step: "3. Firma del mandato",
        body: "Firmi digitalmente il mandato professionale nel portale. Scegli tu: annuale (rinnovo tacito, disdetta 60 giorni) oppure triennale con prezzo bloccato 449 euro per tutti e 3 gli anni.",
      },
      {
        step: "4. Pagamento primo anno",
        body: "Paghi 449 euro con Stripe o PayPal alla firma del mandato. È l'unico passaggio di pagamento per l'apertura.",
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
        body: "Formula annuale: fattura di rinnovo ogni anno, puoi disdire con 60 giorni di preavviso. Formula triennale: prezzo bloccato 449 euro per tutti e 3 gli anni. Oltre 20 fatture/anno: preventivo aggiornato prima del rinnovo, mai a sorpresa.",
      },
    ],
    priceBlurb:
      "449 euro primo anno. Rinnovo annuale con disdetta libera, oppure triennale con prezzo bloccato 449 euro per 3 anni. Add-on fatturazione assistita +99 euro/anno opzionale. Paghi solo dopo aver firmato il mandato nel portale.",
    priceSuffix: "primo anno",
    ctaLabel: "Inizia sul portale",
    ctaHref: "https://at-parma.vercel.app/onboarding/piva-professionista-forfettario",
    ctaNote:
      "Iscrizione portale gratuita. Pagamento 449 euro alla firma del mandato (annuale o triennale). Fatturazione elettronica automatica.",
    closingBlurb:
      "Iscriviti gratis al portale, facciamo insieme la consulenza iniziale, firmi il mandato (annuale o triennale a prezzo bloccato) e solo a quel punto versi i 449 euro del primo anno. P.IVA attiva entro 5 giorni lavorativi dalla firma.",
    closingCtaLabel: "Inizia sul portale",
    showForfettarioCalculator: true,
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
        q: "Cosa include esattamente il bundle a 449 euro?",
        a: "Apertura P.IVA forfettaria, consulenza iniziale, iscrizione INPS, contabilità annuale fino a 20 fatture, dichiarazione dei redditi PF, fatturazione elettronica EFAT Ranocchi inclusa il primo anno, F24 calcolati e predisposti, portale clienti e 2 videocall di check nell'anno. Non è un servizio spot di sola apertura: è il commercialista unico per tutto l'anno.",
      },
      {
        q: "Posso scegliere tra annuale e triennale?",
        a: "Sì, decidi tu al momento della firma del mandato. Annuale: rinnovo tacito a fine anno, puoi disdire con 60 giorni di preavviso via PEC. Triennale: prezzo bloccato 449 euro per tutti e 3 gli anni (garanzia contro aumenti di listino). Stessa copertura di servizio, cambia solo la durata dell'impegno reciproco.",
      },
      {
        q: "Come si rinnova dopo il primo anno?",
        a: "Sul piano annuale: a inizio anno solare riemettiamo la fattura di 449 euro (salvo eventuale aggiornamento listino comunicato 60 giorni prima) e continuiamo a gestire contabilità e scadenze. Sul piano triennale: prezzo bloccato 449 euro, nessun aumento per 3 anni. In entrambi i casi, se superi 20 fatture l'anno precedente ti contattiamo con il preventivo aggiornato prima del rinnovo: nessuna sorpresa in fattura.",
      },
      {
        q: "Cosa succede se supero le 20 fatture nell'anno?",
        a: "Niente blocco durante l'anno in corso: gestiamo tutto regolarmente. Dall'anno successivo applichiamo un preventivo maggiorato (scaglione 2) proporzionale al volume, che ti comunichiamo prima del rinnovo. Così eviti di pagare di più senza motivo se i volumi restano bassi.",
      },
      {
        q: "Cosa succede se supero gli 85.000 euro di ricavi?",
        a: "Esci automaticamente dal forfettario dall'anno successivo e passi al regime semplificato o ordinario. Il bundle a 449 euro copre il forfettario: se superi la soglia facciamo un nuovo preventivo dedicato al regime superiore (gestione più complessa, IVA ordinaria, registri). Ti avvisiamo in tempo per pianificare.",
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
  "piva-artigiano-commerciante": {
    slug: "piva-artigiano-commerciante",
    prezzoId: "piva-art",
    title: "Apertura P.IVA Artigiano o Commerciante",
    tagline:
      "Per chi apre un'attività artigianale o commerciale: apertura Partita IVA con iscrizione CCIAA, INPS artigiani/commercianti e SIA. Tutto incluso, tutto online.",
    metaDesc:
      "P.IVA artigiani e commercianti a 690 euro: apertura + CCIAA + INPS artigiani/commercianti + SIA + portale clienti 12 mesi. Commercialista online.",
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
    process: [
      {
        step: "1. Paghi online",
        body: "Stripe o PayPal. Ricevi email di conferma e credenziali portale clienti.",
      },
      {
        step: "2. Consulenza dedicata",
        body: "Un commercialista ti chiama: scelta codice ATECO, verifica requisiti artigiano/commerciante, pianificazione CCIAA.",
      },
      {
        step: "3. Carichi documenti",
        body: "Dal portale: documenti identità, sede operativa, contratto di locazione, eventuali licenze.",
      },
      {
        step: "4. Apertura e iscrizioni",
        body: "Entro 10 giorni lavorativi: P.IVA attiva, iscrizione CCIAA completata, INPS attivo. Tutti i documenti sul portale.",
      },
    ],
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
        q: "Qual è la differenza rispetto al bundle Professionista forfettario a 449 euro?",
        a: "Il bundle Professionista (449 euro primo anno, rinnovo annuale o triennale a prezzo bloccato) è pensato per l'attività intellettuale (consulenze, servizi non manuali) e include apertura + contabilità annuale + EFAT + dichiarazione redditi. L'artigiano/commerciante ha invece attività manuale o di vendita e serve CCIAA + INPS specifica + SIA: cambiano sia la burocrazia sia i costi. Qui paghi una tantum l'apertura, la gestione annuale si concorda a parte.",
      },
      {
        q: "Posso scegliere il regime forfettario?",
        a: "Si, se rispetti i requisiti (ricavi sotto 85.000 euro, niente redditi da lavoro dipendente oltre 30.000 euro, ecc.). In consulenza valutiamo insieme.",
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
  "piva-forfettario": {
    slug: "piva-forfettario",
    prezzoId: "piva-forf",
    title: "Apertura P.IVA in regime forfettario",
    tagline:
      "Apriamo la tua Partita IVA forfettaria senza che tu debba uscire di casa. Codice ATECO, regime fiscale e portale clienti gestiti da dottori commercialisti iscritti all'albo.",
    metaDesc:
      "Apertura P.IVA regime forfettario a 690 euro. Codice ATECO + consulenza fiscale + portale clienti 12 mesi inclusi. Commercialista iscritto all'albo.",
    perChi: [
      "Freelance e professionisti con ricavi stimati fino a 85.000 euro",
      "Consulenti, creator, designer, sviluppatori che partono in proprio",
      "Chi ha già un'attività e vuole passare al forfettario",
      "Dipendenti che vogliono affiancare un'attività autonoma",
    ],
    bullets: [
      "Consulenza preliminare: scegliamo insieme codice ATECO e cassa previdenziale",
      "Apertura Partita IVA presso Agenzia delle Entrate",
      "Iscrizione gestione separata INPS o cassa professionale",
      "Verifica dei requisiti forfettario e simulazione imposte (aliquota 5% startup o 15%)",
      "Accesso al portale clienti per 12 mesi con upload documenti sicuro",
      "Calendario scadenze personalizzato (F24, dichiarazione dei redditi)",
      "Assistenza via portale per i primi 30 giorni dall'apertura",
      "Email di benvenuto con credenziali e guida operativa",
    ],
    esclusi: [
      "Fatturazione elettronica (inclusa solo nel piano Forfettario + EFAT a 750 euro)",
      "Contabilità annuale e tenuta registri (servizio a parte)",
      "Dichiarazione dei redditi annuale (Redditi PF, da preventivare)",
      "Iscrizione CCIAA e INPS artigiani/commercianti (per chi svolge attività artigianali, serve il piano Artigiano/Commerciante a 690 euro)",
    ],
    process: [
      {
        step: "1. Paghi online",
        body: "Scegli Stripe o PayPal. Ricevi subito email di conferma e credenziali del portale clienti.",
      },
      {
        step: "2. Carichi i documenti dal portale",
        body: "Dal tuo portale carichi in sicurezza carta d'identità, codice fiscale e indirizzo sede. Tempo stimato: 10 minuti.",
      },
      {
        step: "3. Ti chiamiamo entro 24 ore",
        body: "Un commercialista dedicato ti contatta per scegliere insieme codice ATECO, cassa previdenziale e impostare il regime forfettario.",
      },
      {
        step: "4. Apriamo la Partita IVA",
        body: "Entro 5 giorni lavorativi la tua P.IVA e attiva. Ricevi tutti i documenti sul portale con il calendario scadenze già impostato.",
      },
    ],
    docs: [
      "Carta d'identità o passaporto in corso di validità",
      "Codice fiscale (tessera sanitaria)",
      "Indirizzo della sede operativa e del domicilio fiscale",
      "Descrizione sintetica dell'attività che vuoi svolgere (al codice ATECO ci pensiamo noi)",
      "IBAN per eventuali pagamenti F24 via addebito",
    ],
    deliveryDays: "entro 5 giorni lavorativi dalla conferma del pagamento",
    faqs: [
      {
        q: "Quanto tempo serve per aprire la Partita IVA?",
        a: "Entro 5 giorni lavorativi dalla conferma del pagamento. I tempi si allungano solo se mancano documenti: in quel caso te lo segnaliamo subito dal portale.",
      },
      {
        q: "Posso fare fattura dal primo giorno?",
        a: "Sì, da quando la P.IVA è attiva puoi fatturare. La fatturazione elettronica non è inclusa in questo piano: se ti serve, scegli il piano Forfettario + EFAT a 750 euro oppure integri dopo il setup fatturazione a 50 euro.",
      },
      {
        q: "Devo venire fisicamente a Parma?",
        a: "No. Tutto il processo avviene online: consulenza in videocall, documenti sul portale, firme digitali. Servi anche se vivi a Milano, Roma, Catania o all'estero.",
      },
      {
        q: "Cosa succede se supero gli 85.000 euro?",
        a: "Il forfettario non e più applicabile e passi al regime ordinario l'anno successivo. Ti avvisiamo in tempo e ti aiutiamo nella transizione. Se stai già pensando di crescere oltre la soglia, valuta prima il piano Artigiano/Commerciante o una consulenza su misura.",
      },
      {
        q: "Nei 690 euro è compresa la dichiarazione dei redditi?",
        a: "No. Il prezzo copre l'apertura, la consulenza iniziale e 12 mesi di portale. La dichiarazione dei redditi annuale si aggiunge a parte (prezzo indicativo 200-350 euro per il forfettario, a seconda della complessità).",
      },
      {
        q: "Posso pagare a rate?",
        a: "Con Stripe puoi usare Klarna o le rate della tua carta, se la tua banca lo prevede. PayPal offre il Paga in 3. In entrambi i casi la selezione avviene in fase di pagamento.",
      },
    ],
  },
  "piva-forfettario-efat": {
    slug: "piva-forfettario-efat",
    prezzoId: "piva-forf-gis",
    title: "P.IVA Forfettario + Fatturazione elettronica EFAT",
    tagline:
      "Apertura P.IVA forfettaria + software di fatturazione elettronica GIS Ranocchi EFAT incluso per 12 mesi. Parti pronto a fatturare dal primo giorno.",
    metaDesc:
      "P.IVA forfettario + EFAT a 750 euro: apertura + fatturazione elettronica GIS Ranocchi inclusa 12 mesi + portale clienti. Pronto a fatturare subito.",
    perChi: [
      "Freelance che devono fatturare subito a clienti business",
      "Forfettari che prevedono più di 10-15 fatture l'anno",
      "Chi vuole evitare di dover integrare la fatturazione dopo",
      "Professionisti che lavorano con PA (obbligo fatturazione elettronica)",
    ],
    bullets: [
      "Tutto quello che è incluso nel piano Forfettario a 690 euro",
      "Licenza GIS Ranocchi EFAT per 12 mesi (valore ~50 euro)",
      "Setup completo del software: anagrafica, logo, IBAN, tipologie documento",
      "Configurazione invio/ricezione tramite SDI (Sistema di Interscambio)",
      "Formazione di 30 minuti sull'uso del software (videocall o portale)",
      "Archivio fatture emesse/ricevute con conservazione a norma 10 anni",
      "App mobile per emettere fatture anche fuori ufficio",
    ],
    esclusi: [
      "Canone EFAT oltre i primi 12 mesi (rinnovo a circa 50 euro/anno)",
      "Contabilità annuale e tenuta registri (servizio a parte)",
      "Dichiarazione dei redditi annuale (da preventivare)",
      "Iscrizione CCIAA / INPS artigiani (per attività artigianali serve il piano dedicato)",
    ],
    process: [
      {
        step: "1. Paghi online",
        body: "Stripe o PayPal. Ricevi email di conferma + credenziali portale clienti.",
      },
      {
        step: "2. Consulenza + documenti",
        body: "Un commercialista ti chiama: codice ATECO + simulazione forfettario. Carichi documenti dal portale.",
      },
      {
        step: "3. Apertura P.IVA + setup EFAT",
        body: "Entro 5 giorni lavorativi: P.IVA attiva + software EFAT configurato con i tuoi dati, logo e IBAN.",
      },
      {
        step: "4. Formazione",
        body: "Videocall di 30 minuti (o guida sul portale): impariamo insieme a emettere la prima fattura.",
      },
    ],
    docs: [
      "Carta d'identità o passaporto in corso di validità",
      "Codice fiscale",
      "Indirizzo sede operativa e domicilio fiscale",
      "Descrizione sintetica dell'attività",
      "IBAN per pagamenti F24 e da riportare in fattura",
      "Logo in formato PNG o JPG (opzionale, per le tue fatture)",
    ],
    deliveryDays: "entro 5 giorni lavorativi dalla conferma del pagamento",
    faqs: [
      {
        q: "Perché pagare 60 euro in più rispetto al piano Forfettario semplice?",
        a: "Perché attiviamo già il software di fatturazione elettronica EFAT (valore circa 50 euro/anno di listino), lo configuriamo con i tuoi dati e ti facciamo la formazione. Parti operativo dal primo giorno. Nel piano base il setup EFAT va fatto separatamente dopo.",
      },
      {
        q: "Sono obbligato a usare la fatturazione elettronica da forfettario?",
        a: "Si, dal 2024 l'obbligo e esteso anche ai forfettari senza limite di ricavi. Quindi se apri la P.IVA oggi, la fatturazione elettronica ti serve. Questo piano te la da già inclusa, senza pensieri.",
      },
      {
        q: "Cos'e GIS Ranocchi EFAT?",
        a: "E il software di fatturazione elettronica del gruppo Ranocchi, uno dei più diffusi in Italia tra studi commercialisti. Interfaccia semplice, app mobile, conservazione a norma inclusa.",
      },
      {
        q: "Dopo 12 mesi cosa succede al software?",
        a: "Il rinnovo EFAT e a circa 50 euro/anno (listino Ranocchi, prezzo soggetto a variazioni). Ti avvisiamo in tempo, puoi rinnovare o passare ad altro gestionale.",
      },
      {
        q: "Posso fatturare anche a privati senza P.IVA?",
        a: "Si. Con il forfettario emetti fattura elettronica anche a privati (inviata comunque a SDI e ricevuta dal tuo cliente via email o Cassetto Fiscale).",
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
