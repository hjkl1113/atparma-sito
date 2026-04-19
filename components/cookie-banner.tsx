"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export function CookieBanner() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box inline",
          position: "bottom left",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
        },
        marketing: {
          enabled: false,
        },
      },

      language: {
        default: "it",
        translations: {
          it: {
            consentModal: {
              title: "La tua privacy conta",
              description:
                "Usiamo cookie tecnici per far funzionare il sito (login, checkout) e, se acconsenti, statistiche aggregate per migliorarlo. Nessuna profilazione pubblicitaria. Leggi i dettagli nell'<a href=\"/privacy\" class=\"cc__link\">informativa privacy</a> e nella <a href=\"/sicurezza\" class=\"cc__link\">pagina sicurezza</a>.",
              acceptAllBtn: "Accetta tutto",
              acceptNecessaryBtn: "Solo necessari",
              showPreferencesBtn: "Personalizza",
              footer:
                '<a href="/privacy">Privacy</a> · <a href="/sicurezza">Sicurezza</a>',
            },
            preferencesModal: {
              title: "Preferenze cookie",
              acceptAllBtn: "Accetta tutto",
              acceptNecessaryBtn: "Solo necessari",
              savePreferencesBtn: "Salva preferenze",
              closeIconLabel: "Chiudi",
              sections: [
                {
                  title: "Perché lo chiediamo",
                  description:
                    "Usiamo solo cookie strettamente necessari al funzionamento e, opzionalmente, statistiche aggregate in forma anonima. Non facciamo profilazione pubblicitaria.",
                },
                {
                  title: "Cookie strettamente necessari",
                  description:
                    "Cookie di sessione per login, checkout (Stripe, PayPal), preferenze di consenso. Senza questi il sito non funziona.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Statistiche anonime",
                  description:
                    "Vercel Analytics raccoglie visite aggregate in forma pseudonima, senza usare cookie di tracciamento. Serve a capire quali pagine sono più utili.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing",
                  description:
                    "Al momento non usiamo cookie di marketing. Questa categoria è qui in previsione di future campagne; finché non le attiveremo resta vuota.",
                  linkedCategory: "marketing",
                },
                {
                  title: "Ulteriori informazioni",
                  description:
                    "Per domande scrivi a <a href=\"mailto:sicuri@atparma.com\">sicuri@atparma.com</a>. Puoi cambiare le tue preferenze in qualsiasi momento cliccando il link 'Gestisci cookie' nel footer.",
                },
              ],
            },
          },
        },
      },

      cookie: {
        name: "atparma_cc",
        expiresAfterDays: 180,
      },
    });
  }, []);

  return null;
}

/** Apre il modale preferenze — richiamabile da bottoni nel footer. */
export function showCookiePreferences() {
  CookieConsent.showPreferences();
}
