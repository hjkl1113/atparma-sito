// Calcolo convenienza regime forfettario 2026 vs ordinario semplificato.
// Modello: l'utente dichiara i contributi INPS pagati nell'anno d'imposta (deducibili per cassa)
// e quelli stimati dell'anno corrente (cash-flow, non deducibili quest'anno).
// Semplificazioni MVP: IVA esclusa, no detrazioni IRPEF personali, addizionali medie 2.5%.

export interface Attivita {
  id: string;
  label: string;
  coefficiente: number; // redditività forfettario
}

export const ATTIVITA: Attivita[] = [
  { id: "professionista", label: "Professionista intellettuale (avvocato, commercialista, ingegnere...)", coefficiente: 0.78 },
  { id: "costruzioni", label: "Costruzioni / attività immobiliari", coefficiente: 0.86 },
  { id: "intermediari", label: "Intermediari del commercio", coefficiente: 0.62 },
  { id: "servizi", label: "Altri servizi", coefficiente: 0.67 },
  { id: "artigiani", label: "Attività artigianali (riparazioni, manutenzioni)", coefficiente: 0.67 },
  { id: "commercio-dettaglio", label: "Commercio al dettaglio / ambulanti alimentari", coefficiente: 0.40 },
  { id: "commercio-ingrosso", label: "Commercio all'ingrosso e altre attività di vendita", coefficiente: 0.40 },
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
  inpsVersatiPrec: number; // contributi INPS pagati nell'anno d'imposta, deducibili dal reddito imponibile
  primoAnno: boolean; // se true azzera inpsVersatiPrec (nessuna deduzione disponibile)
}

export interface RisultatoRegime {
  redditoLordo: number; // forf: ricavi x coefficiente; ord: ricavi - spese
  deduzioneInps: number; // inpsVersatiPrec applicati (0 se primoAnno)
  redditoImponibile: number; // redditoLordo - deduzioneInps
  imposta: number;
  contributi: number; // INPS correnti stimati (cassa-flow, non deducibili quest'anno)
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
  const deduzione = input.primoAnno ? 0 : Math.max(0, input.inpsVersatiPrec);

  // Forfettario: reddito lordo = ricavi x coeff; deduci INPS pagati nell'anno; su imponibile applica aliquota.
  const redditoLordoForf = input.ricavi * attivita.coefficiente;
  const imponibileForf = Math.max(redditoLordoForf - deduzione, 0);
  const impostaForf = imponibileForf * aliquotaForf;
  const contributiForf = contributi(input.cassa, imponibileForf, input.aliquotaCassaPrivata);
  const nettoForf = input.ricavi - input.spese - impostaForf - contributiForf;

  // Ordinario semplificato: utile lordo = ricavi - spese; deduci INPS pagati nell'anno; IRPEF a scaglioni.
  const utileLordoOrd = Math.max(input.ricavi - input.spese, 0);
  const imponibileOrd = Math.max(utileLordoOrd - deduzione, 0);
  const irpef = irpefScaglioni(imponibileOrd);
  const addizionali = imponibileOrd * ADDIZIONALI_MEDIE;
  const impostaOrd = irpef + addizionali;
  const contributiOrd = contributi(input.cassa, imponibileOrd, input.aliquotaCassaPrivata);
  const nettoOrd = input.ricavi - input.spese - impostaOrd - contributiOrd;

  const oltreSoglia = input.ricavi > SOGLIA_FORFETTARIO;
  const diff = nettoForf - nettoOrd;

  let verdetto: Risultato["verdetto"] = "pareggio";
  if (oltreSoglia) verdetto = "ordinario";
  else if (diff > 100) verdetto = "forfettario";
  else if (diff < -100) verdetto = "ordinario";

  return {
    forfettario: {
      redditoLordo: redditoLordoForf,
      deduzioneInps: deduzione,
      redditoImponibile: imponibileForf,
      imposta: impostaForf,
      contributi: contributiForf,
      netto: nettoForf,
      oltreSoglia,
    },
    ordinario: {
      redditoLordo: utileLordoOrd,
      deduzioneInps: deduzione,
      redditoImponibile: imponibileOrd,
      imposta: impostaOrd,
      contributi: contributiOrd,
      netto: nettoOrd,
    },
    differenzaNettaForfettario: diff,
    verdetto,
  };
}
