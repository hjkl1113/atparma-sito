"use client";

import { useState } from "react";

const servizi = [
  "Consulenza fiscale",
  "Crisi di impresa",
  "Consulenza finanziaria",
  "Dichiarazione 730",
  "Apertura Partita IVA",
  "Altro",
];

export function ContattiForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      servizio: (form.elements.namedItem("servizio") as HTMLSelectElement).value,
      messaggio: (form.elements.namedItem("messaggio") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
        <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)]">
          Richiesta inviata
        </h3>
        <p className="text-zinc-600 text-sm">
          Ti ricontatteremo entro 24 ore lavorative.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[var(--color-accent)] hover:underline"
        >
          Invia un&apos;altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium mb-1.5">
            Nome e cognome *
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-shadow"
            placeholder="Mario Rossi"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-shadow"
            placeholder="mario@esempio.it"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium mb-1.5">
            Telefono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-shadow"
            placeholder="+39 333 1234567"
          />
        </div>
        <div>
          <label htmlFor="servizio" className="block text-sm font-medium mb-1.5">
            Servizio di interesse *
          </label>
          <select
            id="servizio"
            name="servizio"
            required
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-shadow bg-white"
          >
            <option value="">Seleziona...</option>
            {servizi.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="messaggio" className="block text-sm font-medium mb-1.5">
          Messaggio *
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-shadow resize-none"
          placeholder="Descrivi brevemente la tua esigenza..."
        />
      </div>

      <p className="text-xs text-zinc-400">
        I campi contrassegnati con * sono obbligatori. I tuoi dati saranno
        trattati nel rispetto della normativa sulla privacy.
      </p>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          Si e verificato un errore. Riprova o contattaci telefonicamente.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {status === "sending" ? "Invio in corso..." : "Invia richiesta"}
      </button>
    </form>
  );
}
