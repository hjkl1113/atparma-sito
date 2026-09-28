import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { news } from "@/lib/news";
import { articoli } from "@/lib/articoli";
import { SezioniSwitcher } from "@/components/sezioni-switcher";

export const metadata: Metadata = {
  title: "Debiti e crisi: sovraindebitamento, cartelle, fideiussioni | A.T. Consulting Parma",
  description:
    "Uscire dai debiti: sovraindebitamento ed esdebitazione per i privati, composizione negoziata e concordato per le imprese, cartelle e riscossione, fideiussioni bancarie. Guide e novità aggiornate.",
  alternates: { canonical: "/debiti-e-crisi" },
  openGraph: {
    title: "Debiti e crisi — A.T. Consulting Parma",
    description:
      "Sovraindebitamento, esdebitazione, composizione negoziata, cartelle esattoriali e fideiussioni bancarie: guide e aggiornamenti dallo studio.",
    type: "website",
    url: "https://www.atparma.com/debiti-e-crisi",
  },
};

// Guide del blog che compongono il nucleo dell'argomento.
const SLUG_GUIDE = [
  "sovraindebitamento-2026-come-uscire-dai-debiti",
  "esdebitazione-incapiente-2026",
  "concordato-minore-2026",
  "composizione-negoziata-crisi-impresa-2026",
  "concordato-semplificato-liquidazione-2026",
  "adeguati-assetti-indici-crisi-2026",
];

const FILONI = [
  {
    titolo: "Hai debiti personali che non riesci più a pagare",
    testo:
      "Il Codice della crisi prevede procedure riservate a chi non è fallibile: consumatori, piccoli imprenditori, professionisti. Si può ristrutturare il debito, liquidare il patrimonio in modo controllato oppure, se non si possiede nulla, chiedere la cancellazione dei debiti come debitore incapiente.",
    guide: ["sovraindebitamento-2026-come-uscire-dai-debiti", "esdebitazione-incapiente-2026", "concordato-minore-2026"],
  },
  {
    titolo: "L'impresa è in difficoltà ma può ancora risollevarsi",
    testo:
      "Prima delle procedure concorsuali esistono strumenti di allerta e di risanamento: la composizione negoziata con un esperto indipendente, le misure protettive dai creditori, i benefici fiscali dell'art. 25-bis e, se le trattative non riescono, il concordato semplificato.",
    guide: ["composizione-negoziata-crisi-impresa-2026", "concordato-semplificato-liquidazione-2026", "adeguati-assetti-indici-crisi-2026"],
  },
  {
    titolo: "Cartelle, pignoramenti e garanzie firmate in banca",
    testo:
      "Accanto alle procedure ci sono le partite quotidiane: cartelle di pagamento e loro notifica, rateizzazioni e rottamazioni, fermi e ipoteche, e le fideiussioni firmate a garanzia di un'impresa, su cui la giurisprudenza torna spesso con decisioni che cambiano le carte in tavola.",
    guide: [],
  },
];

export default function DebitiECrisiPage() {
  const ultime = news.filter((n) => n.categoria === "crisi-debiti").slice(0, 8);
  const guide = SLUG_GUIDE.map((s) => articoli.find((a) => a.slug === s)).filter(
    (a): a is NonNullable<typeof a> => Boolean(a),
  );

  return (
    <>
      <SiteHeader current="debiti-e-crisi" />

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Debiti e crisi
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Quando i debiti diventano il problema
          </h1>
          <p className="text-zinc-600 mb-10 leading-relaxed max-w-3xl">
            Sovraindebitamento ed esdebitazione per le persone, composizione negoziata e
            concordato per le imprese, cartelle e riscossione, fideiussioni bancarie. Qui
            trovi le guide dello studio e le novità che contano, aggiornate man mano che
            escono le decisioni dei tribunali.
          </p>

          <div className="mb-10">
            <SezioniSwitcher current="debiti-e-crisi" />
          </div>

          {/* I tre filoni */}
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {FILONI.map((f) => (
              <div key={f.titolo} className="bg-zinc-50 rounded-xl p-6 border border-zinc-100">
                <h2 className="text-lg font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
                  {f.titolo}
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">{f.testo}</p>
                {f.guide.length > 0 && (
                  <ul className="space-y-1 text-sm">
                    {f.guide.map((slug) => {
                      const a = articoli.find((x) => x.slug === slug);
                      if (!a) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={`/blog/${slug}`}
                            className="text-[var(--color-accent)] hover:underline"
                          >
                            {a.titolo}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Le guide */}
          <h2 className="text-2xl font-bold tracking-tight mb-2 font-[family-name:var(--font-heading)]">
            Le guide dello studio
          </h2>
          <p className="text-zinc-600 mb-6 max-w-3xl">
            Approfondimenti completi, con i riferimenti normativi e i passaggi pratici di
            ciascuna procedura.
          </p>
          <div className="grid gap-4 md:grid-cols-2 mb-16">
            {guide.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="block bg-white rounded-xl p-5 border border-zinc-200 hover:border-[var(--color-accent)] transition-colors"
              >
                <h3 className="font-semibold text-zinc-900 mb-2 font-[family-name:var(--font-heading)]">
                  {a.titolo}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">{a.excerpt}</p>
              </Link>
            ))}
          </div>

          {/* Le novità */}
          <h2 className="text-2xl font-bold tracking-tight mb-2 font-[family-name:var(--font-heading)]">
            Le ultime novità
          </h2>
          <p className="text-zinc-600 mb-6 max-w-3xl">
            Decisioni dei tribunali, pronunce della Cassazione e novità normative su debiti,
            crisi d&apos;impresa e riscossione.
          </p>
          {ultime.length === 0 ? (
            <p className="text-zinc-500 mb-16">
              Nessuna novità pubblicata al momento in questa sezione. Nel frattempo puoi
              leggere le guide qui sopra oppure gli{" "}
              <Link href="/aggiornamenti-fiscali" className="text-[var(--color-accent)] hover:underline">
                aggiornamenti fiscali
              </Link>
              .
            </p>
          ) : (
            <ul className="space-y-4 mb-16">
              {ultime.map((n) => (
                <li key={n.slug} className="border-b border-zinc-100 pb-4">
                  <Link
                    href={`/aggiornamenti-fiscali/${n.slug}`}
                    className="font-semibold text-zinc-900 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {n.titolo}
                  </Link>
                  <p className="text-sm text-zinc-600 mt-1 leading-relaxed">{n.sommario}</p>
                  <p className="text-xs text-zinc-400 mt-1">
                    {new Date(n.data).toLocaleDateString("it-IT", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {/* Invito */}
          <div className="bg-[var(--color-accent)]/5 rounded-xl p-8 border border-[var(--color-accent)]/20">
            <h2 className="text-xl font-semibold text-zinc-900 mb-3 font-[family-name:var(--font-heading)]">
              Ogni situazione debitoria è diversa
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-5 max-w-3xl">
              Le procedure descritte qui hanno presupposti precisi e non sono alternative
              equivalenti: la strada giusta dipende da quali debiti ha accumulato, verso chi,
              e da cosa possiede. Il primo passo è guardare i numeri insieme.
            </p>
            <Link
              href="/servizi/crisi-di-impresa"
              className="inline-block bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Come lavoriamo sulla crisi d&apos;impresa
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
