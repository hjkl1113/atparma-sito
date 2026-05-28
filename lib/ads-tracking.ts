/**
 * Helper unificato per dispatch eventi di conversione client-side
 * verso Meta Pixel (fbq), GA4 (gtag) e Google Ads (gtag).
 *
 * Tutti gli helper sono no-op se il pixel relativo non è caricato (consenso
 * negato o env non configurato): è quindi sicuro chiamarli sempre.
 *
 * Gli eventi server-side (Meta CAPI) sono coperti separatamente dai webhook
 * Stripe/PayPal e dai route handler dei form di lead.
 */

type Currency = "EUR";

interface PurchasePayload {
  value: number;
  currency?: Currency;
  contentName: string;
  contentId?: string;
  transactionId: string;
}

interface InitiateCheckoutPayload {
  value: number;
  currency?: Currency;
  contentName: string;
  contentId?: string;
}

interface ViewContentPayload {
  contentName: string;
  contentId?: string;
  value?: number;
  currency?: Currency;
}

interface LeadPayload {
  source: string;
  value?: number;
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function metaTrack(eventName: string, params: Record<string, unknown>): void {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", eventName, params);
}

function gaEvent(eventName: string, params: Record<string, unknown>): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

function adsConversion(label: string, params: Record<string, unknown>): void {
  if (typeof window === "undefined" || !window.gtag) return;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  if (!adsId || !label) return;
  window.gtag("event", "conversion", {
    send_to: `${adsId}/${label}`,
    ...params,
  });
}

export function trackPurchase(p: PurchasePayload): void {
  const currency = p.currency || "EUR";
  metaTrack("Purchase", {
    value: p.value,
    currency,
    content_name: p.contentName,
    content_ids: p.contentId ? [p.contentId] : undefined,
    content_type: "product",
  });
  gaEvent("purchase", {
    transaction_id: p.transactionId,
    value: p.value,
    currency,
    items: [{ item_id: p.contentId || p.contentName, item_name: p.contentName, price: p.value, quantity: 1 }],
  });
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_PURCHASE || "";
  adsConversion(label, {
    value: p.value,
    currency,
    transaction_id: p.transactionId,
  });
}

export function trackInitiateCheckout(p: InitiateCheckoutPayload): void {
  const currency = p.currency || "EUR";
  metaTrack("InitiateCheckout", {
    value: p.value,
    currency,
    content_name: p.contentName,
    content_ids: p.contentId ? [p.contentId] : undefined,
  });
  gaEvent("begin_checkout", {
    value: p.value,
    currency,
    items: [{ item_id: p.contentId || p.contentName, item_name: p.contentName, price: p.value, quantity: 1 }],
  });
}

export function trackViewContent(p: ViewContentPayload): void {
  const currency = p.currency || "EUR";
  metaTrack("ViewContent", {
    content_name: p.contentName,
    content_ids: p.contentId ? [p.contentId] : undefined,
    value: p.value,
    currency,
  });
  gaEvent("view_item", {
    value: p.value,
    currency,
    items: [{ item_id: p.contentId || p.contentName, item_name: p.contentName, price: p.value || 0, quantity: 1 }],
  });
}

export function trackLead(p: LeadPayload): void {
  metaTrack("Lead", {
    content_name: p.source,
    value: p.value,
    currency: p.value ? "EUR" : undefined,
  });
  gaEvent("generate_lead", {
    value: p.value,
    currency: p.value ? "EUR" : undefined,
    source: p.source,
  });
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_LEAD || "";
  adsConversion(label, {
    value: p.value || 0,
    currency: "EUR",
  });
}
