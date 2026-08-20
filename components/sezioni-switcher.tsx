import Link from "next/link";

// Piccolo switcher fra le due sezioni editoriali: le news brevi del giorno
// (/aggiornamenti-fiscali) e gli approfondimenti lunghi (/approfondimenti).
// Sta in cima a entrambe le pagine: la nav principale resta invariata.

const TABS = [
  { href: "/aggiornamenti-fiscali", label: "Aggiornamenti", key: "aggiornamenti" },
  { href: "/approfondimenti", label: "Approfondimenti", key: "approfondimenti" },
] as const;

export type SezioneEditoriale = (typeof TABS)[number]["key"];

export function SezioniSwitcher({ current }: { current: SezioneEditoriale }) {
  return (
    <nav
      aria-label="Sezioni editoriali"
      className="inline-flex items-center gap-1 p-1 rounded-xl bg-zinc-100"
    >
      {TABS.map((t) => (
        <Link
          key={t.key}
          href={t.href}
          aria-current={current === t.key ? "page" : undefined}
          className={
            current === t.key
              ? "px-4 py-1.5 rounded-lg bg-white text-zinc-900 text-sm font-medium shadow-sm"
              : "px-4 py-1.5 rounded-lg text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          }
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
