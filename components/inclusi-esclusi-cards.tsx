interface Props {
  /** Voci incluse nel servizio. Compatibile col tipo `bullets` di ProdottoServizio. */
  inclusi: string[];
  /** Voci NON incluse. Compatibile col tipo `esclusi` di ProdottoServizio. */
  esclusi: string[];
  /** Override titolo card incluso. Default: "Cosa è incluso". */
  inclusiTitle?: string;
  /** Override titolo card escluso. Default: "Cosa NON è incluso". */
  esclusiTitle?: string;
  /** Sottotitolo opzionale sopra le due card (descrizione neutra). */
  subtitle?: string;
}

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/**
 * Cards Incluso/Escluso affiancate per le schede prodotto.
 *
 * Sostituisce le due bullet list testuali "Cosa è incluso" / "Cosa NON è
 * incluso" con due card colorate affiancate, pattern usato da SaaS moderni
 * (Stripe, Linear, Notion) per comunicare trasparenza in un colpo d&apos;occhio.
 *
 * Esempio d&apos;uso nelle schede prodotto:
 *   <InclusiEsclusiCards inclusi={prodotto.bullets} esclusi={prodotto.esclusi} />
 *
 * - Card incluso: bordo emerald, icona check verde, sfondo bianco
 * - Card escluso: bordo zinc, icona X grigia, sfondo bianco
 *
 * Layout: 2 colonne affiancate da sm: in su, 1 colonna su mobile.
 * Le card hanno altezza minima uguale per coerenza visiva.
 */
export function InclusiEsclusiCards({
  inclusi,
  esclusi,
  inclusiTitle = "Cosa è incluso",
  esclusiTitle = "Cosa NON è incluso",
  subtitle,
}: Props) {
  if (inclusi.length === 0 && esclusi.length === 0) return null;

  return (
    <div className="space-y-6">
      {subtitle && (
        <p className="text-zinc-600 leading-relaxed text-center max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Card Incluso */}
        {inclusi.length > 0 && (
          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <CheckIcon />
              </span>
              <h3 className="font-semibold text-emerald-900 font-[family-name:var(--font-heading)]">
                {inclusiTitle}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {inclusi.map((voce, i) => (
                <li key={i} className="flex gap-2 text-sm text-zinc-800">
                  <span className="text-emerald-600 mt-0.5">
                    <CheckIcon />
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: voce }} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Card Escluso */}
        {esclusi.length > 0 && (
          <div className="rounded-2xl border-2 border-zinc-200 bg-zinc-50/60 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-zinc-400 text-white flex items-center justify-center">
                <XIcon />
              </span>
              <h3 className="font-semibold text-zinc-900 font-[family-name:var(--font-heading)]">
                {esclusiTitle}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {esclusi.map((voce, i) => (
                <li key={i} className="flex gap-2 text-sm text-zinc-700">
                  <span className="text-zinc-400 mt-0.5">
                    <XIcon />
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: voce }} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
