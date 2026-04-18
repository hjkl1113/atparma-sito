import type { Metadata } from "next";
import Link from "next/link";
import { GuidaPrintActions } from "../print-actions";

export const metadata: Metadata = {
  title: "Checklist documenti 730 — Guida gratuita | A.T. Consulting Parma",
  description:
    "Checklist completa dei documenti necessari per la dichiarazione 730. Scarica o stampa il PDF.",
  alternates: { canonical: "/guide/documentazione-730" },
  robots: { index: false, follow: false },
};

const sezioni: { titolo: string; voci: string[] }[] = [
  {
    titolo: "Dati personali e anagrafici",
    voci: [
      "Codice fiscale del contribuente",
      "Codice fiscale del coniuge e dei familiari a carico",
      "Copia di un documento di identità in corso di validità",
      "IBAN per eventuale rimborso",
      "Visura catastale aggiornata degli immobili posseduti",
    ],
  },
  {
    titolo: "Redditi",
    voci: [
      "Certificazione Unica (CU) del datore di lavoro o dell'ente pensionistico",
      "Certificazioni di altri redditi (collaborazioni, tirocini, borse di studio)",
      "Contratti di locazione attivi (se proprietario di immobili locati)",
      "Ricevute di pagamento per redditi occasionali",
    ],
  },
  {
    titolo: "Spese sanitarie e farmaci",
    voci: [
      "Scontrini parlanti della farmacia (con codice fiscale)",
      "Fatture mediche: visite specialistiche, analisi, interventi",
      "Spese per dispositivi medici (occhiali, lenti, apparecchi acustici)",
      "Spese dentistiche (fatture con codice fiscale)",
      "Certificati per spese sanitarie di familiari a carico",
    ],
  },
  {
    titolo: "Casa e immobili",
    voci: [
      "Contratto di mutuo e quietanze degli interessi passivi (prima casa)",
      "Bonifici parlanti per bonus edilizi (ristrutturazione 50%, ecobonus, sismabonus)",
      "Fatture e asseverazioni per detrazioni edilizie",
      "Comunicazioni ENEA per interventi di efficientamento energetico",
      "Spese di intermediazione immobiliare (acquisto prima casa)",
      "Spese per canoni di locazione (se inquilino con detrazione)",
    ],
  },
  {
    titolo: "Famiglia e istruzione",
    voci: [
      "Spese di istruzione: tasse universitarie, scuole paritarie, mensa scolastica",
      "Spese per asili nido",
      "Attività sportive dei figli minori (palestre, corsi)",
      "Spese per assistenza di anziani non autosufficienti",
      "Erogazioni liberali a favore di enti e associazioni riconosciute",
    ],
  },
  {
    titolo: "Previdenza e assicurazioni",
    voci: [
      "Contributi previdenziali obbligatori e volontari versati",
      "Premi assicurativi vita e infortuni (entro massimali di legge)",
      "Contributi versati a fondi pensione complementari",
      "Contributi per lavoratori domestici (colf, badanti)",
    ],
  },
  {
    titolo: "Altre detrazioni comuni",
    voci: [
      "Spese veterinarie",
      "Spese funebri",
      "Abbonamenti trasporto pubblico",
      "Erogazioni a partiti politici, ONLUS, istituzioni religiose",
    ],
  },
];

export default function GuidaDocumentazione730() {
  return (
    <main className="bg-white min-h-screen print:bg-white">
      <div className="max-w-3xl mx-auto px-6 py-10 print:py-0 print:px-0">
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link
            href="/servizi/dichiarazione-730"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna al servizio 730
          </Link>
          <GuidaPrintActions />
        </div>

        <header className="mb-10 pb-6 border-b border-zinc-200">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-2">
            Guida gratuita
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 font-[family-name:var(--font-heading)]">
            Checklist documenti per la dichiarazione 730
          </h1>
          <p className="text-zinc-600 leading-relaxed">
            Tutti i documenti che servono per preparare il 730. Usa questa lista come
            traccia per raccogliere il materiale prima di iniziare. Se ci affidi il
            servizio 730 online (€79), li carichi direttamente nel portale clienti.
          </p>
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
            <strong className="text-zinc-700">Avvertenza.</strong> Questa checklist e
            indicativa e copre le spese più comuni. Casi particolari (successioni,
            redditi esteri, credito d&apos;imposta) possono richiedere documenti aggiuntivi:
            chiedi conferma al commercialista prima di inviare.
          </p>
          <p>
            A.T. Consulting Parma S.R.L.S. — Borgo Riccio da Parma 5, 43121 Parma (PR) —
            P.IVA 02794450342 — www.atparma.com
          </p>
        </footer>

        <div className="mt-8 bg-zinc-50 border border-zinc-200 rounded-xl p-5 print:hidden">
          <p className="text-sm font-semibold mb-1">Ti serve aiuto col 730?</p>
          <p className="text-xs text-zinc-600 mb-4">
            Il nostro servizio 730 online a €79 include compilazione, invio e
            conservazione documenti per 5 anni nel portale clienti.
          </p>
          <Link
            href="/servizi/dichiarazione-730"
            className="inline-block px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Scopri il servizio 730
          </Link>
        </div>
      </div>
    </main>
  );
}
