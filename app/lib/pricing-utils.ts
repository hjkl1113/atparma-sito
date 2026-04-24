export const IVA_RATE = 0.22;
export const SOGLIA_RATE_INCL_IVA = 500;
export const SOGLIA_SCONTO_10_INCL_IVA = 1000;
export const SCONTO_FASCIA_MEDIA = 0.05;
export const SCONTO_OLTRE_1000 = 0.10;

const eurFormatInt = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  useGrouping: true,
});
const eurFormat2 = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: true,
});

export function formatEur(n: number): string {
  return Number.isInteger(n) ? eurFormatInt.format(n) : eurFormat2.format(n);
}

export function formatEur2(n: number): string {
  return eurFormat2.format(n);
}

export function computeNetRounded(priceInclIva: number): number | null {
  const net = priceInclIva / (1 + IVA_RATE);
  if (Math.abs(net - Math.round(net)) < 0.005) {
    return Math.round(net);
  }
  return null;
}

export function isRateizzabile(priceInclIva: number): boolean {
  return priceInclIva > SOGLIA_RATE_INCL_IVA;
}

export interface ScontoAnticipato {
  pct: number;
  final: number;
}

export function getScontoAnticipato(priceInclIva: number): ScontoAnticipato | null {
  if (priceInclIva > SOGLIA_SCONTO_10_INCL_IVA) {
    return { pct: 10, final: priceInclIva * (1 - SCONTO_OLTRE_1000) };
  }
  if (priceInclIva > SOGLIA_RATE_INCL_IVA) {
    return { pct: 5, final: priceInclIva * (1 - SCONTO_FASCIA_MEDIA) };
  }
  return null;
}
