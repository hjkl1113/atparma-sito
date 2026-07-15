import newsData from "./news.json";

// Aggiornamenti fiscali brevi (sezione /aggiornamenti-fiscali).
// I dati vivono in news.json e vengono aggiunti dal motore Ratio
// (scripts/ratio/publish.py) dopo la tua approvazione. Ogni voce è
// una news originale riscritta — mai testo di terzi verbatim.

export type CategoriaNews = "privati" | "partite-iva" | "imprese" | "generale";

export interface NewsItem {
  slug: string;
  titolo: string;
  sommario: string;
  data: string; // ISO YYYY-MM-DD
  categoria: CategoriaNews;
  fonteNormativa?: string;
  corpoHtml: string;
}

export const CATEGORIE_LABEL: Record<CategoriaNews, string> = {
  privati: "Privati",
  "partite-iva": "Partite IVA",
  imprese: "Imprese",
  generale: "Fisco",
};

// Ordinate dalla più recente alla più vecchia.
export const news: NewsItem[] = ([...(newsData as NewsItem[])]).sort(
  (a, b) => b.data.localeCompare(a.data),
);

export function getNews(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}

// ---------------------------------------------------------------------------
// Archivio Anno › Mese › Settimana (per il menu laterale di navigazione).
// ---------------------------------------------------------------------------

const MESI = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
];
const MESI_ABBR = [
  "gen", "feb", "mar", "apr", "mag", "giu",
  "lug", "ago", "set", "ott", "nov", "dic",
];

export interface SettimanaGroup {
  key: string; // ISO del lunedì della settimana
  label: string; // es. "13–19 lug"
  items: NewsItem[];
}
export interface MeseGroup {
  key: string; // "YYYY-MM"
  label: string; // es. "Luglio"
  count: number;
  settimane: SettimanaGroup[];
}
export interface AnnoGroup {
  anno: string; // "YYYY"
  count: number;
  mesi: MeseGroup[];
}

/** ISO (YYYY-MM-DD) del lunedì della settimana che contiene la data. */
function lunediDi(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  const dow = dt.getUTCDay(); // 0=dom .. 6=sab
  dt.setUTCDate(dt.getUTCDate() + (dow === 0 ? -6 : 1 - dow));
  return dt.toISOString().slice(0, 10);
}

/** Etichetta "13–19 lug" (o "29 giu–5 lug" se la settimana è a cavallo). */
function etichettaSettimana(lunediIso: string): string {
  const [y, m, d] = lunediIso.split("-").map(Number);
  const lun = new Date(Date.UTC(y, m - 1, d));
  const dom = new Date(lun);
  dom.setUTCDate(lun.getUTCDate() + 6);
  const gg = (dt: Date) => dt.getUTCDate();
  const mm = (dt: Date) => MESI_ABBR[dt.getUTCMonth()];
  return lun.getUTCMonth() === dom.getUTCMonth()
    ? `${gg(lun)}–${gg(dom)} ${mm(dom)}`
    : `${gg(lun)} ${mm(lun)}–${gg(dom)} ${mm(dom)}`;
}

/** Costruisce l'albero Anno › Mese › Settimana dalle news (più recenti prima). */
export function buildArchivio(items: NewsItem[] = news): AnnoGroup[] {
  const ordinate = [...items].sort((a, b) => b.data.localeCompare(a.data));
  const anni = new Map<string, Map<string, Map<string, NewsItem[]>>>();

  for (const n of ordinate) {
    const anno = n.data.slice(0, 4);
    const mese = n.data.slice(0, 7); // YYYY-MM
    const sett = lunediDi(n.data);
    if (!anni.has(anno)) anni.set(anno, new Map());
    const mesi = anni.get(anno)!;
    if (!mesi.has(mese)) mesi.set(mese, new Map());
    const settimane = mesi.get(mese)!;
    if (!settimane.has(sett)) settimane.set(sett, []);
    settimane.get(sett)!.push(n);
  }

  return [...anni.entries()].map(([anno, mesi]) => {
    const mesiGroup: MeseGroup[] = [...mesi.entries()].map(([mese, settimane]) => {
      const settGroup: SettimanaGroup[] = [...settimane.entries()].map(
        ([key, items]) => ({ key, label: etichettaSettimana(key), items }),
      );
      const count = settGroup.reduce((s, w) => s + w.items.length, 0);
      const mi = parseInt(mese.slice(5, 7), 10) - 1;
      return { key: mese, label: MESI[mi] ?? mese, count, settimane: settGroup };
    });
    const count = mesiGroup.reduce((s, m) => s + m.count, 0);
    return { anno, count, mesi: mesiGroup };
  });
}
