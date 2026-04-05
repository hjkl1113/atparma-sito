import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercialista online: come sceglierlo e perche conviene | A.T. Consulting Parma",
  description: "Guida alla scelta del commercialista online: vantaggi, cosa verificare, differenze con lo studio tradizionale e quando conviene davvero.",
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

          <time className="text-xs text-zinc-400 block mb-3">1 aprile 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Commercialista online: come sceglierlo e perche conviene
          </h1>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src="/images/generated-1775311824086.png" alt="Studio commercialista online" fill className="object-cover" priority />
          </div>

          <div className="prose-custom space-y-6 text-zinc-700 leading-relaxed">
            <p>
              La digitalizzazione ha trasformato anche il mondo della consulenza fiscale. Oggi affidarsi a un commercialista online non significa rinunciare alla qualita del servizio, ma accedere a un modello piu efficiente, veloce e spesso piu conveniente.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa fa un commercialista online
            </h2>
            <p>
              Un commercialista online offre gli stessi servizi di uno studio tradizionale — dichiarazioni dei redditi, consulenza fiscale, apertura Partita IVA, contabilita — ma gestisce il rapporto con il cliente prevalentemente in digitale: videochiamate, documenti condivisi, firma elettronica e portali dedicati.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              I vantaggi rispetto allo studio tradizionale
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">1.</span> <span><strong>Accessibilita:</strong> puoi comunicare con il tuo commercialista da qualsiasi luogo, senza spostamenti.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">2.</span> <span><strong>Velocita:</strong> la gestione digitale dei documenti riduce i tempi di lavorazione.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">3.</span> <span><strong>Trasparenza:</strong> portali clienti dedicati ti permettono di monitorare lo stato delle pratiche in tempo reale.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-accent)] font-bold">4.</span> <span><strong>Costi competitivi:</strong> la struttura snella consente di offrire tariffe spesso inferiori a parita di servizio.</span></li>
            </ul>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Cosa verificare prima di scegliere
            </h2>
            <p>
              Non tutti i servizi online sono equivalenti. Prima di affidarti a un professionista, verifica che sia iscritto all&apos;Albo dei Dottori Commercialisti e che abbia una struttura reale alle spalle. Diffida di chi offre solo tariffe basse senza garanzie di assistenza personalizzata.
            </p>
            <p>
              Controlla anche la presenza di un portale clienti sicuro, tempi di risposta garantiti e la possibilita di parlare direttamente con il professionista quando necessario.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4 font-[family-name:var(--font-heading)]">
              Quando conviene davvero
            </h2>
            <p>
              Il commercialista online e ideale per professionisti, freelance e piccole imprese che cercano un servizio efficiente senza vincoli geografici. Per situazioni piu complesse — come la crisi di impresa o le operazioni straordinarie — e importante che il professionista online abbia le competenze specialistiche necessarie, esattamente come uno studio tradizionale.
            </p>

            <div className="bg-[var(--color-surface)] rounded-2xl p-8 mt-10 text-center">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-zinc-900">
                Cerchi un commercialista online a Parma?
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                A.T. Consulting Parma unisce la solidita di uno studio radicato sul territorio alla comodita dei servizi digitali.
              </p>
              <Link href="/contatti" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Richiedi una consulenza
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
