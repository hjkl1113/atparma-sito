import Image from "next/image";
import Link from "next/link";
import { Pricing } from "./pricing";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { articoli } from "@/lib/articoli";
import { getAllMacroSezioni } from "@/app/servizi/_data/macro-sezioni";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/parma-duomo-aerial.jpg"
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
          Il fisco è online. Lo studio pure.
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Dottori commercialisti iscritti all&apos;albo. Dichiarazioni, Partita
          IVA e consulenze su misura — dal portale clienti, senza code e senza
          carta, con risposta entro 24 ore.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#servizi-online"
            className="px-8 py-4 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-base"
          >
            Vedi i servizi online
          </a>
          <a
            href="/contatti"
            className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors text-base"
          >
            Prenota consulenza
          </a>
          <a
            href="https://clienti.atparma.com"
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
          Il mondo è passato online: riunioni, banca, firma. Anche il fisco
          merita di esserlo — digitale, veloce, tracciabile. Dal 2005 seguiamo
          oltre 200 aziende in tutta Italia, tra dichiarazioni, Partita IVA,
          gestione continuativa e — quando serve — crisi d&apos;impresa, M&amp;A
          e finanza agevolata.
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
              href="https://clienti.atparma.com"
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

const servizi = getAllMacroSezioni();

function Servizi() {
  return (
    <section id="servizi" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
          Servizi online per area
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16 font-[family-name:var(--font-heading)]">
          Parti dal percorso giusto
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servizi.map((s) => (
            <Link
              key={s.slug}
              href={`/servizi/${s.slug}`}
              className="group block p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-heading)]">
                {s.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed text-sm mb-5">{s.shortDescription}</p>
              <span className="text-xs text-[var(--color-accent)] font-medium inline-flex items-center gap-1">
                Apri area <span aria-hidden>&rarr;</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/servizi#consulenze-specialistiche"
            className="text-sm text-zinc-500 hover:text-zinc-900 underline underline-offset-4 transition-colors"
          >
            Per crisi d&apos;impresa, finanza agevolata e incarichi complessi vedi le consulenze specialistiche
          </Link>
        </div>
      </div>
    </section>
  );
}

// Pricing component imported from ./pricing.tsx (client component for Stripe checkout)

function CalcolatoreBanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] p-8 sm:p-12 text-white shadow-lg">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-white/70 font-medium mb-3">
                Strumento gratuito
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
                Forfettario o ordinario? Scoprilo in 2 minuti.
              </h2>
              <p className="text-white/90 leading-relaxed mb-6 text-sm sm:text-base">
                Simulatore gratuito che confronta i due regimi sulla tua attività:
                calcola tasse reali, contributi INPS o cassa privata, e ti dice
                quale ti fa risparmiare di più. Basato su aliquote 2026.
              </p>
              <Link
                href="/calcolatori/forfettario"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-lg font-semibold text-sm hover:bg-zinc-100 transition-colors"
              >
                Apri il simulatore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="hidden md:flex justify-center">
              <svg className="w-40 h-40 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m-6 4h6m-6 4h4m-9 5h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
              supporto a imprese e professionisti. Il nostro team è composto da
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
    title: "Studio senza carta",
    desc: "Tutto sul portale: documenti, firme, scadenze e pagamenti",
  },
  {
    title: "Oltre 20 anni di esperienza",
    desc: "Dal 2005 al servizio di imprese e professionisti in tutta Italia",
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
          Perché sceglierci
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
          {articoli.map((a) => (
            <article
              key={a.slug}
              className="bg-white rounded-2xl overflow-hidden border border-zinc-100 group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={a.immagine}
                  alt={a.titolo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold leading-snug font-[family-name:var(--font-heading)]">
                  {a.titolo}
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
        src="/images/parma-duomo-aerial.jpg"
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
          Il nostro team è disponibile per rispondere entro 24 ore da lunedì a
          venerdì.
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

export default function Home() {
  return (
    <>
      <SiteHeader current="home" />
      <main>
        <Hero />
        <Intro />
        <AreaClienti />
        <Servizi />
        <CalcolatoreBanner />
        <Pricing />
        <ChiSiamo />
        <PercheSceglierci />
        <Blog />
        <CtaUrgenze />
      </main>
      <SiteFooter />
    </>
  );
}
