"use client";

import Link from "next/link";
import { startTransition, useCallback, useEffect, useMemo, useState } from "react";
import {
  calcolaCodiceFiscale,
  decodificaCodiceFiscale,
  type RisultatoCF,
  type DecodificaCF,
} from "./lib";
import { cercaComuni, comuneByCatastale, loadComuni, type Comune } from "./comuni";

type Tab = "calcola" | "decodifica";
type Modo = "privato" | "professionista";

export function Tool() {
  const [tab, setTab] = useState<Tab>("calcola");
  const [modo, setModo] = useState<Modo>("privato");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search);
    startTransition(() => {
      if (p.get("t") === "decodifica") setTab("decodifica");
      const m = p.get("m");
      if (m === "professionista" || m === "privato") setModo(m);
    });
  }, []);

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
              modo === "privato"
                ? "bg-zinc-900 text-white font-medium"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <span aria-hidden>👤</span> Sono un privato / professionista
          </button>
          <button
            type="button"
            onClick={() => setModo("professionista")}
            aria-pressed={modo === "professionista"}
            className={`px-4 py-1.5 text-xs sm:text-sm rounded-full transition-colors ${
              modo === "professionista"
                ? "bg-zinc-900 text-white font-medium"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <span aria-hidden>👔</span> Sono un commercialista
          </button>
        </div>
      </div>

      {/* Tabs Calcola/Decodifica */}
      <div className="flex border-b border-zinc-200">
        <button
          type="button"
          onClick={() => setTab("calcola")}
          className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
            tab === "calcola"
              ? "border-zinc-900 text-zinc-900"
              : "border-transparent text-zinc-500 hover:text-zinc-900"
          }`}
        >
          Calcola codice fiscale
        </button>
        <button
          type="button"
          onClick={() => setTab("decodifica")}
          className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
            tab === "decodifica"
              ? "border-zinc-900 text-zinc-900"
              : "border-transparent text-zinc-500 hover:text-zinc-900"
          }`}
        >
          Decodifica codice
        </button>
      </div>

      {tab === "calcola" ? <CalcolaPanel /> : <DecodificaPanel />}

      {/* CTA bottom, dipendente dal modo */}
      {modo === "privato" ? (
        <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-heading)]">
            Serve aiuto con P.IVA, 730 o adempimenti?
          </h3>
          <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
            Dottori commercialisti iscritti all&apos;albo: scegliamo insieme regime e codice
            ATECO, apriamo la P.IVA e gestiamo tutti gli adempimenti dal portale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#servizi-online"
              className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium text-sm hover:bg-[var(--color-accent-dark)] transition-colors text-center"
            >
              Vedi i servizi online
            </Link>
            <Link
              href="/contatti"
              className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-colors text-center"
            >
              Prenota una consulenza
            </Link>
          </div>
        </div>
      ) : (
        <ProfessionistaCTA />
      )}

      <p className="text-xs text-zinc-500 leading-relaxed">
        <strong className="text-zinc-700">Avvertenza.</strong> Il codice fiscale calcolato e
        puramente tecnico. Per uso ufficiale fa fede il certificato rilasciato
        dall&apos;Agenzia delle Entrate, che risolve anche i casi di omocodia (codici
        fiscali identici assegnati a persone diverse).
      </p>
    </div>
  );
}

function CalcolaPanel() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [sesso, setSesso] = useState<"M" | "F">("M");
  const [dataNascita, setDataNascita] = useState("");
  const [comuneInput, setComuneInput] = useState("");
  const [comuneSelezionato, setComuneSelezionato] = useState<Comune | null>(null);
  const [codiceCatastaleOverride, setCodiceCatastaleOverride] = useState("");
  const [comuni, setComuni] = useState<Comune[] | null>(null);
  const [loadingComuni, setLoadingComuni] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [copied, setCopied] = useState(false);

  // Lazy load comuni on first focus
  const ensureComuni = useCallback(async () => {
    if (comuni || loadingComuni) return;
    setLoadingComuni(true);
    try {
      const data = await loadComuni();
      setComuni(data);
    } catch (e) {
      console.error("Errore caricamento comuni:", e);
    } finally {
      setLoadingComuni(false);
    }
  }, [comuni, loadingComuni]);

  const suggerimenti = useMemo(() => {
    if (!comuni) return [];
    return cercaComuni(comuni, comuneInput, 8);
  }, [comuni, comuneInput]);

  const codiceCatastale = comuneSelezionato?.c ?? codiceCatastaleOverride.toUpperCase().trim();

  const risultato: RisultatoCF = useMemo(
    () =>
      calcolaCodiceFiscale({
        nome,
        cognome,
        sesso,
        dataNascita,
        codiceCatastale,
      }),
    [nome, cognome, sesso, dataNascita, codiceCatastale]
  );

  async function handleCopy() {
    if (!risultato.valido) return;
    try {
      await navigator.clipboard.writeText(risultato.codiceFiscale);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Form */}
      <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-5">
        <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
          I tuoi dati
        </h2>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Cognome</label>
            <input
              type="text"
              value={cognome}
              onChange={(e) => setCognome(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
              autoComplete="family-name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
              autoComplete="given-name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Sesso</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="radio"
                name="sesso"
                value="M"
                checked={sesso === "M"}
                onChange={() => setSesso("M")}
              />
              Maschio
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="radio"
                name="sesso"
                value="F"
                checked={sesso === "F"}
                onChange={() => setSesso("F")}
              />
              Femmina
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Data di nascita
          </label>
          <input
            type="date"
            value={dataNascita}
            onChange={(e) => setDataNascita(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
            max={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Comune di nascita
          </label>
          <div className="relative">
            <input
              type="text"
              value={comuneInput}
              onChange={(e) => {
                setComuneInput(e.target.value);
                setComuneSelezionato(null);
                setShowDropdown(true);
              }}
              onFocus={() => {
                ensureComuni();
                setShowDropdown(true);
              }}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
              placeholder="Es. Parma, Milano, Roma..."
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
              autoComplete="off"
            />
            {showDropdown && suggerimenti.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-zinc-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {suggerimenti.map((c) => (
                  <button
                    key={c.c}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setComuneSelezionato(c);
                      setComuneInput(`${c.n} (${c.s})`);
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-50 transition-colors flex items-baseline justify-between"
                  >
                    <span>
                      {c.n} <span className="text-zinc-400">({c.s})</span>
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{c.c}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          {loadingComuni && (
            <p className="text-xs text-zinc-400 mt-1">Caricamento comuni...</p>
          )}
          {comuneSelezionato && (
            <p className="text-xs text-zinc-500 mt-1">
              Codice catastale: <span className="font-mono">{comuneSelezionato.c}</span>
            </p>
          )}
        </div>

        <details className="text-xs">
          <summary className="cursor-pointer text-zinc-500 hover:text-zinc-900">
            Non trovi il comune? Inserisci manualmente il codice catastale
          </summary>
          <div className="mt-2">
            <input
              type="text"
              value={codiceCatastaleOverride}
              onChange={(e) => {
                setCodiceCatastaleOverride(e.target.value);
                setComuneSelezionato(null);
              }}
              placeholder="Es. G337"
              maxLength={4}
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm uppercase font-mono"
            />
            <p className="text-xs text-zinc-500 mt-1">
              1 lettera + 3 cifre. Per nati all&apos;estero usa il codice dello stato (es. Z110
              Regno Unito).
            </p>
          </div>
        </details>
      </div>

      {/* Risultato */}
      <div className="lg:col-span-3 space-y-6">
        <div
          className={`rounded-2xl p-6 sm:p-8 border ${
            risultato.valido ? "bg-green-50 border-green-200" : "bg-zinc-50 border-zinc-200"
          }`}
        >
          <p className="text-xs tracking-[0.2em] uppercase font-medium mb-3 text-zinc-600">
            Il tuo codice fiscale
          </p>
          {risultato.valido ? (
            <>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold tracking-wider">
                  {risultato.codiceFiscale}
                </p>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3 py-2 text-xs font-medium rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors"
                >
                  {copied ? "Copiato" : "Copia"}
                </button>
              </div>
              {risultato.parti && (
                <div className="flex flex-wrap gap-1 text-xs font-mono">
                  <Segment label="Cognome" value={risultato.parti.cognome} color="bg-blue-100 text-blue-900" />
                  <Segment label="Nome" value={risultato.parti.nome} color="bg-purple-100 text-purple-900" />
                  <Segment label="Data + sesso" value={risultato.parti.dataSesso} color="bg-amber-100 text-amber-900" />
                  <Segment label="Comune" value={risultato.parti.comune} color="bg-emerald-100 text-emerald-900" />
                  <Segment label="Controllo" value={risultato.parti.controllo} color="bg-zinc-200 text-zinc-900" />
                </div>
              )}
            </>
          ) : (
            <p className="text-zinc-600 text-sm">
              {risultato.error ?? "Compila tutti i campi per calcolare il codice fiscale."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function DecodificaPanel() {
  const [cf, setCf] = useState("");
  const [comuni, setComuni] = useState<Comune[] | null>(null);

  useEffect(() => {
    loadComuni()
      .then(setComuni)
      .catch(() => setComuni([]));
  }, []);

  const risultato: DecodificaCF = useMemo(() => decodificaCodiceFiscale(cf), [cf]);

  const comune = useMemo(() => {
    if (!risultato.valido || !risultato.codiceCatastale || !comuni) return undefined;
    return comuneByCatastale(comuni, risultato.codiceCatastale);
  }, [risultato, comuni]);

  const mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-5">
        <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
          Codice da decodificare
        </h2>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Codice fiscale (16 caratteri)
          </label>
          <input
            type="text"
            value={cf}
            onChange={(e) => setCf(e.target.value.toUpperCase().replace(/\s/g, ""))}
            maxLength={16}
            placeholder="RSSMRA90A01G337H"
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm font-mono uppercase tracking-wider"
          />
          <p className="text-xs text-zinc-500 mt-1">
            Estraiamo data, sesso e comune di nascita. Nome e cognome non sono ricostruibili
            in modo univoco.
          </p>
        </div>
      </div>

      <div className="lg:col-span-3">
        <div
          className={`rounded-2xl p-6 sm:p-8 border ${
            risultato.valido ? "bg-green-50 border-green-200" : "bg-zinc-50 border-zinc-200"
          }`}
        >
          <p className="text-xs tracking-[0.2em] uppercase font-medium mb-3 text-zinc-600">
            Dati decodificati
          </p>
          {cf.length === 0 ? (
            <p className="text-zinc-600 text-sm">Incolla un codice fiscale per vedere i dati.</p>
          ) : risultato.valido ? (
            <dl className="space-y-3 text-sm">
              <Info label="Sesso" value={risultato.sesso === "M" ? "Maschio" : "Femmina"} />
              <Info
                label="Data di nascita"
                value={`${risultato.giorno} ${mesi[(risultato.mese ?? 1) - 1]} ${risultato.anno}`}
              />
              <Info
                label="Comune di nascita"
                value={
                  comune
                    ? `${comune.n} (${comune.s})`
                    : comuni === null
                      ? "Caricamento..."
                      : `Codice catastale ${risultato.codiceCatastale} (comune non in elenco)`
                }
              />
              <Info
                label="Codice catastale"
                value={risultato.codiceCatastale ?? "-"}
                mono
              />
            </dl>
          ) : (
            <p className="text-red-700 text-sm">{risultato.error}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Segment({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <span
      className={`${color} px-2 py-1 rounded text-xs font-mono`}
      title={label}
    >
      {value}
    </span>
  );
}

function Info({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-baseline justify-between border-b border-zinc-100 pb-2 last:border-0">
      <dt className="text-zinc-600 text-xs uppercase tracking-wider">{label}</dt>
      <dd className={mono ? "font-mono font-semibold" : "font-semibold"}>{value}</dd>
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
          fonte: "waitlist-professio-cf",
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
        Professio — il portale del tuo studio
      </h3>
      <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
        Offri calcolo codice fiscale e tanti altri tool ai tuoi clienti, brandizzati col
        nome del tuo studio. Documenti, scadenze, pratiche, tool fiscali: tutto in un
        unico portale. Lasciaci la tua email per entrare nella lista d&apos;attesa beta.
      </p>
      {status === "done" ? (
        <p className="text-green-300 text-sm">
          Ti abbiamo aggiunto. Ti contatteremo appena Professio sarà pronto.
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
            {status === "submitting" ? "Invio..." : "Iscrivimi alla waitlist"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-300 text-xs mt-2">Controlla l&apos;email e riprova.</p>
      )}
    </div>
  );
}
