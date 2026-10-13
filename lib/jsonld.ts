/**
 * Helper per i dati strutturati schema.org.
 *
 * Perché un modulo condiviso: gli schemi erano scritti a mano dentro le singole
 * pagine, con il rischio che l'identità dello studio divergesse da una pagina
 * all'altra. Qui il provider è uno solo e le pagine passano solo ciò che le
 * distingue. Lo schema AccountingService completo (indirizzo, orari, geo) resta
 * nel layout: è il profilo dell'attività, dichiarato una volta sola per tutto il sito.
 */

const BASE_URL = "https://www.atparma.com";
const BRAND = "A.T. Consulting Parma";

/** Riferimento sintetico al provider, da annidare negli altri schemi. */
const provider = {
  "@type": "AccountingService",
  name: BRAND,
  url: BASE_URL,
} as const;

/** L'Italia: questi servizi si erogano online su tutto il territorio. */
const areaServed = { "@type": "Country", name: "IT" } as const;

/**
 * Le risposte delle FAQ nelle pagine contengono markup (<strong>, <Link>) perché
 * sono pensate per il render. schema.org vuole testo: qui si ripulisce, si
 * normalizzano le entità più comuni e si compattano gli spazi.
 */
function toPlainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export type Faq = { q: string; a: string };

/** FAQPage: candidabile a rich result, purché le domande siano visibili in pagina. */
export function faqPageJsonLd(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: toPlainText(f.q),
      acceptedAnswer: { "@type": "Answer", text: toPlainText(f.a) },
    })),
  };
}

/**
 * Service per le landing commerciali.
 *
 * `prezzoDa` va passato solo quando in pagina compare davvero quel prezzo: uno
 * structured data che promette una cifra diversa da quella mostrata è peggio
 * che non averlo. Quando il prezzo è un "a partire da" si usa AggregateOffer
 * con lowPrice, che è la forma corretta per una soglia minima.
 */
export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  prezzoDa?: number;
}) {
  const { name, description, path, serviceType, prezzoDa } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${path}`,
    provider,
    areaServed,
    ...(serviceType ? { serviceType } : {}),
    ...(prezzoDa !== undefined
      ? {
          offers: {
            "@type": "AggregateOffer",
            lowPrice: prezzoDa.toFixed(2),
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: `${BASE_URL}${path}`,
          },
        }
      : {}),
  };
}

/**
 * WebApplication per i calcolatori gratuiti.
 *
 * L'offerta a prezzo zero non è un vezzo: è il modo in cui schema.org dichiara
 * che lo strumento è utilizzabile senza pagare, e serve a distinguerlo dalle
 * pagine di servizio a pagamento.
 */
export function webAppJsonLd(opts: { name: string; description: string; path: string }) {
  const { name, description, path } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${BASE_URL}${path}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Qualsiasi browser",
    browserRequirements: "Richiede JavaScript",
    inLanguage: "it-IT",
    provider,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
  };
}

/**
 * CollectionPage con ItemList per le pagine indice (blog, approfondimenti, news).
 * Dice ai motori che la pagina è una raccolta e quale ordine hanno gli elementi,
 * invece di lasciarla interpretare come un contenuto singolo molto lungo.
 */
export function collectionJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  items: readonly { titolo: string; path: string }[];
}) {
  const { name, description, path, items } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${BASE_URL}${path}`,
    isPartOf: { "@type": "WebSite", name: BRAND, url: BASE_URL },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.titolo,
        url: `${BASE_URL}${it.path}`,
      })),
    },
  };
}

/** Markup pronto da inserire nel JSX, per non ripetere il dangerouslySetInnerHTML. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data) };
}
