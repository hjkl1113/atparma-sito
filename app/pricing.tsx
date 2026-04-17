"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { DEFAULT_PREZZI, type Servizio } from "@/app/lib/prezzi-default";
import {
  EMPTY_CHECKOUT_DATA,
  getCheckoutError,
  normalizeTaxCode,
  normalizeVatNumber,
  type CheckoutFormData,
} from "@/app/lib/checkout-utils";
import { PayPalButton } from "@/app/servizi/_components/paypal-button";

export function Pricing() {
  const [prezzi, setPrezzi] = useState<Servizio[]>(DEFAULT_PREZZI);
  const [loading, setLoading] = useState<string | null>(null);
  const [checkoutData, setCheckoutData] = useState<Record<string, CheckoutFormData>>({});
  const [checkoutErrors, setCheckoutErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/prezzi", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: Servizio[]) => {
        if (!Array.isArray(data)) return;
        const slugById = new Map(DEFAULT_PREZZI.map((s) => [s.id, s.slug]));
        const merged = data.map((s) => {
          const slug = s.slug ?? slugById.get(s.id);
          return slug ? { ...s, slug } : s;
        });
        setPrezzi(merged);
      })
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
              {p.price && p.slug ? (
                <Link
                  href={`/servizi/${p.slug}`}
                  className="block text-center py-3 rounded-lg font-semibold text-sm transition-colors bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)]"
                >
                  Scopri e acquista
                </Link>
              ) : p.price ? (
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

        <div className="mt-16 bg-white border border-zinc-200 rounded-2xl p-8">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-4 text-center">
            Incluso in ogni servizio
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h6m0 0l-3-3m3 3l-3 3M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-zinc-900">Portale clienti</p>
              <p className="text-xs text-zinc-500 leading-relaxed mt-1">Documenti, scadenze e pratiche in un&apos;unica dashboard.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-zinc-900">Upload sicuro</p>
              <p className="text-xs text-zinc-500 leading-relaxed mt-1">Canale cifrato per caricare documenti sensibili.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-zinc-900">Accesso 24/7</p>
              <p className="text-xs text-zinc-500 leading-relaxed mt-1">Consulta lo stato della pratica quando vuoi.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-zinc-900">Albo dottori commercialisti</p>
              <p className="text-xs text-zinc-500 leading-relaxed mt-1">Studio iscritto con dottori revisori legali.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/calcolatori/forfettario"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium"
          >
            Non sei sicuro quale regime scegliere? Prova il calcolatore forfettario
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
