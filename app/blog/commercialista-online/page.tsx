import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Commercialista online: come sceglierlo e perché conviene | A.T. Consulting Parma",
  description: "Guida alla scelta del commercialista online: vantaggi, cosa verificare, differenze con lo studio tradizionale e quando conviene davvero.",
  alternates: {
    canonical: "/blog/commercialista-online",
  },
  openGraph: {
    title: "Commercialista online: come sceglierlo e perché conviene",
    description: "Guida alla scelta del commercialista online: vantaggi, cosa verificare, differenze con lo studio tradizionale e quando conviene davvero.",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [{ url: "/images/generated-1775311824086.png", width: 1200, height: 630, alt: "Studio commercialista online" }],
  },
};

export default function ArticoloPage() {
  return (
    <>
      <SiteHeader current="blog" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Commercialista online: come sceglierlo e perché conviene",
            description: "Guida alla scelta del commercialista online: vantaggi, cosa verificare, differenze con lo studio tradizionale e quando conviene davvero.",
            image: "https://www.atparma.com/images/generated-1775311824086.png",
            datePublished: "2026-04-01",
            dateModified: "2026-04-01",
            author: {
              "@type": "Organization",
              name: "A.T. Consulting Parma",
              url: "https://www.atparma.com",
            },
            publisher: {
              "@type": "Organization",
              name: "A.T. Consulting Parma",
              url: "https://www.atparma.com",
              logo: { "@type": "ImageObject", url: "https://www.atparma.com/images/parma-duomo-aerial.jpg" },
            },
            mainEntityOfPage: "https://www.atparma.com/blog/commercialista-online",
          }),
        }}
      />

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Blog
          </Link>

          <time className="text-xs text-zinc-400 block mb-3">1 aprile 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Commercialista online: come sceglierlo e perché conviene
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/images/generated-1775311824086.png" alt="Studio commercialista online" fill className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Sempre più italiani cercano un <strong>commercialista online</strong>: un professionista che offre gli stessi servizi di uno studio tradizionale — dichiarazioni dei redditi, consulenza fiscale, apertura Partita IVA, contabilità — ma con la comodità di gestire tutto da remoto, senza spostamenti e senza code.
            </p>
            <p>
              Ma come si sceglie un buon commercialista online? Quali sono i vantaggi reali rispetto allo studio sotto casa? E quando conviene davvero? In questa guida rispondiamo a tutte le domande, con un confronto onesto tra i due modelli e una checklist per non sbagliare.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#cosa-fa" className="text-[var(--color-accent)] hover:underline">Cosa fa un commercialista online</a></li>
                <li><a href="#vantaggi" className="text-[var(--color-accent)] hover:underline">I 7 vantaggi rispetto allo studio tradizionale</a></li>
                <li><a href="#confronto" className="text-[var(--color-accent)] hover:underline">Online vs tradizionale: il confronto</a></li>
                <li><a href="#cosa-verificare" className="text-[var(--color-accent)] hover:underline">Cosa verificare prima di scegliere</a></li>
                <li><a href="#red-flags" className="text-[var(--color-accent)] hover:underline">Red flags: quando diffidare</a></li>
                <li><a href="#servizi" className="text-[var(--color-accent)] hover:underline">Quali servizi puoi gestire online</a></li>
                <li><a href="#quando-conviene" className="text-[var(--color-accent)] hover:underline">Quando conviene (e quando no)</a></li>
                <li><a href="#costi" className="text-[var(--color-accent)] hover:underline">Quanto costa un commercialista online</a></li>
                <li><a href="#come-funziona" className="text-[var(--color-accent)] hover:underline">Come funziona con A.T. Consulting Parma</a></li>
              </ul>
            </div>

            {/* Cosa fa */}
            <h2 id="cosa-fa" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa fa un commercialista online
            </h2>
            <p>
              Un <strong>commercialista online</strong> e un dottore commercialista regolarmente iscritto all&apos;Albo professionale che ha scelto di erogare i propri servizi prevalentemente in modalità digitale. Non e un software, non e un chatbot, non e un&apos;app — e un professionista con le stesse competenze, responsabilità e obblighi deontologici di un commercialista tradizionale.
            </p>
            <p>
              La differenza sta nel <strong>modello di lavoro</strong>: invece di riceverti in studio, il commercialista online comunica via email, videochiamate e portali dedicati. I documenti vengono scambiati in formato digitale, le firme sono elettroniche e le consulenze avvengono in videoconferenza.
            </p>
            <p>
              I servizi offerti sono identici:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Dichiarazioni dei redditi (730, Redditi PF, SC, SP)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Apertura e gestione Partita IVA</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Contabilità ordinaria e semplificata</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Consulenza fiscale e pianificazione tributaria</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Bilanci, dichiarazioni IVA, F24</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Consulenza societaria e operazioni straordinarie</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Assistenza in verifiche fiscali e contenziosi</span></li>
            </ul>

            {/* Vantaggi */}
            <h2 id="vantaggi" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              I 7 vantaggi del commercialista online rispetto allo studio tradizionale
            </h2>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">1.</span> <span><strong>Accessibilità totale:</strong> puoi comunicare con il tuo commercialista da qualsiasi luogo e in qualsiasi momento. Niente spostamenti, niente parcheggio, niente sale d&apos;attesa.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">2.</span> <span><strong>Velocità nella gestione documenti:</strong> i documenti vengono caricati su un portale sicuro e lavorati immediatamente, senza passaggi cartacei che rallentano tutto.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">3.</span> <span><strong>Trasparenza in tempo reale:</strong> tramite il portale clienti puoi monitorare lo stato delle tue pratiche, le scadenze e i documenti in qualsiasi momento.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">4.</span> <span><strong>Costi più competitivi:</strong> senza i costi fissi di uno studio fisico di rappresentanza, il commercialista online può offrire tariffe inferiori a parita di servizio.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">5.</span> <span><strong>Nessun vincolo geografico:</strong> puoi scegliere il professionista migliore per le tue esigenze, non quello più vicino a casa. Un commercialista a Parma può seguire un freelance a Milano o un&apos;impresa a Napoli.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">6.</span> <span><strong>Archiviazione digitale sicura:</strong> tutti i documenti sono conservati in formato digitale, con backup e crittografia. Niente rischio di smarrimento o deterioramento.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">7.</span> <span><strong>Tempi di risposta tracciabili:</strong> le comunicazioni digitali lasciano una traccia. Se il professionista garantisce risposta entro 24 ore, puoi verificarlo.</span></li>
            </ul>

            {/* Confronto */}
            <h2 id="confronto" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Online vs tradizionale: il confronto onesto
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900"></th>
                    <th className="text-left py-3 px-4 font-semibold text-zinc-900">Online</th>
                    <th className="text-left py-3 pl-4 font-semibold text-zinc-900">Tradizionale</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Incontri</td>
                    <td className="py-3 px-4">Videochiamate, email, portale</td>
                    <td className="py-3 pl-4">In studio, su appuntamento</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Documenti</td>
                    <td className="py-3 px-4">Upload digitale, firma elettronica</td>
                    <td className="py-3 pl-4">Consegna fisica o scan</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Costi medi</td>
                    <td className="py-3 px-4">Generalmente inferiori</td>
                    <td className="py-3 pl-4">Generalmente superiori</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Reperibilità</td>
                    <td className="py-3 px-4">Email/portale sempre accessibile</td>
                    <td className="py-3 pl-4">Orario di studio</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Rapporto personale</td>
                    <td className="py-3 px-4">Videochiamate quando serve</td>
                    <td className="py-3 pl-4">Faccia a faccia</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Qualifica</td>
                    <td className="py-3 px-4">Identica (Albo ODCEC)</td>
                    <td className="py-3 pl-4">Identica (Albo ODCEC)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cosa verificare */}
            <h2 id="cosa-verificare" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa verificare prima di scegliere un commercialista online
            </h2>
            <p>
              Non tutti i servizi online sono equivalenti. Ecco una checklist di elementi da verificare prima di affidare la tua fiscalita a un professionista:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">1.</span> <span><strong>Iscrizione all&apos;Albo ODCEC</strong> — Verifica che il professionista sia iscritto all&apos;Ordine dei Dottori Commercialisti e degli Esperti Contabili. Puoi controllare sul sito del Consiglio Nazionale.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">2.</span> <span><strong>Struttura reale</strong> — Un buon commercialista online ha una sede fisica, un numero di telefono, una PEC e una partita IVA verificabile. Diffida di chi ha solo un form di contatto.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">3.</span> <span><strong>Portale clienti dedicato</strong> — Un sistema sicuro per caricare documenti, monitorare le pratiche e comunicare con il professionista. Senza un portale, la gestione diventa caotica.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">4.</span> <span><strong>Tempi di risposta garantiti</strong> — Chiedi esplicitamente in quanto tempo rispondono. Un buon standard e 24 ore lavorative.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">5.</span> <span><strong>Possibilità di parlare con un professionista</strong> — Non solo con un operatore di call center. Devi poter fare domande al commercialista che segue la tua pratica.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">6.</span> <span><strong>Trasparenza sui costi</strong> — I prezzi devono essere chiari prima di iniziare. Niente sorprese in fattura.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">7.</span> <span><strong>Recensioni verificabili</strong> — Cerca opinioni su Google, Trustpilot o direttamente sul sito. Recensioni generiche o anonime non contano.</span></li>
            </ul>

            {/* Red flags */}
            <h2 id="red-flags" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Red flags: quando diffidare di un commercialista online
            </h2>
            <p>
              La facilità di aprire un sito web ha portato anche operatori poco seri nel mercato della consulenza fiscale online. Ecco i segnali d&apos;allarme:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Prezzi troppo bassi</strong> — Un 730 a 19 euro o una Partita IVA a 29 euro spesso nasconde servizi automatizzati senza revisione umana o costi nascosti.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Nessun professionista identificabile</strong> — Se sul sito non c&apos;e il nome di nessun commercialista iscritto all&apos;Albo, probabilmente non ce n&apos;e nessuno.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Solo chatbot e ticket</strong> — Se non puoi mai parlare con una persona, in caso di problemi (accertamento, urgenza) sarai solo.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Promesse di &quot;zero tasse&quot;</strong> — Nessun professionista serio promette di azzerare le imposte. L&apos;ottimizzazione fiscale e legale; l&apos;evasione no.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Nessuna assicurazione professionale</strong> — Tutti i commercialisti sono obbligati ad avere una polizza RC professionale. Se non ce l&apos;ha, non e un vero commercialista.</span></li>
            </ul>

            {/* Servizi */}
            <h2 id="servizi" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quali servizi puoi gestire interamente online
            </h2>
            <p>
              Oggi la quasi totalità dei servizi fiscali può essere gestita da remoto:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Dichiarazione 730</strong> — Il servizio più richiesto online. Carichi i documenti, il commercialista verifica e invia.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Apertura Partita IVA</strong> — Analisi, scelta regime, invio telematico, iscrizione INPS. Tutto da remoto.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Contabilità e adempimenti periodici</strong> — Fatture, registri IVA, liquidazioni, F24. Il portale clienti rende tutto fluido.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Consulenza fiscale</strong> — Videochiamate per discutere strategie, pianificazione, dubbi operativi.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Bilanci e dichiarazioni societarie</strong> — Anche le società di capitali possono essere seguite interamente online.</span></li>
            </ul>
            <p className="mt-4">
              L&apos;unica eccezione significativa e la <strong>presenza fisica in Tribunale</strong> (per procedure concorsuali o contenziosi che richiedono udienza), ma anche in questo caso il commercialista online si occupa di tutta la preparazione documentale da remoto.
            </p>

            {/* Quando conviene */}
            <h2 id="quando-conviene" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quando conviene il commercialista online (e quando no)
            </h2>
            <p>
              Il commercialista online e la scelta ideale se:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Sei un <strong>freelance o professionista</strong> che lavora da remoto</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Hai una <strong>piccola impresa o ditta individuale</strong> con esigenze fiscali standard</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Sei un <strong>lavoratore dipendente</strong> che deve presentare il 730</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Vuoi un <strong>servizio più economico</strong> a parita di qualità</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Preferisci <strong>gestire tutto digitalmente</strong> senza appuntamenti in studio</span></li>
            </ul>
            <p className="mt-4">
              Potrebbe non essere sufficiente come unica modalità se hai bisogno di <strong>consulenze strategiche molto frequenti</strong> (es. ristrutturazioni aziendali complesse) dove il rapporto faccia a faccia e determinante. Ma anche in questo caso, molti studi online — come il nostro — offrono la possibilità di incontri in presenza quando necessario.
            </p>

            {/* Costi */}
            <h2 id="costi" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quanto costa un commercialista online nel 2026
            </h2>
            <p>
              I costi variano in base alla complessità del servizio. Ecco una stima per i servizi più richiesti:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Servizio</th>
                    <th className="text-left py-3 pl-4 font-semibold text-zinc-900">Costo indicativo</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4">Dichiarazione 730</td>
                    <td className="py-3 pl-4">Da 79 euro</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4">Apertura Partita IVA + consulenza</td>
                    <td className="py-3 pl-4">Da 149 euro</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4">Gestione annuale forfettario</td>
                    <td className="py-3 pl-4">Da 500 euro/anno</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4">Gestione annuale ordinario/semplificato</td>
                    <td className="py-3 pl-4">Da 800 euro/anno</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Consulenza specifica (una tantum)</td>
                    <td className="py-3 pl-4">Da 100 euro</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Questi costi sono indicativi e possono variare in base alla complessità della situazione. Il consiglio e sempre chiedere un preventivo dettagliato prima di iniziare.
            </p>

            {/* Come funziona */}
            <h2 id="come-funziona" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Come funziona con A.T. Consulting Parma
            </h2>
            <p>
              A.T. Consulting Parma unisce la solidità di uno <strong>studio radicato sul territorio da oltre 20 anni</strong> alla comodità dei servizi digitali. Ecco come lavoriamo:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Professionisti iscritti all&apos;Albo</strong> — Il tuo interlocutore e sempre un dottore commercialista, non un operatore</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Portale clienti dedicato</strong> — Upload documenti, monitoraggio pratiche, comunicazioni sicure</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Risposta entro 24 ore</strong> — Per tutte le richieste, da lunedì a venerdì</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Sede fisica a Parma</strong> — Per chi preferisce un incontro di persona, siamo in Borgo Riccio da Parma 5</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Servizio nazionale</strong> — Seguiamo clienti in tutta Italia, da Parma a Milano, Roma, Napoli e oltre</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Prezzi trasparenti</strong> — Acquisti direttamente dal sito, senza sorprese</span></li>
            </ul>

            {/* Link interni */}
            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/come-fare-730-online" className="text-[var(--color-accent)] hover:underline">Come fare il 730 online: guida completa 2026</Link> — il nostro servizio più richiesto</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/aprire-partita-iva-online" className="text-[var(--color-accent)] hover:underline">Come aprire la Partita IVA online nel 2026</Link> — guida completa con costi e procedure</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi" className="text-[var(--color-accent)] hover:underline">Tutti i nostri servizi</Link> — consulenza fiscale, crisi di impresa e consulenza finanziaria</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/faq" className="text-[var(--color-accent)] hover:underline">Domande frequenti</Link> — risposte rapide su costi, tempi e funzionamento</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Cerchi un commercialista online a Parma?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                A.T. Consulting Parma: lo studio con 20 anni di esperienza, la comodità di un servizio completamente online. 730 da 79 euro, Partita IVA da 149 euro.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contatti" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                  Richiedi una consulenza
                </Link>
                <a href="tel:+390521247721" className="inline-block px-6 py-3 border border-zinc-200 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium">
                  Chiama: 0521 247721
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
