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

          <section
            id="consulenze-specialistiche"
            className="scroll-mt-24 rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white p-8 sm:p-12"
          >
            <div className="max-w-2xl mb-12">
              <p className="text-xs tracking-[0.25em] uppercase text-white/50 font-medium mb-3">
                Consulenza specialistica
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
                Quando il caso non sta in una scheda
              </h2>
              <p className="text-white/70 leading-relaxed">
                Percorsi complessi, operazioni straordinarie e incarichi professionali
                che non vanno compressi in una scheda standard. Qui non c&apos;è un
                carrello: ogni mandato parte da una valutazione riservata, costruita
                sul caso specifico.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {CONSULENZE_SPECIALISTICHE.map((item) => (
                <Link
                  key={item.slug}
                  href={`/servizi/${item.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-sm flex-1 mb-6">{item.desc}</p>
                  <span className="text-sm font-medium text-white inline-flex items-center gap-2">
                    Richiedi una valutazione
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/contatti?ref=consulenza-specialistica"
                className="inline-block px-7 py-3.5 bg-white text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-100 transition-colors"
              >
                Prenota una valutazione riservata
              </Link>
              <p className="text-white/50 text-sm">
                Risposta entro 24 ore lavorative · Riservatezza garantita
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
