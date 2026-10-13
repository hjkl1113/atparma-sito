import type { Metadata } from "next";
import { Tool } from "./tool";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { webAppJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Calcolo IMU 2026 — prima e seconda casa",
  description:
    "Calcola l'IMU 2026: rendita catastale, categoria, quota e mesi di possesso, aliquota comunale. Esenzione abitazione principale. Acconto giugno, saldo dicembre.",
  alternates: {
    canonical: "/strumenti/imu",
  },
  openGraph: {
    title: "Calcolo IMU 2026 — abitazione principale, seconda casa",
    description: "Simulatore IMU gratuito. Acconto e saldo, esenzione prima casa, detrazioni.",
    url: "https://www.atparma.com/strumenti/imu",
    type: "website",
  },
};

export default function ImuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(webAppJsonLd({
        name: "Calcolatore IMU",
        description:
          "Calcola l'IMU dovuta su abitazione principale, seconda casa e pertinenze, con rendita catastale e aliquote comunali.",
        path: "/strumenti/imu",
      }))} />
      <SiteHeader current="strumenti" />

      <main className="pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Strumento gratuito
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
              Calcolo IMU 2026
            </h1>
            <p className="text-zinc-600 leading-relaxed">
              Calcola l&apos;IMU 2026 su casa, seconda casa, ufficio, negozio o capannone.
              Rendita catastale, categoria, quota e mesi di possesso. Esenzione abitazione
              principale non di lusso. Acconto entro il 16 giugno, saldo entro il 16
              dicembre.
            </p>
          </div>

          <Tool />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
