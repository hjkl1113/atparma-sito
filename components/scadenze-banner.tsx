"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SCADENZE_2026 } from "@/app/strumenti/scadenze/lib";

const MESI = [
  "gennaio",
  "febbraio",
  "marzo",
  "aprile",
  "maggio",
  "giugno",
  "luglio",
  "agosto",
  "settembre",
  "ottobre",
  "novembre",
  "dicembre",
];

// Prossima scadenza con data >= oggi (confronto lessicografico su YYYY-MM-DD).
function prossimaScadenza() {
  const oggi = new Date();
  const iso = `${oggi.getFullYear()}-${String(oggi.getMonth() + 1).padStart(2, "0")}-${String(
    oggi.getDate(),
  ).padStart(2, "0")}`;
  return (
    [...SCADENZE_2026]
      .sort((a, b) => a.data.localeCompare(b.data))
      .find((s) => s.data >= iso) ?? null
  );
}

// Striscia in cima al sito con la prossima scadenza fiscale, calcolata lato client
// (sempre aggiornata alla data reale dell'utente, nessuna manutenzione manuale).
export function ScadenzeBanner() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const s = prossimaScadenza();
    if (!s) return;
    const [, m, d] = s.data.split("-");
    setLabel(`${s.titolo} · ${parseInt(d, 10)} ${MESI[parseInt(m, 10) - 1]}`);
  }, []);

  return (
    <Link
      href="/calendario-scadenze-fiscali"
      className="block bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
      aria-label="Vai al calendario delle scadenze fiscali"
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-2 text-xs sm:text-[13px]">
        <span className="font-medium text-[var(--color-accent)] uppercase tracking-wide whitespace-nowrap">
          Prossima scadenza
        </span>
        <span className="text-white/30" aria-hidden>
          ·
        </span>
        <span className="truncate text-white/90">{label ?? "Calendario fiscale 2026"}</span>
        <span className="text-white/50" aria-hidden>
          &rarr;
        </span>
      </div>
    </Link>
  );
}
