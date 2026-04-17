import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "./calculator";
import { MobileMenu } from "@/app/mobile-menu";

export const metadata: Metadata = {
  title: "Calcolatore forfettario 2026 — Conviene? | A.T. Consulting Parma",
  description:
    "Calcolatore gratuito: confronta regime forfettario e ordinario 2026 in base ai tuoi ricavi, spese e cassa previdenziale. Scopri quale ti fa risparmiare di piu.",
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
            <Link href="/calcolatori/forfettario" className="text-zinc-900 font-medium">Calcolatore</Link>
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
              Calcolatore gratuito
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
              Conviene davvero il regime forfettario?
            </h1>
            <p className="text-zinc-600 leading-relaxed">
              Inserisci ricavi, spese e cassa previdenziale: confrontiamo il regime
              forfettario con il regime ordinario e ti diciamo quale ti fa risparmiare
              di piu. Basato su aliquote e coefficienti 2026.
            </p>
          </div>

          <Calculator />
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
