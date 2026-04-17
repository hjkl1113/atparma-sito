export interface CheckoutFormData {
  fullName: string;
  email: string;
  taxCode: string;
  vatNumber: string;
}

export const EMPTY_CHECKOUT_DATA: CheckoutFormData = {
  fullName: "",
  email: "",
  taxCode: "",
  vatNumber: "",
};

export function normalizeTaxCode(value: string) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function normalizeVatNumber(value: string) {
  return value.replace(/\D/g, "");
}

export function getCheckoutError(data: CheckoutFormData) {
  if (!data.fullName.trim()) return "Inserisci nome e cognome";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) return "Inserisci un'email valida";
  if (!data.taxCode.trim() && !data.vatNumber.trim()) return "Inserisci almeno codice fiscale o P.IVA";
  return null;
}
