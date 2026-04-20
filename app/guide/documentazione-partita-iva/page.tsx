import type { Metadata } from "next";
import Link from "next/link";
import { GuidaActions } from "../print-actions";

export const metadata: Metadata = {
  title: "Checklist apertura Partita IVA — Guida gratuita | A.T. Consulting Parma",
  description:
    "Checklist completa dei documenti necessari per aprire la Partita IVA. Scarica o stampa il PDF.",
  alternates: { canonical: "/guide/documentazione-partita-iva" },
  robots: { index: false, follow: false },
};

const sezioni: { titolo: string; voci: string[] }[] = [
  {
    titolo: "Documenti personali (sempre necessari)",
    voci: [
      "Codice fiscale",
      "Carta d'identità o passaporto in corso di validità",
      "Permesso di soggiorno (per cittadini extra-UE)",
      "Indirizzo di residenza e indirizzo della sede dell'attività",
      "Recapito telefonico e indirizzo email",
      "Codice IBAN del conto corrente dedicato all'attività",
    ],
  },
  {
    titolo: "Informazioni sull'attività",
    voci: [
      "Descrizione dettagliata dell'attività che intendi svolgere",
      "Codice ATECO di riferimento (se già identificato)",
      "Regime fiscale scelto: forfettario o ordinario",
      "Data di inizio attività prevista",
      "Eventuale insegna o denominazione commerciale",
      "Luogo di svolgimento: domicilio, studio, negozio",
    ],
  },
  {
    titolo: "Previdenza",
    voci: [
      "Cassa previdenziale di appartenenza (INPS gestione separata, INPS artigiani/commercianti, cassa privata di categoria)",
      "Se cassa privata: tessera di iscrizione all'albo o ordine professionale",
      "Codice fiscale del coniuge e figli (per eventuali detrazioni)",
    ],
  },
  {
    titolo: "Solo per artigiani e commercianti",
    voci: [
      "Visura camerale esistente (se subentro) o dati dell'impresa individuale da iscrivere",
      "Certificati abilitativi obbligatori (SCIA, autorizzazioni sanitarie, patente)",
      "Contratto di locazione del locale o titolo di disponibilita",
      "Iscrizione al SIA (Sistema Informativo Agricolo) se attività agricola",
    ],
  },
  {
    titolo: "Solo per attività online ed e-commerce",
    voci: [
      "Dominio del sito internet e hosting",
      "Account di vendita (Amazon, Etsy, Shopify, eBay)",
      "Configurazione fatturazione elettronica SdI",
      "Gateway di pagamento attivati (Stripe, PayPal, Nexi)",
    ],
  },
  {
    titolo: "Servizi che attiviamo per te",
    voci: [
      "Apertura P.IVA presso Agenzia delle Entrate",
      "Iscrizione CCIAA (per artigiani e commercianti)",
      "Iscrizione INPS gestione appropriata",
      "Comunicazione di inizio attività al Comune (se necessaria)",
      "Setup fatturazione elettronica (GIS Ranocchi EFAT incluso nel pacchetto +EFAT)",
      "Consulenza iniziale sul regime fiscale più conveniente",
    ],
  },
];

const INTRO_TESTO =
  "Tutto quello che ti serve per aprire la tua Partita IVA con A.T. Consulting Parma. Usa questa lista come traccia per raccogliere il materiale. Se ci affidi l'apertura, li carichi nel portale clienti dopo il pagamento e la procedura si avvia appena abbiamo tutti i pezzi.";

const AVVERTENZA_TESTO =
  "Avvertenza. Questa checklist copre i casi più comuni. Attività regolate (professioni ordinistiche, commercio alimentare, somministrazione) possono richiedere documenti specifici: il nostro team li verifica caso per caso durante la consulenza iniziale.";

export default function GuidaDocumentazionePIVA() {
  return (
    <main className="bg-white min-h-screen print:bg-white">
      <div className="max-w-3xl mx-auto px-6 py-10 print:py-0 print:px-0">
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link
            href="/servizi"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna ai servizi
          </Link>
          <GuidaActions
            titolo="Checklist documenti per l'apertura della Partita IVA"
            intro={INTRO_TESTO}
            sezioni={sezioni}
            avvertenza={AVVERTENZA_TESTO}
            fileName="checklist-apertura-piva-atparma.pdf"
          />
        </div>

        <header className="mb-10 pb-6 border-b border-zinc-200">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-2">
            Guida gratuita
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 font-[family-name:var(--font-heading)]">
            Checklist documenti per l&apos;apertura della Partita IVA
          </h1>
          <p className="text-zinc-600 leading-relaxed">{INTRO_TESTO}</p>
        </header>

        <div className="space-y-8 mb-10">
          {sezioni.map((sez) => (
            <section key={sez.titolo}>
              <h2 className="text-lg font-bold mb-4 font-[family-name:var(--font-heading)] text-zinc-900">
                {sez.titolo}
              </h2>
              <ul className="space-y-2">
                {sez.voci.map((v) => (
                  <li key={v} className="flex gap-3 text-sm text-zinc-700 leading-relaxed">
                    <span className="w-4 h-4 border border-zinc-400 rounded-sm flex-shrink-0 mt-0.5 print:border-zinc-700" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="pt-6 border-t border-zinc-200 text-xs text-zinc-500 leading-relaxed">
          <p className="mb-2">
            <strong className="text-zinc-700">Avvertenza.</strong> Questa checklist copre
            i casi più comuni. Attività regolate (professioni ordinistiche, commercio
            alimentare, somministrazione) possono richiedere documenti specifici: il
            nostro team li verifica caso per caso durante la consulenza iniziale.
          </p>
          <p>
            A.T. Consulting Parma S.R.L.S. — Borgo Riccio da Parma 5, 43121 Parma (PR) —
            P.IVA 02794450342 — www.atparma.com
          </p>
        </footer>

        <div className="mt-8 bg-zinc-50 border border-zinc-200 rounded-xl p-5 print:hidden">
          <p className="text-sm font-semibold mb-1">Pronto ad aprire la Partita IVA?</p>
          <p className="text-xs text-zinc-600 mb-4">
            Scegli il pacchetto che fa per te: Professionista (€199), Artigiano/Commerciante
            (€690), Forfettario (€690) o Forfettario + EFAT (€750).
          </p>
          <Link
            href="/servizi"
            className="inline-block px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Vedi i servizi
          </Link>
        </div>
      </div>
    </main>
  );
}
