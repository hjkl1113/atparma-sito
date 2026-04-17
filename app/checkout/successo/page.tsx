import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagamento completato — A.T. Consulting Parma",
};

export default function SuccessoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-lg text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-3 font-[family-name:var(--font-heading)]">
          Pagamento completato
        </h1>
        <p className="text-zinc-600 mb-6">
          Grazie per il tuo acquisto. Riceverai subito un&apos;email di conferma.
        </p>

        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 mb-6 text-left">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-2">
            Prossimi passi
          </p>
          <p className="text-zinc-700 text-sm leading-relaxed mb-3">
            Ti invieremo per email le <strong>credenziali del portale clienti</strong>:
            da lì potrai caricare i documenti in sicurezza, monitorare lo stato della
            tua pratica e comunicare con lo studio in tempo reale. Accesso 24/7 da PC
            e mobile.
          </p>
          <p className="text-zinc-500 text-xs leading-relaxed">
            Il nostro team ti contatta entro 24 ore lavorative per i dettagli operativi.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://clienti.atparma.com"
            className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium"
          >
            Accedi al portale
          </a>
          <Link
            href="/"
            className="inline-block px-6 py-3 border border-zinc-300 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </main>
  );
}
