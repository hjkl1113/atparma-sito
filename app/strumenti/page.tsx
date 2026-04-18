import type { Metadata } from "next";
import Link from "next/link";
import { MobileMenu } from "@/app/mobile-menu";
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]"
          >
            A.T. Consulting
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <Link href="/servizi" className="hover:text-zinc-900 transition-colors">Servizi</Link>
            <Link href="/strumenti" className="text-zinc-900 font-medium">Strumenti</Link>
            <Link href="/blog" className="hover:text-zinc-900 transition-colors">Blog</Link>
            <Link href="/faq" className="hover:text-zinc-900 transition-colors">FAQ</Link>
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
