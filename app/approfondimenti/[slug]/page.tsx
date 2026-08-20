import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  approfondimenti,
  getApprofondimento,
  TIPO_LABEL,
  DESTINATARIO_LABEL,
} from "@/lib/approfondimenti";
import { getNews } from "@/lib/news";
import { formatDataEstesa } from "@/lib/format-data";

const BASE = "https://www.atparma.com";

export function generateStaticParams() {
  return approfondimenti.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getApprofondimento(slug);
  if (!a) return { title: "Approfondimento non trovato | A.T. Consulting Parma" };
  return {
    title: `${a.titolo} | A.T. Consulting Parma`,
    description: a.sommario,
    alternates: { canonical: `/approfondimenti/${a.slug}` },
    openGraph: {
      title: a.titolo,
      description: a.sommario,
      type: "article",
      url: `${BASE}/approfondimenti/${a.slug}`,
      publishedTime: `${a.data}T00:00:00Z`,
      authors: ["A.T. Consulting Parma"],
    },
  };
}

const PROSE =
  "text-zinc-700 leading-relaxed " +
  "[&>p]:mb-4 " +
  "[&>ul]:mb-4 [&>ul]:pl-5 [&>ul]:list-disc [&>ul>li]:mb-2 [&>ul>li]:pl-1 " +
  "[&>ol]:mb-4 [&>ol]:pl-5 [&>ol]:list-decimal [&>ol>li]:mb-2 [&>ol>li]:pl-1 " +
  "[&_strong]:font-semibold [&_strong]:text-zinc-900 " +
  "[&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-2 [&>h3]:text-zinc-900";

export default async function ApprofondimentoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getApprofondimento(slug);
  if (!a) notFound();

  const collegate = (a.newsCollegate ?? [])
    .map((s) => getNews(s))
    .filter((n): n is NonNullable<typeof n> => Boolean(n));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.titolo,
    description: a.sommario,
    datePublished: a.data,
    dateModified: a.data,
    articleSection: TIPO_LABEL[a.tipo],
    author: { "@type": "Organization", name: "A.T. Consulting Parma", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "A.T. Consulting Parma",
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/images/parma-duomo-aerial.jpg`,
      },
    },
    mainEntityOfPage: `${BASE}/approfondimenti/${a.slug}`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Approfondimenti",
        item: `${BASE}/approfondimenti`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: a.titolo,
        item: `${BASE}/approfondimenti/${a.slug}`,
      },
    ],
  };

  return (
    <>
      <SiteHeader current="approfondimenti" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/approfondimenti"
            className="text-sm text-[var(--color-accent)] hover:underline mb-8 inline-block"
          >
            ← Tutti gli approfondimenti
          </Link>

          <header className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                {TIPO_LABEL[a.tipo]}
              </span>
              <time dateTime={a.data} className="text-zinc-400">
                {formatDataEstesa(a.data)}
              </time>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
              {a.titolo}
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">{a.sommario}</p>

            {a.riferimento || a.inVigoreDal || a.destinatari.length > 0 ? (
              <dl className="grid sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-100 text-sm mb-4">
                {a.riferimento ? (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-zinc-400 mb-1">
                      Provvedimento
                    </dt>
                    <dd className="text-zinc-800 font-medium">{a.riferimento}</dd>
                  </div>
                ) : null}
                {a.inVigoreDal ? (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-zinc-400 mb-1">
                      In vigore dal
                    </dt>
                    <dd className="text-zinc-800 font-medium">
                      {formatDataEstesa(a.inVigoreDal)}
                    </dd>
                  </div>
                ) : null}
                {a.destinatari.length > 0 ? (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-zinc-400 mb-1">
                      Interessa
                    </dt>
                    <dd className="text-zinc-800 font-medium">
                      {a.destinatari.map((d) => DESTINATARIO_LABEL[d]).join(", ")}
                    </dd>
                  </div>
                ) : null}
              </dl>
            ) : null}

            {a.intro ? (
              <div className={PROSE} dangerouslySetInnerHTML={{ __html: a.intro }} />
            ) : null}
          </header>

          <div className="mt-12 grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12">
            <article className="max-w-3xl order-2 lg:order-1">
              {a.sezioni.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28 mb-10 pb-10 border-b border-zinc-100 last:border-0"
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-medium mb-2">
                    {String(i + 1).padStart(2, "0")}
                    {s.riferimento ? ` · ${s.riferimento}` : ""}
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-4 font-[family-name:var(--font-heading)]">
                    {s.titolo}
                  </h2>

                  <div
                    className={PROSE}
                    dangerouslySetInnerHTML={{ __html: s.corpoHtml }}
                  />

                  {s.decorrenza || (s.chiRiguarda && s.chiRiguarda.length > 0) ? (
                    <div className="mt-5 flex flex-wrap gap-2 text-xs">
                      {s.decorrenza ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-100">
                          Decorrenza: {s.decorrenza}
                        </span>
                      ) : null}
                      {(s.chiRiguarda ?? []).map((d) => (
                        <span
                          key={d}
                          className="inline-flex items-center px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700"
                        >
                          {DESTINATARIO_LABEL[d]}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}

              {a.fonteNormativa ? (
                <p className="mt-4 pt-6 border-t border-zinc-100 text-xs text-zinc-400">
                  Riferimenti normativi: {a.fonteNormativa}
                </p>
              ) : null}

              {collegate.length > 0 ? (
                <div className="mt-10">
                  <h2 className="text-sm font-semibold text-zinc-900 mb-3">
                    News collegate
                  </h2>
                  <ul className="space-y-2">
                    {collegate.map((n) => (
                      <li key={n.slug}>
                        <Link
                          href={`/aggiornamenti-fiscali/${n.slug}`}
                          className="text-sm text-[var(--color-accent)] hover:underline"
                        >
                          {n.titolo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-10 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                <p className="text-sm text-zinc-600 mb-3">
                  Vuoi sapere che effetto ha questo provvedimento sulla tua situazione?
                  Il nostro studio è a Parma e segue clienti in tutta Italia.
                </p>
                <Link
                  href="/contatti"
                  className="inline-flex items-center text-sm font-medium text-[var(--color-accent)] hover:underline"
                >
                  Richiedi una consulenza →
                </Link>
              </div>
            </article>

            <aside className="order-1 lg:order-2 mb-10 lg:mb-0">
              <nav
                aria-label="Indice dell'approfondimento"
                className="lg:sticky lg:top-28 p-5 rounded-2xl border border-zinc-100 bg-white"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-medium mb-3">
                  In questa pagina
                </p>
                <ol className="space-y-2 text-sm">
                  {a.sezioni.map((s, i) => (
                    <li key={s.id} className="flex gap-2">
                      <span className="text-zinc-300 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <a
                        href={`#${s.id}`}
                        className="text-zinc-600 hover:text-[var(--color-accent)] transition-colors leading-snug"
                      >
                        {s.titolo}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
