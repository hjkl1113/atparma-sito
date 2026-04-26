import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Regime forfettario 2026: guida completa | A.T. Consulting Parma",
  description:
    "Guida aggiornata al regime forfettario 2026: requisiti, coefficienti di redditività, imposta sostitutiva 5% e 15%, contributi, cause di esclusione, esempi numerici. Quando conviene davvero.",
  alternates: {
    canonical: "/blog/regime-forfettario-2026",
  },
  openGraph: {
    title: "Regime forfettario 2026: guida completa",
    description:
      "Guida aggiornata al regime forfettario 2026: requisiti, coefficienti di redditività, imposta sostitutiva 5% e 15%, contributi, cause di esclusione, esempi numerici. Quando conviene davvero.",
    type: "article",
    publishedTime: "2026-04-25T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [{ url: "https://www.atparma.com/og?slug=regime-forfettario-2026", width: 1200, height: 630, alt: "Regime forfettario 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.atparma.com/og?slug=regime-forfettario-2026"],
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
            headline: "Regime forfettario 2026: guida completa",
            description:
              "Guida aggiornata al regime forfettario 2026: requisiti, coefficienti di redditività, imposta sostitutiva 5% e 15%, contributi, cause di esclusione, esempi numerici. Quando conviene davvero.",
            image: "https://www.atparma.com/og?slug=regime-forfettario-2026",
            datePublished: "2026-04-25",
            dateModified: "2026-04-25",
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
            mainEntityOfPage: "https://www.atparma.com/blog/regime-forfettario-2026",
          }),
        }}
      />

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Blog
          </Link>

          <time className="text-xs text-zinc-400 block mb-3">25 aprile 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Regime forfettario 2026: guida completa
          </h1>

          {/* TODO: sostituire con immagine dedicata generata per questo articolo. */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/og?slug=regime-forfettario-2026" alt="Regime forfettario 2026" fill unoptimized className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Il <strong>regime forfettario</strong> è il regime fiscale agevolato più diffuso in Italia per professionisti, lavoratori autonomi e piccole imprese individuali. Tassazione sostitutiva al 5% o 15%, contabilità semplificata, niente IVA, niente IRAP, niente ISA: per chi può accedervi è oggi la formula più conveniente per gestire la propria Partita IVA.
            </p>
            <p>
              Ma il regime forfettario ha regole precise. Limiti di ricavi, coefficienti di redditività diversi per ogni codice ATECO, cause di esclusione, casi in cui non conviene. Questa guida spiega tutto in dettaglio per il 2026, con esempi numerici concreti e i criteri reali per capire se è la scelta giusta per la tua attività.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#cos-e" className="text-[var(--color-accent)] hover:underline">Cos&apos;è il regime forfettario</a></li>
                <li><a href="#requisiti-2026" className="text-[var(--color-accent)] hover:underline">Requisiti di accesso 2026</a></li>
                <li><a href="#coefficienti" className="text-[var(--color-accent)] hover:underline">Coefficienti di redditività per attività</a></li>
                <li><a href="#imposta" className="text-[var(--color-accent)] hover:underline">Imposta sostitutiva: 5% o 15%</a></li>
                <li><a href="#cosa-non-paghi" className="text-[var(--color-accent)] hover:underline">Cosa non paghi col forfettario</a></li>
                <li><a href="#contributi" className="text-[var(--color-accent)] hover:underline">Contributi INPS e Cassa professionale</a></li>
                <li><a href="#fatturazione" className="text-[var(--color-accent)] hover:underline">Come si fattura nel forfettario</a></li>
                <li><a href="#esclusione" className="text-[var(--color-accent)] hover:underline">Cause di esclusione e di uscita</a></li>
                <li><a href="#esempio-numerico" className="text-[var(--color-accent)] hover:underline">Esempio numerico: 30.000 euro di fatturato</a></li>
                <li><a href="#vs-semplificato" className="text-[var(--color-accent)] hover:underline">Forfettario vs semplificato: quando passare</a></li>
                <li><a href="#errori-comuni" className="text-[var(--color-accent)] hover:underline">Errori comuni da evitare</a></li>
                <li><a href="#quando-non-conviene" className="text-[var(--color-accent)] hover:underline">Quando il forfettario non conviene</a></li>
              </ul>
            </div>

            {/* Cos'è */}
            <h2 id="cos-e" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cos&apos;è il regime forfettario
            </h2>
            <p>
              Il regime forfettario è stato introdotto dalla Legge di Stabilità 2015 e progressivamente ampliato. Sostituisce l&apos;IRPEF, le addizionali regionali e comunali e l&apos;IRAP con un&apos;unica <strong>imposta sostitutiva</strong> al 15% (o 5% per i primi cinque anni in caso di nuova attività). Si applica solo a persone fisiche con ricavi o compensi inferiori a una determinata soglia.
            </p>
            <p>
              La caratteristica chiave è che il reddito imponibile non si calcola sui costi reali sostenuti, ma applicando un <strong>coefficiente di redditività</strong> al fatturato lordo. Questo significa contabilità semplice, niente registri IVA, niente bilancio, niente studi di settore o ISA. Per molte attività diventa il regime più conveniente in assoluto fino a una certa soglia di ricavi.
            </p>

            {/* Requisiti */}
            <h2 id="requisiti-2026" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Requisiti di accesso 2026
            </h2>
            <p>
              Per accedere al regime forfettario nel 2026 occorre rispettare contemporaneamente questi requisiti, che si verificano sull&apos;anno precedente (il 2025) e all&apos;atto dell&apos;ingresso:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Ricavi o compensi non superiori a 85.000 euro</strong> nell&apos;anno solare precedente</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Spese per personale dipendente, collaboratori e prestazioni accessorie non superiori a 20.000 euro lordi</strong></span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Nessuna attività in regime di IVA forfetario o speciale</strong> (es. agricoltura, editoria, agenzie viaggi)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Nessuna partecipazione di controllo</strong> in società di capitali o associazioni in partecipazione che svolgano attività riconducibili a quella in regime forfettario</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Reddito da lavoro dipendente o pensione non superiore a 30.000 euro lordi</strong> nell&apos;anno precedente (limite che non si applica se il rapporto è cessato e non è in essere altro rapporto col medesimo datore di lavoro o suoi collegati)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Nessuna prevalenza di attività verso ex datori di lavoro</strong> degli ultimi due anni (regola anti-elusione)</span></li>
            </ul>
            <p>
              Se anche uno solo di questi requisiti viene meno, il regime forfettario non è più applicabile dall&apos;anno successivo, oppure dall&apos;anno in corso se la soglia di 100.000 euro viene superata in corso d&apos;anno (vedi sezione cause di uscita).
            </p>

            {/* Coefficienti */}
            <h2 id="coefficienti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Coefficienti di redditività per attività
            </h2>
            <p>
              Nel forfettario il reddito imponibile è una percentuale fissa del fatturato, determinata dal coefficiente di redditività associato al codice ATECO dell&apos;attività. Esempio: se fai 30.000 euro di fatturato e il tuo coefficiente è il 78%, il reddito imponibile è 23.400 euro, indipendentemente dai costi che hai sostenuto.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Settore</th>
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Esempi</th>
                    <th className="text-left py-3 font-semibold text-zinc-900">Coefficiente</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Industrie alimentari e bevande</td>
                    <td className="py-3 pr-4">Pasticcerie, gelaterie, panifici</td>
                    <td className="py-3">40%</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Commercio all&apos;ingrosso e dettaglio</td>
                    <td className="py-3 pr-4">Negozi, e-commerce</td>
                    <td className="py-3">40%</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Commercio ambulante alimentare</td>
                    <td className="py-3 pr-4">Mercato, food truck</td>
                    <td className="py-3">40%</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Commercio ambulante non alimentare</td>
                    <td className="py-3 pr-4">Abbigliamento, accessori</td>
                    <td className="py-3">54%</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Costruzioni e attività immobiliari</td>
                    <td className="py-3 pr-4">Imprese edili, agenti immobiliari</td>
                    <td className="py-3">86%</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Intermediari del commercio</td>
                    <td className="py-3 pr-4">Agenti di commercio, procacciatori</td>
                    <td className="py-3">62%</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Servizi di alloggio e ristorazione</td>
                    <td className="py-3 pr-4">B&amp;B, ristoranti, bar</td>
                    <td className="py-3">40%</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Attività professionali, scientifiche, tecniche, sanitarie</td>
                    <td className="py-3 pr-4">Consulenti, designer, sviluppatori, medici</td>
                    <td className="py-3">78%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Altre attività di servizi</td>
                    <td className="py-3 pr-4">Estetiste, parrucchieri, palestre</td>
                    <td className="py-3">67%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-500 italic">
              Tabella sintetica. Il coefficiente esatto dipende dal codice ATECO specifico. In caso di pluralità di attività si applica il coefficiente del codice prevalente.
            </p>

            {/* Imposta */}
            <h2 id="imposta" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Imposta sostitutiva: 5% o 15%
            </h2>
            <p>
              L&apos;imposta sostitutiva del forfettario sostituisce IRPEF, addizionali regionali e comunali, IRAP. Si applica al reddito imponibile (fatturato &times; coefficiente) al netto dei contributi previdenziali obbligatori versati nell&apos;anno.
            </p>
            <p><strong>Aliquota 5% &mdash; nuove attività.</strong> Per i primi cinque anni di attività si applica il 5% se ricorrono tutti questi requisiti:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Il contribuente non ha esercitato attività artistica, professionale o d&apos;impresa nei tre anni precedenti</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>L&apos;attività non è una mera prosecuzione di altra svolta in precedenza come dipendente o autonomo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Se subentra ad altra attività, il fatturato del precedente esercente nel periodo precedente non superi 85.000 euro</span></li>
            </ul>
            <p><strong>Aliquota 15% &mdash; regime ordinario forfettario.</strong> Si applica a tutti gli altri casi, oppure dopo i primi cinque anni se eri partito col 5%.</p>

            {/* Cosa non paghi */}
            <h2 id="cosa-non-paghi" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa non paghi col forfettario
            </h2>
            <p>
              Il regime forfettario sostituisce diversi tributi e adempimenti tipici delle Partite IVA in regime ordinario o semplificato:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>IRPEF</strong>, addizionale regionale e comunale</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>IRAP</strong> (imposta regionale attività produttive)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>IVA</strong> sulle vendite (le fatture si emettono senza IVA), ma di contro non si detrae l&apos;IVA sugli acquisti</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>ISA</strong> e indici sintetici di affidabilità</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Studi di settore</strong> (ormai sostituiti dagli ISA, comunque non applicabili)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Spesometro, esterometro</strong> e comunicazioni periodiche IVA</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Ritenuta d&apos;acconto</strong>: il forfettario non subisce ritenuta sui compensi ricevuti da sostituti d&apos;imposta</span></li>
            </ul>
            <p>
              L&apos;unica imposta che si paga è la sostitutiva (5% o 15%) e i contributi previdenziali. Resta dovuta l&apos;eventuale imposta di bollo da 2 euro sulle fatture di importo superiore a 77,47 euro.
            </p>

            {/* Contributi */}
            <h2 id="contributi" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Contributi INPS e Cassa professionale
            </h2>
            <p>
              I contributi previdenziali nel forfettario seguono regole diverse a seconda della categoria del contribuente. Sono il vero costo fisso da considerare insieme all&apos;imposta sostitutiva.
            </p>
            <p><strong>Professionisti senza Cassa (Gestione Separata INPS).</strong> Versano il 26,07% sul reddito imponibile (fatturato &times; coefficiente, senza alcun minimale). Esempio: con 30.000 euro di fatturato e coefficiente 78%, l&apos;imponibile è 23.400 euro e i contributi sono circa 6.100 euro.</p>
            <p><strong>Artigiani e commercianti (INPS gestioni speciali).</strong> Pagano contributi minimi annuali (circa 4.500 euro) anche con fatturato basso, più una percentuale (circa 24%) sul reddito imponibile eccedente il minimale. Hanno diritto a una <strong>riduzione contributiva del 35%</strong> se aderiscono espressamente.</p>
            <p><strong>Professionisti iscritti a Casse private</strong> (ENPAM, Inarcassa, Cassa Forense, ENPAP, CNPADC ecc.). Le regole le detta ogni Cassa: in genere c&apos;è un minimo soggettivo annuo, un contributo integrativo del 4% in fattura al cliente, e contributi proporzionali al reddito. Le aliquote variano molto: meglio verificare con la propria Cassa di appartenenza.</p>

            {/* Fatturazione */}
            <h2 id="fatturazione" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Come si fattura nel forfettario
            </h2>
            <p>
              Le fatture in regime forfettario hanno tre caratteristiche specifiche:
            </p>
            <p><strong>1. Niente IVA.</strong> La fattura riporta in luogo dell&apos;IVA la dicitura: <em>&laquo;Operazione effettuata ai sensi dell&apos;art. 1, commi da 54 a 89, della Legge n. 190/2014. Regime forfettario.&raquo;</em>. Il cliente non versa IVA, il forfettario non la incassa né la versa.</p>
            <p><strong>2. Niente ritenuta d&apos;acconto.</strong> Sulle fatture emesse a sostituti d&apos;imposta (aziende, enti, altre P.IVA) si aggiunge la dicitura: <em>&laquo;Compenso non soggetto a ritenuta d&apos;acconto ai sensi dell&apos;art. 1, comma 67, Legge 190/2014.&raquo;</em>. Il forfettario incassa l&apos;intero importo lordo.</p>
            <p><strong>3. Imposta di bollo.</strong> Per fatture superiori a 77,47 euro è dovuta marca da bollo da 2 euro. Si può addebitare al cliente, oppure tenerla a carico del forfettario.</p>
            <p>
              Dal 2024 anche i forfettari hanno l&apos;<strong>obbligo di fatturazione elettronica</strong> verso tutti i clienti (privati e P.IVA italiane). Serve un sistema di emissione e conservazione SdI compatibile.
            </p>

            {/* Esclusione */}
            <h2 id="esclusione" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cause di esclusione e di uscita
            </h2>
            <p>
              Il forfettario si perde se cambiano i requisiti. Le regole da conoscere bene perché impattano il regime già nell&apos;anno in corso:
            </p>
            <p><strong>Superamento 85.000 ma sotto 100.000 euro.</strong> Si esce dal forfettario dall&apos;anno successivo. L&apos;anno in cui è avvenuto il superamento si conclude in regime forfettario.</p>
            <p><strong>Superamento dei 100.000 euro in corso d&apos;anno.</strong> Si esce dal forfettario <strong>immediatamente dalla fattura che fa superare la soglia</strong>. Da quel momento, e per tutto l&apos;anno, si applica il regime ordinario o semplificato con IVA piena. È il caso più ostico: bisogna emettere la fattura che supera la soglia con IVA, riformulare i registri, dichiarare il reddito secondo il principio di competenza.</p>
            <p><strong>Reddito da lavoro dipendente o pensione superiore a 30.000 euro.</strong> Si esce dal forfettario dall&apos;anno successivo.</p>
            <p><strong>Spese per dipendenti o collaboratori superiori a 20.000 euro.</strong> Idem, uscita dall&apos;anno successivo.</p>
            <p><strong>Acquisizione di partecipazione di controllo in una società di capitali</strong> con oggetto riconducibile a quello del forfettario, oppure di una società di persone. Esclusione immediata.</p>
            <p><strong>Prevalenza di fatturato verso ex datore di lavoro degli ultimi due anni.</strong> Esclusione retroattiva con sanzioni.</p>

            {/* CTA intermedio */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>Vuoi sapere se il forfettario fa al caso tuo?</strong> Usa il nostro <Link href="/calcolatori/forfettario" className="text-[var(--color-accent)] hover:underline">calcolatore forfettario gratuito</Link> per stimare imposta e contributi sulla base del tuo fatturato e codice ATECO. Inserisci i dati in pochi secondi e ottieni una proiezione dettagliata.
              </p>
            </div>

            {/* Esempio numerico */}
            <h2 id="esempio-numerico" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Esempio numerico: 30.000 euro di fatturato
            </h2>
            <p>
              Vediamo un caso concreto. <strong>Consulente informatico</strong>, codice ATECO 62.02.00, primo anno di attività con i requisiti per l&apos;aliquota agevolata 5%, fatturato annuo 30.000 euro, iscritto Gestione Separata INPS, nessun reddito da dipendente.
            </p>
            <div className="bg-zinc-50 rounded-xl p-6 my-6 border border-zinc-100">
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Fatturato annuo</span><strong>30.000 &euro;</strong></li>
                <li className="flex justify-between"><span>Coefficiente redditività (78%)</span><strong>23.400 &euro;</strong></li>
                <li className="flex justify-between"><span>Contributi INPS Gestione Separata (26,07%)</span><strong>&minus; 6.101 &euro;</strong></li>
                <li className="flex justify-between"><span>Reddito imponibile</span><strong>17.299 &euro;</strong></li>
                <li className="flex justify-between"><span>Imposta sostitutiva 5%</span><strong>865 &euro;</strong></li>
                <li className="flex justify-between border-t pt-2 mt-2"><span><strong>Totale tasse + contributi</strong></span><strong>6.966 &euro;</strong></li>
                <li className="flex justify-between"><span><strong>Netto in tasca</strong></span><strong>23.034 &euro;</strong></li>
              </ul>
            </div>
            <p>
              Pressione fiscale e contributiva totale: <strong>23,2%</strong>. Lo stesso fatturato in regime ordinario, con contabilità semplificata e IVA, lascerebbe in tasca circa 18.500-19.500 euro a parità di costi reali bassi. Il forfettario in questo caso fa risparmiare 3.500-4.500 euro l&apos;anno.
            </p>
            <p>
              Dopo i cinque anni di aliquota agevolata, l&apos;imposta passa al 15%: con gli stessi numeri il netto scende a circa 21.300 euro. Il forfettario resta comunque vantaggioso fino a una certa soglia, oltre la quale conviene il semplificato.
            </p>

            {/* Vs semplificato */}
            <h2 id="vs-semplificato" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Forfettario vs semplificato: quando passare
            </h2>
            <p>
              Il regime forfettario non è sempre il migliore. Il punto di pareggio dipende dalla tua incidenza reale dei costi rispetto al coefficiente di redditività. La regola pratica:
            </p>
            <p><strong>Hai costi reali inferiori al complementare del coefficiente?</strong> Il forfettario conviene. Esempio: coefficiente 78% (consulente), complementare 22%. Se i tuoi costi sono inferiori al 22% del fatturato, il forfettario è la scelta giusta.</p>
            <p><strong>Hai costi reali superiori?</strong> Il regime semplificato conviene, perché potrai dedurre i costi effettivi anziché un forfait. Tipico per attività con materiali, magazzino, dipendenti, viaggi rilevanti.</p>
            <p>
              In ogni caso, valutare il passaggio è una decisione strategica annuale: lo si fa col commercialista a fine anno, simulando l&apos;impatto su ricavi previsti e costi noti. Sbagliare regime di pochi punti percentuali può costare migliaia di euro.
            </p>

            {/* Errori comuni */}
            <h2 id="errori-comuni" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Errori comuni da evitare
            </h2>
            <p><strong>Calcolare la tassazione solo sul 15% dimenticando i contributi.</strong> Per professionisti senza Cassa il 26% INPS è quasi sempre la voce maggiore: pesarlo correttamente prima di firmare contratti a forfait.</p>
            <p><strong>Fatturare al lordo e dimenticare l&apos;accantonamento.</strong> Senza ritenuta d&apos;acconto in busta, il forfettario riceve l&apos;intero importo della fattura. È sua cura accantonare mese dopo mese tasse e contributi: ignorare il calcolo è la prima causa di crisi finanziaria del primo anno.</p>
            <p><strong>Non aprire un conto bancario dedicato.</strong> Mischiare entrate professionali e personali rende impossibile capire quanto si guadagna davvero, oltre a complicare eventuali controlli.</p>
            <p><strong>Sottovalutare il superamento della soglia 100.000 euro.</strong> Se prevedi una crescita rapida, conviene da subito impostare i flussi in modo da poter passare al regime ordinario senza traumi. Cambiare regime in corsa è doloroso.</p>
            <p><strong>Continuare il rapporto con un ex datore di lavoro.</strong> Se più del 50% del fatturato deriva da ex datori di lavoro degli ultimi due anni, il forfettario si perde retroattivamente. Strutturare i clienti subito differenziati.</p>

            {/* Quando non conviene */}
            <h2 id="quando-non-conviene" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quando il forfettario non conviene
            </h2>
            <p>
              Il forfettario è quasi sempre la scelta migliore per chi parte, ma ci sono casi in cui meglio puntare diretto al semplificato:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Costi reali alti</strong>: ristoranti, attività con magazzino, e-commerce con merce, professioni con investimenti hardware (fotografi, videomaker)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Investimenti rilevanti previsti</strong> in macchinari, software, immobili strumentali: il forfettario non permette di dedurli</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Clientela quasi tutta privata</strong> e prezzi sensibili all&apos;IVA: il regime ordinario consente di applicare aliquote IVA agevolate (4%, 5%, 10%) che il forfettario ignora</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Clienti corporate che richiedono fattura con IVA standard</strong> (alcuni grandi clienti la pretendono per loro processi interni)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Vicinanza alla soglia 85.000</strong> con tendenza al superamento: meglio passare prima per evitare il salto traumatico</span></li>
            </ul>

            {/* Approfondimenti correlati */}
            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/aprire-partita-iva-online" className="text-[var(--color-accent)] hover:underline">Come aprire la Partita IVA online nel 2026</Link> &mdash; il flusso completo passo passo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/calcolatori/forfettario" className="text-[var(--color-accent)] hover:underline">Calcolatore forfettario gratuito</Link> &mdash; stima imposta e contributi sul tuo caso specifico</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/piva-professionista" className="text-[var(--color-accent)] hover:underline">Bundle Partita IVA Professionista forfettario</Link> &mdash; apertura, contabilità annuale, dichiarazione: tutto incluso</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi gestire il tuo forfettario senza pensieri?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Bundle completo Partita IVA Professionista forfettario: apertura, contabilità annuale, scadenze, dichiarazione dei redditi. 549 euro primo anno, commercialista dedicato, portale clienti incluso.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/servizi/piva-professionista" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                  Scopri il bundle 549 euro
                </Link>
                <Link href="/calcolatori/forfettario" className="inline-block px-6 py-3 border border-zinc-200 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium">
                  Apri il calcolatore
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
