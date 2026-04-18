"use client";

import { useState } from "react";
import {
  EMPTY_CHECKOUT_DATA,
  getCheckoutError,
  normalizeTaxCode,
  normalizeVatNumber,
  type CheckoutFormData,
} from "@/app/lib/checkout-utils";
import { PayPalButton } from "@/app/servizi/_components/paypal-button";

export function CheckoutForm({
  serviceId,
  serviceTitle,
  price,
}: {
  serviceId: string;
  serviceTitle: string;
  price: number;
}) {
  const [data, setData] = useState<CheckoutFormData>(EMPTY_CHECKOUT_DATA);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function updateField(field: keyof CheckoutFormData, value: string) {
    setData((prev) => {
      let nextValue = value;
      if (field === "email") nextValue = value.trim().toLowerCase();
      if (field === "taxCode") nextValue = normalizeTaxCode(value);
      if (field === "vatNumber") nextValue = normalizeVatNumber(value);
      return { ...prev, [field]: nextValue };
    });
    setError(null);
  }

  async function handleStripeCheckout() {
    const validation = getCheckoutError(data);
    if (validation) {
      setError(validation);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ servizio: serviceId, ...data }),
      });
      const json = await res.json();
      if (json.url) {
        window.location.href = json.url;
      } else {
        setError(json.error || "Errore durante la creazione del pagamento");
        setLoading(false);
      }
    } catch {
      setError("Errore di rete. Riprova.");
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8">
      <h2 className="text-lg font-semibold mb-1 font-[family-name:var(--font-heading)]">
        I tuoi dati
      </h2>
      <p className="text-xs text-zinc-500 mb-6">
        Servono per la fattura e per aprire la Partita IVA. Dati protetti in conformita GDPR.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Nome e cognome
          </label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            placeholder="Mario Rossi"
            className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm focus:border-zinc-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="tu@esempio.it"
            className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm focus:border-zinc-400 focus:outline-none"
          />
          <p className="text-xs text-zinc-500 mt-1">
            Qui riceverai credenziali del portale e fattura elettronica.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Codice fiscale
            </label>
            <input
              type="text"
              value={data.taxCode}
              onChange={(e) => updateField("taxCode", e.target.value)}
              placeholder="RSSMRA80A01H501Z"
              className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm uppercase focus:border-zinc-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              P.IVA <span className="text-zinc-400 font-normal">(se già esistente)</span>
            </label>
            <input
              type="text"
              value={data.vatNumber}
              onChange={(e) => updateField("vatNumber", e.target.value)}
              placeholder="01234567890"
              className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm focus:border-zinc-400 focus:outline-none"
            />
          </div>
        </div>
        <p className="text-xs text-zinc-500">
          Serve almeno uno tra codice fiscale o P.IVA.
        </p>
        {error ? <p className="text-xs text-red-500">{error}</p> : null}
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-100 space-y-3">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">
          Scegli come pagare
        </p>
        <button
          onClick={handleStripeCheckout}
          disabled={loading}
          className="block w-full text-center py-3 rounded-lg font-semibold text-sm transition-colors bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Caricamento..." : `Paga €${price} con carta`}
        </button>
        <PayPalButton
          serviceId={serviceId}
          serviceTitle={serviceTitle}
          price={price}
          checkoutData={data}
          onValidationError={(message) => setError(message)}
        />
        <p className="text-xs text-zinc-500 text-center leading-relaxed pt-2">
          Stripe e PayPal gestiscono il pagamento in modo sicuro. Ricevi subito la fattura
          elettronica e le credenziali del portale clienti.
        </p>
      </div>
    </div>
  );
}
