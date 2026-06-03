import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Adeguati assetti e indici della crisi 2026 | A.T. Parma",
  description:
    "Adeguati assetti e indici della crisi 2026: obblighi ex art. 2086 c.c. e CCII, DSCR, segnali di allarme, doveri di sindaci e revisori, responsabilita amministratori.",
  alternates: {
    canonical: "/blog/adeguati-assetti-indici-crisi-2026",
  },
  openGraph: {
    title: "Adeguati assetti e indici della crisi 2026: gli obblighi dell'impresa",
    description:
      "Adeguati assetti e indici della crisi 2026: obblighi ex art. 2086 c.c. e CCII, DSCR, segnali di allarme, doveri di sindaci e revisori, responsabilita amministratori.",
    type: "article",
    publishedTime: "2026-06-03T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [
      {
        url: "https://www.atparma.com/og?slug=adeguati-assetti-indici-crisi-2026",
        width: 1200,
        height: 630,
        alt: "Adeguati assetti e indici della crisi 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.atparma.com/og?slug=adeguati-assetti-indici-crisi-2026"],
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
            headline: "Adeguati assetti e indici della crisi 2026: gli obblighi dell'impresa",
            description:
              "Adeguati assetti e indici della crisi 2026: obblighi ex art. 2086 c.c. e CCII, DSCR, segnali di allarme, doveri di sindaci e revisori, responsabilita amministratori.",
            image: "https://www.atparma.com/og?slug=adeguati-assetti-indici-crisi-2026",
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
            mainEntityOfPage: "https://www.atparma.com/blog/adeguati-assetti-indici-crisi-2026",
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
                name: "Cosa sono gli adeguati assetti?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sono l'insieme dei presidi organizzativi, amministrativi e contabili che l'imprenditore in forma societaria o collettiva ha il dovere di istituire ai sensi dell'art. 2086, comma 2, del Codice Civile. Devono essere adeguati alla natura e alle dimensioni dell'impresa e servono, fra l'altro, alla rilevazione tempestiva della crisi e della perdita della continuita aziendale. L'art. 3 CCII, modificato dal Correttivo-ter (D.Lgs. 136/2024), specifica cosa devono concretamente consentire di rilevare. Non sono piu una buona prassi facoltativa: sono un obbligo di legge.",
                },
              },
              {
                "@type": "Question",
                name: "Quali imprese sono obbligate ad avere assetti adeguati?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'art. 3 CCII distingue due livelli. L'imprenditore individuale deve adottare misure idonee a rilevare tempestivamente lo stato di crisi e ad assumere senza indugio le iniziative necessarie. L'imprenditore che opera in forma societaria o collettiva deve invece istituire un assetto organizzativo, amministrativo e contabile adeguato ai sensi dell'art. 2086 c.c. L'obbligo riguarda quindi tutte le societa, calibrato in modo proporzionale alle dimensioni: una micro-impresa non ha gli stessi presidi di una media impresa.",
                },
              },
              {
                "@type": "Question",
                name: "Cos'e il DSCR e perche conta?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Il DSCR (Debt Service Coverage Ratio) e l'indice che, ai sensi dell'art. 13 CCII, misura la capacita dei flussi di cassa attesi a sei mesi di coprire il servizio del debito. Se il DSCR e inferiore a 1, il flusso di cassa atteso non e sufficiente a coprire il rimborso del debito nel periodo considerato: e un segnale tecnico di tensione finanziaria. In assenza del DSCR o quando non e ritenuto affidabile, si utilizzano gli indici settoriali elaborati dal CNDCEC.",
                },
              },
              {
                "@type": "Question",
                name: "Quali sono i segnali di allarme della crisi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'art. 3, comma 4, CCII individua quattro segnali: debiti per retribuzioni scaduti da almeno 30 giorni superiori alla meta dell'ammontare mensile complessivo; debiti verso fornitori scaduti da almeno 90 giorni superiori a quelli non scaduti; esposizioni verso banche e intermediari finanziari scadute da piu di 60 giorni oltre determinate soglie; l'esistenza di una o piu esposizioni verso i creditori pubblici qualificati indicati dall'art. 25-novies. Quando questi segnali si manifestano, l'organo amministrativo deve attivarsi senza indugio.",
                },
              },
              {
                "@type": "Question",
                name: "Cosa devono fare sindaci e revisori?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ai sensi dell'art. 25-octies CCII, l'organo di controllo e il revisore legale devono segnalare per iscritto all'organo amministrativo i fondati indizi della crisi, indicando le ragioni. La segnalazione tempestiva costituisce causa di esonero o di attenuazione della responsabilita degli organi di controllo per i danni derivanti dalla crisi non gestita. Per chi siede in un collegio sindacale o svolge revisione legale e quindi cruciale riconoscere gli indici dell'art. 13 e documentare per iscritto le segnalazioni effettuate.",
                },
              },
              {
                "@type": "Question",
                name: "Cosa rischiano gli amministratori se non adottano assetti adeguati?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'omessa adozione di assetti adeguati espone gli amministratori a responsabilita verso la societa, i soci e i creditori. La quantificazione del danno si lega ai criteri degli artt. 2476 e 2486 c.c. Si tratta di un vero cambio di paradigma: l'adeguatezza degli assetti e oggi un obbligo di legge ai sensi dell'art. 2086 c.c., non una scelta discrezionale. Adottare per tempo gli assetti e documentarne il funzionamento e quindi anche uno strumento di tutela personale dell'amministratore.",
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
            Adeguati assetti e indici della crisi 2026: gli obblighi dell&apos;impresa
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/og?slug=adeguati-assetti-indici-crisi-2026" alt="Adeguati assetti e indici della crisi 2026" fill unoptimized className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Gli <strong>adeguati assetti organizzativi, amministrativi e contabili</strong> sono oggi un obbligo di legge per chi opera in forma societaria o collettiva. Il riferimento e l&apos;art. 2086, comma 2, del Codice Civile, integrato dal Codice della Crisi d&apos;Impresa e dell&apos;Insolvenza (D.Lgs. 14/2019) e aggiornato dal Correttivo-ter (D.Lgs. 136/2024). Il principio e netto: l&apos;impresa deve dotarsi di strumenti che le consentano di accorgersi della crisi <strong>prima</strong> che diventi irreversibile, e di attivarsi senza indugio.
            </p>
            <p>
              In questa guida aggiornata al 2026 ricostruiamo cosa sono gli adeguati assetti, cosa devono permettere di rilevare alla luce dell&apos;art. 3 CCII, quali sono i segnali di allarme, come funzionano gli indici della crisi e il DSCR (art. 13), il ruolo dei creditori pubblici qualificati (art. 25-novies), i doveri di sindaci e revisori (art. 25-octies), la responsabilita degli amministratori e gli strumenti pratici per costruire assetti proporzionati alle dimensioni dell&apos;impresa.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#cosa-sono" className="text-[var(--color-accent)] hover:underline">Cosa sono gli adeguati assetti (art. 2086 c.c.)</a></li>
                <li><a href="#cosa-rilevare" className="text-[var(--color-accent)] hover:underline">Cosa devono permettere di rilevare (art. 3 CCII)</a></li>
                <li><a href="#segnali" className="text-[var(--color-accent)] hover:underline">I segnali di allarme</a></li>
                <li><a href="#indici-dscr" className="text-[var(--color-accent)] hover:underline">Gli indici della crisi e il DSCR (art. 13)</a></li>
                <li><a href="#creditori-pubblici" className="text-[var(--color-accent)] hover:underline">I creditori pubblici qualificati (art. 25-novies)</a></li>
                <li><a href="#sindaci-revisori" className="text-[var(--color-accent)] hover:underline">Doveri di sindaci e revisori (art. 25-octies)</a></li>
                <li><a href="#responsabilita" className="text-[var(--color-accent)] hover:underline">Responsabilita degli amministratori</a></li>
                <li><a href="#come-costruire" className="text-[var(--color-accent)] hover:underline">Come costruire assetti adeguati e proporzionati</a></li>
                <li><a href="#faq" className="text-[var(--color-accent)] hover:underline">Domande frequenti</a></li>
                <li><a href="#approfondimenti" className="text-[var(--color-accent)] hover:underline">Approfondimenti correlati</a></li>
              </ul>
            </div>

            {/* Cosa sono */}
            <h2 id="cosa-sono" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa sono gli adeguati assetti (art. 2086 c.c.)
            </h2>
            <p>
              Il cuore della disciplina e l&apos;<strong>art. 2086, comma 2, del Codice Civile</strong>. La norma stabilisce che l&apos;imprenditore che opera in forma societaria o collettiva ha il dovere di istituire un assetto organizzativo, amministrativo e contabile <strong>adeguato alla natura e alle dimensioni dell&apos;impresa</strong>, anche in funzione della rilevazione tempestiva della crisi e della perdita della continuita aziendale, e di attivarsi senza indugio per l&apos;adozione e l&apos;attuazione di uno degli strumenti previsti dall&apos;ordinamento per il superamento della crisi e il recupero della continuita.
            </p>
            <p>
              La norma scompone l&apos;obbligo in tre profili. L&apos;<strong>assetto organizzativo</strong> riguarda la struttura: funzioni, deleghe, procedure interne, separazione dei ruoli. L&apos;<strong>assetto amministrativo</strong> riguarda i processi decisionali e di programmazione, come budget e pianificazione. L&apos;<strong>assetto contabile</strong> riguarda la capacita di produrre informazioni economico-finanziarie corrette, tempestive e affidabili.
            </p>
            <p>
              <strong>Cambio di paradigma.</strong> La novita di sistema e che l&apos;adeguatezza degli assetti non e piu una semplice buona prassi gestionale rimessa alla sensibilita dell&apos;imprenditore: e diventata un <strong>obbligo di legge</strong>, la cui violazione produce conseguenze in termini di responsabilita. L&apos;assetto deve esistere, deve funzionare e deve essere documentabile.
            </p>

            {/* Cosa rilevare */}
            <h2 id="cosa-rilevare" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa devono permettere di rilevare (art. 3 CCII)
            </h2>
            <p>
              L&apos;<strong>art. 3 CCII</strong> distingue due livelli di obbligo. L&apos;imprenditore individuale deve adottare <strong>misure idonee</strong> a rilevare tempestivamente lo stato di crisi; l&apos;imprenditore che opera in forma societaria o collettiva deve istituire <strong>assetti adeguati</strong> ai sensi dell&apos;art. 2086 c.c. Il <strong>Correttivo-ter (D.Lgs. 136/2024)</strong> ha specificato in modo puntuale cosa questi assetti devono concretamente consentire di fare.
            </p>
            <p>
              In particolare, gli assetti adeguati devono permettere di:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Rilevare eventuali squilibri</strong> di carattere patrimoniale o economico-finanziario rapportati alle specificita dell&apos;impresa e dell&apos;attivita svolta</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Verificare la sostenibilita dei debiti</strong> e le prospettive di continuita aziendale per almeno i dodici mesi successivi</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Ricavare le informazioni necessarie</strong> per eseguire il test pratico di accesso alla composizione negoziata</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Rilevare i segnali di allarme</strong> di cui al comma 4 dell&apos;art. 3 CCII</span></li>
            </ul>
            <p>
              Il filo conduttore e la <strong>tempestivita</strong>: gli assetti servono ad anticipare la crisi, non a constatarla quando ormai e conclamata. Un sistema che si limita a fotografare il bilancio a consuntivo, mesi dopo la chiusura dell&apos;esercizio, non e un assetto adeguato ai fini del CCII.
            </p>

            {/* Segnali */}
            <h2 id="segnali" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              I segnali di allarme
            </h2>
            <p>
              L&apos;<strong>art. 3, comma 4, CCII</strong> individua in modo tassativo i segnali di allarme che gli assetti devono saper intercettare. La loro presenza, soprattutto se non episodica, impone all&apos;organo amministrativo di attivarsi senza indugio. I segnali sono:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Debiti per retribuzioni scaduti da almeno 30 giorni</strong> pari a oltre la meta dell&apos;ammontare complessivo mensile delle retribuzioni</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Debiti verso fornitori scaduti da almeno 90 giorni</strong> di ammontare superiore a quello dei debiti non scaduti</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Esposizioni nei confronti di banche e altri intermediari finanziari scadute da piu di 60 giorni</strong> e di ammontare superiore alle soglie previste</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Esistenza di una o piu esposizioni</strong> nei confronti dei creditori pubblici qualificati di cui all&apos;art. 25-novies</span></li>
            </ul>
            <p>
              Questi segnali non sono indici contabili sofisticati: sono <strong>indicatori di scaduto</strong> che ogni impresa puo e deve monitorare con strumenti elementari di tesoreria. La loro funzione e fungere da soglia oggettiva oltre la quale scatta il dovere di reazione: chi se ne accorge in tempo conserva le opzioni di risanamento, chi se ne accorge tardi le perde.
            </p>

            {/* CTA intermedio */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>La tua impresa ha un sistema che intercetta questi segnali?</strong> Il nostro studio affianca amministratori, PMI e organi di controllo nella progettazione di assetti proporzionati: monitoraggio dello scaduto, calcolo del DSCR, budget di tesoreria e reporting periodico, fino alla documentazione degli adempimenti richiesti dal Codice della Crisi.
              </p>
            </div>

            {/* Indici e DSCR */}
            <h2 id="indici-dscr" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Gli indici della crisi e il DSCR (art. 13)
            </h2>
            <p>
              L&apos;<strong>art. 13 CCII</strong> individua gli indici della crisi, cioe gli strumenti quantitativi che, insieme ai segnali di allarme, consentono di valutare l&apos;equilibrio dell&apos;impresa. L&apos;indicatore centrale e il <strong>DSCR (Debt Service Coverage Ratio) a sei mesi</strong>: misura il rapporto tra i flussi di cassa attesi nel semestre e l&apos;importo del debito da servire nello stesso periodo.
            </p>
            <p>
              <strong>La soglia critica e 1.</strong> Se il DSCR e <strong>inferiore a 1</strong>, significa che il flusso di cassa atteso non e sufficiente a coprire il servizio del debito: l&apos;impresa, sulla base delle proiezioni, non genera liquidita bastante a far fronte ai rimborsi in scadenza. E un segnale tecnico che impone approfondimento e, se confermato, azione.
            </p>
            <p>
              <strong>Gli indici settoriali del CNDCEC.</strong> Quando il DSCR non e disponibile, oppure l&apos;organo amministrativo non lo ritiene sufficientemente affidabile, si utilizzano gli indici settoriali elaborati dal Consiglio Nazionale dei Dottori Commercialisti e degli Esperti Contabili. Si tratta di una batteria di indici da valutare congiuntamente:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Patrimonio netto negativo</strong>: condizione di per se rilevante, che segnala l&apos;erosione del capitale</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Indice di sostenibilita degli oneri finanziari</strong>: rapporto tra oneri finanziari e ricavi</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Indice di adeguatezza patrimoniale</strong>: rapporto tra patrimonio netto e debiti totali</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Indice di ritorno liquido dell&apos;attivo</strong>: rapporto tra cash flow e attivo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Indice di liquidita</strong>: rapporto tra attivita a breve e passivita a breve</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Indice di indebitamento previdenziale e tributario</strong>: rapporto tra debiti verso enti previdenziali e fiscali e attivo</span></li>
            </ul>
            <p>
              Gli indici settoriali vanno letti in modo congiunto, non isolato, e devono superare contemporaneamente le soglie elaborate per il singolo settore di attivita. La loro funzione e fornire una valutazione strutturale dell&apos;equilibrio, complementare alla lettura prospettica offerta dal DSCR.
            </p>

            {/* Creditori pubblici */}
            <h2 id="creditori-pubblici" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              I creditori pubblici qualificati (art. 25-novies)
            </h2>
            <p>
              L&apos;<strong>art. 25-novies CCII</strong> attribuisce a determinati creditori pubblici, definiti <strong>qualificati</strong>, un obbligo di segnalazione. Si tratta dell&apos;<strong>Agenzia delle Entrate</strong> (per il debito IVA scaduto oltre soglia), dell&apos;<strong>INPS</strong>, dell&apos;<strong>INAIL</strong> e dell&apos;<strong>Agente della Riscossione</strong>.
            </p>
            <p>
              <strong>Come funziona.</strong> Quando l&apos;esposizione verso uno di questi enti supera determinate soglie, il creditore pubblico ha l&apos;obbligo di segnalare la situazione all&apos;imprenditore e, ove esistente, all&apos;organo di controllo, invitando il debitore a valutare senza indugio l&apos;attivazione di uno degli strumenti previsti dall&apos;ordinamento, fra cui la composizione negoziata. Si tratta di un sistema di allerta esterno che si affianca a quello interno degli assetti.
            </p>
            <p>
              Per l&apos;impresa, la ricezione di una segnalazione ex art. 25-novies e un campanello d&apos;allarme da non sottovalutare: ignorarla significa lasciar maturare un&apos;esposizione che, oltre a generare sanzioni e interessi, incide direttamente sulla valutazione di responsabilita degli amministratori e degli organi di controllo.
            </p>

            {/* Sindaci e revisori */}
            <h2 id="sindaci-revisori" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Doveri di sindaci e revisori (art. 25-octies)
            </h2>
            <p>
              L&apos;<strong>art. 25-octies CCII</strong> introduce un dovere specifico in capo agli organi di controllo. Il sindaco unico, il collegio sindacale e il revisore legale, quando rilevano fondati indizi della crisi, devono <strong>segnalare per iscritto all&apos;organo amministrativo</strong> tale circostanza, indicando le ragioni della segnalazione.
            </p>
            <p>
              <strong>Effetto della segnalazione tempestiva.</strong> La norma collega alla tempestivita della segnalazione un effetto premiale: la segnalazione effettuata correttamente e per tempo costituisce <strong>causa di esonero o di attenuazione della responsabilita</strong> degli organi di controllo per i danni conseguenti alla crisi non gestita. E un incentivo forte a non rimanere passivi davanti ai primi indizi.
            </p>
            <p>
              Per chi siede in un collegio sindacale o svolge revisione legale e quindi cruciale saper riconoscere gli indici dell&apos;art. 13 e i segnali dell&apos;art. 3, e soprattutto <strong>documentare per iscritto</strong> le segnalazioni effettuate. La forma scritta non e un mero formalismo: e l&apos;elemento probatorio che consente di dimostrare di aver adempiuto al proprio dovere.
            </p>

            {/* Responsabilita */}
            <h2 id="responsabilita" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Responsabilita degli amministratori
            </h2>
            <p>
              L&apos;altra faccia dell&apos;obbligo e la <strong>responsabilita</strong>. L&apos;omessa adozione di assetti adeguati espone gli amministratori a responsabilita verso la societa, i soci e i creditori sociali. Non si tratta di un rischio teorico: l&apos;adeguatezza degli assetti e oggi un parametro di valutazione della diligenza dell&apos;organo amministrativo.
            </p>
            <p>
              <strong>Quantificazione del danno.</strong> Per la determinazione del danno conseguente alla mala gestio, il riferimento sono gli <strong>artt. 2476 e 2486 c.c.</strong> Quest&apos;ultimo, in particolare, fornisce criteri presuntivi per la quantificazione del danno quando l&apos;amministratore prosegue indebitamente l&apos;attivita nonostante il verificarsi di una causa di scioglimento o l&apos;aggravarsi del dissesto.
            </p>
            <p>
              <strong>Cambio di prospettiva.</strong> Il messaggio del sistema e chiaro: dotarsi di assetti adeguati e attivarsi tempestivamente non e solo un dovere verso l&apos;impresa, ma anche uno strumento di <strong>tutela personale</strong> dell&apos;amministratore. Documentare gli assetti, le valutazioni periodiche e le iniziative assunte riduce sensibilmente l&apos;area di esposizione individuale.
            </p>

            {/* Come costruire */}
            <h2 id="come-costruire" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Come costruire assetti adeguati e proporzionati
            </h2>
            <p>
              Il principio cardine e la <strong>proporzionalita</strong>: gli assetti vanno calibrati sulla natura e sulle dimensioni dell&apos;impresa. Una micro-impresa non e tenuta agli stessi presidi di una media impresa strutturata. Non esiste un modello unico: esiste un obbligo di adeguatezza che va declinato caso per caso. Gli strumenti pratici piu efficaci, anche per realta di piccole dimensioni, sono:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Budget di tesoreria</strong>: la pianificazione delle entrate e delle uscite attese, base per il calcolo del DSCR</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Piano di cassa a 6-13 settimane</strong>: lo strumento operativo per monitorare la liquidita di breve periodo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Monitoraggio dello scaduto</strong>: verso dipendenti, fornitori, banche ed enti pubblici, per intercettare i segnali dell&apos;art. 3</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Reporting periodico</strong>: una reportistica gestionale a cadenza regolare, che porti all&apos;organo amministrativo le informazioni rilevanti in tempo utile</span></li>
            </ul>
            <p>
              L&apos;obiettivo non e accumulare documenti, ma costruire un <strong>sistema che funzioni</strong> e che produca informazioni tempestive su cui prendere decisioni. Un assetto adeguato e, in fondo, la capacita concreta dell&apos;impresa di sapere ogni mese se la rotta e sostenibile, e di accorgersi per tempo quando non lo e piu.
            </p>

            {/* FAQ */}
            <h2 id="faq" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Domande frequenti
            </h2>
            <p className="font-semibold text-zinc-900 mt-6">Cosa sono gli adeguati assetti?</p>
            <p>
              Sono l&apos;insieme dei presidi organizzativi, amministrativi e contabili che l&apos;imprenditore in forma societaria o collettiva ha il dovere di istituire ai sensi dell&apos;art. 2086, comma 2, del Codice Civile. Devono essere adeguati alla natura e alle dimensioni dell&apos;impresa e servono, fra l&apos;altro, alla rilevazione tempestiva della crisi e della perdita della continuita aziendale. L&apos;art. 3 CCII, modificato dal Correttivo-ter (D.Lgs. 136/2024), specifica cosa devono concretamente consentire di rilevare. Non sono piu una buona prassi facoltativa: sono un obbligo di legge.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Quali imprese sono obbligate ad avere assetti adeguati?</p>
            <p>
              L&apos;art. 3 CCII distingue due livelli. L&apos;imprenditore individuale deve adottare misure idonee a rilevare tempestivamente lo stato di crisi e ad assumere senza indugio le iniziative necessarie. L&apos;imprenditore che opera in forma societaria o collettiva deve invece istituire un assetto organizzativo, amministrativo e contabile adeguato ai sensi dell&apos;art. 2086 c.c. L&apos;obbligo riguarda quindi tutte le societa, calibrato in modo proporzionale alle dimensioni: una micro-impresa non ha gli stessi presidi di una media impresa.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Cos&apos;e il DSCR e perche conta?</p>
            <p>
              Il DSCR (Debt Service Coverage Ratio) e l&apos;indice che, ai sensi dell&apos;art. 13 CCII, misura la capacita dei flussi di cassa attesi a sei mesi di coprire il servizio del debito. Se il DSCR e inferiore a 1, il flusso di cassa atteso non e sufficiente a coprire il rimborso del debito nel periodo considerato: e un segnale tecnico di tensione finanziaria. In assenza del DSCR o quando non e ritenuto affidabile, si utilizzano gli indici settoriali elaborati dal CNDCEC.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Quali sono i segnali di allarme della crisi?</p>
            <p>
              L&apos;art. 3, comma 4, CCII individua quattro segnali: debiti per retribuzioni scaduti da almeno 30 giorni superiori alla meta dell&apos;ammontare mensile complessivo; debiti verso fornitori scaduti da almeno 90 giorni superiori a quelli non scaduti; esposizioni verso banche e intermediari finanziari scadute da piu di 60 giorni oltre determinate soglie; l&apos;esistenza di una o piu esposizioni verso i creditori pubblici qualificati indicati dall&apos;art. 25-novies. Quando questi segnali si manifestano, l&apos;organo amministrativo deve attivarsi senza indugio.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Cosa devono fare sindaci e revisori?</p>
            <p>
              Ai sensi dell&apos;art. 25-octies CCII, l&apos;organo di controllo e il revisore legale devono segnalare per iscritto all&apos;organo amministrativo i fondati indizi della crisi, indicando le ragioni. La segnalazione tempestiva costituisce causa di esonero o di attenuazione della responsabilita degli organi di controllo per i danni derivanti dalla crisi non gestita. Per chi siede in un collegio sindacale o svolge revisione legale e quindi cruciale riconoscere gli indici dell&apos;art. 13 e documentare per iscritto le segnalazioni effettuate.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Cosa rischiano gli amministratori se non adottano assetti adeguati?</p>
            <p>
              L&apos;omessa adozione di assetti adeguati espone gli amministratori a responsabilita verso la societa, i soci e i creditori. La quantificazione del danno si lega ai criteri degli artt. 2476 e 2486 c.c. Si tratta di un vero cambio di paradigma: l&apos;adeguatezza degli assetti e oggi un obbligo di legge ai sensi dell&apos;art. 2086 c.c., non una scelta discrezionale. Adottare per tempo gli assetti e documentarne il funzionamento e quindi anche uno strumento di tutela personale dell&apos;amministratore.
            </p>

            {/* Approfondimenti */}
            <h2 id="approfondimenti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <p>
              Gli adeguati assetti servono a far scattare l&apos;allarme; quando i segnali si accendono, lo strumento da attivare per il risanamento e la composizione negoziata. Di seguito gli approfondimenti utili:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/composizione-negoziata-crisi-impresa-2026" className="text-[var(--color-accent)] hover:underline">Composizione negoziata 2026</Link> &mdash; lo strumento da attivare quando i segnali di allarme si accendono</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/crisi-di-impresa" className="text-[var(--color-accent)] hover:underline">Servizio crisi d&apos;impresa</Link> &mdash; assistenza su procedure concorsuali, attestazioni e organi di controllo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/consulenza-finanziaria" className="text-[var(--color-accent)] hover:underline">Consulenza finanziaria</Link> &mdash; business plan, piani di tesoreria, monitoraggio della liquidita e degli indici</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/contatti" className="text-[var(--color-accent)] hover:underline">Contattaci</Link> &mdash; valutazione preliminare per amministratori, PMI e organi di controllo</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi assetti adeguati e a norma di CCII?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Il nostro studio affianca amministratori, PMI e organi di controllo nella progettazione di assetti organizzativi, amministrativi e contabili proporzionati: monitoraggio dei segnali, calcolo del DSCR e degli indici, budget di tesoreria e reporting periodico. Prima consulenza tecnica per definire il quadro e mettere l&apos;impresa in regola.
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
