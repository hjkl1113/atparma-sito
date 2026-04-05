import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[var(--color-surface)]">
      <div className="max-w-md text-center">
        <p className="text-8xl font-bold text-zinc-200 font-[family-name:var(--font-heading)] mb-4">
          404
        </p>
        <h1 className="text-2xl font-bold mb-3 font-[family-name:var(--font-heading)]">
          Pagina non trovata
        </h1>
        <p className="text-zinc-600 mb-8">
          La pagina che stai cercando non esiste o e stata spostata.
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
            className="px-6 py-3 border border-zinc-200 bg-white rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium"
          >
            Contattaci
          </Link>
        </div>
      </div>
    </main>
  );
}
