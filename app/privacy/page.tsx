import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — A.T. Consulting Parma",
  description: "Informativa sulla privacy e trattamento dei dati personali ai sensi del GDPR.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
            A.T. Consulting
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold tracking-tight mb-8 font-[family-name:var(--font-heading)]">
            Informativa sulla Privacy
          </h1>

          <div className="space-y-8 text-zinc-700 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
                Titolare del trattamento
              </h2>
              <p>
                A.T. Consulting Parma S.R.L.S.<br />
                Borgo Riccio da Parma 5, 43121 Parma (PR)<br />
                P.IVA / CF: 02794450342<br />
                Email: segreteria@atparma.com<br />
                PEC: atconsultingparma@pec.it
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
                Tipologie di dati raccolti
              </h2>
              <p>
                Attraverso il sito web e il form di contatto vengono raccolti i seguenti dati personali forniti volontariamente dall&apos;utente: nome e cognome, indirizzo email, numero di telefono e contenuto del messaggio.
              </p>
              <p className="mt-3">
                Il sito raccoglie inoltre dati di navigazione in forma anonima e aggregata tramite cookie tecnici necessari al funzionamento del servizio.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
                Finalita del trattamento
              </h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>Rispondere alle richieste di contatto e preventivo</li>
                <li>Gestire l&apos;erogazione dei servizi acquistati online</li>
                <li>Adempiere agli obblighi di legge e regolamentari</li>
                <li>Migliorare il funzionamento del sito web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
                Base giuridica del trattamento
              </h2>
              <p>
                Il trattamento dei dati personali si basa sul consenso dell&apos;interessato (art. 6, par. 1, lett. a, GDPR), sull&apos;esecuzione di un contratto o di misure precontrattuali (art. 6, par. 1, lett. b) e sull&apos;adempimento di obblighi legali (art. 6, par. 1, lett. c).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
                Conservazione dei dati
              </h2>
              <p>
                I dati personali sono conservati per il tempo strettamente necessario al raggiungimento delle finalita per cui sono stati raccolti e comunque non oltre i termini previsti dalla normativa vigente.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
                Comunicazione e diffusione dei dati
              </h2>
              <p>
                I dati personali non sono diffusi a terzi. Possono essere comunicati a soggetti esterni che erogano servizi strumentali alle finalita sopra indicate (es. provider di hosting, servizi email), i quali agiscono in qualita di responsabili del trattamento ai sensi dell&apos;art. 28 del GDPR.
              </p>
              <p className="mt-3">
                Servizi di terze parti utilizzati: Vercel (hosting), Brevo (invio email), Stripe e PayPal (pagamenti).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
                Diritti dell&apos;interessato
              </h2>
              <p>
                Ai sensi degli articoli 15-22 del GDPR, l&apos;interessato ha il diritto di accedere ai propri dati personali, chiederne la rettifica o la cancellazione, limitare il trattamento, opporsi al trattamento e richiedere la portabilita dei dati.
              </p>
              <p className="mt-3">
                Per esercitare i propri diritti, l&apos;interessato puo contattare il Titolare del trattamento all&apos;indirizzo email segreteria@atparma.com o PEC atconsultingparma@pec.it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
                Cookie
              </h2>
              <p>
                Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento del servizio. Non vengono utilizzati cookie di profilazione o di terze parti a fini pubblicitari.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
                Modifiche alla presente informativa
              </h2>
              <p>
                Il Titolare del trattamento si riserva il diritto di apportare modifiche alla presente informativa in qualsiasi momento. L&apos;ultima versione e sempre disponibile su questa pagina.
              </p>
              <p className="mt-3 text-zinc-500">
                Ultimo aggiornamento: aprile 2026
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
