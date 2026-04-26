import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Quadro RW 2026: chi è obbligato e come dichiarare conti, cripto e immobili esteri | A.T. Consulting Parma",
  description:
    "Guida al quadro RW 2026 per residenti in Italia con conti esteri, cripto, immobili o broker stranieri. Sanzioni 3-15% per omissioni. Servizi di compilazione da €98.",
  alternates: {
    canonical: "/servizi/quadro-rw",
  },
  openGraph: {
    title: "Quadro RW 2026 — chi deve compilarlo e quanto rischi se ometti",
    description:
      "Conti esteri, criptovalute, immobili all'estero, broker stranieri: tutto va dichiarato nel quadro RW. Sanzioni fino al 15% del valore non dichiarato.",
    type: "website",
    images: [{ url: "https://www.atparma.com/og?slug=quadro-rw", width: 1200, height: 630, alt: "Quadro RW 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.atparma.com/og?slug=quadro-rw"],
  },
};

const CASI_OBBLIGO = [
  {
    title: "Conti correnti e depositi esteri",
    desc: "Revolut, Wise, N26, Trade Republic, Bunq, conti tradizionali in Svizzera, Lussemburgo, Francia, Germania. Obbligo se valore massimo durante l'anno > €15.000 (giacenza media > €5.000 implica anche IVAFE €34,20).",
  },
  {
    title: "Criptovalute (sezione dedicata sotto)",
    desc: "Binance, Coinbase, Kraken, Bybit, OKX, wallet privati MetaMask/Ledger/Trezor, NFT, stablecoin. Niente soglia: anche €50 di Bitcoin va dichiarato.",
  },
  {
    title: "Immobili all'estero",
    desc: "Seconda casa Spagna, Croazia, Francia, Romania, Portogallo, Albania, USA. Sempre obbligatorio (no soglia). Anche IVIE 0,76% (1,06% paesi black list) sul valore catastale o di mercato.",
  },
  {
    title: "Broker e dossier titoli stranieri",
    desc: "Interactive Brokers, Trading 212, eToro, DEGIRO, Lightyear, Tastytrade. Anche se il broker è italiano ma il prodotto è estero (ETF UCITS Lussemburgo, azioni USA): potenziale obbligo di dichiarazione.",
  },
  {
    title: "Partecipazioni in società estere",
    desc: "Anche minoritarie. Holdings personali a Malta, Lussemburgo, Olanda, Cipro. Dividendi e plusvalenze sulla cessione vanno tassati, le quote vanno monitorate.",
  },
  {
    title: "Polizze vita e pensioni private estere",
    desc: "Polizze unit-linked Lussemburgo, fondi pensione svizzeri di lavoratori transfrontalieri, prodotti previdenziali esteri.",
  },
  {
    title: "Lavoratori transfrontalieri",
    desc: "Residenti in Italia che lavorano in Svizzera, San Marino, Francia, Slovenia, Austria. Devono dichiarare conti aperti nel paese di lavoro.",
  },
  {
    title: "Lavoratori per organizzazioni internazionali",
    desc: "ONU, FAO, BCE, NATO, EUI Firenze: anche se i redditi sono esenti per convenzione, gli investimenti esteri restano da dichiarare.",
  },
];

const FAQS = [
  {
    q: "Quale servizio devo scegliere se ho solo un conto Revolut e qualche cripto?",
    a: "Se sei lavoratore dipendente o pensionato, il servizio giusto è la <strong>Dichiarazione 730 avanzata</strong> (€98), che include il quadro RW per conti e cripto + immobili esteri + bonus. Niente complicazioni, tutto compreso. Solo se hai anche RT plusvalenze rilevanti, P.IVA cessata o IVIE/IVAFE complessi serve l'<strong>UPF avanzato</strong> (€198).",
  },
  {
    q: "Ho una P.IVA. Posso usare il 730 avanzato?",
    a: "No. Chi ha P.IVA attiva deve fare il modello Redditi Persone Fisiche (UPF), non il 730. Per chi ha P.IVA + attività estere serve l'<strong>UPF avanzato</strong> a €198, che copre tutti i quadri necessari (RW, RT, IVIE/IVAFE) integrati con la dichiarazione completa.",
  },
  {
    q: "Cosa succede se ometto il quadro RW?",
    a: "Sanzioni amministrative dal 3% al 15% del valore non dichiarato (paesi cooperativi), dal 6% al 30% per paesi black list, con minimo €516. In più il termine di accertamento dell'AdE raddoppia da 5 a 10 anni: omettere 3 anni fa significa rischiare contestazioni fino al 2034. <Link href='/servizi/quadro-rw-ravvedimento' class='underline'>Se hai già omesso anni passati, il ravvedimento operoso costa molto meno</Link>.",
  },
  {
    q: "AIRE = niente quadro RW?",
    a: "Dipende. L'iscrizione all'AIRE non determina automaticamente la perdita della residenza fiscale italiana. Se mantieni il domicilio o il centro degli interessi vitali in Italia, sei ancora residente fiscale italiano e devi fare il quadro RW. Casi tipici di AIRE comunque obbligati: studenti all'estero per un periodo, lavoratori distaccati, italiani in paradisi fiscali (presunzione di residenza italiana salvo prova contraria).",
  },
  {
    q: "I conti tenuti tramite intermediari italiani vanno dichiarati?",
    a: "No, sono <strong>esonerati dal monitoraggio</strong> se l'intermediario italiano applica la ritenuta fiscale alla fonte. Esempio: dossier titoli aperto presso Fineco con azioni USA → non va in RW (Fineco trattiene le imposte). Conto Revolut con i miei euro → va in RW (Revolut non è intermediario fiscale italiano).",
  },
  {
    q: "Devo dichiarare anche quote su exchange italiani come Young Platform?",
    a: "Sì, secondo la prassi prevalente. Le cripto-attività detenute su exchange italiani vanno comunque indicate nel quadro RW perché sono cripto-attività, non depositi bancari (gli intermediari cripto italiani non agiscono come sostituti d'imposta in modo equivalente alle banche).",
  },
];

export default function QuadroRwPage() {
  return (
    <>
      <SiteHeader current="servizi" />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Guida + servizio
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Quadro RW 2026: chi è obbligato e come dichiarare attività estere
          </h1>
          <p className="text-zinc-600 leading-relaxed text-lg max-w-2xl mx-auto mb-8">
            Conti correnti, criptovalute, immobili, broker, partecipazioni: tutto quello che hai all&apos;estero deve finire nel quadro RW della dichiarazione dei redditi. Sanzioni dal 3% al 15% del valore non dichiarato, accertamento raddoppiato a 10 anni. Te lo facciamo noi, con prezzi chiari, partendo da €98.
          </p>
          <p className="text-xs text-zinc-500">
            Aggiornato al 25 aprile 2026 &middot; Riferimento normativo: D.L. 167/1990, L. 197/2022 (Bilancio 2023) per cripto, L. Bilancio 2025 per plusvalenze
          </p>
        </section>

        {/* Quando sei obbligato */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Sei obbligato a fare il quadro RW?
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-10">
            L&apos;obbligo riguarda i <strong>residenti fiscali in Italia</strong> (non gli AIRE che hanno effettivamente perso la residenza). Ecco i casi più frequenti:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CASI_OBBLIGO.map((c) => (
              <div key={c.title} className="rounded-2xl border border-zinc-100 bg-white p-5">
                <h3 className="font-semibold mb-2 text-zinc-900 font-[family-name:var(--font-heading)]">{c.title}</h3>
                <p className="text-sm text-zinc-700 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cripto-attività — sezione dedicata SEO */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-6 sm:p-10">
            <p className="text-xs tracking-[0.2em] uppercase text-amber-700 font-medium mb-3">
              Caso speciale
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)] text-amber-900">
              Le criptovalute vanno dichiarate nel quadro RW
            </h2>
            <p className="text-amber-900 leading-relaxed mb-6">
              Dal 1° gennaio 2023 le cripto-attività sono esplicitamente soggette a obbligo di monitoraggio fiscale (Legge di Bilancio 2023, L. 197/2022, art. 1 commi 126-147). <strong>Niente soglia di esonero</strong>: a differenza dei conti correnti esteri (€15.000), per le cripto basta detenere anche solo €50 di Bitcoin per essere obbligati al quadro RW.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl bg-white border border-amber-200 p-4">
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">Imposta sostitutiva</p>
                <p className="text-2xl font-bold text-amber-900 font-[family-name:var(--font-heading)]">0,2%</p>
                <p className="text-xs text-amber-800 mt-1">sul valore al 31 dicembre (in luogo dell&apos;IVAFE)</p>
              </div>
              <div className="rounded-xl bg-white border border-amber-200 p-4">
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">Plusvalenze realizzate</p>
                <p className="text-2xl font-bold text-amber-900 font-[family-name:var(--font-heading)]">26%</p>
                <p className="text-xs text-amber-800 mt-1">senza soglia (la franchigia €2.000 è abolita dal 2025)</p>
              </div>
            </div>
            <h3 className="font-semibold text-amber-900 mb-3">Cosa va dichiarato</h3>
            <ul className="space-y-2 text-sm text-amber-900 mb-6">
              <li className="flex gap-2"><span className="font-bold">&bull;</span> Exchange esteri: Binance, Coinbase, Kraken, Bybit, OKX, KuCoin, Bitfinex</li>
              <li className="flex gap-2"><span className="font-bold">&bull;</span> Wallet privati: MetaMask, Ledger, Trezor, Phantom, Trust Wallet</li>
              <li className="flex gap-2"><span className="font-bold">&bull;</span> Stablecoin (USDT, USDC, DAI) e token di rete (BNB, MATIC, SOL)</li>
              <li className="flex gap-2"><span className="font-bold">&bull;</span> NFT (anche se non hanno generato vendite)</li>
              <li className="flex gap-2"><span className="font-bold">&bull;</span> Token di staking, lending, yield farming, DeFi</li>
              <li className="flex gap-2"><span className="font-bold">&bull;</span> Cripto su exchange italiani (Young Platform, Conio, Tinaba) per prassi prevalente</li>
            </ul>
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Attenzione alle permute cripto-cripto:</strong> convertire BTC in ETH è realizzazione fiscale, anche se non hai mai toccato euro. Stessa cosa per swap su DEX (Uniswap, PancakeSwap).
            </p>
          </div>
        </section>

        {/* Sanzioni */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
            Quanto rischi se ometti
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-zinc-200">
                  <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Caso</th>
                  <th className="text-left py-3 font-semibold text-zinc-900">Sanzione</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700">
                <tr className="border-b border-zinc-100">
                  <td className="py-3 pr-4 font-medium">Omissione paesi cooperativi (es. UE)</td>
                  <td className="py-3">3% &ndash; 15% del valore non dichiarato</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-3 pr-4 font-medium">Omissione paesi black list</td>
                  <td className="py-3">6% &ndash; 30% del valore non dichiarato</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-3 pr-4 font-medium">Sanzione minima</td>
                  <td className="py-3">€516 anche per piccole omissioni</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Termine accertamento</td>
                  <td className="py-3">Raddoppiato da 5 a 10 anni</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-2xl bg-zinc-50 border border-zinc-200 p-6">
            <p className="text-sm text-zinc-700 leading-relaxed">
              <strong>Esempio concreto:</strong> €30.000 su Revolut non dichiarati = sanzione fino a €4.500. €15.000 su Binance non dichiarati = sanzione fino a €2.250. Pagare €98-198 per affidare il quadro RW a un dottore commercialista vale circa il 2-5% di quello che rischi sbagliando.
            </p>
          </div>
        </section>

        {/* CTA Router — il cuore della pagina */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-center font-[family-name:var(--font-heading)]">
            Il servizio giusto per te
          </h2>
          <p className="text-zinc-600 leading-relaxed text-center max-w-2xl mx-auto mb-12">
            Il quadro RW non si compra da solo: vive sempre dentro una dichiarazione dei redditi (730 o UPF). Scegli il servizio giusto in base al tuo profilo.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* CTA 730 avanzato */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">
                Profilo A
              </p>
              <h3 className="font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">
                Dipendente o pensionato
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                Hai conti correnti esteri, cripto, qualche immobile all&apos;estero, ma sei un lavoratore dipendente o pensionato senza P.IVA attiva.
              </p>
              <p className="text-2xl font-bold mb-1 font-[family-name:var(--font-heading)]">€98</p>
              <p className="text-xs text-zinc-500 mb-4">730 avanzato &mdash; tutto incluso</p>
              <Link
                href="/servizi/dichiarazione-730-avanzato"
                className="block text-center px-6 py-2.5 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium"
              >
                Vai al 730 avanzato
              </Link>
            </div>

            {/* CTA UPF avanzato */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">
                Profilo B
              </p>
              <h3 className="font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">
                P.IVA cessata o casi avanzati
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                Hai P.IVA cessata con strascichi, oppure plusvalenze finanziarie complesse (RT), redditi esteri con credito d&apos;imposta, partecipazioni societarie estere.
              </p>
              <p className="text-2xl font-bold mb-1 font-[family-name:var(--font-heading)]">€198</p>
              <p className="text-xs text-zinc-500 mb-4">UPF avanzato &mdash; tutti i quadri</p>
              <Link
                href="/servizi/dichiarazione-upf-avanzato"
                className="block text-center px-6 py-2.5 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium"
              >
                Vai all&apos;UPF avanzato
              </Link>
            </div>

            {/* CTA preventivo */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-3">
                Profilo C
              </p>
              <h3 className="font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">
                Caso complesso
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                Holdings estere, paesi black list, più di 6 attività in giurisdizioni diverse, lavoratore transfrontaliero con conguaglio contributivo. Servono mani esperte.
              </p>
              <p className="text-2xl font-bold mb-1 font-[family-name:var(--font-heading)]">Su misura</p>
              <p className="text-xs text-zinc-500 mb-4">preventivo personalizzato</p>
              <Link
                href="/contatti?servizio=quadro-rw-complesso"
                className="block text-center px-6 py-2.5 border border-zinc-300 text-zinc-700 rounded-lg hover:bg-white transition-colors text-sm font-medium"
              >
                Richiedi preventivo
              </Link>
            </div>
          </div>
        </section>

        {/* Box ravvedimento */}
        <section className="max-w-4xl mx-auto px-6 mt-16">
          <div className="rounded-2xl bg-rose-50 border border-rose-200 p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-rose-900 mb-2 font-[family-name:var(--font-heading)]">
              Hai omesso il quadro RW negli anni passati?
            </h3>
            <p className="text-sm text-rose-900 leading-relaxed mb-4">
              Se scopri ora di aver dimenticato di dichiarare conti esteri, cripto o immobili in dichiarazioni passate, il <strong>ravvedimento operoso</strong> riduce le sanzioni fino a 1/8 dell&apos;importo pieno. Va fatto prima che parta l&apos;accertamento dell&apos;AdE.
            </p>
            <Link
              href="/servizi/quadro-rw-ravvedimento"
              className="inline-block px-6 py-2.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-medium"
            >
              Scopri il ravvedimento RW
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center font-[family-name:var(--font-heading)]">
            Domande frequenti
          </h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-zinc-100 bg-white p-5 hover:border-zinc-200 transition-colors"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-zinc-900 text-sm font-[family-name:var(--font-heading)]">
                    {f.q}
                  </h3>
                  <svg
                    className="w-4 h-4 shrink-0 text-zinc-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p
                  className="text-sm text-zinc-700 leading-relaxed mt-3"
                  dangerouslySetInnerHTML={{ __html: f.a }}
                />
              </details>
            ))}
          </div>
        </section>

        {/* CTA finale dubbio */}
        <section className="max-w-3xl mx-auto px-6 mt-16">
          <div className="rounded-2xl bg-[var(--color-surface)] p-8 text-center">
            <p className="text-zinc-700 leading-relaxed mb-6">
              Non sei sicuro del profilo giusto? Scrivici due righe sulla tua situazione e ti rispondiamo entro 1 giorno lavorativo con la fascia di servizio adatta.
            </p>
            <Link
              href="/contatti?servizio=quadro-rw-info"
              className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium"
            >
              Scrivici per orientamento
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
