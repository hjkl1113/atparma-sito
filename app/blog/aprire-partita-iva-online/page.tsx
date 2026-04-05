import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Come aprire la Partita IVA online nel 2026 | A.T. Consulting Parma",
  description: "Guida completa all'apertura della Partita IVA online nel 2026: costi, tempi, regime forfettario, codice ATECO e documenti necessari.",
};

export default function ArticoloPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">A.T. Consulting</Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <Link href="/servizi" className="hover:text-zinc-900 transition-colors">Servizi</Link>
            <Link href="/blog" className="text-zinc-900 font-medium">Blog</Link>
            <Link href="/contatti" className="hover:text-zinc-900 transition-colors">Contatti</Link>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Blog
          </Link>

          <time className="text-xs text-zinc-400 block mb-3">25 marzo 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Come aprire la Partita IVA online nel 2026: tutto quello che devi sapere
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/images/generated-1775312781998.png" alt="Apertura Partita IVA online" fill className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Aprire la Partita IVA nel 2026 e un processo che puoi avviare interamente online. Che tu sia un freelance, un professionista o un aspirante imprenditore, questa guida ti accompagna passo dopo passo nella procedura, nei costi e nelle scelte fiscali da fare.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quando serve la Partita IVA
            </h2>
            <p>
              La Partita IVA e obbligatoria quando svolgi un&apos;attivita economica in modo abituale e continuativo. Non serve per prestazioni occasionali sotto i 5.000 euro annui, ma attenzione: il criterio dell&apos;abitualita prevale sempre sull&apos;importo.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Il regime forfettario: per chi conviene
            </h2>
            <p>
              Il regime forfettario e la scelta piu comune per chi inizia. Prevede un&apos;imposta sostitutiva del 5% per i primi 5 anni (poi 15%), nessun obbligo di fatturazione elettronica sotto certi limiti e una contabilita semplificata. Il limite di ricavi e fissato a 85.000 euro annui.
            </p>
            <p>
              Non e adatto a tutti: chi ha costi elevati, collaboratori o prevede di superare rapidamente la soglia potrebbe beneficiare del regime ordinario.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Come scegliere il codice ATECO
            </h2>
            <p>
              Il codice ATECO identifica la tua attivita economica e determina il coefficiente di redditivita nel regime forfettario. Una scelta errata puo costare migliaia di euro in tasse in piu. E fondamentale analizzare con precisione l&apos;attivita che svolgerai e confrontare i codici disponibili.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Documenti e procedura
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">1.</span> <span>Documento di identita e codice fiscale</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">2.</span> <span>Scelta del regime fiscale (forfettario o ordinario)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">3.</span> <span>Individuazione del codice ATECO</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">4.</span> <span>Compilazione del modello AA9/12 (persone fisiche) o AA7/10 (societa)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">5.</span> <span>Invio telematico all&apos;Agenzia delle Entrate</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">6.</span> <span>Iscrizione alla gestione previdenziale INPS</span></li>
            </ul>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Costi di apertura
            </h2>
            <p>
              L&apos;apertura della Partita IVA presso l&apos;Agenzia delle Entrate e gratuita. I costi riguardano la consulenza del commercialista per la configurazione corretta, l&apos;iscrizione alla Camera di Commercio (se necessaria) e i diritti INPS. Affidarsi a un professionista evita errori che possono costare molto di piu nel tempo.
            </p>

            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi aprire la Partita IVA senza pensieri?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Il nostro team ti guida nella scelta del regime fiscale, del codice ATECO e gestisce tutta la pratica online.
              </p>
              <Link href="/contatti" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Richiedi assistenza
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
