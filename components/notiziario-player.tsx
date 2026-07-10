import notiziario from "@/lib/notiziario.json";

// Lettore audio del notiziario fiscale del giorno (sezione Aggiornamenti).
// Il file e i metadati sono rigenerati ogni giorno da scripts/ratio/audio.py.
export function NotiziarioPlayer() {
  const m = notiziario as {
    data_label?: string;
    file?: string;
    durata_sec?: number;
    n_news?: number;
    titoli?: string[];
  };
  if (!m?.file) return null;

  const min = Math.floor((m.durata_sec ?? 0) / 60);
  const sec = (m.durata_sec ?? 0) % 60;
  const durata = m.durata_sec ? `${min}:${String(sec).padStart(2, "0")}` : null;

  return (
    <div className="mb-10 rounded-2xl border border-[var(--color-accent)]/20 bg-gradient-to-br from-[var(--color-accent)]/[0.06] to-transparent p-6">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-11 h-11 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center" aria-hidden>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3z" />
            <path d="M19 11a1 1 0 10-2 0 5 5 0 01-10 0 1 1 0 10-2 0 7 7 0 006 6.92V21a1 1 0 102 0v-3.08A7 7 0 0019 11z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold mb-1">
            Notiziario fiscale
          </p>
          <h2 className="text-lg font-bold tracking-tight mb-1 font-[family-name:var(--font-heading)]">
            Ascolta le novità di {m.data_label ?? "oggi"}
          </h2>
          <p className="text-sm text-zinc-500 mb-4">
            {m.n_news ? `${m.n_news} aggiornamenti` : "Aggiornamenti del giorno"}
            {durata ? ` · ${durata} min` : ""} · voce narrante
          </p>

          <audio controls preload="none" className="w-full max-w-md">
            <source src={m.file} type="audio/mp4" />
            Il tuo browser non supporta la riproduzione audio.
          </audio>

          {m.titoli && m.titoli.length > 0 ? (
            <ul className="mt-4 space-y-1">
              {m.titoli.map((t) => (
                <li key={t} className="text-sm text-zinc-600 flex gap-2">
                  <span className="text-[var(--color-accent)]" aria-hidden>
                    &bull;
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
