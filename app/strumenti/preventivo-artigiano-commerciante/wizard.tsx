"use client";

import { useState } from "react";
import Link from "next/link";
import {
  calcolaPreventivo,
  type InputPreventivo,
  type Tipologia,
  type Regime,
  type CaratteristicaAttivita,
  type RisultatoPreventivo,
} from "@/lib/costi-burocratici";
import {
  REQUISITI_ESCLUSIONE,
  verificaIdoneita,
  type RequisitiRispostaId,
} from "@/lib/forfettario-requisiti";

type StepId = 1 | 2 | 3 | 4 | 5 | 6;

const PROVINCE_IT = [
  "AG","AL","AN","AO","AP","AQ","AR","AT","AV","BA","BG","BI","BL","BN","BO",
  "BR","BS","BT","BZ","CA","CB","CE","CH","CL","CN","CO","CR","CS","CT","CZ",
  "EN","FC","FE","FG","FI","FM","FR","GE","GO","GR","IM","IS","KR","LC","LE",
  "LI","LO","LT","LU","MB","MC","ME","MI","MN","MO","MS","MT","NA","NO","NU",
  "OR","PA","PC","PD","PE","PG","PI","PN","PO","PR","PT","PU","PV","PZ","RA",
  "RC","RE","RG","RI","RM","RN","RO","SA","SI","SO","SP","SR","SS","SU","SV",
  "TA","TE","TN","TO","TP","TR","TS","TV","UD","VA","VB","VC","VE","VI","VR",
  "VT","VV",
];

export function PreventivoWizard() {
  const [step, setStep] = useState<StepId>(1);
  const [tipologia, setTipologia] = useState<Tipologia | null>(null);
  const [requisitiRisposte, setRequisitiRisposte] = useState<
    Partial<Record<RequisitiRispostaId, boolean>>
  >({});
  const [regime, setRegime] = useState<Regime | null>(null);
  const [caratteristiche, setCaratteristiche] = useState<
    Partial<Record<CaratteristicaAttivita, boolean>>
  >({});
  const [provincia, setProvincia] = useState("");
  const [risultato, setRisultato] = useState<RisultatoPreventivo | null>(null);

  const esitoRequisiti =
    REQUISITI_ESCLUSIONE.every((r) => requisitiRisposte[r.id] !== undefined)
      ? verificaIdoneita(requisitiRisposte)
      : null;

  // Lead capture (step 6)
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [privacyOk, setPrivacyOk] = useState(false);
  const [invioStato, setInvioStato] = useState<"idle" | "pending" | "ok" | "error">("idle");
  const [invioErrore, setInvioErrore] = useState("");

  function toggleCaratteristica(k: CaratteristicaAttivita) {
    setCaratteristiche((prev) => {
      const next = { ...prev };
      if (next[k]) delete next[k];
      else next[k] = true;
      return next;
    });
  }

  function rispondiRequisito(id: RequisitiRispostaId, valore: boolean) {
    setRequisitiRisposte((prev) => ({ ...prev, [id]: valore }));
  }

  function avanza() {
    // Passando da step 2 a step 3: preseleziona regime se non ancora scelto
    if (step === 2 && esitoRequisiti && regime === null) {
      setRegime(esitoRequisiti.idoneo ? "forfettario" : "non-forfettario");
    }
    // Passando da step 5 a step 6: calcola preventivo
    if (step === 5) {
      if (!tipologia || !regime) return;
      const input: InputPreventivo = {
        tipologia,
        regime,
        caratteristiche,
        provincia: provincia || undefined,
      };
      setRisultato(calcolaPreventivo(input));
    }
    setStep((s) => (s < 6 ? ((s + 1) as StepId) : s));
  }

  function indietro() {
    setStep((s) => (s > 1 ? ((s - 1) as StepId) : s));
  }

  async function inviaPreventivo() {
    if (!risultato || !tipologia || !regime) return;
    setInvioStato("pending");
    setInvioErrore("");
    try {
      const res = await fetch("/api/preventivo-artigiano", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          telefono,
          tipologia,
          regime,
          caratteristiche,
          provincia,
          totale: risultato.totalePrimoAnno,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Errore invio");
      }
      setInvioStato("ok");
    } catch (e) {
      setInvioStato("error");
      setInvioErrore(e instanceof Error ? e.message : "Errore sconosciuto");
    }
  }

  const canAvanzare =
    (step === 1 && tipologia !== null) ||
    (step === 2 && esitoRequisiti !== null) ||
    (step === 3 && regime !== null) ||
    step === 4 ||
    (step === 5 && provincia.length === 2);

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
      <ProgressHeader step={step} />

      <div className="p-6 sm:p-8">
        {step === 1 && (
          <StepTipologia tipologia={tipologia} setTipologia={setTipologia} />
        )}
        {step === 2 && (
          <StepRequisiti
            risposte={requisitiRisposte}
            rispondi={rispondiRequisito}
          />
        )}
        {step === 3 && (
          <StepRegime
            regime={regime}
            setRegime={setRegime}
            esitoRequisiti={esitoRequisiti}
          />
        )}
        {step === 4 && (
          <StepCaratteristiche
            caratteristiche={caratteristiche}
            toggle={toggleCaratteristica}
          />
        )}
        {step === 5 && (
          <StepProvincia provincia={provincia} setProvincia={setProvincia} />
        )}
        {step === 6 && risultato && (
          <StepRisultato
            risultato={risultato}
            tipologia={tipologia!}
            regime={regime!}
            nome={nome}
            setNome={setNome}
            email={email}
            setEmail={setEmail}
            telefono={telefono}
            setTelefono={setTelefono}
            privacyOk={privacyOk}
            setPrivacyOk={setPrivacyOk}
            invioStato={invioStato}
            invioErrore={invioErrore}
            invia={inviaPreventivo}
          />
        )}
      </div>

      {step < 6 && (
        <div className="border-t border-zinc-100 p-4 sm:p-6 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={indietro}
              className="px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900"
            >
              ← Indietro
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={avanza}
            disabled={!canAvanzare}
            className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium text-sm hover:bg-[var(--color-accent-dark)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {step === 5 ? "Calcola preventivo" : "Avanti"}
          </button>
        </div>
      )}
    </div>
  );
}

function ProgressHeader({ step }: { step: StepId }) {
  const totalSteps = 6;
  const percent = (step / totalSteps) * 100;
  const labels = [
    "Tipologia",
    "Requisiti forfettario",
    "Regime",
    "Caratteristiche",
    "Provincia",
    "Preventivo",
  ];
  return (
    <div className="bg-[var(--color-surface)] border-b border-zinc-100 p-4 sm:p-6">
      <div className="flex items-center justify-between text-xs text-zinc-600 mb-2">
        <span className="font-semibold text-[var(--color-accent)]">
          Step {step} di {totalSteps}: {labels[step - 1]}
        </span>
        <span>{Math.round(percent)}%</span>
      </div>
      <div className="h-1.5 bg-zinc-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--color-accent)] transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

// --- STEP 1: Tipologia ---

function StepTipologia({
  tipologia,
  setTipologia,
}: {
  tipologia: Tipologia | null;
  setTipologia: (t: Tipologia) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)]">
        Che tipo di attività vuoi aprire?
      </h2>
      <p className="text-sm text-zinc-600 mb-6">
        Questa scelta determina le iscrizioni camerali e la gestione INPS.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <OptionCard
          selected={tipologia === "artigiano"}
          onClick={() => setTipologia("artigiano")}
          title="Artigiano"
          desc="Attività manuale o di produzione: idraulico, elettricista, estetista, parrucchiere, riparatore, sarto, ecc."
          note="Iscrizione Albo Imprese Artigiane (SIA)"
        />
        <OptionCard
          selected={tipologia === "commerciante"}
          onClick={() => setTipologia("commerciante")}
          title="Commerciante"
          desc="Vendita al pubblico o all'ingrosso: negozio, e-commerce, ambulante, ristorazione, bar, ecc."
          note="Iscrizione Registro Imprese sezione ordinaria"
        />
      </div>

      <div className="mt-6 p-4 bg-zinc-50 rounded-lg border border-zinc-100 text-xs text-zinc-600">
        <strong>Sei un libero professionista?</strong> (consulente, sviluppatore, designer, medico...) —
        Non serve CCIAA. Vai al{" "}
        <Link
          href="/servizi/piva-professionista"
          className="text-[var(--color-accent)] hover:underline"
        >
          bundle Professionista →
        </Link>
      </div>
    </div>
  );
}

// --- STEP 2: Requisiti forfettario ---

type EsitoRequisiti = ReturnType<typeof verificaIdoneita>;

function StepRequisiti({
  risposte,
  rispondi,
}: {
  risposte: Partial<Record<RequisitiRispostaId, boolean>>;
  rispondi: (id: RequisitiRispostaId, valore: boolean) => void;
}) {
  const tutteRisposte = REQUISITI_ESCLUSIONE.every((r) => risposte[r.id] !== undefined);
  const esito = tutteRisposte ? verificaIdoneita(risposte) : null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)]">
        Puoi accedere al regime forfettario?
      </h2>
      <p className="text-sm text-zinc-600 mb-6">
        Il forfettario ha requisiti di legge stringenti. Rispondi alle 4 domande
        e ti guidiamo nella scelta del regime più adatto.
      </p>

      <div className="space-y-4">
        {REQUISITI_ESCLUSIONE.map((req, idx) => (
          <div
            key={req.id}
            className="border border-zinc-200 rounded-xl p-4 bg-white"
          >
            <p className="text-sm font-semibold text-zinc-900 mb-1">
              {idx + 1}. {req.domanda}
            </p>
            <p className="text-xs text-zinc-600 mb-3 leading-relaxed">
              {req.dettaglio}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => rispondi(req.id, false)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold border-2 transition-all ${
                  risposte[req.id] === false
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
                }`}
              >
                No
              </button>
              <button
                onClick={() => rispondi(req.id, true)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold border-2 transition-all ${
                  risposte[req.id] === true
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
                }`}
              >
                Sì
              </button>
            </div>
          </div>
        ))}
      </div>

      {esito && (
        <div
          className={`mt-6 p-4 rounded-xl border ${
            esito.idoneo
              ? "bg-green-50 border-green-200"
              : "bg-amber-50 border-amber-200"
          }`}
        >
          {esito.idoneo ? (
            <p className="text-sm text-green-900">
              <strong>✓ Puoi aprire in regime forfettario.</strong> In base alle
              risposte nessuna causa di esclusione. Nel prossimo step preselezioneremo
              il forfettario (puoi comunque cambiare).
            </p>
          ) : (
            <div className="text-sm text-amber-900">
              <p>
                <strong>⚠ Il forfettario non è disponibile nel tuo caso.</strong>{" "}
                Causa di esclusione:
              </p>
              <ul className="mt-2 ml-4 list-disc space-y-0.5">
                {esito.motivi.map((m) => (
                  <li key={m.id}>{m.domanda.replace("?", "")}</li>
                ))}
              </ul>
              <p className="mt-2">
                Nel prossimo step preselezioneremo il regime semplificato/ordinario
                (puoi comunque cambiare).
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// --- STEP 3: Regime ---

function StepRegime({
  regime,
  setRegime,
  esitoRequisiti,
}: {
  regime: Regime | null;
  setRegime: (r: Regime) => void;
  esitoRequisiti: EsitoRequisiti | null;
}) {
  const warningContrario =
    esitoRequisiti !== null &&
    regime !== null &&
    ((esitoRequisiti.idoneo && regime === "non-forfettario") ||
      (!esitoRequisiti.idoneo && regime === "forfettario"));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)]">
        Quale regime fiscale?
      </h2>
      <p className="text-sm text-zinc-600 mb-6">
        La scelta incide sulla contabilità annuale. L&apos;apertura è uguale nei due casi.
      </p>

      {esitoRequisiti && (
        <div
          className={`mb-4 p-3 rounded-lg text-xs ${
            esitoRequisiti.idoneo
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-amber-50 text-amber-800 border border-amber-200"
          }`}
        >
          Suggerimento in base ai requisiti verificati:{" "}
          <strong>
            {esitoRequisiti.idoneo ? "Forfettario" : "Semplificato/Ordinario"}
          </strong>
          . Puoi comunque scegliere diversamente.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <OptionCard
          selected={regime === "forfettario"}
          onClick={() => setRegime("forfettario")}
          title="Regime forfettario"
          desc="Tassazione al 5% (primi 5 anni) o 15%. Per ricavi fino €85.000/anno. Meno adempimenti."
          note="Contabilità annuale da €599"
        />
        <OptionCard
          selected={regime === "non-forfettario"}
          onClick={() => setRegime("non-forfettario")}
          title="Regime semplificato/ordinario"
          desc="Per ricavi previsti sopra €85.000 o per chi ha costi alti. IVA periodica, registri completi."
          note="Contabilità annuale da €1.199"
        />
      </div>

      {warningContrario && (
        <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800">
          ⚠ La tua scelta è contraria all&apos;esito della verifica requisiti.
          Procedi solo se sei certo della tua situazione — il controllo definitivo
          verrà fatto comunque in consulenza prima della firma del mandato.
        </div>
      )}

      <div className="mt-6 p-4 bg-[var(--color-surface)] rounded-lg border border-zinc-100 text-xs text-zinc-600">
        <strong>Non sai quale conviene?</strong> Usa il{" "}
        <Link
          href="/calcolatori/forfettario"
          className="text-[var(--color-accent)] hover:underline"
        >
          calcolatore forfettario vs ordinario →
        </Link>{" "}
        per simulare entrambi in base a ricavi e spese attesi.
      </div>
    </div>
  );
}

// --- STEP 3: Caratteristiche ---

function StepCaratteristiche({
  caratteristiche,
  toggle,
}: {
  caratteristiche: Partial<Record<CaratteristicaAttivita, boolean>>;
  toggle: (k: CaratteristicaAttivita) => void;
}) {
  const opzioni: { k: CaratteristicaAttivita; label: string; desc: string }[] = [
    {
      k: "localePubblico",
      label: "Locale aperto al pubblico",
      desc: "Negozio, laboratorio, studio con clienti fisici. Richiede SCIA comunale al SUAP.",
    },
    {
      k: "alimentare",
      label: "Attività alimentare (bar, ristorante, alimentaristi)",
      desc: "Preparazione, vendita o somministrazione alimenti/bevande. Richiede SCIA sanitaria USL e HACCP.",
    },
    {
      k: "attivitaRegolata",
      label: "Attività regolamentata (estetista, parrucchiere, tatuatore, ecc.)",
      desc: "Professione con requisiti abilitativi specifici. Richiede SCIA abilitativa comunale.",
    },
    {
      k: "dipendenti",
      label: "Avrò dipendenti",
      desc: "Anche un solo dipendente o collaboratore. Richiede iscrizione INAIL (gratuita).",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)]">
        Caratteristiche della tua attività
      </h2>
      <p className="text-sm text-zinc-600 mb-6">
        Seleziona tutte le opzioni che si applicano. Incidono sui tributi e diritti pubblici di apertura.
      </p>

      <div className="space-y-3">
        {opzioni.map((o) => (
          <label
            key={o.k}
            className={`flex gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
              caratteristiche[o.k]
                ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                : "border-zinc-200 hover:border-zinc-300 bg-white"
            }`}
          >
            <input
              type="checkbox"
              checked={!!caratteristiche[o.k]}
              onChange={() => toggle(o.k)}
              className="mt-1 h-4 w-4 text-[var(--color-accent)] border-zinc-300 rounded flex-shrink-0"
            />
            <div>
              <div className="text-sm font-semibold text-zinc-900">{o.label}</div>
              <div className="text-xs text-zinc-600 mt-1">{o.desc}</div>
            </div>
          </label>
        ))}
      </div>

      <p className="mt-6 text-xs text-zinc-500">
        Se nessuna opzione si applica, procedi senza selezionare nulla.
      </p>
    </div>
  );
}

// --- STEP 4: Provincia ---

function StepProvincia({
  provincia,
  setProvincia,
}: {
  provincia: string;
  setProvincia: (p: string) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)]">
        In quale provincia aprirai l&apos;attività?
      </h2>
      <p className="text-sm text-zinc-600 mb-6">
        Serve per stimare i diritti CCIAA. Ogni Camera di Commercio può applicare
        piccole variazioni locali.
      </p>

      <label className="block">
        <span className="text-sm font-medium text-zinc-700 mb-2 block">
          Sigla provincia
        </span>
        <select
          value={provincia}
          onChange={(e) => setProvincia(e.target.value)}
          className="w-full sm:w-48 px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        >
          <option value="">Seleziona...</option>
          {PROVINCE_IT.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </label>

      <p className="mt-6 text-xs text-zinc-500">
        La cifra esatta dei diritti CCIAA ti verrà comunicata in consulenza
        insieme al preventivo puntuale.
      </p>
    </div>
  );
}

// --- STEP 5: Risultato ---

function StepRisultato({
  risultato,
  tipologia,
  regime,
  nome,
  setNome,
  email,
  setEmail,
  telefono,
  setTelefono,
  privacyOk,
  setPrivacyOk,
  invioStato,
  invioErrore,
  invia,
}: {
  risultato: RisultatoPreventivo;
  tipologia: Tipologia;
  regime: Regime;
  nome: string;
  setNome: (s: string) => void;
  email: string;
  setEmail: (s: string) => void;
  telefono: string;
  setTelefono: (s: string) => void;
  privacyOk: boolean;
  setPrivacyOk: (b: boolean) => void;
  invioStato: "idle" | "pending" | "ok" | "error";
  invioErrore: string;
  invia: () => void;
}) {
  const { servizio, costiVivi, totaleCostiVivi, totalePrimoAnno, contributiINPS, disclaimer } = risultato;
  const fmt = (n: number) => `€${n.toLocaleString("it-IT")}`;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-heading)]">
        Il tuo preventivo indicativo
      </h2>
      <p className="text-sm text-zinc-600 mb-6">
        Apertura {tipologia} — regime {regime === "forfettario" ? "forfettario" : "semplificato/ordinario"}
      </p>

      {/* Servizio AT Parma */}
      <section className="mb-6 p-5 bg-[var(--color-surface)] rounded-xl">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-3">
          Servizio A.T. Consulting Parma
        </h3>
        <div className="space-y-2 text-sm text-zinc-700">
          <RigaPrezzo
            label={`Apertura ${tipologia === "artigiano" ? "artigiano" : "commerciante"} (CCIAA + SIA + INPS + SUAP base)`}
            valore={`da ${fmt(servizio.aperturaDa)}`}
          />
          <RigaPrezzo
            label={servizio.regimeLabel}
            valore={`da ${fmt(servizio.contabilitaAnnualeDa)}/anno`}
          />
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Prezzi IVA inclusa.
        </p>
      </section>

      {/* Tributi e diritti pubblici */}
      <section className="mb-6 p-5 bg-white rounded-xl border border-zinc-200">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-700 mb-1">
          Tributi e diritti pubblici
        </h3>
        <p className="text-xs text-zinc-500 mb-4">
          Importi dovuti direttamente agli enti competenti (CCIAA, Comune, USL
          e altri), non allo studio. Gli importi esatti saranno indicati nella
          bozza di mandato.
        </p>
        <div className="space-y-2 text-sm text-zinc-700">
          {costiVivi.map((v) => (
            <div key={v.label} className="border-b border-zinc-100 pb-2 last:border-0 last:pb-0">
              <RigaPrezzo
                label={v.label}
                valore={v.min === v.max ? fmt(v.min) : `${fmt(v.min)}-${fmt(v.max)}`}
              />
              {v.nota && (
                <p className="text-xs text-zinc-500 mt-1 ml-0">{v.nota}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-zinc-200 flex items-baseline justify-between text-sm font-semibold">
          <span>Totale tributi e diritti pubblici</span>
          <span>
            {totaleCostiVivi.min === totaleCostiVivi.max
              ? fmt(totaleCostiVivi.min)
              : `${fmt(totaleCostiVivi.min)}-${fmt(totaleCostiVivi.max)}`}
          </span>
        </div>
      </section>

      {/* Totale primo anno */}
      <section className="mb-6 p-6 bg-zinc-950 text-white rounded-xl">
        <p className="text-xs uppercase tracking-wider text-zinc-400 mb-2">
          Stima totale primo anno
        </p>
        <p className="text-3xl font-bold font-[family-name:var(--font-heading)]">
          {fmt(totalePrimoAnno.min)} – {fmt(totalePrimoAnno.max)}
        </p>
        <p className="text-xs text-zinc-400 mt-2">
          Onorario AT Parma IVA inclusa + tributi e diritti pubblici (dovuti agli enti,
          non soggetti a IVA). Gli importi esatti saranno indicati nella bozza di mandato.
        </p>
      </section>

      {/* INPS separato */}
      <section className="mb-6 p-5 bg-amber-50 border border-amber-200 rounded-xl">
        <h3 className="text-sm font-semibold text-amber-900 mb-2">
          Contributi INPS 2026 (separati)
        </h3>
        <p className="text-sm text-amber-800">
          {fmt(contributiINPS.contributiFissiAnnui)}/anno sul minimale (
          {(contributiINPS.aliquota * 100).toFixed(2)}%). Pagamento in 4 rate
          trimestrali. Da aggiungere al preventivo sopra.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-6 text-xs text-zinc-500 space-y-1">
        {disclaimer.map((d, i) => (
          <p key={i}>• {d}</p>
        ))}
      </section>

      {/* CTA bundle consigliato */}
      {invioStato !== "ok" && (
        <section className="mb-6 p-6 bg-zinc-950 text-white rounded-xl">
          <p className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-medium mb-2">
            Bundle consigliato
          </p>
          <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-heading)]">
            {regime === "forfettario"
              ? "Apertura Artigiano/Commerciante forfettario + contabilità annuale"
              : "Apertura Artigiano/Commerciante semplificato + contabilità annuale"}
          </h3>
          <p className="text-sm text-zinc-300 mb-4">
            €{regime === "forfettario" ? "1.190" : "1.690"} primo anno (listino €
            {regime === "forfettario" ? "1.289" : "1.889"}). Tutto incluso:
            apertura + CCIAA + SIA + INPS + 12 mesi contabilità + EFAT. Tributi e
            diritti pubblici a parte.
          </p>
          <Link
            href={
              regime === "forfettario"
                ? "/servizi/piva-artigiano-commerciante-forfettario"
                : "/servizi/piva-artigiano-commerciante-semplificato"
            }
            className="inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold rounded-lg px-6 py-3 hover:bg-zinc-100 transition-colors text-sm"
          >
            Vedi il bundle completo →
          </Link>
        </section>
      )}

      {/* Lead capture */}
      {invioStato !== "ok" ? (
        <section className="p-6 bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 rounded-xl">
          <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">
            Oppure ricevi il preventivo via email
          </h3>
          <p className="text-sm text-zinc-600 mb-4">
            Preferisci essere ricontattato? Ti mandiamo il preventivo via email
            e ti chiamiamo entro 24 ore lavorative con l&apos;offerta puntuale
            personalizzata e il mandato professionale.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="Nome e cognome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="px-4 py-3 rounded-lg border border-zinc-200 text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg border border-zinc-200 text-sm"
            />
          </div>
          <input
            type="tel"
            placeholder="Telefono (opzionale)"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full mb-3 px-4 py-3 rounded-lg border border-zinc-200 text-sm"
          />
          <label className="flex items-start gap-2 text-xs text-zinc-600 mb-4">
            <input
              type="checkbox"
              checked={privacyOk}
              onChange={(e) => setPrivacyOk(e.target.checked)}
              className="mt-0.5 h-4 w-4 text-[var(--color-accent)] flex-shrink-0"
            />
            <span>
              Ho letto l&apos;<Link href="/privacy" className="underline">informativa privacy</Link>{" "}
              e autorizzo il trattamento dei dati per ricevere il preventivo e
              l&apos;offerta personalizzata.
            </span>
          </label>
          <button
            onClick={invia}
            disabled={
              invioStato === "pending" ||
              !nome ||
              !email ||
              !privacyOk
            }
            className="w-full sm:w-auto px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold text-sm hover:bg-[var(--color-accent-dark)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {invioStato === "pending" ? "Invio in corso..." : "Richiedi offerta puntuale →"}
          </button>
          {invioErrore && (
            <p className="mt-3 text-sm text-red-600">{invioErrore}</p>
          )}

          <div className="mt-6 pt-6 border-t border-[var(--color-accent)]/10 text-sm text-zinc-600">
            Preferisci parlarne al telefono?{" "}
            <a href="tel:+390521247721" className="text-[var(--color-accent)] font-semibold hover:underline">
              Chiamaci al 0521 247721
            </a>{" "}
            (lunedì-venerdì 9-18)
          </div>
        </section>
      ) : (
        <section className="p-6 bg-green-50 border border-green-200 rounded-xl">
          <h3 className="text-lg font-semibold text-green-900 mb-2 font-[family-name:var(--font-heading)]">
            Richiesta inviata ✓
          </h3>
          <p className="text-sm text-green-800">
            Grazie {nome || ""}. Riceverai il preventivo a <strong>{email}</strong> entro pochi minuti,
            e ti ricontatteremo entro 24 ore lavorative con l&apos;offerta puntuale
            personalizzata.
          </p>
        </section>
      )}
    </div>
  );
}

// --- Helper UI ---

function OptionCard({
  selected,
  onClick,
  title,
  desc,
  note,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  desc: string;
  note: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-5 rounded-xl border-2 transition-all ${
        selected
          ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
          : "border-zinc-200 hover:border-zinc-300 bg-white"
      }`}
    >
      <div className="text-base font-semibold text-zinc-900 mb-1">{title}</div>
      <div className="text-sm text-zinc-600 mb-3 leading-relaxed">{desc}</div>
      <div className="text-xs text-[var(--color-accent)] font-medium">{note}</div>
    </button>
  );
}

function RigaPrezzo({ label, valore }: { label: string; valore: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-sm">{label}</span>
      <span className="text-sm font-semibold whitespace-nowrap">{valore}</span>
    </div>
  );
}
