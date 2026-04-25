interface StepItem {
  /** Titolo breve dello step (es. "Registrati sul portale"). */
  step: string;
  /** Descrizione estesa, 1-2 frasi. */
  body: string;
}

interface Props {
  /** Lista step. Compatibile col tipo `process` di ProdottoServizio in app/servizi/_data/prodotti.ts. */
  steps: StepItem[];
  /** Titolo opzionale sopra lo stepper. Default: nessun titolo. */
  title?: string;
  /** Sottotitolo opzionale. */
  subtitle?: string;
  /**
   * Layout:
   * - "auto" (default): orizzontale su desktop (>= md), verticale su mobile
   * - "vertical": sempre verticale (utile per stepper lunghi 6+ passi)
   * - "horizontal": sempre orizzontale (forza griglia, va in overflow su mobile)
   */
  layout?: "auto" | "vertical" | "horizontal";
  /** Numerazione di partenza. Default 1. */
  startFrom?: number;
}

/**
 * Stepper grafico riusabile per sezioni "Come funziona" delle schede prodotto.
 *
 * Sostituisce le bullet list testo dei processi multistep con una timeline
 * visiva numerata che si scansiona in pochi secondi anche su mobile.
 *
 * Esempi d&apos;uso:
 *   <Stepper steps={prodotto.process} />
 *   <Stepper steps={steps} title="Come funziona" subtitle="Quattro passi, niente carta" />
 *   <Stepper steps={longSteps} layout="vertical" />
 *
 * Pattern: nessun shadcn Dialog, solo Tailwind utility coerenti col resto del
 * sito (stessa palette, stesso font heading, stessi accent color).
 */
export function Stepper({
  steps,
  title,
  subtitle,
  layout = "auto",
  startFrom = 1,
}: Props) {
  if (steps.length === 0) return null;

  const verticalOnly = layout === "vertical";
  const horizontalOnly = layout === "horizontal";

  return (
    <div className="space-y-8">
      {(title || subtitle) && (
        <div className="text-center">
          {title && (
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              {title}
            </h3>
          )}
          {subtitle && <p className="text-zinc-600 leading-relaxed mt-3 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}

      {/* Versione verticale (mobile + opzione forzata) */}
      <ol
        className={`space-y-6 ${
          verticalOnly ? "" : horizontalOnly ? "hidden" : "md:hidden"
        }`}
      >
        {steps.map((s, i) => {
          const num = startFrom + i;
          const isLast = i === steps.length - 1;
          return (
            <li key={i} className="relative flex gap-4">
              {/* Linea verticale tra cerchi */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute left-[19px] top-12 bottom-[-24px] w-px bg-zinc-200"
                />
              )}
              {/* Cerchio numerato */}
              <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent)] text-white font-bold flex items-center justify-center font-[family-name:var(--font-heading)] text-sm">
                {num}
              </div>
              {/* Contenuto */}
              <div className="pt-1.5">
                <h4 className="font-semibold text-zinc-900 mb-1 font-[family-name:var(--font-heading)]">
                  {s.step}
                </h4>
                <p className="text-sm text-zinc-700 leading-relaxed">{s.body}</p>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Versione orizzontale (desktop, default) */}
      {!verticalOnly && (
        <ol
          className={`${horizontalOnly ? "grid" : "hidden md:grid"} gap-6 relative`}
          style={{
            gridTemplateColumns: `repeat(${Math.min(steps.length, 4)}, minmax(0, 1fr))`,
          }}
        >
          {/* Linea orizzontale di sfondo */}
          <span
            aria-hidden="true"
            className="absolute top-5 left-[5%] right-[5%] h-px bg-zinc-200 -z-10"
          />
          {steps.map((s, i) => {
            const num = startFrom + i;
            return (
              <li key={i} className="relative flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white font-bold flex items-center justify-center font-[family-name:var(--font-heading)] text-sm mb-4 ring-4 ring-white">
                  {num}
                </div>
                <h4 className="font-semibold text-zinc-900 mb-2 font-[family-name:var(--font-heading)]">
                  {s.step}
                </h4>
                <p className="text-sm text-zinc-700 leading-relaxed">{s.body}</p>
              </li>
            );
          })}
        </ol>
      )}

      {/* Fallback per stepper > 4 step su desktop: scroll orizzontale */}
      {!verticalOnly && !horizontalOnly && steps.length > 4 && (
        <p className="text-xs text-zinc-400 italic md:hidden">
          {/* Hint solo su mobile dove la versione verticale è mostrata */}
        </p>
      )}
    </div>
  );
}
