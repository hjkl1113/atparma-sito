"use client";

import Link from "next/link";
import { startTransition, useEffect, useMemo, useState } from "react";
import {
  ALIQUOTE_DEFAULT_PER_MILLE,
  CATEGORIE,
  calcolaIMU,
  type CategoriaImmobile,
  type RisultatoIMU,
} from "./lib";

type Modo = "privato" | "professionista";

function formatEuro(n: number): string {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(n);
}
function formatEuroInt(n: number): string {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export function Tool() {
  const [modo, setModo] = useState<Modo>("privato");
  const [rendita, setRendita] = useState(600);
  const [categoria, setCategoria] = useState<CategoriaImmobile>("abitazione");
  const [abitazionePrincipale, setAbitazionePrincipale] = useState(false);
  const [quotaPossesso, setQuotaPossesso] = useState(100);
  const [mesiPossesso, setMesiPossesso] = useState(12);
  const [aliquotaPerMille, setAliquotaPerMille] = useState<number>(ALIQUOTE_DEFAULT_PER_MILLE.altro);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search);
    startTransition(() => {
      const m = p.get("m");
      if (m === "professionista" || m === "privato") setModo(m);
      const r = Number(p.get("r"));
      if (Number.isFinite(r) && r > 0) setRendita(r);
      const cat = p.get("cat");
      if (cat && CATEGORIE.some((c) => c.id === cat)) setCategoria(cat as CategoriaImmobile);
      if (p.get("ap") === "1") setAbitazionePrincipale(true);
      const qp = Number(p.get("q"));
      if (Number.isFinite(qp) && qp > 0 && qp <= 100) setQuotaPossesso(qp);
      const mp = Number(p.get("mp"));
      if (Number.isFinite(mp) && mp > 0 && mp <= 12) setMesiPossesso(mp);
      const a = Number(p.get("a"));
      if (Number.isFinite(a) && a > 0) setAliquotaPerMille(a);
    });
  }, []);

  const suggerisciAliquotaRidotta = abitazionePrincipale && categoria === "abitazione-lusso";

  const risultato: RisultatoIMU = useMemo(
    () =>
      calcolaIMU({
        rendita,
        categoria,
        abitazionePrincipale,
        quotaPossesso,
        mesiPossesso,
        aliquotaPerMille,
      }),
    [rendita, categoria, abitazionePrincipale, quotaPossesso, mesiPossesso, aliquotaPerMille]
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
            <span aria-hidden>👤</span> Sono un privato
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
        <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-5">
          <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
            I dati dell&apos;immobile
          </h2>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Rendita catastale (EUR)
            </label>
            <input
              type="number"
              value={rendita}
              onChange={(e) => setRendita(Math.max(0, Number(e.target.value) || 0))}
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
              min={0}
              step={10}
            />
            <p className="text-xs text-zinc-500 mt-1">
              La trovi su visura catastale dell&apos;Agenzia delle Entrate oppure nell&apos;atto
              di acquisto.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Categoria catastale
            </label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value as CategoriaImmobile)}
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm bg-white"
            >
              {CATEGORIE.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={abitazionePrincipale}
              onChange={(e) => setAbitazionePrincipale(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-zinc-700">
              <span className="font-medium">È abitazione principale</span> — residenza
              anagrafica e dimora abituale del proprietario e nucleo familiare.
            </span>
          </label>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Quota di possesso (%)
              </label>
              <input
                type="number"
                value={quotaPossesso}
                onChange={(e) => setQuotaPossesso(Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
                className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
                min={0}
                max={100}
                step={1}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Mesi di possesso
              </label>
              <input
                type="number"
                value={mesiPossesso}
                onChange={(e) => setMesiPossesso(Math.max(0, Math.min(12, Number(e.target.value) || 0)))}
                className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
                min={0}
                max={12}
                step={1}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Aliquota comunale (per mille)
            </label>
            <input
              type="number"
              value={aliquotaPerMille}
              onChange={(e) => setAliquotaPerMille(Math.max(0, Number(e.target.value) || 0))}
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
              min={0}
              step={0.1}
            />
            <p className="text-xs text-zinc-500 mt-1">
              Default nazionale: 10,6‰ altri immobili, 6‰ abitazione principale di lusso.
              Ogni comune delibera aliquote proprie — verifica sul sito del tuo comune.
            </p>
            {suggerisciAliquotaRidotta && aliquotaPerMille > 6.5 && (
              <button
                type="button"
                onClick={() => setAliquotaPerMille(ALIQUOTE_DEFAULT_PER_MILLE.principaleLusso)}
                className="mt-2 text-xs text-[var(--color-accent)] hover:underline"
              >
                Applica aliquota ridotta 6‰ (abitazione principale di lusso)
              </button>
            )}
          </div>
        </div>

        {/* Risultato */}
        <div className="lg:col-span-3 space-y-6">
          {risultato.esente ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8">
              <p className="text-xs tracking-[0.2em] uppercase font-medium mb-2 text-zinc-600">
                Esente
              </p>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-2">
                Nessuna IMU da pagare
              </h3>
              <p className="text-zinc-700 text-sm">{risultato.motivoEsenzione}</p>
            </div>
          ) : (
            <>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
                <p className="text-xs tracking-[0.2em] uppercase font-medium mb-2 text-zinc-600">
                  IMU annua dovuta
                </p>
                <p className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] tabular-nums mb-4">
                  {formatEuro(risultato.imuAnnua)}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Acconto 16 giu</p>
                    <p className="text-xl font-semibold tabular-nums">{formatEuro(risultato.acconto)}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Saldo 16 dic</p>
                    <p className="text-xl font-semibold tabular-nums">{formatEuro(risultato.saldo)}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8">
                <h3 className="text-sm font-semibold mb-4 font-[family-name:var(--font-heading)]">
                  Come si calcola
                </h3>
                <dl className="space-y-1.5 text-sm">
                  <Riga label="Rendita catastale" value={formatEuroInt(rendita)} />
                  <Riga
                    label={`x rivalutazione 5% x moltiplicatore ${risultato.dettagli.moltiplicatore}`}
                    value={`= ${formatEuroInt(risultato.baseImponibile)}`}
                    muted
                  />
                  <Riga label="Base imponibile" value={formatEuroInt(risultato.baseImponibile)} strong />
                  <Riga
                    label={`x aliquota ${aliquotaPerMille}‰ x quota ${quotaPossesso}% x ${mesiPossesso}/12 mesi`}
                    value={formatEuro(
                      risultato.baseImponibile * (aliquotaPerMille / 1000) *
                        risultato.dettagli.quotaEffettiva * risultato.dettagli.mesiFrazione
                    )}
                    muted
                  />
                  {risultato.dettagli.detrazioneApplicata > 0 && (
                    <Riga
                      label="- Detrazione abitazione principale"
                      value={`-${formatEuro(risultato.dettagli.detrazioneApplicata)}`}
                      muted
                    />
                  )}
                  <Riga label="= IMU annua" value={formatEuro(risultato.imuAnnua)} strong />
                </dl>
              </div>
            </>
          )}

          {modo === "privato" ? (
            <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-heading)]">
                Serve aiuto con F24 e versamenti?
              </h3>
              <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
                Prepariamo F24 IMU, gestiamo acconto e saldo, controlliamo ravvedimenti per
                ritardi. Dottori commercialisti iscritti all&apos;albo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contatti"
                  className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium text-sm hover:bg-[var(--color-accent-dark)] transition-colors text-center"
                >
                  Contattaci
                </Link>
              </div>
            </div>
          ) : (
            <ProfessionistaCTA />
          )}

          <p className="text-xs text-zinc-500 leading-relaxed">
            <strong className="text-zinc-700">Avvertenza.</strong> Calcolo semplificato:
            non considera riduzioni specifiche (comodato a parenti, fabbricati inagibili,
            terreni agricoli IAP, immobili storici), esenzioni settoriali o aliquote
            differenziate che il comune puo deliberare per fasce di rendita o uso. Le
            aliquote reali vanno verificate sul portale del tuo comune (delibera IMU
            annuale). Non sostituisce la consulenza di un commercialista.
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
  value: string;
  strong?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between gap-4 ${
        strong ? "border-t border-zinc-100 pt-2 mt-1" : ""
      } ${muted ? "text-zinc-500" : ""}`}
    >
      <dt className={strong ? "text-zinc-800 font-medium" : muted ? "text-zinc-500 text-xs" : "text-zinc-600"}>
        {label}
      </dt>
      <dd className={strong ? "font-semibold" : muted ? "font-normal text-xs" : "font-medium"}>
        {value}
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
          fonte: "waitlist-professio-imu",
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
        Gestisci IMU, F24, scadenziario e documenti dei tuoi clienti in un unico portale
        brandizzato con il tuo studio. Lasciaci la tua email per entrare nella lista
        d&apos;attesa beta.
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
