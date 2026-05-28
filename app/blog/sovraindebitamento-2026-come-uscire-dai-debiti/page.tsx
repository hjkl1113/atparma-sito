import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Sovraindebitamento 2026: come uscire dai debiti | A.T. Parma",
  description:
    "Sovraindebitamento 2026: chi può accedere, esdebitazione incapiente (art. 283 CCII), procedure OCC. Guida aggiornata legge 3/2012 + Correttivo-ter.",
  alternates: {
    canonical: "/blog/sovraindebitamento-2026-come-uscire-dai-debiti",
  },
  openGraph: {
    title: "Sovraindebitamento 2026: come uscire dai debiti",
    description:
      "Sovraindebitamento 2026: chi può accedere, esdebitazione incapiente (art. 283 CCII), procedure OCC. Guida aggiornata legge 3/2012 + Correttivo-ter.",
    type: "article",
    publishedTime: "2026-05-28T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [
      {
        url: "https://www.atparma.com/og?slug=sovraindebitamento-2026-come-uscire-dai-debiti",
        width: 1200,
        height: 630,
        alt: "Sovraindebitamento 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.atparma.com/og?slug=sovraindebitamento-2026-come-uscire-dai-debiti"],
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
            headline: "Sovraindebitamento 2026: come uscire dai debiti",
            description:
              "Sovraindebitamento 2026: chi può accedere, esdebitazione incapiente (art. 283 CCII), procedure OCC. Guida aggiornata legge 3/2012 + Correttivo-ter.",
            image: "https://www.atparma.com/og?slug=sovraindebitamento-2026-come-uscire-dai-debiti",
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
            mainEntityOfPage: "https://www.atparma.com/blog/sovraindebitamento-2026-come-uscire-dai-debiti",
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
                name: "Quanto costa la procedura di sovraindebitamento?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le spese dipendono dal tipo di procedura e dall'OCC scelto. Comprendono il compenso del gestore della crisi (parametri tabellati ministeriali), il contributo unificato al Tribunale, eventuali oneri di pubblicità. In genere il costo complessivo si colloca tra 2.000 e 6.000 euro a seconda del valore dei debiti e della complessità del caso. L'OCC pubblica i propri tariffari e fornisce un preventivo preliminare prima dell'avvio.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto dura una procedura di sovraindebitamento?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "I tempi variano in base al tipo di procedura. La ristrutturazione dei debiti del consumatore richiede generalmente 6-12 mesi dal deposito alla omologazione. Il concordato minore ha tempi simili. La liquidazione controllata può durare fino a 3 anni, al termine dei quali si ottiene l'esdebitazione di diritto. L'esdebitazione dell'incapiente prevede invece un periodo di 4 anni di osservazione successivi al decreto.",
                },
              },
              {
                "@type": "Question",
                name: "Posso accedere se ho debiti con Agenzia Entrate o INPS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. I debiti fiscali, contributivi e quelli verso enti pubblici rientrano pienamente nel sovraindebitamento e possono essere ristrutturati o cancellati con le procedure del CCII. Dal 2020, dopo la pronuncia della Cassazione, anche l'IVA è falcidiabile nel concordato minore e nella ristrutturazione del consumatore. Restano comunque non falcidiabili i debiti per multe e sanzioni penali e amministrative.",
                },
              },
              {
                "@type": "Question",
                name: "Cosa succede ai miei beni durante la procedura?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dipende dalla procedura scelta. Nella ristrutturazione del consumatore e nel concordato minore puoi mantenere i beni necessari alla vita quotidiana e alla prosecuzione dell'attività, secondo il piano proposto e omologato. Nella liquidazione controllata il patrimonio liquidabile viene messo a disposizione dei creditori, ma sono esclusi gli arredi di casa, gli strumenti di lavoro entro i limiti dell'art. 514 c.p.c. e la parte di stipendio o pensione necessaria al mantenimento.",
                },
              },
              {
                "@type": "Question",
                name: "Posso accedere se ho già fatto un sovraindebitamento in passato?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'esdebitazione può essere concessa una sola volta nei cinque anni precedenti (art. 282 CCII). Se hai già beneficiato di una esdebitazione recente, non puoi ottenerne un'altra finché non sono decorsi i cinque anni. L'esdebitazione dell'incapiente (art. 283) ha una regola ancora più stringente: è concessa una sola volta nella vita.",
                },
              },
              {
                "@type": "Question",
                name: "Cos'è l'esdebitazione dell'incapiente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "È la procedura prevista dall'art. 283 CCII per il debitore persona fisica meritevole che non è in grado di offrire ai creditori alcuna utilità, neppure futura. Si ottiene la cancellazione integrale dei debiti senza pagare nulla, una sola volta nella vita. Per quattro anni dal decreto si ha un obbligo di pagamento solo se sopravvengono utilità rilevanti, tali da consentire il soddisfacimento di almeno il 10% dei creditori al netto delle spese essenziali per il debitore e la sua famiglia.",
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
            Sovraindebitamento 2026: come uscire dai debiti
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/og?slug=sovraindebitamento-2026-come-uscire-dai-debiti" alt="Sovraindebitamento 2026" fill unoptimized className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Il <strong>sovraindebitamento</strong> è la condizione di chi non è più in grado di pagare regolarmente i propri debiti: cartelle esattoriali, mutui, prestiti al consumo, debiti commerciali, fatture INPS o Agenzia Entrate. È una situazione molto più diffusa di quanto si pensi e nel 2026 esistono procedure legali concrete per uscirne, ridurre l&apos;importo da pagare o cancellare integralmente i debiti.
            </p>
            <p>
              In questa guida aggiornata al 2026 spieghiamo cosa prevede il Codice della Crisi d&apos;Impresa e dell&apos;Insolvenza (D.Lgs. 14/2019, modificato dal correttivo-ter D.Lgs. 136/2024), chi può accedere, le quattro procedure disponibili, la novità dell&apos;<strong>esdebitazione dell&apos;incapiente</strong> (art. 283 CCII), il ruolo dell&apos;<strong>OCC</strong> (Organismo di Composizione della Crisi), e come si avvia concretamente la pratica.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#novita-2026" className="text-[var(--color-accent)] hover:underline">Sovraindebitamento nel 2026: cosa è cambiato</a></li>
                <li><a href="#chi-puo-accedere" className="text-[var(--color-accent)] hover:underline">Chi può accedere alla procedura</a></li>
                <li><a href="#quattro-vie" className="text-[var(--color-accent)] hover:underline">Le quattro vie del CCII</a></li>
                <li><a href="#esdebitazione-incapiente" className="text-[var(--color-accent)] hover:underline">Esdebitazione dell&apos;incapiente (art. 283 CCII)</a></li>
                <li><a href="#occ" className="text-[var(--color-accent)] hover:underline">Il ruolo dell&apos;OCC</a></li>
                <li><a href="#documenti" className="text-[var(--color-accent)] hover:underline">Documenti necessari</a></li>
                <li><a href="#tempi-esiti" className="text-[var(--color-accent)] hover:underline">Tempi, sospensione esecuzioni, esiti</a></li>
                <li><a href="#debiti-inclusi" className="text-[var(--color-accent)] hover:underline">Quali debiti rientrano e quali no</a></li>
                <li><a href="#errori" className="text-[var(--color-accent)] hover:underline">Errori comuni e meritevolezza</a></li>
                <li><a href="#faq" className="text-[var(--color-accent)] hover:underline">Domande frequenti</a></li>
                <li><a href="#approfondimenti" className="text-[var(--color-accent)] hover:underline">Approfondimenti correlati</a></li>
              </ul>
            </div>

            {/* Novità 2026 */}
            <h2 id="novita-2026" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Sovraindebitamento nel 2026: cosa è cambiato
            </h2>
            <p>
              La disciplina del sovraindebitamento è oggi interamente contenuta nel <strong>Codice della Crisi d&apos;Impresa e dell&apos;Insolvenza</strong> (CCII, D.Lgs. 14/2019), che ha assorbito e sostituito la storica legge 3/2012. Il correttivo-ter del 2024 (D.Lgs. 136/2024) ha ridefinito alcuni passaggi chiave, ampliando le tutele del debitore meritevole e razionalizzando le quattro procedure.
            </p>
            <p>
              La novità più rilevante introdotta dal CCII e progressivamente affinata negli ultimi anni è l&apos;<strong>esdebitazione del sovraindebitato incapiente</strong> (art. 283 CCII): consente al debitore persona fisica meritevole che non ha nulla da offrire ai creditori di ottenere la cancellazione integrale dei debiti, senza alcun pagamento, una sola volta nella vita. È un cambio di paradigma che equipara la legge italiana ai migliori standard europei.
            </p>
            <p>
              Sul piano operativo va segnalato un altro elemento importante: dal deposito della domanda di accesso a una delle procedure di sovraindebitamento, scatta una <strong>sospensione automatica delle azioni esecutive e cautelari individuali</strong> sul patrimonio del debitore, con effetti anche sulle procedure di esecuzione forzata già pendenti. Questa protezione è una delle ragioni per cui agire tempestivamente, prima che il pignoramento diventi definitivo, fa una differenza enorme.
            </p>

            {/* Chi può accedere */}
            <h2 id="chi-puo-accedere" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Chi può accedere alla procedura
            </h2>
            <p>
              Il sovraindebitamento è rivolto ai soggetti che non possono accedere alle procedure concorsuali maggiori (concordato preventivo, liquidazione giudiziale ex fallimento). Possono attivare le procedure del CCII:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Consumatori</strong>, ovvero persone fisiche che hanno contratto debiti per scopi estranei all&apos;attività imprenditoriale o professionale eventualmente svolta</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Professionisti</strong> e lavoratori autonomi (anche con partita IVA cessata)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Imprenditori minori</strong>, sotto le soglie dimensionali della liquidazione giudiziale (art. 2, comma 1, lett. d, CCII): attivo, ricavi e debiti inferiori ai limiti tabellari</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Imprenditori agricoli</strong>, indipendentemente dalle soglie</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Start-up innovative</strong> nei primi cinque anni di vita</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Enti non profit</strong> e altri soggetti non fallibili</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Debitori civili</strong> in genere, inclusi pensionati e soggetti senza reddito attivo</span></li>
            </ul>
            <p>
              È importante chiarire un punto: il sovraindebitamento <strong>non</strong> è uno strumento per imprese di medie e grandi dimensioni, che invece accedono alla composizione negoziata e alle procedure concorsuali piene. Per chi è imprenditore commerciale sopra soglia il riferimento è la <Link href="/servizi/crisi-di-impresa" className="text-[var(--color-accent)] hover:underline">consulenza per crisi d&apos;impresa</Link> con strumenti diversi.
            </p>

            {/* Quattro vie */}
            <h2 id="quattro-vie" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Le quattro vie del CCII per uscire dal sovraindebitamento
            </h2>
            <p>
              Il CCII prevede quattro procedure distinte. La scelta dipende dal profilo del debitore (consumatore o no), dalla capacità di soddisfare almeno parzialmente i creditori, dal valore del patrimonio liquidabile. Non si sceglie a caso: ogni procedura ha presupposti e conseguenze specifiche.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Procedura</th>
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">A chi è rivolta</th>
                    <th className="text-left py-3 font-semibold text-zinc-900">Esito tipico</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Ristrutturazione debiti del consumatore (art. 67-73)</td>
                    <td className="py-3 pr-4">Persone fisiche consumatori meritevoli</td>
                    <td className="py-3">Pagamento ridotto e dilazionato + esdebitazione finale</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Concordato minore (art. 74-83)</td>
                    <td className="py-3 pr-4">Professionisti, imprenditori minori, agricoli, start-up</td>
                    <td className="py-3">Accordo coi creditori, prosecuzione attività, esdebitazione</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Liquidazione controllata (art. 268-277)</td>
                    <td className="py-3 pr-4">Chi ha patrimonio liquidabile ma non può sostenere un piano</td>
                    <td className="py-3">Liquidazione assistita + esdebitazione di diritto a 3 anni</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Esdebitazione dell&apos;incapiente (art. 283)</td>
                    <td className="py-3 pr-4">Persone fisiche meritevoli senza utilità da offrire</td>
                    <td className="py-3">Cancellazione integrale debiti, una volta nella vita</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-500 italic">
              Sintesi operativa. Ogni procedura ha presupposti specifici e una documentazione articolata. Il gestore della crisi nominato dall&apos;OCC, sulla base della situazione concreta, indica la procedura più idonea.
            </p>

            {/* Esdebitazione incapiente */}
            <h2 id="esdebitazione-incapiente" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Esdebitazione dell&apos;incapiente (art. 283 CCII): la novità che cambia tutto
            </h2>
            <p>
              L&apos;esdebitazione del sovraindebitato incapiente è probabilmente la novità più dirompente dell&apos;intero sistema CCII. La norma consente al debitore persona fisica <strong>meritevole</strong> che non è in grado di offrire ai creditori alcuna utilità, nemmeno in prospettiva futura, di ottenere la cancellazione integrale dei debiti. Una sola volta nella vita.
            </p>
            <p>
              <strong>Requisiti soggettivi.</strong> Deve trattarsi di persona fisica (no enti, no società); il debitore deve essere meritevole, ovvero non aver causato il sovraindebitamento con colpa grave, frode o malafede; non deve aver beneficiato di precedente esdebitazione incapiente.
            </p>
            <p>
              <strong>Requisiti oggettivi.</strong> Il debitore non deve essere in grado di soddisfare neppure parzialmente i creditori, presenti e futuri. La domanda è ammissibile anche se il debitore dispone di un reddito inferiore all&apos;assegno sociale aumentato della metà in base alla composizione del nucleo familiare. È una soglia molto bassa: tutela davvero chi è in difficoltà estrema.
            </p>
            <p>
              <strong>Come si attiva.</strong> La domanda si presenta tramite un OCC, che redige una relazione particolareggiata sulle cause del sovraindebitamento, sulla diligenza del debitore nell&apos;assumere obbligazioni, sulla situazione economica e patrimoniale attuale. La relazione, con la documentazione completa, viene trasmessa al Tribunale competente.
            </p>
            <p>
              <strong>Cosa succede dopo il decreto di esdebitazione.</strong> Il Tribunale, accertati i requisiti, dispone l&apos;esdebitazione. I debiti vengono cancellati. Per <strong>quattro anni</strong> successivi al decreto il debitore deve pagare i creditori solo se sopravvengono &laquo;utilità rilevanti&raquo;, definite dalla legge come tali da permettere il soddisfacimento di almeno il <strong>10%</strong> dei creditori, al netto delle spese essenziali per il debitore e la sua famiglia. Oltre i quattro anni l&apos;esdebitazione diventa definitiva e incondizionata.
            </p>

            {/* OCC */}
            <h2 id="occ" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Il ruolo dell&apos;OCC (Organismo di Composizione della Crisi)
            </h2>
            <p>
              Tutte le procedure di sovraindebitamento passano dall&apos;OCC — Organismo di Composizione della Crisi. È un soggetto terzo, iscritto in un registro tenuto presso il Ministero della Giustizia, che ha il compito di assistere il debitore, redigere la relazione tecnica, presentare la domanda al Tribunale, gestire il rapporto coi creditori.
            </p>
            <p>
              <strong>Chi può essere OCC.</strong> Ordini professionali (commercialisti, avvocati, notai) e Camere di Commercio costituiscono e iscrivono i propri organismi. Il gestore della crisi è un professionista nominato all&apos;interno dell&apos;OCC, selezionato dalla lista degli iscritti che hanno conseguito specifica abilitazione.
            </p>
            <p>
              <strong>OCC competenti per Parma e provincia.</strong> Per chi è nel circondario del Tribunale di Parma operano principalmente due organismi:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>OCC dei Commercialisti di Piacenza, Parma, Reggio Emilia e Modena</strong>, con sede operativa interprovinciale e una rete di gestori della crisi iscritti nei rispettivi Ordini territoriali</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>OCC della Camera di Commercio dell&apos;Emilia</strong>, iscritto al n. 70 sezione A del registro ministeriale, competente per i Tribunali di Parma, Piacenza e Reggio Emilia</span></li>
            </ul>
            <p>
              <strong>Costo del gestore della crisi.</strong> Il compenso è regolato da tabelle ministeriali (D.M. 202/2014 e successive) e dipende dal valore dell&apos;attivo e del passivo. È noto in anticipo. Nelle situazioni di estrema difficoltà, è prevista la possibilità di accesso a un fondo di rotazione per le spese di procedura.
            </p>

            {/* Documenti */}
            <h2 id="documenti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Documenti necessari per avviare la procedura
            </h2>
            <p>
              La completezza della documentazione è cruciale: una pratica frammentaria viene rigettata, ritardando la sospensione delle azioni esecutive. Ecco l&apos;elenco essenziale che il debitore deve fornire all&apos;OCC:
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Documenti personali e familiari</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Carta d&apos;identità e codice fiscale del debitore e dei familiari conviventi</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Stato di famiglia e certificato di residenza</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Atti di matrimonio, separazione o divorzio (se applicabili)</span></li>
            </ul>
            <p className="font-semibold text-zinc-900 mt-6">Posizione reddituale e patrimoniale</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Dichiarazioni dei redditi degli ultimi cinque anni</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Certificazioni Uniche (CU) o ultime buste paga / pensione</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Visura camerale se imprenditore o ex P.IVA</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Visure immobiliari di tutti gli immobili posseduti, anche pro-quota</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Atto di acquisto dell&apos;abitazione principale e contratto di mutuo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Estratti conto bancari degli ultimi tre anni</span></li>
            </ul>
            <p className="font-semibold text-zinc-900 mt-6">Esposizione debitoria</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Elenco completo dei creditori (banche, finanziarie, fornitori, enti pubblici, privati)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Estratti ruoli Agenzia Entrate Riscossione</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Estratti conto INPS e altre casse previdenziali</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Decreti ingiuntivi, atti di precetto, pignoramenti notificati</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Contratti di finanziamento e cessione del quinto in essere</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Centrale rischi della Banca d&apos;Italia (estratto aggiornato)</span></li>
            </ul>

            {/* Tempi ed esiti */}
            <h2 id="tempi-esiti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Tempi, sospensione esecuzioni, esiti
            </h2>
            <p>
              I tempi delle procedure di sovraindebitamento dipendono dal tipo di percorso scelto, dalla mole di documentazione, dal carico del Tribunale competente. Indicativamente:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Predisposizione della pratica</strong> (raccolta documenti, redazione relazione OCC): 60-120 giorni</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Dal deposito all&apos;udienza fissata dal Tribunale</strong>: 2-4 mesi</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Omologazione (ristrutturazione consumatore, concordato minore)</strong>: 6-12 mesi dal deposito</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Liquidazione controllata</strong>: durata massima 3 anni, al termine esdebitazione di diritto</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Esdebitazione dell&apos;incapiente</strong>: decreto dopo l&apos;istruttoria, poi 4 anni di osservazione</span></li>
            </ul>
            <p>
              <strong>Sospensione delle azioni esecutive.</strong> È l&apos;effetto pratico più importante e immediato. Dal deposito della domanda, le azioni esecutive individuali (pignoramenti) sono sospese per un periodo massimo di 180 giorni, prorogabili. Anche le procedure esecutive già pendenti restano congelate. Questo dà al debitore lo spazio necessario per far valutare la domanda e arrivare all&apos;omologazione senza che i creditori procedano singolarmente.
            </p>
            <p>
              <strong>Effetti dell&apos;omologazione o del decreto di esdebitazione.</strong> Il piano omologato o la liquidazione controllata terminano con l&apos;<strong>esdebitazione</strong>: i debiti residui vengono cancellati e il debitore torna giuridicamente libero. Nel caso dell&apos;art. 283 la cancellazione è immediata, condizionata al periodo di osservazione di 4 anni.
            </p>

            {/* Debiti inclusi */}
            <h2 id="debiti-inclusi" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quali debiti rientrano e quali no
            </h2>
            <p>
              Non tutti i debiti possono essere ristrutturati o cancellati. La regola generale è che il sovraindebitamento copre la quasi totalità dei debiti civili, fiscali e commerciali, con poche eccezioni rigorose.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Tipo di debito</th>
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Rientra</th>
                    <th className="text-left py-3 font-semibold text-zinc-900">Note</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Cartelle esattoriali (IRPEF, IRES, IRAP, IMU)</td>
                    <td className="py-3 pr-4">Sì</td>
                    <td className="py-3">Falcidiabili sia nel piano che in liquidazione</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">IVA</td>
                    <td className="py-3 pr-4">Sì</td>
                    <td className="py-3">Falcidiabile dopo Cass. 2020 e CCII</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Contributi INPS e casse private</td>
                    <td className="py-3 pr-4">Sì</td>
                    <td className="py-3">Rientrano nella massa passiva</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Mutui e finanziamenti bancari</td>
                    <td className="py-3 pr-4">Sì</td>
                    <td className="py-3">Garanzie reali tutelate fino al valore del bene</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Prestiti al consumo e finanziarie</td>
                    <td className="py-3 pr-4">Sì</td>
                    <td className="py-3">Pieno effetto esdebitatorio</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Debiti commerciali e fornitori</td>
                    <td className="py-3 pr-4">Sì</td>
                    <td className="py-3">Falcidiabili come gli altri chirografari</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Obblighi alimentari (mantenimento figli/coniuge)</td>
                    <td className="py-3 pr-4">No</td>
                    <td className="py-3">Restano dovuti per intero</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Debiti per dolo o colpa grave (es. risarcimento da reato)</td>
                    <td className="py-3 pr-4">No</td>
                    <td className="py-3">Non producono esdebitazione</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Multe e sanzioni penali</td>
                    <td className="py-3 pr-4">No</td>
                    <td className="py-3">Esclusione di principio</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-500 italic">
              Schema indicativo. Casi limite (es. crediti privilegiati con garanzia reale, debiti tributari con contenzioso aperto) richiedono valutazione specifica del gestore della crisi.
            </p>

            {/* Errori comuni */}
            <h2 id="errori" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Errori comuni e il tema della meritevolezza
            </h2>
            <p>
              La <strong>meritevolezza</strong> è il filtro centrale del sistema. Il Tribunale e il gestore della crisi verificano che il debitore non abbia causato la propria insolvenza con frode, colpa grave o malafede. Senza meritevolezza non c&apos;è esdebitazione, e la procedura viene rigettata.
            </p>
            <p>
              Gli errori che, nella pratica, fanno perdere la meritevolezza o complicano la procedura sono quasi sempre evitabili. Eccone alcuni ricorrenti:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Contrarre nuovi debiti</strong> nei mesi immediatamente precedenti la domanda, specie se sproporzionati al reddito: viene letto come frode</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Trasferire o donare beni</strong> a familiari per sottrarli ai creditori: gli atti vengono spesso revocati e il tribunale rigetta per malafede</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Omettere creditori</strong> dall&apos;elenco: oltre a essere causa di rigetto, può configurare illecito</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Aver fatto ricorso a credito al consumo in modo manifestamente sproporzionato</strong> al reddito conosciuto: classico caso valutato come colpa grave</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Non aver collaborato con i creditori prima di rivolgersi al Tribunale</strong> (rifiuto di piani di rientro proposti, mancata risposta a solleciti)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Continuare a sostenere spese non essenziali</strong> dopo l&apos;avvio della procedura</span></li>
            </ul>
            <p>
              Il messaggio è chiaro: il sovraindebitamento tutela chi ha agito in buona fede ed è finito in difficoltà per cause esogene (perdita del lavoro, malattia, crisi economica, crollo del settore di attività). Non è una scappatoia per chi ha accumulato debiti con leggerezza o per chi vuole eludere creditori legittimi.
            </p>

            {/* CTA intermedio */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>La tua situazione richiede una valutazione professionale.</strong> Ogni caso di sovraindebitamento è diverso: la procedura giusta dipende dal profilo dei debiti, dal reddito disponibile, dal patrimonio residuo e dai requisiti di meritevolezza. La prima valutazione del nostro studio è gratuita e ti dice subito se ci sono i presupposti per accedere alla procedura.
              </p>
            </div>

            {/* FAQ */}
            <h2 id="faq" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Domande frequenti
            </h2>
            <p className="font-semibold text-zinc-900 mt-6">Quanto costa la procedura di sovraindebitamento?</p>
            <p>
              Le spese dipendono dal tipo di procedura e dall&apos;OCC scelto. Comprendono il compenso del gestore della crisi (parametri tabellari ministeriali), il contributo unificato al Tribunale, eventuali oneri di pubblicità. In genere il costo complessivo si colloca tra 2.000 e 6.000 euro a seconda del valore dei debiti e della complessità del caso. L&apos;OCC fornisce un preventivo preliminare prima dell&apos;avvio.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Quanto dura una procedura di sovraindebitamento?</p>
            <p>
              La ristrutturazione dei debiti del consumatore e il concordato minore richiedono generalmente 6-12 mesi dal deposito all&apos;omologazione. La liquidazione controllata può durare fino a 3 anni, al termine dei quali si ottiene l&apos;esdebitazione di diritto. L&apos;esdebitazione dell&apos;incapiente prevede 4 anni di osservazione successivi al decreto.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Posso accedere se ho debiti con Agenzia Entrate o INPS?</p>
            <p>
              Sì. I debiti fiscali, contributivi e quelli verso enti pubblici rientrano pienamente nel sovraindebitamento e possono essere ristrutturati o cancellati. Dal 2020 anche l&apos;IVA è falcidiabile nel concordato minore e nella ristrutturazione del consumatore. Restano non falcidiabili i debiti per multe e sanzioni penali.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Cosa succede ai miei beni durante la procedura?</p>
            <p>
              Dipende dalla procedura scelta. Nella ristrutturazione del consumatore e nel concordato minore mantieni i beni necessari alla vita quotidiana e all&apos;eventuale prosecuzione dell&apos;attività, secondo il piano omologato. Nella liquidazione controllata il patrimonio liquidabile viene messo a disposizione dei creditori, ma sono esclusi gli arredi di casa, gli strumenti di lavoro entro i limiti dell&apos;art. 514 c.p.c. e la parte di stipendio o pensione necessaria al mantenimento.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Posso accedere se ho già fatto un sovraindebitamento in passato?</p>
            <p>
              L&apos;esdebitazione può essere concessa una sola volta nei cinque anni precedenti (art. 282 CCII). Se hai già beneficiato di una esdebitazione recente, non puoi ottenerne un&apos;altra finché non sono decorsi i cinque anni. L&apos;esdebitazione dell&apos;incapiente (art. 283) ha una regola ancora più stringente: una sola volta nella vita.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Cos&apos;è l&apos;esdebitazione dell&apos;incapiente?</p>
            <p>
              È la procedura dell&apos;art. 283 CCII per il debitore persona fisica meritevole che non è in grado di offrire ai creditori alcuna utilità, nemmeno futura. Cancellazione integrale dei debiti senza pagare nulla, una sola volta nella vita. Per quattro anni dal decreto si ha obbligo di pagamento solo se sopravvengono utilità tali da soddisfare almeno il 10% dei creditori al netto delle spese essenziali del nucleo familiare.
            </p>

            {/* Approfondimenti */}
            <h2 id="approfondimenti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <p>
              Se sei un imprenditore o gestisci una società in difficoltà, lo strumento corretto non è il sovraindebitamento ma la <strong>composizione negoziata della crisi d&apos;impresa</strong>. Abbiamo dedicato una guida specifica a quel percorso:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/composizione-negoziata-crisi-impresa-2026" className="text-[var(--color-accent)] hover:underline">Composizione negoziata 2026: guida alla crisi d&apos;impresa</Link> &mdash; per imprenditori, PMI, organi di controllo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/crisi-di-impresa" className="text-[var(--color-accent)] hover:underline">Servizio crisi d&apos;impresa</Link> &mdash; la pagina dello studio dedicata alle procedure concorsuali e alle attestazioni</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/contatti" className="text-[var(--color-accent)] hover:underline">Contattaci</Link> &mdash; valutazione preliminare gratuita della tua situazione debitoria</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi una valutazione sulla tua situazione debitoria?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Il nostro studio assiste persone fisiche e imprenditori minori a Parma e provincia nelle procedure di sovraindebitamento. Prima valutazione gratuita: in 30 minuti capisci se hai i presupposti per accedere alla procedura e quale strada è più adatta al tuo caso.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contatti?ref=blog-sovraindebitamento" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
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
