import Link from "next/link";

interface Props {
  /** Variante visiva: "full" per home/landing, "compact" per le schede prodotto. */
  variant?: "full" | "compact";
  /** Titolo opzionale (default per variante). */
  title?: string;
  /** Sottotitolo opzionale (default per variante). */
  subtitle?: string;
  /** Override del nome del prodotto, per il rebrand futuro a "Professio". */
  brandName?: string;
}

const FEATURES = [
  {
    title: "Documenti",
    body: "Carica quello che ti chiediamo, scarica quello che prepariamo noi. Niente email con allegati, niente confusione su quale versione è quella giusta.",
    icon: "documents",
  },
  {
    title: "Scadenzario",
    body: "Tutte le scadenze fiscali della tua pratica, aggiornate in tempo reale. Nessuna sorpresa, nessuna multa per dimenticanza.",
    icon: "calendar",
  },
  {
    title: "Messaggi",
    body: "Scrivi direttamente al tuo commercialista dal portale. Risposta entro 1 giorno lavorativo, tutto tracciato e archiviato.",
    icon: "messages",
  },
  {
    title: "Archivio 10 anni",
    body: "Tutti i documenti conservati per 10 anni come previsto dalla legge. Accessibili quando vuoi, da qualsiasi dispositivo.",
    icon: "archive",
  },
] as const;

function FeatureIcon({ name }: { name: (typeof FEATURES)[number]["icon"] }) {
  const common = "w-5 h-5";
  switch (name) {
    case "documents":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "messages":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case "archive":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      );
  }
}

/**
 * Sezione riusabile che spiega in poche righe cos&apos;è il portale clienti.
 *
 * - <PortaleSection variant="full" /> per home / landing dedicate (4 card grandi)
 * - <PortaleSection variant="compact" /> per schede prodotto (testo + bullet)
 *
 * Naming: il portale resta &laquo;il portale clienti&raquo; nei testi pubblici.
 * &laquo;Professio&raquo; è il brand strategico interno per la futura evoluzione
 * SaaS multi-studio: usare brandName quando arriverà il rebrand.
 */
export function PortaleSection({
  variant = "full",
  title,
  subtitle,
  brandName = "il portale clienti",
}: Props) {
  if (variant === "compact") {
    return (
      <section className="py-12 border-t border-zinc-100">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Il tuo spazio professionale
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            {title ?? `Ogni servizio include ${brandName}`}
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-6">
            {subtitle ??
              "Nessun costo aggiuntivo, nessun software da installare. Funziona da browser su computer, tablet e telefono. Ci vogliono 2 minuti per registrarsi e puoi farlo prima ancora di acquistare: la registrazione è gratuita, il pagamento arriva solo dopo la firma del mandato."}
          </p>
          <ul className="space-y-2 mb-6">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex gap-3 text-sm text-zinc-700">
                <span className="text-[var(--color-accent)] font-bold">&bull;</span>
                <span>
                  <strong>{f.title}:</strong> {f.body}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href="/portale"
            className="inline-flex items-center gap-1 text-[var(--color-accent)] text-sm font-medium hover:underline"
          >
            Scopri come funziona il portale
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
          Il portale clienti
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4 font-[family-name:var(--font-heading)]">
          {title ?? `${brandName.charAt(0).toUpperCase() + brandName.slice(1)}: tutto in un posto, sempre disponibile`}
        </h2>
        <p className="text-zinc-600 leading-relaxed text-center max-w-2xl mx-auto mb-16">
          {subtitle ??
            "Quando acquisti un servizio, il portale si attiva automaticamente. Nessun software da installare, funziona da browser su qualsiasi dispositivo."}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 border border-zinc-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-4">
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="font-semibold mb-2 font-[family-name:var(--font-heading)]">{f.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://clienti.atparma.com"
            className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium"
          >
            Accedi al portale
          </a>
          <p className="text-xs text-zinc-500 mt-3">
            Già cliente? Accedi. Nuovo cliente?{" "}
            <a href="https://clienti.atparma.com/register" className="text-[var(--color-accent)] hover:underline">
              Registrati gratis
            </a>{" "}
            &mdash; il pagamento arriva solo dopo la firma del mandato.
          </p>
        </div>
      </div>
    </section>
  );
}
