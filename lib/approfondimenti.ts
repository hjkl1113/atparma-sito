import approfondimentiData from "./approfondimenti.json";

// Approfondimenti normativi (sezione /approfondimenti).
// Sono i contenuti "lunghi": una circolare speciale, un decreto, una riforma —
// spiegati per intero in una pagina sola. Vivono in approfondimenti.json e
// vengono aggiunti dal motore Ratio (scripts/ratio/circolare.py) dopo la tua
// approvazione. Il testo è SEMPRE riscritto in modo originale: si citano le
// norme reali (D.Lgs., art., G.U.), mai la fonte editoriale, mai testo verbatim.

export type TipoApprofondimento = "circolare-speciale" | "guida-normativa";

export type Destinatario = "privati" | "partite-iva" | "imprese" | "enti-non-profit";

export interface SezioneApprofondimento {
  id: string; // ancora #id per l'indice interno
  titolo: string;
  corpoHtml: string;
  chiRiguarda?: Destinatario[];
  decorrenza?: string; // testo libero: "dal 12.08.2026", "periodo d'imposta 2026"
  riferimento?: string; // "Art. 12 D.Lgs. 148/2026"
}

export interface Approfondimento {
  slug: string;
  titolo: string;
  sommario: string;
  data: string; // ISO YYYY-MM-DD
  tipo: TipoApprofondimento;
  riferimento?: string; // "D.Lgs. 7.08.2026 n. 148"
  inVigoreDal?: string; // ISO
  destinatari: Destinatario[];
  intro?: string; // paragrafo di apertura, HTML
  sezioni: SezioneApprofondimento[];
  fonteNormativa?: string;
  newsCollegate?: string[]; // slug di lib/news.json
}

export const TIPO_LABEL: Record<TipoApprofondimento, string> = {
  "circolare-speciale": "Circolare speciale",
  "guida-normativa": "Guida normativa",
};

export const DESTINATARIO_LABEL: Record<Destinatario, string> = {
  privati: "Privati",
  "partite-iva": "Partite IVA",
  imprese: "Imprese",
  "enti-non-profit": "Enti e non profit",
};

// Ordinati dal più recente al più vecchio.
export const approfondimenti: Approfondimento[] = ([
  ...(approfondimentiData as Approfondimento[]),
]).sort((a, b) => b.data.localeCompare(a.data));

export function getApprofondimento(slug: string): Approfondimento | undefined {
  return approfondimenti.find((a) => a.slug === slug);
}

// Approfondimenti che citano una determinata news (per il link inverso).
export function approfondimentiPerNews(newsSlug: string): Approfondimento[] {
  return approfondimenti.filter((a) => a.newsCollegate?.includes(newsSlug));
}

export interface AnnoApprofondimenti {
  anno: string;
  items: Approfondimento[];
}

export function raggruppaPerAnno(
  items: Approfondimento[] = approfondimenti,
): AnnoApprofondimenti[] {
  const mappa = new Map<string, Approfondimento[]>();
  for (const a of items) {
    const anno = a.data.slice(0, 4);
    const arr = mappa.get(anno) ?? [];
    arr.push(a);
    mappa.set(anno, arr);
  }
  return [...mappa.entries()]
    .sort((x, y) => y[0].localeCompare(x[0]))
    .map(([anno, items]) => ({ anno, items }));
}
