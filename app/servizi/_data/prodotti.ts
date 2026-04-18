export interface ProdottoServizio {
  slug: string;
  prezzoId: string;
  title: string;
  tagline: string;
  metaDesc: string;
  perChi: string[];
  bullets: string[];
  esclusi: string[];
  process: { step: string; body: string }[];
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
      "730 online a 79 euro: compilazione, invio telematico e controllo detrazioni da dottori commercialisti. Portale clienti per upload documenti.",
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
    process: [
      {
        step: "1. Paghi online",
        body: "Scegli Stripe o PayPal. Ricevi email di conferma e accesso al portale clienti.",
      },
      {
        step: "2. Carichi i documenti",
        body: "Dal portale carichi CU, spese mediche, bonifici bonus edilizi, atti di mutuo, ecc. Checklist guidata inclusa.",
      },
      {
        step: "3. Noi compiliamo e ti chiamiamo",
        body: "Verifichiamo il precompilato, aggiungiamo le detrazioni mancanti, ti chiamiamo per dubbi o integrazioni.",
      },
      {
        step: "4. Inviamo il 730",
        body: "Entro 7 giorni dalla consegna documenti completa, inviamo il 730 all'Agenzia delle Entrate. Ricevuta sul portale.",
      },
    ],
    docs: [
      "Certificazione Unica (CU) del datore di lavoro o INPS",
      "Tessera sanitaria / codice fiscale (tuo e familiari a carico)",
      "Spese mediche, farmaci, dentista, occhiali (scontrini parlanti)",
      "Documentazione bonus edilizi: bonifici, fatture, comunicazioni ENEA",
      "Contratto di mutuo + quietanze interessi passivi (prima casa)",
      "Spese di istruzione (tasse universitarie, scuola paritaria, mensa)",
      "Polizze assicurative vita/infortuni, contributi previdenziali volontari",
    ],
    deliveryDays: "entro 7 giorni lavorativi dalla consegna completa dei documenti",
    faqs: [
      {
        q: "Posso fare il 730 da solo col precompilato?",
        a: "Si, ma il precompilato spesso manca di spese mediche non inviate dal farmacista, bonus edilizi, detrazioni per familiari. Un commercialista verifica ogni voce: spesso il recupero vale più del costo del servizio.",
      },
      {
        q: "Quanto dura il processo?",
        a: "Dall'upload completo dei documenti al 730 inviato passano 7 giorni lavorativi. Puoi iniziare a caricare documenti già subito dopo il pagamento.",
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
    title: "Apertura P.IVA per Professionisti",
    tagline:
      "Per chi svolge un'attività intellettuale (consulenza, sviluppo software, progettazione, traduzione). Apertura veloce, gestione separata INPS e portale clienti inclusi.",
    metaDesc:
      "Apertura P.IVA professionisti a 150 euro: codice ATECO, gestione separata INPS e portale clienti 12 mesi inclusi. Commercialista online iscritto all'albo.",
    perChi: [
      "Consulenti, sviluppatori, designer, copywriter, traduttori",
      "Professionisti intellettuali non iscritti ad albi con cassa privata",
      "Chi lavora a progetto/prestazione per aziende o privati",
      "Dipendenti che vogliono affiancare un'attività autonoma",
    ],
    bullets: [
      "Consulenza preliminare: codice ATECO corretto per la tua attività",
      "Apertura Partita IVA presso l'Agenzia delle Entrate",
      "Iscrizione gestione separata INPS (aliquota 26,07% 2026)",
      "Simulazione carico fiscale con scelta regime (ordinario vs forfettario)",
      "Portale clienti per 12 mesi con upload documenti sicuro",
      "Calendario scadenze personalizzato (F24, dichiarazione dei redditi)",
      "Assistenza via portale per i primi 30 giorni dall'apertura",
    ],
    esclusi: [
      "Fatturazione elettronica (da attivare a parte)",
      "Iscrizione CCIAA e INPS artigiani/commercianti (per attività artigianali serve il piano Artigiano/Commerciante)",
      "Contabilità annuale e tenuta registri (servizio a parte)",
      "Dichiarazione dei redditi annuale (Redditi PF, da preventivare)",
      "Iscrizione a casse private (Inarcassa, Cassa Forense, ENPAP): gestibili su richiesta con maggiorazione",
    ],
    process: [
      {
        step: "1. Paghi online",
        body: "Stripe o PayPal. Ricevi subito email di conferma e credenziali portale clienti.",
      },
      {
        step: "2. Consulenza dedicata",
        body: "Un commercialista ti chiama entro 24 ore: scelta codice ATECO, regime fiscale, cassa previdenziale.",
      },
      {
        step: "3. Carichi i documenti",
        body: "Dal portale carichi carta d'identità, codice fiscale, indirizzo sede. Tempo stimato: 10 minuti.",
      },
      {
        step: "4. Apertura P.IVA",
        body: "Entro 5 giorni lavorativi la tua P.IVA e attiva. Ricevi tutti i documenti sul portale e il calendario scadenze personalizzato.",
      },
    ],
    docs: [
      "Carta d'identità o passaporto in corso di validità",
      "Codice fiscale (tessera sanitaria)",
      "Indirizzo sede operativa e domicilio fiscale",
      "Descrizione dell'attività che vuoi svolgere (al codice ATECO ci pensiamo noi)",
      "IBAN per eventuali pagamenti F24 via addebito diretto",
    ],
    deliveryDays: "entro 5 giorni lavorativi dalla conferma del pagamento",
    faqs: [
      {
        q: "Qual è la differenza tra Professionista e Artigiano?",
        a: "Il professionista svolge attività intellettuale (consulenze, progettazioni, servizi): iscritto solo a gestione separata INPS. L'artigiano/commerciante ha attività manuale o di vendita: iscrizione CCIAA + INPS artigiani/commercianti + SIA. Operazioni diverse, costi diversi.",
      },
      {
        q: "Devo scegliere forfettario o ordinario?",
        a: "Dipende da ricavi e spese attesi. Se prevedi ricavi sotto 85.000 euro e spese basse, il forfettario è spesso più conveniente (5% start-up o 15%). Ti aiutiamo con una simulazione prima dell'apertura. Se sai già di voler partire forfettario, scegli direttamente il piano dedicato a 500 euro (che include anche portale + consulenza).",
      },
      {
        q: "Posso fatturare dal primo giorno?",
        a: "Si, da P.IVA attiva puoi fatturare. La fatturazione elettronica non è inclusa in questo piano: se ti serve, la attivi a parte (50 euro/anno con GIS EFAT).",
      },
      {
        q: "Qual e la differenza tra questo piano e 'P.IVA Forfettario' a 500 euro?",
        a: "Questo piano e generico: apriamo la P.IVA scegliendo regime con te. Il piano Forfettario a 500 euro e pensato specificamente per chi parte già col forfettario e vuole un setup più completo (simulazione dettagliata, documentazione specifica). In entrambi il portale e incluso.",
      },
      {
        q: "Sono iscritto a un albo con cassa privata. Va bene questo piano?",
        a: "Richiede una verifica: molte casse (Inarcassa, Forense, ENPAP) hanno procedure specifiche di iscrizione. Lo gestiamo con una maggiorazione concordata prima. Scrivi in fase di checkout o contattaci prima.",
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
      "P.IVA artigiani e commercianti a 500 euro: apertura + CCIAA + INPS artigiani/commercianti + SIA + portale clienti 12 mesi. Commercialista online.",
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
        q: "Qual e la differenza rispetto al Professionista a 150 euro?",
        a: "Il professionista fa attività intellettuale (consulenze, servizi non manuali): solo gestione separata INPS, niente CCIAA. L'artigiano/commerciante ha attività manuale o di vendita e serve CCIAA + INPS specifica + SIA. Costi amministrativi e burocratici diversi.",
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
      "Apertura P.IVA regime forfettario a 500 euro. Codice ATECO + consulenza fiscale + portale clienti 12 mesi inclusi. Commercialista iscritto all'albo.",
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
      "Fatturazione elettronica (inclusa solo nel piano Forfettario + EFAT a 550 euro)",
      "Contabilità annuale e tenuta registri (servizio a parte)",
      "Dichiarazione dei redditi annuale (Redditi PF, da preventivare)",
      "Iscrizione CCIAA e INPS artigiani/commercianti (per chi svolge attività artigianali, serve il piano Artigiano/Commerciante a 500 euro)",
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
        a: "Si, da quando la P.IVA e attiva puoi fatturare. La fatturazione elettronica non e inclusa in questo piano: se ti serve, scegli il piano Forfettario + EFAT a 550 euro oppure integri dopo il setup fatturazione a 50 euro.",
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
        q: "Nei 500 euro e compresa la dichiarazione dei redditi?",
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
      "P.IVA forfettario + EFAT a 550 euro: apertura + fatturazione elettronica GIS Ranocchi inclusa 12 mesi + portale clienti. Pronto a fatturare subito.",
    perChi: [
      "Freelance che devono fatturare subito a clienti business",
      "Forfettari che prevedono più di 10-15 fatture l'anno",
      "Chi vuole evitare di dover integrare la fatturazione dopo",
      "Professionisti che lavorano con PA (obbligo fatturazione elettronica)",
    ],
    bullets: [
      "Tutto quello che e incluso nel piano Forfettario a 500 euro",
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
        q: "Perché pagare 50 euro in più rispetto al piano Forfettario semplice?",
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
