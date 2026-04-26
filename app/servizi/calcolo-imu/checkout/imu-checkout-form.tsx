"use client";

import { useState } from "react";
import {
  EMPTY_CHECKOUT_DATA,
  getCheckoutError,
  normalizeTaxCode,
  type CheckoutFormData,
} from "@/app/lib/checkout-utils";
import { formatBreakdown } from "@/app/lib/pricing-utils";

type Tier = "singolo" | "multi";
type F24PaymentMethod = "self" | "entratel";

const TIERS: Record<Tier, { id: string; title: string; price: number; descr: string }> = {
  singolo: {
    id: "calcolo-imu",
    title: "Calcolo IMU professionale — singolo immobile",
    price: 39,
    descr: "1 immobile (con cantine/box accessori)",
  },
  multi: {
    id: "calcolo-imu-multi",
    title: "Calcolo IMU professionale — multi-immobile",
    price: 69,
    descr: "Da 2 a 5 immobili",
  },
};

export function ImuCheckoutForm({ initialTier }: { initialTier: Tier }) {
  const [tier, setTier] = useState<Tier>(initialTier);
  const [paymentMethod, setPaymentMethod] = useState<F24PaymentMethod>("self");
  const [data, setData] = useState<CheckoutFormData>(EMPTY_CHECKOUT_DATA);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const selected = TIERS[tier];

  function updateField(field: keyof CheckoutFormData, value: string) {
    setData((prev) => {
      let nextValue = value;
      if (field === "email") nextValue = value.trim().toLowerCase();
      if (field === "taxCode") nextValue = normalizeTaxCode(value);
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
        body: JSON.stringify({
          servizio: selected.id,
          paymentMode: "full",
          paymentMethod,
          ...data,
        }),
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
    <div className="grid lg:grid-cols-[1fr_360px] gap-8">
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-8">
        {/* Selettore tier */}
        <div>
          <h2 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">
            Quanti immobili?
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {(Object.keys(TIERS) as Tier[]).map((t) => {
              const tierData = TIERS[t];
              const isSelected = tier === t;
              return (
                <label
                  key={t}
                  className={`block rounded-xl border-2 p-4 cursor-pointer transition-colors ${
                    isSelected
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                      : "border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="tier"
                    value={t}
                    checked={isSelected}
                    onChange={() => setTier(t)}
                    className="sr-only"
                  />
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-sm font-semibold text-zinc-900">
                      {t === "singolo" ? "Singolo immobile" : "Multi-immobile"}
                    </span>
                    <span className="text-lg font-bold text-zinc-900 font-[family-name:var(--font-heading)]">
                      €{tierData.price}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600">{tierData.descr}</p>
                </label>
              );
            })}
          </div>
        </div>

        {/* Identità */}
        <div>
          <h2 className="text-lg font-semibold mb-1 font-[family-name:var(--font-heading)]">I tuoi dati</h2>
          <p className="text-xs text-zinc-500 mb-6">
            Servono per la fattura elettronica e per registrarti sul portale clienti dove caricherai le visure.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Nome e cognome</label>
              <input
                type="text"
                value={data.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                placeholder="Mario Rossi"
                className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm focus:border-zinc-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="tu@esempio.it"
                className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm focus:border-zinc-400 focus:outline-none"
              />
              <p className="text-xs text-zinc-500 mt-1">
                Riceverai email di conferma + link al portale per caricare visure catastali.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Codice fiscale</label>
              <input
                type="text"
                value={data.taxCode}
                onChange={(e) => updateField("taxCode", e.target.value)}
                placeholder="RSSMRA80A01H501Z"
                className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm uppercase focus:border-zinc-400 focus:outline-none"
              />
            </div>
            {error ? <p className="text-xs text-red-500">{error}</p> : null}
          </div>
        </div>

        {/* Metodo pagamento F24 */}
        <div className="pt-6 border-t border-zinc-100">
          <h2 className="text-lg font-semibold mb-1 font-[family-name:var(--font-heading)]">
            Come paghi il F24?
          </h2>
          <p className="text-xs text-zinc-500 mb-4">
            La scelta non cambia il prezzo. Puoi modificarla anche dopo, sul portale.
          </p>
          <div className="space-y-3">
            <label
              className={`block rounded-xl border p-4 cursor-pointer transition-colors ${
                paymentMethod === "self"
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                  : "border-zinc-200 hover:border-zinc-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="self"
                  checked={paymentMethod === "self"}
                  onChange={() => setPaymentMethod("self")}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-zinc-900 mb-1">Pago io con home banking</div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Ti consegniamo F24 PDF compilato. Tu lo paghi via home banking entro le scadenze (16 giugno acconto, 16 dicembre saldo).
                  </p>
                </div>
              </div>
            </label>
            <label
              className={`block rounded-xl border p-4 cursor-pointer transition-colors ${
                paymentMethod === "entratel"
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                  : "border-zinc-200 hover:border-zinc-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="entratel"
                  checked={paymentMethod === "entratel"}
                  onChange={() => setPaymentMethod("entratel")}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span className="text-sm font-semibold text-zinc-900">
                      Delego allo studio (Entratel)
                    </span>
                    <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      Incluso
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Sul portale ci fornirai IBAN e firmerai una delega F24 ufficiale. Lo studio invia il F24 tramite Entratel e l&apos;Agenzia delle Entrate addebita direttamente sul tuo conto alle scadenze. Mai più dimenticanze, niente da fare il giorno della scadenza.
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Riepilogo + CTA */}
      <aside className="lg:sticky lg:top-32 self-start">
        <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-6 space-y-4">
          <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)]">Riepilogo</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-600">Servizio</span>
              <span className="font-medium text-zinc-900 text-right">{selected.descr}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Pagamento F24</span>
              <span className="font-medium text-zinc-900 text-right">
                {paymentMethod === "entratel" ? "Delega Entratel" : "Home banking"}
              </span>
            </div>
            <div className="flex justify-between text-base pt-3 border-t border-zinc-200">
              <span className="font-semibold text-zinc-900">Totale IVA inclusa</span>
              <span className="font-bold text-zinc-900 font-[family-name:var(--font-heading)]">
                €{selected.price}
              </span>
            </div>
            <p className="text-xs text-zinc-500">
              Scorporo: {formatBreakdown(selected.price)}
            </p>
            <p className="text-xs text-zinc-500">Fattura elettronica entro 24 ore</p>
          </div>

          <button
            onClick={handleStripeCheckout}
            disabled={loading}
            className="w-full px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium disabled:opacity-50"
          >
            {loading ? "Reindirizzo a Stripe..." : `Paga €${selected.price} IVA inclusa con carta`}
          </button>

          <p className="text-xs text-zinc-500 text-center">
            Pagamento sicuro con Stripe. Carte accettate: Visa, Mastercard, Amex.
          </p>

          <div className="pt-4 border-t border-zinc-200">
            <p className="text-xs text-zinc-700 leading-relaxed">
              <strong>Cosa succede dopo:</strong> riceverai email di conferma + link al portale clienti dove caricherai le visure catastali. Il F24 acconto te lo consegnamo entro 3 giorni lavorativi.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
