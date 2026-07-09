import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { news, CATEGORIE_LABEL } from "@/lib/news";

export const metadata: Metadata = {
  title: "Aggiornamenti fiscali | A.T. Consulting Parma",
  description:
    "News e aggiornamenti fiscali per privati, partite IVA e imprese. Scadenze, bonus, novità normative spiegate in modo chiaro dallo studio A.T. Consulting Parma.",
  alternates: {
    canonical: "/aggiornamenti-fiscali",
  },
  openGraph: {
    title: "Aggiornamenti fiscali — A.T. Consulting Parma",
    description:
      "News e aggiornamenti fiscali per privati, partite IVA e imprese, spiegati in modo chiaro.",
    type: "website",
    url: "https://www.atparma.com/aggiornamenti-fiscali",
  },
};

function formatData(iso: string): string {
  const [y, m, d] = iso.split("-");
  const mesi = [
    "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
    "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
  ];
  const mi = parseInt(m, 10) - 1;
  return `${parseInt(d, 10)} ${mesi[mi] ?? m} ${y}`;
}

export default function AggiornamentiFiscaliPage() {
  return (
    <>
      <SiteHeader current="aggiornamenti" />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Aggiornamenti fiscali
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Le novità fiscali, spiegate semplici
          </h1>
          <p className="text-zinc-600 mb-12 leading-relaxed">
            Scadenze, bonus e cambiamenti normativi che contano per privati, partite IVA
            e imprese. Aggiornamenti a cura del nostro team di dottori commercialisti.
          </p>

          {news.length === 0 ? (
            <p className="text-zinc-500">Nessun aggiornamento pubblicato al momento.</p>
          ) : (
            <div className="space-y-4">
              {news.map((n) => (
                <Link
                  key={n.slug}
                  href={`/aggiornamenti-fiscali/${n.slug}`}
                  className="group block p-6 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-2 text-xs">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-medium">
                      {CATEGORIE_LABEL[n.categoria]}
                    </span>
                    <time dateTime={n.data} className="text-zinc-400">
                      {formatData(n.data)}
                    </time>
                  </div>
                  <h2 className="text-lg font-semibold tracking-tight mb-1 group-hover:text-[var(--color-accent)] transition-colors font-[family-name:var(--font-heading)]">
                    {n.titolo}
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">{n.sommario}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
