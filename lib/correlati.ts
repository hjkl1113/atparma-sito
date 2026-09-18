import { news, type NewsItem } from "./news";
import { articoli, type Articolo } from "./articoli";

// Collegamenti interni delle pagine /aggiornamenti-fiscali/[slug]:
// «Leggi anche» (news affini) e il servizio dello studio pertinente.
// Tutto calcolato al build, senza dati da mantenere a mano: ogni news
// pubblicata dal motore Ratio riceve i suoi collegamenti in automatico.

const STOPWORDS = new Set(
  (
    "a ad al alla alle agli ai all anche che chi con cosa come da dal dalla dalle dei del della delle " +
    "dello degli di e ed entro fino gli il in la le lo nei nel nella nelle non o per piu più " +
    "quali quando se senza si sono su sul sulla sulle tra tutti tutte un una uno ecco nuovo nuova " +
    "nuovi nuove novita novità 2025 2026 2027 cambia cambiano arriva arrivano arrivo vale regole " +
    "anche dopo solo fare serve euro domande attenzione possibile scatta addio stop via occhio"
  ).split(" "),
);

function tokens(testoGrezzo: string): Set<string> {
  const testo = testoGrezzo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
  return new Set(
    testo
      .split(/[^a-z0-9]+/)
      .filter((t) => t.length > 2 && !STOPWORDS.has(t))
      // radice grezza: «forfettari»/«forfettario» e «detrazione»/«detrazioni» coincidono
      .map((t) => (t.length > 5 ? t.slice(0, t.length - 1) : t)),
  );
}

const TOKENS = new Map(news.map((n) => [n.slug, tokens(`${n.titolo} ${n.sommario}`)]));
const TOKENS_TITOLO = new Map(news.map((n) => [n.slug, tokens(n.titolo)]));

// Quante news contengono ciascuna parola: una parola rara («tfr», «isa»)
// lega due news più di una comune («bonus», «fisco»).
const DIFFUSIONE = new Map<string, number>();
for (const t of TOKENS.values()) for (const w of t) DIFFUSIONE.set(w, (DIFFUSIONE.get(w) ?? 0) + 1);

export function newsCorrelate(slug: string, quante = 3): NewsItem[] {
  const base = TOKENS.get(slug);
  const corrente = news.find((n) => n.slug === slug);
  if (!base || !corrente) return [];
  return news
    .filter((n) => n.slug !== slug)
    .map((n) => {
      const altri = TOKENS.get(n.slug)!;
      const titoloBase = TOKENS_TITOLO.get(slug)!;
      const titoloAltri = TOKENS_TITOLO.get(n.slug)!;
      let comuni = 0;
      for (const t of base) {
        if (!altri.has(t)) continue;
        comuni += (DIFFUSIONE.get(t) ?? 0) <= 4 ? 2 : 1;
        // la stessa parola in entrambi i titoli è il segnale più forte
        if (titoloBase.has(t) && titoloAltri.has(t)) comuni += 1;
      }
      const punteggio = comuni + (n.categoria === corrente.categoria ? 0.5 : 0);
      return { n, punteggio };
    })
    // almeno due parole comuni, o una rara: con una sola parola comune l'affinità è casuale
    .filter((x) => x.punteggio >= 2)
    // a parità di affinità vince la più recente (news è già ordinata per data)
    .sort((a, b) => b.punteggio - a.punteggio)
    .slice(0, quante)
    .map((x) => x.n);
}

// «Leggi anche»: prima le affini, poi le più recenti della stessa categoria.
export function leggiAnche(slug: string, quante = 3): NewsItem[] {
  const corrente = news.find((n) => n.slug === slug);
  if (!corrente) return [];
  const scelte = newsCorrelate(slug, quante);
  for (const n of news) {
    if (scelte.length >= quante) break;
    if (n.slug !== slug && n.categoria === corrente.categoria && !scelte.includes(n)) scelte.push(n);
  }
  return scelte;
}

export interface ServizioCollegato {
  href: string;
  titolo: string;
  testo: string;
}

const SERVIZI: Record<string, ServizioCollegato> = {
  quadroRw: {
    href: "/servizi/quadro-rw",
    titolo: "Quadro RW: conti, cripto e immobili esteri",
    testo: "Compiliamo il quadro RW e, se serve, il ravvedimento per gli anni passati.",
  },
  imu: {
    href: "/servizi/calcolo-imu",
    titolo: "Calcolo IMU professionale",
    testo: "Calcoliamo l'IMU dovuta e ti prepariamo gli F24 pronti da pagare.",
  },
  crisi: {
    href: "/servizi/crisi-di-impresa",
    titolo: "Crisi di impresa",
    testo: "Composizione negoziata, piani di risanamento e procedure concorsuali.",
  },
  artigiani: {
    href: "/servizi/artigiani-commercianti",
    titolo: "Artigiani e commercianti",
    testo: "Apertura della Partita IVA, contabilità e contributi IVS seguiti dallo studio.",
  },
  professionisti: {
    href: "/servizi/professionista",
    titolo: "Professionisti e forfettari",
    testo: "Apertura della Partita IVA, regime forfettario o semplificato, contabilità annuale.",
  },
  dichiarazioni: {
    href: "/servizi/dichiarazioni",
    titolo: "730 e dichiarazione dei redditi",
    testo: "Prepariamo e inviamo il 730 o il modello Redditi, con la verifica delle detrazioni.",
  },
  consulenza: {
    href: "/servizi/consulenza-fiscale",
    titolo: "Consulenza fiscale",
    testo: "Pianificazione fiscale, adempimenti e contenzioso per imprese e professionisti.",
  },
};

// Regole in ordine di priorità: vince la prima che trova riscontro nel testo.
const REGOLE: [RegExp, keyof typeof SERVIZI][] = [
  [/quadro rw|cripto(?!.*bilancio)|ivafe|ivie|monitoraggio fiscale|conti? ester/i, "quadroRw"],
  [/\bimu\b/i, "imu"],
  [/crisi d.impresa|composizione negoziata|concordato (semplificato|preventivo(?! biennale))|insolvenz|liquidazione giudiziale|esdebitazione/i, "crisi"],
  [/artigian|commerciant|\bivs\b/i, "artigiani"],
  [/forfettar|professionist|lavorator[ei] autonom|apertura (della )?partita iva/i, "professionisti"],
  [/\b730\b|detrazion[ei](?! iva)|familiari a carico|modello redditi|dichiarazione dei redditi|irpef/i, "dichiarazioni"],
];

const PER_CATEGORIA: Record<NewsItem["categoria"], keyof typeof SERVIZI> = {
  privati: "dichiarazioni",
  "partite-iva": "professionisti",
  imprese: "consulenza",
  generale: "consulenza",
};

export function servizioPerNews(n: NewsItem): ServizioCollegato {
  const testo = `${n.titolo} ${n.sommario}`;
  for (const [re, chiave] of REGOLE) if (re.test(testo)) return SERVIZI[chiave];
  return SERVIZI[PER_CATEGORIA[n.categoria]];
}

// Guida del blog da proporre sotto la news, per argomento. Vince la prima regola.
const GUIDE: [RegExp, string][] = [
  [/concordato preventivo biennale|\bcpb\b/i, "concordato-preventivo-biennale-2026-2027"],
  [/composizione negoziata/i, "composizione-negoziata-crisi-impresa-2026"],
  [/adeguati assetti/i, "adeguati-assetti-indici-crisi-2026"],
  [/sovraindebitamento|esdebitazione/i, "sovraindebitamento-2026-come-uscire-dai-debiti"],
  [/ravvediment\w+.*cripto|cripto\w*.*ravvediment/i, "ravvedimento-cripto-quadro-rw"],
  [/cripto(?!.*bilancio)|quadro rw/i, "cripto-quadro-rw-2026"],
  [/forfettar/i, "regime-forfettario-2026"],
  [/apertura (della )?partita iva|aprire (la )?partita iva/i, "aprire-partita-iva-online"],
  [/730 precompilato|precompilat/i, "730-precompilato-conviene"],
  [/\b730\b/i, "come-fare-730-online"],
];

export function guidaPerNews(n: NewsItem): Articolo | undefined {
  const testo = `${n.titolo} ${n.sommario}`;
  for (const [re, slug] of GUIDE) {
    if (re.test(testo)) return articoli.find((a) => a.slug === slug);
  }
  return undefined;
}
