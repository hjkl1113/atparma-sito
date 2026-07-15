"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  buildArchivio,
  CATEGORIE_LABEL,
  type NewsItem,
} from "@/lib/news";

const MESI = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
];

function formatData(iso: string): string {
  const [y, m, d] = iso.split("-");
  const mi = parseInt(m, 10) - 1;
  return `${parseInt(d, 10)} ${MESI[mi] ?? m} ${y}`;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ");
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 shrink-0 transition-transform ${open ? "rotate-90" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function AggiornamentiArchivio({ news }: { news: NewsItem[] }) {
  const archivio = useMemo(() => buildArchivio(news), [news]);

  const [query, setQuery] = useState("");
  // selezione: null = tutti; altrimenti una chiave settimana (ISO lunedì)
  const [settimanaSel, setSettimanaSel] = useState<string | null>(null);
  const [openAnni, setOpenAnni] = useState<Set<string>>(
    () => new Set(archivio.slice(0, 1).map((a) => a.anno)),
  );
  const [openMesi, setOpenMesi] = useState<Set<string>>(
    () => new Set(archivio[0]?.mesi.slice(0, 1).map((m) => m.key) ?? []),
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (set: Set<string>, key: string) => {
    const next = new Set(set);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    return next;
  };

  const q = query.trim().toLowerCase();

  const risultati = useMemo(() => {
    if (q) {
      return news.filter((n) =>
        `${n.titolo} ${n.sommario} ${stripHtml(n.corpoHtml)} ${CATEGORIE_LABEL[n.categoria]}`
          .toLowerCase()
          .includes(q),
      );
    }
    if (settimanaSel) {
      for (const a of archivio)
        for (const m of a.mesi)
          for (const s of m.settimane)
            if (s.key === settimanaSel) return s.items;
      return [];
    }
    return news;
  }, [q, settimanaSel, news, archivio]);

  const settimanaLabel = useMemo(() => {
    if (!settimanaSel) return null;
    for (const a of archivio)
      for (const m of a.mesi)
        for (const s of m.settimane)
          if (s.key === settimanaSel) return `${s.label} ${a.anno}`;
    return null;
  }, [settimanaSel, archivio]);

  const Sidebar = (
    <nav className="text-sm" aria-label="Archivio aggiornamenti">
      <button
        onClick={() => {
          setSettimanaSel(null);
          setQuery("");
          setMobileOpen(false);
        }}
        className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
          !settimanaSel && !q
            ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
            : "hover:bg-zinc-50 text-zinc-700"
        }`}
      >
        Tutti gli aggiornamenti
        <span className="text-zinc-400 font-normal"> · {news.length}</span>
      </button>

      <div className="mt-2 space-y-0.5">
        {archivio.map((anno) => {
          const annoOpen = openAnni.has(anno.anno);
          return (
            <div key={anno.anno}>
              <button
                onClick={() => setOpenAnni((s) => toggle(s, anno.anno))}
                className="w-full flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-zinc-50 font-semibold text-zinc-800"
              >
                <Chevron open={annoOpen} />
                {anno.anno}
                <span className="ml-auto text-xs text-zinc-400 font-normal">{anno.count}</span>
              </button>

              {annoOpen && (
                <div className="ml-3 border-l border-zinc-100 pl-1">
                  {anno.mesi.map((mese) => {
                    const meseOpen = openMesi.has(mese.key);
                    return (
                      <div key={mese.key}>
                        <button
                          onClick={() => setOpenMesi((s) => toggle(s, mese.key))}
                          className="w-full flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-zinc-50 text-zinc-700 capitalize"
                        >
                          <Chevron open={meseOpen} />
                          {mese.label}
                          <span className="ml-auto text-xs text-zinc-400">{mese.count}</span>
                        </button>

                        {meseOpen && (
                          <div className="ml-3 border-l border-zinc-100 pl-1">
                            {mese.settimane.map((sett) => {
                              const active = sett.key === settimanaSel && !q;
                              return (
                                <button
                                  key={sett.key}
                                  onClick={() => {
                                    setSettimanaSel(sett.key);
                                    setQuery("");
                                    setMobileOpen(false);
                                  }}
                                  className={`w-full flex items-center px-3 py-1.5 rounded-lg transition-colors ${
                                    active
                                      ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium"
                                      : "hover:bg-zinc-50 text-zinc-600"
                                  }`}
                                >
                                  {sett.label}
                                  <span className="ml-auto text-xs text-zinc-400">
                                    {sett.items.length}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
      {/* Sidebar desktop */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-28">{Sidebar}</div>
      </aside>

      {/* Colonna contenuto */}
      <div className="flex-1 min-w-0">
        {/* Ricerca */}
        <div className="relative mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" aria-hidden>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca per argomento (es. rottamazione, prima casa, bonus…)"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-colors"
            aria-label="Cerca negli aggiornamenti"
          />
        </div>

        {/* Toggle archivio su mobile */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden w-full flex items-center justify-between px-4 py-2.5 mb-4 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-700"
        >
          Sfoglia l&apos;archivio per data
          <Chevron open={mobileOpen} />
        </button>
        {mobileOpen && (
          <div className="lg:hidden mb-6 p-3 rounded-xl border border-zinc-100 bg-zinc-50/50">
            {Sidebar}
          </div>
        )}

        {/* Intestazione risultati */}
        <div className="flex items-baseline justify-between mb-4">
          <p className="text-sm text-zinc-500">
            {q ? (
              <>
                {risultati.length} risultati per <span className="font-medium text-zinc-700">“{query}”</span>
              </>
            ) : settimanaLabel ? (
              <>
                Settimana <span className="font-medium text-zinc-700 capitalize">{settimanaLabel}</span> · {risultati.length}
              </>
            ) : (
              <>{risultati.length} aggiornamenti</>
            )}
          </p>
          {(q || settimanaSel) && (
            <button
              onClick={() => {
                setQuery("");
                setSettimanaSel(null);
              }}
              className="text-sm text-[var(--color-accent)] hover:underline"
            >
              Azzera
            </button>
          )}
        </div>

        {/* Lista */}
        {risultati.length === 0 ? (
          <p className="text-zinc-500 py-8">Nessun aggiornamento trovato.</p>
        ) : (
          <div className="space-y-4">
            {risultati.map((n) => (
              <Link
                key={n.slug}
                href={`/aggiornamenti-fiscali/${n.slug}`}
                className="group block p-6 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-2 text-xs">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-medium">
                    {CATEGORIE_LABEL[n.categoria]}
                  </span>
                  <time dateTime={n.data} className="text-zinc-400">
                    {formatData(n.data)}
                  </time>
                </div>
                <h2 className="text-lg font-semibold tracking-tight mb-1 group-hover:text-[var(--color-accent)] transition-colors font-[family-name:var(--font-heading)]">
                  {n.titolo}
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed">{n.sommario}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
