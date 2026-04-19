import Link from "next/link";

interface ProductCredentialsProps {
  author: "Pietro Franzosi" | "Aldo Ponzi";
  authorAlbo: "Parma" | "Brescia";
  lastRevision: string;
}

function formatDataIT(iso: string): string {
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ProductCredentials({
  author,
  authorAlbo,
  lastRevision,
}: ProductCredentialsProps) {
  return (
    <aside className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4">
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-2">
          A cura di
        </p>
        <p className="text-base font-semibold text-zinc-900 font-[family-name:var(--font-heading)]">
          {author}
        </p>
        <p className="text-sm text-zinc-600">
          Dottore commercialista, Albo di {authorAlbo} (sez A)
        </p>
        <p className="text-xs text-zinc-500 mt-2">
          Ultima revisione: {formatDataIT(lastRevision)}
        </p>
      </div>

      <ul className="space-y-2 text-sm text-zinc-700 border-t border-zinc-100 pt-4">
        <li className="flex gap-2">
          <span className="text-[var(--color-accent)]" aria-hidden>
            &#10003;
          </span>
          Supporto email in 24 ore lavorative
        </li>
        <li className="flex gap-2">
          <span className="text-[var(--color-accent)]" aria-hidden>
            &#10003;
          </span>
          Pagamento sicuro via Stripe o PayPal
        </li>
        <li className="flex gap-2">
          <span className="text-[var(--color-accent)]" aria-hidden>
            &#10003;
          </span>
          Dati conservati su infrastruttura in Unione Europea
        </li>
      </ul>

      <Link
        href="/sicurezza"
        className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] font-medium hover:underline"
      >
        Come proteggiamo i tuoi dati &rarr;
      </Link>
    </aside>
  );
}
