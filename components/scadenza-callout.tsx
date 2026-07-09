"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SCADENZE_2026 } from "@/app/strumenti/scadenze/lib";

const MESI = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
];

// Prossima scadenza con data >= oggi (calcolata lato client → sempre reale).
function prossimaScadenza() {
  const oggi = new Date();
  const iso = `${oggi.getFullYear()}-${String(oggi.getMonth() + 1).padStart(2, "0")}-${String(
    oggi.getDate(),
  ).padStart(2, "0")}`;
  return (
    [...SCADENZE_2026].sort((a, b) => a.data.localeCompare(b.data)).find((s) => s.data >= iso) ?? null
  );
}

// Card evidenziata "prossima scadenza fiscale" per la home.
export function ScadenzaCallout() {
  const [s, setS] = useState<{ titolo: string; data: string } | null>(null);

  useEffect(() => {
    setS(prossimaScadenza());
  }, []);

  const dataLabel = s
    ? (() => {
        const [, m, d] = s.data.split("-");
        return `${parseInt(d, 10)} ${MESI[parseInt(m, 10) - 1]}`;
      })()
    : null;

  return (
    <Link
      href="/calendario-scadenze-fiscali"
      className="group flex flex-col justify-between h-full p-6 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Vai al calendario delle scadenze fiscali"
    >
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-white/70 font-medium mb-3">
          Prossima scadenza
        </p>
        {s ? (
          <>
            <p className="text-2xl font-bold tracking-tight mb-1 font-[family-name:var(--font-heading)]">
              {dataLabel}
            </p>
            <p className="text-sm text-white/90 leading-snug">{s.titolo}</p>
          </>
        ) : (
          <p className="text-lg font-semibold font-[family-name:var(--font-heading)]">
            Calendario fiscale 2026
          </p>
        )}
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white">
        Tutte le scadenze
        <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}
