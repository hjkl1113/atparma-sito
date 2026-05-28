/**
 * Meta Conversions API (CAPI) — invio eventi server-side.
 *
 * Su iOS 17+ e con ad-blocker attivi il Pixel client perde il 30-40% degli
 * eventi: CAPI li recupera mandando l'evento direttamente dal server di
 * Vercel ai server Meta, con deduplication via `event_id`.
 *
 * Docs: https://developers.facebook.com/docs/marketing-api/conversions-api
 *
 * Env vars richieste:
 *  - META_PIXEL_ID            (server, può coincidere con NEXT_PUBLIC_META_PIXEL_ID)
 *  - META_CAPI_ACCESS_TOKEN   (segreto, generato in Events Manager → Settings → CAPI)
 *  - META_CAPI_TEST_EVENT_CODE (opzionale, solo per testing)
 */

import { createHash } from "node:crypto";

type CapiEventName = "Purchase" | "Lead" | "CompleteRegistration" | "Contact" | "InitiateCheckout";

interface CapiPayload {
  eventName: CapiEventName;
  eventId: string;                // serve per deduplication col Pixel client
  eventSourceUrl?: string;        // URL della pagina che ha generato l'evento
  email?: string | null;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  clientIp?: string | null;
  clientUserAgent?: string | null;
  fbc?: string | null;            // _fbc cookie
  fbp?: string | null;            // _fbp cookie
  value?: number;
  currency?: "EUR";
  contentName?: string;
  contentId?: string;
  transactionId?: string;
}

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function normalizePhone(phone: string): string {
  // Meta richiede E.164 senza '+'
  return phone.replace(/[^\d]/g, "");
}

/**
 * Manda un evento a Meta Conversions API. Restituisce true se l'invio è
 * riuscito (HTTP 2xx), false altrimenti. Tutti i fallimenti sono loggati ma
 * non sollevano eccezioni — il tracking è best-effort e non deve mai
 * bloccare il flusso di pagamento/lead.
 */
export async function sendCapiEvent(p: CapiPayload): Promise<boolean> {
  const pixelId = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;

  if (!pixelId || !accessToken) {
    // Silenzioso in dev/staging quando le env non sono settate.
    return false;
  }

  const user_data: Record<string, string | string[]> = {};
  if (p.email) user_data.em = sha256(p.email);
  if (p.phone) user_data.ph = sha256(normalizePhone(p.phone));
  if (p.firstName) user_data.fn = sha256(p.firstName);
  if (p.lastName) user_data.ln = sha256(p.lastName);
  if (p.clientIp) user_data.client_ip_address = p.clientIp;
  if (p.clientUserAgent) user_data.client_user_agent = p.clientUserAgent;
  if (p.fbc) user_data.fbc = p.fbc;
  if (p.fbp) user_data.fbp = p.fbp;

  const custom_data: Record<string, string | number | string[]> = {};
  if (p.value !== undefined) custom_data.value = p.value;
  if (p.currency) custom_data.currency = p.currency;
  if (p.contentName) custom_data.content_name = p.contentName;
  if (p.contentId) custom_data.content_ids = [p.contentId];
  if (p.transactionId) custom_data.order_id = p.transactionId;

  const body = {
    data: [{
      event_name: p.eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: p.eventId,
      action_source: "website",
      event_source_url: p.eventSourceUrl,
      user_data,
      custom_data,
    }],
    ...(testEventCode ? { test_event_code: testEventCode } : {}),
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    if (!res.ok) {
      const text = await res.text();
      console.warn("[meta-capi] non-2xx response", res.status, text);
      return false;
    }
    return true;
  } catch (err) {
    console.warn("[meta-capi] network error", err);
    return false;
  }
}

/**
 * Genera un event_id deterministico a partire da un transaction_id. Permette
 * deduplication col Pixel client se anche lì viene passato lo stesso event_id.
 */
export function eventIdFor(prefix: string, transactionId: string): string {
  return `${prefix}_${transactionId}`;
}
