import type { Metadata } from "next";
import Link from "next/link";
import { Tool } from "./tool";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Calcolo busta paga 2026 — da lordo a netto | A.T. Consulting Parma",
  description:
    "Calcola il netto in busta paga dalla RAL (o il lordo dal netto). IRPEF 2026, contributi INPS, detrazione lavoro dipendente, addizionali, trattamento integrativo.",
  alternates: {
    canonical: "/strumenti/buste-paga",
  },
  openGraph: {
    title: "Calcolo busta paga 2026 — da lordo a netto",
    description:
      "Simulatore gratuito: RAL, contributi, IRPEF, detrazioni, addizionali. Netto mensile e annuo.",
    url: "https://www.atparma.com/strumenti/buste-paga",
    type: "website",
  },
};

export default function BustaPagaPage() {
  return (
    <>
      <SiteHeader current="strumenti" />

      <main className="pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Strumento gratuito
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
              Da lordo a netto in busta paga
            </h1>
            <p className="text-zinc-600 leading-relaxed">
              Inserisci la RAL e ottieni il netto mensile e annuo. Contributi INPS, IRPEF
              2026, detrazione lavoro dipendente, addizionali medie e trattamento
              integrativo. Funziona anche al contrario: dal netto desiderato alla RAL.
            </p>
          </div>

          <Tool />
        </div>
      </main>

      <footer className="bg-zinc-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-zinc-400 text-xs">
          <p className="mb-2">
            A.T. Consulting Parma S.R.L.S. — Borgo Riccio da Parma 5, 43121 Parma
            (PR) — P.IVA 02794450342
          </p>
          <p>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
