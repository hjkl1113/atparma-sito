import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { DEFAULT_PREZZI } from "@/app/lib/prezzi-default";

export const metadata: Metadata = {
  title: "Servizi — Commercialista online Parma | A.T. Consulting Parma",
  description:
    "Consulenza fiscale, 730 online, apertura Partita IVA, crisi di impresa e consulenza finanziaria. Commercialista online a Parma per imprese e professionisti.",
  alternates: {
    canonical: "/servizi",
  },
};

const servizi = [
  {
    num: "01",
    slug: "consulenza-fiscale",
    title: "Consulenza fiscale",
    desc: "Dichiarazioni, pianificazione fiscale, IVA, imposte dirette e indirette. Assistenza nelle verifiche e nei contenziosi tributari.",
    dettagli: [
      "Dichiarazioni dei redditi (modello 730, Redditi PF/SP/SC)",
      "Pianificazione fiscale e ottimizzazione del carico tributario",
      "Consulenza IVA e imposte indirette",
      "Assistenza in verifiche fiscali e accertamenti",
      "Contenzioso tributario in ogni grado di giudizio",
      "Interpelli e ruling con l'Agenzia delle Entrate",
    ],
  },
  {
    num: "02",
    slug: "crisi-di-impresa",
    title: "Crisi di impresa",
    desc: "Gestione delle procedure concorsuali, piani di risanamento, composizione negoziata della crisi e assistenza nelle ristrutturazioni.",
    dettagli: [
      "Composizione negoziata della crisi (D.Lgs. 14/2019)",
      "Piani di risanamento attestati (art. 67, co. 3, lett. d)",
      "Accordi di ristrutturazione dei debiti",
      "Concordato preventivo e liquidazione giudiziale",
      "Perizie e attestazioni per il tribunale",
      "Assistenza agli organi di controllo societario",
    ],
  },
  {
    num: "03",
    slug: "consulenza-finanziaria",
    title: "Consulenza finanziaria",
    desc: "Accesso al credito, finanza agevolata, business plan, valutazione d'azienda e supporto nelle operazioni di M&A.",
    dettagli: [
      "Business plan e piani industriali",
      "Valutazione d'azienda e di rami d'azienda",
      "Accesso al credito e rapporti con gli istituti bancari",
      "Finanza agevolata e bandi regionali/nazionali/europei",
      "Operazioni di M&A (fusioni, acquisizioni, cessioni)",
      "Due diligence fiscale e finanziaria",
    ],
  },
];

export default function ServiziPage() {
  return (
    <>
      <SiteHeader current="servizi" />

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            I nostri servizi
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Servizi online e aree di specializzazione
          </h1>
          <p className="text-zinc-600 max-w-2xl mb-16 leading-relaxed">
            Acquisti subito quello che ti serve o ci contatti per progetti piu complessi.
            Team di dottori commercialisti e revisori legali iscritti all&apos;albo.
          </p>

          <section className="mb-20">
            <h2 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)]">
              Servizi online acquistabili
            </h2>
            <p className="text-zinc-600 text-sm mb-8 max-w-2xl">
              Prezzo chiaro, checkout in due minuti, portale clienti incluso. La pratica si
              apre appena completi il pagamento.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEFAULT_PREZZI.filter((p) => p.active).map((p) => {
                const isLinkable = Boolean(p.slug);
                const Card = (
                  <div className="h-full bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col hover:border-zinc-300 hover:shadow-md transition-all">
                    <h3 className="font-semibold mb-2 font-[family-name:var(--font-heading)]">
                      {p.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                        {p.price !== null ? `€${p.price}` : "A preventivo"}
                      </span>
                      {isLinkable ? (
                        <span className="text-xs text-[var(--color-accent)] font-medium inline-flex items-center gap-1">
                          Scopri <span aria-hidden>&rarr;</span>
                        </span>
                      ) : p.price !== null ? (
                        <span className="text-xs text-zinc-400">Scheda in arrivo</span>
                      ) : null}
                    </div>
                  </div>
                );
                return isLinkable ? (
                  <Link key={p.id} href={`/servizi/${p.slug}`} className="block">
                    {Card}
                  </Link>
                ) : (
                  <div key={p.id}>{Card}</div>
                );
              })}
            </div>
          </section>

          <h2 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)]">
            Aree di specializzazione
          </h2>
          <p className="text-zinc-600 text-sm mb-12 max-w-2xl">
            Consulenze su progetti complessi, operazioni straordinarie e contenziosi.
            Valutiamo insieme il perimetro e ti facciamo un preventivo dedicato.
          </p>

          <div className="space-y-12">
            {servizi.map((s) => (
              <div
                key={s.num}
                className="grid md:grid-cols-[1fr_2fr] gap-8 p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all"
              >
                <div>
                  <span className="text-5xl font-bold text-zinc-200 font-[family-name:var(--font-heading)]">
                    {s.num}
                  </span>
                  <h2 className="text-2xl font-bold mt-2 mb-3 font-[family-name:var(--font-heading)]">
                    {s.title}
                  </h2>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <Link
                    href={`/servizi/${s.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm hover:underline"
                  >
                    Scopri di piu
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {s.dettagli.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-zinc-700">
                      <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contatti"
              className="inline-block px-8 py-4 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
            >
              Richiedi una consulenza
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
