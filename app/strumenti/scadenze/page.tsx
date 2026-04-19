import type { Metadata } from "next";
import { Tool } from "./tool";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Scadenziario fiscale 2026 — calendario IVA, IRPEF, INPS | A.T. Consulting Parma",
  description:
    "Tutte le scadenze fiscali 2026 in un unico calendario. Filtra per profilo (forfettario, ordinario, società, dipendenti). Scarica in formato iCal per aggiungere al tuo calendario.",
  alternates: {
    canonical: "/strumenti/scadenze",
  },
  openGraph: {
    title: "Scadenziario fiscale 2026 — calendario completo",
    description:
      "IVA, IRPEF, INPS, IMU, 770, Redditi. Filtra per contribuente e scarica in iCal.",
    url: "https://www.atparma.com/strumenti/scadenze",
    type: "website",
  },
};

export default function ScadenzePage() {
  return (
    <>
      <SiteHeader current="strumenti" />

      <main className="pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Strumento gratuito
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
              Scadenziario fiscale 2026
            </h1>
            <p className="text-zinc-600 leading-relaxed">
              Tutte le scadenze principali 2026: IVA, IRPEF, INPS, IMU, 770, Modello
              Redditi. Filtra per profilo (forfettario, ordinario, società, dipendenti) e
              scarica un file .ics da aggiungere a Google Calendar, Outlook, Apple
              Calendar.
            </p>
          </div>

          <Tool />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
