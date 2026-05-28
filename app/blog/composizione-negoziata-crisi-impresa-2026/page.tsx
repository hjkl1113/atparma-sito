import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Composizione negoziata 2026: guida crisi impresa | A.T. Parma",
  description:
    "Composizione negoziata della crisi 2026: come funziona, costi, esperto indipendente, misure protettive. Guida CCII aggiornata Correttivo-ter D.Lgs. 136/2024.",
  alternates: {
    canonical: "/blog/composizione-negoziata-crisi-impresa-2026",
  },
  openGraph: {
    title: "Composizione negoziata 2026: guida alla crisi d'impresa",
    description:
      "Composizione negoziata della crisi 2026: come funziona, costi, esperto indipendente, misure protettive. Guida CCII aggiornata Correttivo-ter D.Lgs. 136/2024.",
    type: "article",
    publishedTime: "2026-05-28T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [
      {
        url: "https://www.atparma.com/og?slug=composizione-negoziata-crisi-impresa-2026",
        width: 1200,
        height: 630,
        alt: "Composizione negoziata 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.atparma.com/og?slug=composizione-negoziata-crisi-impresa-2026"],
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
            headline: "Composizione negoziata 2026: guida alla crisi d'impresa",
            description:
              "Composizione negoziata della crisi 2026: come funziona, costi, esperto indipendente, misure protettive. Guida CCII aggiornata Correttivo-ter D.Lgs. 136/2024.",
            image: "https://www.atparma.com/og?slug=composizione-negoziata-crisi-impresa-2026",
            datePublished: "2026-05-28",
            dateModified: "2026-05-28",
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
            mainEntityOfPage: "https://www.atparma.com/blog/composizione-negoziata-crisi-impresa-2026",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Cos'è la composizione negoziata della crisi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "È un percorso volontario, riservato e stragiudiziale introdotto dal Codice della Crisi (D.Lgs. 14/2019) che consente all'imprenditore commerciale o agricolo in difficoltà di trattare con i creditori per risanare l'impresa, con l'assistenza di un esperto indipendente nominato da una commissione presso la Camera di Commercio. Non comporta lo spossessamento: l'imprenditore mantiene la piena gestione ordinaria e straordinaria.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto costa avviare la composizione negoziata?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "I costi principali sono: il compenso dell'esperto (tariffe ministeriali progressive in base al valore dei debiti e alla durata), i costi del consulente che assiste l'impresa nella predisposizione del piano e nella documentazione, eventuali oneri di pubblicità delle misure protettive. Per una PMI con esposizione fino a 2 milioni di euro l'esperto costa indicativamente tra 5.000 e 15.000 euro complessivi; la consulenza tecnica varia secondo la complessità.",
                },
              },
              {
                "@type": "Question",
                name: "Cosa fa l'esperto indipendente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'esperto è un professionista terzo nominato da un'apposita commissione presso la Camera di Commercio, scelto da un elenco unico nazionale. Verifica la veridicità dei dati aziendali, esprime un giudizio motivato sulle prospettive di risanamento, agevola la trattativa coi creditori, redige periodicamente relazioni al tribunale e ai creditori. Non sostituisce l'imprenditore e non assume poteri gestionali: ha un ruolo di facilitatore qualificato.",
                },
              },
              {
                "@type": "Question",
                name: "Cosa sono le misure protettive?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sono provvedimenti che, su richiesta dell'imprenditore confermata dal Tribunale, sospendono le azioni esecutive e cautelari dei creditori sui beni dell'impresa, vietano l'acquisto di titoli di prelazione concorrenti, paralizzano le richieste di fallimento. Durano inizialmente fino a 4 mesi, prorogabili fino a un massimo complessivo di 12 mesi. Sono lo strumento che protegge l'impresa durante la trattativa.",
                },
              },
              {
                "@type": "Question",
                name: "Posso continuare a gestire l'impresa durante la procedura?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. La composizione negoziata è caratterizzata proprio dal mantenimento della piena gestione da parte dell'imprenditore. Le decisioni ordinarie e straordinarie restano in capo agli amministratori. L'esperto deve essere informato delle decisioni rilevanti e può esprimere un dissenso motivato che il Tribunale valuta, ma non c'è spossessamento. Questa è la differenza chiave rispetto al concordato preventivo, dove un commissario giudiziale vigila sulle scelte.",
                },
              },
              {
                "@type": "Question",
                name: "Cosa succede se la composizione negoziata fallisce?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Il fallimento della trattativa non è la fine: il CCII offre uno sbocco strutturato. L'imprenditore può accedere a un concordato semplificato per la liquidazione del patrimonio (art. 25-sexies), che non richiede il voto dei creditori, oppure presentare domanda di concordato preventivo o accordo di ristrutturazione. La composizione negoziata, anche se non si chiude con un accordo, ha quindi un valore preparatorio rispetto alle procedure concorsuali successive.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto dura la composizione negoziata?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'incarico dell'esperto dura inizialmente 180 giorni, prorogabili una sola volta per ulteriori 180 giorni in presenza di trattative in corso (totale massimo 12 mesi). I tempi reali dipendono dalla complessità: per piccole imprese le trattative si chiudono in 3-6 mesi; per realtà più strutturate si arriva ai 12 mesi. Le misure protettive seguono il decorso dell'incarico.",
                },
              },
            ],
          }),
        }}
      />

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Blog
          </Link>

          <time className="text-xs text-zinc-400 block mb-3">28 maggio 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Composizione negoziata 2026: guida alla crisi d&apos;impresa
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/og?slug=composizione-negoziata-crisi-impresa-2026" alt="Composizione negoziata 2026" fill unoptimized className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              La <strong>composizione negoziata della crisi d&apos;impresa</strong> è oggi lo strumento più utilizzato in Italia per affrontare una situazione di squilibrio finanziario senza ricorrere subito alle procedure concorsuali. Introdotta nel 2021 e poi assorbita nel Codice della Crisi d&apos;Impresa e dell&apos;Insolvenza (D.Lgs. 14/2019), aggiornata dal correttivo-ter del 2024 (D.Lgs. 136/2024), permette all&apos;imprenditore di trattare riservatamente coi creditori, con l&apos;assistenza di un esperto indipendente, mantenendo la piena gestione dell&apos;impresa.
            </p>
            <p>
              In questa guida aggiornata al 2026 ricostruiamo cos&apos;è la composizione negoziata, quando attivarla, come funziona il test di accesso, il ruolo dell&apos;esperto, le misure protettive, gli esiti possibili, il confronto col concordato preventivo, i doveri di sindaci e revisori e i costi reali della procedura.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#numeri-2025" className="text-[var(--color-accent)] hover:underline">I numeri Unioncamere 2025</a></li>
                <li><a href="#cosa-e" className="text-[var(--color-accent)] hover:underline">Cos&apos;è la composizione negoziata</a></li>
                <li><a href="#segnali" className="text-[var(--color-accent)] hover:underline">Quando attivarla: i segnali precoci</a></li>
                <li><a href="#test-accesso" className="text-[var(--color-accent)] hover:underline">Test di accesso (art. 12-13)</a></li>
                <li><a href="#esperto" className="text-[var(--color-accent)] hover:underline">L&apos;esperto indipendente</a></li>
                <li><a href="#misure-protettive" className="text-[var(--color-accent)] hover:underline">Misure protettive (art. 18-19)</a></li>
                <li><a href="#esiti" className="text-[var(--color-accent)] hover:underline">Esiti possibili della procedura</a></li>
                <li><a href="#vs-concordato" className="text-[var(--color-accent)] hover:underline">Composizione negoziata vs concordato vs piano</a></li>
                <li><a href="#piano-risanamento" className="text-[var(--color-accent)] hover:underline">Piano di risanamento attestato (art. 56)</a></li>
                <li><a href="#organi-controllo" className="text-[var(--color-accent)] hover:underline">Doveri di sindaci e revisori (art. 25-octies)</a></li>
                <li><a href="#costi-tempi" className="text-[var(--color-accent)] hover:underline">Costi e tempi reali</a></li>
                <li><a href="#faq" className="text-[var(--color-accent)] hover:underline">Domande frequenti</a></li>
                <li><a href="#approfondimenti" className="text-[var(--color-accent)] hover:underline">Approfondimenti correlati</a></li>
              </ul>
            </div>

            {/* Numeri 2025 */}
            <h2 id="numeri-2025" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              I numeri Unioncamere 2025: la composizione negoziata si è consolidata
            </h2>
            <p>
              I dati Unioncamere relativi al 2025 fotografano una crescita decisa dello strumento. Nel corso dell&apos;anno sono state depositate <strong>oltre 3.600 istanze</strong> di composizione negoziata, con un incremento di circa 1.800 unità rispetto al 2024. Più di 2.000 procedure si sono concluse, di cui <strong>423 con esito positivo</strong>, coinvolgendo circa 23.000 dipendenti. Il tasso medio di successo è circa il 20%, salito al <strong>25% nell&apos;ultimo trimestre del 2025</strong>: a tre anni dall&apos;entrata a regime, lo strumento ha trovato la propria operatività.
            </p>
            <p>
              Questi numeri raccontano due cose. Primo: la composizione negoziata funziona meglio man mano che imprese, professionisti e tribunali si abituano alla disciplina. Secondo: il 75-80% delle procedure non si chiude con un accordo, ma anche in caso di esito negativo lo strumento offre uno sbocco strutturato verso il <strong>concordato semplificato</strong> per la liquidazione del patrimonio o verso le procedure concorsuali tradizionali, evitando il fallimento disordinato.
            </p>

            {/* Cosa è */}
            <h2 id="cosa-e" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cos&apos;è la composizione negoziata della crisi
            </h2>
            <p>
              La composizione negoziata è un <strong>percorso volontario, riservato e stragiudiziale</strong>. L&apos;imprenditore commerciale o agricolo che si trova in una situazione di squilibrio patrimoniale o economico-finanziario, ma che ancora non è insolvente in modo irreversibile, può chiedere la nomina di un esperto indipendente che lo affianchi nelle trattative coi creditori per individuare una soluzione di risanamento.
            </p>
            <p>
              <strong>Caratteristica distintiva</strong>: a differenza delle procedure concorsuali tradizionali, la composizione negoziata <strong>non comporta lo spossessamento</strong>. L&apos;imprenditore conserva la gestione ordinaria e straordinaria. Non c&apos;è curatore, non c&apos;è commissario. L&apos;esperto è un facilitatore qualificato, non un organo della procedura.
            </p>
            <p>
              <strong>Riservatezza</strong>: la procedura è strutturalmente riservata. La sua attivazione non è pubblicizzata, salvo che l&apos;imprenditore non chieda al Tribunale le misure protettive (che invece sono iscritte nel registro delle imprese). Questo permette di trattare coi creditori senza generare panico nei fornitori e nei clienti.
            </p>

            {/* Segnali */}
            <h2 id="segnali" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quando attivarla: i segnali precoci di crisi
            </h2>
            <p>
              La composizione negoziata va attivata <strong>prima</strong> che la crisi si conclami. Il CCII impone all&apos;imprenditore di dotarsi di assetti organizzativi, amministrativi e contabili adeguati alla rilevazione tempestiva della crisi (art. 2086 c.c. e art. 3 CCII). I segnali ai quali prestare attenzione sono regolati dall&apos;art. 13 CCII e includono:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Debiti per retribuzioni scaduti da almeno 30 giorni</strong> pari o superiori alla metà delle retribuzioni mensili complessive</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Debiti verso fornitori scaduti da almeno 90 giorni</strong> superiori a quelli non scaduti</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Esposizioni nei confronti delle banche e altri intermediari finanziari scadute da più di 60 giorni</strong> oltre soglie tabellari</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Una o più delle esposizioni debitorie</strong> previste dall&apos;art. 25-novies (debiti IVA, INPS, premi assicurativi, agente della riscossione)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>DSCR a 6 mesi inferiore a 1</strong>: il flusso di cassa atteso non copre il servizio del debito</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Patrimonio netto negativo</strong> o significativamente eroso rispetto al capitale sociale</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Insostenibilità della continuità aziendale</strong> nei dodici mesi successivi</span></li>
            </ul>
            <p>
              Quando uno o più di questi segnali si manifestano in modo non episodico, l&apos;organo amministrativo ha il dovere di attivarsi senza indugio. La composizione negoziata è lo strumento di primo presidio: chi aspetta troppo perde l&apos;accesso allo strumento e si ritrova davanti al concordato preventivo o, peggio, alla liquidazione giudiziale.
            </p>

            {/* Test accesso */}
            <h2 id="test-accesso" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Test di accesso (art. 12-13 CCII + Correttivo-ter)
            </h2>
            <p>
              L&apos;accesso si attiva tramite la piattaforma telematica nazionale presso Unioncamere. L&apos;imprenditore compila il <strong>test pratico di autovalutazione</strong> (allegato 1 al D.M. 28 settembre 2021): è un check-up gratuito che misura la sostenibilità del debito a partire da pochi dati finanziari (DSCR, MOL, debiti finanziari, esposizione a breve). Il test non è vincolante ma serve a verificare in via preliminare se ci sono margini di risanamento.
            </p>
            <p>
              <strong>Esito del test.</strong> Se il risultato è negativo (sostenibilità incerta), la composizione negoziata resta comunque accessibile: la valutazione finale spetta all&apos;esperto, che esprimerà il proprio giudizio sulle prospettive di risanamento solo dopo aver esaminato la documentazione.
            </p>
            <p>
              <strong>Domanda di nomina.</strong> Si presenta tramite la piattaforma con: ultimi tre bilanci, situazione debitoria aggiornata, elenco creditori con relativi importi e scadenze, dichiarazione sostitutiva dell&apos;imprenditore sui requisiti, eventuale piano industriale o di risanamento già abbozzato. La commissione costituita presso la Camera di Commercio nomina l&apos;esperto in un elenco unico nazionale.
            </p>
            <p>
              <strong>Novità Correttivo-ter (D.Lgs. 136/2024).</strong> Il decreto correttivo ter ha ridefinito le condizioni di accesso, ampliato la legittimazione attiva, chiarito il rapporto con le procedure concorsuali, aumentato gli incentivi fiscali per chi accede tempestivamente. Ha inoltre rafforzato gli obblighi informativi dell&apos;esperto verso il Tribunale e razionalizzato la disciplina del concordato semplificato come sbocco.
            </p>

            {/* Esperto */}
            <h2 id="esperto" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              L&apos;esperto indipendente: chi è, come si nomina
            </h2>
            <p>
              L&apos;esperto è il perno operativo dell&apos;intera procedura. È un professionista (commercialista, avvocato, consulente del lavoro) iscritto in un <strong>elenco unico nazionale</strong> tenuto da Unioncamere, che ha superato uno specifico percorso formativo (almeno 55 ore + esame finale) e dimostra esperienza in operazioni di ristrutturazione e risanamento.
            </p>
            <p>
              <strong>Indipendenza.</strong> L&apos;esperto deve essere indipendente dall&apos;impresa istante: non può aver svolto, nei due anni precedenti, attività di consulenza, revisione o sindacato, né intrattenere rapporti professionali con l&apos;impresa o coi soggetti che esercitano controllo sulla stessa.
            </p>
            <p>
              <strong>Compiti operativi.</strong> Sintetizzando, l&apos;esperto:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Verifica la veridicità</strong> dei dati aziendali presentati dall&apos;imprenditore</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Esprime un giudizio motivato</strong> sulle prospettive concrete di risanamento</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Convoca</strong> creditori, soci, organi di controllo, terzi rilevanti per le trattative</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Agevola la trattativa</strong> coi creditori, proponendo soluzioni equilibrate</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Redige relazioni periodiche</strong> al Tribunale e ai creditori sul progresso delle trattative</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Vigila</strong> sul corretto svolgimento dell&apos;attività durante la procedura, esprimendo eventuali dissensi motivati sulle decisioni gestionali rilevanti</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Chiude la procedura</strong> con relazione finale, indicando l&apos;esito (accordo, archiviazione, sbocco alle procedure concorsuali)</span></li>
            </ul>

            {/* Misure protettive */}
            <h2 id="misure-protettive" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Misure protettive (art. 18-19 CCII)
            </h2>
            <p>
              Le misure protettive sono lo scudo che permette all&apos;impresa di trattare senza essere aggredita dai creditori individuali. Sono richieste dall&apos;imprenditore al Tribunale competente, normalmente contestualmente all&apos;accesso alla composizione negoziata o nei giorni immediatamente successivi.
            </p>
            <p>
              <strong>Cosa producono.</strong> Quando concesse, le misure protettive:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Sospendono le azioni esecutive e cautelari individuali</strong> sui beni dell&apos;imprenditore</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Paralizzano le richieste di apertura della liquidazione giudiziale</strong> da parte dei creditori</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Inibiscono ai creditori di acquisire titoli di prelazione</strong> non concordati con l&apos;imprenditore</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Vietano la risoluzione unilaterale dei contratti in essere</strong> per il solo fatto dell&apos;ingresso in composizione negoziata</span></li>
            </ul>
            <p>
              <strong>Durata.</strong> Le misure protettive durano inizialmente <strong>fino a 4 mesi</strong>, prorogabili in presenza di trattative effettive in corso. La durata massima complessiva, somma proroga inclusa, è di <strong>12 mesi</strong>: oltre questo limite il Tribunale non può prorogarle ulteriormente.
            </p>
            <p>
              <strong>Pubblicità.</strong> A differenza della procedura in sé (riservata), le misure protettive vengono iscritte nel registro delle imprese e diventano pubbliche. Questo è il momento in cui mercato e creditori vengono a conoscenza dello stato di crisi: scelta da pesare con l&apos;esperto valutando rischi reputazionali e benefici di protezione.
            </p>

            {/* Esiti */}
            <h2 id="esiti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Esiti possibili della composizione negoziata
            </h2>
            <p>
              La procedura può chiudersi in modi molto diversi. Il CCII prevede una serie strutturata di sbocchi, anche per i casi in cui non si arriva a un accordo pieno coi creditori.
            </p>
            <p>
              <strong>1. Contratto stragiudiziale.</strong> Accordo coi creditori (o con parte di essi) per dilazioni, riduzioni del debito, nuova finanza. Non richiede omologazione del Tribunale e produce effetti solo nei confronti dei creditori aderenti.
            </p>
            <p>
              <strong>2. Convenzione di moratoria (art. 62 CCII).</strong> Accordo che blocca temporaneamente i pagamenti vincolando anche i creditori non aderenti, purché si raggiunga la maggioranza richiesta dalla legge.
            </p>
            <p>
              <strong>3. Accordo di ristrutturazione dei debiti (art. 57 CCII).</strong> Accordo coi creditori che rappresentano almeno il 60% dei crediti, omologato dal Tribunale. È vincolante anche per i creditori non aderenti se ci sono i presupposti dell&apos;art. 61 (estensione efficacia).
            </p>
            <p>
              <strong>4. Concordato semplificato per la liquidazione del patrimonio (art. 25-sexies CCII).</strong> Specifico sbocco della composizione negoziata fallita: se le trattative non hanno prodotto accordo ma l&apos;imprenditore ha agito con correttezza e buona fede, può proporre un concordato che non richiede il voto dei creditori. È una via di uscita ordinata verso la liquidazione, alternativa al fallimento disordinato.
            </p>
            <p>
              <strong>5. Apertura di un concordato preventivo o liquidazione giudiziale.</strong> Se nessuna delle vie precedenti è praticabile, la procedura si chiude e l&apos;impresa accede a una procedura concorsuale tradizionale. La composizione negoziata, anche se non si è chiusa con accordo, ha comunque preparato il terreno e ridotto i tempi successivi.
            </p>

            {/* CTA intermedio */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>Stai osservando segnali di crisi nella tua impresa?</strong> Il test di accesso alla composizione negoziata è gratuito e si compila online sulla piattaforma Unioncamere. Il nostro studio assiste imprenditori e organi di controllo nel preparare la documentazione, valutare la sostenibilità e gestire la fase successiva alla nomina dell&apos;esperto.
              </p>
            </div>

            {/* Vs concordato */}
            <h2 id="vs-concordato" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Composizione negoziata vs concordato preventivo vs piano di risanamento
            </h2>
            <p>
              I tre strumenti hanno funzione, presupposti e conseguenze diverse. Sceglierli correttamente è una decisione strategica che impatta tempi, costi, riservatezza e probabilità di riuscita.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900"></th>
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Composizione negoziata</th>
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Concordato preventivo</th>
                    <th className="text-left py-3 font-semibold text-zinc-900">Piano risanamento attestato</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Natura</td>
                    <td className="py-3 pr-4">Stragiudiziale</td>
                    <td className="py-3 pr-4">Concorsuale</td>
                    <td className="py-3">Stragiudiziale</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Riservatezza</td>
                    <td className="py-3 pr-4">Alta (salvo misure protettive)</td>
                    <td className="py-3 pr-4">Pubblica</td>
                    <td className="py-3">Massima</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Gestione impresa</td>
                    <td className="py-3 pr-4">Mantenuta dall&apos;imprenditore</td>
                    <td className="py-3 pr-4">Vigilata da commissario</td>
                    <td className="py-3">Mantenuta dall&apos;imprenditore</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Voto creditori</td>
                    <td className="py-3 pr-4">Non richiesto</td>
                    <td className="py-3 pr-4">Richiesto (maggioranze legali)</td>
                    <td className="py-3">Non richiesto</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Misure protettive</td>
                    <td className="py-3 pr-4">Su richiesta (4-12 mesi)</td>
                    <td className="py-3 pr-4">Automatiche dal deposito</td>
                    <td className="py-3">Non previste</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Vincolatività</td>
                    <td className="py-3 pr-4">Solo creditori aderenti</td>
                    <td className="py-3 pr-4">Tutti i creditori</td>
                    <td className="py-3">Solo creditori aderenti</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Quando sceglierla</td>
                    <td className="py-3 pr-4">Crisi reversibile, trattativa possibile</td>
                    <td className="py-3 pr-4">Crisi più grave, serve vincolare i creditori</td>
                    <td className="py-3">Crisi reversibile, creditori pochi e collaborativi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-500 italic">
              Schema sintetico. La scelta dello strumento richiede una valutazione tecnica caso per caso: spesso si parte dalla composizione negoziata, che può sfociare in uno degli altri strumenti se necessario.
            </p>

            {/* Piano di risanamento */}
            <h2 id="piano-risanamento" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Piano di risanamento attestato (art. 56 CCII)
            </h2>
            <p>
              Il piano di risanamento attestato è uno strumento parallelo alla composizione negoziata, talvolta integrato in essa, talvolta alternativo. È un piano predisposto dall&apos;imprenditore (o coi suoi consulenti) e <strong>attestato da un professionista indipendente</strong> circa la veridicità dei dati aziendali e la fattibilità del risanamento.
            </p>
            <p>
              <strong>Quando ha senso.</strong> Il piano attestato funziona bene quando i creditori sono numericamente pochi e collaborativi, la crisi non è ancora grave, l&apos;impresa ha bisogno di una garanzia esterna (l&apos;attestazione) per rendere credibile il piano davanti a banche e fornitori. È molto utilizzato per ottenere nuova finanza con tutela di esenzione da revocatoria.
            </p>
            <p>
              <strong>Effetti pratici.</strong> Gli atti, i pagamenti e le garanzie eseguiti in esecuzione del piano attestato non sono soggetti a revocatoria fallimentare in caso di successiva liquidazione giudiziale. Questa protezione è il vero valore dello strumento: permette alle banche di erogare nuova finanza senza rischio di vedersi revocare l&apos;operazione.
            </p>

            {/* Organi controllo */}
            <h2 id="organi-controllo" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Doveri di sindaci e revisori (art. 25-octies CCII)
            </h2>
            <p>
              Una delle novità di sistema più importanti del CCII riguarda gli organi di controllo. Il sindaco unico, il collegio sindacale e il revisore legale hanno oggi precisi <strong>doveri di segnalazione</strong> della crisi all&apos;organo amministrativo.
            </p>
            <p>
              <strong>Obblighi.</strong> Quando rilevano indicatori di crisi o squilibrio finanziario, devono:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Segnalare per iscritto</strong> all&apos;organo amministrativo l&apos;esistenza di segnali di crisi, indicando le ragioni</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Fissare un termine</strong> entro cui l&apos;organo amministrativo deve riferire sulle iniziative intraprese</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Vigilare</strong> sull&apos;adeguatezza delle iniziative adottate</span></li>
            </ul>
            <p>
              <strong>Responsabilità.</strong> La segnalazione tempestiva costituisce <strong>causa di esonero o riduzione della responsabilità</strong> degli organi di controllo per i danni derivanti dalla crisi non gestita. Al contrario, l&apos;omessa segnalazione esporrà sindaci e revisori a responsabilità civile, e in alcuni casi penale, verso la società, i soci, i creditori sociali.
            </p>
            <p>
              Per chi siede in un collegio sindacale o svolge revisione legale è quindi cruciale sapere riconoscere gli indici dell&apos;art. 13 e documentare per iscritto le segnalazioni effettuate. È un cambio di mentalità rispetto al ruolo storico del sindaco di mero controllo formale.
            </p>

            {/* Costi e tempi */}
            <h2 id="costi-tempi" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Costi e tempi reali della composizione negoziata
            </h2>
            <p>
              <strong>Costi.</strong> Le voci principali sono:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Compenso dell&apos;esperto</strong>: regolato da tariffe ministeriali progressive in base al valore dei debiti. Per una PMI con esposizione fino a 2 milioni di euro l&apos;esperto può costare 5.000-15.000 euro complessivi sulla durata dell&apos;incarico</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Consulenza tecnica all&apos;imprenditore</strong>: il commercialista o lo studio che predispone la documentazione, segue le trattative, redige il piano. Variabile in base alla complessità: in genere 8.000-30.000 euro</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Eventuale attestatore</strong> (per piano di risanamento o ARD): 3.000-10.000 euro</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Spese di pubblicità</strong> e oneri amministrativi: poche centinaia di euro</span></li>
            </ul>
            <p>
              Il totale, per una PMI tipica, si colloca tra 15.000 e 60.000 euro. Cifre rilevanti, ma vanno confrontate col costo molto superiore (in tempo, valore d&apos;avviamento, posti di lavoro) di una procedura concorsuale piena gestita troppo tardi.
            </p>
            <p>
              <strong>Tempi.</strong> Indicativamente:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Settimane 1-2</strong>: preparazione documentazione, test pratico, deposito istanza sulla piattaforma Unioncamere</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Settimane 2-4</strong>: nomina dell&apos;esperto da parte della commissione</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Settimane 4-8</strong>: insediamento dell&apos;esperto, verifica dati, eventuale richiesta di misure protettive al Tribunale</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Settimane 8-26</strong>: trattative coi creditori, definizione del piano, proposta agli stakeholders</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Settimane 26-52</strong>: eventuale proroga, finalizzazione degli accordi, omologazione (se ARD) o conclusione del percorso</span></li>
            </ul>

            {/* FAQ */}
            <h2 id="faq" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Domande frequenti
            </h2>
            <p className="font-semibold text-zinc-900 mt-6">Cos&apos;è la composizione negoziata della crisi?</p>
            <p>
              È un percorso volontario, riservato e stragiudiziale che consente all&apos;imprenditore commerciale o agricolo in difficoltà di trattare con i creditori per risanare l&apos;impresa, con l&apos;assistenza di un esperto indipendente nominato da una commissione presso la Camera di Commercio. Non comporta lo spossessamento: l&apos;imprenditore mantiene la piena gestione ordinaria e straordinaria.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Quanto costa avviare la composizione negoziata?</p>
            <p>
              I costi principali sono: compenso dell&apos;esperto (tariffe ministeriali progressive), consulenza tecnica all&apos;impresa, eventuali oneri di pubblicità. Per una PMI con esposizione fino a 2 milioni di euro l&apos;esperto costa indicativamente 5.000-15.000 euro; la consulenza tecnica varia secondo la complessità. Totale realistico: 15.000-60.000 euro.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Cosa fa l&apos;esperto indipendente?</p>
            <p>
              Verifica la veridicità dei dati aziendali, esprime un giudizio motivato sulle prospettive di risanamento, agevola la trattativa coi creditori, redige relazioni periodiche al tribunale e ai creditori. Non sostituisce l&apos;imprenditore e non assume poteri gestionali: ha un ruolo di facilitatore qualificato.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Cosa sono le misure protettive?</p>
            <p>
              Sono provvedimenti che sospendono le azioni esecutive e cautelari dei creditori sui beni dell&apos;impresa, vietano l&apos;acquisto di titoli di prelazione concorrenti, paralizzano le richieste di liquidazione giudiziale. Durano fino a 4 mesi, prorogabili fino a un massimo complessivo di 12 mesi.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Posso continuare a gestire l&apos;impresa durante la procedura?</p>
            <p>
              Sì. È la differenza chiave rispetto al concordato preventivo. Le decisioni ordinarie e straordinarie restano in capo agli amministratori. L&apos;esperto deve essere informato delle decisioni rilevanti e può esprimere un dissenso motivato, ma non c&apos;è spossessamento.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Cosa succede se la composizione negoziata fallisce?</p>
            <p>
              Il fallimento della trattativa non è la fine: il CCII offre uno sbocco strutturato. L&apos;imprenditore può accedere a un concordato semplificato per la liquidazione del patrimonio (art. 25-sexies), oppure presentare domanda di concordato preventivo o accordo di ristrutturazione. La composizione negoziata ha quindi un valore preparatorio rispetto alle procedure concorsuali successive.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Quanto dura la composizione negoziata?</p>
            <p>
              L&apos;incarico dell&apos;esperto dura inizialmente 180 giorni, prorogabili una sola volta per ulteriori 180 giorni in presenza di trattative in corso (totale massimo 12 mesi). I tempi reali: per piccole imprese le trattative si chiudono in 3-6 mesi; per realtà più strutturate si arriva ai 12 mesi.
            </p>

            {/* Approfondimenti */}
            <h2 id="approfondimenti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <p>
              Se sei un professionista individuale, un consumatore o un imprenditore minore, lo strumento adatto non è la composizione negoziata ma il <strong>sovraindebitamento</strong>. Abbiamo una guida specifica:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/sovraindebitamento-2026-come-uscire-dai-debiti" className="text-[var(--color-accent)] hover:underline">Sovraindebitamento 2026: come uscire dai debiti</Link> &mdash; procedure CCII per persone fisiche, professionisti, imprenditori minori</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/crisi-di-impresa" className="text-[var(--color-accent)] hover:underline">Servizio crisi d&apos;impresa</Link> &mdash; la pagina dello studio dedicata alle procedure concorsuali, alle attestazioni per il Tribunale, all&apos;assistenza degli organi di controllo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/consulenza-finanziaria" className="text-[var(--color-accent)] hover:underline">Consulenza finanziaria</Link> &mdash; business plan, piani di risanamento, accesso al credito e ristrutturazione del debito</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/contatti" className="text-[var(--color-accent)] hover:underline">Contattaci</Link> &mdash; valutazione preliminare per imprenditori, organi di controllo, professionisti</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi un check di sostenibilità per la tua impresa?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Il nostro studio assiste imprenditori, PMI e organi di controllo nella valutazione dei segnali di crisi, nella predisposizione della documentazione per la composizione negoziata e nella gestione della fase successiva. Prima consulenza tecnica per definire il quadro e capire se la composizione negoziata è la via giusta.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contatti?ref=blog-crisi-impresa" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                  Richiedi una valutazione
                </Link>
                <a href="tel:+390521247721" className="inline-block px-6 py-3 border border-zinc-200 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium">
                  Chiama: 0521 247721
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
