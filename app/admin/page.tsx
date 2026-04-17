"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DEFAULT_PREZZI, type Servizio } from "@/app/lib/prezzi-default";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [prezzi, setPrezzi] = useState<Servizio[]>([]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/prezzi")
      .then((r) => r.json())
      .then(setPrezzi);
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Verifica password provando a salvare
    const res = await fetch("/api/prezzi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${password}`,
      },
      body: JSON.stringify(prezzi),
    });
    if (res.ok) {
      setAuthed(true);
      setMessage("");
    } else {
      setMessage("Password errata");
    }
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");
    const res = await fetch("/api/prezzi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${password}`,
      },
      body: JSON.stringify(prezzi),
    });
    if (res.ok) {
      setMessage("Prezzi salvati");
    } else {
      setMessage("Errore nel salvataggio");
    }
    setSaving(false);
  }

  function updateServizio(id: string, field: string, value: string | boolean) {
    setPrezzi((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        if (field === "price" || field === "originalPrice") {
          const num = value === "" ? null : Number(value);
          return { ...s, [field]: num };
        }
        return { ...s, [field]: value };
      })
    );
  }

  function addServizio() {
    const newId = `servizio-${Date.now()}`;
    setPrezzi((prev) => [
      ...prev,
      {
        id: newId,
        title: "Nuovo servizio",
        desc: "Descrizione del servizio",
        price: null,
        originalPrice: null,
        active: false,
      },
    ]);
  }

  function removeServizio(id: string) {
    if (!confirm(`Eliminare il servizio "${id}"? L'azione sara definitiva al prossimo salvataggio.`)) return;
    setPrezzi((prev) => prev.filter((s) => s.id !== id));
  }

  function loadDefaults() {
    if (
      !confirm(
        `Ripristinare i ${DEFAULT_PREZZI.length} servizi di default? Sovrascrive la lista attuale nel form. Dovrai cliccare "Salva prezzi" per persistere.`
      )
    )
      return;
    setPrezzi([...DEFAULT_PREZZI]);
    setMessage("");
  }

  if (!authed) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-bold text-center font-[family-name:var(--font-heading)]">
            Admin
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
          {message && (
            <p className="text-red-500 text-sm text-center">{message}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800"
          >
            Accedi
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
            Gestione Prezzi
          </h1>
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900">
            Torna al sito
          </Link>
        </div>

        <div className="space-y-6">
          {prezzi.map((s, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 border ${s.active ? "border-zinc-200" : "border-red-200 bg-red-50/30"}`}
            >
              <div className="flex items-center justify-between mb-4 gap-4">
                <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)] truncate">
                  {s.title}
                </h2>
                <div className="flex items-center gap-4 shrink-0">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={s.active}
                      onChange={(e) =>
                        updateServizio(s.id, "active", e.target.checked)
                      }
                      className="rounded"
                    />
                    Attivo
                  </label>
                  <button
                    type="button"
                    onClick={() => removeServizio(s.id)}
                    className="text-xs text-red-500 hover:text-red-700 underline"
                  >
                    Elimina
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-zinc-500 mb-1">
                  ID servizio (usato nei pagamenti — cambiarlo rompe la tracciabilita)
                </label>
                <input
                  type="text"
                  value={s.id}
                  onChange={(e) => updateServizio(s.id, "id", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm font-mono"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1">
                    Titolo
                  </label>
                  <input
                    type="text"
                    value={s.title}
                    onChange={(e) =>
                      updateServizio(s.id, "title", e.target.value)
                    }
                    className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1">
                    Descrizione
                  </label>
                  <input
                    type="text"
                    value={s.desc}
                    onChange={(e) =>
                      updateServizio(s.id, "desc", e.target.value)
                    }
                    className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1">
                    Prezzo attuale (EUR)
                  </label>
                  <input
                    type="number"
                    value={s.price ?? ""}
                    onChange={(e) =>
                      updateServizio(s.id, "price", e.target.value)
                    }
                    placeholder="A preventivo"
                    className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1">
                    Prezzo originale sbarrato (EUR)
                  </label>
                  <input
                    type="number"
                    value={s.originalPrice ?? ""}
                    onChange={(e) =>
                      updateServizio(s.id, "originalPrice", e.target.value)
                    }
                    placeholder="Nessuno sconto"
                    className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
                  />
                </div>
                <div className="flex items-end">
                  {s.price && s.originalPrice ? (
                    <div className="text-sm">
                      <span className="line-through text-zinc-400">
                        EUR {s.originalPrice}
                      </span>{" "}
                      <span className="font-bold text-green-600">
                        EUR {s.price}
                      </span>{" "}
                      <span className="text-green-600 text-xs">
                        (-
                        {Math.round(
                          ((s.originalPrice - s.price) / s.originalPrice) * 100
                        )}
                        %)
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs text-zinc-400">
                      Anteprima sconto
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={addServizio}
            className="px-4 py-2 bg-white border border-zinc-300 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50"
          >
            + Aggiungi servizio
          </button>
          <button
            type="button"
            onClick={loadDefaults}
            className="px-4 py-2 bg-white border border-zinc-300 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50"
            title="Carica nel form i 6 servizi di default definiti nel codice. Non salva: devi cliccare Salva prezzi dopo."
          >
            Ripristina default ({DEFAULT_PREZZI.length} servizi)
          </button>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium text-sm hover:bg-[var(--color-accent-dark)] disabled:opacity-50"
          >
            {saving ? "Salvataggio..." : "Salva prezzi"}
          </button>
          {message && (
            <span
              className={`text-sm ${message.includes("Errore") ? "text-red-500" : "text-green-600"}`}
            >
              {message}
            </span>
          )}
        </div>
      </div>
    </main>
  );
}
