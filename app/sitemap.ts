import type { MetadataRoute } from "next";
import { articoli } from "@/lib/articoli";
import { news } from "@/lib/news";
import { approfondimenti } from "@/lib/approfondimenti";
import { getAllProdotti } from "@/app/servizi/_data/prodotti";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.atparma.com";

  // Articoli del blog generati dinamicamente da lib/articoli.ts:
  // ogni nuovo articolo entra in sitemap automaticamente, senza disallineamenti.
  const blogArticoli: MetadataRoute.Sitemap = articoli.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    lastModified: new Date(a.data),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  // Aggiornamenti fiscali (news brevi) generati da lib/news.json:
  // ogni news pubblicata entra in sitemap in automatico.
  const newsPagine: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${baseUrl}/aggiornamenti-fiscali/${n.slug}`,
    lastModified: new Date(n.data),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Approfondimenti normativi (contenuti lunghi) da lib/approfondimenti.json.
  const approfondimentiPagine: MetadataRoute.Sitemap = approfondimenti.map((a) => ({
    url: `${baseUrl}/approfondimenti/${a.slug}`,
    lastModified: new Date(a.data),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Schede prodotto del catalogo servizi (app/servizi/_data/prodotti.ts):
  // sono le pagine d'acquisto, ogni nuovo prodotto entra in sitemap in automatico.
  const prodottiPagine: MetadataRoute.Sitemap = getAllProdotti().map((p) => ({
    url: `${baseUrl}/servizi/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Landing page statiche fuori dal catalogo. Le guide in /guide/ sono
  // volutamente escluse: sono stampabili per i clienti e hanno noindex.
  const landingPagine: MetadataRoute.Sitemap = [
    { path: "/servizi/quadro-rw", priority: 0.8 },
    { path: "/servizi/quadro-rw-ravvedimento", priority: 0.8 },
    { path: "/servizi/calcolo-imu", priority: 0.8 },
    { path: "/calendario-scadenze-fiscali", priority: 0.8 },
    { path: "/strumenti/preventivo-artigiano-commerciante", priority: 0.7 },
    { path: "/sicurezza", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servizi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servizi/dichiarazioni`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servizi/professionista`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servizi/artigiani-commercianti`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servizi/consulenza-fiscale`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servizi/crisi-di-impresa`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servizi/consulenza-finanziaria`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...prodottiPagine,
    ...landingPagine,
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...blogArticoli,
    {
      url: `${baseUrl}/aggiornamenti-fiscali`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...newsPagine,
    {
      url: `${baseUrl}/approfondimenti`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...approfondimentiPagine,
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/strumenti`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calcolatori/forfettario`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/strumenti/codice-fiscale`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/strumenti/buste-paga`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/strumenti/imu`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/strumenti/scadenze`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
