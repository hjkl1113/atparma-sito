import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { news } from "@/lib/news";
import { articoli } from "@/lib/articoli";
import { SezioniSwitcher } from "@/components/sezioni-switcher";

export const metadata: Metadata = {
  title: "Debiti e crisi: sovraindebitamento, cartelle, fideiussioni | A.T. Consulting Parma",
  description:
    "Uscire dai debiti: sovraindebitamento ed esdebitazione per i privati, composizione negoziata e concordato per le imprese, cartelle e riscossione, fideiussioni bancarie. Guide e novità aggiornate.",
  alternates: { canonical: "/debiti-e-crisi" },
  openGraph: {
    title: "Debiti e crisi — A.T. Consulting Parma",
    description:
      "Sovraindebitamento, esdebitazione, composizione negoziata, cartelle esattoriali e fideiussioni bancarie: guide e aggiornamenti dallo studio.",
    type: "website",
    url: "https://www.atparma.com/debiti-e-crisi",
  },
};

// Guide del blog che compongono il nucleo dell'argomento.
const SLUG_GUIDE = [
  "sovraindebitamento-2026-come-uscire-dai-debiti",
  "esdebitazione-incapiente-2026",
  "concordato-minore-2026",
  "composizione-negoziata-crisi-impresa-2026",
  "concordato-semplificato-liquidazione-2026",
  "adeguati-assetti-indici-crisi-2026",
];

const FILONI = [
  {
    titolo: "Hai debiti personali che non riesci più a pagare",
    testo:
      "Il Codice della crisi prevede procedure riservate a chi non è fallibile: consumatori, piccoli imprenditori, professionisti. Si può ristrutturare il debito, liquidare il patrimonio in modo controllato oppure, se non si possiede nulla, chiedere la cancellazione dei debiti come debitore incapiente.",
    guide: ["sovraindebitamento-2026-come-uscire-dai-debiti", "esdebitazione-incapiente-2026", "concordato-minore-2026"],
  },
  {
    titolo: "L'impresa è in difficoltà ma può ancora risollevarsi",
    testo:
      "Prima delle procedure concorsuali esistono strumenti di allerta e di risanamento: la composizione negoziata con un esperto indipendente, le misure protettive dai creditori, i benefici fiscali dell'art. 25-bis e, se le trattative non riescono, il concordato semplificato.",
    guide: ["composizione-negoziata-crisi-impresa-2026", "concordato-semplificato-liquidazione-2026", "adeguati-assetti-indici-crisi-2026"],
  },
  {
    titolo: "Cartelle, pignoramenti e garanzie firmate in banca",
    testo:
      "Accanto alle procedure ci sono le partite quotidiane: cartelle di pagamento e loro notifica, rateizzazioni e rottamazioni, fermi e ipoteche, e le fideiussioni firmate a garanzia di un'impresa, su cui la giurisprudenza torna spesso con decisioni che cambiano le carte in tavola.",
    guide: [],
  },
];

export default function DebitiECrisiPage() {
  const ultime = news.filter((n) => n.categoria === "crisi-debiti").slice(0, 8);
  const guide = SLUG_GUIDE.map((s) => articoli.find((a) => a.slug === s)).filter(
    (a): a is NonNullable<typeof a> => Boolean(a),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Debiti e crisi",
            description:
              "Sovraindebitamento ed esdebitazione, composizione negoziata e concordato, cartelle esattoriali e fideiussioni bancarie: guide e novità dello studio A.T. Consulting Parma.",
            url: "https://www.atparma.com/debiti-e-crisi",
            inLanguage: "it-IT",
            isPartOf: {
              "@type": "WebSite",
              name: "A.T. Consulting Parma",
              url: "https://www.atparma.com",
            },
            about: [
              { "@type": "Thing", name: "Sovraindebitamento" },
              { "@type": "Thing", name: "Esdebitazione" },
              { "@type": "Thing", name: "Crisi d'impresa" },
              { "@type": "Thing", name: "Composizione negoziata" },
              { "@type": "Thing", name: "Riscossione e cartelle esattoriali" },
              { "@type": "Thing", name: "Fideiussioni bancarie" },
            ],
            mainEntity: {
              "@type": "ItemList",
              itemListElement: guide.map((a, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `https://www.atparma.com/blog/${a.slug}`,
                name: a.titolo,
              })),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Chi può accedere alle procedure di sovraindebitamento?", "acceptedAnswer": {"@type": "Answer", "text": "Chi non è soggetto alle procedure concorsuali ordinarie: consumatori, professionisti, imprenditori minori, imprenditori agricoli e start-up innovative. È il primo requisito da verificare, perché una domanda presentata nella procedura sbagliata viene dichiarata inammissibile."}}, {"@type": "Question", "name": "Si possono cancellare i debiti se non si possiede nulla?", "acceptedAnswer": {"@type": "Answer", "text": "Sì, con l'esdebitazione del debitore incapiente prevista dall'art. 283 del Codice della crisi. Si ottiene una sola volta nella vita e per quattro anni dal decreto resta l'obbligo di pagare se sopravvengono utilità rilevanti; trascorsi i quattro anni diventa definitiva."}}, {"@type": "Question", "name": "Quanto dura una procedura di sovraindebitamento?", "acceptedAnswer": {"@type": "Answer", "text": "La ristrutturazione dei debiti del consumatore e il concordato minore richiedono in genere dai sei ai dodici mesi dal deposito all'omologazione. La liquidazione controllata dura fino a tre anni, al termine dei quali l'esdebitazione arriva di diritto."}}, {"@type": "Question", "name": "Cosa significa essere meritevoli?", "acceptedAnswer": {"@type": "Answer", "text": "Che i debiti non siano stati contratti con colpa grave, malafede o frode. Non basta essere indebitati: il tribunale guarda come ci si è arrivati. La giurisprudenza recente nega il beneficio, per esempio, a chi ha omesso sistematicamente di versare le imposte pur avendo redditi."}}, {"@type": "Question", "name": "La mia impresa è in difficoltà: da dove comincio?", "acceptedAnswer": {"@type": "Answer", "text": "Dalla composizione negoziata, una trattativa riservata con i creditori assistita da un esperto indipendente, in cui l'imprenditore mantiene la gestione. Dà accesso a misure protettive dalle azioni dei creditori e a benefici fiscali su interessi, sanzioni e rateazione dei debiti tributari."}}, {"@type": "Question", "name": "La fideiussione firmata in banca si può contestare?", "acceptedAnswer": {"@type": "Answer", "text": "In alcuni casi sì. Molti contratti ricalcano uno schema predisposto dall'associazione bancaria che la giurisprudenza ha ritenuto in contrasto con la normativa antitrust. È una verifica da fare sul testo del contratto firmato, prima di pagare."}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atparma.com" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Debiti e crisi",
                item: "https://www.atparma.com/debiti-e-crisi",
              },
            ],
          }),
        }}
      />
      <SiteHeader current="debiti-e-crisi" />

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Debiti e crisi
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Quando i debiti diventano il problema
          </h1>
          <p className="text-zinc-600 mb-10 leading-relaxed max-w-3xl">
            Sovraindebitamento ed esdebitazione per le persone, composizione negoziata e
            concordato per le imprese, cartelle e riscossione, fideiussioni bancarie. Qui
            trovi le guide dello studio e le novità che contano, aggiornate man mano che
            escono le decisioni dei tribunali.
          </p>

          <div className="mb-10">
            <SezioniSwitcher current="debiti-e-crisi" />
          </div>

          {/* I tre filoni */}
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {FILONI.map((f) => (
              <div key={f.titolo} className="bg-zinc-50 rounded-xl p-6 border border-zinc-100">
                <h2 className="text-lg font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
                  {f.titolo}
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">{f.testo}</p>
                {f.guide.length > 0 && (
                  <ul className="space-y-1 text-sm">
                    {f.guide.map((slug) => {
                      const a = articoli.find((x) => x.slug === slug);
                      if (!a) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={`/blog/${slug}`}
                            className="text-[var(--color-accent)] hover:underline"
                          >
                            {a.titolo}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>


          {/* Contenuto della pagina */}
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight mb-4 mt-12 font-[family-name:var(--font-heading)]">
              La prima domanda non è quali debiti hai, ma chi sei
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Sembra strano, ma è così. La legge divide chi ha debiti in due mondi, e la
              strada cambia completamente a seconda di dove ci si trova. Da una parte le
              imprese che superano certe dimensioni, per le quali esistono le procedure
              concorsuali classiche. Dall&apos;altra tutti gli altri: consumatori, professionisti,
              piccoli imprenditori, imprenditori agricoli, start-up innovative. Per questo
              secondo gruppo il Codice della crisi prevede le cosiddette procedure di
              sovraindebitamento, pensate proprio per chi non è fallibile.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-4">
              È il primo bivio, e sbagliarlo significa perdere mesi: una domanda presentata
              nella procedura sbagliata viene dichiarata inammissibile.
            </p>

            <h2 className="text-2xl font-bold tracking-tight mb-4 mt-12 font-[family-name:var(--font-heading)]">
              Se non sei fallibile: le quattro strade
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Sono quattro, e non sono alternative equivalenti. Ognuna ha presupposti
              precisi e un esito diverso.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-300 text-left">
                    <th className="py-2 pr-4 font-semibold text-zinc-900">Procedura</th>
                    <th className="py-2 pr-4 font-semibold text-zinc-900">A chi si rivolge</th>
                    <th className="py-2 font-semibold text-zinc-900">Cosa produce</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 pr-4 font-medium">Ristrutturazione dei debiti del consumatore<br /><span className="text-xs text-zinc-500">artt. 67-73 CCII</span></td>
                    <td className="py-3 pr-4">Persone fisiche consumatrici, meritevoli</td>
                    <td className="py-3">Pagamento ridotto e dilazionato, poi liberazione dai debiti residui</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 pr-4 font-medium">Concordato minore<br /><span className="text-xs text-zinc-500">artt. 74-83 CCII</span></td>
                    <td className="py-3 pr-4">Professionisti, imprenditori minori e agricoli, start-up</td>
                    <td className="py-3">Accordo con i creditori, con prosecuzione dell&apos;attività</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 pr-4 font-medium">Liquidazione controllata<br /><span className="text-xs text-zinc-500">artt. 268-277 CCII</span></td>
                    <td className="py-3 pr-4">Chi ha un patrimonio liquidabile ma non può sostenere un piano</td>
                    <td className="py-3">Liquidazione assistita, con esdebitazione di diritto dopo tre anni</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Esdebitazione del debitore incapiente<br /><span className="text-xs text-zinc-500">art. 283 CCII</span></td>
                    <td className="py-3 pr-4">Persone fisiche meritevoli che non possono offrire nulla ai creditori</td>
                    <td className="py-3">Cancellazione dei debiti anche senza pagare nulla</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-zinc-700 leading-relaxed mb-4">
              L&apos;ultima è quella di cui si parla di più, e va spiegata bene perché è anche la
              più fraintesa. L&apos;esdebitazione del debitore incapiente permette di cancellare i
              debiti a chi non ha nulla da offrire, ma si ottiene <strong>una sola volta nella
              vita</strong> e non è definitiva subito: per <strong>quattro anni</strong> dal
              decreto resta l&apos;obbligo di pagare se sopravvengono utilità rilevanti, per esempio
              un&apos;eredità o una vincita. Passati i quattro anni diventa definitiva e
              incondizionata.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-4">
              E c&apos;è una parola che ricorre in tutte e quattro: <strong>meritevolezza</strong>.
              Non basta essere indebitati, conta come ci si è arrivati. I tribunali la valutano
              caso per caso, e proprio lì si concentra la giurisprudenza più recente: chi ha
              sistematicamente omesso di pagare le imposte pur avendo redditi, per esempio, se
              la vede negare.
            </p>

            <h2 className="text-2xl font-bold tracking-tight mb-4 mt-12 font-[family-name:var(--font-heading)]">
              Se sei un&apos;impresa: prima si prova a salvarla
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Per le imprese la logica del Codice è opposta a quella della vecchia legge
              fallimentare: prima si cerca di conservare l&apos;attività, e solo se non c&apos;è nulla
              da conservare si liquida. Lo strumento centrale è la <strong>composizione
              negoziata</strong>, una trattativa riservata con i creditori assistita da un
              esperto indipendente, in cui l&apos;imprenditore mantiene la gestione dell&apos;azienda.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Due cose la rendono conveniente più di quanto si creda. Le <strong>misure
              protettive</strong> sospendono le azioni dei creditori per quattro mesi,
              prorogabili fino a dodici. E le <strong>misure premiali fiscali</strong>
              riducono interessi e sanzioni sui debiti tributari e consentono una rateazione
              fino a settantadue rate, con un vantaggio pratico non da poco: la firma
              dell&apos;esperto sull&apos;istanza fa prova della difficoltà, che altrimenti andrebbe
              dimostrata.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Se le trattative non riescono, resta il <strong>concordato semplificato</strong>,
              che porta alla liquidazione senza il voto dei creditori. E a monte di tutto ci
              sono gli obblighi di allerta: dal 2026 i creditori pubblici, cioè INPS, INAIL,
              Agenzia delle Entrate e Riscossione, devono segnalare le esposizioni oltre certe
              soglie. Ricevere una di quelle segnalazioni e ignorarla è, oggi, uno dei modi più
              rapidi per aggravare la responsabilità degli amministratori.
            </p>

            <h2 className="text-2xl font-bold tracking-tight mb-4 mt-12 font-[family-name:var(--font-heading)]">
              Cartelle, pignoramenti e fideiussioni
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Accanto alle procedure ci sono le partite quotidiane, che spesso arrivano prima:
              una cartella notificata male, un estratto di ruolo che si scopre per caso, un
              fermo sull&apos;auto, un pignoramento dello stipendio. Qui non servono procedure
              concorsuali ma verifiche puntuali, a partire da due: se la notifica è avvenuta
              regolarmente e se il credito è ancora esigibile o si è prescritto.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Discorso a parte meritano le <strong>fideiussioni firmate in banca</strong>, quasi
              sempre al momento di ottenere un affidamento per la propria impresa. Molti
              contratti ricalcano uno schema predisposto dall&apos;associazione bancaria che la
              giurisprudenza ha ritenuto in contrasto con la normativa antitrust, e su questo le
              Corti tornano continuamente. Per chi ha garantito i debiti di una società che non
              ce l&apos;ha fatta, è una verifica che vale la pena fare prima di pagare.
            </p>

            <h2 className="text-2xl font-bold tracking-tight mb-4 mt-12 font-[family-name:var(--font-heading)]">
              Quanto durano e come si comincia
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              La ristrutturazione dei debiti del consumatore e il concordato minore richiedono
              in genere <strong>dai sei ai dodici mesi</strong> dal deposito all&apos;omologazione.
              La liquidazione controllata dura fino a <strong>tre anni</strong>, al termine dei
              quali l&apos;esdebitazione arriva di diritto. La composizione negoziata è più rapida,
              ma la sua durata dipende da quanto reggono le trattative.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Si comincia sempre dallo stesso punto: mettere in fila i debiti, capire verso chi
              sono e cosa si possiede davvero. Per le procedure di sovraindebitamento serve poi
              un <strong>organismo di composizione della crisi</strong>, che nomina il gestore e
              accompagna la domanda in tribunale. Il costo dipende dalla procedura e dalla
              complessità della situazione: è una delle prime cose che diciamo, non l&apos;ultima.
            </p>
          </div>


          {/* Domande frequenti */}
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 font-[family-name:var(--font-heading)]">
              Domande frequenti
            </h2>
            <div className="space-y-6 mb-4">
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2 font-[family-name:var(--font-heading)]">
                  Chi può accedere alle procedure di sovraindebitamento?
                </h3>
                <p className="text-zinc-700 leading-relaxed">Chi non è soggetto alle procedure concorsuali ordinarie: consumatori, professionisti, imprenditori minori, imprenditori agricoli e start-up innovative. È il primo requisito da verificare, perché una domanda presentata nella procedura sbagliata viene dichiarata inammissibile.</p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2 font-[family-name:var(--font-heading)]">
                  Si possono cancellare i debiti se non si possiede nulla?
                </h3>
                <p className="text-zinc-700 leading-relaxed">Sì, con l&apos;esdebitazione del debitore incapiente prevista dall&apos;art. 283 del Codice della crisi. Si ottiene una sola volta nella vita e per quattro anni dal decreto resta l&apos;obbligo di pagare se sopravvengono utilità rilevanti; trascorsi i quattro anni diventa definitiva.</p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2 font-[family-name:var(--font-heading)]">
                  Quanto dura una procedura di sovraindebitamento?
                </h3>
                <p className="text-zinc-700 leading-relaxed">La ristrutturazione dei debiti del consumatore e il concordato minore richiedono in genere dai sei ai dodici mesi dal deposito all&apos;omologazione. La liquidazione controllata dura fino a tre anni, al termine dei quali l&apos;esdebitazione arriva di diritto.</p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2 font-[family-name:var(--font-heading)]">
                  Cosa significa essere meritevoli?
                </h3>
                <p className="text-zinc-700 leading-relaxed">Che i debiti non siano stati contratti con colpa grave, malafede o frode. Non basta essere indebitati: il tribunale guarda come ci si è arrivati. La giurisprudenza recente nega il beneficio, per esempio, a chi ha omesso sistematicamente di versare le imposte pur avendo redditi.</p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2 font-[family-name:var(--font-heading)]">
                  La mia impresa è in difficoltà: da dove comincio?
                </h3>
                <p className="text-zinc-700 leading-relaxed">Dalla composizione negoziata, una trattativa riservata con i creditori assistita da un esperto indipendente, in cui l&apos;imprenditore mantiene la gestione. Dà accesso a misure protettive dalle azioni dei creditori e a benefici fiscali su interessi, sanzioni e rateazione dei debiti tributari.</p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2 font-[family-name:var(--font-heading)]">
                  La fideiussione firmata in banca si può contestare?
                </h3>
                <p className="text-zinc-700 leading-relaxed">In alcuni casi sì. Molti contratti ricalcano uno schema predisposto dall&apos;associazione bancaria che la giurisprudenza ha ritenuto in contrasto con la normativa antitrust. È una verifica da fare sul testo del contratto firmato, prima di pagare.</p>
              </div>
            </div>
          </div>

          {/* Le guide */}
          <h2 className="text-2xl font-bold tracking-tight mb-2 font-[family-name:var(--font-heading)]">
            Le guide dello studio
          </h2>
          <p className="text-zinc-600 mb-6 max-w-3xl">
            Approfondimenti completi, con i riferimenti normativi e i passaggi pratici di
            ciascuna procedura.
          </p>
          <div className="grid gap-4 md:grid-cols-2 mb-16">
            {guide.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="block bg-white rounded-xl p-5 border border-zinc-200 hover:border-[var(--color-accent)] transition-colors"
              >
                <h3 className="font-semibold text-zinc-900 mb-2 font-[family-name:var(--font-heading)]">
                  {a.titolo}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">{a.excerpt}</p>
              </Link>
            ))}
          </div>

          {/* Le novità */}
          <h2 className="text-2xl font-bold tracking-tight mb-2 font-[family-name:var(--font-heading)]">
            Le ultime novità
          </h2>
          <p className="text-zinc-600 mb-6 max-w-3xl">
            Decisioni dei tribunali, pronunce della Cassazione e novità normative su debiti,
            crisi d&apos;impresa e riscossione.
          </p>
          {ultime.length === 0 ? (
            <p className="text-zinc-500 mb-16">
              Nessuna novità pubblicata al momento in questa sezione. Nel frattempo puoi
              leggere le guide qui sopra oppure gli{" "}
              <Link href="/aggiornamenti-fiscali" className="text-[var(--color-accent)] hover:underline">
                aggiornamenti fiscali
              </Link>
              .
            </p>
          ) : (
            <ul className="space-y-4 mb-16">
              {ultime.map((n) => (
                <li key={n.slug} className="border-b border-zinc-100 pb-4">
                  <Link
                    href={`/aggiornamenti-fiscali/${n.slug}`}
                    className="font-semibold text-zinc-900 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {n.titolo}
                  </Link>
                  <p className="text-sm text-zinc-600 mt-1 leading-relaxed">{n.sommario}</p>
                  <p className="text-xs text-zinc-400 mt-1">
                    {new Date(n.data).toLocaleDateString("it-IT", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {/* Invito */}
          <div className="bg-[var(--color-accent)]/5 rounded-xl p-8 border border-[var(--color-accent)]/20">
            <h2 className="text-xl font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
              Ogni situazione debitoria è diversa
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-5 max-w-3xl">
              Le procedure descritte qui hanno presupposti precisi e non sono alternative
              equivalenti: la strada giusta dipende da quali debiti ha accumulato, verso chi,
              e da cosa possiede. Il primo passo è guardare i numeri insieme.
            </p>
            <Link
              href="/servizi/crisi-di-impresa"
              className="inline-block bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Come lavoriamo sulla crisi d&apos;impresa
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
