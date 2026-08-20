import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  approfondimenti,
  raggruppaPerAnno,
  TIPO_LABEL,
  DESTINATARIO_LABEL,
} from "@/lib/approfondimenti";
import { SezioniSwitcher } from "@/components/sezioni-switcher";
import { formatDataEstesa } from "@/lib/format-data";

export const metadata: Metadata = {
  title: "Approfondimenti normativi | A.T. Consulting Parma",
  description:
    "Decreti, riforme e circolari spiegati per intero: cosa cambia, per chi e da quando. Approfondimenti a cura dei dottori commercialisti di A.T. Consulting Parma.",
  alternates: { canonical: "/approfondimenti" },
  openGraph: {
    title: "Approfondimenti normativi — A.T. Consulting Parma",
    description:
      "Decreti, riforme e circolari spiegati per intero: cosa cambia, per chi e da quando.",
    type: "website",
    url: "https://www.atparma.com/approfondimenti",
  },
};

export default function ApprofondimentiPage() {
  const anni = raggruppaPerAnno();

  return (
    <>
      <SiteHeader current="approfondimenti" />

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Approfondimenti
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Le novità normative, per intero
          </h1>
          <p className="text-zinc-600 mb-8 leading-relaxed max-w-3xl">
            Quando un decreto cambia più cose insieme, una notizia breve non basta. Qui
            trovi il provvedimento spiegato articolo per articolo: cosa cambia, chi
            riguarda e da quando si applica.
          </p>

          <SezioniSwitcher current="approfondimenti" />

          {approfondimenti.length === 0 ? (
            <p className="text-zinc-500 mt-10">
              Nessun approfondimento pubblicato al momento.
            </p>
          ) : (
            <div className="mt-10 space-y-12">
              {anni.map((gruppo) => (
                <section key={gruppo.anno}>
                  <h2 className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-medium mb-4">
                    {gruppo.anno}
                  </h2>
                  <ul className="space-y-4">
                    {gruppo.items.map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/approfondimenti/${a.slug}`}
                          className="block p-6 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-sm transition-all bg-white"
                        >
                          <div className="flex flex-wrap items-center gap-3 mb-3 text-xs">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                              {TIPO_LABEL[a.tipo]}
                            </span>
                            {a.riferimento ? (
                              <span className="text-zinc-500 font-medium">
                                {a.riferimento}
                              </span>
                            ) : null}
                            <time dateTime={a.data} className="text-zinc-400">
                              {formatDataEstesa(a.data)}
                            </time>
                          </div>
                          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2 font-[family-name:var(--font-heading)]">
                            {a.titolo}
                          </h3>
                          <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                            {a.sommario}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                            <span>{a.sezioni.length} temi trattati</span>
                            {a.destinatari.length > 0 ? (
                              <>
                                <span aria-hidden>·</span>
                                <span>
                                  {a.destinatari
                                    .map((d) => DESTINATARIO_LABEL[d])
                                    .join(", ")}
                                </span>
                              </>
                            ) : null}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
