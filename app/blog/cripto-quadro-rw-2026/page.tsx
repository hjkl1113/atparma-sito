import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Cripto-attività in dichiarazione 2026: quadro RW per Bitcoin, exchange, wallet e DeFi | A.T. Consulting Parma",
  description:
    "Guida completa alla dichiarazione delle cripto-attività nel 2026: chi è obbligato, niente soglia, imposta sostitutiva 0,2%, plusvalenze 26%, exchange esteri, wallet privati, NFT, stablecoin, DeFi, permute cripto-cripto.",
  alternates: {
    canonical: "/blog/cripto-quadro-rw-2026",
  },
  openGraph: {
    title: "Cripto-attività in dichiarazione 2026: guida completa al quadro RW",
    description:
      "Bitcoin, Binance, Coinbase, MetaMask, NFT, DeFi: tutto quello che serve sapere per dichiarare cripto in Italia nel 2026 senza rischiare sanzioni 3-15%.",
    type: "article",
    publishedTime: "2026-04-26T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [{ url: "/images/parma-duomo-aerial.jpg", width: 1200, height: 630, alt: "Cripto-attività dichiarazione 2026" }],
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
            headline: "Cripto-attività in dichiarazione 2026: guida completa al quadro RW",
            description:
              "Guida completa alla dichiarazione delle cripto-attività nel 2026: chi è obbligato, niente soglia, imposta sostitutiva 0,2%, plusvalenze 26%, exchange esteri, wallet privati, NFT, stablecoin, DeFi, permute cripto-cripto.",
            image: "https://www.atparma.com/images/parma-duomo-aerial.jpg",
            datePublished: "2026-04-26",
            dateModified: "2026-04-26",
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
            mainEntityOfPage: "https://www.atparma.com/blog/cripto-quadro-rw-2026",
          }),
        }}
      />

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Blog
          </Link>

          <time className="text-xs text-zinc-400 block mb-3">26 aprile 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Cripto-attività in dichiarazione 2026: guida completa al quadro RW
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/images/parma-duomo-aerial.jpg" alt="Cripto-attività dichiarazione 2026" fill className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Se hai comprato Bitcoin, Ethereum o qualunque cripto-attività anche solo una volta nella vita, e sei residente fiscale in Italia, hai un&apos;obbligo dichiarativo nel 2026. Non importa se hai €50 o €500.000, se sei su Binance o su un wallet privato, se hai realizzato plusvalenze o stai solo holdando: <strong>il quadro RW va compilato</strong>.
            </p>
            <p>
              Questa guida copre tutto quello che serve sapere: cosa è considerato cripto-attività, chi è obbligato, le quattro imposte da conoscere, come si dichiarano i casi tipici (exchange esteri, wallet privati, NFT, stablecoin, DeFi, staking), gli errori che vediamo più spesso, le sanzioni reali e le sanatorie possibili.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice della guida</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#cos-e-cripto" className="text-[var(--color-accent)] hover:underline">Cosa sono le cripto-attività ai fini fiscali</a></li>
                <li><a href="#chi-obbligato" className="text-[var(--color-accent)] hover:underline">Chi è obbligato (e perché non c&apos;è soglia)</a></li>
                <li><a href="#quattro-imposte" className="text-[var(--color-accent)] hover:underline">Le 4 imposte sulle cripto da conoscere</a></li>
                <li><a href="#come-dichiarare-exchange" className="text-[var(--color-accent)] hover:underline">Come dichiarare gli exchange esteri</a></li>
                <li><a href="#come-dichiarare-wallet" className="text-[var(--color-accent)] hover:underline">Come dichiarare i wallet privati</a></li>
                <li><a href="#permute-cripto-cripto" className="text-[var(--color-accent)] hover:underline">Permute cripto-cripto: il caso più sottovalutato</a></li>
                <li><a href="#nft-stablecoin-defi" className="text-[var(--color-accent)] hover:underline">NFT, stablecoin, staking, DeFi</a></li>
                <li><a href="#exchange-italiani" className="text-[var(--color-accent)] hover:underline">E gli exchange italiani?</a></li>
                <li><a href="#errori-comuni" className="text-[var(--color-accent)] hover:underline">Errori comuni che vediamo</a></li>
                <li><a href="#sanzioni" className="text-[var(--color-accent)] hover:underline">Quanto rischi se ometti</a></li>
                <li><a href="#omesso-passato" className="text-[var(--color-accent)] hover:underline">E se ho omesso negli anni passati?</a></li>
              </ul>
            </div>

            {/* Cos'è */}
            <h2 id="cos-e-cripto" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa sono le cripto-attività ai fini fiscali
            </h2>
            <p>
              La definizione italiana segue il Regolamento UE MiCA (Markets in Crypto-Assets) e la Legge di Bilancio 2023 (L. 197/2022, art. 1 commi 126-147). <strong>Cripto-attività</strong> è un termine ampio che copre qualunque rappresentazione digitale di valore o di diritti che può essere trasferita e memorizzata elettronicamente attraverso tecnologia di registro distribuito o tecnologie analoghe.
            </p>
            <p>
              In pratica, sono cripto-attività ai fini fiscali italiani:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Criptovalute classiche</strong>: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Cardano (ADA), Polkadot (DOT), Ripple (XRP), e tutte le altre</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Stablecoin</strong>: USDT (Tether), USDC, DAI, BUSD, EURC. Anche se sono ancorate al dollaro o all&apos;euro, restano cripto-attività</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Token di rete</strong>: BNB (Binance), MATIC (Polygon), AVAX (Avalanche), token di staking nativo</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>NFT</strong>: opere d&apos;arte digitale, profile picture, oggetti di gaming. Sono cripto-attività non fungibili</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Token di staking, lending, yield farming</strong>: cToken, aToken, LP token su Aave/Compound/Uniswap</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Quote di fondi cripto</strong>: ETF su Bitcoin spot (US), prodotti strutturati esteri legati a cripto</span></li>
            </ul>

            {/* Chi obbligato */}
            <h2 id="chi-obbligato" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Chi è obbligato (e perché non c&apos;è soglia)
            </h2>
            <p>
              L&apos;obbligo riguarda <strong>tutte le persone fisiche residenti fiscali in Italia</strong> che durante l&apos;anno hanno detenuto cripto-attività, <strong>indipendentemente dal valore</strong>. È il punto che molti contribuenti scoprono troppo tardi: non c&apos;è una franchigia.
            </p>
            <p>
              Per i conti correnti esteri, la soglia di esonero dal monitoraggio è €15.000 (sopra quella si entra in RW). Per le cripto, la soglia è zero. <strong>Anche €50 di Bitcoin su un wallet privato vanno dichiarati.</strong>
            </p>
            <p>
              Questo vale anche per gli AIRE (italiani residenti all&apos;estero) <strong>se mantengono la residenza fiscale italiana</strong>. L&apos;iscrizione all&apos;AIRE da sola non esonera: se hai il domicilio o il centro degli interessi vitali in Italia, sei ancora residente fiscale e devi fare il quadro RW. Casi tipici: studenti all&apos;estero per un periodo, lavoratori in distacco temporaneo, italiani in paesi a fiscalità privilegiata (presunzione di residenza italiana salvo prova contraria).
            </p>

            {/* 4 imposte */}
            <h2 id="quattro-imposte" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Le 4 imposte sulle cripto da conoscere
            </h2>
            <p>
              Sulle cripto-attività possono applicarsi quattro tipi di obblighi fiscali distinti. Capirli bene evita errori e ottimizza la tassazione.
            </p>

            <p><strong>1. Monitoraggio fiscale (quadro RW)</strong></p>
            <p>
              È l&apos;obbligo dichiarativo, non un&apos;imposta diretta. Si compila il quadro RW del modello Redditi PF indicando: tipologia di asset, paese, valore al 1° gennaio (o data di acquisto se successiva), valore al 31 dicembre (o data di vendita se precedente). Serve per permettere all&apos;Agenzia delle Entrate di sapere cosa hai all&apos;estero.
            </p>

            <p><strong>2. Imposta sostitutiva sulle cripto-attività &mdash; 0,2%</strong></p>
            <p>
              Introdotta dalla Legge di Bilancio 2023, è un&apos;imposta patrimoniale annuale dello 0,2% sul valore delle cripto-attività al 31 dicembre. Sostituisce l&apos;IVAFE che si applicava in precedenza con regole più complesse. Si paga indipendentemente dal fatto che tu abbia realizzato o meno plusvalenze, anche se hai solo holdato per un anno.
            </p>
            <p>
              Esempio: hai €10.000 di Bitcoin al 31 dicembre 2025 → imposta sostitutiva 2026 = €20.
            </p>

            <p><strong>3. Plusvalenze realizzate &mdash; 26%</strong></p>
            <p>
              Le plusvalenze realizzate (cessione, conversione, permuta, prelievo a scopo di pagamento) vanno dichiarate nel quadro RT e tassate al 26%. <strong>Dal 2025 non c&apos;è più la franchigia di €2.000</strong> (abolita dalla Legge di Bilancio 2025): ogni plusvalenza è imponibile. Le minusvalenze realizzate si possono compensare con plusvalenze cripto degli anni successivi (max 4 anni).
            </p>
            <p>
              Esempio: hai comprato 1 ETH a €1.500 nel 2022 e venduto a €3.500 nel 2025 → plusvalenza €2.000 → imposta 26% = €520.
            </p>

            <p><strong>4. IVAFE su conti che ospitano cripto &mdash; €34,20</strong></p>
            <p>
              Se le cripto sono detenute su un conto presso un&apos;istituzione finanziaria estera (es. una banca svizzera che offre custody crypto), il conto stesso è soggetto a IVAFE forfettaria di €34,20/anno. Caso meno frequente ma esiste.
            </p>

            {/* Exchange esteri */}
            <h2 id="come-dichiarare-exchange" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Come dichiarare gli exchange esteri
            </h2>
            <p>
              Per ogni exchange estero (Binance, Coinbase, Kraken, Bybit, OKX, KuCoin, Bitfinex) si compila una riga del quadro RW per ogni cripto-attività detenuta. I dati necessari:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Codice paese</strong>: dove ha sede legale l&apos;exchange (es. Cayman per Binance, USA per Coinbase, USA per Kraken)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Tipologia</strong>: codice 21 (cripto-attività)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Valore inizio periodo</strong>: valore al 1° gennaio (o all&apos;acquisto se durante l&apos;anno)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Valore fine periodo</strong>: valore al 31 dicembre (o alla cessione se durante l&apos;anno)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Quota possesso</strong>: 100% se è il tuo account personale</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Giorni di possesso</strong>: per pro-ratazione dell&apos;imposta sostitutiva</span></li>
            </ul>
            <p>
              <strong>Documentazione necessaria</strong>: estratto conto annuale dell&apos;exchange (tutti generano statement scaricabili in CSV o PDF), e idealmente lo storico transazioni per ricostruire il prezzo medio di carico ai fini delle plusvalenze.
            </p>

            {/* Wallet privati */}
            <h2 id="come-dichiarare-wallet" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Come dichiarare i wallet privati
            </h2>
            <p>
              I wallet privati (MetaMask, Ledger, Trezor, Phantom, Trust Wallet, Rabby) sono il caso più sottovalutato. Tante persone pensano: <em>&laquo;Tanto è mio, è in self-custody, non c&apos;è un intermediario, perché dovrei dichiararlo?&raquo;</em>. Errore: la natura del custode non rileva, conta solo che siano cripto-attività che possiedi.
            </p>
            <p>
              Per i wallet privati il codice paese da indicare è quello della <strong>residenza del titolare</strong> (cioè Italia per chi è residente fiscale in Italia), oppure quello del paese del nodo di accesso usato. Nella prassi prevalente si indica Italia o si lascia vuoto il codice (con nota esplicativa nelle annotazioni RW).
            </p>
            <p>
              <strong>Documentazione necessaria</strong>: per i wallet privati non c&apos;è uno statement pronto. Ricostruisci il valore al 1° gennaio e al 31 dicembre dalla blockchain (basta lo screenshot o l&apos;export di Etherscan/Solscan/blockchain.com), e lo storico transazioni per le plusvalenze. Tool come Koinly, CoinTracking, CryptoTaxCalculator semplificano enormemente la cosa.
            </p>

            {/* Permute */}
            <h2 id="permute-cripto-cripto" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Permute cripto-cripto: il caso più sottovalutato
            </h2>
            <p>
              <strong>Convertire BTC in ETH è una plusvalenza realizzata.</strong> Anche se non hai mai toccato euro o dollari, anche se sei rimasto sempre &laquo;dentro&raquo; al mondo cripto. Lo stesso vale per swap su exchange decentralizzati (Uniswap, PancakeSwap, Curve), per conversioni su Binance Convert, per qualunque scambio cripto-cripto.
            </p>
            <p>
              Esempio: hai comprato 1 BTC a €30.000 nel 2023, lo converti in 10 ETH quando 1 BTC vale €60.000 (valore di mercato dei 10 ETH = €60.000). Plusvalenza realizzata = €30.000, imposta 26% = €7.800. Anche se non hai venduto in euro, anche se gli ETH continueranno a salire o scendere.
            </p>
            <p>
              È il punto su cui vediamo gli errori più gravi: contribuenti che hanno fatto centinaia di swap su Uniswap pensando di non aver mai realizzato nulla, e si trovano potenzialmente tassati su decine di migliaia di euro di plusvalenze accumulate.
            </p>

            {/* NFT, stablecoin, DeFi */}
            <h2 id="nft-stablecoin-defi" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              NFT, stablecoin, staking, DeFi
            </h2>
            <p><strong>NFT</strong>: cripto-attività non fungibili. Vanno dichiarati nel quadro RW al valore di mercato (floor price della collezione, oppure ultima transazione). Se vendi un NFT realizzando plusvalenza, va in quadro RT. NFT acquistati e mai venduti pesano comunque per l&apos;imposta sostitutiva 0,2%.</p>
            <p><strong>Stablecoin</strong>: USDT, USDC, DAI sono cripto-attività a tutti gli effetti. Vanno dichiarate in RW e pagano lo 0,2% sostitutiva. Non hanno plusvalenze se restano a valore stabile, ma se le converti in altra cripto si applica la regola della permuta.</p>
            <p><strong>Staking</strong>: i token che ricevi come premio dallo staking (es. ETH staking di Lido o Coinbase) sono <strong>redditi diversi</strong> tassati al 26% al momento dell&apos;accredito, sul valore di mercato in quel momento. Inoltre la stessa quantità diventa il tuo prezzo di carico per future plusvalenze.</p>
            <p><strong>Lending</strong>: gli interessi cripto da Aave, Compound, Nexo, BlockFi sono redditi diversi tassati 26%.</p>
            <p><strong>DeFi yield farming</strong>: le LP token (es. Uniswap V3 positions, Curve LP) sono cripto-attività complesse. Vanno dichiarate al valore equivalente in cripto sottostanti. Le commissioni guadagnate sono redditi.</p>

            {/* Exchange italiani */}
            <h2 id="exchange-italiani" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              E gli exchange italiani?
            </h2>
            <p>
              La situazione di Young Platform, Conio, Tinaba e altri exchange italiani è meno limpida. Sono soggetti italiani, ma non sono <strong>sostituti d&apos;imposta</strong> per le cripto come lo è una banca per i conti correnti. Quindi non applicano automaticamente le ritenute, e <strong>per prassi prevalente vanno dichiarati nel quadro RW</strong> al pari degli exchange esteri.
            </p>
            <p>
              Alcuni studi commercialisti ritengono che, trattandosi di intermediari italiani regolati, la dichiarazione in RW non sia necessaria. La posizione più cauta &mdash; che adottiamo noi &mdash; è dichiararli comunque, almeno finché l&apos;Agenzia delle Entrate non emana chiarimenti definitivi su questi soggetti specifici.
            </p>

            {/* Errori comuni */}
            <h2 id="errori-comuni" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Errori comuni che vediamo
            </h2>
            <p>Dopo decine di pratiche cripto, questi sono gli errori più frequenti:</p>
            <p><strong>1. &laquo;Ho meno di €2.000, non devo dichiarare nulla&raquo;.</strong> Falso. La franchigia €2.000 era sulle plusvalenze ed è stata abolita dal 2025. Il quadro RW non ha mai avuto soglia per le cripto.</p>
            <p><strong>2. &laquo;Ho solo stablecoin, non sono cripto&raquo;.</strong> Falso. USDT/USDC/DAI sono cripto-attività e vanno in RW.</p>
            <p><strong>3. &laquo;Non ho mai venduto, niente da dichiarare&raquo;.</strong> Falso. L&apos;obbligo di monitoraggio (RW) e l&apos;imposta sostitutiva 0,2% si applicano anche solo per il possesso.</p>
            <p><strong>4. &laquo;Ho fatto solo swap cripto-cripto, niente plusvalenze&raquo;.</strong> Falso. Le permute sono realizzazione fiscale.</p>
            <p><strong>5. &laquo;Ho comprato un NFT che non posso vendere, non è plusvalenza&raquo;.</strong> Vero per le plusvalenze, ma l&apos;NFT va comunque in RW per il monitoraggio e per l&apos;imposta sostitutiva 0,2%.</p>
            <p><strong>6. &laquo;Coinbase Italia / Binance Italia sono italiani&raquo;.</strong> Sbagliato. Coinbase e Binance sono entità estere, anche se hanno una versione localizzata in italiano. Codice paese estero in RW.</p>

            {/* Sanzioni */}
            <h2 id="sanzioni" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quanto rischi se ometti
            </h2>
            <p>Le sanzioni amministrative per omessa dichiarazione del quadro RW sono salate. Le riassume la <Link href="/servizi/quadro-rw" className="text-[var(--color-accent)] hover:underline">nostra pagina dedicata al quadro RW</Link>, ma in sintesi:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>3% &ndash; 15% del valore non dichiarato (paesi cooperativi, dove sta la maggior parte degli exchange)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>6% &ndash; 30% del valore non dichiarato (paesi black list)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Sanzione minima €516 anche per piccole omissioni</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Termine accertamento raddoppiato a 10 anni</span></li>
            </ul>
            <p>
              Esempio: €30.000 di cripto su Binance non dichiarati per 3 anni = sanzione potenziale fino a €9.000 + interessi + sanzioni accessorie. Se sei in questa situazione, <strong>il ravvedimento operoso</strong> riduce le sanzioni fino al 89%.
            </p>

            {/* CTA intermedio */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>Hai cripto su Binance, Coinbase, MetaMask o altri?</strong> Lo gestiamo noi. Calcolo, compilazione quadro RW, integrazione con la tua dichiarazione redditi, F24 pronto. <Link href="/servizi/quadro-rw" className="text-[var(--color-accent)] hover:underline">Scopri il servizio</Link> con prezzi trasparenti a partire da €98.
              </p>
            </div>

            {/* Omesso */}
            <h2 id="omesso-passato" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              E se ho omesso negli anni passati?
            </h2>
            <p>
              È la situazione più comune che vediamo. Il boom delle cripto in Italia è del 2020-2022; molti contribuenti hanno aperto conti Binance/Coinbase, comprato Bitcoin durante la pandemia, e mai dichiarato. Ora si rendono conto e cercano una soluzione.
            </p>
            <p>
              La soluzione si chiama <strong>ravvedimento operoso</strong>: riduce le sanzioni piene del 87-89% se la regolarizzazione avviene <strong>prima</strong> che l&apos;Agenzia delle Entrate notifichi un accertamento. Una volta che arriva la lettera di accertamento, il ravvedimento non è più disponibile e si applicano sanzioni piene.
            </p>
            <p>
              Esempio concreto: €30.000 di cripto omessi per 3 anni → sanzione piena ~€9.000 → con ravvedimento ~€600-1.500 + interessi modesti. Il nostro servizio per il ravvedimento RW costa da €499 a preventivo: <strong>si ripaga 5-10 volte</strong> in sanzioni evitate.
            </p>
            <p>
              Se hai ricevuto una <strong>lettera di compliance</strong> dall&apos;Agenzia (è ancora una richiesta di chiarimenti, non un accertamento vero e proprio), il ravvedimento è ancora possibile ma il tempo è poco. <Link href="/servizi/quadro-rw-ravvedimento" className="text-[var(--color-accent)] hover:underline">Contattaci subito qui</Link>: tratteremo il caso come urgente.
            </p>

            {/* Approfondimenti correlati */}
            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/ravvedimento-cripto-quadro-rw" className="text-[var(--color-accent)] hover:underline">Ravvedimento cripto: come sanare le omissioni passate</Link> &mdash; guida pratica al ravvedimento</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/quadro-rw" className="text-[var(--color-accent)] hover:underline">Servizio Quadro RW</Link> &mdash; quale dichiarazione fa per te</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/regime-forfettario-2026" className="text-[var(--color-accent)] hover:underline">Regime forfettario 2026</Link> &mdash; per chi ha P.IVA</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi mettere le tue cripto in regola senza pensieri?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Dottori commercialisti iscritti all&apos;Albo, prezzi trasparenti, supporto via portale. Calcoliamo quadro RW, plusvalenze, imposta sostitutiva. F24 pronto da pagare. Da €98.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/servizi/quadro-rw" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                  Scopri il servizio Quadro RW
                </Link>
                <Link href="/servizi/quadro-rw-ravvedimento" className="inline-block px-6 py-3 border border-zinc-200 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium">
                  Ravvedimento per anni passati
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
