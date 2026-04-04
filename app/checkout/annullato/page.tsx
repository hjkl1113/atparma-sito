import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagamento annullato — A.T. Consulting Parma",
};

export default function AnnullatoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-3 font-[family-name:var(--font-heading)]">
          Pagamento annullato
        </h1>
        <p className="text-zinc-600 mb-8">
          Il pagamento non e stato completato. Nessun addebito e stato effettuato.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors text-sm font-medium"
          >
            Torna alla home
          </Link>
          <Link
            href="/contatti"
            className="px-6 py-3 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium"
          >
            Contattaci
          </Link>
        </div>
      </div>
    </main>
  );
}
