import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { news } from "@/lib/news";
import { NotiziarioPlayer } from "@/components/notiziario-player";
import { AggiornamentiArchivio } from "@/components/aggiornamenti-archivio";

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

export default function AggiornamentiFiscaliPage() {
  return (
    <>
      <SiteHeader current="aggiornamenti" />

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Aggiornamenti fiscali
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Le novità fiscali, spiegate semplici
          </h1>
          <p className="text-zinc-600 mb-8 leading-relaxed max-w-3xl">
            Scadenze, bonus e cambiamenti normativi che contano per privati, partite IVA
            e imprese. Aggiornamenti a cura del nostro team di dottori commercialisti.
          </p>

          <NotiziarioPlayer />

          {news.length === 0 ? (
            <p className="text-zinc-500">Nessun aggiornamento pubblicato al momento.</p>
          ) : (
            <AggiornamentiArchivio news={news} />
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
