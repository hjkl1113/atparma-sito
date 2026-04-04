"use client";

import { useState } from "react";

const prezzi = [
  {
    id: "730",
    title: "Dichiarazione 730",
    price: "79",
    desc: "Compilazione e invio della dichiarazione dei redditi modello 730.",
    cta: "Acquista online",
  },
  {
    id: "piva",
    title: "Apertura Partita IVA",
    price: "149",
    desc: "Apertura e configurazione della Partita IVA per la tua attivita.",
    cta: "Acquista online",
  },
  {
    id: "consulenza",
    title: "Consulenza su misura",
    price: null,
    desc: "Analisi personalizzata e piano d'azione per la tua situazione specifica.",
    cta: "Richiedi preventivo",
  },
];

export function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(servizioId: string) {
    setLoading(servizioId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ servizio: servizioId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setLoading(null);
      }
    } catch {
      setLoading(null);
    }
  }

  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
          Servizi online
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16 font-[family-name:var(--font-heading)]">
          Inizia subito
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {prezzi.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl p-8 border border-zinc-100 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">
                {p.title}
              </h3>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed flex-1">
                {p.desc}
              </p>
              <div className="mb-6">
                {p.price ? (
                  <span className="text-3xl font-bold font-[family-name:var(--font-heading)]">
                    &euro;{p.price}
                  </span>
                ) : (
                  <span className="text-lg font-medium text-zinc-500">
                    A preventivo
                  </span>
                )}
              </div>
              {p.price ? (
                <button
                  onClick={() => handleCheckout(p.id)}
                  disabled={loading === p.id}
                  className="block w-full text-center py-3 rounded-lg font-medium text-sm transition-colors bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading === p.id ? "Caricamento..." : p.cta}
                </button>
              ) : (
                <a
                  href="/contatti"
                  className="block text-center py-3 rounded-lg font-medium text-sm transition-colors bg-zinc-900 text-white hover:bg-zinc-800"
                >
                  {p.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
