import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "730 precompilato: conviene farlo da soli? Guida 2026 | A.T. Consulting Parma",
  description:
    "Il 730 precompilato sembra pronto, ma spesso non lo è. Detrazioni dimenticate, errori di calcolo, casi che non gestisce: quando affidarsi a un dottore commercialista conviene davvero.",
  alternates: {
    canonical: "/blog/730-precompilato-conviene",
  },
  openGraph: {
    title: "730 precompilato: conviene farlo da soli? Guida 2026",
    description:
      "Il 730 precompilato sembra pronto, ma spesso non lo è. Detrazioni dimenticate, errori di calcolo, casi che non gestisce: quando affidarsi a un dottore commercialista conviene davvero.",
    type: "article",
    publishedTime: "2026-04-25T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [{ url: "https://www.atparma.com/og?slug=730-precompilato-conviene", width: 1200, height: 630, alt: "730 precompilato 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.atparma.com/og?slug=730-precompilato-conviene"],
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
            headline: "730 precompilato: conviene farlo da soli? Guida 2026",
            description:
              "Il 730 precompilato sembra pronto, ma spesso non lo è. Detrazioni dimenticate, errori di calcolo, casi che non gestisce: quando affidarsi a un dottore commercialista conviene davvero.",
            image: "https://www.atparma.com/og?slug=730-precompilato-conviene",
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
            mainEntityOfPage: "https://www.atparma.com/blog/730-precompilato-conviene",
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
            730 precompilato: conviene farlo da soli?
          </h1>

          {/* TODO: sostituire con immagine dedicata generata per questo articolo. */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/og?slug=730-precompilato-conviene" alt="730 precompilato 2026" fill unoptimized className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Ogni anno l&apos;Agenzia delle Entrate mette a disposizione il <strong>modello 730 precompilato</strong>: una dichiarazione già parzialmente compilata con i dati che il fisco conosce. La promessa è semplice: accedi col SPID, controlli, accetti, e in pochi minuti la dichiarazione è inviata. Gratis. Senza commercialista.
            </p>
            <p>
              Funziona davvero così? Per una parte di contribuenti sì. Per la maggioranza, no. In questa guida spieghiamo cosa contiene davvero il precompilato, dove sbaglia più spesso, quali detrazioni dimentica, e quando vale la pena affidarsi a un dottore commercialista anche per risparmiare poche decine di euro &mdash; perché spesso il rimborso recuperato vale molto di più del costo del servizio.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#cos-e-precompilato" className="text-[var(--color-accent)] hover:underline">Cos&apos;è il 730 precompilato e come funziona</a></li>
                <li><a href="#cosa-contiene" className="text-[var(--color-accent)] hover:underline">Cosa contiene davvero (e cosa no)</a></li>
                <li><a href="#errori-comuni" className="text-[var(--color-accent)] hover:underline">Gli errori più comuni del precompilato</a></li>
                <li><a href="#detrazioni-dimenticate" className="text-[var(--color-accent)] hover:underline">Le detrazioni che il precompilato dimentica</a></li>
                <li><a href="#quando-basta" className="text-[var(--color-accent)] hover:underline">Quando il precompilato basta davvero</a></li>
                <li><a href="#quando-non-basta" className="text-[var(--color-accent)] hover:underline">Quando non basta: i casi a rischio</a></li>
                <li><a href="#cosa-rischi" className="text-[var(--color-accent)] hover:underline">Cosa rischi facendolo da solo</a></li>
                <li><a href="#confronto" className="text-[var(--color-accent)] hover:underline">Precompilato vs commercialista: il confronto reale</a></li>
                <li><a href="#convenienza" className="text-[var(--color-accent)] hover:underline">Conviene davvero risparmiare 50 euro?</a></li>
              </ul>
            </div>

            {/* Cos'è */}
            <h2 id="cos-e-precompilato" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cos&apos;è il 730 precompilato e come funziona
            </h2>
            <p>
              Il 730 precompilato è la dichiarazione dei redditi che l&apos;Agenzia delle Entrate prepara automaticamente partendo dai dati che riceve da datori di lavoro, banche, farmacie, medici, scuole, assicurazioni e altri soggetti obbligati alla trasmissione telematica. È disponibile dal 30 aprile di ogni anno sul sito dell&apos;Agenzia, accessibile con SPID, CIE o CNS.
            </p>
            <p>
              Una volta entrato, il contribuente vede la propria dichiarazione già compilata. Può accettarla così com&apos;è, oppure modificarla, integrarla, correggerla. La trasmissione è gratuita. Se accetti il precompilato senza modifiche, eviti anche eventuali controlli formali sui documenti delle detrazioni &mdash; un vantaggio non da poco, almeno sulla carta.
            </p>

            {/* Cosa contiene */}
            <h2 id="cosa-contiene" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa contiene davvero (e cosa no)
            </h2>
            <p>
              Il precompilato contiene quasi tutto quello che il fisco già conosce. Ma <strong>non contiene quello che il fisco non sa</strong>, e quasi sempre quello che non sa è proprio quello che ti farebbe risparmiare di più.
            </p>
            <p><strong>Cosa trovi già dentro:</strong></p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Redditi da lavoro dipendente e pensione (dalla Certificazione Unica)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese mediche tracciate (farmacie, ospedali pubblici, medici convenzionati)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Interessi sul mutuo per la prima casa (se la banca ha trasmesso i dati)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Premi assicurativi vita e infortuni (se l&apos;assicurazione ha trasmesso)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Contributi previdenziali obbligatori versati</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese universitarie e scolastiche se trasmesse dall&apos;istituto</span></li>
            </ul>
            <p><strong>Cosa manca quasi sempre:</strong></p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-red-500 font-bold">&times;</span> <span>Spese mediche pagate in contanti o presso strutture non convenzionate</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">&times;</span> <span>Spese veterinarie</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">&times;</span> <span>Bonus edilizi e ristrutturazioni (Ecobonus, Sismabonus, Bonus mobili)</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">&times;</span> <span>Spese funebri</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">&times;</span> <span>Erogazioni liberali a ONLUS, partiti, associazioni sportive</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">&times;</span> <span>Affitti pagati da studenti universitari fuori sede</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">&times;</span> <span>Canone RAI in casi particolari</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">&times;</span> <span>Spese per badanti e assistenza familiari non autosufficienti</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">&times;</span> <span>Iscrizioni in palestra dei figli minori (sport dilettantistico)</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">&times;</span> <span>Trasporto pubblico (abbonamenti annuali)</span></li>
            </ul>

            {/* Errori comuni */}
            <h2 id="errori-comuni" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Gli errori più comuni del precompilato
            </h2>
            <p>
              Anche quando i dati ci sono, non sempre sono giusti. Ogni anno migliaia di contribuenti accettano il precompilato senza accorgersi di errori che pagano caro.
            </p>
            <p><strong>1. Spese mediche duplicate o classificate male.</strong> Una visita specialistica con ticket può essere registrata sia dalla farmacia (per i medicinali correlati) sia dall&apos;ospedale (per la visita stessa) e finire conteggiata due volte oppure inserita nella categoria sbagliata. Una detrazione su 100 euro di troppo significa 19 euro di rimborso che il fisco ti chiederà indietro l&apos;anno successivo.</p>
            <p><strong>2. Carichi familiari sbagliati.</strong> Se nel corso del 2025 hai cambiato situazione (matrimonio, separazione, nascita di un figlio, decesso di un familiare a carico), il precompilato spesso non aggiorna correttamente. Le detrazioni per carichi familiari valgono fino a 1.220 euro a figlio: un errore qui pesa.</p>
            <p><strong>3. Mutuo prima casa con co-intestazione.</strong> Se il mutuo è cointestato con coniuge o convivente e solo uno dei due lo paga davvero, la quota detraibile va divisa correttamente. Il precompilato applica spesso il 50% standard, anche quando uno dei due non potrebbe detrarre (per assenza di reddito o per altri motivi).</p>
            <p><strong>4. Affitti per casa principale non considerati.</strong> Se sei in affitto e hai un contratto registrato, hai diritto a detrazioni che variano da 150 a 991 euro a seconda del reddito. Il precompilato non le applica se non glielo dici esplicitamente.</p>
            <p><strong>5. Codici tributo confusi sui bonus edilizi.</strong> Il bonus ristrutturazione 50%, l&apos;Ecobonus 65%, il Superbonus 90% del 2025, il Bonus mobili: ognuno ha codici e quote diverse. Un errore qui può costare migliaia di euro di detrazione persa o, peggio, una contestazione successiva con sanzioni.</p>

            {/* Detrazioni dimenticate */}
            <h2 id="detrazioni-dimenticate" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Le detrazioni che il precompilato dimentica
            </h2>
            <p>
              Queste sono le voci che, in oltre 20 anni di esperienza, vediamo dimenticate più frequentemente nei 730 fatti senza commercialista. Quasi tutte richiedono che il contribuente le inserisca a mano: il precompilato non le suggerisce nemmeno.
            </p>
            <p><strong>Spese veterinarie.</strong> Detraibili al 19% fino a 550 euro annui per cani, gatti e altri animali da compagnia. Bastano gli scontrini della farmacia veterinaria e le fatture dello studio.</p>
            <p><strong>Sport dilettantistico per i figli.</strong> Iscrizioni a palestra, piscina, scuole calcio, danza, arti marziali per ragazzi da 5 a 18 anni. Detrazione 19% fino a 210 euro a figlio.</p>
            <p><strong>Trasporto pubblico.</strong> Abbonamenti annuali ai servizi di trasporto pubblico locale, regionale e interregionale. Detrazione 19% fino a 250 euro.</p>
            <p><strong>Erogazioni liberali a ONLUS e enti del terzo settore.</strong> Detraibili al 30% (fino a 30.000 euro), oppure deducibili fino al 10% del reddito complessivo.</p>
            <p><strong>Spese per intermediazione immobiliare.</strong> Se hai comprato la prima casa nel 2025, la commissione pagata all&apos;agenzia immobiliare è detraibile al 19% fino a 1.000 euro.</p>
            <p><strong>Asilo nido.</strong> Rette pagate per i figli da 0 a 3 anni, detraibili al 19% fino a 632 euro a figlio.</p>
            <p><strong>Spese funebri.</strong> Per il decesso di un familiare, detrazione 19% fino a 1.550 euro.</p>
            <p><strong>Addetti all&apos;assistenza personale.</strong> Per badanti regolari di familiari non autosufficienti, detrazione 19% fino a 2.100 euro (con limiti di reddito complessivo).</p>

            {/* Quando basta */}
            <h2 id="quando-basta" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quando il precompilato basta davvero
            </h2>
            <p>
              Per essere onesti, ci sono casi in cui il precompilato funziona bene e fare il 730 da soli non è una cattiva idea. Sono profili semplici, senza variabili nascoste:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Lavoratore dipendente con un solo datore di lavoro per l&apos;intero anno</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Nessun immobile in locazione</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Nessuna ristrutturazione in corso e nessun bonus edilizio</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese mediche solo in farmacia e ospedale pubblico</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Nessun figlio a carico oppure situazione familiare invariata da anni</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Nessun mutuo cointestato con quote miste</span></li>
            </ul>
            <p>
              Se ti riconosci in tutti questi punti, accettare il precompilato così com&apos;è è ragionevole. Risparmi tempo e denaro.
            </p>

            {/* Quando non basta */}
            <h2 id="quando-non-basta" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quando non basta: i casi a rischio
            </h2>
            <p>
              Se invece nel 2025 hai vissuto anche solo una di queste situazioni, il precompilato da solo non basta e rischi di lasciare soldi sul tavolo o di sbagliare:
            </p>
            <p><strong>Hai cambiato lavoro o avuto più datori di lavoro.</strong> Le ritenute potrebbero essere state calcolate male, e il conguaglio andrebbe rifatto. È la prima causa di errori nel precompilato.</p>
            <p><strong>Hai sostenuto spese mediche fuori dal circuito convenzionato.</strong> Visite private, terapie, occhiali da farmacia non convenzionata: tutto da inserire a mano. Ogni anno una famiglia media tralascia tra 800 e 1.500 euro di spese detraibili.</p>
            <p><strong>Hai ristrutturato casa, cambiato caldaia, installato fotovoltaico.</strong> Bonus edilizi, Ecobonus, Sismabonus, Bonus mobili: tutti gestiti con regole specifiche e quote pluriennali. Un errore qui costa caro.</p>
            <p><strong>Sei in affitto come inquilino o hai un immobile in locazione.</strong> Cedolare secca, IRPEF ordinaria, detrazioni inquilini, reddito da locazione: variabili che il precompilato gestisce in modo standard, spesso non ottimale.</p>
            <p><strong>Hai figli a carico o familiari non autosufficienti.</strong> Carichi familiari, asilo nido, sport, badanti: ogni voce ha le sue regole.</p>
            <p><strong>Hai redditi da capitale o partecipazioni.</strong> Dividendi, plusvalenze, redditi diversi: spesso non sono nel precompilato e vanno aggiunti.</p>
            <p><strong>Hai ricevuto bonus o sostegni nel 2025.</strong> Bonus 100 euro, NASpI, indennità COVID residue, trattamento integrativo: tutti soggetti a verifiche e possibili restituzioni.</p>

            {/* Cosa rischi */}
            <h2 id="cosa-rischi" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa rischi facendolo da solo
            </h2>
            <p>
              Sbagliare il 730 ha conseguenze concrete. Le tre più frequenti che vediamo nei nostri controlli:
            </p>
            <p><strong>Rimborsi minori del dovuto.</strong> Tradotto: lasci soldi all&apos;Erario che ti spettano. Una detrazione da 1.000 euro non sfruttata sono 190 euro di rimborso perso. Il commercialista costa di solito molto meno di quel rimborso.</p>
            <p><strong>Avvisi di accertamento successivi.</strong> Se inserisci una detrazione senza avere il documento di supporto giusto, l&apos;Agenzia delle Entrate può chiedertela indietro fino a 5 anni dopo, con interessi e sanzioni. La sanzione ordinaria è del 30% sull&apos;imposta non versata.</p>
            <p><strong>Adesione obbligata in caso di controllo.</strong> Senza documenti correttamente archiviati, in sede di verifica spesso si finisce per pagare comunque, anche se la detrazione era teoricamente legittima. La parola del contribuente non basta.</p>

            {/* CTA intermedio */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>Hai già la Certificazione Unica?</strong> Possiamo controllare il tuo precompilato, integrare le detrazioni mancanti e inviare il 730 con il rimborso massimo recuperabile. Il nostro servizio costa 50 euro (listino 79) e include la verifica completa di tutte le detrazioni applicabili al tuo profilo.
              </p>
            </div>

            {/* Confronto */}
            <h2 id="confronto" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Precompilato vs commercialista: il confronto reale
            </h2>
            <p>
              Le differenze pratiche tra i due approcci, riassunte:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Aspetto</th>
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Precompilato fai-da-te</th>
                    <th className="text-left py-3 font-semibold text-zinc-900">Commercialista</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Costo</td>
                    <td className="py-3 pr-4">Gratuito</td>
                    <td className="py-3">50&ndash;100 euro</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Tempo richiesto</td>
                    <td className="py-3 pr-4">2&ndash;6 ore (con pratica)</td>
                    <td className="py-3">15 minuti per inviare i documenti</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Detrazioni recuperate</td>
                    <td className="py-3 pr-4">Solo quelle già nel precompilato</td>
                    <td className="py-3">Tutte quelle a cui hai diritto</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Rischio errori</td>
                    <td className="py-3 pr-4">Alto se profilo complesso</td>
                    <td className="py-3">Basso, con verifica documentale</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Responsabilità in caso di controllo</td>
                    <td className="py-3 pr-4">Tutta del contribuente</td>
                    <td className="py-3">Condivisa col professionista (visto di conformità)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Assistenza per anni successivi</td>
                    <td className="py-3 pr-4">Nessuna</td>
                    <td className="py-3">Continuità e archivio storico</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Convenienza */}
            <h2 id="convenienza" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Conviene davvero risparmiare 50 euro?
            </h2>
            <p>
              Facciamo un conto concreto. Una famiglia tipo con due figli, mutuo prima casa, qualche spesa medica privata e un abbonamento al trasporto pubblico recupera in media tra 400 e 1.200 euro di detrazioni che il precompilato non valorizza pienamente. Il commercialista costa 50 euro. Il margine di guadagno netto è almeno 350 euro.
            </p>
            <p>
              A questo si aggiunge la copertura in caso di controllo, l&apos;archiviazione ordinata dei documenti, la possibilità di chiedere consigli durante l&apos;anno per scelte fiscali (prima casa, ristrutturazioni, donazioni). Il valore di un commercialista non è solo nei 30 minuti che impiega a fare il 730, ma in tutto quello che evita prima e dopo.
            </p>
            <p>
              La domanda giusta non è &laquo;posso fare il 730 da solo?&raquo;, ma <strong>&laquo;mi conviene farlo da solo o pagare un professionista?&raquo;</strong>. Se rientri nei profili semplici, fallo pure da solo. In tutti gli altri casi, il calcolo torna quasi sempre a favore del commercialista &mdash; non per principio, ma per matematica.
            </p>

            {/* Approfondimenti correlati */}
            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/come-fare-730-online" className="text-[var(--color-accent)] hover:underline">Come fare il 730 online: guida completa 2026</Link> &mdash; il flusso passo passo, scadenze e documenti</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/commercialista-online" className="text-[var(--color-accent)] hover:underline">Commercialista online: come sceglierlo e perché conviene</Link> &mdash; la guida alla scelta del professionista giusto</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/dichiarazione-730" className="text-[var(--color-accent)] hover:underline">Servizio 730 online</Link> &mdash; il nostro servizio completo a 50 euro</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi essere sicuro di non lasciare soldi sul tavolo?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                I nostri dottori commercialisti controllano il tuo precompilato, integrano le detrazioni mancanti e inviano il 730 in modo telematico. Tutto online, senza file in studio. A partire da 50 euro (listino 79), per la stagione 2026.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/servizi/dichiarazione-730" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                  Scopri il servizio 730 online
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
