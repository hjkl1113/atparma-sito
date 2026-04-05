import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Come fare il 730 online: guida completa 2026 | A.T. Consulting Parma",
  description: "Guida al modello 730 online nel 2026: chi deve presentarlo, scadenze, documenti necessari, detrazioni e quando conviene rivolgersi a un commercialista.",
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

          <time className="text-xs text-zinc-400 block mb-3">18 marzo 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Come fare il 730 online: guida completa 2026
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/images/generated-1775312805408.png" alt="Dichiarazione 730 online" fill className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Il modello 730 e la dichiarazione dei redditi piu utilizzata in Italia da lavoratori dipendenti e pensionati. Dal 2024, l&apos;Agenzia delle Entrate mette a disposizione il 730 precompilato, ma non sempre conviene accettarlo cosi com&apos;e. Ecco tutto quello che devi sapere per il 2026.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Chi deve presentare il 730
            </h2>
            <p>
              Il modello 730 e riservato a lavoratori dipendenti, pensionati e titolari di alcuni redditi assimilati. Non possono usarlo i titolari di Partita IVA, che devono presentare il modello Redditi PF.
            </p>
            <p>
              La presentazione e obbligatoria se hai piu fonti di reddito, redditi da immobili o se devi restituire bonus percepiti indebitamente. E facoltativa — ma spesso conveniente — se hai spese detraibili o deducibili.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Scadenze 2026
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>30 aprile 2026:</strong> disponibilita del 730 precompilato sul sito dell&apos;Agenzia delle Entrate</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span><strong>30 settembre 2026:</strong> termine ultimo per la presentazione del modello 730</span></li>
            </ul>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              730 precompilato o con commercialista?
            </h2>
            <p>
              Il precompilato dell&apos;Agenzia delle Entrate e comodo ma non sempre completo. Spese mediche, ristrutturazioni, bonus edilizi e situazioni familiari complesse spesso non vengono rilevate automaticamente. Un commercialista verifica ogni voce, individua detrazioni mancanti e si assume la responsabilita della dichiarazione.
            </p>
            <p>
              In molti casi, il costo del commercialista si ripaga abbondantemente con le detrazioni aggiuntive individuate.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Documenti da preparare
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>CU (Certificazione Unica) del datore di lavoro o ente pensionistico</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese mediche e sanitarie (scontrini, fatture, ticket)</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Interessi passivi su mutuo prima casa</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese per ristrutturazioni e bonus edilizi</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Spese scolastiche e universitarie</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Assicurazioni vita e infortuni</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">&bull;</span> <span>Contributi previdenziali e assistenziali</span></li>
            </ul>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Le detrazioni piu dimenticate
            </h2>
            <p>
              Ogni anno migliaia di contribuenti perdono detrazioni a cui avrebbero diritto. Le piu comuni: spese veterinarie, abbonamenti al trasporto pubblico, spese funebri, donazioni a ONLUS e contributi per colf e badanti. Un controllo professionale puo fare la differenza.
            </p>

            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Vuoi fare il 730 con un professionista?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                Affidati al nostro team: controlliamo ogni detrazione, gestiamo l&apos;invio e ti garantiamo assistenza completa.
              </p>
              <Link href="/contatti" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Prenota il tuo 730
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
