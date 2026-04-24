export type MacroSezioneSlug =
  | "dichiarazioni"
  | "professionista"
  | "artigiani-commercianti";

export interface MacroSezioneServizi {
  slug: MacroSezioneSlug;
  title: string;
  shortDescription: string;
  intro: string;
  audience: string[];
  howToChoose: string[];
  productSlugs: string[];
  tool?: {
    href: string;
    label: string;
    description: string;
  };
}

export const MACRO_SEZIONI: Record<MacroSezioneSlug, MacroSezioneServizi> = {
  dichiarazioni: {
    slug: "dichiarazioni",
    title: "Dichiarazioni",
    shortDescription:
      "730, 730 avanzato e Modello Redditi PF con un percorso piu' chiaro per capire cosa ti serve davvero.",
    intro:
      "Percorso pensato per privati, ex titolari di Partita IVA e casi dichiarativi complessi. L'obiettivo della pagina e' aiutarti a capire rapidamente se rientri nel 730 oppure se ti serve un Modello Redditi PF, distinguendo i casi standard da quelli piu' articolati.",
    audience: [
      "Chi deve presentare il 730 in modo semplice e guidato",
      "Chi ha casi piu' complessi: estero, RW, bonus edilizi pluriennali, redditi non lineari",
      "Chi non puo' usare il 730 e deve passare a Redditi PF",
    ],
    howToChoose: [
      "Se sei lavoratore dipendente o pensionato, in genere si parte dal 730. Se hai estero, bonus complessi o situazioni particolari, si passa alla versione avanzata.",
      "Se non puoi usare il 730, la scelta corretta diventa Modello Redditi PF: base nei casi lineari, avanzato quando entrano in gioco quadri esteri, plusvalenze o posizione fiscale piu' articolata.",
    ],
    productSlugs: [
      "dichiarazione-730",
      "dichiarazione-730-avanzato",
      "dichiarazione-upf-base",
      "dichiarazione-upf-avanzato",
    ],
  },
  professionista: {
    slug: "professionista",
    title: "Professionista",
    shortDescription:
      "Apertura P.IVA e gestione annuale per freelance e professionisti, con distinzione chiara tra apertura, bundle e subentro.",
    intro:
      "Percorso dedicato a freelance, consulenti e professionisti con gestione separata INPS o cassa privata. La pagina deve aiutare a distinguere se ti serve solo l'apertura, il bundle primo anno oppure la sola contabilità annuale, separando forfettario e semplificato.",
    audience: [
      "Chi deve aprire una nuova Partita IVA come professionista",
      "Chi vuole un pacchetto primo anno con apertura e gestione continuativa",
      "Chi ha gia' la Partita IVA e vuole cambiare commercialista",
    ],
    howToChoose: [
      "Se devi solo aprire la P.IVA senza vincolo annuale, il punto di partenza e' l'apertura una tantum. Se vuoi studio + gestione per l'intero anno, la strada giusta e' il bundle.",
      "Se hai gia' la P.IVA, il bivio corretto e' tra contabilità forfettaria e semplificata. Il calcolatore forfettario resta lo strumento migliore per orientare la scelta iniziale.",
    ],
    productSlugs: [
      "apertura-professionista-sola",
      "piva-professionista",
      "contabilita-professionista-forfettario",
      "piva-professionista-semplificato",
      "contabilita-professionista-semplificata",
    ],
    tool: {
      href: "/calcolatori/forfettario",
      label: "Apri il calcolatore forfettario",
      description:
        "Per capire se conviene il forfettario oppure il semplificato, il calcolatore gratuito resta il miglior entrypoint del percorso Professionista.",
    },
  },
  "artigiani-commercianti": {
    slug: "artigiani-commercianti",
    title: "Artigiani e Commercianti",
    shortDescription:
      "Apertura e gestione annuale con focus su CCIAA, INPS, SIA e differenza tra forfettario e semplificato.",
    intro:
      "Percorso dedicato a chi apre o gestisce un'attivita' con componenti amministrative piu' strutturate: Camera di Commercio, INPS artigiani/commercianti, SIA e tributi pubblici. La pagina serve a distinguere chiaramente apertura da zero e sola gestione annuale.",
    audience: [
      "Chi deve partire da zero con pratica completa artigiano/commerciante",
      "Chi vuole bundle primo anno con apertura e contabilità",
      "Chi ha gia' l'attivita' avviata e vuole solo la gestione annuale o il subentro",
    ],
    howToChoose: [
      "Se devi solo aprire l'attivita', il punto iniziale e' l'apertura artigiano/commerciante. Se vuoi gia' il primo anno completo, la scelta passa ai bundle dedicati.",
      "Se hai gia' la Partita IVA attiva, la scelta giusta e' tra contabilità annuale forfettaria e semplificata. Il wizard preventivo artigiano/commerciante aiuta a capire oneri e percorso piu' adatto.",
    ],
    productSlugs: [
      "piva-artigiano-commerciante",
      "piva-artigiano-commerciante-forfettario",
      "contabilita-artigiano-forfettario",
      "piva-artigiano-commerciante-semplificato",
      "contabilita-artigiano-semplificata",
    ],
    tool: {
      href: "/strumenti/preventivo-artigiano-commerciante",
      label: "Apri il wizard preventivo artigiano/commerciante",
      description:
        "Per questa area il miglior supporto iniziale resta il wizard sul preventivo burocratico, utile per inquadrare costi pubblici e scenario di partenza.",
    },
  },
};

export const CONSULENZE_SPECIALISTICHE = [
  {
    slug: "consulenza-fiscale",
    title: "Consulenza fiscale",
    desc: "Dichiarazioni, pianificazione fiscale, IVA, imposte dirette e indirette. Assistenza nelle verifiche e nei contenziosi tributari.",
  },
  {
    slug: "crisi-di-impresa",
    title: "Crisi di impresa",
    desc: "Gestione delle procedure concorsuali, piani di risanamento, composizione negoziata della crisi e assistenza nelle ristrutturazioni.",
  },
  {
    slug: "consulenza-finanziaria",
    title: "Consulenza finanziaria",
    desc: "Accesso al credito, finanza agevolata, business plan, valutazione d'azienda e supporto nelle operazioni di M&A.",
  },
] as const;

export function getMacroSezione(slug: string): MacroSezioneServizi | undefined {
  return MACRO_SEZIONI[slug as MacroSezioneSlug];
}

export function getAllMacroSezioni(): MacroSezioneServizi[] {
  return Object.values(MACRO_SEZIONI);
}
