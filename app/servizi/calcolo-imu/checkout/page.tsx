import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ImuCheckoutForm } from "./imu-checkout-form";

export const metadata: Metadata = {
  title: "Checkout — Calcolo IMU professionale | A.T. Consulting Parma",
  description:
    "Acquista il calcolo IMU professionale online. Pagamento sicuro Stripe o PayPal, fattura elettronica entro 24h, F24 pronto in 3 giorni lavorativi.",
  alternates: {
    canonical: "/servizi/calcolo-imu/checkout",
  },
  robots: { index: false, follow: true },
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const params = await searchParams;
  const tier = params.tier === "multi" ? "multi" : "singolo";

  return (
    <>
      <SiteHeader />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/servizi/calcolo-imu"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna al servizio
          </Link>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 font-[family-name:var(--font-heading)]">
            Acquista il calcolo IMU professionale
          </h1>
          <p className="text-zinc-600 leading-relaxed mb-10">
            Acconto giugno + saldo dicembre dello stesso anno. F24 pronti, opzione delega F24 Entratel inclusa nel prezzo.
          </p>

          <ImuCheckoutForm initialTier={tier} />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
