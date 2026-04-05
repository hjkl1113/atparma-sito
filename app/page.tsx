import Image from "next/image";
import { Pricing } from "./pricing";
import { MobileMenu } from "./mobile-menu";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
            A.T. Consulting
          </span>
          <span className="hidden sm:inline text-xs text-zinc-400 tracking-widest uppercase">
            Studio Professionale · Parma · Tutta Italia
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
          <a href="/servizi" className="hover:text-zinc-900 transition-colors">
            Servizi
          </a>
          <a href="/blog" className="hover:text-zinc-900 transition-colors">
            Blog
          </a>
          <a href="#chi-siamo" className="hover:text-zinc-900 transition-colors">
            Chi siamo
          </a>
          <a href="/contatti" className="hover:text-zinc-900 transition-colors">
            Contatti
          </a>
          <a
            href="https://at-parma.vercel.app"
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

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/generated-1775312466401.png"
        alt="Vista aerea di Parma"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <p className="text-sm tracking-[0.3em] uppercase text-white/70 mb-6">
          Studio Professionale · Parma · Tutta Italia
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 font-[family-name:var(--font-heading)]">
          Consulenza fiscale e finanziaria per imprese
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Supportiamo imprese e professionisti nella gestione fiscale, nella
          crisi di impresa e nelle operazioni straordinarie.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contatti"
            className="px-8 py-4 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-base"
          >
            Richiedi una consulenza
          </a>
          <a
            href="tel:+390521247721"
            className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors text-base"
          >
            +39 0521 247721
          </a>
          <a
            href="https://at-parma.vercel.app"
            className="text-white/70 hover:text-white underline underline-offset-4 text-sm transition-colors"
          >
            Accedi all&apos;area clienti
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <div className="text-2xl font-bold font-[family-name:var(--font-heading)]">20+</div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">
              Anni di esperienza
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold font-[family-name:var(--font-heading)]">200+</div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">
              Aziende assistite
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold font-[family-name:var(--font-heading)]">3</div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">
              Aree di specializzazione
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold font-[family-name:var(--font-heading)]">Dal 2005</div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">
              Da Parma a tutta Italia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xl sm:text-2xl text-zinc-600 leading-relaxed">
          Un team di professionisti qualificati al tuo fianco, dalla
          pianificazione fiscale fino alle operazioni piu complesse.
        </p>
      </div>
    </section>
  );
}

function AreaClienti() {
  return (
    <section className="py-16 bg-[var(--color-surface)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-zinc-100">
          <div className="flex-1">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Studio digitale e area clienti riservata
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
              Il tuo spazio professionale online
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Documenti, comunicazioni e gestione della pratica in un unico
              spazio sicuro e riservato.
            </p>
            <a
              href="https://at-parma.vercel.app"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors text-sm font-medium"
            >
              Accedi all&apos;area clienti
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="w-full md:w-80 h-48 bg-zinc-100 rounded-xl flex items-center justify-center">
            <Image
              src="/images/generated-1775311900516.png"
              alt="Area clienti digitale"
              width={320}
              height={192}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const servizi = [
  {
    num: "01",
    title: "Consulenza fiscale",
    desc: "Dichiarazioni, pianificazione fiscale, IVA, imposte dirette e indirette. Assistenza nelle verifiche e nei contenziosi tributari.",
  },
  {
    num: "02",
    title: "Crisi di impresa",
    desc: "Gestione delle procedure concorsuali, piani di risanamento, composizione negoziata della crisi e assistenza nelle ristrutturazioni.",
  },
  {
    num: "03",
    title: "Consulenza finanziaria",
    desc: "Accesso al credito, finanza agevolata, business plan, valutazione d'azienda e supporto nelle operazioni di M&A.",
  },
];

function Servizi() {
  return (
    <section id="servizi" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
          Le nostre aree di specializzazione
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16 font-[family-name:var(--font-heading)]">
          Cosa facciamo
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servizi.map((s) => (
            <div
              key={s.num}
              className="group p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl font-bold text-zinc-200 font-[family-name:var(--font-heading)] group-hover:text-[var(--color-accent)] transition-colors">
                {s.num}
              </span>
              <h3 className="text-xl font-semibold mt-4 mb-3 font-[family-name:var(--font-heading)]">
                {s.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing component imported from ./pricing.tsx (client component for Stripe checkout)

function ChiSiamo() {
  return (
    <section id="chi-siamo" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden">
            <Image
              src="/images/generated-1775312362328.png"
              alt="Il team di A.T. Consulting Parma"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Chi siamo
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
              Un approccio integrato ai problemi complessi
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              A.T. Consulting Parma nasce dall&apos;esperienza pluriennale nel
              supporto a imprese e professionisti. Il nostro team e composto da
              dottori commercialisti e revisori legali iscritti ai rispettivi
              albi professionali, figure che uniscono competenze fiscali, legali
              e finanziarie per offrire soluzioni concrete e personalizzate.
            </p>
            <a
              href="/contatti"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:underline"
            >
              Conosci il team
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Professionali, puntuali e sempre disponibili. Ci hanno guidato in una procedura di ristrutturazione complessa con grande competenza.",
    name: "Marco B.",
    role: "CEO, PMI manifatturiera",
  },
  {
    quote:
      "Finalmente uno studio che capisce le esigenze reali di un'impresa. Rispondono entro 24 ore e sanno anticipare i problemi.",
    name: "Laura M.",
    role: "Titolare, studio associato",
  },
  {
    quote:
      "Grazie al loro supporto abbiamo ottenuto un finanziamento agevolato che non sapevamo nemmeno esistesse. Risultati concreti.",
    name: "Roberto S.",
    role: "Imprenditore, settore food",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
          I nostri clienti
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16 font-[family-name:var(--font-heading)]">
          Cosa dicono di noi
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-zinc-100"
            >
              <svg
                className="w-8 h-8 text-zinc-200 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-zinc-700 leading-relaxed mb-6 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-zinc-500 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const vantaggi = [
  {
    title: "Risposta entro 24 ore",
    desc: "Per tutte le richieste urgenti",
  },
  {
    title: "Team multidisciplinare",
    desc: "Fisco, finanza e diritto societario",
  },
  {
    title: "Crisi di impresa",
    desc: "Esperienza specifica nelle ristrutturazioni",
  },
  {
    title: "Presenza costante",
    desc: "Non solo a scadenza, ma tutto l'anno",
  },
  {
    title: "Strumenti digitali",
    desc: "Gestione documentale e scadenze online",
  },
  {
    title: "20 anni di esperienza",
    desc: "Da Parma al servizio di tutta Italia",
  },
];

function PercheSceglierci() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
          Il valore che portiamo
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16 font-[family-name:var(--font-heading)]">
          Perche sceglierci
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vantaggi.map((v) => (
            <div key={v.title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{v.title}</h3>
                <p className="text-zinc-600 text-sm">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const blogArticles = [
  {
    slug: "commercialista-online",
    title: "Commercialista online: come sceglierlo e perche conviene",
    image: "/images/generated-1775311824086.png",
  },
  {
    slug: "aprire-partita-iva-online",
    title: "Come aprire la Partita IVA online nel 2026: tutto quello che devi sapere",
    image: "/images/generated-1775312781998.png",
  },
  {
    slug: "come-fare-730-online",
    title: "Come fare il 730 online: guida completa 2026",
    image: "/images/generated-1775312805408.png",
  },
];

function Blog() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
          Blog
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16 font-[family-name:var(--font-heading)]">
          Guide fiscali
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogArticles.map((a) => (
            <article
              key={a.title}
              className="bg-white rounded-2xl overflow-hidden border border-zinc-100 group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold leading-snug font-[family-name:var(--font-heading)]">
                  {a.title}
                </h3>
                <a
                  href={`/blog/${a.slug}`}
                  className="inline-flex items-center gap-1 text-[var(--color-accent)] text-sm font-medium mt-4 hover:underline"
                >
                  Leggi l&apos;articolo
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaUrgenze() {
  return (
    <section
      id="contatti"
      className="relative py-24 overflow-hidden"
    >
      <Image
        src="/images/generated-1775312220383.png"
        alt="Vista aerea di Parma"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
          Hai una questione urgente?
        </h2>
        <p className="text-lg text-white/80 mb-8 leading-relaxed">
          Il nostro team e disponibile per rispondere entro 24 ore da lunedi a
          venerdi.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+390521247721"
            className="px-8 py-4 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            +39 0521 247721
          </a>
          <a
            href="mailto:segreteria@atparma.com"
            className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            segreteria@atparma.com
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-heading)]">
              A.T. Consulting Parma
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              A.T. Consulting Parma S.R.L.S.
              <br />
              Borgo Riccio da Parma 5
              <br />
              43121 Parma (PR)
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-zinc-300">
              Contatti
            </h3>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>
                Tel:{" "}
                <a
                  href="tel:+390521247721"
                  className="hover:text-white transition-colors"
                >
                  0521 247721
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:segreteria@atparma.com"
                  className="hover:text-white transition-colors"
                >
                  segreteria@atparma.com
                </a>
              </li>
              <li>
                PEC:{" "}
                <a
                  href="mailto:atconsultingparma@pec.it"
                  className="hover:text-white transition-colors"
                >
                  atconsultingparma@pec.it
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-zinc-300">
              Link utili
            </h3>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>
                <a href="/servizi" className="hover:text-white transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://at-parma.vercel.app"
                  className="hover:text-white transition-colors"
                >
                  Area Clienti
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-xs">
          <p>P.IVA / CF: 02794450342</p>
          <p>&copy; {new Date().getFullYear()} A.T. Consulting Parma S.R.L.S. — Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <AreaClienti />
        <Servizi />
        <Pricing />
        <ChiSiamo />
        <Testimonials />
        <PercheSceglierci />
        <Blog />
        <CtaUrgenze />
      </main>
      <Footer />
    </>
  );
}
