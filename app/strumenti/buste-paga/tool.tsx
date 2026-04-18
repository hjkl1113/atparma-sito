"use client";

import Link from "next/link";
import { startTransition, useEffect, useMemo, useState } from "react";
import { calcolaBustaPaga, type Breakdown, type Mensilita } from "./lib";

type Modo = "privato" | "professionista";

function formatEuro(n: number): string {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export function Tool() {
  const [modo, setModo] = useState<Modo>("privato");
  const [tipoCalcolo, setTipoCalcolo] = useState<"lordo-netto" | "netto-lordo">("lordo-netto");
  const [valore, setValore] = useState(30000);
  const [mensilita, setMensilita] = useState<Mensilita>(13);
  const [trattamentoIntegrativo, setTrattamentoIntegrativo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search);
    startTransition(() => {
      const m = p.get("m");
      if (m === "professionista" || m === "privato") setModo(m);
      const t = p.get("t");
      if (t === "netto-lordo") setTipoCalcolo("netto-lordo");
      const v = Number(p.get("v"));
      if (Number.isFinite(v) && v > 0) setValore(v);
      const mn = Number(p.get("mn"));
      if (mn === 12 || mn === 13 || mn === 14) setMensilita(mn);
      if (p.get("ti") === "1") setTrattamentoIntegrativo(true);
    });
  }, []);

  const risultato: Breakdown = useMemo(
    () =>
      calcolaBustaPaga({
        modo: tipoCalcolo,
        valore,
        mensilita,
        trattamentoIntegrativo,
      }),
    [tipoCalcolo, valore, mensilita, trattamentoIntegrativo]
  );

  return (
    <div className="space-y-6">
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
            <span aria-hidden>👤</span> Sono un privato / lavoratore
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

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-6">
          <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
            I tuoi dati
          </h2>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Tipo di calcolo
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTipoCalcolo("lordo-netto")}
                className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                  tipoCalcolo === "lordo-netto"
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                Lordo → Netto
              </button>
              <button
                type="button"
                onClick={() => setTipoCalcolo("netto-lordo")}
                className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                  tipoCalcolo === "netto-lordo"
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                Netto → Lordo
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              {tipoCalcolo === "lordo-netto" ? "RAL annua (EUR)" : "Netto annuo desiderato (EUR)"}
            </label>
            <input
              type="number"
              value={valore}
              onChange={(e) => setValore(Math.max(0, Number(e.target.value) || 0))}
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
              min={0}
              step={500}
            />
            <p className="text-xs text-zinc-500 mt-1">
              {tipoCalcolo === "lordo-netto"
                ? "Reddito annuo lordo dichiarato in busta paga, senza TFR."
                : "Somma dei netti mensili + 13a/14a ricevuti nell'anno."}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Mensilità
            </label>
            <div className="grid grid-cols-3 gap-2">
              {([12, 13, 14] as Mensilita[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMensilita(m)}
                  className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                    mensilita === m
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 hover:bg-zinc-50"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              13 = standard (commercio, industria). 14 = contratti con 14a (bancari,
              metalmeccanici in alcuni CCNL).
            </p>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={trattamentoIntegrativo}
              onChange={(e) => setTrattamentoIntegrativo(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-zinc-700">
              <span className="font-medium">Trattamento integrativo</span> — 1.200 €/anno
              per imponibili fino a 15.000 € (se hai capienza IRPEF). Verifica con il tuo
              consulente del lavoro.
            </span>
          </label>
        </div>

        {/* Risultato */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8">
            <p className="text-xs tracking-[0.2em] uppercase font-medium mb-3 text-zinc-600">
              Netto in busta
            </p>
            <div className="flex flex-wrap items-baseline gap-6 mb-2">
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] tabular-nums">
                  {formatEuro(risultato.nettoPerRata)}
                </p>
                <p className="text-xs text-zinc-600 mt-1">per ogni mensilità (su {mensilita})</p>
              </div>
              <div>
                <p className="text-xl font-semibold font-[family-name:var(--font-heading)] tabular-nums">
                  {formatEuro(risultato.nettoAnnuo)}
                </p>
                <p className="text-xs text-zinc-600 mt-1">netto annuo</p>
              </div>
            </div>
            {tipoCalcolo === "netto-lordo" && (
              <p className="text-sm text-zinc-700 mt-4">
                Per ottenere questo netto ti serve una RAL di{" "}
                <strong>{formatEuro(risultato.ralAnnua)}</strong>.
              </p>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8">
            <h3 className="text-sm font-semibold mb-4 font-[family-name:var(--font-heading)]">
              Breakdown annuo
            </h3>
            <dl className="space-y-1.5 text-sm">
              <Riga label="RAL (reddito annuo lordo)" value={risultato.ralAnnua} />
              <Riga
                label="- Contributi INPS lavoratore (9,49%)"
                value={-risultato.contributiInps}
                muted
              />
              <Riga label="= Imponibile fiscale" value={risultato.imponibileFiscale} strong />
              <Riga label="IRPEF lorda (scaglioni)" value={risultato.irpefLorda} />
              <Riga
                label="- Detrazione lavoro dipendente"
                value={-risultato.detrazioneLavoro}
                muted
              />
              <Riga label="= IRPEF netta" value={risultato.irpefNetta} strong />
              <Riga label="Addizionali regionale + comunale (2,5%)" value={risultato.addizionali} />
              {risultato.trattamentoIntegrativo > 0 && (
                <Riga
                  label="+ Trattamento integrativo"
                  value={risultato.trattamentoIntegrativo}
                  muted
                />
              )}
              <Riga label="Netto annuo" value={risultato.nettoAnnuo} strong />
            </dl>
          </div>

          {modo === "privato" ? (
            <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-heading)]">
                Servono buste paga gestite bene?
              </h3>
              <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
                Gestiamo buste paga, CU, contributi e adempimenti per la tua azienda o
                società con consulenti del lavoro iscritti all&apos;albo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#servizi-online"
                  className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium text-sm hover:bg-[var(--color-accent-dark)] transition-colors text-center"
                >
                  Vedi i servizi
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
            <strong className="text-zinc-700">Avvertenza.</strong> Stima indicativa su
            lavoratore dipendente standard (INPS 9,49%). Non modellati: TFR, welfare,
            detrazioni familiari, premi, straordinari, trasferte, tassazione separata,
            addizionali specifiche per regione/comune, trattenute sindacali, malattia,
            CIG. Non sostituisce il cedolino rilasciato dal consulente del lavoro.
          </p>
        </div>
      </div>
    </div>
  );
}

function Riga({
  label,
  value,
  strong,
  muted,
}: {
  label: string;
  value: number;
  strong?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between ${
        strong ? "border-t border-zinc-100 pt-2 mt-1" : ""
      } ${muted ? "text-zinc-500" : ""}`}
    >
      <dt className={strong ? "text-zinc-800 font-medium" : muted ? "text-zinc-500" : "text-zinc-600"}>
        {label}
      </dt>
      <dd className={strong ? "font-semibold" : muted ? "font-normal" : "font-medium"}>
        {formatEuro(value)}
      </dd>
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
          fonte: "waitlist-professio-buste-paga",
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
        Offri simulatore busta paga e tanti altri tool ai tuoi clienti brandizzati con il
        tuo studio. Documenti, scadenze, pratiche, tool fiscali: tutto in un unico
        portale. Lasciaci la tua email per entrare nella lista d&apos;attesa beta.
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
