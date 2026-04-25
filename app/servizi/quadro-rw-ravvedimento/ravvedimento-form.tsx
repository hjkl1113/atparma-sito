"use client";

import { useState } from "react";

const TIPOLOGIE_ESTERE = [
  { id: "cripto", label: "Criptovalute (exchange esteri o wallet privati)" },
  { id: "conti", label: "Conti correnti / depositi esteri (Revolut, Wise, banche)" },
  { id: "immobili", label: "Immobili all'estero" },
  { id: "broker", label: "Broker / dossier titoli stranieri" },
  { id: "partecipazioni", label: "Partecipazioni in società estere" },
  { id: "polizze", label: "Polizze vita o pensioni private estere" },
] as const;

const ANNI_OMESSI = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

const VALORE_RANGES = [
  { id: "0-15k", label: "Fino a €15.000" },
  { id: "15-50k", label: "€15.000 — €50.000" },
  { id: "50-200k", label: "€50.000 — €200.000" },
  { id: "200k-1m", label: "€200.000 — €1.000.000" },
  { id: "1m+", label: "Oltre €1.000.000" },
] as const;

export function RavvedimentoRwForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipologie, setTipologie] = useState<string[]>([]);
  const [anni, setAnni] = useState<number[]>([]);
  const [valoreRange, setValoreRange] = useState<string>("");
  const [paesi, setPaesi] = useState("");
  const [note, setNote] = useState("");
  const [letteraCompliance, setLetteraCompliance] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function toggleTipologia(id: string) {
    setTipologie((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function toggleAnno(anno: number) {
    setAnni((prev) => (prev.includes(anno) ? prev.filter((x) => x !== anno) : [...prev, anno]));
  }

  async function handleSubmit() {
    setError(null);
    if (nome.trim().length < 2) return setError("Nome non valido");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Email non valida");
    if (tipologie.length === 0) return setError("Seleziona almeno una tipologia di attività estera");
    if (anni.length === 0) return setError("Seleziona almeno un anno da regolarizzare");
    if (!valoreRange) return setError("Indica il range di valore approssimativo");

    setLoading(true);
    try {
      const res = await fetch("/api/preventivo-quadro-rw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nome.trim(),
          email: email.trim().toLowerCase(),
          telefono: telefono.trim() || undefined,
          tipologie,
          anni,
          valoreRange,
          paesi: paesi.trim() || undefined,
          note: note.trim() || undefined,
          letteraCompliance,
        }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        const json = await res.json().catch(() => ({}));
        setError(json.error || "Errore nell'invio. Riprova o scrivi a segreteria@atparma.com");
      }
    } catch {
      setError("Errore di rete. Riprova o scrivi a segreteria@atparma.com");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-200 p-8 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-emerald-900 mb-2 font-[family-name:var(--font-heading)]">
          Richiesta ricevuta
        </h3>
        <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
          Ti rispondiamo entro 1 giorno lavorativo all&apos;email <strong>{email}</strong> con il preventivo dettagliato e i prossimi passi. Niente è vincolante finché non firmi il mandato.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Nome e cognome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Mario Rossi"
            className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm focus:border-zinc-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@esempio.it"
            className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm focus:border-zinc-400 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Telefono (opzionale)</label>
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="+39 333 1234567"
          className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm focus:border-zinc-400 focus:outline-none"
        />
        <p className="text-xs text-zinc-500 mt-1">Se preferisci che ti chiamiamo invece di rispondere via email.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-2">Quali attività estere hai non dichiarato?</label>
        <div className="space-y-2">
          {TIPOLOGIE_ESTERE.map((t) => (
            <label
              key={t.id}
              className="flex items-start gap-3 p-3 rounded-lg border border-zinc-200 hover:border-zinc-300 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={tipologie.includes(t.id)}
                onChange={() => toggleTipologia(t.id)}
                className="mt-1"
              />
              <span className="text-sm text-zinc-700">{t.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-2">Per quali anni vuoi regolarizzare?</label>
        <div className="flex flex-wrap gap-2">
          {ANNI_OMESSI.map((a) => {
            const isSelected = anni.includes(a);
            return (
              <button
                type="button"
                key={a}
                onClick={() => toggleAnno(a)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                  isSelected
                    ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300"
                }`}
              >
                {a}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-2">
          Valore complessivo approssimativo delle attività estere
        </label>
        <select
          value={valoreRange}
          onChange={(e) => setValoreRange(e.target.value)}
          className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm focus:border-zinc-400 focus:outline-none"
        >
          <option value="">Seleziona un range</option>
          {VALORE_RANGES.map((r) => (
            <option key={r.id} value={r.id}>
              {r.label}
            </option>
          ))}
        </select>
        <p className="text-xs text-zinc-500 mt-1">Stima a spanne, ci serve solo per dimensionare il preventivo.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Paesi coinvolti (opzionale)</label>
        <input
          type="text"
          value={paesi}
          onChange={(e) => setPaesi(e.target.value)}
          placeholder="Es. Germania, Svizzera, USA"
          className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm focus:border-zinc-400 focus:outline-none"
        />
        <p className="text-xs text-zinc-500 mt-1">Utile se sono coinvolti paesi black list (sanzioni doppie).</p>
      </div>

      <div>
        <label className="flex items-start gap-3 p-3 rounded-lg border border-rose-200 bg-rose-50 cursor-pointer">
          <input
            type="checkbox"
            checked={letteraCompliance}
            onChange={(e) => setLetteraCompliance(e.target.checked)}
            className="mt-1"
          />
          <span className="text-sm text-rose-900">
            <strong>Ho già ricevuto una lettera di compliance dall&apos;Agenzia delle Entrate</strong> &mdash; flagga se hai ricevuto una comunicazione che chiede chiarimenti su attività estere. È urgente.
          </span>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Note aggiuntive (opzionale)</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="Aggiungi qualsiasi informazione utile (esempio: AIRE in passato, exchange falliti FTX/Celsius, importi più precisi...)"
          className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm focus:border-zinc-400 focus:outline-none"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-medium disabled:opacity-50"
      >
        {loading ? "Invio in corso..." : "Richiedi preventivo personalizzato"}
      </button>

      <p className="text-xs text-zinc-500 text-center">
        Risposta entro 1 giorno lavorativo. Dati protetti GDPR. Niente vincoli finché non firmi il mandato.
      </p>
    </div>
  );
}
