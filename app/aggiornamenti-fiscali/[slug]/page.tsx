import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { news, getNews, CATEGORIE_LABEL } from "@/lib/news";
import { approfondimentiPerNews } from "@/lib/approfondimenti";

const BASE = "https://www.atparma.com";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) return { title: "Aggiornamento non trovato | A.T. Consulting Parma" };
  const url = `${BASE}/aggiornamenti-fiscali/${n.slug}`;
  return {
    title: `${n.titolo} | A.T. Consulting Parma`,
    description: n.sommario,
    alternates: { canonical: `/aggiornamenti-fiscali/${n.slug}` },
    openGraph: {
      title: n.titolo,
      description: n.sommario,
      type: "article",
      url,
      publishedTime: `${n.data}T00:00:00Z`,
      authors: ["A.T. Consulting Parma"],
    },
  };
}

function formatData(iso: string): string {
  const [y, m, d] = iso.split("-");
  const mesi = [
    "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
    "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
  ];
  return `${parseInt(d, 10)} ${mesi[parseInt(m, 10) - 1] ?? m} ${y}`;
}

export default async function AggiornamentoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) notFound();

  const approfondimenti = approfondimentiPerNews(n.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: n.titolo,
    description: n.sommario,
    datePublished: n.data,
    dateModified: n.data,
    author: { "@type": "Organization", name: "A.T. Consulting Parma", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "A.T. Consulting Parma",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/images/parma-duomo-aerial.jpg` },
    },
    mainEntityOfPage: `${BASE}/aggiornamenti-fiscali/${n.slug}`,
  };

  return (
    <>
      <SiteHeader current="aggiornamenti" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link
            href="/aggiornamenti-fiscali"
            className="text-sm text-[var(--color-accent)] hover:underline mb-8 inline-block"
          >
            ← Tutti gli aggiornamenti
          </Link>

          <div className="flex items-center gap-3 mb-4 text-xs">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-medium">
              {CATEGORIE_LABEL[n.categoria]}
            </span>
            <time dateTime={n.data} className="text-zinc-400">
              {formatData(n.data)}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            {n.titolo}
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed mb-10">{n.sommario}</p>

          <div
            className="text-zinc-700 leading-relaxed
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-zinc-900 [&>h2]:font-[family-name:var(--font-heading)]
              [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-zinc-900
              [&>p]:mb-5
              [&>ul]:mb-5 [&>ul]:pl-5 [&>ul]:list-disc [&>ul>li]:mb-2 [&>ul>li]:pl-1
              [&>ol]:mb-5 [&>ol]:pl-5 [&>ol]:list-decimal [&>ol>li]:mb-2 [&>ol>li]:pl-1
              [&_strong]:font-semibold [&_strong]:text-zinc-900"
            dangerouslySetInnerHTML={{ __html: n.corpoHtml }}
          />

          {n.fonteNormativa ? (
            <p className="mt-10 pt-6 border-t border-zinc-100 text-xs text-zinc-400">
              Riferimenti normativi: {n.fonteNormativa}
            </p>
          ) : null}

          {approfondimenti.length > 0 ? (
            <div className="mt-10 p-6 rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5">
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-2">
                Approfondimento
              </p>
              <ul className="space-y-2">
                {approfondimenti.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/approfondimenti/${a.slug}`}
                      className="text-sm font-medium text-zinc-900 hover:underline"
                    >
                      {a.titolo} →
                    </Link>
                    <p className="text-sm text-zinc-600 mt-1">{a.sommario}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-10 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
            <p className="text-sm text-zinc-600 mb-3">
              Hai un dubbio sulla tua situazione fiscale? Il nostro studio è a Parma e
              segue clienti in tutta Italia.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center text-sm font-medium text-[var(--color-accent)] hover:underline"
            >
              Richiedi una consulenza →
            </Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
