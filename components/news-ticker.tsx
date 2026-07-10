import Link from "next/link";
import { news } from "@/lib/news";

// Striscia scorrevole con i titoli degli ultimi aggiornamenti fiscali.
// Animazione in CSS puro (nessun JS), in pausa al passaggio del mouse,
// disattivata se l'utente preferisce ridurre le animazioni.
export function NewsTicker() {
  const items = news.slice(0, 8);
  if (items.length === 0) return null;

  const riga = (k: string) =>
    items.map((n) => (
      <Link
        key={`${k}-${n.slug}`}
        href={`/aggiornamenti-fiscali/${n.slug}`}
        className="inline-flex items-center gap-3 whitespace-nowrap text-sm text-zinc-700 hover:text-[var(--color-accent)] transition-colors"
      >
        <span className="text-[var(--color-accent)]" aria-hidden>
          &bull;
        </span>
        {n.titolo}
      </Link>
    ));

  return (
    <section
      aria-label="Ultimi aggiornamenti fiscali"
      className="atp-ticker-band border-y border-zinc-100 bg-[var(--color-surface)]"
    >
      <style>{`
        @keyframes atp-ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .atp-ticker-track { animation: atp-ticker-scroll 45s linear infinite; }
        .atp-ticker-band:hover .atp-ticker-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .atp-ticker-track { animation: none; transform: none; }
        }
      `}</style>
      <div className="max-w-7xl mx-auto flex items-center">
        <Link
          href="/aggiornamenti-fiscali"
          className="group flex items-center gap-2 shrink-0 px-4 sm:px-5 py-3 border-r border-zinc-100 hover:bg-white transition-colors"
          aria-label="Vai a tutti gli aggiornamenti fiscali"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)]">
            Aggiornamenti
          </span>
          <span className="text-[var(--color-accent)] group-hover:translate-x-0.5 transition-transform" aria-hidden>
            &rarr;
          </span>
        </Link>
        <div className="relative overflow-hidden py-3 flex-1">
          <div className="atp-ticker-track flex w-max items-center gap-8 pl-6">
            {riga("a")}
            {riga("b")}
          </div>
          {/* sfumature ai bordi per un taglio pulito */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[var(--color-surface)] to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[var(--color-surface)] to-transparent" aria-hidden />
        </div>
      </div>
    </section>
  );
}
