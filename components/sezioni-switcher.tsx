import Link from "next/link";

// Piccolo switcher fra le sezioni editoriali: le news brevi del giorno
// (/aggiornamenti-fiscali), gli approfondimenti lunghi (/approfondimenti) e
// l'argomento debiti e crisi (/debiti-e-crisi).
// Sta in cima a queste pagine: la nav principale resta invariata.

const TABS = [
  { href: "/aggiornamenti-fiscali", label: "Aggiornamenti", key: "aggiornamenti" },
  { href: "/approfondimenti", label: "Approfondimenti", key: "approfondimenti" },
  { href: "/debiti-e-crisi", label: "Debiti e crisi", key: "debiti-e-crisi" },
] as const;

export type SezioneEditoriale = (typeof TABS)[number]["key"];

export function SezioniSwitcher({ current }: { current: SezioneEditoriale }) {
  return (
    <nav
      aria-label="Sezioni editoriali"
      className="flex w-full flex-col sm:flex-row items-stretch gap-2"
    >
      {TABS.map((t) => (
        <Link
          key={t.key}
          href={t.href}
          aria-current={current === t.key ? "page" : undefined}
          className={
            current === t.key
              ? "flex-1 text-center px-6 py-4 rounded-xl bg-[var(--color-accent-dark)] text-white text-lg font-semibold shadow-md"
              : "flex-1 text-center px-6 py-4 rounded-xl bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)] text-lg font-semibold text-[var(--color-accent-dark)] hover:bg-[var(--color-accent)]/20 transition-colors"
          }
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
