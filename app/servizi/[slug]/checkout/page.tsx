import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MobileMenu } from "@/components/mobile-menu";
import { DEFAULT_PREZZI } from "@/app/lib/prezzi-default";
import { getAllProdotti, getProdotto } from "@/app/servizi/_data/prodotti";
import { CheckoutForm } from "@/app/servizi/_components/checkout-form";

export function generateStaticParams() {
  return getAllProdotti().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prodotto = getProdotto(slug);
  if (!prodotto) return {};
  return {
    title: `Checkout — ${prodotto.title} | A.T. Consulting Parma`,
    description: `Acquista ${prodotto.title}. Pagamento sicuro con Stripe o PayPal.`,
    alternates: { canonical: `/servizi/${slug}/checkout` },
    robots: { index: false, follow: true },
  };
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prodotto = getProdotto(slug);
  if (!prodotto) notFound();

  const prezzo = DEFAULT_PREZZI.find((p) => p.id === prodotto.prezzoId);
  const price = prezzo?.price;
  if (!price) notFound();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
            A.T. Consulting
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <Link href="/servizi" className="hover:text-zinc-900 transition-colors">Servizi</Link>
            <Link href="/calcolatori/forfettario" className="hover:text-zinc-900 transition-colors">Calcola forfettario</Link>
            <Link href="/blog" className="hover:text-zinc-900 transition-colors">Blog</Link>
            <Link href="/faq" className="hover:text-zinc-900 transition-colors">FAQ</Link>
            <Link href="/contatti" className="hover:text-zinc-900 transition-colors">Contatti</Link>
            <a
              href="https://clienti.atparma.com"
              className="ml-2 px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Area Clienti
            </a>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="pt-28 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href={`/servizi/${prodotto.slug}`}
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna al servizio
          </Link>

          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Checkout sicuro
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 font-[family-name:var(--font-heading)]">
            Completa l&apos;acquisto
          </h1>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
            <CheckoutForm
              serviceId={prodotto.prezzoId}
              serviceTitle={prodotto.title}
              price={price}
            />

            <aside className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 lg:sticky lg:top-24">
              <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium mb-3">
                Riepilogo ordine
              </p>
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">
                {prodotto.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                {prodotto.tagline}
              </p>

              <div className="flex items-baseline justify-between pb-4 border-b border-zinc-100">
                <span className="text-sm text-zinc-600">Servizio</span>
                <span className="text-sm font-medium">€{price}</span>
              </div>
              <div className="flex items-baseline justify-between py-4 border-b border-zinc-100">
                <span className="text-sm text-zinc-600">Consegna</span>
                <span className="text-sm font-medium text-right">{prodotto.deliveryDays}</span>
              </div>
              <div className="flex items-baseline justify-between pt-5">
                <span className="text-sm font-semibold">Totale</span>
                <div className="text-right">
                  <span className="text-2xl font-bold font-[family-name:var(--font-heading)]">
                    €{price}
                  </span>
                  <p className="text-xs text-zinc-500">IVA inclusa</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-100 space-y-2">
                <p className="text-xs text-zinc-600 flex items-start gap-2">
                  <svg className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Portale clienti incluso per 12 mesi
                </p>
                <p className="text-xs text-zinc-600 flex items-start gap-2">
                  <svg className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Fattura elettronica automatica
                </p>
                <p className="text-xs text-zinc-600 flex items-start gap-2">
                  <svg className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Diritto di recesso 14 giorni secondo Codice del Consumo
                </p>
                {price >= 400 && (
                  <p className="text-xs text-zinc-600 flex items-start gap-2">
                    <svg className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    Rateizzazione disponibile: PayPal Pay Later (3 rate senza interessi) o Klarna in checkout
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
