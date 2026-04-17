import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MobileMenu } from "@/app/mobile-menu";
import { DEFAULT_PREZZI } from "@/app/lib/prezzi-default";
import { getAllProdotti, getProdotto, type ProdottoServizio } from "@/app/servizi/_data/prodotti";

const competenze: Record<string, {
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
  const prodotti = getAllProdotti().map((p) => ({ slug: p.slug }));
  const aree = Object.keys(competenze).map((slug) => ({ slug }));
  return [...prodotti, ...aree];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prodotto = getProdotto(slug);
  if (prodotto) {
    return {
      title: `${prodotto.title} — A.T. Consulting Parma`,
      description: prodotto.metaDesc,
      alternates: { canonical: `/servizi/${slug}` },
      openGraph: {
        title: prodotto.title,
        description: prodotto.metaDesc,
        url: `https://www.atparma.com/servizi/${slug}`,
        type: "website",
      },
    };
  }

  const c = competenze[slug];
  if (!c) return {};
  return {
    title: `${c.title} — Commercialista Parma | A.T. Consulting`,
    description: c.metaDesc,
    alternates: { canonical: `/servizi/${slug}` },
  };
}

function SharedHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
          A.T. Consulting
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
          <Link href="/servizi" className="text-zinc-900 font-medium">Servizi</Link>
          <Link href="/calcolatori/forfettario" className="hover:text-zinc-900 transition-colors">Calcolatore</Link>
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
  );
}

function ProdottoView({ prodotto }: { prodotto: ProdottoServizio }) {
  const prezzo = DEFAULT_PREZZI.find((p) => p.id === prodotto.prezzoId);
  const price = prezzo?.price ?? null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: prodotto.title,
    description: prodotto.metaDesc,
    brand: { "@type": "Organization", name: "A.T. Consulting Parma" },
    offers: price
      ? {
          "@type": "Offer",
          price: price.toFixed(2),
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `https://www.atparma.com/servizi/${prodotto.slug}`,
        }
      : undefined,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: prodotto.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SharedHeader />

      <main className="pt-32 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/servizi"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tutti i servizi
          </Link>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start mb-20">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
                Servizio online
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 font-[family-name:var(--font-heading)]">
                {prodotto.title}
              </h1>
              <p className="text-zinc-600 leading-relaxed text-lg mb-8">{prodotto.tagline}</p>

              <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                <span className="inline-flex items-center gap-1 bg-zinc-100 rounded-full px-3 py-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Consegna {prodotto.deliveryDays}
                </span>
                <span className="inline-flex items-center gap-1 bg-zinc-100 rounded-full px-3 py-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Dottori commercialisti iscritti all&apos;albo
                </span>
              </div>
            </div>

            <aside className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 lg:sticky lg:top-24">
              <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium mb-2">
                Prezzo chiaro, tutto incluso
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold font-[family-name:var(--font-heading)]">
                  {price !== null ? `€${price}` : "A preventivo"}
                </span>
                {price !== null && <span className="text-sm text-zinc-500">una tantum</span>}
              </div>
              <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                Apertura + consulenza iniziale + 12 mesi di portale clienti. Niente canoni nascosti.
              </p>
              {price !== null ? (
                <Link
                  href={`/servizi/${prodotto.slug}/checkout`}
                  className="block text-center px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-semibold"
                >
                  Acquista ora
                </Link>
              ) : (
                <Link
                  href="/contatti"
                  className="block text-center px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors text-sm font-semibold"
                >
                  Richiedi preventivo
                </Link>
              )}
              <p className="text-xs text-zinc-500 mt-3 text-center">
                Carta di credito o PayPal. Fattura elettronica automatica.
              </p>
            </aside>
          </div>

          <section className="mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Come funziona
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 font-[family-name:var(--font-heading)]">
              Dal pagamento alla P.IVA attiva, in 4 passi
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {prodotto.process.map((step) => (
                <div key={step.step} className="bg-white border border-zinc-100 rounded-2xl p-6">
                  <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">{step.step}</p>
                  <p className="text-sm text-zinc-700 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-10 mb-20">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
                Cosa e incluso
              </p>
              <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                Tutto questo nel prezzo
              </h2>
              <ul className="space-y-3">
                {prodotto.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-zinc-700 leading-relaxed">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium mb-3">
                Cosa non e incluso
              </p>
              <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                Trasparenza sugli esclusi
              </h2>
              <ul className="space-y-3">
                {prodotto.esclusi.map((e) => (
                  <li key={e} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                    <svg className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-20 grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
                Per chi e pensato
              </p>
              <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                Questo servizio e per te se
              </h2>
              <ul className="space-y-3">
                {prodotto.perChi.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-zinc-700 leading-relaxed">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
                Documenti che ti servono
              </p>
              <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                Prepara questi prima del pagamento
              </h2>
              <ul className="space-y-3">
                {prodotto.docs.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-zinc-700 leading-relaxed">
                    <svg className="w-5 h-5 text-zinc-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-20 bg-zinc-950 text-white rounded-3xl p-8 sm:p-12">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Il portale che ricevi
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              Non un commercialista a telefono. Un&apos;area clienti digitale di ultima generazione.
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              Dopo il pagamento ricevi le credenziali del nostro portale: carichi i documenti in
              sicurezza, segui lo stato della pratica in tempo reale e parli con il tuo
              commercialista senza email e senza telefonate ripetute.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <p className="text-sm font-semibold mb-1">Upload sicuro</p>
                <p className="text-xs text-zinc-400 leading-relaxed">Canale cifrato per documenti sensibili, niente email.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="text-sm font-semibold mb-1">Stato pratica in tempo reale</p>
                <p className="text-xs text-zinc-400 leading-relaxed">Vedi a che punto siamo senza dover chiamare.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                </div>
                <p className="text-sm font-semibold mb-1">Scadenze automatiche</p>
                <p className="text-xs text-zinc-400 leading-relaxed">F24 e dichiarazioni con alert proattivi.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                </div>
                <p className="text-sm font-semibold mb-1">Chat col commercialista</p>
                <p className="text-xs text-zinc-400 leading-relaxed">Tutte le conversazioni tracciate, mai perse.</p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Domande frequenti
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-[family-name:var(--font-heading)]">
              Cosa chiedono prima di acquistare
            </h2>
            <div className="space-y-3 max-w-3xl">
              {prodotto.faqs.map((f) => (
                <details key={f.q} className="group bg-white rounded-xl border border-zinc-100 overflow-hidden">
                  <summary className="cursor-pointer p-5 font-medium text-sm flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors">
                    <span>{f.q}</span>
                    <svg className="w-4 h-4 text-zinc-400 transition-transform group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-zinc-600 text-sm leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-[var(--color-surface)] rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-[family-name:var(--font-heading)]">
              Pronto a partire?
            </h2>
            <p className="text-zinc-600 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
              Paghi ora, ricevi subito le credenziali del portale e carichi i documenti quando
              vuoi. La tua P.IVA attiva {prodotto.deliveryDays}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {price !== null ? (
                <Link
                  href={`/servizi/${prodotto.slug}/checkout`}
                  className="px-8 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
                >
                  Acquista a €{price}
                </Link>
              ) : (
                <Link
                  href="/contatti"
                  className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  Richiedi preventivo
                </Link>
              )}
              <Link
                href="/calcolatori/forfettario"
                className="px-8 py-4 border border-zinc-300 text-zinc-700 font-medium rounded-lg hover:bg-white transition-colors"
              >
                Prima simula col calcolatore
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function CompetenzaView({ s }: { s: (typeof competenze)[string] }) {
  return (
    <>
      <SharedHeader />

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
            Area di competenza
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
            {s.title}
          </h1>
          <p className="text-zinc-600 leading-relaxed mb-12 text-lg">{s.intro}</p>

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

export default async function ServizioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prodotto = getProdotto(slug);
  if (prodotto) return <ProdottoView prodotto={prodotto} />;

  const competenza = competenze[slug];
  if (competenza) return <CompetenzaView s={competenza} />;

  notFound();
}
