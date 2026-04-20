import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Come fare il 730 online: guida completa 2026 | A.T. Consulting Parma",
  description: "Guida al modello 730 online nel 2026: chi deve presentarlo, scadenze, documenti necessari, detrazioni e quando conviene rivolgersi a un commercialista.",
  alternates: {
    canonical: "/blog/come-fare-730-online",
  },
  openGraph: {
    title: "Come fare il 730 online: guida completa 2026",
    description: "Guida al modello 730 online nel 2026: chi deve presentarlo, scadenze, documenti necessari, detrazioni e quando conviene rivolgersi a un commercialista.",
    type: "article",
    publishedTime: "2026-03-18T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [{ url: "/images/generated-1775312805408.png", width: 1200, height: 630, alt: "Dichiarazione 730 online" }],
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
            headline: "Come fare il 730 online: guida completa 2026",
            description: "Guida al modello 730 online nel 2026: chi deve presentarlo, scadenze, documenti necessari, detrazioni e quando conviene rivolgersi a un commercialista.",
            image: "https://www.atparma.com/images/generated-1775312805408.png",
            datePublished: "2026-03-18",
            dateModified: "2026-03-18",
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
            mainEntityOfPage: "https://www.atparma.com/blog/come-fare-730-online",
          }),
        }}
      />

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Blog
          </Link>

          <time className="text-xs text-zinc-400 block mb-3">18 marzo 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Come fare il 730 online: guida completa 2026
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/images/generated-1775312805408.png" alt="Dichiarazione 730 online" fill className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Il <strong>modello 730</strong> e la dichiarazione dei redditi più utilizzata in Italia: ogni anno oltre 20 milioni di contribuenti la presentano per comunicare i propri redditi, detrarre le spese sostenute e ottenere eventuali rimborsi IRPEF direttamente in busta paga o sulla pensione. Se stai cercando di capire <strong>come fare il 730 online nel 2026</strong>, sei nel posto giusto.
            </p>
            <p>
              In questa guida completa ti spieghiamo chi deve presentarlo, quali sono le scadenze aggiornate al 2026, quali documenti preparare, come funziona il 730 precompilato, quali sono le detrazioni che la maggior parte dei contribuenti dimentica, e quando conviene affidarsi a un commercialista online piuttosto che procedere in autonomia.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#cos-e-il-730" className="text-[var(--color-accent)] hover:underline">Cos&apos;e il modello 730 e a cosa serve</a></li>
                <li><a href="#chi-deve-presentare" className="text-[var(--color-accent)] hover:underline">Chi deve presentare il 730 nel 2026</a></li>
                <li><a href="#chi-non-puo" className="text-[var(--color-accent)] hover:underline">Chi non può usare il 730</a></li>
                <li><a href="#scadenze-2026" className="text-[var(--color-accent)] hover:underline">Scadenze 730 nel 2026</a></li>
                <li><a href="#precompilato" className="text-[var(--color-accent)] hover:underline">730 precompilato: come funziona</a></li>
                <li><a href="#precompilato-vs-commercialista" className="text-[var(--color-accent)] hover:underline">Precompilato o commercialista? Il confronto</a></li>
                <li><a href="#documenti" className="text-[var(--color-accent)] hover:underline">Documenti necessari: la checklist completa</a></li>
                <li><a href="#detrazioni" className="text-[var(--color-accent)] hover:underline">Tutte le detrazioni e deduzioni 2026</a></li>
                <li><a href="#detrazioni-dimenticate" className="text-[var(--color-accent)] hover:underline">Le 10 detrazioni più dimenticate</a></li>
                <li><a href="#errori-comuni" className="text-[var(--color-accent)] hover:underline">Errori comuni da evitare</a></li>
                <li><a href="#rimborsi" className="text-[var(--color-accent)] hover:underline">Come funzionano i rimborsi IRPEF</a></li>
                <li><a href="#730-online" className="text-[var(--color-accent)] hover:underline">Come fare il 730 online con un commercialista</a></li>
              </ul>
            </div>

            {/* Cos'e il 730 */}
            <h2 id="cos-e-il-730" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cos&apos;e il modello 730 e a cosa serve
            </h2>
            <p>
              Il modello 730 e una dichiarazione dei redditi semplificata introdotta per lavoratori dipendenti e pensionati. A differenza del modello Redditi PF (ex Unico), il 730 ha un vantaggio fondamentale: il conguaglio — che sia un rimborso o un addebito — viene effettuato direttamente dal sostituto d&apos;imposta (il datore di lavoro o l&apos;ente pensionistico) nella busta paga o nella pensione, senza dover attendere i tempi lunghi dell&apos;Agenzia delle Entrate.
            </p>
            <p>
              Questo significa che se hai diritto a un rimborso, lo ricevi già a partire da luglio (per i dipendenti) o da agosto-settembre (per i pensionati), proporzionalmente alla data di presentazione della dichiarazione.
            </p>

            {/* Chi deve presentare */}
            <h2 id="chi-deve-presentare" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Chi deve presentare il 730 nel 2026
            </h2>
            <p>
              La presentazione del 730 e <strong>obbligatoria</strong> in diversi casi. In altri e facoltativa, ma comunque conveniente perché permette di recuperare imposte pagate in eccesso. Ecco i casi principali:
            </p>
            <p><strong>E obbligatorio presentare il 730 se:</strong></p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Hai avuto <strong>più di un datore di lavoro</strong> nel corso del 2025 e le ritenute non sono state ricalcolate</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Hai percepito <strong>redditi da immobili</strong> (affitti, cedolare secca)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Devi restituire <strong>bonus o agevolazioni</strong> percepiti indebitamente (es. bonus Renzi/trattamento integrativo)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Hai percepito <strong>indennità INPS</strong> (cassa integrazione, disoccupazione NASpI) senza conguaglio</span></li>
            </ul>
            <p className="mt-4"><strong>E facoltativo ma conviene se:</strong></p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Hai sostenuto <strong>spese detraibili</strong> (mediche, mutuo, ristrutturazioni, istruzione)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Hai versato <strong>contributi deducibili</strong> (previdenza complementare, colf e badanti)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Vuoi destinare il <strong>5 per mille o l&apos;8 per mille</strong></span></li>
            </ul>

            {/* Chi non può */}
            <h2 id="chi-non-puo" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Chi non può usare il modello 730
            </h2>
            <p>
              Non possono utilizzare il 730 i contribuenti che hanno aperto una <strong>Partita IVA</strong> (anche in regime forfettario), chi ha redditi da impresa o lavoro autonomo professionale, e chi deve presentare dichiarazioni per trust, società di persone o soggetti non residenti senza sostituto d&apos;imposta. In questi casi va utilizzato il <strong>modello Redditi PF</strong>.
            </p>
            <p>
              Se hai sia un reddito da lavoro dipendente che una Partita IVA, dovrai presentare il modello Redditi PF per tutti i redditi — non puoi usare il 730 per la parte da dipendente e Redditi PF per la parte da autonomo.
            </p>

            {/* Scadenze */}
            <h2 id="scadenze-2026" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Scadenze 730 nel 2026: tutte le date da segnare
            </h2>
            <p>
              Le scadenze fiscali per il modello 730 nel 2026 sono le seguenti:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>16 marzo 2026:</strong> i datori di lavoro e gli enti pensionistici devono consegnare la CU (Certificazione Unica) ai lavoratori</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>30 aprile 2026:</strong> l&apos;Agenzia delle Entrate mette a disposizione il 730 precompilato online</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>30 settembre 2026:</strong> termine ultimo per la presentazione del modello 730 (ordinario o precompilato)</span></li>
            </ul>
            <p className="mt-4">
              <strong>Consiglio:</strong> non aspettare settembre. Chi presenta il 730 entro giugno riceve il rimborso già nella busta paga di luglio. Chi aspetta settembre rischia di ricevere il rimborso solo a fine anno o addirittura nell&apos;anno successivo.
            </p>

            {/* Precompilato */}
            <h2 id="precompilato" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              730 precompilato: come funziona
            </h2>
            <p>
              Dal 2015 l&apos;Agenzia delle Entrate mette a disposizione il <strong>730 precompilato</strong>: una dichiarazione già parzialmente compilata con i dati in possesso del Fisco. I dati provengono da:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Certificazione Unica (CU) inviata dal datore di lavoro</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese sanitarie trasmesse dal Sistema Tessera Sanitaria</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Interessi passivi sui mutui (comunicati dalle banche)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Premi assicurativi (comunicati dalle compagnie)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Contributi previdenziali e assistenziali</span></li>
            </ul>
            <p className="mt-4">
              Per accedere al precompilato serve lo SPID, la CIE (Carta d&apos;Identità Elettronica) o la CNS (Carta Nazionale dei Servizi). Si accede dal sito dell&apos;Agenzia delle Entrate nella sezione dedicata.
            </p>
            <p>
              Attenzione: il fatto che sia &quot;precompilato&quot; non significa che sia completo o corretto. L&apos;Agenzia inserisce solo i dati che riceve automaticamente — tutto il resto va aggiunto manualmente.
            </p>

            {/* Precompilato vs commercialista */}
            <h2 id="precompilato-vs-commercialista" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Precompilato o commercialista? Il confronto onesto
            </h2>
            <p>
              E la domanda che si pongono milioni di italiani ogni anno. La risposta dipende dalla complessità della tua situazione fiscale.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900"></th>
                    <th className="text-left py-3 px-4 font-semibold text-zinc-900">Precompilato (fai da te)</th>
                    <th className="text-left py-3 pl-4 font-semibold text-zinc-900">Con commercialista</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Costo</td>
                    <td className="py-3 px-4">Gratuito</td>
                    <td className="py-3 pl-4">Da 50 euro (listino 79)</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Verifica detrazioni</td>
                    <td className="py-3 px-4">Solo quelle già inserite</td>
                    <td className="py-3 pl-4">Controllo completo e ricerca attiva</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Responsabilità</td>
                    <td className="py-3 px-4">Tua al 100%</td>
                    <td className="py-3 pl-4">Condivisa con il professionista</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Rischio errori</td>
                    <td className="py-3 px-4">Alto per situazioni complesse</td>
                    <td className="py-3 pl-4">Minimizzato</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Assistenza</td>
                    <td className="py-3 px-4">Nessuna</td>
                    <td className="py-3 pl-4">Supporto in caso di accertamento</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Adatto a</td>
                    <td className="py-3 px-4">Situazioni semplici (1 CU, no detrazioni particolari)</td>
                    <td className="py-3 pl-4">Più CU, immobili, ristrutturazioni, familiari a carico</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              In pratica: se hai un solo reddito da lavoro dipendente, nessun immobile e poche spese, il precompilato può bastare. In tutti gli altri casi, un commercialista spesso <strong>ti fa risparmiare più di quanto costa</strong>, individuando detrazioni che non avresti trovato da solo.
            </p>

            {/* Documenti */}
            <h2 id="documenti" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Documenti necessari per il 730: la checklist completa
            </h2>
            <p>
              Ecco l&apos;elenco completo dei documenti da raccogliere prima di presentare la dichiarazione. Conservali tutti — in caso di accertamento, l&apos;Agenzia delle Entrate può richiederli fino a 5 anni dopo.
            </p>
            <p className="font-semibold text-zinc-900 mt-6">Documenti di base:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>CU (Certificazione Unica) di tutti i datori di lavoro / enti pensionistici del 2025</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Dichiarazione 730 dell&apos;anno precedente (per riportare crediti residui)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Codice fiscale di coniuge e familiari a carico</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Dati catastali degli immobili posseduti</span></li>
            </ul>
            <p className="font-semibold text-zinc-900 mt-6">Spese detraibili (19%):</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese mediche e sanitarie (scontrini, fatture, ticket, occhiali, dentista, visite specialistiche)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Interessi passivi sul mutuo prima casa (contratto e quietanze della banca)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese scolastiche e universitarie (iscrizioni, mensa, gite)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese per attività sportive dei figli (5-18 anni)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Premi assicurativi (vita, infortuni, rischio non autosufficienza)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese funebri</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese veterinarie</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Abbonamenti al trasporto pubblico</span></li>
            </ul>
            <p className="font-semibold text-zinc-900 mt-6">Detrazioni edilizie e bonus casa:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Fatture e bonifici per ristrutturazioni edilizie (detrazione 50%)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Fatture per interventi di risparmio energetico — Ecobonus (detrazione 50-65%)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Documentazione Superbonus residuo (rate in detrazione)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Bonus mobili ed elettrodomestici (se legato a ristrutturazione)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Bonus verde (sistemazione giardini e terrazzi)</span></li>
            </ul>
            <p className="font-semibold text-zinc-900 mt-6">Oneri deducibili (abbattono il reddito imponibile):</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Contributi previdenziali obbligatori e volontari</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Contributi a fondi di previdenza complementare (fino a 5.164,57 euro)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Contributi per colf, badanti e collaboratori domestici (fino a 1.549,37 euro)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Assegni di mantenimento all&apos;ex coniuge (non per i figli)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Donazioni a ONLUS, ONG e istituzioni religiose</span></li>
            </ul>

            {/* Detrazioni dimenticate */}
            <h2 id="detrazioni-dimenticate" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Le 10 detrazioni più dimenticate dagli italiani
            </h2>
            <p>
              Ogni anno l&apos;Agenzia delle Entrate stima che i contribuenti italiani lasciano sul tavolo centinaia di milioni di euro in detrazioni non richieste. Ecco le più comuni:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">1.</span> <span><strong>Spese veterinarie</strong> — Detraibili al 19% per la parte eccedente 129,11 euro, fino a un massimo di 550 euro. Molti proprietari di animali non lo sanno.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">2.</span> <span><strong>Abbonamenti al trasporto pubblico</strong> — Fino a 250 euro all&apos;anno, detraibili al 19%. Vale per bus, metro, treni regionali e abbonamenti annuali.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">3.</span> <span><strong>Spese funebri</strong> — Detraibili fino a 1.550 euro per ogni evento, anche per persone non familiari.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">4.</span> <span><strong>Contributi colf e badanti</strong> — Deducibili fino a 1.549,37 euro. Molte famiglie con assistenza domestica dimenticano questa voce.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">5.</span> <span><strong>Affitto abitazione principale</strong> — Detrazione da 150 a 991,60 euro a seconda del reddito, per inquilini con contratto registrato.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">6.</span> <span><strong>Donazioni a ONLUS</strong> — Detraibili al 26% fino a 30.000 euro, oppure deducibili fino al 10% del reddito.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">7.</span> <span><strong>Previdenza complementare</strong> — I contributi versati sono deducibili fino a 5.164,57 euro. Un risparmio fiscale che può valere oltre 2.000 euro.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">8.</span> <span><strong>Spese per studenti fuori sede</strong> — Canone di affitto detraibile al 19% fino a 2.633 euro per studenti universitari che studiano a oltre 100 km da casa.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">9.</span> <span><strong>Bonus mobili</strong> — Detrazione del 50% fino a 5.000 euro per l&apos;acquisto di mobili ed elettrodomestici (classe A+ o superiore) legati a una ristrutturazione.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">10.</span> <span><strong>Assicurazioni rischio calamità</strong> — I premi per polizze contro eventi calamitosi sugli immobili sono detraibili al 19%, senza franchigià.</span></li>
            </ul>

            {/* Errori comuni */}
            <h2 id="errori-comuni" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Errori comuni da evitare nella compilazione del 730
            </h2>
            <p>
              Un errore nel 730 può costare caro: sanzioni, interessi di mora, o semplicemente un rimborso inferiore a quello che ti spettava. Ecco gli errori più frequenti:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Non dichiarare tutti i CU:</strong> se hai cambiato lavoro durante l&apos;anno, devi inserire tutte le Certificazioni Uniche. Dimenticarne una e una delle cause più comuni di avviso di accertamento.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Confondere detrazioni e deduzioni:</strong> le detrazioni riducono l&apos;imposta, le deduzioni riducono il reddito. Un errore nella classificazione altera il calcolo.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Dimenticare familiari a carico:</strong> ogni familiare a carico (reddito sotto 2.840,51 euro, o 4.000 euro per i figli fino a 24 anni) da diritto a detrazioni aggiuntive.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Non riportare i crediti dall&apos;anno precedente:</strong> se nel 730 dell&apos;anno scorso avevi un credito non rimborsato, va riportato. Il precompilato spesso lo fa, ma va verificato.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Pagare spese detraibili in contanti:</strong> dal 2020 le spese detraibili al 19% (tranne farmaci e dispositivi medici) devono essere pagate con mezzi tracciabili. Il pagamento in contanti fa perdere la detrazione.</span></li>
            </ul>

            {/* Rimborsi */}
            <h2 id="rimborsi" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Come funzionano i rimborsi IRPEF
            </h2>
            <p>
              Se dalla dichiarazione risulta un credito IRPEF, il rimborso avviene direttamente in busta paga o sulla pensione. Le tempistiche dipendono da quando presenti il 730:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Presentazione entro <strong>maggio-giugno</strong>: rimborso a luglio (dipendenti) o agosto-settembre (pensionati)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Presentazione a <strong>settembre</strong>: rimborso tra ottobre e dicembre</span></li>
            </ul>
            <p className="mt-4">
              Se il rimborso supera i <strong>4.000 euro</strong>, l&apos;Agenzia delle Entrate può effettuare controlli preventivi, allungando i tempi fino a 6 mesi. In questo caso il rimborso viene erogato direttamente dall&apos;Agenzia, non dal datore di lavoro.
            </p>
            <p>
              Se invece dalla dichiarazione emerge un debito, l&apos;importo viene trattenuto dalla busta paga o dalla pensione, con possibilità di rateizzazione fino a 5 rate (da luglio a novembre).
            </p>

            {/* Come fare il 730 online con commercialista */}
            <h2 id="730-online" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Come fare il 730 online con un commercialista
            </h2>
            <p>
              Fare il 730 online con un commercialista e oggi semplice e veloce. Non serve andare in studio, non servono appuntamenti e non servono code. Ecco come funziona con A.T. Consulting Parma:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">1.</span> <span><strong>Acquisti il servizio online</strong> direttamente dal nostro sito, a partire da 50 euro (listino 79)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">2.</span> <span><strong>Carichi i documenti</strong> nel portale clienti dedicato (CU, spese, documenti immobili)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">3.</span> <span><strong>Il nostro team verifica tutto:</strong> controlliamo ogni voce, cerchiamo detrazioni mancanti, verifichiamo la coerenza dei dati</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">4.</span> <span><strong>Ti inviamo il riepilogo</strong> con il risultato della dichiarazione (rimborso o debito) prima dell&apos;invio</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">5.</span> <span><strong>Procediamo con l&apos;invio telematico</strong> all&apos;Agenzia delle Entrate e ti consegniamo la ricevuta</span></li>
            </ul>
            <p className="mt-4">
              Il tutto si completa in 3-5 giorni lavorativi dalla ricezione dei documenti. Se hai domande o dubbi, il nostro team e raggiungibile via email, telefono o dal portale clienti.
            </p>

            {/* CTA intermedio */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>Hai già la CU?</strong> Non aspettare settembre. Prima presenti, prima ricevi il rimborso. Il nostro servizio 730 online costa 50 euro (listino 79) e include la verifica completa di tutte le detrazioni applicabili.
              </p>
            </div>

            {/* Link interni */}
            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <p>
              Se stai valutando anche altri servizi fiscali, potrebbero interessarti queste guide:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/aprire-partita-iva-online" className="text-[var(--color-accent)] hover:underline">Come aprire la Partita IVA online nel 2026</Link> — se stai pensando di metterti in proprio</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/commercialista-online" className="text-[var(--color-accent)] hover:underline">Commercialista online: come sceglierlo e perché conviene</Link> — la guida alla scelta del professionista giusto</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/faq" className="text-[var(--color-accent)] hover:underline">Domande frequenti</Link> — risposte alle domande più comuni sui nostri servizi</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/consulenza-fiscale" className="text-[var(--color-accent)] hover:underline">Consulenza fiscale</Link> — per esigenze più complesse oltre il 730</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi fare il 730 online con un professionista?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Affidati al nostro team di dottori commercialisti: controlliamo ogni detrazione, gestiamo l&apos;invio telematico e ti garantiamo assistenza completa. A partire da 50 euro (listino 79), interamente online.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contatti" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                  Prenota il tuo 730
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
