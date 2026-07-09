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
