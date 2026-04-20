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
    price: 50,
    originalPrice: 79,
    active: true,
    slug: "dichiarazione-730",
  },
  {
    id: "piva-prof",
    title: "P.IVA Professionista forfettario + contabilita",
    desc: "Apertura P.IVA forfettario + contabilita annuale fino a 20 fatture + dichiarazione redditi + EFAT. Rinnovo annuale, prezzo bloccato 3 anni se scegli la formula triennale.",
    price: 449,
    originalPrice: 549,
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
