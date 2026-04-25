import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Calendario scadenze fiscali 2026: tutte le date | A.T. Consulting Parma",
  description:
    "Calendario completo delle scadenze fiscali 2026 mese per mese: F24, IVA, IRPEF, IRES, contributi INPS, dichiarazioni dei redditi. Per forfettari, partite IVA semplificate, SRL e sostituti d'imposta.",
  alternates: {
    canonical: "/calendario-scadenze-fiscali",
  },
  openGraph: {
    title: "Calendario scadenze fiscali 2026: tutte le date",
    description:
      "F24, IVA, IRPEF, IRES, contributi INPS, dichiarazioni: tutte le scadenze fiscali del 2026 in un colpo d'occhio. Mese per mese, ordinate per profilo.",
    type: "website",
    images: [{ url: "/images/parma-duomo-aerial.jpg", width: 1200, height: 630, alt: "Calendario scadenze fiscali 2026" }],
  },
};

interface Scadenza {
  data: string;
  cosa: string;
  chi: string;
  categoria: "iva" | "irpef" | "ires" | "inps" | "inail" | "f24" | "dichiarazione" | "altro";
}

interface MeseData {
  slug: string;
  nome: string;
  anchor: string;
  scadenze: Scadenza[];
}

const MESI: MeseData[] = [
  {
    slug: "gennaio",
    nome: "Gennaio 2026",
    anchor: "gennaio",
    scadenze: [
      { data: "16 gen", cosa: "Liquidazione e versamento IVA di dicembre 2025", chi: "Contribuenti IVA mensili", categoria: "iva" },
      { data: "16 gen", cosa: "Versamento ritenute IRPEF su redditi di lavoro dipendente di dicembre 2025", chi: "Sostituti d&apos;imposta", categoria: "irpef" },
      { data: "16 gen", cosa: "Versamento contributi INPS dipendenti per le retribuzioni di dicembre 2025", chi: "Datori di lavoro", categoria: "inps" },
      { data: "31 gen", cosa: "Comunicazione liquidazioni periodiche IVA (LIPE) quarto trimestre 2025", chi: "Contribuenti IVA mensili e trimestrali", categoria: "iva" },
      { data: "31 gen", cosa: "Trasmissione telematica delle Certificazioni Uniche per i percipienti di redditi di lavoro autonomo", chi: "Sostituti d&apos;imposta", categoria: "dichiarazione" },
    ],
  },
  {
    slug: "febbraio",
    nome: "Febbraio 2026",
    anchor: "febbraio",
    scadenze: [
      { data: "16 feb", cosa: "Liquidazione e versamento IVA di gennaio", chi: "Contribuenti IVA mensili", categoria: "iva" },
      { data: "16 feb", cosa: "Ritenute IRPEF su redditi lavoro dipendente di gennaio", chi: "Sostituti d&apos;imposta", categoria: "irpef" },
      { data: "16 feb", cosa: "INPS dipendenti retribuzioni di gennaio", chi: "Datori di lavoro", categoria: "inps" },
      { data: "16 feb", cosa: "Versamento INAIL autoliquidazione (rata unica o prima rata)", chi: "Datori di lavoro con dipendenti", categoria: "inail" },
      { data: "28 feb", cosa: "Trasmissione telematica delle Certificazioni Uniche per dipendenti e pensionati", chi: "Sostituti d&apos;imposta", categoria: "dichiarazione" },
    ],
  },
  {
    slug: "marzo",
    nome: "Marzo 2026",
    anchor: "marzo",
    scadenze: [
      { data: "16 mar", cosa: "Saldo IVA annuale 2025 (in unica soluzione, oppure prima rata con maggiorazione 0,33% mensile fino a novembre)", chi: "Contribuenti IVA", categoria: "iva" },
      { data: "16 mar", cosa: "Tassa annuale per la vidimazione dei libri sociali (società di capitali)", chi: "SRL e SPA", categoria: "altro" },
      { data: "16 mar", cosa: "Diritto annuale Camera di Commercio (rata o saldo)", chi: "Imprese iscritte al Registro Imprese", categoria: "altro" },
      { data: "16 mar", cosa: "Liquidazione e versamento IVA di febbraio", chi: "Contribuenti IVA mensili", categoria: "iva" },
      { data: "16 mar", cosa: "Ritenute IRPEF febbraio + INPS dipendenti", chi: "Sostituti d&apos;imposta", categoria: "f24" },
    ],
  },
  {
    slug: "aprile",
    nome: "Aprile 2026",
    anchor: "aprile",
    scadenze: [
      { data: "16 apr", cosa: "Liquidazione e versamento IVA di marzo", chi: "Contribuenti IVA mensili", categoria: "iva" },
      { data: "16 apr", cosa: "Liquidazione e versamento IVA primo trimestre", chi: "Contribuenti IVA trimestrali", categoria: "iva" },
      { data: "16 apr", cosa: "Ritenute IRPEF marzo + INPS dipendenti", chi: "Sostituti d&apos;imposta", categoria: "f24" },
      { data: "30 apr", cosa: "Presentazione telematica della Dichiarazione IVA annuale 2025 (forma autonoma)", chi: "Tutti i soggetti IVA", categoria: "dichiarazione" },
      { data: "30 apr", cosa: "Disponibilità del modello 730 precompilato sul portale Agenzia delle Entrate", chi: "Lavoratori dipendenti, pensionati e contribuenti che presentano 730", categoria: "dichiarazione" },
    ],
  },
  {
    slug: "maggio",
    nome: "Maggio 2026",
    anchor: "maggio",
    scadenze: [
      { data: "16 mag", cosa: "Liquidazione e versamento IVA di aprile", chi: "Contribuenti IVA mensili", categoria: "iva" },
      { data: "16 mag", cosa: "Comunicazione liquidazioni periodiche IVA (LIPE) primo trimestre", chi: "Contribuenti IVA mensili e trimestrali", categoria: "iva" },
      { data: "16 mag", cosa: "Ritenute IRPEF aprile + INPS dipendenti", chi: "Sostituti d&apos;imposta", categoria: "f24" },
      { data: "31 mag", cosa: "Termine ordinario per la presentazione del modello 730 precompilato direttamente dal contribuente", chi: "Contribuenti che usano il 730", categoria: "dichiarazione" },
    ],
  },
  {
    slug: "giugno",
    nome: "Giugno 2026",
    anchor: "giugno",
    scadenze: [
      { data: "16 giu", cosa: "IVA di maggio + ritenute IRPEF + INPS dipendenti", chi: "Sostituti d&apos;imposta", categoria: "f24" },
      { data: "30 giu", cosa: "Saldo 2025 e primo acconto 2026 IRPEF, IRES, IRAP, imposta sostitutiva forfettari, cedolare secca", chi: "Persone fisiche, professionisti, società", categoria: "irpef" },
      { data: "30 giu", cosa: "Saldo e primo acconto contributi INPS Gestione Separata e artigiani/commercianti (parte eccedente i minimali)", chi: "Professionisti e ditte individuali", categoria: "inps" },
      { data: "30 giu", cosa: "Diritto annuale Camera di Commercio (versione cumulativa con redditi)", chi: "Imprese iscritte al Registro Imprese", categoria: "altro" },
    ],
  },
  {
    slug: "luglio",
    nome: "Luglio 2026",
    anchor: "luglio",
    scadenze: [
      { data: "16 lug", cosa: "IVA di giugno + IVA secondo trimestre + ritenute IRPEF + INPS dipendenti", chi: "Sostituti d&apos;imposta e contribuenti IVA", categoria: "f24" },
      { data: "31 lug", cosa: "Saldo 2025 e primo acconto 2026 con maggiorazione dello 0,40% (per chi non ha versato entro il 30 giugno)", chi: "Persone fisiche, professionisti, società", categoria: "irpef" },
      { data: "31 lug", cosa: "Versamento diritto annuale Camera di Commercio con maggiorazione", chi: "Imprese iscritte al Registro Imprese", categoria: "altro" },
    ],
  },
  {
    slug: "agosto",
    nome: "Agosto 2026",
    anchor: "agosto",
    scadenze: [
      { data: "20 ago", cosa: "Versamenti F24 di luglio (proroga ferragosto): IVA giugno/secondo trimestre, ritenute, INPS", chi: "Tutti i soggetti con scadenze fiscali di luglio", categoria: "f24" },
      { data: "20 ago", cosa: "Versamento rate trimestrali risultanti dalla dichiarazione dei redditi (con eventuale maggiorazione)", chi: "Soggetti che hanno scelto la rateazione", categoria: "irpef" },
    ],
  },
  {
    slug: "settembre",
    nome: "Settembre 2026",
    anchor: "settembre",
    scadenze: [
      { data: "16 set", cosa: "IVA di agosto + ritenute IRPEF + INPS dipendenti", chi: "Sostituti d&apos;imposta", categoria: "f24" },
      { data: "30 set", cosa: "Presentazione telematica del modello Redditi Persone Fisiche 2026 (anno d&apos;imposta 2025)", chi: "Persone fisiche", categoria: "dichiarazione" },
      { data: "30 set", cosa: "Presentazione telematica modelli Redditi Società di Persone, Società di Capitali, IRAP", chi: "Società", categoria: "dichiarazione" },
      { data: "30 set", cosa: "Termine 730 ordinario tramite CAF o commercialista", chi: "Contribuenti che usano il 730", categoria: "dichiarazione" },
    ],
  },
  {
    slug: "ottobre",
    nome: "Ottobre 2026",
    anchor: "ottobre",
    scadenze: [
      { data: "16 ott", cosa: "IVA di settembre + ritenute IRPEF + INPS dipendenti", chi: "Sostituti d&apos;imposta", categoria: "f24" },
      { data: "31 ott", cosa: "Presentazione telematica del modello 770 (sostituti d&apos;imposta)", chi: "Sostituti d&apos;imposta", categoria: "dichiarazione" },
    ],
  },
  {
    slug: "novembre",
    nome: "Novembre 2026",
    anchor: "novembre",
    scadenze: [
      { data: "16 nov", cosa: "Comunicazione liquidazioni periodiche IVA (LIPE) terzo trimestre", chi: "Contribuenti IVA mensili e trimestrali", categoria: "iva" },
      { data: "16 nov", cosa: "IVA di ottobre + IVA terzo trimestre + ritenute IRPEF + INPS dipendenti", chi: "Sostituti d&apos;imposta e contribuenti IVA", categoria: "f24" },
      { data: "30 nov", cosa: "Secondo acconto IRPEF, IRES, IRAP, imposta sostitutiva forfettari", chi: "Persone fisiche, professionisti, società", categoria: "irpef" },
      { data: "30 nov", cosa: "Secondo acconto contributi INPS Gestione Separata e gestioni speciali (eccedente minimale)", chi: "Professionisti e ditte individuali", categoria: "inps" },
    ],
  },
  {
    slug: "dicembre",
    nome: "Dicembre 2026",
    anchor: "dicembre",
    scadenze: [
      { data: "16 dic", cosa: "IVA di novembre + ritenute IRPEF + INPS dipendenti", chi: "Sostituti d&apos;imposta", categoria: "f24" },
      { data: "16 dic", cosa: "Versamento IMU saldo 2026", chi: "Proprietari di immobili soggetti a IMU", categoria: "altro" },
      { data: "27 dic", cosa: "Acconto IVA 2026 (88% del saldo dicembre dell&apos;anno precedente o metodo previsionale)", chi: "Contribuenti IVA", categoria: "iva" },
    ],
  },
];

const PROFILI = [
  {
    titolo: "Sei un forfettario?",
    sottotitolo: "Le tue scadenze fondamentali",
    voci: [
      "30 giugno: saldo imposta sostitutiva 2025 e primo acconto 2026, contributi INPS",
      "30 settembre: presentazione modello Redditi Persone Fisiche",
      "30 novembre: secondo acconto imposta sostitutiva e contributi INPS",
      "Mensile: nessuna liquidazione IVA (regime forfettario), nessun ISA, nessun bilancio",
    ],
    nota: "Non versi IVA, IRAP né addizionali. Niente liquidazioni periodiche, niente comunicazioni LIPE. Le uniche scadenze pesanti sono quelle annuali.",
  },
  {
    titolo: "Hai una Partita IVA in regime semplificato?",
    sottotitolo: "Il calendario operativo standard",
    voci: [
      "Trimestrale: liquidazione IVA (16 maggio, 20 agosto, 16 novembre, 16 marzo dell&apos;anno successivo)",
      "Trimestrale: comunicazione LIPE (31 gennaio, 16 maggio, 16 settembre, 30 novembre)",
      "30 giugno: saldo + primo acconto IRPEF/INPS",
      "30 settembre: presentazione modello Redditi PF e IRAP",
      "30 novembre: secondo acconto IRPEF/INPS",
    ],
    nota: "Se hai dipendenti, aggiungi versamento mensile ritenute e contributi (ogni 16 del mese).",
  },
  {
    titolo: "Sei un&apos;SRL o SPA?",
    sottotitolo: "Le scadenze societarie",
    voci: [
      "16 marzo: tassa libri sociali, diritto annuale CCIAA",
      "30 aprile/30 giugno: deposito bilancio (entro 30/120 giorni dalla chiusura esercizio)",
      "30 giugno: saldo IRES + IRAP, primo acconto",
      "30 settembre: dichiarazione Redditi SC + IRAP",
      "31 ottobre: modello 770 (se sostituto d&apos;imposta)",
      "30 novembre: secondo acconto IRES/IRAP",
    ],
    nota: "Le società di capitali con esercizio coincidente con anno solare hanno il calendario qui sopra. Per esercizi non coincidenti, le scadenze si shiftano in base alla data di chiusura.",
  },
  {
    titolo: "Hai dipendenti o collaboratori?",
    sottotitolo: "Le scadenze come sostituto d&apos;imposta",
    voci: [
      "16 di ogni mese: ritenute IRPEF e contributi INPS sulle retribuzioni del mese precedente",
      "16 febbraio: autoliquidazione INAIL (premio annuale o prima rata)",
      "31 gennaio: invio Certificazioni Uniche per autonomi",
      "28 febbraio: invio Certificazioni Uniche per dipendenti e pensionati",
      "31 ottobre: presentazione modello 770",
    ],
    nota: "I sostituti d&apos;imposta hanno il calendario fiscale più denso: la regola generale è il 16 del mese per quasi tutti gli adempimenti.",
  },
];

const FAQS = [
  {
    q: "Cosa succede se manco una scadenza fiscale?",
    a: "Per i versamenti tardivi è previsto il ravvedimento operoso: si paga l&apos;imposta dovuta più una sanzione ridotta (dallo 0,1% al 5% in base al ritardo) e gli interessi legali. Per i mancati invii di dichiarazioni le sanzioni sono molto più alte, ma esistono comunque strumenti di ravvedimento entro 90 giorni dal termine ordinario.",
  },
  {
    q: "Le scadenze cambiano ogni anno?",
    a: "Le scadenze ordinarie sono in genere stabili (16 del mese per F24, 30 giugno per saldi, 30 settembre per dichiarazioni). Cambia il calendario quando il giorno cade di sabato/domenica/festivo: in quel caso la scadenza slitta al primo giorno feriale successivo. Verificare sempre col proprio commercialista.",
  },
  {
    q: "Posso pagare in ritardo con maggiorazione?",
    a: "Sì, in alcuni casi. Per il saldo + primo acconto delle imposte dei redditi è prevista una maggiorazione dello 0,40% se versi entro il 31 luglio anziché il 30 giugno. Per altri versamenti il ritardo si gestisce con ravvedimento operoso, calcolato giorno per giorno.",
  },
  {
    q: "Come ricordo tutte queste scadenze?",
    a: "Il modo più semplice è affidarti a un commercialista che gestisce il calendario per te. In alternativa, attiva un&apos;agenda condivisa con notifiche, o usa un portale che le sincronizza automaticamente in base al tuo regime fiscale e alla tua attività.",
  },
  {
    q: "Le scadenze sono uguali per tutti?",
    a: "No. Forfettari, semplificati, ordinari, società di persone, società di capitali, sostituti d&apos;imposta hanno calendari diversi. Anche fra forfettari, chi ha dipendenti aggiunge tutto il blocco delle scadenze come sostituto d&apos;imposta.",
  },
];

const CATEGORIE_LABELS: Record<Scadenza["categoria"], string> = {
  iva: "IVA",
  irpef: "IRPEF",
  ires: "IRES",
  inps: "INPS",
  inail: "INAIL",
  f24: "F24",
  dichiarazione: "Dichiarazione",
  altro: "Altro",
};

const CATEGORIE_COLORS: Record<Scadenza["categoria"], string> = {
  iva: "bg-blue-50 text-blue-700",
  irpef: "bg-emerald-50 text-emerald-700",
  ires: "bg-emerald-50 text-emerald-700",
  inps: "bg-amber-50 text-amber-700",
  inail: "bg-amber-50 text-amber-700",
  f24: "bg-zinc-100 text-zinc-700",
  dichiarazione: "bg-violet-50 text-violet-700",
  altro: "bg-rose-50 text-rose-700",
};

export default function CalendarioScadenzeFiscaliPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Calendario fiscale 2026
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Tutte le scadenze fiscali del 2026
          </h1>
          <p className="text-zinc-600 leading-relaxed text-lg max-w-2xl mx-auto mb-8">
            F24, IVA, IRPEF, contributi INPS, dichiarazioni dei redditi, modello 770: il calendario completo organizzato mese per mese. Tutto quello che serve sapere per non rischiare sanzioni e ravvedimenti.
          </p>
          <p className="text-xs text-zinc-500">
            Ultimo aggiornamento: 25 aprile 2026 &middot; Le scadenze sono indicative: in caso di sabato/domenica o festivo slittano al primo giorno feriale successivo.
          </p>
        </section>

        {/* Nav rapida ai mesi */}
        <section className="max-w-4xl mx-auto px-6 mt-12">
          <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-6">
            <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Vai al mese
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
              {MESI.map((m) => (
                <a
                  key={m.slug}
                  href={`#${m.anchor}`}
                  className="text-sm text-zinc-700 hover:text-[var(--color-accent)] hover:bg-white rounded-lg px-3 py-2 transition-colors text-center font-medium"
                >
                  {m.nome.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Scadenze ricorrenti */}
        <section className="max-w-4xl mx-auto px-6 mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Scadenze ricorrenti del mese
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Alcune scadenze tornano puntuali ogni mese, indipendentemente dall&apos;attività. Sono il cuore del calendario fiscale italiano per chi ha dipendenti o gestisce un&apos;impresa attiva.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-100 bg-white p-6">
              <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                Ogni 16 del mese
              </p>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Versamento ritenute IRPEF lavoro dipendente del mese precedente</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Versamento ritenute IRPEF su lavoro autonomo</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Contributi INPS dipendenti del mese precedente</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> Liquidazione IVA mensile (per chi liquida mensilmente)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-100 bg-white p-6">
              <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                Trimestrale (per chi liquida IVA trimestrale)
              </p>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> 16 maggio: liquidazione IVA primo trimestre</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> 20 agosto: liquidazione IVA secondo trimestre (con proroga)</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> 16 novembre: liquidazione IVA terzo trimestre</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] font-bold">&bull;</span> 16 marzo dell&apos;anno successivo: saldo IVA quarto trimestre o saldo annuale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Calendario mese per mese */}
        <section className="max-w-4xl mx-auto px-6 mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Calendario mese per mese
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-10">
            Per ogni mese trovi le scadenze principali con la categoria e l&apos;indicazione di chi è interessato. Le scadenze del 16 di ogni mese (F24 ordinari) sono raggruppate dove possibile per non appesantire la lettura.
          </p>
          <div className="space-y-12">
            {MESI.map((m) => (
              <div key={m.slug} id={m.anchor} className="scroll-mt-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-zinc-900 font-[family-name:var(--font-heading)]">
                    {m.nome}
                  </h3>
                  <a href="#top" className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
                    Torna su &uarr;
                  </a>
                </div>
                <div className="rounded-2xl border border-zinc-100 bg-white overflow-hidden">
                  {m.scadenze.map((s, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-[80px_1fr] sm:grid-cols-[80px_120px_1fr] gap-3 p-4 text-sm ${
                        i !== m.scadenze.length - 1 ? "border-b border-zinc-100" : ""
                      }`}
                    >
                      <div className="font-mono text-zinc-900 font-semibold">{s.data}</div>
                      <div className="hidden sm:block">
                        <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${CATEGORIE_COLORS[s.categoria]}`}>
                          {CATEGORIE_LABELS[s.categoria]}
                        </span>
                      </div>
                      <div>
                        <div className="text-zinc-900" dangerouslySetInnerHTML={{ __html: s.cosa }} />
                        <div className="text-xs text-zinc-500 mt-1" dangerouslySetInnerHTML={{ __html: s.chi }} />
                        <div className="sm:hidden mt-2">
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${CATEGORIE_COLORS[s.categoria]}`}>
                            {CATEGORIE_LABELS[s.categoria]}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Per profilo */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Le scadenze che riguardano te
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-10">
            Il calendario completo è denso, ma non tutte le voci si applicano a tutti. Ecco le scadenze che pesano davvero in base al tuo profilo fiscale.
          </p>
          <div className="space-y-6">
            {PROFILI.map((p) => (
              <div key={p.titolo} className="rounded-2xl border border-zinc-100 bg-white p-6 sm:p-8">
                <h3
                  className="text-lg font-semibold text-zinc-900 mb-1 font-[family-name:var(--font-heading)]"
                  dangerouslySetInnerHTML={{ __html: p.titolo }}
                />
                <p className="text-sm text-[var(--color-accent)] font-medium mb-4">{p.sottotitolo}</p>
                <ul className="space-y-2 mb-4">
                  {p.voci.map((v, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-700">
                      <span className="text-[var(--color-accent)] font-bold">&bull;</span>
                      <span dangerouslySetInnerHTML={{ __html: v }} />
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-zinc-500 italic" dangerouslySetInnerHTML={{ __html: p.nota }} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA portale */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <div className="rounded-2xl bg-[var(--color-surface)] p-8 sm:p-10">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
              Mai più scadenze dimenticate
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
              Lascia che il portale tenga il conto per te
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Quando sei cliente A.T. Consulting Parma, il <Link href="/portale" className="text-[var(--color-accent)] hover:underline">portale clienti</Link> popola automaticamente tutte le scadenze rilevanti per il tuo regime fiscale e per la tua attività. Niente da configurare, niente promemoria da scrivere a mano: vedi solo quello che riguarda te, con le notifiche al momento giusto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portale"
                className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium text-center"
              >
                Scopri il portale clienti
              </Link>
              <Link
                href="/servizi"
                className="inline-block px-6 py-3 border border-zinc-200 text-zinc-700 rounded-lg hover:bg-white transition-colors text-sm font-medium text-center"
              >
                Vedi i servizi
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Domande frequenti sulle scadenze
          </h2>
          <div className="space-y-3 mt-8">
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
                <p className="text-sm text-zinc-700 leading-relaxed mt-3" dangerouslySetInnerHTML={{ __html: f.a }} />
              </details>
            ))}
          </div>
        </section>

        {/* Disclaimer + correlati */}
        <section className="max-w-3xl mx-auto px-6 mt-16">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900 leading-relaxed">
            <strong className="block mb-1">Avvertenza</strong>
            Il calendario è curato dal nostro team di dottori commercialisti ed è aggiornato alla data indicata in cima alla pagina. Le scadenze possono essere oggetto di proroghe straordinarie comunicate dall&apos;Agenzia delle Entrate o dal Governo. Per la situazione specifica della tua attività, verifica sempre con il tuo commercialista o contattaci per una consulenza.
          </div>

          <h2 className="text-xl font-semibold text-zinc-900 mt-12 mb-4 font-[family-name:var(--font-heading)]">
            Approfondimenti correlati
          </h2>
          <ul className="space-y-2">
            <li className="flex gap-3 text-sm text-zinc-700"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <Link href="/blog/regime-forfettario-2026" className="text-[var(--color-accent)] hover:underline">Regime forfettario 2026: guida completa</Link></li>
            <li className="flex gap-3 text-sm text-zinc-700"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <Link href="/blog/quanto-costa-commercialista-online" className="text-[var(--color-accent)] hover:underline">Quanto costa un commercialista online nel 2026?</Link></li>
            <li className="flex gap-3 text-sm text-zinc-700"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <Link href="/blog/come-fare-730-online" className="text-[var(--color-accent)] hover:underline">Come fare il 730 online: guida completa</Link></li>
            <li className="flex gap-3 text-sm text-zinc-700"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <Link href="/portale" className="text-[var(--color-accent)] hover:underline">Il portale clienti A.T. Consulting Parma</Link></li>
          </ul>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
