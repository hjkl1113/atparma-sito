import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Concordato minore 2026: guida alla procedura | A.T. Parma",
  description:
    "Concordato minore 2026: procedura di sovraindebitamento per imprenditori minori e professionisti. Voto creditori, OCC, falcidia, cram-down fiscale. Artt. 74-83 CCII.",
  alternates: {
    canonical: "/blog/concordato-minore-2026",
  },
  openGraph: {
    title: "Concordato minore 2026: la procedura per imprenditori minori e professionisti",
    description:
      "Concordato minore 2026: procedura di sovraindebitamento per imprenditori minori e professionisti. Voto creditori, OCC, falcidia, cram-down fiscale. Artt. 74-83 CCII.",
    type: "article",
    publishedTime: "2026-06-03T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [
      {
        url: "https://www.atparma.com/og?slug=concordato-minore-2026",
        width: 1200,
        height: 630,
        alt: "Concordato minore 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.atparma.com/og?slug=concordato-minore-2026"],
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
            headline: "Concordato minore 2026: la procedura per imprenditori minori e professionisti",
            description:
              "Concordato minore 2026: procedura di sovraindebitamento per imprenditori minori e professionisti. Voto creditori, OCC, falcidia, cram-down fiscale. Artt. 74-83 CCII.",
            image: "https://www.atparma.com/og?slug=concordato-minore-2026",
            datePublished: "2026-06-03",
            dateModified: "2026-06-03",
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
            mainEntityOfPage: "https://www.atparma.com/blog/concordato-minore-2026",
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
                name: "Cos'è il concordato minore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "È una procedura di composizione delle crisi da sovraindebitamento disciplinata dagli artt. 74-83 del Codice della Crisi (D.Lgs. 14/2019), aggiornati dal Correttivo-ter (D.Lgs. 136/2024). Si rivolge ai debitori sovraindebitati che non sono consumatori e consente di proporre ai creditori un piano di ristrutturazione del debito, con continuità dell'attività o liquidazione del patrimonio, presentato con l'ausilio di un Organismo di Composizione della Crisi (OCC) e omologato dal Tribunale.",
                },
              },
              {
                "@type": "Question",
                name: "Chi può accedere al concordato minore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Possono accedervi i debitori sovraindebitati diversi dal consumatore: imprenditori minori (sotto le soglie di fallibilità dell'art. 2, lett. d CCII), imprenditori agricoli, professionisti, start-up innovative e in generale i soggetti non assoggettabili alla liquidazione giudiziale che non siano consumatori puri. È invece escluso il consumatore, che dispone della ristrutturazione dei debiti del consumatore (artt. 67-73 CCII).",
                },
              },
              {
                "@type": "Question",
                name: "I creditori votano nel concordato minore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. A differenza della ristrutturazione dei debiti del consumatore, il concordato minore richiede il voto dei creditori. La proposta è approvata se vota a favore la maggioranza dei crediti ammessi al voto (oltre il 50%). Il silenzio dei creditori vale come adesione secondo le regole del CCII. Dopo il voto interviene l'omologazione del Tribunale.",
                },
              },
              {
                "@type": "Question",
                name: "Posso continuare l'attività durante il concordato minore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. La proposta di concordato minore può prevedere la continuità aziendale, ed è in particolare ammessa quando è formulata con prosecuzione dell'attività. Se la proposta è soltanto liquidatoria, è ammessa a condizione che preveda un apporto di risorse esterne che aumenti in misura apprezzabile la soddisfazione dei creditori rispetto all'alternativa liquidatoria.",
                },
              },
              {
                "@type": "Question",
                name: "Che differenza c'è con la ristrutturazione dei debiti del consumatore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La ristrutturazione dei debiti del consumatore (artt. 67-73 CCII) è riservata al consumatore e non prevede il voto dei creditori: decide il giudice valutando la meritevolezza del debitore. Il concordato minore si rivolge invece ai soggetti sovraindebitati diversi dal consumatore (imprenditori minori, professionisti, imprenditori agricoli) e richiede il voto dei creditori a maggioranza dei crediti ammessi.",
                },
              },
              {
                "@type": "Question",
                name: "Si possono pagare i creditori solo in parte?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. Il concordato minore consente la falcidia, cioè il pagamento non integrale dei creditori, compresi i privilegiati nei limiti del valore di realizzo del bene su cui grava la prelazione. I crediti dell'Erario e degli enti previdenziali possono essere trattati con possibilità di cram-down fiscale: il Tribunale può omologare anche in assenza di adesione del Fisco quando ricorrono le condizioni di legge, purché il credito sia soddisfatto in misura non inferiore all'alternativa liquidatoria.",
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

          <time className="text-xs text-zinc-400 block mb-3">3 giugno 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Concordato minore 2026: la procedura per imprenditori minori e professionisti
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/og?slug=concordato-minore-2026" alt="Concordato minore 2026" fill unoptimized className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Il <strong>concordato minore</strong> è la procedura di composizione delle crisi da <strong>sovraindebitamento</strong> pensata per chi non è un consumatore puro ma nemmeno un&apos;impresa di grandi dimensioni: imprenditori minori, professionisti, artigiani, imprenditori agricoli. Disciplinato dagli <strong>artt. 74-83 del Codice della Crisi d&apos;Impresa e dell&apos;Insolvenza</strong> (D.Lgs. 14/2019) e aggiornato dal Correttivo-ter (D.Lgs. 136/2024), consente di proporre ai creditori un piano di ristrutturazione del debito, in continuità o in liquidazione, con l&apos;ausilio di un Organismo di Composizione della Crisi e l&apos;omologazione del Tribunale.
            </p>
            <p>
              In questa guida aggiornata al 2026 spieghiamo cos&apos;è il concordato minore, chi può accedervi e chi no, la differenza tra proposta in continuità e liquidatoria, il voto dei creditori e le maggioranze, il ruolo dell&apos;OCC e del gestore, la falcidia dei crediti privilegiati, il cram-down fiscale, l&apos;omologazione e i suoi effetti, con una tabella di confronto rispetto alla ristrutturazione del consumatore e al concordato preventivo.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#cosa-e" className="text-[var(--color-accent)] hover:underline">Cos&apos;è il concordato minore (artt. 74-83)</a></li>
                <li><a href="#chi-accede" className="text-[var(--color-accent)] hover:underline">Chi può accedere (e chi no)</a></li>
                <li><a href="#continuita-liquidazione" className="text-[var(--color-accent)] hover:underline">Continuità o liquidazione</a></li>
                <li><a href="#voto" className="text-[var(--color-accent)] hover:underline">Il voto dei creditori e le maggioranze</a></li>
                <li><a href="#occ-gestore" className="text-[var(--color-accent)] hover:underline">Il ruolo dell&apos;OCC e del gestore</a></li>
                <li><a href="#falcidia" className="text-[var(--color-accent)] hover:underline">Falcidia, privilegiati e cram-down fiscale</a></li>
                <li><a href="#omologazione" className="text-[var(--color-accent)] hover:underline">Omologazione ed effetti</a></li>
                <li><a href="#confronto" className="text-[var(--color-accent)] hover:underline">Concordato minore vs consumatore vs preventivo</a></li>
                <li><a href="#faq" className="text-[var(--color-accent)] hover:underline">Domande frequenti</a></li>
                <li><a href="#approfondimenti" className="text-[var(--color-accent)] hover:underline">Approfondimenti correlati</a></li>
              </ul>
            </div>

            {/* Cosa è */}
            <h2 id="cosa-e" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cos&apos;è il concordato minore (artt. 74-83 CCII)
            </h2>
            <p>
              Il concordato minore è una delle procedure di composizione delle crisi da sovraindebitamento previste dal Codice della Crisi. È disciplinato dagli <strong>artt. 74-83 CCII</strong> (D.Lgs. 14/2019), come aggiornati dal <strong>Correttivo-ter (D.Lgs. 136/2024)</strong>. Si tratta dello strumento con cui il debitore sovraindebitato, che non sia un consumatore, propone ai propri creditori un piano per ristrutturare il debito ed evitare la liquidazione disordinata.
            </p>
            <p>
              <strong>Logica della procedura.</strong> Il debitore predispone, con l&apos;ausilio dell&apos;OCC, una <strong>proposta</strong> e un <strong>piano</strong> che descrivono come intende soddisfare i creditori: dilazioni, riduzioni del debito (falcidia), eventuale apporto di risorse esterne, prosecuzione dell&apos;attività o liquidazione del patrimonio. La proposta è sottoposta al voto dei creditori e poi all&apos;omologazione del Tribunale.
            </p>
            <p>
              <strong>Collocazione nel sistema.</strong> Il concordato minore è, in estrema sintesi, la versione del concordato &laquo;per i non fallibili&raquo;: si applica a chi non è assoggettabile alla liquidazione giudiziale e alle procedure maggiori, ma ha un&apos;attività economica o professionale che giustifica un confronto strutturato con i creditori, diverso dalla pura ristrutturazione del consumatore.
            </p>

            {/* Chi accede */}
            <h2 id="chi-accede" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Chi può accedere (e chi no)
            </h2>
            <p>
              Il concordato minore si rivolge ai <strong>debitori sovraindebitati che non sono consumatori</strong>. Rientrano quindi nel perimetro della procedura:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Imprenditori minori</strong>, cioè sotto le soglie di fallibilità definite dall&apos;art. 2, lett. d) CCII</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Imprenditori agricoli</strong>, non assoggettabili alla liquidazione giudiziale</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Professionisti</strong> e lavoratori autonomi con debiti riconducibili anche all&apos;attività</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Start-up innovative</strong> e altri soggetti diversi dal consumatore</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>In generale, i <strong>soggetti sovraindebitati non consumatori</strong> esclusi dalle procedure concorsuali maggiori</span></li>
            </ul>
            <p>
              <strong>Chi è escluso.</strong> È escluso dal concordato minore il <strong>consumatore puro</strong>, cioè la persona fisica i cui debiti non sono riconducibili a un&apos;attività d&apos;impresa o professionale. Il consumatore dispone di uno strumento dedicato, la <strong>ristrutturazione dei debiti del consumatore</strong> (artt. 67-73 CCII), che segue regole diverse e, soprattutto, non prevede il voto dei creditori.
            </p>
            <p>
              La corretta qualificazione del debitore come consumatore o non consumatore è quindi il primo nodo tecnico: da essa dipende quale procedura si possa attivare. Chi ha posizioni miste (debiti personali e professionali) va valutato con attenzione, perché la classificazione incide sull&apos;ammissibilità.
            </p>

            {/* Continuità o liquidazione */}
            <h2 id="continuita-liquidazione" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Continuità o liquidazione
            </h2>
            <p>
              La proposta di concordato minore può prevedere due grandi schemi: la <strong>continuità aziendale</strong> oppure la <strong>liquidazione del patrimonio</strong>. La scelta non è solo organizzativa: incide sui presupposti di ammissibilità.
            </p>
            <p>
              <strong>Proposta in continuità.</strong> Il concordato minore è ammesso in particolare quando è proposto con <strong>prosecuzione dell&apos;attività</strong>. È la finalità tipica dello strumento: consentire all&apos;imprenditore minore o al professionista di proseguire l&apos;attività economica ristrutturando il debito, anziché disperdere il valore con una liquidazione.
            </p>
            <p>
              <strong>Proposta liquidatoria.</strong> Se la proposta è <strong>solo liquidatoria</strong>, è ammessa a una condizione precisa: deve prevedere un <strong>apporto di risorse esterne</strong> che aumenti in misura apprezzabile la soddisfazione dei creditori rispetto a quanto otterrebbero dalla mera liquidazione. È la garanzia che, anche senza continuità, i creditori ricevano qualcosa in più grazie all&apos;intervento del debitore o di terzi.
            </p>

            {/* Voto */}
            <h2 id="voto" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Il voto dei creditori e le maggioranze
            </h2>
            <p>
              È questa una delle caratteristiche che distinguono nettamente il concordato minore dalla ristrutturazione del consumatore: il concordato minore <strong>richiede il voto dei creditori</strong>. Non è il giudice a decidere da solo sulla meritevolezza del debitore; sono i creditori a pronunciarsi sulla proposta.
            </p>
            <p>
              <strong>Maggioranza richiesta.</strong> La proposta è approvata se vota a favore la <strong>maggioranza dei crediti ammessi al voto</strong>, cioè oltre il 50% in valore. Il calcolo si fonda sull&apos;ammontare dei crediti, non sul numero dei creditori.
            </p>
            <p>
              <strong>Silenzio-assenso.</strong> Il <strong>silenzio del creditore vale come adesione</strong>: chi non si esprime entro i termini è considerato consenziente, secondo le regole del CCII. Questo meccanismo facilita il raggiungimento delle maggioranze, evitando che l&apos;inerzia di alcuni creditori blocchi la procedura.
            </p>

            {/* OCC e gestore */}
            <h2 id="occ-gestore" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Il ruolo dell&apos;OCC e del gestore
            </h2>
            <p>
              Il concordato minore si presenta con l&apos;ausilio dell&apos;<strong>Organismo di Composizione della Crisi (OCC)</strong>, che nomina un <strong>gestore</strong> incaricato di seguire la procedura. L&apos;OCC è il presidio tecnico che accompagna il debitore e fornisce al Tribunale e ai creditori gli elementi per valutare la proposta.
            </p>
            <p>
              <strong>La relazione particolareggiata.</strong> Il gestore redige una <strong>relazione particolareggiata</strong>, che è il documento centrale della procedura. In essa il gestore espone in particolare:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Le <strong>cause del sovraindebitamento</strong> e la condotta del debitore</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>L&apos;<strong>attendibilità dei dati</strong> e della documentazione presentata</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>La <strong>completezza della proposta</strong> e del piano</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Una <strong>valutazione di convenienza</strong> per i creditori rispetto all&apos;alternativa liquidatoria</span></li>
            </ul>
            <p>
              Questa relazione consente ai creditori di votare in modo informato e al Tribunale di verificare la regolarità della procedura e la convenienza della proposta. Senza il lavoro dell&apos;OCC il concordato minore non può essere correttamente istruito.
            </p>

            {/* Falcidia */}
            <h2 id="falcidia" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Falcidia, privilegiati e cram-down fiscale
            </h2>
            <p>
              Il concordato minore consente la <strong>falcidia</strong>, cioè il pagamento non integrale dei creditori. È la leva che rende sostenibile il piano: il debitore propone di pagare una percentuale del debito, compatibile con le proprie risorse e con l&apos;eventuale apporto esterno.
            </p>
            <p>
              <strong>Creditori privilegiati.</strong> La falcidia può riguardare anche i <strong>creditori privilegiati</strong>, ma entro un limite preciso: nei limiti del <strong>valore di realizzo del bene</strong> su cui grava la prelazione. In altri termini, il creditore privilegiato non può essere falcidiato per la parte di credito coperta dal valore della garanzia, ma può esserlo per l&apos;eccedenza.
            </p>
            <p>
              <strong>Crediti dell&apos;Erario e degli enti previdenziali.</strong> I crediti tributari e contributivi possono essere trattati nella proposta con la possibilità del <strong>cram-down fiscale</strong>: il Tribunale può omologare il concordato minore anche <strong>senza l&apos;adesione del Fisco</strong> o dell&apos;ente previdenziale, a determinate condizioni di legge, quando la proposta risulta più conveniente per l&apos;Erario rispetto all&apos;alternativa liquidatoria. È uno strumento decisivo nei casi in cui il debito fiscale è la componente prevalente del sovraindebitamento.
            </p>

            {/* CTA intermedio */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>Sei un imprenditore minore, un professionista o un artigiano con debiti insostenibili?</strong> Il concordato minore può consentirti di proseguire l&apos;attività ristrutturando il debito, anche con falcidia dei creditori. Il nostro studio assiste il debitore nella predisposizione della proposta e del piano e nel rapporto con l&apos;OCC.
              </p>
            </div>

            {/* Omologazione */}
            <h2 id="omologazione" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Omologazione ed effetti
            </h2>
            <p>
              Raggiunta la maggioranza dei crediti ammessi al voto, la procedura passa all&apos;<strong>omologazione da parte del Tribunale</strong>. È il momento in cui il giudice verifica la regolarità della procedura, la fattibilità del piano e la convenienza per i creditori.
            </p>
            <p>
              <strong>Contestazioni e omologazione nonostante il dissenso.</strong> I creditori possono sollevare <strong>contestazioni sulla convenienza</strong> della proposta. Il giudice può comunque omologare il concordato minore anche in caso di dissenso se ritiene che il credito contestato sia <strong>soddisfatto in misura non inferiore all&apos;alternativa liquidatoria</strong>: è il principio che governa la valutazione di convenienza e che tutela il creditore dissenziente rispetto a quanto otterrebbe dalla liquidazione.
            </p>
            <p>
              <strong>Effetti dell&apos;omologazione.</strong> Con l&apos;omologazione la proposta diventa <strong>vincolante per tutti i creditori anteriori</strong>, anche quelli che non hanno aderito o hanno votato contro. Segue la fase di <strong>esecuzione del piano sotto la vigilanza dell&apos;OCC</strong>, che controlla l&apos;adempimento di quanto previsto dalla proposta.
            </p>
            <p>
              <strong>Esdebitazione.</strong> A chiusura della procedura, una volta eseguito il piano, è possibile l&apos;<strong>esdebitazione</strong>: il debitore viene liberato dai debiti residui non soddisfatti, potendo così ripartire senza il peso delle obbligazioni anteriori. È l&apos;obiettivo finale dell&apos;intero percorso di composizione del sovraindebitamento.
            </p>

            {/* Confronto */}
            <h2 id="confronto" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Concordato minore vs ristrutturazione del consumatore vs concordato preventivo
            </h2>
            <p>
              I tre strumenti rispondono a situazioni diverse. Sceglierli correttamente è una decisione tecnica che dipende dalla qualifica del debitore, dalle dimensioni dell&apos;attività e dal coinvolgimento dei creditori.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900"></th>
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Concordato minore</th>
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Ristrutturazione consumatore</th>
                    <th className="text-left py-3 font-semibold text-zinc-900">Concordato preventivo</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">A chi si rivolge</td>
                    <td className="py-3 pr-4">Sovraindebitati non consumatori</td>
                    <td className="py-3 pr-4">Solo il consumatore</td>
                    <td className="py-3">Imprese sopra soglia</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Voto creditori</td>
                    <td className="py-3 pr-4">Richiesto (maggioranza crediti)</td>
                    <td className="py-3 pr-4">Non previsto (decide il giudice)</td>
                    <td className="py-3">Richiesto (maggioranze legali)</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Continuità / liquidazione</td>
                    <td className="py-3 pr-4">Entrambe (liquidatoria con risorse esterne)</td>
                    <td className="py-3 pr-4">Piano di ristrutturazione del debito</td>
                    <td className="py-3">Entrambe</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Organo / ausilio</td>
                    <td className="py-3 pr-4">OCC e gestore</td>
                    <td className="py-3 pr-4">OCC e gestore</td>
                    <td className="py-3">Commissario giudiziale</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Soglia dimensionale</td>
                    <td className="py-3 pr-4">Sotto le soglie di fallibilità</td>
                    <td className="py-3 pr-4">Persona fisica non imprenditore</td>
                    <td className="py-3">Sopra le soglie</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Esito finale</td>
                    <td className="py-3 pr-4">Omologazione ed esdebitazione</td>
                    <td className="py-3 pr-4">Omologazione ed esdebitazione</td>
                    <td className="py-3">Omologazione concorsuale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-500 italic">
              Schema sintetico. La scelta dello strumento richiede una valutazione tecnica caso per caso, a partire dalla corretta qualificazione del debitore come consumatore o non consumatore.
            </p>

            {/* FAQ */}
            <h2 id="faq" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Domande frequenti
            </h2>
            <p className="font-semibold text-zinc-900 mt-6">Cos&apos;è il concordato minore?</p>
            <p>
              È una procedura di composizione delle crisi da sovraindebitamento disciplinata dagli artt. 74-83 del Codice della Crisi (D.Lgs. 14/2019), aggiornati dal Correttivo-ter (D.Lgs. 136/2024). Si rivolge ai debitori sovraindebitati che non sono consumatori e consente di proporre ai creditori un piano di ristrutturazione del debito, con continuità dell&apos;attività o liquidazione del patrimonio, presentato con l&apos;ausilio di un OCC e omologato dal Tribunale.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Chi può accedere al concordato minore?</p>
            <p>
              Possono accedervi i debitori sovraindebitati diversi dal consumatore: imprenditori minori (sotto le soglie di fallibilità dell&apos;art. 2, lett. d CCII), imprenditori agricoli, professionisti, start-up innovative e in generale i soggetti non assoggettabili alla liquidazione giudiziale che non siano consumatori puri. È invece escluso il consumatore, che dispone della ristrutturazione dei debiti del consumatore (artt. 67-73 CCII).
            </p>
            <p className="font-semibold text-zinc-900 mt-6">I creditori votano nel concordato minore?</p>
            <p>
              Sì. A differenza della ristrutturazione dei debiti del consumatore, il concordato minore richiede il voto dei creditori. La proposta è approvata se vota a favore la maggioranza dei crediti ammessi al voto (oltre il 50%). Il silenzio dei creditori vale come adesione secondo le regole del CCII. Dopo il voto interviene l&apos;omologazione del Tribunale.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Posso continuare l&apos;attività durante il concordato minore?</p>
            <p>
              Sì. La proposta di concordato minore può prevedere la continuità aziendale, ed è in particolare ammessa quando è formulata con prosecuzione dell&apos;attività. Se la proposta è soltanto liquidatoria, è ammessa a condizione che preveda un apporto di risorse esterne che aumenti in misura apprezzabile la soddisfazione dei creditori rispetto all&apos;alternativa liquidatoria.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Che differenza c&apos;è con la ristrutturazione dei debiti del consumatore?</p>
            <p>
              La ristrutturazione dei debiti del consumatore (artt. 67-73 CCII) è riservata al consumatore e non prevede il voto dei creditori: decide il giudice valutando la meritevolezza del debitore. Il concordato minore si rivolge invece ai soggetti sovraindebitati diversi dal consumatore (imprenditori minori, professionisti, imprenditori agricoli) e richiede il voto dei creditori a maggioranza dei crediti ammessi.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Si possono pagare i creditori solo in parte?</p>
            <p>
              Sì. Il concordato minore consente la falcidia, cioè il pagamento non integrale dei creditori, compresi i privilegiati nei limiti del valore di realizzo del bene su cui grava la prelazione. I crediti dell&apos;Erario e degli enti previdenziali possono essere trattati con possibilità di cram-down fiscale: il Tribunale può omologare anche in assenza di adesione del Fisco quando ricorrono le condizioni di legge, purché il credito sia soddisfatto in misura non inferiore all&apos;alternativa liquidatoria.
            </p>

            {/* Approfondimenti */}
            <h2 id="approfondimenti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <p>
              Il concordato minore è uno dei percorsi previsti dal CCII per il sovraindebitamento. Per inquadrare l&apos;intero ventaglio di soluzioni e capire qual è lo strumento adatto al tuo caso, leggi anche:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/sovraindebitamento-2026-come-uscire-dai-debiti" className="text-[var(--color-accent)] hover:underline">Sovraindebitamento 2026: come uscire dai debiti</Link> &mdash; la guida madre alle procedure CCII per persone fisiche, professionisti e imprenditori minori</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/esdebitazione-incapiente-2026" className="text-[var(--color-accent)] hover:underline">Esdebitazione del debitore incapiente 2026</Link> &mdash; la liberazione dai debiti per chi non ha alcuna capacità di soddisfare i creditori</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/composizione-negoziata-crisi-impresa-2026" className="text-[var(--color-accent)] hover:underline">Composizione negoziata 2026</Link> &mdash; lo strumento per le imprese sopra le soglie di fallibilità</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/contatti" className="text-[var(--color-accent)] hover:underline">Contattaci</Link> &mdash; valutazione preliminare per debitori sovraindebitati, professionisti e imprenditori minori</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi valutare il concordato minore per la tua situazione?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Il nostro studio assiste imprenditori minori, professionisti, artigiani e imprenditori agricoli sovraindebitati nella predisposizione della proposta e del piano, nel rapporto con l&apos;OCC e nella gestione del voto dei creditori fino all&apos;omologazione. Prima consulenza tecnica per inquadrare il caso e individuare la procedura corretta.
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
