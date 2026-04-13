import type { Metadata } from "next";
import Link from "next/link";

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              A.T. Consulting
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <Link href="/servizi" className="text-zinc-900 font-medium">
              Servizi
            </Link>
            <Link href="/#chi-siamo" className="hover:text-zinc-900 transition-colors">
              Chi siamo
            </Link>
            <Link href="/contatti" className="hover:text-zinc-900 transition-colors">
              Contatti
            </Link>
            <a
              href="https://clienti.atparma.com"
              className="ml-2 px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Area Clienti
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            I nostri servizi
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Le nostre aree di specializzazione
          </h1>
          <p className="text-zinc-600 max-w-2xl mb-16 leading-relaxed">
            Un team di dottori commercialisti e revisori legali al tuo fianco,
            dalla pianificazione fiscale fino alle operazioni piu complesse.
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
