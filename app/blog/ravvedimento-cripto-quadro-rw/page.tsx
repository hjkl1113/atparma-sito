import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Ravvedimento operoso cripto: sanare omissioni Bitcoin e exchange esteri | A.T. Consulting Parma",
  description:
    "Hai cripto su Binance, Coinbase, MetaMask mai dichiarate? Il ravvedimento operoso riduce le sanzioni fino all'89%. Guida pratica con esempi numerici, scadenze, lettere di compliance AdE.",
  alternates: {
    canonical: "/blog/ravvedimento-cripto-quadro-rw",
  },
  openGraph: {
    title: "Ravvedimento operoso cripto: sanare omissioni del quadro RW",
    description:
      "Cripto non dichiarate negli anni passati? Riduci le sanzioni dell'89% col ravvedimento. Guida con esempi reali e tabella scadenze.",
    type: "article",
    publishedTime: "2026-04-26T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [{ url: "https://www.atparma.com/og?slug=ravvedimento-cripto-quadro-rw", width: 1200, height: 630, alt: "Ravvedimento cripto quadro RW" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.atparma.com/og?slug=ravvedimento-cripto-quadro-rw"],
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
            headline: "Ravvedimento operoso cripto: come sanare le omissioni passate del quadro RW",
            description:
              "Hai cripto su Binance, Coinbase, MetaMask mai dichiarate? Il ravvedimento operoso riduce le sanzioni fino all'89%. Guida pratica con esempi numerici, scadenze, lettere di compliance AdE.",
            image: "https://www.atparma.com/og?slug=ravvedimento-cripto-quadro-rw",
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
            mainEntityOfPage: "https://www.atparma.com/blog/ravvedimento-cripto-quadro-rw",
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
            Ravvedimento operoso cripto: come sanare le omissioni passate del quadro RW
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/og?slug=ravvedimento-cripto-quadro-rw" alt="Ravvedimento cripto quadro RW" fill unoptimized className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Se hai aperto un conto Binance o Coinbase nel 2020-2022, comprato Bitcoin durante la pandemia, sperimentato con DeFi nel 2021, e <strong>non hai mai dichiarato nulla nel quadro RW</strong> della tua dichiarazione dei redditi, sei in tantissima compagnia. Le stime parlano di centinaia di migliaia di italiani in questa situazione. La buona notizia: si rimedia, e costa molto meno di quanto pensi.
            </p>
            <p>
              Lo strumento è il <strong>ravvedimento operoso</strong>, previsto dall&apos;art. 13 del D.Lgs. 472/1997. Permette di sanare omissioni e irregolarità in dichiarazione pagando sanzioni ridotte fino al <strong>89%</strong> rispetto a quelle piene, con interessi modesti. Vincolo: va fatto <strong>prima</strong> che l&apos;Agenzia delle Entrate notifichi un atto di accertamento. Dopo, è troppo tardi.
            </p>

            {/* Indice */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="font-semibold text-zinc-900 text-sm mb-3">Indice</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#cose-ravvedimento" className="text-[var(--color-accent)] hover:underline">Cos&apos;è il ravvedimento operoso</a></li>
                <li><a href="#perche-cripto" className="text-[var(--color-accent)] hover:underline">Perché conviene specificamente per le cripto</a></li>
                <li><a href="#sanzioni-ridotte" className="text-[var(--color-accent)] hover:underline">Tabella sanzioni ridotte (1/9, 1/8, 1/7, 1/6)</a></li>
                <li><a href="#esempio" className="text-[var(--color-accent)] hover:underline">Esempio numerico: €30.000 cripto omessi 3 anni</a></li>
                <li><a href="#lettera-compliance" className="text-[var(--color-accent)] hover:underline">Hai ricevuto una lettera di compliance?</a></li>
                <li><a href="#cosa-facciamo" className="text-[var(--color-accent)] hover:underline">Cosa facciamo noi: i 5 passi del servizio</a></li>
                <li><a href="#errori" className="text-[var(--color-accent)] hover:underline">Errori da non fare nel ravvedimento</a></li>
                <li><a href="#fai-da-te" className="text-[var(--color-accent)] hover:underline">Si può fare da soli?</a></li>
              </ul>
            </div>

            {/* Cos'è */}
            <h2 id="cose-ravvedimento" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cos&apos;è il ravvedimento operoso
            </h2>
            <p>
              Il ravvedimento operoso è un meccanismo che permette al contribuente di rimediare spontaneamente a errori, omissioni, ritardi di versamento, prima che l&apos;Agenzia delle Entrate intervenga formalmente. In cambio della spontaneità, le sanzioni sono ridotte in modo molto significativo.
            </p>
            <p>
              Si applica praticamente a tutte le violazioni: dichiarazioni omesse, dichiarazioni infedeli, mancato monitoraggio fiscale (quadro RW), versamenti tardivi, IVA, IRPEF. La logica del legislatore: meglio incassare qualcosa con sanzioni ridotte e contribuente cooperativo, che attivare un&apos;istruttoria di accertamento lunga e costosa.
            </p>
            <p>
              Per le cripto, lo strumento giusto è il ravvedimento dichiarativo (presentazione di una <strong>dichiarazione integrativa</strong> per ogni anno omesso, con quadro RW completo e relativo F24 di sanzioni e interessi).
            </p>

            {/* Perché cripto */}
            <h2 id="perche-cripto" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Perché conviene specificamente per le cripto
            </h2>
            <p>Tre ragioni per cui chi ha cripto omesse dovrebbe correre al ravvedimento:</p>
            <p><strong>1. L&apos;Agenzia delle Entrate sta accendendo i riflettori.</strong> Negli ultimi 18 mesi sono partite le prime ondate di lettere di compliance specificamente sulle cripto. L&apos;AdE ha siglato accordi di scambio dati con autorità fiscali estere e con piattaforme che operano nell&apos;UE: Binance, Coinbase e altri exchange forniscono dati dei loro clienti italiani all&apos;Agenzia. Chi pensa di passare inosservato sbaglia.</p>
            <p><strong>2. Le sanzioni piene sono pesanti.</strong> Per omissione del quadro RW, dal 3% al 15% del valore non dichiarato (paesi cooperativi), dal 6% al 30% (paesi black list, dove molti exchange hanno sede). Su €30.000 di Bitcoin omessi possono diventare anche €9.000 di sanzione. Col ravvedimento si scende a €600-1.500.</p>
            <p><strong>3. L&apos;accertamento per RW omesso ha termine raddoppiato.</strong> Normalmente l&apos;AdE ha 5 anni per accertare. Per il quadro RW, 10 anni. Un&apos;omissione del 2020 può essere contestata fino al 2031. Il ravvedimento la chiude oggi.</p>

            {/* Sanzioni ridotte */}
            <h2 id="sanzioni-ridotte" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Tabella sanzioni ridotte
            </h2>
            <p>L&apos;importo dello sconto dipende da <strong>quando regolarizzi rispetto alla scadenza originale</strong> della dichiarazione. Più presto agisci, meno paghi.</p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-200">
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Quando regolarizzi</th>
                    <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Frazione sanzione</th>
                    <th className="text-left py-3 font-semibold text-zinc-900">Riduzione</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Entro 90 giorni dal termine ordinario</td>
                    <td className="py-3 pr-4">1/9 della minima</td>
                    <td className="py-3 text-emerald-700 font-semibold">&minus;89%</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Entro 1 anno dal termine</td>
                    <td className="py-3 pr-4">1/8 della minima</td>
                    <td className="py-3 text-emerald-700 font-semibold">&minus;87%</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Entro 2 anni dal termine</td>
                    <td className="py-3 pr-4">1/7 della minima</td>
                    <td className="py-3 text-emerald-700 font-semibold">&minus;86%</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 font-medium">Oltre 2 anni dal termine</td>
                    <td className="py-3 pr-4">1/6 della minima</td>
                    <td className="py-3 text-emerald-700 font-semibold">&minus;83%</td>
                  </tr>
                  <tr className="bg-rose-50">
                    <td className="py-3 pr-4 font-medium text-rose-900">Atto di accertamento già notificato</td>
                    <td className="py-3 pr-4 text-rose-900">Sanzione piena 3-15% (o 6-30%)</td>
                    <td className="py-3 text-rose-700 font-semibold">Ravvedimento NON disponibile</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-500 italic">Fonte: art. 13 D.Lgs. 472/1997, aggiornato L. 197/2022 e L. Bilancio 2025.</p>

            {/* Esempio numerico */}
            <h2 id="esempio" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Esempio numerico: €30.000 cripto omessi 3 anni
            </h2>
            <p>
              <strong>Scenario:</strong> Marco ha aperto un conto Coinbase nel 2022 e ha comprato Bitcoin per €30.000 in totale. Non ha mai dichiarato nulla per gli anni 2022, 2023, 2024. Oggi (aprile 2026) decide di mettersi in regola prima che arrivi una lettera dell&apos;AdE.
            </p>
            <div className="bg-rose-50 rounded-xl p-6 my-6 border border-rose-200">
              <p className="font-semibold text-rose-900 mb-3">Senza ravvedimento (rischio in caso di accertamento)</p>
              <ul className="space-y-1 text-sm text-rose-900">
                <li>&bull; Sanzione 15% massima per ogni anno: €30.000 &times; 15% = €4.500/anno</li>
                <li>&bull; 3 anni omessi: €4.500 &times; 3 = €13.500</li>
                <li>&bull; Sanzioni accessorie e interessi: ~€500</li>
                <li className="font-bold pt-2 border-t border-rose-200 mt-2">Totale rischio: ~€14.000</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 my-6 border border-emerald-200">
              <p className="font-semibold text-emerald-900 mb-3">Con ravvedimento operoso (oggi, oltre 2 anni dal termine 2022)</p>
              <ul className="space-y-1 text-sm text-emerald-900">
                <li>&bull; Sanzione minima ridotta a 1/6: 3% / 6 = 0,5% per anno</li>
                <li>&bull; €30.000 &times; 0,5% &times; 3 anni = €450</li>
                <li>&bull; Imposta sostitutiva 0,2% per gli anni omessi: €30.000 &times; 0,2% &times; 3 = €180</li>
                <li>&bull; Interessi legali: ~€100</li>
                <li>&bull; Onorario nostro studio (servizio dedicato): ~€599</li>
                <li className="font-bold pt-2 border-t border-emerald-200 mt-2">Totale: ~€1.330</li>
              </ul>
            </div>
            <p>
              <strong>Risparmio: ~€12.700.</strong> Il servizio professionale (€599) si ripaga 21 volte solo nelle sanzioni evitate. Aggiungi che Marco si toglie un peso, ha una posizione fiscale pulita, e può continuare a usare Coinbase senza paura di un accertamento futuro.
            </p>

            {/* Lettera compliance */}
            <h2 id="lettera-compliance" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Hai ricevuto una lettera di compliance?
            </h2>
            <p>
              Le <strong>lettere di compliance</strong> sono comunicazioni che l&apos;Agenzia delle Entrate invia ai contribuenti quando ha indizi di possibili omissioni (es. ha ricevuto dati dall&apos;estero su un tuo conto Binance non corrispondente a quanto dichiarato). <strong>Non sono ancora un accertamento</strong>: sono un invito a regolarizzarti spontaneamente prima che parta la procedura formale.
            </p>
            <p>
              <strong>Buona notizia:</strong> con la lettera di compliance il ravvedimento è ancora possibile, anzi è proprio quello che l&apos;AdE ti sta consigliando di fare. <strong>Cattiva notizia:</strong> i tempi sono stretti, di solito 60-90 giorni dalla ricezione. Oltre quel termine, la posizione passa al controllo formale e il ravvedimento si chiude.
            </p>
            <p>
              Se hai ricevuto una di queste lettere e parlano di attività estere o cripto, <strong>non aspettare e non rispondere autonomamente</strong>. Una risposta sbagliata può peggiorare la situazione. <Link href="/servizi/quadro-rw-ravvedimento" className="text-[var(--color-accent)] hover:underline">Contattaci subito qui</Link>: tratteremo la pratica come urgente, ti rispondiamo entro la giornata lavorativa.
            </p>

            {/* Cosa facciamo */}
            <h2 id="cosa-facciamo" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa facciamo noi: i 5 passi del servizio
            </h2>
            <ol className="space-y-3 ml-4 list-decimal">
              <li><strong>Analisi della tua posizione.</strong> Videocall di 30 minuti gratuita per mappare cosa hai, dove, da quando, e per quali anni serve regolarizzare. Dopo questa, ti diamo il preventivo definitivo.</li>
              <li><strong>Calcolo della sanzione minima possibile.</strong> Identifichiamo per ogni anno la frazione corretta del ravvedimento (1/9, 1/8, 1/7, 1/6) in base ai termini, e ti diamo l&apos;importo esatto da pagare in F24.</li>
              <li><strong>Compilazione dichiarazioni integrative.</strong> Per ogni anno omesso ricostruiamo l&apos;UPF integrativo con quadro RW completo, IVIE/IVAFE, eventuali plusvalenze realizzate. Lavoro su Sister/Entratel direttamente, niente carta.</li>
              <li><strong>Predisposizione F24 con sanzioni ridotte.</strong> Calcolo preciso di sanzioni e interessi legali, F24 pronto per il pagamento. Opzione delega F24 con addebito Entratel anche qui.</li>
              <li><strong>Invio telematico AdE + supporto post.</strong> Inviamo le integrative all&apos;Agenzia, archiviamo le ricevute, e se l&apos;AdE invia richieste di chiarimento successive ti assistiamo nella risposta.</li>
            </ol>

            {/* CTA intermedio */}
            <div className="bg-zinc-50 rounded-xl p-6 my-8 border border-zinc-100">
              <p className="text-sm text-zinc-900">
                <strong>Pronto a regolarizzare?</strong> Compila il <Link href="/servizi/quadro-rw-ravvedimento" className="text-[var(--color-accent)] hover:underline">form preventivo dedicato</Link>: ti rispondiamo entro 1 giorno lavorativo con preventivo dettagliato e i prossimi passi. Niente è vincolante finché non firmi il mandato.
              </p>
            </div>

            {/* Errori */}
            <h2 id="errori" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Errori da non fare nel ravvedimento
            </h2>
            <p><strong>1. Aspettare la lettera dell&apos;Agenzia.</strong> Non è una buona strategia. Più presto agisci, minore la sanzione (si parte da 1/9 della minima). E con il sistema di scambio dati internazionale, la lettera può arrivare in qualunque momento.</p>
            <p><strong>2. Regolarizzare solo l&apos;ultimo anno.</strong> Errore tipico del fai-da-te. Ogni anno ha la sua dichiarazione integrativa, e l&apos;AdE può comunque accertare gli anni precedenti omessi. Il ravvedimento va fatto su <strong>tutti</strong> gli anni rilevanti, altrimenti la copertura è solo parziale.</p>
            <p><strong>3. Non considerare le plusvalenze realizzate.</strong> Il quadro RW è solo monitoraggio, ma se durante quegli anni hai venduto/swappato cripto realizzando plusvalenze, quelle vanno tassate al 26% nel quadro RT della stessa dichiarazione integrativa. Dimenticarsene apre un fronte di accertamento separato.</p>
            <p><strong>4. Sottostimare il valore.</strong> Le piattaforme conservano statement con i valori esatti. Dichiarare al ribasso per ridurre la sanzione è una strada sicura per finire in contenzioso (e perdere lo sconto del ravvedimento, perché diventerebbe dichiarazione infedele).</p>

            {/* Fai-da-te */}
            <h2 id="fai-da-te" className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Si può fare da soli?
            </h2>
            <p>
              Tecnicamente sì, in pratica sconsigliato per casi cripto. Tre motivi:
            </p>
            <p><strong>1. La compilazione del quadro RW per cripto è non banale</strong>: codice paese, codice tipologia, valori puntuali al 1/1 e al 31/12, frazionamenti per giorni di possesso, distinzione cripto-attività vs valuta vs partecipazione. Un commercialista esperto in cripto compila in 30 minuti quello che a un autodidatta richiede ore di documentazione errata.</p>
            <p><strong>2. Il calcolo del ravvedimento richiede la frazione giusta per ogni anno</strong>: 1/9 nei primi 90 giorni, poi 1/8 fino a un anno, 1/7 fino a 2 anni, 1/6 oltre. Sbagliare la frazione = sanzione piena se l&apos;AdE contesta.</p>
            <p><strong>3. Le plusvalenze cripto-cripto sono il punto dove sbaglia il 90% dei contribuenti.</strong> Un swap su Uniswap di 2 anni fa è plusvalenza realizzata. Senza un tool di portfolio cripto e un occhio esperto, è impossibile ricostruirle correttamente.</p>
            <p>
              Il costo di un commercialista per il ravvedimento RW cripto parte da €499 a preventivo. Le sanzioni risparmiate sono normalmente almeno 5-10 volte questo importo. È una delle situazioni dove il commercialista <strong>genera ROI reale immediato</strong>, non è solo un costo.
            </p>

            {/* Approfondimenti correlati */}
            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/cripto-quadro-rw-2026" className="text-[var(--color-accent)] hover:underline">Cripto-attività in dichiarazione 2026</Link> &mdash; guida completa al quadro RW per chi vuole partire bene</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/quadro-rw-ravvedimento" className="text-[var(--color-accent)] hover:underline">Servizio Ravvedimento Quadro RW</Link> &mdash; richiedi preventivo dedicato</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/servizi/quadro-rw" className="text-[var(--color-accent)] hover:underline">Servizio Quadro RW per l&apos;anno corrente</Link> &mdash; quale dichiarazione fa per te</span></li>
            </ul>

            {/* CTA finale */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Hai cripto non dichiarate negli anni passati?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Risparmi mediamente l&apos;87% sulle sanzioni rispetto a un accertamento. Dottori commercialisti iscritti all&apos;Albo, prezzo da €499 a preventivo, risposta entro 1 giorno lavorativo. Se hai ricevuto una lettera di compliance AdE, tratteremo la richiesta come urgente.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/servizi/quadro-rw-ravvedimento" className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-medium">
                  Richiedi preventivo ravvedimento
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
