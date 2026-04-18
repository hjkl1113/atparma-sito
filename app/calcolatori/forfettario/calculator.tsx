"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ATTIVITA, CASSA_LABEL, calcola, type Cassa } from "./lib";

function formatEuro(n: number): string {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export function Calculator() {
  const [ricavi, setRicavi] = useState(30000);
  const [spese, setSpese] = useState(3000);
  const [attivitaId, setAttivitaId] = useState(ATTIVITA[0].id);
  const [cassa, setCassa] = useState<Cassa>("separata");
  const [aliquotaCassaPrivata, setAliquotaCassaPrivata] = useState(0.16);
  const [nuovaAttivita, setNuovaAttivita] = useState(true);
  const [inpsVersatiPrec, setInpsVersatiPrec] = useState(4800);
  const [primoAnno, setPrimoAnno] = useState(false);

  const risultato = useMemo(
    () =>
      calcola({
        ricavi,
        spese,
        attivitaId,
        cassa,
        aliquotaCassaPrivata,
        nuovaAttivita,
        inpsVersatiPrec,
        primoAnno,
      }),
    [ricavi, spese, attivitaId, cassa, aliquotaCassaPrivata, nuovaAttivita, inpsVersatiPrec, primoAnno]
  );

  const verdetto = risultato.verdetto;
  const diff = Math.abs(risultato.differenzaNettaForfettario);

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Form */}
      <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-6">
        <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
          I tuoi dati
        </h2>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Tipo di attivita
          </label>
          <select
            value={attivitaId}
            onChange={(e) => setAttivitaId(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm bg-white"
          >
            {ATTIVITA.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label} ({Math.round(a.coefficiente * 100)}%)
              </option>
            ))}
          </select>
          <p className="text-xs text-zinc-500 mt-1">
            Il coefficiente determina il reddito imponibile forfettario.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Ricavi annui previsti (EUR)
          </label>
          <input
            type="number"
            value={ricavi}
            onChange={(e) => setRicavi(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
            min={0}
            step={1000}
          />
          {ricavi > 85000 && (
            <p className="text-xs text-red-600 mt-1">
              Oltre EUR 85.000 il forfettario non e applicabile. Serve il regime ordinario.
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Spese annue previste (EUR)
          </label>
          <input
            type="number"
            value={spese}
            onChange={(e) => setSpese(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
            min={0}
            step={500}
          />
          <p className="text-xs text-zinc-500 mt-1">
            Usate solo per calcolare l&apos;ordinario. Il forfettario le ignora.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Cassa previdenziale
          </label>
          <select
            value={cassa}
            onChange={(e) => setCassa(e.target.value as Cassa)}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm bg-white"
          >
            {(Object.keys(CASSA_LABEL) as Cassa[]).map((k) => (
              <option key={k} value={k}>
                {CASSA_LABEL[k]}
              </option>
            ))}
          </select>
        </div>

        {cassa === "privata" && (
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Aliquota cassa privata (%)
            </label>
            <input
              type="number"
              value={Math.round(aliquotaCassaPrivata * 100)}
              onChange={(e) =>
                setAliquotaCassaPrivata(Math.max(0, Math.min(0.5, Number(e.target.value) / 100)))
              }
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
              min={0}
              max={50}
              step={1}
            />
            <p className="text-xs text-zinc-500 mt-1">
              Inarcassa ~16%, Cassa Forense variabile, ENPAP ~10%. Verifica la tua cassa.
            </p>
          </div>
        )}

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={nuovaAttivita}
            onChange={(e) => setNuovaAttivita(e.target.checked)}
            className="mt-1"
          />
          <span className="text-sm text-zinc-700">
            <span className="font-medium">Nuova attivita</span> — primi 5 anni, se rispetti i
            requisiti l&apos;aliquota e 5% invece di 15%.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={primoAnno}
            onChange={(e) => setPrimoAnno(e.target.checked)}
            className="mt-1"
          />
          <span className="text-sm text-zinc-700">
            <span className="font-medium">E&apos; il mio primo anno</span> — nessun contributo
            INPS pagato negli anni precedenti, quindi nessuna deduzione.
          </span>
        </label>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            INPS versati nell&apos;anno (deducibili) — EUR
          </label>
          <input
            type="number"
            value={primoAnno ? 0 : inpsVersatiPrec}
            disabled={primoAnno}
            onChange={(e) => setInpsVersatiPrec(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm disabled:bg-zinc-50 disabled:text-zinc-400"
            min={0}
            step={100}
          />
          <p className="text-xs text-zinc-500 mt-1">
            {primoAnno
              ? "Nessuna deduzione: e il tuo primo anno di attivita."
              : "Contributi previdenziali effettivamente pagati durante l'anno d'imposta (saldo anno precedente + acconti). Principio di cassa: solo quelli gia versati riducono il reddito imponibile."}
          </p>
        </div>
      </div>

      {/* Risultato */}
      <div className="lg:col-span-3 space-y-6">
        {/* Verdetto */}
        <div
          className={`rounded-2xl p-6 sm:p-8 border ${
            verdetto === "forfettario"
              ? "bg-green-50 border-green-200"
              : verdetto === "ordinario"
                ? "bg-amber-50 border-amber-200"
                : "bg-zinc-50 border-zinc-200"
          }`}
        >
          <p className="text-xs tracking-[0.2em] uppercase font-medium mb-2 text-zinc-600">
            Il verdetto
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] mb-2">
            {risultato.forfettario.oltreSoglia
              ? "Il forfettario non e applicabile"
              : verdetto === "forfettario"
                ? "Ti conviene il forfettario"
                : verdetto === "ordinario"
                  ? "Ti conviene il regime ordinario"
                  : "Differenza minima tra i due regimi"}
          </h3>
          <p className="text-zinc-700 text-sm leading-relaxed">
            {risultato.forfettario.oltreSoglia
              ? "Superi la soglia di EUR 85.000 di ricavi annui: l'accesso al forfettario e precluso."
              : verdetto === "pareggio"
                ? "I due regimi producono un netto simile. Scegli in base a previsioni di crescita, credibilita bancaria e gestione IVA."
                : `Con i dati inseriti il ${verdetto === "forfettario" ? "forfettario" : "regime ordinario"} ti fa risparmiare circa ${formatEuro(diff)}/anno di imposte e contributi.`}
          </p>
        </div>

        {/* Confronto */}
        <div className="grid sm:grid-cols-2 gap-4">
          <RegimeCard
            titolo="Forfettario"
            aliquota={nuovaAttivita ? "5% (start-up)" : "15%"}
            redditoLordoLabel="Ricavi x coefficiente"
            disabilitato={risultato.forfettario.oltreSoglia}
            evidenza={verdetto === "forfettario" && !risultato.forfettario.oltreSoglia}
            redditoLordo={risultato.forfettario.redditoLordo}
            deduzioneInps={risultato.forfettario.deduzioneInps}
            redditoImponibile={risultato.forfettario.redditoImponibile}
            imposta={risultato.forfettario.imposta}
            contributi={risultato.forfettario.contributi}
            netto={risultato.forfettario.netto}
          />
          <RegimeCard
            titolo="Ordinario"
            aliquota="IRPEF scaglioni + addizionali"
            redditoLordoLabel="Ricavi - spese deducibili"
            evidenza={verdetto === "ordinario"}
            redditoLordo={risultato.ordinario.redditoLordo}
            deduzioneInps={risultato.ordinario.deduzioneInps}
            redditoImponibile={risultato.ordinario.redditoImponibile}
            imposta={risultato.ordinario.imposta}
            contributi={risultato.ordinario.contributi}
            netto={risultato.ordinario.netto}
          />
        </div>

        {/* Verifica risparmio (what-if) */}
        <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200">
          <h4 className="text-sm font-semibold mb-1 font-[family-name:var(--font-heading)]">
            Verifica risparmio
          </h4>
          <p className="text-xs text-zinc-600 mb-5">
            Sposta i cursori per vedere subito come cambia il netto, senza rifare il form.
          </p>

          <WhatIfSlider
            label="Ricavi annui"
            value={ricavi}
            onChange={setRicavi}
            min={5000}
            max={85000}
            step={1000}
          />
          <WhatIfSlider
            label="INPS deducibili"
            value={primoAnno ? 0 : inpsVersatiPrec}
            onChange={(v) => {
              setInpsVersatiPrec(v);
              if (v > 0 && primoAnno) setPrimoAnno(false);
            }}
            min={0}
            max={15000}
            step={100}
            disabled={primoAnno}
            hint={primoAnno ? "Disabilitato: e il tuo primo anno." : undefined}
          />
        </div>

        {/* CTA */}
        <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-heading)]">
            Vuoi aprire la Partita IVA con noi?
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

        <p className="text-xs text-zinc-500 leading-relaxed">
          <strong className="text-zinc-700">Avvertenza.</strong> Stima indicativa basata su
          aliquote 2026 (IRPEF 23/35/43%, addizionali medie 2,5%, gestione separata 26,07%,
          artigiani/commercianti 24% con minimale EUR 4.208). Non sostituisce una
          consulenza fiscale personalizzata: variabili come detrazioni IRPEF, deduzioni
          analitiche, IVA e riduzioni contributive possono cambiare il risultato.
        </p>
      </div>
    </div>
  );
}

function RegimeCard({
  titolo,
  aliquota,
  redditoLordoLabel,
  redditoLordo,
  deduzioneInps,
  redditoImponibile,
  imposta,
  contributi,
  netto,
  evidenza,
  disabilitato,
}: {
  titolo: string;
  aliquota: string;
  redditoLordoLabel: string;
  redditoLordo: number;
  deduzioneInps: number;
  redditoImponibile: number;
  imposta: number;
  contributi: number;
  netto: number;
  evidenza?: boolean;
  disabilitato?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 border ${
        disabilitato
          ? "bg-zinc-100 border-zinc-200 opacity-60"
          : evidenza
            ? "bg-white border-green-400 ring-2 ring-green-400/30"
            : "bg-white border-zinc-200"
      }`}
    >
      <div className="flex items-baseline justify-between mb-4">
        <h4 className="font-semibold font-[family-name:var(--font-heading)]">{titolo}</h4>
        <span className="text-xs text-zinc-500">{aliquota}</span>
      </div>

      <dl className="space-y-1.5 text-sm">
        <Riga label={redditoLordoLabel} value={redditoLordo} />
        <Riga
          label="- Contributi INPS pagati (deducibili)"
          value={-deduzioneInps}
          muted
        />
        <Riga label="= Reddito imponibile" value={redditoImponibile} strong />
        <Riga label="Imposte" value={imposta} />
        <Riga label="Contributi INPS anno corrente" value={contributi} />
      </dl>

      <div className="border-t border-zinc-100 mt-4 pt-4 flex items-baseline justify-between">
        <span className="text-xs text-zinc-500 uppercase tracking-wider">Netto stimato</span>
        <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
          {formatEuro(netto)}
        </span>
      </div>
    </div>
  );
}

function WhatIfSlider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  disabled,
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  disabled?: boolean;
  hint?: string;
}) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-baseline justify-between mb-1">
        <label className="text-xs font-medium text-zinc-700">{label}</label>
        <span className="text-sm font-semibold tabular-nums">{formatEuro(value)}</span>
      </div>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className="w-full accent-[var(--color-accent)] disabled:opacity-40"
      />
      {hint ? <p className="text-xs text-zinc-500 mt-1">{hint}</p> : null}
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
