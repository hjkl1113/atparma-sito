import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { Pricing } from "./pricing";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { articoli } from "@/lib/articoli";
import { news, CATEGORIE_LABEL } from "@/lib/news";
import { ScadenzaCallout } from "@/components/scadenza-callout";
import { STUDIO } from "@/lib/studio-data";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/lib/icons";
import { getAllMacroSezioni, CONSULENZE_SPECIALISTICHE } from "@/app/servizi/_data/macro-sezioni";

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
              src="/images/studio/sede-cortile-vaso.jpg"
              alt="Cortile interno dello studio A.T. Consulting Parma"
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
    <section id="servizi-online" className="scroll-mt-24 py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
          Servizi online · prezzo trasparente
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4 font-[family-name:var(--font-heading)]">
          Acquista online, in autonomia
        </h2>
        <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          730, Partita IVA e gestione annuale: scegli il percorso, vedi il prezzo
          IVA inclusa e attivi tutto dal portale. Senza preventivo, senza attese.
        </p>
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
                Vedi prezzi e acquista <span aria-hidden>&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsulenzaSpecialistica() {
  return (
    <section
      id="consulenza-specialistica"
      className="scroll-mt-24 py-24 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-white/50 font-medium mb-3">
            Consulenza specialistica
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Quando il caso non sta in una scheda
          </h2>
          <p className="text-white/70 leading-relaxed">
            Crisi d&apos;impresa, operazioni straordinarie, finanza e incarichi
            complessi. Qui non c&apos;è un carrello: ogni mandato parte da una
            valutazione riservata, costruita sul caso specifico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CONSULENZE_SPECIALISTICHE.map((item) => (
            <Link
              key={item.slug}
              href={`/servizi/${item.slug}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-heading)]">
                {item.title}
              </h3>
              <p className="text-white/65 leading-relaxed text-sm flex-1 mb-6">{item.desc}</p>
              <span className="text-sm font-medium text-white inline-flex items-center gap-2">
                Richiedi una valutazione
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link
            href="/contatti?ref=consulenza-specialistica"
            className="inline-block px-7 py-3.5 bg-white text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-100 transition-colors"
          >
            Prenota una valutazione riservata
          </Link>
          <p className="text-white/50 text-sm">
            Risposta entro 24 ore lavorative · Riservatezza garantita
          </p>
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
              src="/images/studio/sede-facciata-rose.jpg"
              alt="Sede dello studio in Borgo Riccio da Parma 5"
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

function PresenzaPubblica() {
  const socialLinks = [
    STUDIO.social.facebook ? { href: STUDIO.social.facebook, label: "Facebook", Icon: FacebookIcon } : null,
    STUDIO.social.instagram ? { href: STUDIO.social.instagram, label: "Instagram", Icon: InstagramIcon } : null,
    STUDIO.social.linkedin ? { href: STUDIO.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon } : null,
  ].filter((item): item is NonNullable<typeof item> => item !== null);

  const gallery = [
    { src: "/images/studio/sede-facciata-rose.jpg", alt: "Cortile interno dello studio con arco di rose", caption: "Il cortile interno", note: "Borgo Riccio da Parma 5" },
    { src: "/images/studio/sede-archi-cortile.jpg", alt: "Porticato ad archi del palazzo storico", caption: "Il porticato storico", note: "Palazzo del centro storico di Parma" },
    { src: "/images/studio/sede-rose-rampicanti.jpg", alt: "Giardino interno con siepi geometriche e rose rampicanti", caption: "Il giardino", note: "Cura del dettaglio" },
  ] as const;

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              La nostra sede
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              Lo studio ha sede in Borgo Riccio da Parma 5
            </h2>
          </div>
          <p className="text-zinc-600 leading-relaxed max-w-2xl">
            Un palazzo storico nel centro di Parma, con cortile interno e porticato. Ti accogliamo qui per gli incontri in presenza, mentre il portale clienti permette di seguire pratiche e documenti da remoto in tutta sicurezza.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <figure key={item.src} className="bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
              <div className="relative h-64">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
              <figcaption className="px-5 py-4">
                <p className="text-sm font-semibold text-zinc-900">{item.caption}</p>
                <p className="text-xs text-zinc-500 mt-1">{item.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {socialLinks.length > 0 ? (
            socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:text-zinc-900 transition-colors"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))
          ) : (
            <p className="text-sm text-zinc-500">
              I link social pubblici possono essere agganciati appena mi dai gli URL ufficiali.
            </p>
          )}
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

function AggiornamentiHome() {
  const mesi = [
    "gen", "feb", "mar", "apr", "mag", "giu",
    "lug", "ago", "set", "ott", "nov", "dic",
  ];
  const fmt = (iso: string) => {
    const [, m, d] = iso.split("-");
    return `${parseInt(d, 10)} ${mesi[parseInt(m, 10) - 1] ?? m}`;
  };
  const ultime = news.slice(0, 3);

  return (
    <section className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-2">
              Sempre aggiornati
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              Aggiornamenti e scadenze fiscali
            </h2>
          </div>
          <Link
            href="/aggiornamenti-fiscali"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline whitespace-nowrap"
          >
            Vedi tutti &rarr;
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ScadenzaCallout />

          {ultime.map((n) => (
            <Link
              key={n.slug}
              href={`/aggiornamenti-fiscali/${n.slug}`}
              className="group flex flex-col justify-between h-full p-6 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-xs">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-medium">
                    {CATEGORIE_LABEL[n.categoria]}
                  </span>
                  <time dateTime={n.data} className="text-zinc-400">
                    {fmt(n.data)}
                  </time>
                </div>
                <h3 className="text-base font-semibold tracking-tight leading-snug group-hover:text-[var(--color-accent)] transition-colors font-[family-name:var(--font-heading)]">
                  {n.titolo}
                </h3>
              </div>
              <span className="mt-4 text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors">
                Leggi &rarr;
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/aggiornamenti-fiscali"
          className="sm:hidden mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]"
        >
          Vedi tutti gli aggiornamenti &rarr;
        </Link>
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
                  unoptimized
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
        <AggiornamentiHome />
        <AreaClienti />
        <Servizi />
        <ConsulenzaSpecialistica />
        <CalcolatoreBanner />
        <Pricing />
        <ChiSiamo />
        <PresenzaPubblica />
        <PercheSceglierci />
        <Blog />
        <CtaUrgenze />
      </main>
      <SiteFooter />
    </>
  );
}
