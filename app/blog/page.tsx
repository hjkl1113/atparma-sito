import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Guide fiscali | A.T. Consulting Parma",
  description:
    "Guide fiscali, articoli e approfondimenti su dichiarazioni, Partita IVA e consulenza fiscale online. A cura di A.T. Consulting Parma.",
  alternates: {
    canonical: "/blog",
  },
};

const articoli = [
  {
    slug: "commercialista-online",
    title: "Commercialista online: come sceglierlo e perche conviene",
    excerpt:
      "Affidarsi a un commercialista online non significa rinunciare alla qualita. Scopri come scegliere il professionista giusto e quali vantaggi offre rispetto allo studio tradizionale.",
    image: "/images/generated-1775311824086.png",
    date: "2026-04-01",
  },
  {
    slug: "aprire-partita-iva-online",
    title: "Come aprire la Partita IVA online nel 2026: tutto quello che devi sapere",
    excerpt:
      "Aprire la Partita IVA nel 2026 e un processo che puoi gestire interamente online. In questa guida ti spieghiamo costi, tempi, regime fiscale e come scegliere il codice ATECO giusto.",
    image: "/images/generated-1775312781998.png",
    date: "2026-03-25",
  },
  {
    slug: "come-fare-730-online",
    title: "Come fare il 730 online: guida completa 2026",
    excerpt:
      "Il modello 730 e la dichiarazione dei redditi piu diffusa tra lavoratori dipendenti e pensionati. Scopri come compilarlo online, le scadenze 2026 e quando conviene rivolgersi a un professionista.",
    image: "/images/generated-1775312805408.png",
    date: "2026-03-18",
  },
];

export default function BlogPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              A.T. Consulting
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <Link href="/servizi" className="hover:text-zinc-900 transition-colors">Servizi</Link>
            <Link href="/blog" className="text-zinc-900 font-medium">Blog</Link>
            <Link href="/contatti" className="hover:text-zinc-900 transition-colors">Contatti</Link>
            <a href="https://clienti.atparma.com" className="ml-2 px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-800 transition-colors">
              Area Clienti
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Guide fiscali
          </h1>
          <p className="text-zinc-600 mb-12 leading-relaxed">
            Articoli e approfondimenti a cura del nostro team di dottori commercialisti.
          </p>

          <div className="space-y-8">
            {articoli.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group grid md:grid-cols-[280px_1fr] gap-6 p-6 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all"
              >
                <div className="relative h-48 md:h-full rounded-xl overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <time className="text-xs text-zinc-400 mb-2">
                    {new Date(a.date).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
                  </time>
                  <h2 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)] group-hover:text-[var(--color-accent)] transition-colors">
                    {a.title}
                  </h2>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {a.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[var(--color-accent)] text-sm font-medium mt-4">
                    Leggi l&apos;articolo
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
