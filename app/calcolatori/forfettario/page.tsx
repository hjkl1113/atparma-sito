import type { Metadata } from "next";
import { Calculator } from "./calculator";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Calcolatore forfettario 2026 — Conviene? | A.T. Consulting Parma",
  description:
    "Calcolatore gratuito: confronta regime forfettario e ordinario 2026 in base ai tuoi ricavi, spese e cassa previdenziale. Scopri quale ti fa risparmiare di più.",
  alternates: {
    canonical: "/calcolatori/forfettario",
  },
  openGraph: {
    title: "Calcolatore forfettario 2026 — Conviene davvero?",
    description:
      "Confronta forfettario e ordinario in base a ricavi, spese e cassa. Calcolo gratuito e istantaneo.",
    url: "https://www.atparma.com/calcolatori/forfettario",
    type: "website",
  },
};

export default function CalcolatoreForfettarioPage() {
  return (
    <>
      <SiteHeader current="strumenti" />

      <main className="pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Calcolatore gratuito
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
              Conviene davvero il regime forfettario?
            </h1>
            <p className="text-zinc-600 leading-relaxed">
              Inserisci ricavi, spese e cassa previdenziale: confrontiamo il regime
              forfettario con il regime ordinario e ti diciamo quale ti fa risparmiare
              di più. Basato su aliquote e coefficienti 2026.
            </p>
          </div>

          <Calculator />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
