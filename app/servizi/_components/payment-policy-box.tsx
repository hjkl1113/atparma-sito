export function PaymentPolicyBox({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 ${className}`}
    >
      <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
        Pagamento e sconti
      </p>
      <h3 className="text-xl font-semibold mb-4 font-[family-name:var(--font-heading)]">
        Rateizzazione e sconto pagamento anticipato
      </h3>
      <ul className="space-y-3 text-sm text-zinc-700 leading-relaxed">
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
          <span>
            <strong>Pratiche oltre 500€</strong>: puoi pagare il 30% alla firma del
            mandato e il resto in 3 tranche trimestrali, senza costi aggiuntivi.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
          <span>
            <strong>Sconto 5% pagamento anticipato</strong>: se salda in un&apos;unica
            soluzione alla firma una pratica tra 500€ e 1.000€ (es. il bundle P.IVA
            forfettario da 549€).
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
          <span>
            <strong>Sconto 10% pagamento anticipato</strong>: sulle pratiche oltre
            1.000€ saldate in un&apos;unica soluzione alla firma.
          </span>
        </li>
      </ul>
      <p className="text-xs text-zinc-500 mt-4 leading-relaxed">
        La scelta tra pagamento anticipato scontato e rateizzazione avviene direttamente
        al checkout con carta di credito. Gli sconti sono alternativi alla rateizzazione.
        Importi IVA inclusa. Tributi e diritti pubblici (quando applicabili) restano
        separati dall&apos;onorario studio.
      </p>
    </aside>
  );
}
