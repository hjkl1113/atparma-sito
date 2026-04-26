import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Stepper } from "@/components/stepper";
import { InclusiEsclusiCards } from "@/components/inclusi-esclusi-cards";
import { formatBreakdown } from "@/app/lib/pricing-utils";

export const metadata: Metadata = {
  title: "Calcolo IMU professionale online — €39 | A.T. Consulting Parma",
  description:
    "Calcolo IMU acconto e saldo da dottori commercialisti, F24 pronto, opzione delega F24 con addebito automatico Entratel inclusa. Da €39 per il primo immobile, €69 per 2-5 immobili.",
  alternates: {
    canonical: "/servizi/calcolo-imu",
  },
  openGraph: {
    title: "Calcolo IMU professionale online — €39",
    description:
      "Calcolo IMU acconto e saldo da dottori commercialisti, F24 pronto, opzione delega F24 con addebito Entratel inclusa.",
    type: "website",
    images: [{ url: "https://www.atparma.com/og?slug=calcolo-imu", width: 1200, height: 630, alt: "Calcolo IMU professionale online" }],
  },
};

const STEPS = [
  {
    step: "Acquisti il servizio",
    body: "€39 per il primo immobile, €69 fino a 5 immobili. Pagamento sicuro con Stripe o PayPal.",
  },
  {
    step: "Ti registriamo sul portale",
    body: "Email automatica con link al portale clienti, dove carichi visure catastali e indichi % di possesso e mesi di possesso per ogni immobile.",
  },
  {
    step: "Scegli come pagare il F24",
    body: "Sul portale scegli: paghi tu il F24 con home banking, oppure ci deleghi all'invio telematico Entratel — basta IBAN + firma delega F24 e l'AdE addebita automaticamente alle scadenze.",
  },
  {
    step: "Calcoliamo entro 3 giorni",
    body: "Verifichiamo aliquote del Comune, agevolazioni prima casa, casi speciali (eredi, comodato, locazioni). Ti consegniamo F24 acconto pronto sul portale.",
  },
  {
    step: "Saldo automatico a dicembre",
    body: "A novembre ricontrolliamo aliquote e variazioni di possesso, ricalcoliamo il saldo, ti consegniamo F24 saldo a dicembre. Tutto incluso nel prezzo iniziale.",
  },
];

const INCLUSI = [
  "Calcolo IMU <strong>acconto giugno + saldo dicembre</strong> dello stesso anno",
  "F24 pronti da pagare per ogni scadenza",
  "Verifica aliquote del tuo Comune (sempre aggiornate)",
  "Controllo agevolazioni: prima casa, comodato a parenti, immobili in costruzione, fabbricati ruralivi",
  "Ricalcolo gratuito a dicembre se cambiano aliquote o quote di possesso",
  "<strong>Opzione delega F24 Entratel inclusa</strong>: addebito automatico AdE sul tuo conto, no rischio dimenticanza",
  "Supporto via portale clienti con risposta entro 1 giorno lavorativo",
];

const ESCLUSI = [
  "Contenzioso IMU (avvisi di accertamento, ravvedimento operoso)",
  "Immobili all'estero (vedi servizio <a href='/servizi/quadro-rw' class='underline'>Quadro RW</a>)",
  "TARI, TASI, altri tributi locali (a preventivo dedicato)",
  "Casi con più di 5 immobili (preventivo personalizzato da €149)",
];

const FAQS = [
  {
    q: "Come funziona la delega F24 con addebito Entratel?",
    a: "È un servizio ufficiale dell'Agenzia delle Entrate: tu firmi una delega F24 al nostro studio (modulo standard AdE), ci fornisci il tuo IBAN, lo studio invia il F24 tramite il canale Entratel, e l'AdE addebita direttamente sul tuo conto alla scadenza (16 giugno acconto, 16 dicembre saldo). Niente mandato SEPA, niente provider bancari esterni: tutto gestito dal fisco. Più sicuro e affidabile dei pagamenti automatici via banca. <strong>Incluso nel prezzo</strong> del servizio, non costa nulla in più.",
  },
  {
    q: "Quanto costa rispetto al fai-da-te?",
    a: "Il calcolo IMU online è gratuito su moltissimi siti, ma sei tu a sbagliare se applichi un'aliquota fuori data del tuo Comune o non riconosci un'agevolazione. €39 è il costo di un cappuccino al giorno per un mese: in cambio hai un dottore commercialista iscritto all'Albo che firma il calcolo, e la copertura completa per acconto + saldo dell'anno.",
  },
  {
    q: "L'immobile è cointestato. Come gestiamo le quote?",
    a: "Ogni cointestatario paga IMU sulla propria quota di possesso. Nel servizio standard (€39 singolo immobile o €69 multi) calcoliamo le quote di tutti i cointestatari fino a 5 immobili totali. Se sei cointestatario con altre persone che vogliono affidarci anche loro il calcolo, possiamo gestirli con uno sconto coordinato — chiedici un preventivo via email.",
  },
  {
    q: "Cosa succede se compro o vendo un immobile in corso d'anno?",
    a: "Calcoliamo l'IMU pro-rata sui mesi di effettivo possesso. Per acquisti dopo il 15 del mese, il mese si conta al venditore (e viceversa). Se la variazione avviene tra acconto e saldo, ricalcoliamo gratuitamente il saldo a dicembre con i nuovi dati: lo segnali sul portale e ce ne occupiamo noi.",
  },
  {
    q: "E se ho dimenticato di pagare l'IMU dell'anno scorso?",
    a: "Quello è un caso di <strong>ravvedimento operoso</strong>, fuori scope dal servizio standard a €39. Te lo gestiamo a preventivo (di solito €99-149 a seconda dell'anno e dell'importo): calcoliamo le sanzioni ridotte, gli interessi e ti prepariamo il F24 di regolarizzazione. Scrivici a <a href='mailto:segreteria@atparma.com' class='underline'>segreteria@atparma.com</a> con i dati.",
  },
  {
    q: "Cos'è esattamente l'IMU? Devo pagarla anche per la prima casa?",
    a: "L'IMU (Imposta Municipale Unica) è un tributo locale che si paga al Comune dove l'immobile è situato. Si versa in due rate (acconto entro il 16 giugno, saldo entro il 16 dicembre). La prima casa è esente dall'IMU, salvo che sia di categoria catastale di lusso (A/1, A/8, A/9): in quel caso si paga con aliquota agevolata. Tutte le seconde case e gli immobili commerciali pagano IMU piena, calcolata sulla rendita catastale rivalutata × coefficiente × aliquota comunale.",
  },
  {
    q: "Posso disdire la delega F24 a metà anno?",
    a: "Sì, in qualsiasi momento. Basta una comunicazione via portale o email e revochiamo la delega. Da quel momento il F24 saldo (se non ancora addebitato) lo paghi tu manualmente: ti consegniamo il PDF compilato, niente è perso. Nessuna penale, nessun vincolo.",
  },
];

export default function CalcoloImuPage() {
  return (
    <>
      <SiteHeader current="servizi" />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Servizio fiscale
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Calcolo IMU professionale online
          </h1>
          <p className="text-zinc-600 leading-relaxed text-lg max-w-2xl mx-auto mb-8">
            Acconto giugno e saldo dicembre calcolati da dottori commercialisti iscritti all&apos;Albo. F24 pronti, opzione delega F24 con addebito automatico Entratel inclusa nel prezzo. Niente errori, niente sanzioni, niente rincorsa alle scadenze.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/servizi/calcolo-imu/checkout"
              className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium"
            >
              Acquista ora — da €39
            </Link>
            <a
              href="#prezzi"
              className="inline-block px-6 py-3 border border-zinc-200 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium"
            >
              Vedi i prezzi
            </a>
          </div>
          <p className="text-xs text-zinc-500 mt-4">
            Dottori Commercialisti iscritti all&apos;Albo &middot; Consegna F24 entro 3 giorni lavorativi &middot; Pagamento sicuro Stripe o PayPal
          </p>
        </section>

        {/* Perché farlo fare a noi */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-center font-[family-name:var(--font-heading)]">
            Perché affidarci il tuo IMU
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-100 bg-white p-6">
              <h3 className="font-semibold mb-2 font-[family-name:var(--font-heading)]">Aliquote sempre aggiornate</h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Ogni Comune approva ogni anno le proprie aliquote IMU, spesso a metà anno. Noi le verifichiamo direttamente sulle delibere ufficiali per il tuo Comune al momento del calcolo, niente rischi di applicare percentuali obsolete.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-100 bg-white p-6">
              <h3 className="font-semibold mb-2 font-[family-name:var(--font-heading)]">Agevolazioni applicate</h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Prima casa, comodato a parenti diretti, immobili in costruzione, fabbricati rurali strumentali, eredi: ogni caso ha regole diverse. Le riconosciamo e le applichiamo, non le perdi.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-100 bg-white p-6">
              <h3 className="font-semibold mb-2 font-[family-name:var(--font-heading)]">Pagamento senza pensieri</h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Con la delega F24 Entratel inclusa nel prezzo, ti basta IBAN + firma una volta: l&apos;AdE addebita acconto e saldo automaticamente. Mai più scadenze in agenda.
              </p>
            </div>
          </div>
        </section>

        {/* Come funziona — Stepper */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <Stepper
            steps={STEPS}
            title="Come funziona"
            subtitle="Cinque passi, nessun adempimento di mezzo. Tutto via portale, niente file in studio."
            layout="vertical"
          />
        </section>

        {/* Cosa è incluso/escluso */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center font-[family-name:var(--font-heading)]">
            Cosa è incluso e cosa no
          </h2>
          <InclusiEsclusiCards inclusi={INCLUSI} esclusi={ESCLUSI} />
        </section>

        {/* Pricing */}
        <section id="prezzi" className="max-w-4xl mx-auto px-6 mt-24 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-center font-[family-name:var(--font-heading)]">
            Prezzi trasparenti
          </h2>
          <p className="text-zinc-600 leading-relaxed text-center max-w-2xl mx-auto mb-12">
            Un solo pagamento copre acconto giugno e saldo dicembre dello stesso anno. Niente sorprese, niente costi nascosti.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tier singolo */}
            <div className="rounded-2xl border-2 border-[var(--color-accent)] bg-white p-6 relative">
              <span className="absolute -top-3 left-6 inline-flex rounded-full bg-[var(--color-accent)] text-white text-xs font-medium px-3 py-1">
                Più scelto
              </span>
              <h3 className="font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">Singolo immobile</h3>
              <p className="text-3xl font-bold mb-1 font-[family-name:var(--font-heading)]">€39</p>
              <p className="text-xs text-zinc-500">IVA inclusa &middot; acconto + saldo</p>
              <p className="text-xs text-zinc-400 mb-6">Scorporo: {formatBreakdown(39)}</p>
              <ul className="space-y-2 text-sm text-zinc-700 mb-6">
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> 1 immobile (prima casa di lusso o seconda casa)</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Calcolo acconto + saldo</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Delega F24 Entratel inclusa</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Ricalcolo gratuito a dicembre</li>
              </ul>
              <Link
                href="/servizi/calcolo-imu/checkout?tier=singolo"
                className="block text-center px-6 py-2.5 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium"
              >
                Acquista €39
              </Link>
            </div>

            {/* Tier multi */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">Multi-immobile</h3>
              <p className="text-3xl font-bold mb-1 font-[family-name:var(--font-heading)]">€69</p>
              <p className="text-xs text-zinc-500">IVA inclusa &middot; 2-5 immobili, acconto + saldo</p>
              <p className="text-xs text-zinc-400 mb-6">Scorporo: {formatBreakdown(69)}</p>
              <ul className="space-y-2 text-sm text-zinc-700 mb-6">
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Da 2 a 5 immobili (con cantine/box)</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Calcolo acconto + saldo per ogni immobile</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Delega F24 Entratel inclusa</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Ricalcolo gratuito a dicembre</li>
              </ul>
              <Link
                href="/servizi/calcolo-imu/checkout?tier=multi"
                className="block text-center px-6 py-2.5 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors text-sm font-medium"
              >
                Acquista €69
              </Link>
            </div>

            {/* Tier preventivo */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">Casi complessi</h3>
              <p className="text-3xl font-bold mb-1 font-[family-name:var(--font-heading)]">da €149</p>
              <p className="text-xs text-zinc-500 mb-6">a preventivo</p>
              <ul className="space-y-2 text-sm text-zinc-700 mb-6">
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Più di 5 immobili</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Successioni e voltura ereditaria</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Ravvedimento operoso anni passati</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Pratiche con TARI / TASI integrate</li>
              </ul>
              <Link
                href="/contatti?servizio=imu-complesso"
                className="block text-center px-6 py-2.5 border border-zinc-300 text-zinc-700 rounded-lg hover:bg-white transition-colors text-sm font-medium"
              >
                Richiedi preventivo
              </Link>
            </div>
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

        {/* CTA finale */}
        <section className="max-w-3xl mx-auto px-6 mt-24">
          <div className="rounded-2xl bg-[var(--color-surface)] p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
              Pronto a non pensarci più?
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-8 max-w-xl mx-auto">
              €39 per il singolo immobile, delega F24 inclusa, niente sorprese a dicembre. Pagamento sicuro Stripe o PayPal.
            </p>
            <Link
              href="/servizi/calcolo-imu/checkout"
              className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium"
            >
              Acquista ora — da €39
            </Link>
            <p className="text-xs text-zinc-500 mt-6">
              Hai dubbi? Scrivi a{" "}
              <a href="mailto:segreteria@atparma.com" className="text-[var(--color-accent)] hover:underline">
                segreteria@atparma.com
              </a>{" "}
              o chiama lo 0521 247721.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
