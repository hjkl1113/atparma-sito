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
    desc: "Apertura Partita IVA con iscrizione CCIAA, INPS artigiani/commercianti, SIA. Rimborsi spese e tributi pubblici separati.",
    price: 610,
    originalPrice: null,
    active: true,
    slug: "piva-artigiano-commerciante",
  },
  {
    id: "piva-art-forf",
    title: "Apertura P.IVA Artigiano/Commerciante forfettario + contabilità annuale",
    desc: "Bundle tutto incluso: apertura + CCIAA + SIA + INPS + 12 mesi contabilità forfettario + EFAT. Un solo mandato, rinnovo annuale, prezzo predicibile.",
    price: 1190,
    originalPrice: 1209,
    active: true,
    slug: "piva-artigiano-commerciante-forfettario",
  },
  {
    id: "piva-art-semp",
    title: "Apertura P.IVA Artigiano/Commerciante semplificato + contabilità annuale",
    desc: "Bundle apertura + CCIAA + SIA + INPS + 12 mesi contabilità semplificata/ordinaria con IVA periodica + EFAT. Per chi prevede ricavi oltre 85.000 euro o ha spese rilevanti da dedurre.",
    price: 1690,
    originalPrice: 1809,
    active: true,
    slug: "piva-artigiano-commerciante-semplificato",
  },
  {
    id: "cont-prof-forf",
    title: "Contabilita annuale P.IVA Professionista forfettario",
    desc: "Gestione contabile annuale per chi ha gia aperto P.IVA forfettaria e vuole cambiare commercialista. Fino a 20 fatture, redditi PF, EFAT inclusa. Rinnovo annuale.",
    price: 349,
    originalPrice: null,
    active: true,
    slug: "contabilita-professionista-forfettario",
  },
  {
    id: "cont-prof-semp",
    title: "Contabilita annuale P.IVA Professionista semplificata",
    desc: "Gestione contabile annuale con IVA periodica e redditi PF per chi ha gia P.IVA in regime semplificato o ordinario. EFAT inclusa. Rinnovo annuale.",
    price: 899,
    originalPrice: null,
    active: true,
    slug: "contabilita-professionista-semplificata",
  },
  {
    id: "cont-art-forf",
    title: "Contabilita annuale P.IVA Artigiano/Commerciante forfettario",
    desc: "Gestione contabile forfettaria + INPS artigiani/commercianti + adempimenti CCIAA annuali + redditi PF + EFAT. Per chi ha gia P.IVA attiva. Rinnovo annuale.",
    price: 599,
    originalPrice: null,
    active: true,
    slug: "contabilita-artigiano-forfettario",
  },
  {
    id: "cont-art-semp",
    title: "Contabilita annuale P.IVA Artigiano/Commerciante semplificata",
    desc: "Gestione contabile semplificata/ordinaria + IVA periodica + INPS artigiani + CCIAA + redditi PF + EFAT. Per chi ha gia P.IVA oltre 85.000 euro. Rinnovo annuale.",
    price: 1190,
    originalPrice: null,
    active: true,
    slug: "contabilita-artigiano-semplificata",
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
