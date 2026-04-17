// Calcolo convenienza regime forfettario 2026 vs ordinario semplificato.
// Semplificazioni MVP: IVA esclusa, no detrazioni IRPEF personali, addizionali medie 2.5%.

export interface Attivita {
  id: string;
  label: string;
  coefficiente: number; // redditivita forfettario
}

export const ATTIVITA: Attivita[] = [
  { id: "professionista", label: "Professionista intellettuale (avvocato, commercialista, ingegnere...)", coefficiente: 0.78 },
  { id: "costruzioni", label: "Costruzioni / attivita immobiliari", coefficiente: 0.86 },
  { id: "intermediari", label: "Intermediari del commercio", coefficiente: 0.62 },
  { id: "servizi", label: "Altri servizi", coefficiente: 0.67 },
  { id: "artigiani", label: "Attivita artigianali (riparazioni, manutenzioni)", coefficiente: 0.67 },
  { id: "commercio-dettaglio", label: "Commercio al dettaglio / ambulanti alimentari", coefficiente: 0.40 },
  { id: "commercio-ingrosso", label: "Commercio all'ingrosso e altre attivita di vendita", coefficiente: 0.40 },
  { id: "alimentari", label: "Ristorazione / alberghi / alimentari", coefficiente: 0.40 },
];

export type Cassa = "separata" | "artigiani-commercianti" | "privata";

export const CASSA_LABEL: Record<Cassa, string> = {
  "separata": "Gestione Separata INPS (26,07%)",
  "artigiani-commercianti": "Artigiani / Commercianti (~24% con minimale)",
  "privata": "Cassa privata (ENPAP, Forense, Inarcassa...)",
};

export interface InputCalcolo {
  ricavi: number;
  spese: number;
  attivitaId: string;
  cassa: Cassa;
  aliquotaCassaPrivata: number; // usata solo se cassa=privata, es. 0.16
  nuovaAttivita: boolean; // primi 5 anni -> 5% invece di 15%
}

export interface RisultatoRegime {
  redditoImponibile: number;
  imposta: number;
  contributi: number;
  netto: number;
}

export interface Risultato {
  forfettario: RisultatoRegime & { oltreSoglia: boolean };
  ordinario: RisultatoRegime;
  differenzaNettaForfettario: number; // positivo = forfettario conviene
  verdetto: "forfettario" | "ordinario" | "pareggio";
}

const SOGLIA_FORFETTARIO = 85000;
const ALIQUOTA_SEPARATA = 0.2607;
const ALIQUOTA_ARTIGIANI = 0.24;
const MINIMALE_ARTIGIANI = 4208; // contributi minimi annui 2026 approssimati
const ADDIZIONALI_MEDIE = 0.025;

function contributi(cassa: Cassa, base: number, aliquotaPrivata: number): number {
  if (cassa === "separata") return base * ALIQUOTA_SEPARATA;
  if (cassa === "artigiani-commercianti") return Math.max(base * ALIQUOTA_ARTIGIANI, MINIMALE_ARTIGIANI);
  return base * aliquotaPrivata;
}

function irpefScaglioni(imponibile: number): number {
  if (imponibile <= 0) return 0;
  let imposta = 0;
  const s1 = Math.min(imponibile, 28000);
  imposta += s1 * 0.23;
  if (imponibile > 28000) {
    const s2 = Math.min(imponibile - 28000, 50000 - 28000);
    imposta += s2 * 0.35;
  }
  if (imponibile > 50000) {
    imposta += (imponibile - 50000) * 0.43;
  }
  return imposta;
}

export function calcola(input: InputCalcolo): Risultato {
  const attivita = ATTIVITA.find((a) => a.id === input.attivitaId) ?? ATTIVITA[0];
  const aliquotaForf = input.nuovaAttivita ? 0.05 : 0.15;

  // Forfettario
  const redditoForf = input.ricavi * attivita.coefficiente;
  const contributiForf = contributi(input.cassa, redditoForf, input.aliquotaCassaPrivata);
  // Nel forfettario i contributi sono deducibili dal reddito imponibile.
  const baseImpostaForf = Math.max(redditoForf - contributiForf, 0);
  const impostaForf = baseImpostaForf * aliquotaForf;
  const nettoForf = input.ricavi - input.spese - contributiForf - impostaForf;

  // Ordinario semplificato
  const utileLordo = Math.max(input.ricavi - input.spese, 0);
  const contributiOrd = contributi(input.cassa, utileLordo, input.aliquotaCassaPrivata);
  const imponibileOrd = Math.max(utileLordo - contributiOrd, 0);
  const irpef = irpefScaglioni(imponibileOrd);
  const addizionali = imponibileOrd * ADDIZIONALI_MEDIE;
  const impostaOrd = irpef + addizionali;
  const nettoOrd = input.ricavi - input.spese - contributiOrd - impostaOrd;

  const oltreSoglia = input.ricavi > SOGLIA_FORFETTARIO;
  const diff = nettoForf - nettoOrd;

  let verdetto: Risultato["verdetto"] = "pareggio";
  if (oltreSoglia) verdetto = "ordinario";
  else if (diff > 100) verdetto = "forfettario";
  else if (diff < -100) verdetto = "ordinario";

  return {
    forfettario: {
      redditoImponibile: baseImpostaForf,
      imposta: impostaForf,
      contributi: contributiForf,
      netto: nettoForf,
      oltreSoglia,
    },
    ordinario: {
      redditoImponibile: imponibileOrd,
      imposta: impostaOrd,
      contributi: contributiOrd,
      netto: nettoOrd,
    },
    differenzaNettaForfettario: diff,
    verdetto,
  };
}
