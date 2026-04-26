import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RavvedimentoRwForm } from "./ravvedimento-form";

export const metadata: Metadata = {
  title: "Ravvedimento operoso quadro RW: sana cripto e conti esteri non dichiarati | A.T. Consulting Parma",
  description:
    "Hai dimenticato di dichiarare cripto, conti Revolut/Wise, immobili o broker esteri negli anni passati? Il ravvedimento operoso riduce le sanzioni fino a 1/8. Preventivo personalizzato, partenza da €499.",
  alternates: {
    canonical: "/servizi/quadro-rw-ravvedimento",
  },
  openGraph: {
    title: "Ravvedimento operoso quadro RW — sana le omissioni",
    description:
      "Cripto, conti esteri, immobili omessi: il ravvedimento riduce le sanzioni del 87% rispetto all'accertamento AdE. Preventivo dedicato.",
    type: "website",
    images: [{ url: "https://www.atparma.com/og?slug=quadro-rw-ravvedimento", width: 1200, height: 630, alt: "Ravvedimento operoso quadro RW" }],
  },
};

export default function RavvedimentoRwPage() {
  return (
    <>
      <SiteHeader current="servizi" />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-rose-700 font-medium mb-3">
            Caso urgente
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Ravvedimento operoso quadro RW
          </h1>
          <p className="text-zinc-600 leading-relaxed text-lg max-w-2xl mx-auto mb-8">
            Hai dimenticato di dichiarare cripto, conti correnti esteri, immobili o broker negli anni passati? Il ravvedimento operoso riduce le sanzioni fino a 1/8 dell&apos;importo pieno. Va fatto <strong>prima</strong> che parta l&apos;accertamento dell&apos;Agenzia delle Entrate.
          </p>
          <a
            href="#preventivo"
            className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-medium"
          >
            Richiedi preventivo personalizzato
          </a>
          <p className="text-xs text-zinc-500 mt-4">
            Risposta entro 1 giorno lavorativo &middot; Dottori Commercialisti iscritti all&apos;Albo &middot; Partenza da €499
          </p>
        </section>

        {/* Sei in questa situazione */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
            Ti riconosci in una di queste situazioni?
          </h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex gap-3">
              <span className="text-rose-600 font-bold mt-1">&bull;</span>
              <span>Hai aperto un conto Binance, Coinbase, Kraken nel 2020-2022 e <strong>non l&apos;hai mai dichiarato</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="text-rose-600 font-bold mt-1">&bull;</span>
              <span>Hai un wallet privato (MetaMask, Ledger, Trezor) con qualche cripto e ti sei accorto solo ora dell&apos;obbligo</span>
            </li>
            <li className="flex gap-3">
              <span className="text-rose-600 font-bold mt-1">&bull;</span>
              <span>Hai un conto Revolut, Wise, N26, Bunq con giacenze sopra €15.000 mai inserito nel quadro RW</span>
            </li>
            <li className="flex gap-3">
              <span className="text-rose-600 font-bold mt-1">&bull;</span>
              <span>Hai una seconda casa all&apos;estero (Spagna, Croazia, Francia, Romania) e non hai mai pagato IVIE</span>
            </li>
            <li className="flex gap-3">
              <span className="text-rose-600 font-bold mt-1">&bull;</span>
              <span>Hai ricevuto una <strong>lettera di compliance</strong> dall&apos;AdE che ti chiede chiarimenti sulle attività estere</span>
            </li>
            <li className="flex gap-3">
              <span className="text-rose-600 font-bold mt-1">&bull;</span>
              <span>Sei tornato in Italia da AIRE e devi regolarizzare gli ultimi anni di residenza fiscale</span>
            </li>
          </ul>
        </section>

        {/* Quanto rischi senza ravvedimento */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
            Sanzioni piene vs ravvedimento: la differenza
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-8">
            Le sanzioni amministrative per omessa dichiarazione del quadro RW sono pesantissime. Il ravvedimento operoso le abbatte drasticamente, ma <strong>solo se viene fatto prima dell&apos;accertamento</strong>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-zinc-200">
                  <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Quando regolarizzi</th>
                  <th className="text-left py-3 pr-4 font-semibold text-zinc-900">Sanzione applicata</th>
                  <th className="text-left py-3 font-semibold text-zinc-900">Riduzione</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700">
                <tr className="border-b border-zinc-100">
                  <td className="py-3 pr-4 font-medium">Entro 90 giorni dal termine</td>
                  <td className="py-3 pr-4">1/9 della sanzione minima</td>
                  <td className="py-3 text-emerald-700 font-semibold">&minus;89%</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-3 pr-4 font-medium">Entro 1 anno dal termine</td>
                  <td className="py-3 pr-4">1/8 della sanzione minima</td>
                  <td className="py-3 text-emerald-700 font-semibold">&minus;87%</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-3 pr-4 font-medium">Entro 2 anni dal termine</td>
                  <td className="py-3 pr-4">1/7 della sanzione minima</td>
                  <td className="py-3 text-emerald-700 font-semibold">&minus;86%</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-3 pr-4 font-medium">Oltre 2 anni dal termine</td>
                  <td className="py-3 pr-4">1/6 della sanzione minima</td>
                  <td className="py-3 text-emerald-700 font-semibold">&minus;83%</td>
                </tr>
                <tr className="bg-rose-50">
                  <td className="py-3 pr-4 font-medium text-rose-900">Accertamento AdE già notificato</td>
                  <td className="py-3 pr-4 text-rose-900">Sanzione piena 3-15% (o 6-30% black list)</td>
                  <td className="py-3 text-rose-700 font-semibold">Ravvedimento NON disponibile</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Esempio numerico */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 sm:p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-emerald-700 font-medium mb-3">
              Esempio reale
            </p>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4 font-[family-name:var(--font-heading)]">
              €30.000 cripto omessi per 3 anni
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl bg-white border border-rose-200 p-4">
                <p className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2">Senza ravvedimento</p>
                <p className="text-3xl font-bold text-rose-900 font-[family-name:var(--font-heading)]">~€9.000</p>
                <p className="text-xs text-rose-800 mt-2">Sanzione piena 15% &times; 3 anni + interessi + sanzioni accessorie</p>
              </div>
              <div className="rounded-xl bg-white border border-emerald-200 p-4">
                <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">Con ravvedimento</p>
                <p className="text-3xl font-bold text-emerald-900 font-[family-name:var(--font-heading)]">~€600-1.500</p>
                <p className="text-xs text-emerald-800 mt-2">Sanzione 1/7 &times; 3 anni + interessi modesti</p>
              </div>
            </div>
            <p className="text-sm text-emerald-900 leading-relaxed">
              Pagare il nostro servizio (€499-799 per casi standard a 3-5 anni) e gestire il ravvedimento ti fa risparmiare tra €5.000 e €8.000 rispetto al rischio di accertamento. <strong>ROI immediato</strong>: il servizio si ripaga 5-10 volte.
            </p>
          </div>
        </section>

        {/* Cosa facciamo */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
            Cosa facciamo per te
          </h2>
          <ol className="space-y-4 text-zinc-700">
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-sm font-[family-name:var(--font-heading)]">1</span>
              <div>
                <strong className="text-zinc-900">Analisi della tua posizione</strong>
                <p className="text-sm leading-relaxed mt-1">Quali anni hai omesso, quali attività estere, paesi coinvolti, valore stimato. Videocall di 30 minuti con un dottore commercialista.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-sm font-[family-name:var(--font-heading)]">2</span>
              <div>
                <strong className="text-zinc-900">Calcolo della sanzione minima possibile</strong>
                <p className="text-sm leading-relaxed mt-1">Valutiamo il giusto livello di ravvedimento (1/9, 1/8, 1/7, 1/6) in base al ritardo, e ti diamo l&apos;importo esatto da pagare.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-sm font-[family-name:var(--font-heading)]">3</span>
              <div>
                <strong className="text-zinc-900">Compilazione dichiarazioni integrative</strong>
                <p className="text-sm leading-relaxed mt-1">Per ogni anno omesso ricostruiamo l&apos;UPF integrativo con quadro RW completo, IVIE/IVAFE, eventuali plusvalenze realizzate.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-sm font-[family-name:var(--font-heading)]">4</span>
              <div>
                <strong className="text-zinc-900">Predisposizione F24 con sanzioni ridotte</strong>
                <p className="text-sm leading-relaxed mt-1">Calcolo preciso di sanzioni e interessi, F24 pronto per il pagamento. Opzione delega F24 Entratel anche qui.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-sm font-[family-name:var(--font-heading)]">5</span>
              <div>
                <strong className="text-zinc-900">Invio telematico AdE + supporto in caso di controlli</strong>
                <p className="text-sm leading-relaxed mt-1">Invio delle integrative, archiviazione e assistenza se l&apos;AdE invia richieste di chiarimento successive.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Form preventivo */}
        <section id="preventivo" className="max-w-3xl mx-auto px-6 mt-24 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-center font-[family-name:var(--font-heading)]">
            Richiedi preventivo personalizzato
          </h2>
          <p className="text-zinc-600 leading-relaxed text-center max-w-2xl mx-auto mb-12">
            Ogni caso è diverso. Compilando questo form ci dai gli elementi minimi per stimare onorario e fattibilità del ravvedimento. Risposta entro 1 giorno lavorativo. Niente è vincolante finché non firmi il mandato.
          </p>
          <RavvedimentoRwForm />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
