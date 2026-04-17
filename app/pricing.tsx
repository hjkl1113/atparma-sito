"use client";

import { useState, useEffect, useRef } from "react";

interface Servizio {
  id: string;
  title: string;
  desc: string;
  price: number | null;
  originalPrice: number | null;
  active: boolean;
}

interface CheckoutFormData {
  fullName: string;
  email: string;
  taxCode: string;
  vatNumber: string;
}

const EMPTY_CHECKOUT_DATA: CheckoutFormData = {
  fullName: "",
  email: "",
  taxCode: "",
  vatNumber: "",
};

function normalizeTaxCode(value: string) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function normalizeVatNumber(value: string) {
  return value.replace(/\D/g, "");
}

function getCheckoutError(data: CheckoutFormData) {
  if (!data.fullName.trim()) return "Inserisci nome e cognome";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) return "Inserisci un'email valida";
  if (!data.taxCode.trim() && !data.vatNumber.trim()) return "Inserisci almeno codice fiscale o P.IVA";
  return null;
}

const FALLBACK: Servizio[] = [
  { id: "730", title: "Dichiarazione 730", desc: "Compilazione e invio della dichiarazione dei redditi modello 730.", price: 79, originalPrice: null, active: true },
  { id: "piva-prof", title: "Apertura P.IVA Professionista", desc: "Apertura Partita IVA per professionisti (no iscrizioni CCIAA/INPS artigiani).", price: 150, originalPrice: null, active: true },
  { id: "piva-art", title: "Apertura P.IVA Artigiano/Commerciante", desc: "Apertura Partita IVA con iscrizione CCIAA, INPS artigiani/commercianti, SIA.", price: 500, originalPrice: null, active: true },
  { id: "piva-forf", title: "P.IVA Forfettario", desc: "Apertura Partita IVA forfettaria con caricamento documenti tramite portale clienti.", price: 500, originalPrice: null, active: true },
  { id: "piva-forf-gis", title: "P.IVA Forfettario + EFAT", desc: "Apertura + fatturazione elettronica GIS Ranocchi EFAT inclusa per un anno.", price: 550, originalPrice: null, active: true },
  { id: "consulenza", title: "Consulenza su misura", desc: "Analisi personalizzata e piano d'azione per la tua situazione specifica.", price: null, originalPrice: null, active: true },
];

function PayPalButton({
  serviceId,
  serviceTitle,
  price,
  checkoutData,
  onValidationError,
}: {
  serviceId: string;
  serviceTitle: string;
  price: number;
  checkoutData: CheckoutFormData;
  onValidationError: (message: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "success" | "error">("loading");

  useEffect(() => {
    if (!containerRef.current) return;

    const existing = document.querySelector('script[src*="paypal.com/sdk"]');
    if (existing) {
      renderButton();
      return;
    }

    const script = document.createElement("script");
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "sb";
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=EUR&intent=capture`;
    script.setAttribute("data-namespace", "paypal_sdk");
    script.onload = () => renderButton();
    script.onerror = () => setStatus("error");
    document.head.appendChild(script);

    function renderButton() {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = "";

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const paypal = (window as any).paypal_sdk || (window as any).paypal;
      if (!paypal) { setStatus("error"); return; }

      paypal.Buttons({
        style: { layout: "horizontal", color: "gold", shape: "rect", label: "pay", height: 40, tagline: false },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick: (_data: any, actions: any) => {
          const error = getCheckoutError(checkoutData);
          if (error) {
            onValidationError(error);
            return actions.reject();
          }
          return actions.resolve();
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createOrder: (_data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              custom_id: serviceId,
              description: serviceTitle,
              amount: { value: price.toFixed(2), currency_code: "EUR" },
            }],
          });
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          const response = await fetch("/api/paypal-notify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: data.orderID || order?.id || "N/A",
              serviceId,
              servizio: serviceTitle,
              importo: price.toFixed(2),
              fullName: checkoutData.fullName,
              email: checkoutData.email,
              taxCode: checkoutData.taxCode,
              vatNumber: checkoutData.vatNumber,
            }),
          });
          setStatus(response.ok ? "success" : "error");
        },
        onError: () => setStatus("error"),
      }).render(containerRef.current);
      setStatus("ready");
    }
  }, [checkoutData, onValidationError, price, serviceId, serviceTitle]);

  if (status === "success") {
    return <div className="text-center py-3 text-green-600 font-medium text-sm">Pagamento completato!</div>;
  }

  return (
    <div>
      <div ref={containerRef} className="min-h-[40px]" />
      {status === "loading" && <p className="text-xs text-zinc-400 text-center mt-1">Caricamento PayPal...</p>}
      {status === "error" && <p className="text-xs text-red-500 text-center mt-1">Errore PayPal. Ricarica la pagina.</p>}
    </div>
  );
}

export function Pricing() {
  const [prezzi, setPrezzi] = useState<Servizio[]>(FALLBACK);
  const [loading, setLoading] = useState<string | null>(null);
  const [checkoutData, setCheckoutData] = useState<Record<string, CheckoutFormData>>({});
  const [checkoutErrors, setCheckoutErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/prezzi", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setPrezzi(data); })
      .catch(() => {});
  }, []);

  async function handleStripeCheckout(servizioId: string) {
    const form = checkoutData[servizioId] || EMPTY_CHECKOUT_DATA;
    const error = getCheckoutError(form);
    if (error) {
      setCheckoutErrors((prev) => ({ ...prev, [servizioId]: error }));
      return;
    }

    setLoading(servizioId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          servizio: servizioId,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.url) { window.location.href = data.url; } else { setLoading(null); }
    } catch { setLoading(null); }
  }

  function updateCheckoutField(servizioId: string, field: keyof CheckoutFormData, value: string) {
    setCheckoutData((prev) => {
      const current = prev[servizioId] || EMPTY_CHECKOUT_DATA;
      let nextValue = value;
      if (field === "email") nextValue = value.trim().toLowerCase();
      if (field === "taxCode") nextValue = normalizeTaxCode(value);
      if (field === "vatNumber") nextValue = normalizeVatNumber(value);

      return {
        ...prev,
        [servizioId]: {
          ...current,
          [field]: nextValue,
        },
      };
    });
    setCheckoutErrors((prev) => ({ ...prev, [servizioId]: "" }));
  }

  const visibili = prezzi.filter((p) => p.active);

  return (
    <section id="servizi-online" className="py-24 bg-[var(--color-surface)] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
          Servizi online
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16 font-[family-name:var(--font-heading)]">
          Inizia subito
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {visibili.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-8 border border-zinc-100 flex flex-col">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">{p.title}</h3>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed flex-1">{p.desc}</p>
              <div className="mb-6">
                {p.price ? (
                  <div>
                    {p.originalPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg line-through text-zinc-400">&euro;{p.originalPrice}</span>
                        <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          -{Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}%
                        </span>
                      </div>
                    )}
                    <span className="text-3xl font-bold font-[family-name:var(--font-heading)]">&euro;{p.price}</span>
                  </div>
                ) : (
                  <span className="text-lg font-medium text-zinc-500">A preventivo</span>
                )}
              </div>
              {p.price ? (
                <div className="space-y-3">
                  <div className="grid gap-3">
                    <input
                      type="text"
                      value={(checkoutData[p.id] || EMPTY_CHECKOUT_DATA).fullName}
                      onChange={(e) => updateCheckoutField(p.id, "fullName", e.target.value)}
                      placeholder="Nome e cognome"
                      className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                    />
                    <input
                      type="email"
                      value={(checkoutData[p.id] || EMPTY_CHECKOUT_DATA).email}
                      onChange={(e) => updateCheckoutField(p.id, "email", e.target.value)}
                      placeholder="Email"
                      className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                    />
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        value={(checkoutData[p.id] || EMPTY_CHECKOUT_DATA).taxCode}
                        onChange={(e) => updateCheckoutField(p.id, "taxCode", e.target.value)}
                        placeholder="Codice fiscale"
                        className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm uppercase"
                      />
                      <input
                        type="text"
                        value={(checkoutData[p.id] || EMPTY_CHECKOUT_DATA).vatNumber}
                        onChange={(e) => updateCheckoutField(p.id, "vatNumber", e.target.value)}
                        placeholder="P.IVA (opzionale)"
                        className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                      />
                    </div>
                    <p className="text-xs text-zinc-500">
                      Prima del pagamento servono email e almeno uno tra codice fiscale o P.IVA.
                    </p>
                    {checkoutErrors[p.id] ? (
                      <p className="text-xs text-red-500">{checkoutErrors[p.id]}</p>
                    ) : null}
                  </div>
                  <PayPalButton
                    serviceId={p.id}
                    serviceTitle={p.title}
                    price={p.price}
                    checkoutData={checkoutData[p.id] || EMPTY_CHECKOUT_DATA}
                    onValidationError={(message) => setCheckoutErrors((prev) => ({ ...prev, [p.id]: message }))}
                  />
                  <button
                    onClick={() => handleStripeCheckout(p.id)}
                    disabled={loading === p.id}
                    className="block w-full text-center py-3 rounded-lg font-medium text-sm transition-colors border border-zinc-200 text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading === p.id ? "Caricamento..." : "Paga con carta"}
                  </button>
                </div>
              ) : (
                <a href="/contatti" className="block text-center py-3 rounded-lg font-medium text-sm transition-colors bg-zinc-900 text-white hover:bg-zinc-800">
                  Richiedi preventivo
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
