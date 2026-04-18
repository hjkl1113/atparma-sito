import type { Metadata } from "next";
import Link from "next/link";
import { Tool } from "./tool";
import { MobileMenu } from "@/app/mobile-menu";

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]"
          >
            A.T. Consulting
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <Link href="/servizi" className="hover:text-zinc-900 transition-colors">Servizi</Link>
            <Link href="/calcolatori/forfettario" className="hover:text-zinc-900 transition-colors">Forfettario</Link>
            <Link href="/strumenti/codice-fiscale" className="hover:text-zinc-900 transition-colors">CF</Link>
            <Link href="/strumenti/buste-paga" className="hover:text-zinc-900 transition-colors">Busta paga</Link>
            <Link href="/strumenti/imu" className="text-zinc-900 font-medium">IMU</Link>
            <Link href="/strumenti/scadenze" className="hover:text-zinc-900 transition-colors">Scadenze</Link>
            <Link href="/contatti" className="hover:text-zinc-900 transition-colors">Contatti</Link>
            <a
              href="https://clienti.atparma.com"
              className="ml-2 px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Area Clienti
            </a>
          </nav>
          <MobileMenu />
        </div>
      </header>

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
