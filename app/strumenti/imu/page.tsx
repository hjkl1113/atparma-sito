import type { Metadata } from "next";
import Link from "next/link";
import { Tool } from "./tool";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Calcolo IMU 2026 — abitazione principale, seconda casa | A.T. Consulting Parma",
  description:
    "Calcola l'IMU 2026: rendita catastale, categoria, quota e mesi di possesso, aliquota comunale. Esenzione abitazione principale. Acconto giugno, saldo dicembre.",
  alternates: {
    canonical: "/strumenti/imu",
  },
  openGraph: {
    title: "Calcolo IMU 2026 — abitazione principale, seconda casa",
    description: "Simulatore IMU gratuito. Acconto e saldo, esenzione prima casa, detrazioni.",
    url: "https://www.atparma.com/strumenti/imu",
    type: "website",
  },
};

export default function ImuPage() {
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
              Calcolo IMU 2026
            </h1>
            <p className="text-zinc-600 leading-relaxed">
              Calcola l&apos;IMU 2026 su casa, seconda casa, ufficio, negozio o capannone.
              Rendita catastale, categoria, quota e mesi di possesso. Esenzione abitazione
              principale non di lusso. Acconto entro il 16 giugno, saldo entro il 16
              dicembre.
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
