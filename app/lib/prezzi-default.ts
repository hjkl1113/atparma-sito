export interface Servizio {
  id: string;
  title: string;
  desc: string;
  price: number | null;
  originalPrice: number | null;
  active: boolean;
  slug?: string;
}

export const DEFAULT_PREZZI: Servizio[] = [
  {
    id: "730",
    title: "Dichiarazione 730",
    desc: "Compilazione e invio della dichiarazione dei redditi modello 730.",
    price: 79,
    originalPrice: null,
    active: true,
    slug: "dichiarazione-730",
  },
  {
    id: "piva-prof",
    title: "Apertura P.IVA Professionista",
    desc: "Apertura Partita IVA per professionisti (no iscrizioni CCIAA/INPS artigiani).",
    price: 199,
    originalPrice: null,
    active: true,
    slug: "piva-professionista",
  },
  {
    id: "piva-art",
    title: "Apertura P.IVA Artigiano/Commerciante",
    desc: "Apertura Partita IVA con iscrizione CCIAA, INPS artigiani/commercianti, SIA.",
    price: 690,
    originalPrice: null,
    active: true,
    slug: "piva-artigiano-commerciante",
  },
  {
    id: "piva-forf",
    title: "P.IVA Forfettario",
    desc: "Apertura Partita IVA forfettaria con caricamento documenti tramite portale clienti.",
    price: 690,
    originalPrice: null,
    active: true,
    slug: "piva-forfettario",
  },
  {
    id: "piva-forf-gis",
    title: "P.IVA Forfettario + EFAT",
    desc: "Apertura + fatturazione elettronica GIS Ranocchi EFAT inclusa per un anno.",
    price: 750,
    originalPrice: null,
    active: true,
    slug: "piva-forfettario-efat",
  },
  {
    id: "consulenza",
    title: "Consulenza su misura",
    desc: "Analisi personalizzata e piano d'azione per la tua situazione specifica.",
    price: null,
    originalPrice: null,
    active: true,
  },
];
