"use client";

import { useState } from "react";
import Link from "next/link";
import {
  REQUISITI_ESCLUSIONE,
  verificaIdoneita,
  type RequisitiRispostaId,
  type EsitoVerifica,
} from "@/lib/forfettario-requisiti";

interface Props {
  /** Slug prodotto bundle forfettario (destinazione se idoneo).
   *  Es. "piva-professionista" per professionista forfettario. */
  slugForfettario: string;
  /** Prezzo bundle forfettario (mostrato nel risultato). */
  prezzoForfettario: number;
  /** Slug prodotto bundle semplificato (destinazione se non idoneo). */
  slugSemplificato: string;
  /** Prezzo bundle semplificato. */
  prezzoSemplificato: number;
  /** Contesto: cambia solo il copy. "professionista" o "artigiano". */
  contesto?: "professionista" | "artigiano";
  /** Callback opzionale quando l'utente ha completato la verifica.
   *  Usato dal wizard preventivo per preselezionare il regime. */
  onEsito?: (esito: EsitoVerifica) => void;
}

export function VerificaRequisitiForfettario({
  slugForfettario,
  prezzoForfettario,
  slugSemplificato,
  prezzoSemplificato,
  contesto = "professionista",
  onEsito,
}: Props) {
  const [risposte, setRisposte] = useState<Partial<Record<RequisitiRispostaId, boolean>>>({});
  const [mostraEsito, setMostraEsito] = useState(false);

  const tutteRisposte = REQUISITI_ESCLUSIONE.every((r) => risposte[r.id] !== undefined);

  function rispondi(id: RequisitiRispostaId, valore: boolean) {
    setRisposte((prev) => ({ ...prev, [id]: valore }));
  }

  function verifica() {
    if (!tutteRisposte) return;
    const esito = verificaIdoneita(risposte);
    setMostraEsito(true);
    onEsito?.(esito);
  }

  function reset() {
    setRisposte({});
    setMostraEsito(false);
  }

  const esito = mostraEsito ? verificaIdoneita(risposte) : null;

  const tipoSoggetto = contesto === "artigiano" ? "artigiano/commerciante" : "professionista";

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8">
      <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-2">
        Verifica rapida in 4 domande
      </p>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 font-[family-name:var(--font-heading)]">
        Puoi aprire la P.IVA in regime forfettario?
      </h3>
      <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
        Il forfettario ha requisiti di legge stringenti. Rispondi alle 4 domande
        e ti diciamo se sei idoneo oppure se ti conviene partire direttamente
        con il regime semplificato.
      </p>

      {!mostraEsito && (
        <div className="space-y-5">
          {REQUISITI_ESCLUSIONE.map((req, idx) => (
            <div
              key={req.id}
              className="border border-zinc-100 rounded-xl p-4 bg-zinc-50/50"
            >
              <p className="text-sm font-semibold text-zinc-900 mb-1">
                {idx + 1}. {req.domanda}
              </p>
              <p className="text-xs text-zinc-600 mb-3 leading-relaxed">
                {req.dettaglio}
              </p>
              <div className="flex gap-2">
                <RispostaChip
                  selected={risposte[req.id] === false}
                  onClick={() => rispondi(req.id, false)}
                  label="No"
                />
                <RispostaChip
                  selected={risposte[req.id] === true}
                  onClick={() => rispondi(req.id, true)}
                  label="Sì"
                />
              </div>
            </div>
          ))}

          <button
            onClick={verifica}
            disabled={!tutteRisposte}
            className="w-full sm:w-auto px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold text-sm hover:bg-[var(--color-accent-dark)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Verifica idoneità →
          </button>

          <p className="text-xs text-zinc-500">
            Verifica indicativa. Il controllo definitivo sulla tua situazione
            specifica lo fa il commercialista in consulenza.
          </p>
        </div>
      )}

      {mostraEsito && esito && (
        <div>
          {esito.idoneo ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
              <p className="text-sm font-semibold text-green-900 mb-2">
                ✓ Puoi aprire la P.IVA in regime forfettario
              </p>
              <p className="text-sm text-green-800 leading-relaxed">
                In base alle risposte risulti idoneo. Ti consigliamo il bundle{" "}
                <strong>Apertura {tipoSoggetto} forfettario + contabilità annuale</strong>.
                Verifica finale in consulenza iniziale.
              </p>
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="text-sm font-semibold text-amber-900 mb-2">
                ⚠ Il forfettario non è disponibile nel tuo caso
              </p>
              <p className="text-sm text-amber-800 leading-relaxed mb-3">
                In base alle risposte hai almeno una causa di esclusione dal
                regime forfettario:
              </p>
              <ul className="text-sm text-amber-800 space-y-1 mb-3">
                {esito.motivi.map((m) => (
                  <li key={m.id} className="flex gap-2">
                    <span>•</span>
                    <span>
                      {m.domanda.replace("?", "")}{" "}
                      <span className="text-xs text-amber-700">({m.riferimento})</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-amber-800 leading-relaxed">
                Ti consigliamo il bundle <strong>Apertura {tipoSoggetto} semplificata + contabilità annuale</strong>:
                stesso servizio completo, regime adatto alla tua situazione.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={esito.idoneo ? `/servizi/${slugForfettario}` : `/servizi/${slugSemplificato}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold text-sm hover:bg-[var(--color-accent-dark)] transition-colors"
            >
              Vedi il bundle {esito.idoneo ? "forfettario" : "semplificato"}{" "}
              (€{esito.idoneo ? prezzoForfettario : prezzoSemplificato})
            </Link>
            <button
              onClick={reset}
              className="px-6 py-3 border border-zinc-300 text-zinc-700 rounded-lg text-sm hover:bg-zinc-50 transition-colors"
            >
              Rifai la verifica
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function RispostaChip({
  selected,
  onClick,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg text-sm font-semibold border-2 transition-all ${
        selected
          ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
          : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
      }`}
    >
      {label}
    </button>
  );
}
