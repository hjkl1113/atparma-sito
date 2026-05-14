// BACKLOG 1.66 — Chiamata sito → portale per provisioning automatico cliente
// dopo successo pagamento Stripe/PayPal.
//
// Endpoint portale: POST /api/integrations/site-payment
// Auth: HMAC SHA-256 del body con shared secret PORTALE_INTEGRATION_SECRET.
//
// Best-effort: NON blocca la conferma del pagamento se il portale è down.
// Errori vengono solo loggati (segreteria@ riceve comunque la notifica enhanced).

import crypto from "node:crypto";

const PORTAL_API_URL = process.env.PORTALE_API_URL || "https://clienti.atparma.com";

export interface SitePaymentPayload {
  externalOrderId: string;
  externalSource: "site-stripe" | "site-paypal";
  fullName: string;
  email: string;
  phone: string | null;
  taxCode: string | null;
  vatNumber: string | null;
  serviceId: string;
  serviceTitle: string;
  amountEur: string;
}

export interface SitePaymentResult {
  clientId: string;
  userId: string;
  practiceId: string;
  isNewClient: boolean;
  inviteSent: boolean;
}

/**
 * Provisiona Client+User+Practice DRAFT nel portale dopo pagamento sito.
 * Best-effort: ritorna null su errore (no throw) per non bloccare il webhook.
 */
export async function provisionPortalClient(
  payload: SitePaymentPayload,
): Promise<SitePaymentResult | null> {
  const secret = process.env.PORTALE_INTEGRATION_SECRET;
  if (!secret) {
    console.error("[portal-integration] PORTALE_INTEGRATION_SECRET non configurato");
    return null;
  }

  const body = JSON.stringify(payload);
  const signature = crypto.createHmac("sha256", secret).update(body).digest("hex");

  try {
    const response = await fetch(`${PORTAL_API_URL}/api/integrations/site-payment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-site-signature": `sha256=${signature}`,
      },
      body,
    });

    if (!response.ok) {
      const errBody = await response.text().catch(() => "");
      console.error("[portal-integration] errore portale", {
        status: response.status,
        body: errBody.slice(0, 500),
      });
      return null;
    }

    return (await response.json()) as SitePaymentResult;
  } catch (err) {
    console.error("[portal-integration] fetch fallito", {
      err: err instanceof Error ? err.message : String(err),
    });
    return null;
  }
}
