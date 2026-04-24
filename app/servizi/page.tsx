import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getPrezzi } from "@/app/lib/prezzi";
import { getProdotto } from "@/app/servizi/_data/prodotti";
import { CONSULENZE_SPECIALISTICHE, getAllMacroSezioni } from "@/app/servizi/_data/macro-sezioni";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Servizi — Commercialista online Parma | A.T. Consulting Parma",
  description:
    "Consulenza fiscale, 730 online, apertura Partita IVA, crisi di impresa e consulenza finanziaria. Commercialista online a Parma per imprese e professionisti.",
  alternates: {
    canonical: "/servizi",
  },
};

export default async function ServiziPage() {
  const prezzi = await getPrezzi();
  const macroSezioni = getAllMacroSezioni();

  return (
    <>
      <SiteHeader current="servizi" />

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            I nostri servizi
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Servizi online e aree di specializzazione
          </h1>
          <p className="text-zinc-600 max-w-2xl mb-16 leading-relaxed">
            Parti dall&apos;area giusta, poi scegli la scheda prodotto piu&apos; adatta al tuo caso.
            Le schede prodotto restano il punto corretto per documenti, dettagli e attivazione del percorso nel portale.
          </p>

          <section className="mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
              Servizi online per area
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4 font-[family-name:var(--font-heading)]">
              Scegli il percorso giusto
            </h2>
            <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              Abbiamo raggruppato i servizi in 3 aree per aiutarti a capire prima il percorso, poi il prodotto piu&apos; adatto.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {macroSezioni.map((section) => (
                <Link
                  key={section.slug}
                  href={`/servizi/${section.slug}`}
                  className="block rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-heading)]">
                    {section.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-5">
                    {section.shortDescription}
                  </p>
                  <span className="text-xs text-[var(--color-accent)] font-medium inline-flex items-center gap-1">
                    Apri area <span aria-hidden>&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <div className="space-y-16 mb-20">
            {macroSezioni.map((section) => (
              <section key={section.slug} className="scroll-mt-24" id={section.slug}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-2">
                      Macro-area
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
                      {section.title}
                    </h2>
                  </div>
                  <Link
                    href={`/servizi/${section.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm hover:underline"
                  >
                    Vai alla landing di area
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <p className="text-zinc-600 text-sm mb-8 max-w-3xl leading-relaxed">
                  {section.shortDescription}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.productSlugs.map((slug) => {
                    const p = prezzi.find((item) => item.slug === slug && item.active);
                    const prodotto = getProdotto(slug);

                    if (!p || !prodotto) return null;

                    return (
                      <Link key={slug} href={`/servizi/${slug}`} className="block">
                        <div className="h-full bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col hover:border-zinc-300 hover:shadow-md transition-all">
                          <h3 className="font-semibold mb-2 font-[family-name:var(--font-heading)]">
                            {p.title}
                          </h3>
                          <p className="text-zinc-600 text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                              {p.price !== null ? (
                                <>
                                  {prodotto.priceFormat === "da" && (
                                    <span className="mr-1 text-xs font-normal text-zinc-500">da</span>
                                  )}
                                  €{p.price}
                                  <span className="ml-1 text-xs font-normal text-zinc-500">IVA incl.</span>
                                </>
                              ) : (
                                "A preventivo"
                              )}
                            </span>
                            <span className="text-xs text-[var(--color-accent)] font-medium inline-flex items-center gap-1">
                              Scopri <span aria-hidden>&rarr;</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <section id="consulenze-specialistiche">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 font-[family-name:var(--font-heading)]">
              Consulenze specialistiche su misura
            </h2>
            <p className="text-zinc-600 text-sm mb-10 max-w-2xl">
              Percorsi complessi, operazioni straordinarie e incarichi professionali che non vanno compressi in una scheda standard. Qui il punto di arrivo e&apos; la consulenza dedicata.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {CONSULENZE_SPECIALISTICHE.map((item) => (
                <div
                  key={item.slug}
                  className="p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm mb-4">{item.desc}</p>
                  <Link
                    href={`/servizi/${item.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm hover:underline"
                  >
                    Scopri di più
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 text-center">
            <Link
              href="/contatti"
              className="inline-block px-8 py-4 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
            >
              Richiedi una consulenza
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
