// Calcolo IMU 2026 (Imposta Municipale Unica).
// Base imponibile = rendita catastale x 1,05 x moltiplicatore per categoria.
// Aliquota tipica 10,6 per mille, variabile per comune.
// Abitazione principale non di lusso: esente. A/1-A/8-A/9: tassata con aliquota
// ridotta + detrazione 200 EUR.
// Modello MVP semplificato. Le aliquote esatte vanno sempre verificate sul
// portale del comune di riferimento (delibera annuale IMU).

export type CategoriaImmobile =
  | "abitazione" // A (escluso A/10), pertinenze C/2 C/6 C/7
  | "abitazione-lusso" // A/1, A/8, A/9
  | "ufficio" // A/10
  | "negozio" // C/1
  | "collettivi" // B, C/3, C/4, C/5
  | "industriale" // D (escluso D/5)
  | "bancario"; // D/5

export const CATEGORIE: { id: CategoriaImmobile; label: string; moltiplicatore: number }[] = [
  { id: "abitazione", label: "Abitazione (A/2, A/3, A/4, A/5, A/6, A/7) o pertinenza (C/2, C/6, C/7)", moltiplicatore: 160 },
  { id: "abitazione-lusso", label: "Abitazione di lusso (A/1 signorile, A/8 villa, A/9 castello)", moltiplicatore: 160 },
  { id: "ufficio", label: "Ufficio (A/10)", moltiplicatore: 80 },
  { id: "negozio", label: "Negozio (C/1)", moltiplicatore: 55 },
  { id: "collettivi", label: "Usi collettivi / laboratori (B, C/3, C/4, C/5)", moltiplicatore: 140 },
  { id: "industriale", label: "Industriale / commerciale (D, escluso D/5)", moltiplicatore: 65 },
  { id: "bancario", label: "Istituti di credito e assicurazioni (D/5)", moltiplicatore: 80 },
];

export const ALIQUOTE_DEFAULT_PER_MILLE = {
  altro: 10.6, // aliquota base altri immobili
  principaleLusso: 6.0, // aliquota ridotta abitazione principale A/1/A/8/A/9
} as const;

export const DETRAZIONE_ABITAZIONE_PRINCIPALE = 200; // EUR/anno

export interface InputIMU {
  rendita: number; // EUR
  categoria: CategoriaImmobile;
  abitazionePrincipale: boolean;
  quotaPossesso: number; // 0-100 in percentuale
  mesiPossesso: number; // 1-12
  aliquotaPerMille: number; // es. 10.6
}

export interface RisultatoIMU {
  baseImponibile: number;
  esente: boolean;
  motivoEsenzione?: string;
  imuAnnua: number;
  acconto: number; // 16 giugno (50% su imposta anno precedente = semplif. 50%)
  saldo: number; // 16 dicembre
  dettagli: {
    moltiplicatore: number;
    rivalutazione: number;
    quotaEffettiva: number;
    mesiFrazione: number;
    detrazioneApplicata: number;
  };
}

const RIVALUTAZIONE = 1.05;

function moltiplicatore(cat: CategoriaImmobile): number {
  return CATEGORIE.find((c) => c.id === cat)?.moltiplicatore ?? 160;
}

export function calcolaIMU(input: InputIMU): RisultatoIMU {
  const rendita = Math.max(0, input.rendita);
  const molt = moltiplicatore(input.categoria);
  const quota = Math.max(0, Math.min(100, input.quotaPossesso)) / 100;
  const mesi = Math.max(0, Math.min(12, input.mesiPossesso)) / 12;
  const aliq = Math.max(0, input.aliquotaPerMille) / 1000;

  const base = rendita * RIVALUTAZIONE * molt;

  // Esenzione abitazione principale non di lusso
  if (input.abitazionePrincipale && input.categoria === "abitazione") {
    return {
      baseImponibile: base,
      esente: true,
      motivoEsenzione:
        "Abitazione principale non di lusso (categoria A/2-A/7 e pertinenze): esente da IMU.",
      imuAnnua: 0,
      acconto: 0,
      saldo: 0,
      dettagli: {
        moltiplicatore: molt,
        rivalutazione: RIVALUTAZIONE,
        quotaEffettiva: quota,
        mesiFrazione: mesi,
        detrazioneApplicata: 0,
      },
    };
  }

  // Calcolo ordinario
  let impostaLorda = base * aliq * quota * mesi;

  // Detrazione se abitazione principale di lusso
  let detrazione = 0;
  if (input.abitazionePrincipale && input.categoria === "abitazione-lusso") {
    // Detrazione ridotta proporzionalmente a quota e mesi
    detrazione = DETRAZIONE_ABITAZIONE_PRINCIPALE * quota * mesi;
  }
  impostaLorda = Math.max(impostaLorda - detrazione, 0);

  const imuAnnua = impostaLorda;
  return {
    baseImponibile: base,
    esente: false,
    imuAnnua,
    acconto: imuAnnua / 2,
    saldo: imuAnnua / 2,
    dettagli: {
      moltiplicatore: molt,
      rivalutazione: RIVALUTAZIONE,
      quotaEffettiva: quota,
      mesiFrazione: mesi,
      detrazioneApplicata: detrazione,
    },
  };
}
