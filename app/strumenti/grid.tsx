"use client";

import Link from "next/link";
import { useState } from "react";

type Pubblico = "privato" | "libero-professionista" | "commercialista";

interface ToolItem {
  titolo: string;
  href: string;
  descrizione: string;
  tag: string;
  pubblico: Pubblico[];
  icon: string; // small letter-based glyph
}

const TOOLS: ToolItem[] = [
  {
    titolo: "Calcolatore forfettario",
    href: "/calcolatori/forfettario",
    descrizione:
      "Confronta regime forfettario e ordinario 2026. Coefficienti ATECO, cassa previdenziale, aliquota 5% o 15%, breakdown step-by-step.",
    tag: "Forfettario vs Ordinario",
    pubblico: ["libero-professionista", "commercialista"],
    icon: "F",
  },
  {
    titolo: "Calcolo codice fiscale",
    href: "/strumenti/codice-fiscale",
    descrizione:
      "Calcola o decodifica il codice fiscale italiano in pochi secondi. Oltre 7.900 comuni italiani con autocomplete.",
    tag: "Codice fiscale",
    pubblico: ["privato", "libero-professionista", "commercialista"],
    icon: "CF",
  },
  {
    titolo: "Busta paga: da lordo a netto",
    href: "/strumenti/buste-paga",
    descrizione:
      "Simula la busta paga di un lavoratore dipendente. IRPEF 2026, INPS 9,49%, detrazione lavoro, addizionali, trattamento integrativo.",
    tag: "Busta paga",
    pubblico: ["privato", "commercialista"],
    icon: "BP",
  },
  {
    titolo: "Calcolo IMU 2026",
    href: "/strumenti/imu",
    descrizione:
      "Base imponibile, aliquote, esenzioni abitazione principale, quota e mesi di possesso. Acconto giugno e saldo dicembre.",
    tag: "IMU",
    pubblico: ["privato", "commercialista"],
    icon: "IMU",
  },
  {
    titolo: "Scadenzario fiscale 2026",
    href: "/strumenti/scadenze",
    descrizione:
      "Tutte le scadenze 2026 (IVA, IRPEF, INPS, IMU, 770, Redditi). Filtra per profilo e scarica il calendario in formato .ics.",
    tag: "Scadenze",
    pubblico: ["libero-professionista", "commercialista"],
    icon: "S",
  },
  {
    titolo: "Preventivo P.IVA artigiano/commerciante",
    href: "/strumenti/preventivo-artigiano-commerciante",
    descrizione:
      "Stima indicativa in 5 step: onorario studio + costi vivi (CCIAA, SIA, SCIA, USL, HACCP). Trasparenza totale, offerta puntuale via mandato.",
    tag: "Preventivo P.IVA",
    pubblico: ["privato", "libero-professionista"],
    icon: "PA",
  },
];

const FILTRI: { id: Pubblico | "tutti"; label: string }[] = [
  { id: "tutti", label: "Tutti" },
  { id: "privato", label: "Per privati" },
  { id: "libero-professionista", label: "Per liberi professionisti" },
  { id: "commercialista", label: "Per commercialisti" },
];

export function Grid() {
  const [filtro, setFiltro] = useState<Pubblico | "tutti">("tutti");

  const visibili = filtro === "tutti" ? TOOLS : TOOLS.filter((t) => t.pubblico.includes(filtro));

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTRI.map((f) => {
          const active = filtro === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFiltro(f.id)}
              aria-pressed={active}
              className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                active
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibili.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group bg-white rounded-2xl border border-zinc-200 p-6 hover:border-zinc-900 hover:shadow-sm transition-all"
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="inline-flex items-center justify-center h-10 min-w-10 px-2 rounded-lg bg-zinc-900 text-white text-xs font-bold tracking-wide">
                {t.icon}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-400">{t.tag}</span>
            </div>
            <h3 className="text-base font-semibold mb-2 font-[family-name:var(--font-heading)] group-hover:text-[var(--color-accent)] transition-colors">
              {t.titolo}
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">{t.descrizione}</p>
          </Link>
        ))}
      </div>

      {visibili.length === 0 && (
        <p className="text-sm text-zinc-500 bg-white rounded-2xl border border-zinc-200 p-6 text-center">
          Nessuno strumento trovato per questo filtro.
        </p>
      )}

      <div className="mt-12 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8">
        <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">
          Sei un commercialista?
        </h3>
        <p className="text-sm text-zinc-600 mb-4">
          Professio è il portale che offri ai tuoi clienti, brandizzato con il tuo studio.
          Documenti, scadenze, pratiche, tool fiscali — tutto in un unico posto.
        </p>
        <p className="text-xs text-zinc-500">
          Entra nella waitlist beta dal toggle 👔 in testa a ciascun tool.
        </p>
      </div>
    </div>
  );
}
