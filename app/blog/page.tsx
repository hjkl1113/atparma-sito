import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { articoli } from "@/lib/articoli";

export const metadata: Metadata = {
  title: "Blog — Guide fiscali | A.T. Consulting Parma",
  description:
    "Guide fiscali, articoli e approfondimenti su dichiarazioni, Partita IVA e consulenza fiscale online. A cura di A.T. Consulting Parma.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader current="blog" />

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
                <div className="relative aspect-[1200/630] md:aspect-auto md:h-44 rounded-xl overflow-hidden">
                  <Image
                    src={a.immagine}
                    alt={a.titolo}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <time className="text-xs text-zinc-400 mb-2">
                    {new Date(a.data).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
                  </time>
                  <h2 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)] group-hover:text-[var(--color-accent)] transition-colors">
                    {a.titolo}
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
      <SiteFooter />
    </>
  );
}
