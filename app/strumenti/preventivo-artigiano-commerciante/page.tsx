import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PreventivoWizard } from "./wizard";

export const metadata: Metadata = {
  title: "Preventivo apertura P.IVA artigiano o commerciante | A.T. Consulting Parma",
  description:
    "Calcola in 2 minuti il preventivo indicativo per aprire P.IVA artigiano o commerciante in Italia nel 2026. Onorario studio + tributi e diritti pubblici (CCIAA, SIA, SCIA, USL). Stima trasparente, offerta puntuale via mandato.",
  alternates: { canonical: "/strumenti/preventivo-artigiano-commerciante" },
  openGraph: {
    title: "Quanto costa aprire P.IVA artigiano o commerciante nel 2026",
    description:
      "Preventivo indicativo onorario + tributi e diritti pubblici (CCIAA, bolli, SIA, SCIA, USL). Trasparenza totale, offerta puntuale via mandato digitale.",
    url: "https://www.atparma.com/strumenti/preventivo-artigiano-commerciante",
    type: "website",
  },
};

export default function PreventivoArtigianoPage() {
  return (
    <>
      <SiteHeader current="strumenti" />

      <main className="pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Strumento gratuito
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
              Quanto costa davvero aprire P.IVA artigiano o commerciante
            </h1>
            <p className="text-zinc-600 leading-relaxed text-lg">
              In 5 step calcoli il preventivo indicativo per l&apos;apertura: onorario
              A.T. Consulting Parma + <strong>tributi e diritti pubblici</strong>{" "}
              (CCIAA, bolli ComUnica, SIA camerale, SCIA comunale se applicabile,
              USL/HACCP per attività alimentari). Gli importi esatti saranno
              indicati in sede di invio della bozza di mandato.
            </p>
          </div>

          <PreventivoWizard />

          <div className="mt-10 text-xs text-zinc-500 space-y-1">
            <p>
              <strong>Cosa è questo strumento:</strong> una stima indicativa
              basata su dati pubblici 2026 (decreti MISE, circolari INPS,
              tabelle CCIAA). Non è un&apos;offerta contrattuale.
            </p>
            <p>
              <strong>Cosa ricevi se completi il form:</strong> preventivo
              via email + contatto diretto entro 24 ore lavorative per l&apos;offerta
              puntuale e la firma del mandato professionale.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
