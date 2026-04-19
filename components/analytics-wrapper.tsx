"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

/**
 * Renderizza Vercel Analytics solo se l'utente ha dato consenso alla
 * categoria "analytics" nel banner cookie. Si aggiorna quando l'utente
 * cambia le preferenze.
 */
export function AnalyticsWrapper() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => {
      setConsented(CookieConsent.acceptedCategory("analytics"));
    };
    check();
    window.addEventListener("cc:onConsent", check);
    window.addEventListener("cc:onChange", check);
    return () => {
      window.removeEventListener("cc:onConsent", check);
      window.removeEventListener("cc:onChange", check);
    };
  }, []);

  if (!consented) return null;
  return <Analytics />;
}
