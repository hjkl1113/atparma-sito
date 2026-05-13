export interface CheckoutIdentity {
  fullName: string;
  email: string;
  phone: string | null;
  taxCode: string | null;
  vatNumber: string | null;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?\d{6,15}$/;

export function normalizeTaxCode(value: string) {
  const normalized = value.toUpperCase().replace(/[^A-Z0-9]/g, "").trim();
  return normalized || null;
}

export function normalizeVatNumber(value: string) {
  const normalized = value.replace(/\D/g, "").trim();
  return normalized || null;
}

export function normalizePhone(value: string) {
  const normalized = value.replace(/[\s()-]/g, "").trim();
  return normalized || null;
}

export function parseCheckoutIdentity(input: unknown): { data?: CheckoutIdentity; error?: string } {
  if (!input || typeof input !== "object") {
    return { error: "Dati checkout non validi" };
  }

  const payload = input as Record<string, unknown>;
  const fullName = typeof payload.fullName === "string" ? payload.fullName.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const phone = normalizePhone(typeof payload.phone === "string" ? payload.phone : "");
  const taxCode = normalizeTaxCode(typeof payload.taxCode === "string" ? payload.taxCode : "");
  const vatNumber = normalizeVatNumber(typeof payload.vatNumber === "string" ? payload.vatNumber : "");

  if (!fullName) {
    return { error: "Nome e cognome sono obbligatori" };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { error: "Email non valida" };
  }

  if (!phone) {
    return { error: "Numero di telefono obbligatorio" };
  }

  if (!PHONE_REGEX.test(phone)) {
    return { error: "Numero di telefono non valido" };
  }

  if (!taxCode && !vatNumber) {
    return { error: "Inserisci almeno codice fiscale o P.IVA" };
  }

  return {
    data: {
      fullName,
      email,
      phone,
      taxCode,
      vatNumber,
    },
  };
}
