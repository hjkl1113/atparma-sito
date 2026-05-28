"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Carica gtag.js (GA4 + Google Ads) solo se:
 *  - NEXT_PUBLIC_GA4_ID o NEXT_PUBLIC_GOOGLE_ADS_ID sono configurati
 *  - L'utente ha accettato la categoria appropriata nel cookie banner
 *    - analytics → GA4
 *    - marketing → Google Ads conversion tracking
 *
 * Se entrambi sono presenti, il primo ID configurato viene usato come URL di gtag.js
 * e gli altri vengono inizializzati con config separate.
 */
export function GoogleTag() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID || "";
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "";

  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    const sync = () => {
      setAnalyticsConsent(CookieConsent.acceptedCategory("analytics"));
      setMarketingConsent(CookieConsent.acceptedCategory("marketing"));
    };
    sync();
    window.addEventListener("cc:onConsent", sync);
    window.addEventListener("cc:onChange", sync);
    return () => {
      window.removeEventListener("cc:onConsent", sync);
      window.removeEventListener("cc:onChange", sync);
    };
  }, []);

  const enabledIds: string[] = [];
  if (ga4Id && analyticsConsent) enabledIds.push(ga4Id);
  if (adsId && marketingConsent) enabledIds.push(adsId);

  if (enabledIds.length === 0) return null;

  const primaryId = enabledIds[0];
  const configCalls = enabledIds
    .map((id) => `gtag('config', '${id}', { anonymize_ip: true });`)
    .join("\n");

  const bootstrap = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
${configCalls}`;

  return (
    <>
      <Script
        id="gtag-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
      />
      <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: bootstrap }} />
    </>
  );
}
