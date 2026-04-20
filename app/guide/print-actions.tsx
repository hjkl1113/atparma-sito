"use client";

import { useState } from "react";

interface GuidaActionsProps {
  titolo: string;
  intro: string;
  sezioni: { titolo: string; voci: string[] }[];
  avvertenza: string;
  fileName: string;
}

export function GuidaActions({ titolo, intro, sezioni, avvertenza, fileName }: GuidaActionsProps) {
  const [downloading, setDownloading] = useState(false);

  async function scaricaPDF() {
    setDownloading(true);
    try {
      const { generaGuidaPDF } = await import("./pdf-generator");
      await generaGuidaPDF({ titolo, intro, sezioni, avvertenza, fileName });
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={scaricaPDF}
        disabled={downloading}
        className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors disabled:opacity-60"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        {downloading ? "Genero PDF..." : "Scarica PDF"}
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-300 text-zinc-700 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        Stampa
      </button>
    </div>
  );
}

export function GuidaPrintActions() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
      Stampa o salva PDF
    </button>
  );
}
