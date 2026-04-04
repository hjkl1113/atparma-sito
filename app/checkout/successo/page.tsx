import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagamento completato — A.T. Consulting Parma",
};

export default function SuccessoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-3 font-[family-name:var(--font-heading)]">
          Pagamento completato
        </h1>
        <p className="text-zinc-600 mb-2">
          Grazie per il tuo acquisto. Riceverai una email di conferma a breve.
        </p>
        <p className="text-zinc-500 text-sm mb-8">
          Il nostro team ti contatterà entro 24 ore lavorative per procedere con il servizio.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors text-sm font-medium"
        >
          Torna alla home
        </Link>
      </div>
    </main>
  );
}
