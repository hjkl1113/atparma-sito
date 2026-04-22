/**
 * Verifica requisiti di accesso al regime forfettario 2026.
 * Fonti normative: art. 1 commi 54-89 L. 190/2014 e successive modifiche.
 *
 * ATTENZIONE: verifica NON esaustiva. Copre le 4 cause di esclusione più
 * comuni. Il controllo definitivo deve farlo il commercialista sulla
 * situazione specifica del cliente.
 *
 * Ultima verifica: 2026-04-22. Review semestrale via GitHub Actions.
 */

export type RequisitiRispostaId =
  | "ricaviSopraLimite"
  | "dipendenteRedditoAlto"
  | "socioDominante"
  | "committenteExDatore";

export interface RequisitoForfettario {
  id: RequisitiRispostaId;
  domanda: string;
  dettaglio: string;
  /** Riferimento normativo breve da mostrare al cliente */
  riferimento: string;
}

export const REQUISITI_ESCLUSIONE: RequisitoForfettario[] = [
  {
    id: "ricaviSopraLimite",
    domanda: "Prevedi ricavi o compensi annui oltre 85.000 euro?",
    dettaglio:
      "Chi ha incassi oltre la soglia nell'anno precedente non può più applicare il forfettario. Se prevedi di superarla già al primo anno conviene partire direttamente con il regime semplificato o ordinario.",
    riferimento: "L. 190/2014 art. 1 c. 54 lett. a)",
  },
  {
    id: "dipendenteRedditoAlto",
    domanda:
      "Nell'anno precedente hai percepito redditi da lavoro dipendente o pensione oltre 35.000 euro lordi, con rapporto ancora in essere?",
    dettaglio:
      "Il forfettario è precluso a chi, nell'anno precedente, ha percepito redditi di lavoro dipendente o pensioni oltre 35.000 euro lordi, a condizione che il rapporto sia ancora in essere. Se il rapporto di lavoro è cessato nell'anno precedente la soglia non si applica. Sotto i 35.000 euro si può cumulare con la P.IVA forfettaria.",
    riferimento: "L. 190/2014 art. 1 c. 57 lett. d-ter) — soglia aggiornata L. 197/2022",
  },
  {
    id: "socioDominante",
    domanda:
      "Sei socio di una SRL o di una società di persone che svolge attività simile o correlata?",
    dettaglio:
      "Non puoi essere socio di società di persone (SNC, SAS, SS) né controllare direttamente o indirettamente SRL/associazioni professionali che esercitano attività riconducibili a quella che svolgerai con la P.IVA forfettaria.",
    riferimento: "L. 190/2014 art. 1 c. 57 lett. d)",
  },
  {
    id: "committenteExDatore",
    domanda:
      "Fatturerai prevalentemente a un tuo attuale o ex datore di lavoro degli ultimi 2 anni?",
    dettaglio:
      "Il forfettario è escluso quando l'attività è esercitata prevalentemente nei confronti di datori di lavoro (presenti o passati dei 2 anni precedenti), salvo eccezioni per neolaureati e praticanti.",
    riferimento: "L. 190/2014 art. 1 c. 57 lett. d-bis)",
  },
];

export interface EsitoVerifica {
  idoneo: boolean;
  motivi: RequisitoForfettario[];
}

export function verificaIdoneita(
  risposte: Partial<Record<RequisitiRispostaId, boolean>>,
): EsitoVerifica {
  const motivi = REQUISITI_ESCLUSIONE.filter((r) => risposte[r.id] === true);
  return {
    idoneo: motivi.length === 0,
    motivi,
  };
}
