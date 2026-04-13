import type { Metadata } from "next";
import Link from "next/link";
import { ContattiForm } from "./form";

export const metadata: Metadata = {
  title: "Contatti — Richiedi una consulenza | A.T. Consulting Parma",
  description:
    "Contattaci per una consulenza fiscale, finanziaria o per la crisi di impresa. Commercialista online a Parma. Risposta entro 24 ore.",
  alternates: {
    canonical: "/contatti",
  },
};

export default function ContattiPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              A.T. Consulting
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <Link href="/#servizi" className="hover:text-zinc-900 transition-colors">
              Servizi
            </Link>
            <Link href="/#chi-siamo" className="hover:text-zinc-900 transition-colors">
              Chi siamo
            </Link>
            <a
              href="https://clienti.atparma.com"
              className="ml-2 px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Area Clienti
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
                Contattaci
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
                Richiedi una consulenza
              </h1>
              <p className="text-zinc-600 leading-relaxed mb-8">
                Compila il modulo e ti ricontatteremo entro 24 ore lavorative.
                In alternativa, puoi chiamarci o scriverci direttamente.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Telefono</p>
                    <a href="tel:+390521247721" className="text-zinc-600 text-sm hover:text-[var(--color-accent)]">
                      0521 247721
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a href="mailto:segreteria@atparma.com" className="text-zinc-600 text-sm hover:text-[var(--color-accent)]">
                      segreteria@atparma.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Sede</p>
                    <p className="text-zinc-600 text-sm">
                      Borgo Riccio da Parma 5<br />
                      43121 Parma (PR)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <ContattiForm />
          </div>
        </div>
      </main>
    </>
  );
}
