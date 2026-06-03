import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Concordato semplificato 2026: liquidazione | A.T. Parma",
  description:
    "Concordato semplificato per la liquidazione del patrimonio (art. 25-sexies CCII): sbocco della composizione negoziata, niente voto creditori, ruolo ausiliario, omologazione.",
  alternates: {
    canonical: "/blog/concordato-semplificato-liquidazione-2026",
  },
  openGraph: {
    title: "Concordato semplificato 2026: liquidazione dopo la composizione negoziata",
    description:
      "Concordato semplificato per la liquidazione del patrimonio (art. 25-sexies CCII): sbocco della composizione negoziata, niente voto creditori, ruolo ausiliario, omologazione.",
    type: "article",
    publishedTime: "2026-06-03T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [
      {
        url: "https://www.atparma.com/og?slug=concordato-semplificato-liquidazione-2026",
        width: 1200,
        height: 630,
        alt: "Concordato semplificato 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.atparma.com/og?slug=concordato-semplificato-liquidazione-2026"],
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
            headline: "Concordato semplificato 2026: liquidazione dopo la composizione negoziata",
            description:
              "Concordato semplificato per la liquidazione del patrimonio (art. 25-sexies CCII): sbocco della composizione negoziata, niente voto creditori, ruolo ausiliario, omologazione.",
            image: "https://www.atparma.com/og?slug=concordato-semplificato-liquidazione-2026",
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
            mainEntityOfPage: "https://www.atparma.com/blog/concordato-semplificato-liquidazione-2026",
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
                name: "Cos'è il concordato semplificato?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "È il concordato semplificato per la liquidazione del patrimonio, disciplinato dall'art. 25-sexies del Codice della Crisi (D.Lgs. 14/2019), aggiornato dal Correttivo-ter D.Lgs. 136/2024. È una procedura esclusivamente liquidatoria che costituisce uno sbocco specifico della composizione negoziata: l'imprenditore propone ai creditori la liquidazione del patrimonio quando le trattative, pur condotte con correttezza e buona fede, non hanno prodotto un accordo. La caratteristica distintiva è l'assenza del voto dei creditori.",
                },
              },
              {
                "@type": "Question",
                name: "Quando si può accedere al concordato semplificato?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vi si accede solo a valle di una composizione negoziata, quando l'esperto, nella relazione finale, dichiara che le trattative si sono svolte secondo correttezza e buona fede ma non hanno avuto esito positivo e che le soluzioni dell'art. 23 CCII non sono praticabili. La proposta di concordato semplificato deve essere depositata entro 60 giorni dalla comunicazione di tale relazione finale dell'esperto. Non è quindi una procedura attivabile in autonomia: presuppone una composizione negoziata realmente tentata.",
                },
              },
              {
                "@type": "Question",
                name: "I creditori votano nel concordato semplificato?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. È la differenza più rilevante rispetto al concordato preventivo: nel concordato semplificato non è previsto il voto dei creditori. I creditori non approvano la proposta con una votazione, ma possono proporre opposizione all'omologazione, dando luogo a un contraddittorio davanti al Tribunale. La tutela dei creditori passa quindi dall'opposizione e dal controllo del giudice, non da un'adunanza con votazione.",
                },
              },
              {
                "@type": "Question",
                name: "Che differenza c'è col concordato preventivo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le differenze principali sono quattro. Primo: nel concordato semplificato non c'è il voto dei creditori, mentre nel concordato preventivo è richiesto. Secondo: il concordato semplificato è solo liquidatorio, non in continuità. Terzo: presuppone una composizione negoziata fallita, mentre il concordato preventivo è una procedura autonoma. Quarto: il Tribunale nomina un ausiliario che redige un parere, invece del commissario giudiziale e dell'adunanza dei creditori del concordato preventivo.",
                },
              },
              {
                "@type": "Question",
                name: "Cosa fa l'ausiliario nominato dal Tribunale?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nel concordato semplificato il Tribunale nomina un ausiliario (con richiamo all'art. 68 CCII) che redige un parere sulla proposta. Acquisita la relazione finale dell'esperto e il parere dell'ausiliario, il Tribunale fissa l'udienza. L'ausiliario svolge quindi una funzione di ausilio tecnico-valutativo al giudice, distinta dal ruolo del commissario giudiziale del concordato preventivo: non c'è adunanza dei creditori né votazione da gestire.",
                },
              },
              {
                "@type": "Question",
                name: "Cosa possono fare i creditori contrari?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "I creditori non votano, ma possono proporre opposizione all'omologazione del concordato semplificato, attivando un contraddittorio davanti al Tribunale. Il giudice omologa solo se il contraddittorio è regolare, se la proposta non arreca pregiudizio ai creditori rispetto all'alternativa della liquidazione giudiziale e se comunque assicura un'utilità a ciascun creditore. L'opposizione è dunque lo strumento di tutela del creditore dissenziente.",
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
            Concordato semplificato 2026: liquidazione dopo la composizione negoziata
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/og?slug=concordato-semplificato-liquidazione-2026" alt="Concordato semplificato 2026" fill unoptimized className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Quando la <strong>composizione negoziata della crisi</strong> non si chiude con un accordo, il Codice della Crisi non lascia l&apos;imprenditore davanti al solo fallimento disordinato. Tra gli sbocchi possibili c&apos;è il <strong>concordato semplificato per la liquidazione del patrimonio</strong>, disciplinato dall&apos;art. 25-sexies del CCII (D.Lgs. 14/2019) e aggiornato dal Correttivo-ter (D.Lgs. 136/2024). È uno strumento dalle caratteristiche peculiari: liquidatorio, accessibile solo a valle di una trattativa condotta in buona fede e, soprattutto, privo del voto dei creditori.
            </p>
            <p>
              In questa guida ricostruiamo cos&apos;è il concordato semplificato, qual è il presupposto che ne consente l&apos;accesso, perché manca il voto dei creditori, il ruolo dell&apos;ausiliario nominato dal Tribunale e i criteri di omologazione, le modalità liquidatorie (cessione dei beni o assuntore), il confronto puntuale col concordato preventivo, i suoi vantaggi e i suoi limiti. È un articolo pensato per PMI, amministratori e advisor che escono da una composizione negoziata senza accordo.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#cosa-e" className="text-[var(--color-accent)] hover:underline">Cos&apos;è il concordato semplificato</a></li>
                <li><a href="#presupposto" className="text-[var(--color-accent)] hover:underline">Il presupposto: la composizione negoziata fallita</a></li>
                <li><a href="#no-voto" className="text-[var(--color-accent)] hover:underline">Perché non c&apos;è il voto dei creditori</a></li>
                <li><a href="#ausiliario" className="text-[var(--color-accent)] hover:underline">Il ruolo dell&apos;ausiliario e l&apos;omologazione</a></li>
                <li><a href="#liquidazione" className="text-[var(--color-accent)] hover:underline">Liquidazione o assuntore</a></li>
                <li><a href="#vs-preventivo" className="text-[var(--color-accent)] hover:underline">Concordato semplificato vs concordato preventivo</a></li>
                <li><a href="#vantaggi-limiti" className="text-[var(--color-accent)] hover:underline">Vantaggi e limiti</a></li>
                <li><a href="#faq" className="text-[var(--color-accent)] hover:underline">Domande frequenti</a></li>
                <li><a href="#approfondimenti" className="text-[var(--color-accent)] hover:underline">Approfondimenti correlati</a></li>
              </ul>
            </div>

            {/* Cosa è */}
            <h2 id="cosa-e" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cos&apos;è il concordato semplificato
            </h2>
            <p>
              Il concordato semplificato per la liquidazione del patrimonio è una procedura concorsuale <strong>esclusivamente liquidatoria</strong> prevista dall&apos;art. 25-sexies CCII. Con esso l&apos;imprenditore propone ai creditori la liquidazione del proprio patrimonio per soddisfarli secondo un ordine e un riparto definiti, sotto il controllo del Tribunale. Non è una procedura di risanamento: l&apos;impresa, all&apos;esito, cessa.
            </p>
            <p>
              <strong>Caratteristica distintiva.</strong> A differenza del concordato preventivo, il concordato semplificato <strong>non prevede il voto dei creditori</strong>. La proposta non è sottoposta ad approvazione tramite votazione: i creditori possono soltanto proporre opposizione all&apos;omologazione, instaurando un contraddittorio davanti al giudice. La tutela passa quindi dal controllo giurisdizionale e dall&apos;opposizione, non dall&apos;adunanza.
            </p>
            <p>
              <strong>Aggiornamento normativo.</strong> La disciplina è stata ridefinita dal Correttivo-ter (D.Lgs. 136/2024), che ha razionalizzato il rapporto tra composizione negoziata e concordato semplificato e precisato i presupposti di accesso e i criteri di omologazione. Lo strumento resta un&apos;uscita ordinata, alternativa alla liquidazione giudiziale &laquo;subìta&raquo;.
            </p>

            {/* Presupposto */}
            <h2 id="presupposto" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Il presupposto: la composizione negoziata fallita
            </h2>
            <p>
              Il concordato semplificato non è una procedura attivabile in autonomia. Costituisce uno <strong>sbocco esclusivo della composizione negoziata</strong>: vi si accede soltanto a valle di una trattativa realmente tentata. Il presupposto è puntuale e ruota attorno alla relazione finale dell&apos;esperto.
            </p>
            <p>
              <strong>Condizioni di accesso.</strong> L&apos;imprenditore può proporre il concordato semplificato solo quando l&apos;esperto, nella relazione finale, dichiara che:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Le trattative si sono svolte secondo correttezza e buona fede</strong> ma non hanno avuto esito positivo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Le soluzioni individuate dall&apos;art. 23 CCII non sono praticabili</strong>: non è possibile alcuno degli esiti tipici della composizione negoziata</span></li>
            </ul>
            <p>
              <strong>Termine di deposito.</strong> La proposta di concordato semplificato deve essere depositata <strong>entro 60 giorni dalla comunicazione della relazione finale dell&apos;esperto</strong>. È un termine breve, che impone all&apos;imprenditore e ai suoi advisor di preparare per tempo la documentazione, idealmente già durante la fase conclusiva della composizione negoziata.
            </p>
            <p>
              Questo legame stringente con la composizione negoziata ha una conseguenza pratica: lo strumento premia chi ha attivato per tempo la trattativa e l&apos;ha condotta in buona fede. Chi non ha tentato una composizione negoziata seria non ha accesso al concordato semplificato.
            </p>

            {/* No voto */}
            <h2 id="no-voto" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Perché non c&apos;è il voto dei creditori
            </h2>
            <p>
              L&apos;assenza del voto è la cifra distintiva del concordato semplificato. Nel concordato preventivo i creditori, suddivisi in classi, votano la proposta e devono raggiungere determinate maggioranze. Nel concordato semplificato questa fase non esiste: i creditori <strong>non votano</strong>.
            </p>
            <p>
              <strong>La ratio.</strong> Lo strumento nasce per dare un&apos;uscita ordinata a chi ha già tentato la trattativa coi creditori nella composizione negoziata. Aver svolto quella fase &mdash; sotto la regia di un esperto indipendente, in correttezza e buona fede &mdash; giustifica la rinuncia a una nuova votazione: il confronto coi creditori c&apos;è già stato. Si evita così che il dissenso di pochi creditori blocchi una liquidazione comunque conveniente per la massa.
            </p>
            <p>
              <strong>La tutela dei creditori.</strong> L&apos;assenza del voto non lascia i creditori senza difesa. Essi possono proporre <strong>opposizione all&apos;omologazione</strong>, instaurando un contraddittorio davanti al Tribunale. Il controllo si sposta dunque sul piano giurisdizionale: è il giudice, all&apos;esito del contraddittorio, a verificare che la proposta non arrechi pregiudizio e assicuri un&apos;utilità a ciascun creditore.
            </p>

            {/* Ausiliario */}
            <h2 id="ausiliario" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Il ruolo dell&apos;ausiliario e l&apos;omologazione
            </h2>
            <p>
              Depositata la proposta, il Tribunale non nomina un commissario giudiziale come nel concordato preventivo, ma un <strong>ausiliario</strong> (con richiamo all&apos;art. 68 CCII) che redige un <strong>parere</strong> sulla proposta. È una figura di ausilio tecnico-valutativo al giudice.
            </p>
            <p>
              <strong>L&apos;iter.</strong> Acquisita la relazione finale dell&apos;esperto e il parere dell&apos;ausiliario, il Tribunale fissa l&apos;udienza. Si apre la fase del contraddittorio, nella quale i creditori che intendono opporsi all&apos;omologazione possono far valere le proprie ragioni.
            </p>
            <p>
              <strong>I criteri di omologazione.</strong> Il Tribunale <strong>omologa</strong> il concordato semplificato se ricorrono congiuntamente queste condizioni:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Il contraddittorio è regolare</strong>: i creditori sono stati posti in condizione di interloquire e proporre opposizione</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>La proposta non arreca pregiudizio ai creditori</strong> rispetto all&apos;alternativa della liquidazione giudiziale</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>La proposta assicura comunque un&apos;utilità a ciascun creditore</strong></span></li>
            </ul>
            <p>
              Questi criteri sono il cuore del giudizio: l&apos;imprenditore deve dimostrare che la liquidazione concordataria è almeno equivalente, per i creditori, a quella che otterrebbero dalla liquidazione giudiziale, e che a ognuno è riservata un&apos;utilità. È il controllo di merito che sostituisce il voto.
            </p>

            {/* CTA intermedio */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>La tua composizione negoziata si sta chiudendo senza accordo?</strong> Il termine per il concordato semplificato è di soli 60 giorni dalla relazione finale dell&apos;esperto. Il nostro studio assiste imprenditori e advisor nella valutazione di fattibilità, nella predisposizione della proposta e nella gestione del contraddittorio davanti al Tribunale.
              </p>
            </div>

            {/* Liquidazione */}
            <h2 id="liquidazione" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Liquidazione o assuntore
            </h2>
            <p>
              Il concordato semplificato è una procedura <strong>solo liquidatoria</strong>: non può prevedere la continuità aziendale. L&apos;impresa, all&apos;esito, cessa. La proposta può però strutturare la liquidazione in due modi alternativi.
            </p>
            <p>
              <strong>1. Cessione dei beni.</strong> Il patrimonio dell&apos;imprenditore viene liquidato e il ricavato distribuito ai creditori secondo l&apos;ordine delle cause di prelazione. È la modalità tipica della liquidazione concordataria.
            </p>
            <p>
              <strong>2. Attribuzione a un assuntore.</strong> In alternativa, la proposta può prevedere l&apos;attribuzione delle attività (o di parte di esse) a un assuntore, ossia un soggetto terzo che si accolla l&apos;obbligo di soddisfare i creditori nei termini proposti, subentrando in tutto o in parte nei rapporti. È una via utile quando esiste un interessato a rilevare il complesso aziendale o singoli asset.
            </p>
            <p>
              <strong>Il liquidatore.</strong> In ogni caso il Tribunale nomina un <strong>liquidatore</strong>, incaricato di eseguire il programma di liquidazione e di curare il riparto in favore dei creditori. È la figura che dà attuazione concreta al concordato omologato.
            </p>

            {/* Vs preventivo */}
            <h2 id="vs-preventivo" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Concordato semplificato vs concordato preventivo
            </h2>
            <p>
              Pur condividendo la parola &laquo;concordato&raquo;, i due strumenti hanno presupposti, struttura e organi diversi. Comprenderne le differenze è essenziale per scegliere la via corretta in uscita da una crisi.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900"></th>
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Concordato semplificato</th>
                    <th className="text-left py-3 font-semibold text-zinc-900">Concordato preventivo</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Voto creditori</td>
                    <td className="py-3 pr-4">Non previsto (solo opposizione)</td>
                    <td className="py-3">Richiesto (maggioranze legali)</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Natura</td>
                    <td className="py-3 pr-4">Solo liquidatoria</td>
                    <td className="py-3">Liquidatoria o in continuità</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Presupposto</td>
                    <td className="py-3 pr-4">Composizione negoziata fallita</td>
                    <td className="py-3">Procedura autonoma</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Continuità / liquidazione</td>
                    <td className="py-3 pr-4">L&apos;impresa cessa</td>
                    <td className="py-3">Possibile salvaguardia dell&apos;attività</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Organo nominato</td>
                    <td className="py-3 pr-4">Ausiliario + liquidatore</td>
                    <td className="py-3">Commissario giudiziale + adunanza</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Quando sceglierlo</td>
                    <td className="py-3 pr-4">Dopo una CN in buona fede senza accordo</td>
                    <td className="py-3">Crisi gestibile in via autonoma, serve vincolare i creditori</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-500 italic">
              Schema sintetico. La scelta dello strumento richiede una valutazione tecnica caso per caso: il concordato semplificato è praticabile solo come sbocco di una composizione negoziata realmente tentata.
            </p>

            {/* Vantaggi e limiti */}
            <h2 id="vantaggi-limiti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Vantaggi e limiti
            </h2>
            <p>
              <strong>Vantaggi.</strong> Il concordato semplificato offre alcuni benefici concreti:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Assenza del voto</strong>: utile quando il dissenso di pochi creditori bloccherebbe un accordo altrimenti conveniente per la massa</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Rapidità relativa</strong>: senza adunanza e votazione, l&apos;iter può essere più snello di un concordato preventivo liquidatorio</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Ordine nella liquidazione</strong>: è un&apos;uscita governata, alternativa alla liquidazione giudiziale &laquo;subìta&raquo;, con un programma e un liquidatore</span></li>
            </ul>
            <p>
              <strong>Limiti e cautele.</strong> Lo strumento ha però confini precisi che vanno valutati con attenzione:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Accesso condizionato</strong>: è praticabile solo a valle di una composizione negoziata realmente tentata e condotta in buona fede</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>È liquidatorio</strong>: l&apos;impresa cessa, non c&apos;è continuità aziendale</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>I creditori conservano l&apos;opposizione</strong>: l&apos;assenza del voto non elimina il contraddittorio, che può rallentare o ostacolare l&apos;omologazione</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Onere probatorio</strong>: serve dimostrare l&apos;assenza di pregiudizio rispetto alla liquidazione giudiziale e l&apos;utilità per ciascun creditore</span></li>
            </ul>
            <p>
              In sintesi, il concordato semplificato è una valida via di uscita ordinata, ma non è una scorciatoia: presuppone un percorso pregresso serio e un&apos;impostazione tecnica rigorosa della proposta. Stimare i costi richiede una valutazione caso per caso; gli eventuali importi indicati in fase preliminare vanno considerati come puramente indicativi.
            </p>

            {/* FAQ */}
            <h2 id="faq" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Domande frequenti
            </h2>
            <p className="font-semibold text-zinc-900 mt-6">Cos&apos;è il concordato semplificato?</p>
            <p>
              È il concordato semplificato per la liquidazione del patrimonio, disciplinato dall&apos;art. 25-sexies del Codice della Crisi (D.Lgs. 14/2019), aggiornato dal Correttivo-ter D.Lgs. 136/2024. È una procedura esclusivamente liquidatoria che costituisce uno sbocco specifico della composizione negoziata: l&apos;imprenditore propone ai creditori la liquidazione del patrimonio quando le trattative, pur condotte con correttezza e buona fede, non hanno prodotto un accordo. La caratteristica distintiva è l&apos;assenza del voto dei creditori.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Quando si può accedere al concordato semplificato?</p>
            <p>
              Vi si accede solo a valle di una composizione negoziata, quando l&apos;esperto, nella relazione finale, dichiara che le trattative si sono svolte secondo correttezza e buona fede ma non hanno avuto esito positivo e che le soluzioni dell&apos;art. 23 CCII non sono praticabili. La proposta di concordato semplificato deve essere depositata entro 60 giorni dalla comunicazione di tale relazione finale dell&apos;esperto. Non è quindi una procedura attivabile in autonomia: presuppone una composizione negoziata realmente tentata.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">I creditori votano nel concordato semplificato?</p>
            <p>
              No. È la differenza più rilevante rispetto al concordato preventivo: nel concordato semplificato non è previsto il voto dei creditori. I creditori non approvano la proposta con una votazione, ma possono proporre opposizione all&apos;omologazione, dando luogo a un contraddittorio davanti al Tribunale. La tutela dei creditori passa quindi dall&apos;opposizione e dal controllo del giudice, non da un&apos;adunanza con votazione.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Che differenza c&apos;è col concordato preventivo?</p>
            <p>
              Le differenze principali sono quattro. Primo: nel concordato semplificato non c&apos;è il voto dei creditori, mentre nel concordato preventivo è richiesto. Secondo: il concordato semplificato è solo liquidatorio, non in continuità. Terzo: presuppone una composizione negoziata fallita, mentre il concordato preventivo è una procedura autonoma. Quarto: il Tribunale nomina un ausiliario che redige un parere, invece del commissario giudiziale e dell&apos;adunanza dei creditori del concordato preventivo.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Cosa fa l&apos;ausiliario nominato dal Tribunale?</p>
            <p>
              Nel concordato semplificato il Tribunale nomina un ausiliario (con richiamo all&apos;art. 68 CCII) che redige un parere sulla proposta. Acquisita la relazione finale dell&apos;esperto e il parere dell&apos;ausiliario, il Tribunale fissa l&apos;udienza. L&apos;ausiliario svolge quindi una funzione di ausilio tecnico-valutativo al giudice, distinta dal ruolo del commissario giudiziale del concordato preventivo: non c&apos;è adunanza dei creditori né votazione da gestire.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Cosa possono fare i creditori contrari?</p>
            <p>
              I creditori non votano, ma possono proporre opposizione all&apos;omologazione del concordato semplificato, attivando un contraddittorio davanti al Tribunale. Il giudice omologa solo se il contraddittorio è regolare, se la proposta non arreca pregiudizio ai creditori rispetto all&apos;alternativa della liquidazione giudiziale e se comunque assicura un&apos;utilità a ciascun creditore. L&apos;opposizione è dunque lo strumento di tutela del creditore dissenziente.
            </p>

            {/* Approfondimenti */}
            <h2 id="approfondimenti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <p>
              Il concordato semplificato è solo l&apos;ultimo tassello di un percorso che inizia con la composizione negoziata. Per inquadrarlo correttamente, e per valutare gli strumenti alternativi, ti rimandiamo a questi approfondimenti:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/composizione-negoziata-crisi-impresa-2026" className="text-[var(--color-accent)] hover:underline">Composizione negoziata 2026: guida alla crisi d&apos;impresa</Link> &mdash; il percorso che precede il concordato semplificato</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/concordato-minore-2026" className="text-[var(--color-accent)] hover:underline">Concordato minore 2026</Link> &mdash; lo strumento per imprenditori minori e soggetti sovraindebitati</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/crisi-di-impresa" className="text-[var(--color-accent)] hover:underline">Servizio crisi d&apos;impresa</Link> &mdash; la pagina dello studio dedicata alle procedure concorsuali e all&apos;assistenza in fase di liquidazione</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/contatti" className="text-[var(--color-accent)] hover:underline">Contattaci</Link> &mdash; valutazione preliminare per imprenditori, organi di controllo, professionisti</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Esci da una composizione negoziata senza accordo?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Il nostro studio assiste imprenditori, PMI e advisor nella valutazione di fattibilità del concordato semplificato, nella predisposizione della proposta entro i termini di legge e nella gestione del contraddittorio davanti al Tribunale. Prima consulenza tecnica per definire il quadro e capire se il concordato semplificato è la via giusta.
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
