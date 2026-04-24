import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getPrezzi } from "@/app/lib/prezzi";
import { getProdotto } from "@/app/servizi/_data/prodotti";
import { getMacroSezione, type MacroSezioneSlug } from "@/app/servizi/_data/macro-sezioni";
import {
  computeNetRounded,
  formatEur,
  getScontoAnticipato,
  isRateizzabile,
} from "@/app/lib/pricing-utils";
import { PaymentPolicyBox } from "@/app/servizi/_components/payment-policy-box";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type AreaProdotto = {
  slug: string;
  title: string;
  desc: string;
  price: number | null;
  priceFormat: "fisso" | "da" | "preventivo" | undefined;
};

function resolveAreaProdotti(sectionSlug: MacroSezioneSlug, prezzi: Awaited<ReturnType<typeof getPrezzi>>): AreaProdotto[] {
  const section = getMacroSezione(sectionSlug);
  if (!section) return [];

  const prodotti = section.productSlugs
    .map((slug) => {
      const prodotto = getProdotto(slug);
      const prezzo = prezzi.find((item) => item.slug === slug);

      if (!prodotto || !prezzo || !prezzo.active) return null;

      return {
        slug,
        title: prezzo.title,
        desc: prezzo.desc,
        price: prezzo.price,
        priceFormat: prodotto.priceFormat,
      };
    })
    .filter((item): item is AreaProdotto => item !== null);

  return prodotti;
}

export function buildMacroSezioneMetadata(sectionSlug: MacroSezioneSlug): Metadata {
  const section = getMacroSezione(sectionSlug);
  if (!section) return {};

  return {
    title: `${section.title} — Servizi online | A.T. Consulting Parma`,
    description: section.shortDescription,
    alternates: {
      canonical: `/servizi/${section.slug}`,
    },
  };
}

export async function MacroSezionePage({ sectionSlug }: { sectionSlug: MacroSezioneSlug }) {
  const section = getMacroSezione(sectionSlug);

  if (!section) {
    return null;
  }

  const prezzi = await getPrezzi();
  const prodotti = resolveAreaProdotti(sectionSlug, prezzi);

  return (
    <>
      <SiteHeader current="servizi" />

      <main className="pt-32 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/servizi"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tutti i servizi
          </Link>

          <section className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Servizi online per area
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 font-[family-name:var(--font-heading)]">
              {section.title}
            </h1>
            <p className="text-zinc-600 leading-relaxed text-lg max-w-3xl">{section.intro}</p>
          </section>

          <section className="grid lg:grid-cols-[1.2fr_1fr] gap-8 mb-16">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
              <h2 className="text-xl font-semibold mb-4 font-[family-name:var(--font-heading)]">
                Come orientarti
              </h2>
              <div className="space-y-4">
                {section.howToChoose.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-zinc-700 leading-relaxed">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-4 font-[family-name:var(--font-heading)]">
                Per chi e&apos;
              </h2>
              <ul className="space-y-3">
                {section.audience.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-zinc-700 leading-relaxed">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {section.tool && (
            <section className="mb-16 rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-8">
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
                Strumento utile prima di scegliere
              </p>
              <h2 className="text-2xl font-bold tracking-tight mb-3 font-[family-name:var(--font-heading)]">
                {section.tool.label}
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">
                {section.tool.description}
              </p>
              <Link
                href={section.tool.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[var(--color-accent-dark)] transition-colors"
              >
                Vai allo strumento
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </section>
          )}

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
              Servizi disponibili in questa area
            </h2>
            <p className="text-zinc-600 max-w-2xl mb-8 leading-relaxed">
              Parti dall&apos;area giusta, poi entra nella scheda prodotto piu&apos; adatta al tuo caso. La scheda prodotto resta il punto corretto per dettagli, documenti e attivazione del percorso nel portale.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {prodotti.map((item) => {
                const netRounded = item.price !== null ? computeNetRounded(item.price) : null;
                const rate = item.price !== null && isRateizzabile(item.price);
                const sconto = item.price !== null ? getScontoAnticipato(item.price) : null;
                return (
                  <Link
                    key={item.slug}
                    href={`/servizi/${item.slug}`}
                    className="block h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md"
                  >
                    <h3 className="font-semibold mb-2 font-[family-name:var(--font-heading)]">{item.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-4 min-h-[4.5rem]">{item.desc}</p>
                    <div className="mb-3">
                      {item.price === null ? (
                        <span className="text-sm font-medium text-zinc-500">A preventivo</span>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                              {item.priceFormat === "da" ? "da " : ""}
                              {formatEur(item.price)}
                            </span>
                            <span className="text-[11px] text-zinc-500">IVA inclusa</span>
                          </div>
                          {netRounded !== null && (
                            <p className="text-xs text-zinc-500 mt-0.5">
                              {netRounded}€ + IVA 22%
                            </p>
                          )}
                        </>
                      )}
                    </div>
                    {(rate || sconto) && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {rate && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-full">
                            Rate 30% + 3 trimestri
                          </span>
                        )}
                        {sconto && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                            -{sconto.pct}% pagamento anticipato
                          </span>
                        )}
                      </div>
                    )}
                    <div className="flex items-end justify-end">
                      <span className="text-xs text-[var(--color-accent)] font-medium inline-flex items-center gap-1">
                        Apri scheda <span aria-hidden>&rarr;</span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <PaymentPolicyBox className="mt-10" />
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
