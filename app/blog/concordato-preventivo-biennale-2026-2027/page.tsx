import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const TITOLO = "Concordato preventivo biennale 2026-2027: guida all'adesione";
const DESCRIZIONE =
  "CPB 2026-2027: chi può aderire, il termine del 2 novembre 2026, come si aderisce e si revoca, i nuovi tetti del 30% e 35% per gli ISA bassi, le cause di decadenza. Guida aggiornata al D.Lgs. 13/2024.";
const SLUG = "concordato-preventivo-biennale-2026-2027";

export const metadata: Metadata = {
  title: `${TITOLO} | A.T. Consulting Parma`,
  description: DESCRIZIONE,
  alternates: {
    canonical: `/blog/${SLUG}`,
  },
  openGraph: {
    title: TITOLO,
    description: DESCRIZIONE,
    type: "article",
    publishedTime: "2026-08-12T00:00:00Z",
    authors: ["A.T. Consulting Parma"],
    images: [{ url: `https://www.atparma.com/og?slug=${SLUG}`, width: 1200, height: 630, alt: TITOLO }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`https://www.atparma.com/og?slug=${SLUG}`],
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
            headline: TITOLO,
            description: DESCRIZIONE,
            image: `https://www.atparma.com/og?slug=${SLUG}`,
            datePublished: "2026-08-12",
            dateModified: "2026-08-12",
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
            mainEntityOfPage: `https://www.atparma.com/blog/${SLUG}`,
          }),
        }}
      />

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Blog
          </Link>

          <time className="text-xs text-zinc-400 block mb-3">12 agosto 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            {TITOLO}
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src={`/og?slug=${SLUG}`} alt={TITOLO} fill unoptimized className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Il concordato preventivo biennale &egrave; un accordo con l&apos;Agenzia delle Entrate: il contribuente
              accetta in anticipo un reddito su cui pagare le imposte per due anni, e in cambio ottiene stabilit&agrave;
              e una protezione dagli accertamenti. Per il biennio <strong>2026-2027</strong> la finestra &egrave;
              aperta e la decisione va presa entro l&apos;autunno.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm text-amber-900 m-0">
                <strong>Attenzione a non confondere due cose diverse.</strong> Il concordato preventivo
                <em> biennale</em> di cui parliamo qui &egrave; uno strumento fiscale, disciplinato dal
                D.Lgs. 13/2024. Non ha nulla a che vedere con il concordato preventivo, il concordato minore o il
                concordato semplificato, che sono <strong>procedure di crisi d&apos;impresa</strong> del Codice della
                crisi. Stesso nome, mondi opposti.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              La scadenza: 2 novembre 2026
            </h2>
            <p>
              Il termine per aderire al CPB 2026-2027 &egrave; stato <strong>prorogato al 31 ottobre 2026</strong>.
              Poich&eacute; il 31 ottobre cade di sabato, la scadenza slitta a <strong>luned&igrave; 2 novembre 2026</strong>.
            </p>
            <p>
              La proroga ha una logica precisa: allineare il termine di adesione a quello di trasmissione delle
              dichiarazioni, cos&igrave; da avere un unico arco temporale per chiudere gli adempimenti e decidere.
              Entro la stessa data si pu&ograve; anche <strong>revocare</strong> un&apos;adesione gi&agrave; inviata.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Chi pu&ograve; aderire
            </h2>
            <p>
              Il CPB &egrave; riservato ai <strong>contribuenti che applicano gli ISA</strong> &mdash; gli indici
              sintetici di affidabilit&agrave; fiscale &mdash; esercenti attivit&agrave; d&apos;impresa, arti o professioni.
              Il modello CPB non va invece utilizzato da chi ha gi&agrave; una proposta di concordato in essere per il
              biennio 2025-2026: in quel caso il patto &egrave; ancora in corso.
            </p>

            <h3 className="text-lg font-semibold text-zinc-900 mt-8 mb-3 font-[family-name:var(--font-heading)]">
              La condizione sui debiti fiscali
            </h3>
            <p>
              C&apos;&egrave; un requisito che blocca molte adesioni ed &egrave; bene verificarlo per primo. Per accedere
              occorre <strong>non avere debiti tributari amministrati dall&apos;Agenzia delle Entrate o debiti
              contributivi</strong>, oppure averli estinti entro i termini di adesione in misura tale che il debito
              residuo &mdash; interessi e sanzioni compresi &mdash; resti <strong>sotto la soglia di 5.000 euro</strong>.
            </p>
            <p>
              Un dettaglio che spesso sfugge e che gioca a favore del contribuente: i debiti oggetto di
              <strong> provvedimenti di sospensione o di rateazione non concorrono al calcolo della soglia</strong>,
              finch&eacute; i relativi benefici non decadono. Chi ha una rateazione in regola, quindi, non &egrave;
              automaticamente escluso.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Come si aderisce
            </h2>
            <p>
              L&apos;adesione avviene inviando telematicamente il <strong>Modello CPB 2026/2027</strong>, approvato con
              provvedimento del Direttore dell&apos;Agenzia delle Entrate del 27 febbraio 2026. Due modalit&agrave;
              alternative, a scelta:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Invio congiunto</strong>: insieme al modello ISA relativo al periodo d&apos;imposta 2025, in allegato alla dichiarazione dei redditi (modello REDDITI 2026)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Invio autonomo</strong>: con il solo frontespizio del modello REDDITI 2026, compilando la casella &laquo;Comunicazione CPB&raquo; con il <strong>codice 1</strong> (Adesione)</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-zinc-900 mt-8 mb-3 font-[family-name:var(--font-heading)]">
              E se si cambia idea
            </h3>
            <p>
              La revoca si effettua entro gli stessi termini dell&apos;adesione, sempre con due strade: il
              <strong> codice 2</strong> (Revoca) nel frontespizio con invio autonomo, oppure il <strong>codice 3</strong>
              (Revoca con flusso dichiarativo) in fase di invio della dichiarazione. Con quest&apos;ultima modalit&agrave;
              vengono revocate tutte le comunicazioni di adesione inviate in precedenza, ed &egrave; possibile
              trasmetterne contestualmente una nuova.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa cambia rispetto alla prima edizione
            </h2>
            <p>
              Il decreto fiscale 2026 (D.L. 38/2026, convertito dalla legge 88/2026) ha corretto alcuni dei difetti che
              avevano frenato le adesioni:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Tetti massimi alla proposta per chi ha ISA bassi.</strong> Per i contribuenti con punteggio ISA <strong>tra 6 e 8</strong> la proposta non pu&ograve; eccedere il <strong>30%</strong> del reddito dichiarato nel periodo precedente; per quelli con punteggio <strong>tra 1 e 6</strong> il limite di incremento sale al <strong>35%</strong>. &Egrave; la risposta alla critica pi&ugrave; diffusa alla prima edizione: proposte percepite come sproporzionate proprio verso chi aveva indici pi&ugrave; bassi</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Iperammortamento compatibile.</strong> &Egrave; stato inserito tra le variazioni ammesse a rettifica del reddito concordato: chi investe non vede pi&ugrave; vanificato il beneficio dall&apos;adesione al patto</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>Proroga del termine</strong> di adesione, allineato a quello dichiarativo</span></li>
            </ul>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Le cause di decadenza sono un sistema chiuso
            </h2>
            <p>
              &Egrave; il punto che pi&ugrave; preoccupa chi valuta l&apos;adesione: aderisco, e poi l&apos;Agenzia trova un
              pretesto per farmi decadere. La risposta sta nell&apos;<strong>art. 22 del D.Lgs. 13/2024</strong>, che elenca
              le cause di decadenza in modo tassativo. Rientrano, tra le altre, l&apos;esistenza di attivit&agrave; non
              dichiarate oltre determinate soglie, le alterazioni significative della base concordata, le violazioni
              gravi, il venir meno dei requisiti soggettivi e gli omessi versamenti.
            </p>
            <p>
              Su questo &egrave; intervenuta la <strong>Corte di giustizia tributaria di 1&deg; grado di Brescia con la
              sentenza n. 363/2026</strong>, che ha annullato un accertamento su uno studio associato e, a cascata, quelli
              sui singoli soci. L&apos;annualit&agrave; contestata era coperta dalla combinazione tra adesione al CPB e
              ravvedimento speciale. I giudici hanno affermato che le cause di decadenza costituiscono
              <strong> un sistema chiuso</strong>: solo le ipotesi espressamente previste possono far perdere lo status di
              contribuente concordatario. Nel caso concreto, la mancata esibizione di documenti che l&apos;Agenzia gi&agrave;
              possedeva (copie analogiche di fatture elettroniche) non &egrave; stata ritenuta idonea a giustificare la
              ripresa dei poteri accertativi.
            </p>
            <p>
              La lettura pratica &egrave; questa: <strong>adesione al CPB pianificata correttamente e ravvedimento sulle
              annualit&agrave; pregresse funzionano insieme come uno scudo</strong> rispetto ai poteri di accertamento. Ma
              regge solo se i versamenti sono regolari e il perfezionamento &egrave; corretto.
            </p>

            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
              <p className="text-sm font-semibold text-zinc-900 mb-2">Cosa sta per cambiare &mdash; iter in corso</p>
              <p className="text-sm text-zinc-600 m-0">
                Nei pareri sul decreto Omnibus &egrave; stata proposta la <strong>riapertura del ravvedimento speciale</strong>
                (art. 2-quater D.L. 113/2024) per chi rinnova l&apos;adesione al CPB per il biennio 2026-2027, in modo da
                poter regolarizzare anche il <strong>2023</strong>. &Egrave; l&apos;annualit&agrave; oggi scoperta: resta fuori sia
                dalle protezioni del ravvedimento della prima edizione (che copriva dal 2018 al 2022) sia da quelle del
                CPB, pur essendo l&apos;anno preso a base per formulare la proposta. Se la misura fosse confermata nella
                versione quinquennale, chi rinnova potrebbe blindare l&apos;intero periodo 2020-2024.
                <br /><br />
                <strong>Attenzione: si tratta di proposte in corso di conversione, non di norme vigenti.</strong> Aggiorneremo
                questa sezione quando l&apos;iter sar&agrave; concluso. Dato al 12 agosto 2026.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Conviene aderire?
            </h2>
            <p>
              Non esiste una risposta valida per tutti, e diffidare di chi la d&agrave;. La convenienza dipende da come si
              muover&agrave; il reddito nei due anni concordati rispetto alla proposta: se l&apos;attivit&agrave; cresce, si
              pagano imposte su un reddito inferiore a quello effettivo; se cala, si paga su un reddito che non si &egrave;
              prodotto. A questo si aggiunge il valore, difficile da quantificare ma reale, della protezione dagli
              accertamenti e della prevedibilit&agrave; del carico fiscale.
            </p>
            <p>
              Gli elementi da mettere sul tavolo prima di decidere sono cinque: la proposta effettiva elaborata dal
              software dell&apos;Agenzia, l&apos;andamento reale previsto per 2026 e 2027, la posizione debitoria rispetto alla
              soglia dei 5.000 euro, il punteggio ISA (che ora determina anche il tetto massimo della proposta) e
              l&apos;eventuale presenza di operazioni straordinarie in programma.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Approfondimenti correlati
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/regime-forfettario-2026" className="text-[var(--color-accent)] hover:underline">Regime forfettario 2026</Link> &mdash; i forfettari non applicano gli ISA e restano fuori dal CPB</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/aggiornamenti-fiscali" className="text-[var(--color-accent)] hover:underline">Aggiornamenti fiscali</Link> &mdash; le novit&agrave; sul CPB man mano che escono</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><Link href="/blog/composizione-negoziata-crisi-impresa-2026" className="text-[var(--color-accent)] hover:underline">Composizione negoziata della crisi d&apos;impresa</Link> &mdash; se cercavi il concordato come procedura di crisi, parti da qui</span></li>
            </ul>

            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi sapere se il concordato conviene alla tua attivit&agrave;?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Analizziamo la proposta elaborata sui tuoi dati, la confrontiamo con le previsioni reali di 2026 e 2027 e
                verifichiamo la posizione debitoria. La decisione va presa entro il 2 novembre 2026.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contatti" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                  Richiedi una valutazione
                </Link>
                <Link href="/servizi/dichiarazioni" className="inline-block px-6 py-3 border border-zinc-200 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium">
                  Vedi i servizi dichiarativi
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
