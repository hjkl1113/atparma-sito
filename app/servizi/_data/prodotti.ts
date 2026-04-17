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
      "Chi ha gia un'attivita e vuole passare al forfettario",
      "Dipendenti che vogliono affiancare un'attivita autonoma",
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
      "Contabilita annuale e tenuta registri (servizio a parte)",
      "Dichiarazione dei redditi annuale (Redditi PF, da preventivare)",
      "Iscrizione CCIAA e INPS artigiani/commercianti (per chi svolge attivita artigianali, serve il piano Artigiano/Commerciante a 500 euro)",
    ],
    process: [
      {
        step: "1. Paghi online",
        body: "Scegli Stripe o PayPal. Ricevi subito email di conferma e credenziali del portale clienti.",
      },
      {
        step: "2. Carichi i documenti dal portale",
        body: "Dal tuo portale carichi in sicurezza carta d'identita, codice fiscale e indirizzo sede. Tempo stimato: 10 minuti.",
      },
      {
        step: "3. Ti chiamiamo entro 24 ore",
        body: "Un commercialista dedicato ti contatta per scegliere insieme codice ATECO, cassa previdenziale e impostare il regime forfettario.",
      },
      {
        step: "4. Apriamo la Partita IVA",
        body: "Entro 5 giorni lavorativi la tua P.IVA e attiva. Ricevi tutti i documenti sul portale con il calendario scadenze gia impostato.",
      },
    ],
    docs: [
      "Carta d'identita o passaporto in corso di validita",
      "Codice fiscale (tessera sanitaria)",
      "Indirizzo della sede operativa e del domicilio fiscale",
      "Descrizione sintetica dell'attivita che vuoi svolgere (al codice ATECO ci pensiamo noi)",
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
        a: "Il forfettario non e piu applicabile e passi al regime ordinario l'anno successivo. Ti avvisiamo in tempo e ti aiutiamo nella transizione. Se stai gia pensando di crescere oltre la soglia, valuta prima il piano Artigiano/Commerciante o una consulenza su misura.",
      },
      {
        q: "Nei 500 euro e compresa la dichiarazione dei redditi?",
        a: "No. Il prezzo copre l'apertura, la consulenza iniziale e 12 mesi di portale. La dichiarazione dei redditi annuale si aggiunge a parte (prezzo indicativo 200-350 euro per il forfettario, a seconda della complessita).",
      },
      {
        q: "Posso pagare a rate?",
        a: "Con Stripe puoi usare Klarna o le rate della tua carta, se la tua banca lo prevede. PayPal offre il Paga in 3. In entrambi i casi la selezione avviene in fase di pagamento.",
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
