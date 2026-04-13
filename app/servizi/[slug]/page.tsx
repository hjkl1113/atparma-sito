import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const serviziData: Record<string, {
  title: string;
  metaDesc: string;
  intro: string;
  dettagli: string[];
  perChi: string[];
  cta: string;
}> = {
  "consulenza-fiscale": {
    title: "Consulenza fiscale",
    metaDesc: "Consulenza fiscale per imprese e professionisti a Parma. Dichiarazioni, pianificazione fiscale, IVA, contenziosi tributari.",
    intro: "Offriamo un servizio completo di consulenza fiscale, dalla gestione ordinaria delle dichiarazioni fino alla pianificazione strategica del carico tributario. Il nostro team segue ogni aspetto della fiscalita d'impresa con competenza e precisione.",
    dettagli: [
      "Dichiarazioni dei redditi: modello 730, Redditi PF, SP e SC",
      "Pianificazione fiscale e ottimizzazione del carico tributario",
      "Consulenza IVA, imposte dirette e indirette",
      "Assistenza in verifiche fiscali e accertamenti dell'Agenzia delle Entrate",
      "Contenzioso tributario in ogni grado di giudizio",
      "Interpelli e ruling preventivi con l'Amministrazione finanziaria",
      "Fiscalita internazionale e transfer pricing",
      "Adempimenti fiscali periodici e gestione scadenze",
    ],
    perChi: [
      "Imprese e societa di capitali",
      "Professionisti e studi associati",
      "Imprenditori individuali e ditte",
      "Privati con situazioni fiscali complesse",
    ],
    cta: "Richiedi una consulenza fiscale",
  },
  "crisi-di-impresa": {
    title: "Crisi di impresa",
    metaDesc: "Gestione crisi di impresa a Parma. Composizione negoziata, piani di risanamento, concordato preventivo, ristrutturazioni.",
    intro: "La gestione della crisi d'impresa richiede competenze specialistiche e tempestivita. Il nostro team ha maturato una significativa esperienza nella gestione delle procedure concorsuali e nella composizione negoziata della crisi, assistendo imprese in difficolta con soluzioni concrete e personalizzate.",
    dettagli: [
      "Composizione negoziata della crisi (D.Lgs. 14/2019 — Codice della Crisi)",
      "Piani di risanamento attestati (art. 67, co. 3, lett. d, L.F.)",
      "Accordi di ristrutturazione dei debiti",
      "Concordato preventivo in continuita e liquidatorio",
      "Liquidazione giudiziale e procedure concorsuali",
      "Perizie e attestazioni per il Tribunale",
      "Assistenza agli organi di controllo societario (sindaci, revisori)",
      "Analisi della continuita aziendale e test di sostenibilita",
    ],
    perChi: [
      "Imprese in difficolta finanziaria",
      "Societa soggette a procedure concorsuali",
      "Organi di controllo e revisori legali",
      "Professionisti nominati dal Tribunale",
    ],
    cta: "Richiedi assistenza per crisi di impresa",
  },
  "consulenza-finanziaria": {
    title: "Consulenza finanziaria",
    metaDesc: "Consulenza finanziaria per imprese a Parma. Business plan, valutazione d'azienda, finanza agevolata, operazioni M&A.",
    intro: "Supportiamo le imprese in tutte le fasi della gestione finanziaria: dall'accesso al credito alla finanza agevolata, dalla redazione di business plan alla valutazione d'azienda, fino al supporto nelle operazioni straordinarie di M&A.",
    dettagli: [
      "Business plan e piani industriali per banche e investitori",
      "Valutazione d'azienda e di rami d'azienda",
      "Accesso al credito e rapporti con gli istituti bancari",
      "Finanza agevolata: bandi regionali, nazionali ed europei",
      "Operazioni di M&A: fusioni, acquisizioni, cessioni",
      "Due diligence fiscale e finanziaria",
      "Ristrutturazione del debito e negoziazione con i creditori",
      "Analisi di fattibilita economico-finanziaria",
    ],
    perChi: [
      "PMI in fase di crescita o espansione",
      "Imprese che necessitano di finanziamenti",
      "Societa interessate a operazioni straordinarie",
      "Start-up e nuove iniziative imprenditoriali",
    ],
    cta: "Richiedi una consulenza finanziaria",
  },
};

export function generateStaticParams() {
  return Object.keys(serviziData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = serviziData[slug];
  if (!s) return {};
  return {
    title: `${s.title} — Commercialista Parma | A.T. Consulting`,
    description: s.metaDesc,
    alternates: {
      canonical: `/servizi/${slug}`,
    },
  };
}

export default async function ServizioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = serviziData[slug];
  if (!s) notFound();

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
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/servizi"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tutti i servizi
          </Link>

          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Servizio
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
            {s.title}
          </h1>
          <p className="text-zinc-600 leading-relaxed mb-12 text-lg">
            {s.intro}
          </p>

          <h2 className="text-xl font-semibold mb-6 font-[family-name:var(--font-heading)]">
            Cosa comprende
          </h2>
          <ul className="space-y-3 mb-12">
            {s.dettagli.map((d) => (
              <li key={d} className="flex gap-3 text-zinc-700">
                <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {d}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-6 font-[family-name:var(--font-heading)]">
            A chi si rivolge
          </h2>
          <ul className="space-y-3 mb-12">
            {s.perChi.map((p) => (
              <li key={p} className="flex gap-3 text-zinc-700">
                <svg className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {p}
              </li>
            ))}
          </ul>

          <div className="bg-[var(--color-surface)] rounded-2xl p-8 text-center">
            <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">
              Hai bisogno di assistenza?
            </h3>
            <p className="text-zinc-600 text-sm mb-6">
              Contattaci per un preventivo gratuito. Risposta entro 24 ore.
            </p>
            <Link
              href="/contatti"
              className="inline-block px-8 py-4 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
            >
              {s.cta}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
