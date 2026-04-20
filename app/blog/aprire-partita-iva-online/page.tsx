import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Come aprire la Partita IVA online nel 2026 | A.T. Consulting Parma",
  description: "Guida completa all'apertura della Partita IVA online nel 2026: costi, tempi, regime forfettario, codice ATECO e documenti necessari.",
  alternates: {
    canonical: "/blog/aprire-partita-iva-online",
  },
  openGraph: {
    title: "Come aprire la Partita IVA online nel 2026: tutto quello che devi sapere",
    description: "Guida completa all'apertura della Partita IVA online nel 2026: costi, tempi, regime forfettario, codice ATECO e documenti necessari.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [{ url: "/images/generated-1775312781998.png", width: 1200, height: 630, alt: "Apertura Partita IVA online" }],
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
            headline: "Come aprire la Partita IVA online nel 2026: tutto quello che devi sapere",
            description: "Guida completa all'apertura della Partita IVA online nel 2026: costi, tempi, regime forfettario, codice ATECO e documenti necessari.",
            image: "https://www.atparma.com/images/generated-1775312781998.png",
            datePublished: "2026-03-25",
            dateModified: "2026-03-25",
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
            mainEntityOfPage: "https://www.atparma.com/blog/aprire-partita-iva-online",
          }),
        }}
      />

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Blog
          </Link>

          <time className="text-xs text-zinc-400 block mb-3">25 marzo 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Come aprire la Partita IVA online nel 2026: tutto quello che devi sapere
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/images/generated-1775312781998.png" alt="Apertura Partita IVA online" fill className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              <strong>Aprire la Partita IVA online nel 2026</strong> e un processo che puoi gestire interamente da casa, senza recarti in nessun ufficio. Che tu sia un freelance, un professionista, un artigiano o un aspirante imprenditore, questa guida completa ti accompagna in ogni passaggio: dalla scelta del regime fiscale al codice ATECO, dai costi reali alle scadenze, fino agli errori da evitare assolutamente.
            </p>
            <p>
              Se stai valutando di metterti in proprio o di regolarizzare un&apos;attività che svolgi già, qui trovi tutte le informazioni aggiornate per il 2026.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#quando-serve" className="text-[var(--color-accent)] hover:underline">Quando serve la Partita IVA (e quando no)</a></li>
                <li><a href="#prestazione-occasionale" className="text-[var(--color-accent)] hover:underline">Prestazione occasionale vs Partita IVA</a></li>
                <li><a href="#regime-forfettario" className="text-[var(--color-accent)] hover:underline">Regime forfettario 2026: requisiti e vantaggi</a></li>
                <li><a href="#regime-ordinario" className="text-[var(--color-accent)] hover:underline">Regime ordinario: quando conviene</a></li>
                <li><a href="#codice-ateco" className="text-[var(--color-accent)] hover:underline">Come scegliere il codice ATECO</a></li>
                <li><a href="#procedura" className="text-[var(--color-accent)] hover:underline">Procedura passo passo</a></li>
                <li><a href="#costi" className="text-[var(--color-accent)] hover:underline">Costi reali di apertura e gestione</a></li>
                <li><a href="#inps" className="text-[var(--color-accent)] hover:underline">Contributi INPS: quanto si paga</a></li>
                <li><a href="#errori" className="text-[var(--color-accent)] hover:underline">I 5 errori più costosi</a></li>
                <li><a href="#aprire-online" className="text-[var(--color-accent)] hover:underline">Come aprire la Partita IVA online con un commercialista</a></li>
              </ul>
            </div>

            {/* Quando serve */}
            <h2 id="quando-serve" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quando serve la Partita IVA (e quando no)
            </h2>
            <p>
              La <strong>Partita IVA e obbligatoria</strong> quando svolgi un&apos;attività economica in modo <strong>abituale e continuativo</strong>, indipendentemente dall&apos;importo che guadagni. Questo e un punto fondamentale: non esiste una soglia minima di reddito sotto la quale puoi lavorare senza Partita IVA in modo regolare.
            </p>
            <p>
              Hai bisogno della Partita IVA se:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Offri servizi professionali in modo continuativo (consulenza, design, sviluppo, formazione)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Vendi prodotti o servizi online con regolarità</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Hai un&apos;attività artigianale o commerciale</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Collabori con più committenti nell&apos;arco dell&apos;anno</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Sei un influencer, content creator o streamer con entrate ricorrenti</span></li>
            </ul>

            {/* Prestazione occasionale */}
            <h2 id="prestazione-occasionale" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Prestazione occasionale vs Partita IVA: il vero confine
            </h2>
            <p>
              La <strong>prestazione occasionale</strong> (art. 2222 del Codice Civile) e consentita solo quando l&apos;attività e realmente saltuaria, non organizzata e non abituale. Il limite dei 5.000 euro annui che si sente spesso citare riguarda solo la soglia oltre la quale scattano i contributi previdenziali INPS — non e il confine tra lavoro occasionale e Partita IVA.
            </p>
            <p>
              In pratica: se emetti ricevute di prestazione occasionale ogni mese, anche per importi piccoli, stai svolgendo un&apos;attività abituale e rischi una sanzione. Il criterio discriminante e la <strong>frequenza e l&apos;organizzazione</strong>, non l&apos;importo.
            </p>
            <div className="bg-zinc-50 rounded-xl p-6 my-6 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>Esempio pratico:</strong> un grafico che lavora per 3 clienti diversi nel corso dell&apos;anno, anche se fattura meno di 5.000 euro, sta svolgendo un&apos;attività abituale e dovrebbe aprire la Partita IVA.
              </p>
            </div>

            {/* Regime forfettario */}
            <h2 id="regime-forfettario" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Regime forfettario 2026: requisiti, vantaggi e limiti
            </h2>
            <p>
              Il <strong>regime forfettario</strong> e il regime fiscale agevolato più utilizzato in Italia per chi apre una nuova Partita IVA. Ecco come funziona nel 2026:
            </p>
            <p className="font-semibold text-zinc-900 mt-4">Requisiti per accedere:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Ricavi o compensi non superiori a <strong>85.000 euro</strong> nell&apos;anno precedente</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese per dipendenti e collaboratori non superiori a 20.000 euro lordi</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Nessuna partecipazione in società di persone, associazioni professionali o SRL con controllo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Non aver percepito nell&apos;anno precedente redditi da lavoro dipendente superiori a 30.000 euro (salvo cessazione del rapporto)</span></li>
            </ul>
            <p className="font-semibold text-zinc-900 mt-6">Vantaggi principali:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Imposta sostitutiva del 5%</strong> per i primi 5 anni (poi 15%), al posto di IRPEF + addizionali</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Niente IVA</strong> sulle fatture emesse (non si addebita e non si detrae)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Niente ritenuta d&apos;acconto</strong> da parte dei committenti</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Contabilità semplificata:</strong> nessun obbligo di registri IVA, solo conservazione fatture</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Esenzione IRAP</strong></span></li>
            </ul>
            <p className="font-semibold text-zinc-900 mt-6">Attenzione ai limiti:</p>
            <p>
              Il reddito imponibile nel forfettario si calcola applicando un <strong>coefficiente di redditività</strong> (che varia dal 40% all&apos;86% a seconda del codice ATECO) ai ricavi, non ai ricavi meno i costi reali. Questo significa che se la tua attività ha costi elevati (materie prime, attrezzature, affitto), il forfettario potrebbe farti pagare più tasse rispetto all&apos;ordinario.
            </p>

            {/* Regime ordinario */}
            <h2 id="regime-ordinario" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Regime ordinario: quando conviene
            </h2>
            <p>
              Il regime ordinario (o semplificato) conviene quando:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>I tuoi <strong>costi reali superano</strong> quelli forfettizzati dal coefficiente ATECO</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Hai bisogno di <strong>detrarre l&apos;IVA</strong> sugli acquisti (attrezzature, macchinari, forniture)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Prevedi di <strong>superare gli 85.000 euro</strong> di ricavi in breve tempo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Vuoi <strong>assumere dipendenti</strong> o collaboratori oltre la soglia consentita</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Lavori con clienti esteri e hai bisogno di gestire l&apos;IVA intracomunitaria</span></li>
            </ul>
            <p className="mt-4">
              Nel regime ordinario paghi l&apos;IRPEF a scaglioni (dal 23% al 43%), ma puoi dedurre tutti i costi documentati dell&apos;attività. La scelta tra forfettario e ordinario va fatta con un&apos;analisi personalizzata — e una delle cose più importanti da discutere con il commercialista prima di aprire la Partita IVA.
            </p>

            {/* Codice ATECO */}
            <h2 id="codice-ateco" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Come scegliere il codice ATECO giusto
            </h2>
            <p>
              Il <strong>codice ATECO</strong> e un codice alfanumerico che identifica la tua attività economica. La scelta del codice ATECO non e un dettaglio burocratico — ha conseguenze concrete e importanti:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Determina il <strong>coefficiente di redditività</strong> nel regime forfettario (e quindi quante tasse paghi)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Determina la <strong>gestione previdenziale INPS</strong> di appartenenza (Gestione Separata, Artigiani, Commercianti)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Determina se devi <strong>iscriverti alla Camera di Commercio</strong> (e pagare i relativi diritti annuali)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Influisce sulle <strong>agevolazioni e bandi</strong> a cui puoi accedere</span></li>
            </ul>
            <div className="bg-zinc-50 rounded-xl p-6 my-6 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>Esempio:</strong> un consulente marketing con codice ATECO 73.11.02 ha un coefficiente di redditività del 78%. Se fattura 40.000 euro, il reddito imponibile e 31.200 euro. Con il codice 62.02.00 (consulenza informatica, coefficiente 67%), lo stesso fatturato genera un reddito di 26.800 euro — con un risparmio di oltre 200 euro di tasse. Su 5 anni, la differenza può superare i 1.000 euro.
              </p>
            </div>
            <p>
              Non e un passaggio da fare da soli. Un errore nel codice ATECO si può correggere, ma costa tempo e burocrazia. Meglio scegliere bene dall&apos;inizio.
            </p>

            {/* Procedura */}
            <h2 id="procedura" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Procedura passo passo per aprire la Partita IVA
            </h2>
            <p>
              Ecco i passaggi completi per aprire la Partita IVA nel 2026:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">1.</span> <span><strong>Analisi preliminare:</strong> definisci l&apos;attività, scegli il regime fiscale e il codice ATECO. Questa e la fase in cui un commercialista fa la differenza maggiore.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">2.</span> <span><strong>Compilazione del modello AA9/12</strong> (per persone fisiche) o AA7/10 (per società). Il modello e disponibile sul sito dell&apos;Agenzia delle Entrate.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">3.</span> <span><strong>Invio telematico all&apos;Agenzia delle Entrate</strong> tramite i servizi online (Fisconline/Entratel) o tramite il commercialista. L&apos;attribuzione del numero di Partita IVA e immediata.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">4.</span> <span><strong>Iscrizione INPS:</strong> alla Gestione Separata (per professionisti senza cassa) o alla Gestione Artigiani/Commercianti (per attività artigianali o commerciali).</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">5.</span> <span><strong>Iscrizione alla Camera di Commercio</strong> (solo per attività commerciali e artigianali, non per professionisti).</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">6.</span> <span><strong>Eventuale SCIA al Comune</strong> (Segnalazione Certificata di Inizio Attività), se richiesta per il tipo di attività.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">7.</span> <span><strong>Attivazione fatturazione elettronica:</strong> obbligatoria per tutti dal 2024 (con alcune eccezioni per i forfettari sotto 25.000 euro di ricavi).</span></li>
            </ul>
            <p className="mt-4">
              L&apos;intera procedura può essere completata in <strong>2-5 giorni lavorativi</strong>. Con un commercialista online, non devi recarti in nessun ufficio.
            </p>

            {/* Costi */}
            <h2 id="costi" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Costi reali di apertura e gestione annuale
            </h2>
            <p>
              Ecco una stima realistica dei costi per aprire e gestire una Partita IVA nel 2026:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Voce</th>
                    <th className="text-left py-3 pl-4 font-semibold text-zinc-900">Costo</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4">Apertura Partita IVA (Agenzia Entrate)</td>
                    <td className="py-3 pl-4 font-medium">Gratuita</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4">Consulenza commercialista per apertura</td>
                    <td className="py-3 pl-4">Da 449 euro (bundle apertura + contabilità annuale)</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4">Diritto camerale annuo (se dovuto)</td>
                    <td className="py-3 pl-4">Circa 50-120 euro</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4">PEC obbligatoria</td>
                    <td className="py-3 pl-4">5-15 euro/anno</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4">Software fatturazione elettronica</td>
                    <td className="py-3 pl-4">Gratuito (Agenzia Entrate) o da 50 euro/anno</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Gestione contabile annuale (commercialista)</td>
                    <td className="py-3 pl-4">Indicativo 600-1.200 euro/anno (variabile per regime e volume)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Il costo maggiore non e l&apos;apertura in se, ma la <strong>gestione annuale</strong>: contributi INPS, imposte e compenso del commercialista. E fondamentale avere un quadro chiaro di questi costi prima di iniziare.
            </p>

            {/* INPS */}
            <h2 id="inps" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Contributi INPS: quanto si paga davvero
            </h2>
            <p>
              I contributi previdenziali sono spesso la voce più sottovalutata da chi apre la Partita IVA. Ecco come funzionano:
            </p>
            <p className="font-semibold text-zinc-900 mt-4">Gestione Separata INPS (professionisti senza cassa):</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Aliquota: <strong>26,07%</strong> del reddito imponibile (2026)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Nessun contributo fisso minimo — paghi solo se guadagni</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Scadenze: acconto e saldo con il modello Redditi PF (giugno e novembre)</span></li>
            </ul>
            <p className="font-semibold text-zinc-900 mt-6">Gestione Artigiani/Commercianti INPS:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Contributo fisso minimo: circa <strong>4.200 euro/anno</strong> (2026), indipendentemente dal reddito</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Aliquota aggiuntiva oltre il reddito minimale (circa 18.400 euro): ~24%</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>I forfettari possono chiedere una <strong>riduzione del 35%</strong> sui contributi</span></li>
            </ul>
            <div className="bg-zinc-50 rounded-xl p-6 my-6 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>Attenzione:</strong> la riduzione del 35% per forfettari e artigiani/commercianti va richiesta esplicitamente all&apos;INPS. Non e automatica. Molti contribuenti non la richiedono e pagano più del necessario per anni.
              </p>
            </div>

            {/* Errori */}
            <h2 id="errori" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              I 5 errori più costosi nell&apos;apertura della Partita IVA
            </h2>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">1.</span> <span><strong>Scegliere il codice ATECO sbagliato</strong> — Può costare centinaia di euro in più di tasse ogni anno, e correggerlo richiede tempo e burocrazia.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">2.</span> <span><strong>Non valutare i costi INPS</strong> — Molti neopartitari scoprono i contributi previdenziali solo al primo F24. Nel regime artigiani/commercianti, si pagano anche con reddito zero.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">3.</span> <span><strong>Scegliere il forfettario quando non conviene</strong> — Se i tuoi costi reali sono alti, il regime ordinario potrebbe farti pagare meno. Serve un&apos;analisi preventiva.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">4.</span> <span><strong>Dimenticare la PEC</strong> — E obbligatoria per tutte le Partite IVA. Se non la attivi, rischi sanzioni.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">5.</span> <span><strong>Non richiedere la riduzione INPS del 35%</strong> — Per i forfettari in gestione artigiani/commercianti, e un risparmio di oltre 1.400 euro all&apos;anno che va chiesto esplicitamente.</span></li>
            </ul>

            {/* Aprire online */}
            <h2 id="aprire-online" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Come aprire la Partita IVA online con un commercialista
            </h2>
            <p>
              Con A.T. Consulting Parma puoi aprire la Partita IVA interamente online, senza muoverti da casa. Ecco come funziona il nostro servizio:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">1.</span> <span><strong>Consulenza iniziale</strong> — Analizziamo la tua situazione, l&apos;attività che vuoi svolgere, i costi previsti e le tue prospettive di crescita</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">2.</span> <span><strong>Scelta del regime e del codice ATECO</strong> — Ti consigliamo la combinazione più vantaggiosa in base ai tuoi numeri reali, non in base a regole generiche</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">3.</span> <span><strong>Apertura e iscrizioni</strong> — Gestiamo noi l&apos;invio all&apos;Agenzia delle Entrate, l&apos;iscrizione INPS, la Camera di Commercio (se necessaria) e la PEC</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">4.</span> <span><strong>Attivazione fatturazione</strong> — Ti aiutiamo a configurare il software di fatturazione elettronica</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">5.</span> <span><strong>Supporto continuativo</strong> — Rimaniamo a disposizione per dubbi, scadenze e adempimenti successivi</span></li>
            </ul>
            <p className="mt-4">
              Il bundle Professionista forfettario (apertura + contabilità annuale + EFAT + dichiarazione redditi) parte da <strong>449 euro primo anno</strong>, rinnovo annuale o triennale a prezzo bloccato. L&apos;apertura si completa in 2-5 giorni lavorativi dalla firma del mandato.
            </p>

            {/* Link interni */}
            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/come-fare-730-online" className="text-[var(--color-accent)] hover:underline">Come fare il 730 online: guida completa 2026</Link> — se sei anche lavoratore dipendente</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/commercialista-online" className="text-[var(--color-accent)] hover:underline">Commercialista online: come sceglierlo e perché conviene</Link> — la guida alla scelta del professionista giusto</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/consulenza-fiscale" className="text-[var(--color-accent)] hover:underline">Consulenza fiscale</Link> — tutti i nostri servizi fiscali per professionisti e imprese</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/faq" className="text-[var(--color-accent)] hover:underline">Domande frequenti</Link> — risposte rapide su costi, scadenze e regime forfettario</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi aprire la Partita IVA senza pensieri?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Il nostro team di dottori commercialisti ti guida nella scelta del regime fiscale, del codice ATECO e gestisce tutta la pratica online. Bundle Professionista forfettario da 449 euro primo anno (apertura + contabilità annuale), interamente da remoto.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contatti" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                  Richiedi assistenza
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
