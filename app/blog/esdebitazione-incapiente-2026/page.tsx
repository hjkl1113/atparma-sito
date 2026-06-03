import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Esdebitazione del debitore incapiente 2026 | A.T. Parma",
  description:
    "Esdebitazione del debitore incapiente (art. 283 CCII): cancellare i debiti a zero per la persona fisica meritevole senza patrimonio. Requisiti, OCC, procedura.",
  alternates: {
    canonical: "/blog/esdebitazione-incapiente-2026",
  },
  openGraph: {
    title: "Esdebitazione del debitore incapiente 2026: cancellare i debiti a zero",
    description:
      "Esdebitazione del debitore incapiente (art. 283 CCII): cancellare i debiti a zero per la persona fisica meritevole senza patrimonio. Requisiti, OCC, procedura.",
    type: "article",
    publishedTime: "2026-06-03T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [
      {
        url: "https://www.atparma.com/og?slug=esdebitazione-incapiente-2026",
        width: 1200,
        height: 630,
        alt: "Esdebitazione del debitore incapiente 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.atparma.com/og?slug=esdebitazione-incapiente-2026"],
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
            headline: "Esdebitazione del debitore incapiente 2026: cancellare i debiti a zero",
            description:
              "Esdebitazione del debitore incapiente (art. 283 CCII): cancellare i debiti a zero per la persona fisica meritevole senza patrimonio. Requisiti, OCC, procedura.",
            image: "https://www.atparma.com/og?slug=esdebitazione-incapiente-2026",
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
            mainEntityOfPage: "https://www.atparma.com/blog/esdebitazione-incapiente-2026",
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
                name: "Cos'è l'esdebitazione del debitore incapiente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "È la procedura, disciplinata dall'art. 283 del Codice della Crisi (D.Lgs. 14/2019), che consente alla persona fisica meritevole, la quale non è in grado di offrire ai creditori alcuna utilità, diretta o indiretta, nemmeno in prospettiva futura, di liberarsi dei debiti residui senza alcun pagamento. È la cosiddetta esdebitazione a zero o fresh start. Può essere concessa una sola volta.",
                },
              },
              {
                "@type": "Question",
                name: "Chi può chiedere l'esdebitazione a zero?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La persona fisica meritevole che si trova in stato di sovraindebitamento e non dispone di alcun patrimonio o reddito da destinare ai creditori, neppure in prospettiva futura. Il requisito centrale è la meritevolezza: il beneficio è escluso in caso di malafede o frode, quando il sovraindebitamento è imputabile a colpa grave, oppure se il debitore ha già beneficiato in passato dell'esdebitazione incapiente.",
                },
              },
              {
                "@type": "Question",
                name: "Si può ottenere più di una volta?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. L'esdebitazione del debitore incapiente può essere concessa una sola volta. Chi l'ha già ottenuta non può richiederla di nuovo. Va distinta dal caso di chi, dopo una liquidazione controllata con esdebitazione ordinaria (art. 282 CCII), si trovi nuovamente in difficoltà: si tratta di istituti diversi, con presupposti diversi.",
                },
              },
              {
                "@type": "Question",
                name: "Cosa succede se in futuro miglioro la mia situazione economica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Per i quattro anni successivi al decreto di esdebitazione, se sopravvengono utilità rilevanti che consentano il soddisfacimento dei creditori in misura non inferiore al 10%, il debitore è tenuto al pagamento entro quella soglia o proporzione. Non sono considerate utilità rilevanti le somme necessarie al mantenimento dignitoso del debitore e della sua famiglia.",
                },
              },
              {
                "@type": "Question",
                name: "Quali debiti non vengono cancellati?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'esdebitazione libera dai debiti residui verso i creditori concorsuali anteriori, ma restano esclusi i debiti non esdebitabili previsti dalla legge: gli obblighi di mantenimento e alimentari, i debiti da risarcimento dei danni da fatto illecito extracontrattuale, le sanzioni penali e amministrative pecuniarie non accessorie a debiti estinti.",
                },
              },
              {
                "@type": "Question",
                name: "Che differenza c'è con l'esdebitazione dopo la liquidazione controllata?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'esdebitazione ordinaria dell'art. 282 CCII opera, anche di diritto, a conclusione della liquidazione controllata, dopo tre anni, quando un patrimonio o un reddito da liquidare c'è stato. L'art. 283 incapiente è invece la via per chi non ha nulla da offrire e non avrebbe quindi alcuna utilità in una liquidazione: si parte direttamente con la cancellazione a zero, senza una fase liquidatoria.",
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
            Esdebitazione del debitore incapiente 2026: cancellare i debiti a zero
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/og?slug=esdebitazione-incapiente-2026" alt="Esdebitazione del debitore incapiente 2026" fill unoptimized className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Esistono situazioni in cui i debiti hanno superato ogni possibilità di rientro: nessun patrimonio, nessun reddito aggredibile, nessuna prospettiva concreta di pagare. Per la persona fisica onesta che si trova in questa condizione, il Codice della Crisi prevede una via di uscita radicale e dignitosa: l&apos;<strong>esdebitazione del debitore incapiente</strong>, disciplinata dall&apos;art. 283 del D.Lgs. 14/2019. È la cosiddetta <strong>esdebitazione a zero</strong>, il <em>fresh start</em> che permette di liberarsi dei debiti residui senza pagare nulla ai creditori.
            </p>
            <p>
              Non è un condono né una scorciatoia. È uno strumento riservato a chi ha agito con correttezza e non ha alcuna utilità da offrire, pensato per restituire alla persona la possibilità di ricominciare. In questa guida aggiornata al 2026 spieghiamo in cosa consiste, chi può accedervi, il ruolo dell&apos;OCC, l&apos;obbligo sui quattro anni successivi, quali debiti si cancellano e quali no, e la differenza con l&apos;esdebitazione che segue la liquidazione controllata.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#cosa-e" className="text-[var(--color-accent)] hover:underline">Cos&apos;è l&apos;esdebitazione del debitore incapiente (art. 283)</a></li>
                <li><a href="#requisiti" className="text-[var(--color-accent)] hover:underline">Chi può accedere: i requisiti di meritevolezza</a></li>
                <li><a href="#occ" className="text-[var(--color-accent)] hover:underline">Il ruolo dell&apos;OCC e la procedura</a></li>
                <li><a href="#sopravvenienze" className="text-[var(--color-accent)] hover:underline">L&apos;obbligo sui 4 anni successivi (sopravvenienze)</a></li>
                <li><a href="#quali-debiti" className="text-[var(--color-accent)] hover:underline">Quali debiti si cancellano e quali no</a></li>
                <li><a href="#vs-282" className="text-[var(--color-accent)] hover:underline">Differenza con l&apos;esdebitazione dopo la liquidazione controllata (art. 282)</a></li>
                <li><a href="#una-sola-volta" className="text-[var(--color-accent)] hover:underline">Una sola volta: il tema della seconda esdebitazione</a></li>
                <li><a href="#faq" className="text-[var(--color-accent)] hover:underline">Domande frequenti</a></li>
                <li><a href="#approfondimenti" className="text-[var(--color-accent)] hover:underline">Approfondimenti correlati</a></li>
              </ul>
            </div>

            {/* Cosa è */}
            <h2 id="cosa-e" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cos&apos;è l&apos;esdebitazione del debitore incapiente (art. 283)
            </h2>
            <p>
              L&apos;esdebitazione del debitore incapiente è disciplinata dall&apos;<strong>art. 283 del Codice della Crisi d&apos;Impresa e dell&apos;Insolvenza</strong> (D.Lgs. 14/2019). È rivolta alla <strong>persona fisica meritevole</strong> che non è in grado di offrire ai creditori alcuna utilità, diretta o indiretta, <strong>nemmeno in prospettiva futura</strong>. In altre parole: chi non ha un patrimonio da liquidare, non ha un reddito aggredibile e non potrà ragionevolmente averne nel breve periodo.
            </p>
            <p>
              Per questa categoria di debitori il legislatore ha previsto la possibilità di una <strong>cancellazione integrale dei debiti residui senza alcun pagamento</strong>. È la ragione per cui si parla di esdebitazione &laquo;a zero&raquo; o di <em>fresh start</em>: il debitore esce dalla spirale del sovraindebitamento e recupera la possibilità di tornare a una vita economica normale, senza il peso di obbligazioni che non sarebbe comunque mai in grado di onorare.
            </p>
            <p>
              <strong>Carattere eccezionale.</strong> Proprio perché incide profondamente sui diritti dei creditori, l&apos;esdebitazione incapiente è uno strumento dai presupposti rigorosi e può essere <strong>concessa una sola volta</strong> nella vita del debitore. Non è una procedura ripetibile: chi ne ha già beneficiato non può richiederla nuovamente.
            </p>

            {/* Requisiti */}
            <h2 id="requisiti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Chi può accedere: i requisiti di meritevolezza
            </h2>
            <p>
              Il requisito centrale, attorno al quale ruota l&apos;intera procedura, è la <strong>meritevolezza</strong> del debitore. Il beneficio non è un automatismo: il giudice valuta la condotta complessiva della persona e concede l&apos;esdebitazione solo a chi ha agito con correttezza. In particolare, il beneficio è <strong>escluso</strong> quando:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>C&apos;è malafede o frode</strong>: il debitore ha agito in modo scorretto, ha occultato beni, ha aggravato volontariamente la propria posizione o ha danneggiato i creditori</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Il sovraindebitamento è imputabile a colpa grave</strong>: l&apos;indebitamento deriva da una condotta gravemente imprudente o negligente, non da circostanze subite</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Il debitore ha già beneficiato dell&apos;esdebitazione incapiente</strong> in passato: trattandosi di un beneficio &laquo;una tantum&raquo;, non è ripetibile</span></li>
            </ul>
            <p>
              La meritevolezza, in sostanza, distingue chi è caduto nel sovraindebitamento per cause non dipendenti da una propria condotta scorretta (perdita del lavoro, malattia, crisi familiari, eventi economici esterni) da chi ha contribuito in modo colpevole o doloso al proprio dissesto. La prima categoria può accedere alla cancellazione a zero; la seconda no.
            </p>

            {/* OCC */}
            <h2 id="occ" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Il ruolo dell&apos;OCC e la procedura
            </h2>
            <p>
              L&apos;esdebitazione del debitore incapiente non si chiede &laquo;da soli&raquo;: si accede tramite l&apos;<strong>OCC, l&apos;Organismo di Composizione della Crisi</strong>. Il debitore presenta la domanda con l&apos;ausilio dell&apos;OCC, che nomina un <strong>gestore della crisi</strong> incaricato di seguire la procedura e di garantire al giudice la solidità della richiesta.
            </p>
            <p>
              <strong>La relazione particolareggiata.</strong> Il cuore tecnico della procedura è la relazione che il gestore nominato è chiamato a redigere. Si tratta di una <strong>relazione particolareggiata</strong> che, in sintesi, deve dare conto di:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Le cause dell&apos;indebitamento</strong>: come e perché il debitore è arrivato alla situazione di sovraindebitamento</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>La meritevolezza del debitore</strong>: la valutazione della sua condotta rispetto ai presupposti di legge</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>L&apos;assenza di atti in frode</strong> ai creditori compiuti dal debitore</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>L&apos;indicazione di eventuali atti del debitore impugnati dai creditori</strong>, con il relativo stato</span></li>
            </ul>
            <p>
              <strong>Il decreto del giudice.</strong> Sulla base della domanda e della relazione, l&apos;esdebitazione viene concessa dal giudice con <strong>decreto</strong>. Si tratta di un provvedimento motivato che riconosce la sussistenza dei presupposti e dispone la liberazione del debitore dai debiti residui.
            </p>
            <p>
              <strong>L&apos;opposizione dei creditori.</strong> I creditori non restano privi di tutela: contro il decreto possono proporre <strong>opposizione o reclamo</strong>, facendo valere le proprie ragioni, ad esempio l&apos;esistenza di atti in frode o l&apos;insussistenza della meritevolezza. È il contraddittorio che assicura l&apos;equilibrio della procedura.
            </p>

            {/* Sopravvenienze */}
            <h2 id="sopravvenienze" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              L&apos;obbligo sui 4 anni successivi (sopravvenienze)
            </h2>
            <p>
              La cancellazione a zero non è del tutto incondizionata nel tempo. La legge prevede un <strong>obbligo sulle sopravvenienze</strong> che vale per i <strong>quattro anni successivi al decreto</strong> di esdebitazione. È il meccanismo che bilancia il sacrificio dei creditori con un eventuale miglioramento della situazione del debitore.
            </p>
            <p>
              <strong>Come funziona.</strong> Se, nei quattro anni successivi al decreto, <strong>sopravvengono utilità rilevanti</strong> che consentano il soddisfacimento dei creditori in misura <strong>non inferiore al 10%</strong>, il debitore è tenuto al pagamento entro quella soglia o proporzione. Non si tratta quindi di pagare di nuovo tutto il debito: l&apos;obbligo opera nei limiti dell&apos;utilità sopravvenuta e della soglia di legge.
            </p>
            <p>
              <strong>Cosa non conta.</strong> Un punto fondamentale, a tutela della dignità della persona: le <strong>utilità rilevanti non comprendono ciò che serve al mantenimento dignitoso del debitore e della sua famiglia</strong>. Un modesto miglioramento del reddito, necessario a vivere in modo dignitoso, non fa scattare l&apos;obbligo di pagamento. Solo le utilità eccedenti e realmente rilevanti rientrano nel calcolo.
            </p>
            <p>
              In concreto, per quattro anni il debitore esdebitato deve comportarsi con correttezza: se eredita, vince una somma significativa o vede crescere in modo rilevante le proprie disponibilità oltre il fabbisogno di vita, è chiamato a destinare ai creditori quanto previsto. Trascorsi i quattro anni senza sopravvenienze rilevanti, la liberazione diventa definitiva e stabile.
            </p>

            {/* Quali debiti */}
            <h2 id="quali-debiti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quali debiti si cancellano e quali no
            </h2>
            <p>
              Vale la <strong>regola generale dell&apos;esdebitazione</strong>: il debitore viene liberato dai <strong>debiti residui verso i creditori concorsuali anteriori</strong>. Si tratta delle obbligazioni maturate prima dell&apos;apertura della procedura: esposizioni verso banche e finanziarie, fornitori, scoperti, prestiti personali, cartelle e gran parte dei debiti accumulati.
            </p>
            <p>
              <strong>I debiti che restano.</strong> La legge individua però una serie di <strong>debiti non esdebitabili</strong>, che sopravvivono alla procedura e continuano a essere dovuti. In particolare restano esclusi dalla cancellazione:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Gli obblighi di mantenimento e alimentari</strong>: assegni per i figli, mantenimento del coniuge, obbligazioni alimentari verso i familiari</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>I debiti da risarcimento dei danni da fatto illecito extracontrattuale</strong>: ad esempio i danni cagionati a terzi al di fuori di un rapporto contrattuale</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Le sanzioni penali e amministrative pecuniarie</strong> che non siano accessorie a debiti estinti per effetto dell&apos;esdebitazione</span></li>
            </ul>
            <p>
              È quindi essenziale, già in fase di analisi preliminare, distinguere con precisione la natura di ciascun debito: solo così si può capire quale parte dell&apos;esposizione verrà effettivamente cancellata e quale, invece, continuerà a gravare sul debitore anche dopo il decreto.
            </p>

            {/* CTA intermedio */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>Non sai se la tua situazione rientra nell&apos;esdebitazione a zero?</strong> La valutazione della meritevolezza e della natura dei singoli debiti è tecnica e va fatta caso per caso. Il nostro studio affianca i privati sovraindebitati nel rapporto con l&apos;OCC, nella ricostruzione delle cause dell&apos;indebitamento e nella predisposizione della domanda.
              </p>
            </div>

            {/* Vs 282 */}
            <h2 id="vs-282" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Differenza con l&apos;esdebitazione dopo la liquidazione controllata (art. 282)
            </h2>
            <p>
              Per orientarsi è importante non confondere due esdebitazioni diverse previste dal Codice della Crisi. La distinzione dipende da una sola domanda: <strong>il debitore ha qualcosa da liquidare oppure no?</strong>
            </p>
            <p>
              <strong>Esdebitazione ordinaria (art. 282 CCII).</strong> Opera, anche di diritto, a conclusione della <strong>liquidazione controllata</strong>, dopo <strong>tre anni</strong>. È la via di chi un patrimonio o un reddito da liquidare lo ha avuto: i creditori vengono soddisfatti, anche solo in parte, con quanto ricavato dalla liquidazione, e al termine il debitore viene liberato dai debiti residui non pagati.
            </p>
            <p>
              <strong>Esdebitazione del debitore incapiente (art. 283 CCII).</strong> È invece la via per chi <strong>non ha nulla da offrire</strong> e che, quindi, non avrebbe alcuna utilità da far valere in una liquidazione. Non avendo senso aprire una liquidazione controllata su un patrimonio inesistente, il legislatore consente di accedere direttamente alla cancellazione a zero, senza una fase liquidatoria che non porterebbe nulla ai creditori.
            </p>
            <p>
              In sintesi: l&apos;art. 282 chiude un percorso liquidatorio durato anni; l&apos;art. 283 evita un percorso liquidatorio inutile e arriva subito al risultato. La scelta tra i due strumenti, però, non è libera: dipende dall&apos;effettiva consistenza del patrimonio e va valutata tecnicamente con l&apos;OCC.
            </p>

            {/* Una sola volta */}
            <h2 id="una-sola-volta" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Una sola volta: il tema della seconda esdebitazione
            </h2>
            <p>
              L&apos;esdebitazione incapiente è un beneficio <strong>&laquo;una tantum&raquo;</strong>: chi l&apos;ha già ottenuta <strong>non può richiederla di nuovo</strong>. La ragione è coerente con la sua natura eccezionale: si tratta di una cancellazione totale a fronte di nessun pagamento, e il legislatore ha voluto evitare che diventi uno strumento ripetibile.
            </p>
            <p>
              <strong>La distinzione da chiarire.</strong> Questo va però tenuto distinto dal caso, diverso, di chi ha già concluso una <strong>liquidazione controllata con esdebitazione ordinaria ex art. 282</strong> e, in seguito, si ritrova nuovamente in difficoltà economica. Si tratta di <strong>istituti diversi, con presupposti diversi</strong>: aver beneficiato dell&apos;esdebitazione ordinaria al termine di una liquidazione non equivale ad aver consumato il beneficio &laquo;una tantum&raquo; dell&apos;esdebitazione incapiente.
            </p>
            <p>
              Detto in modo semplice per il lettore: la regola del &laquo;una sola volta&raquo; riguarda specificamente l&apos;esdebitazione del debitore incapiente dell&apos;art. 283. Chi non l&apos;ha mai utilizzata, anche se in passato ha attraversato una liquidazione controllata con esdebitazione ordinaria, va valutato come caso a sé, sui presupposti propri dell&apos;art. 283. Proprio perché la materia è delicata, è prudente affidarsi a un&apos;analisi tecnica prima di muoversi.
            </p>

            {/* FAQ */}
            <h2 id="faq" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Domande frequenti
            </h2>
            <p className="font-semibold text-zinc-900 mt-6">Cos&apos;è l&apos;esdebitazione del debitore incapiente?</p>
            <p>
              È la procedura, disciplinata dall&apos;art. 283 del Codice della Crisi (D.Lgs. 14/2019), che consente alla persona fisica meritevole, la quale non è in grado di offrire ai creditori alcuna utilità, diretta o indiretta, nemmeno in prospettiva futura, di liberarsi dei debiti residui senza alcun pagamento. È la cosiddetta esdebitazione a zero o fresh start. Può essere concessa una sola volta.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Chi può chiedere l&apos;esdebitazione a zero?</p>
            <p>
              La persona fisica meritevole che si trova in stato di sovraindebitamento e non dispone di alcun patrimonio o reddito da destinare ai creditori, neppure in prospettiva futura. Il requisito centrale è la meritevolezza: il beneficio è escluso in caso di malafede o frode, quando il sovraindebitamento è imputabile a colpa grave, oppure se il debitore ha già beneficiato in passato dell&apos;esdebitazione incapiente.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Si può ottenere più di una volta?</p>
            <p>
              No. L&apos;esdebitazione del debitore incapiente può essere concessa una sola volta. Chi l&apos;ha già ottenuta non può richiederla di nuovo. Va distinta dal caso di chi, dopo una liquidazione controllata con esdebitazione ordinaria (art. 282 CCII), si trovi nuovamente in difficoltà: si tratta di istituti diversi, con presupposti diversi.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Cosa succede se in futuro miglioro la mia situazione economica?</p>
            <p>
              Per i quattro anni successivi al decreto di esdebitazione, se sopravvengono utilità rilevanti che consentano il soddisfacimento dei creditori in misura non inferiore al 10%, il debitore è tenuto al pagamento entro quella soglia o proporzione. Non sono considerate utilità rilevanti le somme necessarie al mantenimento dignitoso del debitore e della sua famiglia.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Quali debiti non vengono cancellati?</p>
            <p>
              L&apos;esdebitazione libera dai debiti residui verso i creditori concorsuali anteriori, ma restano esclusi i debiti non esdebitabili previsti dalla legge: gli obblighi di mantenimento e alimentari, i debiti da risarcimento dei danni da fatto illecito extracontrattuale, le sanzioni penali e amministrative pecuniarie non accessorie a debiti estinti.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Che differenza c&apos;è con l&apos;esdebitazione dopo la liquidazione controllata?</p>
            <p>
              L&apos;esdebitazione ordinaria dell&apos;art. 282 CCII opera, anche di diritto, a conclusione della liquidazione controllata, dopo tre anni, quando un patrimonio o un reddito da liquidare c&apos;è stato. L&apos;art. 283 incapiente è invece la via per chi non ha nulla da offrire e non avrebbe quindi alcuna utilità in una liquidazione: si parte direttamente con la cancellazione a zero, senza una fase liquidatoria.
            </p>

            {/* Approfondimenti */}
            <h2 id="approfondimenti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <p>
              L&apos;esdebitazione del debitore incapiente è una delle vie previste dal Codice della Crisi per le persone fisiche sovraindebitate. Per inquadrarla nel sistema complessivo delle procedure, e per capire qual è lo strumento adatto alla tua situazione, ti suggeriamo questi approfondimenti:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/sovraindebitamento-2026-come-uscire-dai-debiti" className="text-[var(--color-accent)] hover:underline">Sovraindebitamento 2026: come uscire dai debiti</Link> &mdash; la guida madre alle procedure CCII per le persone fisiche</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/concordato-minore-2026" className="text-[var(--color-accent)] hover:underline">Concordato minore 2026</Link> &mdash; lo strumento per imprenditori minori e professionisti</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/crisi-di-impresa" className="text-[var(--color-accent)] hover:underline">Servizio crisi d&apos;impresa</Link> &mdash; la pagina dello studio dedicata alle procedure di crisi e sovraindebitamento</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/contatti" className="text-[var(--color-accent)] hover:underline">Contattaci</Link> &mdash; valutazione preliminare riservata per chi si trova in stato di sovraindebitamento</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi capire se puoi accedere all&apos;esdebitazione a zero?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Sappiamo quanto pesi convivere con debiti che non si riescono più a pagare. Il nostro studio affianca i privati sovraindebitati con riservatezza e competenza: valutiamo la meritevolezza, ricostruiamo le cause dell&apos;indebitamento e ti assistiamo nel rapporto con l&apos;OCC per la domanda di esdebitazione. Una prima valutazione serve a capire se questa è la strada giusta per te.
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
