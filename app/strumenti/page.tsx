import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Grid } from "./grid";

export const metadata: Metadata = {
  title: "Strumenti gratuiti per forfettari, P.IVA, commercialisti | A.T. Consulting Parma",
  description:
    "Calcolatori e strumenti gratuiti per privati, professionisti e commercialisti: forfettario, codice fiscale, busta paga, IMU, scadenze fiscali 2026.",
  alternates: {
    canonical: "/strumenti",
  },
  openGraph: {
    title: "Strumenti fiscali gratuiti 2026",
    description:
      "Calcolatore forfettario, codice fiscale, busta paga, IMU, scadenze. Gratuiti, senza registrazione.",
    url: "https://www.atparma.com/strumenti",
    type: "website",
  },
};

export default function StrumentiHubPage() {
  return (
    <>
      <SiteHeader current="strumenti" />

      <main className="pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Strumenti gratuiti
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
              Calcolatori e strumenti fiscali
            </h1>
            <p className="text-zinc-600 leading-relaxed">
              Strumenti gratuiti pensati per privati, professionisti con P.IVA e
              commercialisti. Nessuna registrazione richiesta. Costruiti dai nostri dottori
              commercialisti, aggiornati per il 2026.
            </p>
          </div>

          <Grid />
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
