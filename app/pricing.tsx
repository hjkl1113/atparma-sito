"use client";

import { useState, useEffect, useRef } from "react";

const prezzi = [
  {
    id: "730",
    title: "Dichiarazione 730",
    price: "79",
    priceNum: 79,
    desc: "Compilazione e invio della dichiarazione dei redditi modello 730.",
  },
  {
    id: "piva",
    title: "Apertura Partita IVA",
    price: "149",
    priceNum: 149,
    desc: "Apertura e configurazione della Partita IVA per la tua attivita.",
  },
  {
    id: "consulenza",
    title: "Consulenza su misura",
    price: null,
    priceNum: 0,
    desc: "Analisi personalizzata e piano d'azione per la tua situazione specifica.",
  },
];

function PayPalButton({ servizio, price }: { servizio: string; price: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "success" | "error">("idle");

  useEffect(() => {
    if (!containerRef.current) return;

    const existing = document.querySelector('script[src*="paypal.com/sdk"]');
    if (existing) {
      renderButton();
      return;
    }

    setStatus("loading");
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
      if (!paypal) {
        setStatus("error");
        return;
      }

      paypal.Buttons({
        style: {
          layout: "horizontal",
          color: "gold",
          shape: "rect",
          label: "pay",
          height: 40,
          tagline: false,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createOrder: (_data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              description: servizio,
              amount: { value: price.toFixed(2), currency_code: "EUR" },
            }],
          });
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onApprove: async (_data: any, actions: any) => {
          await actions.order.capture();
          setStatus("success");
          // Notifica via email
          fetch("/api/contatti", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nome: "Pagamento PayPal",
              email: "noreply@paypal.com",
              servizio: servizio,
              messaggio: `Nuovo pagamento PayPal ricevuto per ${servizio} — EUR ${price}. Verificare su PayPal.`,
            }),
          });
        },
        onError: () => setStatus("error"),
      }).render(containerRef.current);

      setStatus("ready");
    }
  }, [servizio, price]);

  if (status === "success") {
    return (
      <div className="text-center py-3 text-green-600 font-medium text-sm">
        Pagamento completato!
      </div>
    );
  }

  return (
    <div>
      <div ref={containerRef} className="min-h-[40px]" />
      {status === "loading" && (
        <p className="text-xs text-zinc-400 text-center mt-1">Caricamento PayPal...</p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-500 text-center mt-1">Errore PayPal. Ricarica la pagina.</p>
      )}
    </div>
  );
}

export function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleStripeCheckout(servizioId: string) {
    setLoading(servizioId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ servizio: servizioId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setLoading(null);
      }
    } catch {
      setLoading(null);
    }
  }

  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
          Servizi online
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16 font-[family-name:var(--font-heading)]">
          Inizia subito
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {prezzi.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl p-8 border border-zinc-100 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">
                {p.title}
              </h3>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed flex-1">
                {p.desc}
              </p>
              <div className="mb-6">
                {p.price ? (
                  <span className="text-3xl font-bold font-[family-name:var(--font-heading)]">
                    &euro;{p.price}
                  </span>
                ) : (
                  <span className="text-lg font-medium text-zinc-500">
                    A preventivo
                  </span>
                )}
              </div>
              {p.price ? (
                <div className="space-y-3">
                  <PayPalButton servizio={p.title} price={p.priceNum} />
                  <button
                    onClick={() => handleStripeCheckout(p.id)}
                    disabled={loading === p.id}
                    className="block w-full text-center py-3 rounded-lg font-medium text-sm transition-colors border border-zinc-200 text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading === p.id ? "Caricamento..." : "Paga con carta"}
                  </button>
                </div>
              ) : (
                <a
                  href="/contatti"
                  className="block text-center py-3 rounded-lg font-medium text-sm transition-colors bg-zinc-900 text-white hover:bg-zinc-800"
                >
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
