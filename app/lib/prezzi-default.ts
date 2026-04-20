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
    title: "Apertura P.IVA Professionista forfettario + contabilita annuale",
    desc: "Apertura P.IVA forfettario + contabilita annuale fino a 20 fatture + dichiarazione redditi + EFAT. Rinnovo annuale, prezzo bloccato 3 anni se scegli la formula triennale.",
    price: 449,
    originalPrice: 549,
    active: true,
    slug: "piva-professionista",
  },
  {
    id: "piva-prof-semp",
    title: "Apertura P.IVA Professionista semplificata + contabilita annuale",
    desc: "Apertura P.IVA regime semplificato/ordinario + contabilita annuale + IVA periodica + dichiarazione redditi + EFAT. Per professionisti con ricavi attesi oltre 85.000 euro o con spese rilevanti da portare in deduzione.",
    price: 1099,
    originalPrice: null,
    active: true,
    slug: "piva-professionista-semplificato",
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
    id: "piva-art-forf",
    title: "Apertura P.IVA Artigiano/Commerciante forfettario + contabilità annuale",
    desc: "Bundle tutto incluso: apertura + CCIAA + SIA + INPS + 12 mesi contabilità forfettario + EFAT. Rinnovo annuale con sconto rispetto all'acquisto separato.",
    price: 1190,
    originalPrice: 1289,
    active: true,
    slug: "piva-artigiano-commerciante-forfettario",
  },
  {
    id: "piva-art-semp",
    title: "Apertura P.IVA Artigiano/Commerciante semplificato + contabilità annuale",
    desc: "Bundle apertura + CCIAA + SIA + INPS + 12 mesi contabilità semplificata/ordinaria con IVA periodica + EFAT. Per chi prevede ricavi oltre 85.000 euro o ha spese rilevanti da dedurre.",
    price: 1690,
    originalPrice: 1889,
    active: true,
    slug: "piva-artigiano-commerciante-semplificato",
  },
  {
    // ARCHIVIATO 2026-04-21: sostituito dal bundle piva-prof (apertura + contabilità annuale).
    // Lasciato con active:false per storico. Redirect 301 configurato in next.config.ts.
    id: "piva-forf",
    title: "P.IVA Forfettario",
    desc: "Apertura Partita IVA forfettaria con caricamento documenti tramite portale clienti.",
    price: 690,
    originalPrice: null,
    active: false,
    slug: "piva-forfettario",
  },
  {
    // ARCHIVIATO 2026-04-21: sostituito dal bundle piva-prof (apertura + contabilità annuale + EFAT).
    // Lasciato con active:false per storico. Redirect 301 configurato in next.config.ts.
    id: "piva-forf-gis",
    title: "P.IVA Forfettario + EFAT",
    desc: "Apertura + fatturazione elettronica GIS Ranocchi EFAT inclusa per un anno.",
    price: 750,
    originalPrice: null,
    active: false,
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
