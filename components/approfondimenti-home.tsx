import Link from "next/link";
import {
  approfondimenti,
  TIPO_LABEL,
  DESTINATARIO_LABEL,
} from "@/lib/approfondimenti";
import { formatDataEstesa } from "@/lib/format-data";

// Banda "Approfondimenti normativi" in home, subito sotto gli aggiornamenti
// del giorno: le news brevi dicono cosa e' successo, qui si spiega per intero
// un provvedimento intero. Sfondo bianco per staccare dalla banda surface degli
// aggiornamenti; il navy resta riservato alla corsia consulenza specialistica.

export function ApprofondimentiHome() {
  const ultimi = approfondimenti.slice(0, 2);
  if (ultimi.length === 0) return null;

  return (
    <section className="py-20 bg-white border-y border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-2">
              Approfondimenti normativi
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              Quando una notizia breve non basta
            </h2>
          </div>
          <Link
            href="/approfondimenti"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline whitespace-nowrap"
          >
            Vedi tutti &rarr;
          </Link>
        </div>
        <p className="mt-3 mb-8 text-zinc-600 leading-relaxed max-w-2xl">
          Decreti e circolari spiegati per intero, tema per tema: cosa cambia, chi
          riguarda e da quando si applica.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {ultimi.map((a) => (
            <Link
              key={a.slug}
              href={`/approfondimenti/${a.slug}`}
              className="group flex flex-col h-full p-7 rounded-2xl bg-[var(--color-surface)] border border-zinc-100 hover:border-[var(--color-accent)]/40 hover:shadow-lg transition-all"
            >
              <div className="flex flex-wrap items-center gap-2.5 mb-3 text-xs">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                  {TIPO_LABEL[a.tipo]}
                </span>
                {a.riferimento ? (
                  <span className="text-zinc-500 font-medium">{a.riferimento}</span>
                ) : null}
                <time dateTime={a.data} className="text-zinc-400">
                  {formatDataEstesa(a.data)}
                </time>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold tracking-tight leading-snug text-zinc-900 group-hover:text-[var(--color-accent)] transition-colors font-[family-name:var(--font-heading)]">
                {a.titolo}
              </h3>
              <p className="mt-2.5 text-sm text-zinc-600 leading-relaxed">
                {a.sommario}
              </p>

              <div className="mt-auto pt-5 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                <span className="font-medium text-zinc-700">
                  {a.sezioni.length} temi trattati
                </span>
                {a.destinatari.length > 0 ? (
                  <>
                    <span aria-hidden>&middot;</span>
                    <span>
                      {a.destinatari.map((d) => DESTINATARIO_LABEL[d]).join(", ")}
                    </span>
                  </>
                ) : null}
                <span className="ml-auto text-[var(--color-accent)] font-medium group-hover:underline">
                  Leggi &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/approfondimenti"
          className="sm:hidden mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]"
        >
          Vedi tutti gli approfondimenti &rarr;
        </Link>
      </div>
    </section>
  );
}
