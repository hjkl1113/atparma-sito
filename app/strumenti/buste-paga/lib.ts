// Calcolo busta paga 2026 — lavoratore dipendente.
// Modello MVP semplificato, uso indicativo. Non sostituisce il cedolino emesso dal
// consulente del lavoro. Variabili non modellate: TFR, permessi/ROL, premi, straordinari,
// trasferte, welfare, tassazione separata, detrazioni familiari (coniuge/altri a carico).

const ALIQUOTA_INPS_LAVORATORE = 0.0949; // dipendenti standard (IVS 8,84% + DS 0,65%)
const ADDIZIONALI_MEDIE = 0.025;
const TRATT_INTEGRATIVO_ANNUO = 1200; // fino a 15.000 imponibile (art. 1 d.l. 3/2020 come modif. 2024)
const SOGLIA_TRATT_INTEGRATIVO = 15000;

export type Mensilita = 12 | 13 | 14;

export interface InputBustaPaga {
  modo: "lordo-netto" | "netto-lordo";
  valore: number; // RAL se modo=lordo-netto, netto annuo atteso se modo=netto-lordo
  mensilita: Mensilita;
  trattamentoIntegrativo: boolean;
}

export interface Breakdown {
  ralAnnua: number;
  contributiInps: number;
  imponibileFiscale: number;
  irpefLorda: number;
  detrazioneLavoro: number;
  irpefNetta: number;
  addizionali: number;
  trattamentoIntegrativo: number;
  nettoAnnuo: number;
  nettoMensile: number; // senza 13a/14a, pagamento mensile base
  nettoPerRata: number; // netto annuo / mensilita (include 13a/14a)
}

export function irpefScaglioni(imponibile: number): number {
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

// Detrazione per lavoro dipendente 2026 (art. 13 TUIR, formule vigenti).
export function detrazioneLavoroDipendente(imponibile: number): number {
  if (imponibile <= 0) return 0;
  if (imponibile <= 15000) return 1955;
  if (imponibile <= 28000) {
    return 1910 + (1190 * (28000 - imponibile)) / 13000;
  }
  if (imponibile <= 50000) {
    return (1910 * (50000 - imponibile)) / 22000;
  }
  return 0;
}

function calcolaDaLordo(ral: number, trattIntegrativo: boolean, mensilita: Mensilita): Breakdown {
  const contributi = ral * ALIQUOTA_INPS_LAVORATORE;
  const imponibile = Math.max(ral - contributi, 0);
  const irpefLorda = irpefScaglioni(imponibile);
  const detrazione = detrazioneLavoroDipendente(imponibile);
  const irpefNetta = Math.max(irpefLorda - detrazione, 0);
  const addizionali = imponibile * ADDIZIONALI_MEDIE;
  const tratt = trattIntegrativo && imponibile <= SOGLIA_TRATT_INTEGRATIVO ? TRATT_INTEGRATIVO_ANNUO : 0;
  const nettoAnnuo = ral - contributi - irpefNetta - addizionali + tratt;
  const nettoMensile = nettoAnnuo / mensilita;
  return {
    ralAnnua: ral,
    contributiInps: contributi,
    imponibileFiscale: imponibile,
    irpefLorda,
    detrazioneLavoro: detrazione,
    irpefNetta,
    addizionali,
    trattamentoIntegrativo: tratt,
    nettoAnnuo,
    nettoMensile,
    nettoPerRata: nettoMensile,
  };
}

// Bisezione per trovare il lordo che produce il netto richiesto.
function calcolaDaNetto(nettoTarget: number, trattIntegrativo: boolean, mensilita: Mensilita): Breakdown {
  let lo = 0;
  let hi = 500000;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    const out = calcolaDaLordo(mid, trattIntegrativo, mensilita);
    if (out.nettoAnnuo < nettoTarget) lo = mid;
    else hi = mid;
  }
  return calcolaDaLordo((lo + hi) / 2, trattIntegrativo, mensilita);
}

export function calcolaBustaPaga(input: InputBustaPaga): Breakdown {
  const val = Math.max(0, input.valore);
  if (input.modo === "lordo-netto") {
    return calcolaDaLordo(val, input.trattamentoIntegrativo, input.mensilita);
  }
  return calcolaDaNetto(val, input.trattamentoIntegrativo, input.mensilita);
}
