"use client";

import Link from "next/link";
import { startTransition, useEffect, useMemo, useState } from "react";
import {
  CATEGORIA_COLOR,
  CATEGORIA_LABEL,
  SCADENZE_2026,
  filtraScadenze,
  generaICS,
  raggruppaPerMese,
  type Tag,
} from "./lib";

type Modo = "privato" | "professionista";

const FILTRI: Array<{ id: Tag; label: string; short: string }> = [
  { id: "forfettario", label: "Forfettario", short: "Forfettario" },
  { id: "ordinario", label: "Ordinario (P.IVA persona fisica)", short: "Ordinario" },
  { id: "societa", label: "Società (SRL, SAS, ecc.)", short: "Società" },
  { id: "dipendenti", label: "Con dipendenti", short: "Dipendenti" },
  { id: "iva-mensile", label: "IVA mensile", short: "IVA mensile" },
  { id: "iva-trimestrale", label: "IVA trimestrale", short: "IVA trim" },
  { id: "artigiani-commercianti", label: "Artigiani / Commercianti", short: "Art/Comm" },
  { id: "gestione-separata", label: "Gestione Separata INPS", short: "Gest. Sep." },
  { id: "cassa-privata", label: "Cassa privata", short: "Cassa priv." },
];

export function Tool() {
  const [modo, setModo] = useState<Modo>("privato");
  const [tags, setTags] = useState<Set<Tag>>(new Set());
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search);
    startTransition(() => {
      const m = p.get("m");
      if (m === "professionista" || m === "privato") setModo(m);
      const raw = p.get("f");
      if (raw) {
        const parsed = raw.split(",").filter((t) => FILTRI.some((f) => f.id === t)) as Tag[];
        setTags(new Set(parsed));
      }
    });
  }, []);

  function toggleTag(t: Tag) {
    setTags((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  }

  const scadenzeFiltrate = useMemo(
    () => filtraScadenze(SCADENZE_2026, [...tags]),
    [tags]
  );
  const gruppiPerMese = useMemo(() => raggruppaPerMese(scadenzeFiltrate), [scadenzeFiltrate]);

  function scaricaICS() {
    const ics = generaICS(scadenzeFiltrate);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "scadenze-fiscali-2026-atparma.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  async function handleLead(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead-forfettario", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          fonte: "scadenzario-2026",
          modo,
        }),
      });
      if (!res.ok) throw new Error("Errore invio");
      setStatus("done");
    } catch (err) {
      console.error("lead scadenze errore:", err);
      setStatus("error");
    }
  }

  return (
    <div className="space-y-6">
      {/* Toggle modo */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-zinc-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setModo("privato")}
            aria-pressed={modo === "privato"}
            className={`px-4 py-1.5 text-xs sm:text-sm rounded-full transition-colors ${
              modo === "privato" ? "bg-zinc-900 text-white font-medium" : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <span aria-hidden>👤</span> Sono un contribuente
          </button>
          <button
            type="button"
            onClick={() => setModo("professionista")}
            aria-pressed={modo === "professionista"}
            className={`px-4 py-1.5 text-xs sm:text-sm rounded-full transition-colors ${
              modo === "professionista" ? "bg-zinc-900 text-white font-medium" : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <span aria-hidden>👔</span> Sono un commercialista
          </button>
        </div>
      </div>

      {/* Filtri */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-sm font-semibold font-[family-name:var(--font-heading)]">
            Filtra per profilo
          </h2>
          {tags.size > 0 && (
            <button
              type="button"
              onClick={() => setTags(new Set())}
              className="text-xs text-zinc-500 hover:text-zinc-900"
            >
              Azzera filtri
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTRI.map((f) => {
            const active = tags.has(f.id);
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => toggleTag(f.id)}
                aria-pressed={active}
                className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                  active
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400"
                }`}
              >
                {f.short}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-zinc-500 mt-3">
          {tags.size === 0
            ? "Nessun filtro: vedi tutte le scadenze. Seleziona il tuo profilo per filtrare."
            : `${scadenzeFiltrate.length} scadenze per il tuo profilo.`}
        </p>
      </div>

      {/* Azioni */}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={scaricaICS}
          className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          Aggiungi al calendario (.ics)
        </button>
        <p className="text-xs text-zinc-600 self-center">
          Compatibile Google Calendar, Outlook, Apple Calendar.
        </p>
      </div>

      {/* Lista scadenze raggruppata per mese */}
      <div className="space-y-6">
        {gruppiPerMese.length === 0 ? (
          <p className="text-sm text-zinc-500 bg-white rounded-2xl border border-zinc-200 p-6 text-center">
            Nessuna scadenza trovata per questi filtri.
          </p>
        ) : (
          gruppiPerMese.map((g) => (
            <section key={g.mese}>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-3 capitalize">
                {g.mese} 2026
              </h3>
              <ul className="space-y-2">
                {g.items.map((s) => {
                  const d = new Date(s.data);
                  const giorno = d.getUTCDate();
                  return (
                    <li
                      key={s.id}
                      className="bg-white rounded-xl border border-zinc-200 p-4 flex gap-4"
                    >
                      <div className="flex-shrink-0 w-12 text-center">
                        <p className="text-2xl font-bold font-[family-name:var(--font-heading)] tabular-nums">
                          {giorno}
                        </p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                          <h4 className="text-sm font-semibold">{s.titolo}</h4>
                          <span
                            className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border ${CATEGORIA_COLOR[s.categoria]}`}
                          >
                            {CATEGORIA_LABEL[s.categoria]}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-600 leading-relaxed">{s.descrizione}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))
        )}
      </div>

      {/* Lead magnet */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8">
        <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">
          Ricordami le prossime scadenze
        </h3>
        <p className="text-sm text-zinc-600 mb-4">
          Lascia la tua email e ti mandiamo un promemoria {modo === "professionista"
            ? "dei principali adempimenti per i tuoi clienti."
            : "delle scadenze che ti riguardano."}
        </p>
        {status === "done" ? (
          <p className="text-sm text-green-700">Fatto. Ti scriveremo in prossimità delle scadenze.</p>
        ) : (
          <form onSubmit={handleLead} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              className="flex-1 px-3 py-2 rounded-lg border border-zinc-200 text-sm"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? "Invio..." : "Iscrivimi ai promemoria"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-xs text-red-600 mt-2">Email non valida. Riprova.</p>
        )}
      </div>

      {/* CTA finale */}
      {modo === "privato" ? (
        <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-heading)]">
            Non perdere più una scadenza
          </h3>
          <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
            Gestiamo adempimenti fiscali e promemoria per i nostri clienti dal portale
            dedicato. Dottori commercialisti iscritti all&apos;albo.
          </p>
          <Link
            href="/contatti"
            className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium text-sm hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Contattaci
          </Link>
        </div>
      ) : (
        <ProfessionistaCTA />
      )}

      <p className="text-xs text-zinc-500 leading-relaxed">
        <strong className="text-zinc-700">Avvertenza.</strong> Elenco delle principali
        scadenze 2026, con date nominali previste dalla norma. Quando cadono di sabato,
        domenica o festivo sono posticipate al primo giorno feriale successivo. Non
        incluse: scadenze settoriali (enti non commerciali, agricoltura, regimi
        speciali), scadenze locali (TARI, TASI, diritti CCIAA). Verifica sempre col tuo
        commercialista.
      </p>
    </div>
  );
}

function ProfessionistaCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead-forfettario", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          fonte: "waitlist-professio-scadenze",
          modo: "professionista",
        }),
      });
      if (!res.ok) throw new Error("Errore invio");
      setStatus("done");
    } catch (err) {
      console.error("waitlist professio errore:", err);
      setStatus("error");
    }
  }

  return (
    <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-8">
      <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-heading)]">
        Professio — scadenzario automatico per ogni cliente
      </h3>
      <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
        Offri uno scadenzario personalizzato a ciascuno dei tuoi clienti, brandizzato con
        il tuo studio. Scadenze automatiche filtrate sul profilo fiscale. Lasciaci la tua
        email per entrare nella lista d&apos;attesa beta.
      </p>
      {status === "done" ? (
        <p className="text-green-300 text-sm">
          Ti abbiamo aggiunto. Ti contatteremo appena Professio sara pronto.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@studio-commercialisti.it"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium text-sm hover:bg-[var(--color-accent-dark)] transition-colors disabled:opacity-50"
          >
            {status === "submitting" ? "Invio..." : "Iscrivimi"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-300 text-xs mt-2">Controlla l&apos;email e riprova.</p>
      )}
    </div>
  );
}
