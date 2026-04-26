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

/**
 * Scompone un prezzo IVA inclusa in imponibile + IVA + totale, con valori
 * arrotondati a due decimali. Utile per mostrare lo scorporo IVA nei
 * checkout e nelle pricing card per chiarezza B2B.
 *
 * Esempio: breakdownIva(549) = { imponibile: 450.00, iva: 99.00, totale: 549.00 }
 */
export interface IvaBreakdown {
  imponibile: number;
  iva: number;
  totale: number;
}

export function breakdownIva(priceInclIva: number): IvaBreakdown {
  const totale = Math.round(priceInclIva * 100) / 100;
  const imponibile = Math.round((totale / (1 + IVA_RATE)) * 100) / 100;
  const iva = Math.round((totale - imponibile) * 100) / 100;
  return { imponibile, iva, totale };
}

/**
 * Formatta lo scorporo IVA in stringa breve per visualizzazione inline.
 * Esempio: formatBreakdown(549) = "€450,00 imponibile + €99,00 IVA 22%"
 */
export function formatBreakdown(priceInclIva: number): string {
  const b = breakdownIva(priceInclIva);
  return `${formatEur2(b.imponibile)} imponibile + ${formatEur2(b.iva)} IVA 22%`;
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
