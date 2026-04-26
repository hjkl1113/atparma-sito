/**
 * Tema visivo per le OG image dinamiche generate da app/og/route.tsx.
 * Mappa slug -> {titolo, eyebrow, gradiente from/to}.
 *
 * Vincoli scelta colori:
 * - ogni tema deve essere visivamente distinto dai vicini in lista (in /blog)
 * - coerente col brand A.T. Consulting Parma (toni desaturati, niente neon)
 * - contrasto sufficiente per leggibilita' del titolo bianco sopra il gradiente
 */
export interface OgTheme {
  titolo: string;
  eyebrow: string;
  /** Hex colore inizio gradiente (top-left). Esempio: "#1e3a8a". */
  from: string;
  /** Hex colore fine gradiente (bottom-right). Esempio: "#0ea5e9". */
  to: string;
}

export const ogThemes: Record<string, OgTheme> = {
  default: {
    eyebrow: "A.T. Consulting Parma",
    titolo: "Studio commercialista a Parma",
    from: "#0f172a",
    to: "#334155",
  },
  // === Articoli blog ===
  "cripto-quadro-rw-2026": {
    eyebrow: "Guida fiscale",
    titolo: "Cripto in dichiarazione 2026",
    from: "#1e3a8a",
    to: "#0ea5e9",
  },
  "ravvedimento-cripto-quadro-rw": {
    eyebrow: "Guida fiscale",
    titolo: "Ravvedimento cripto quadro RW",
    from: "#7f1d1d",
    to: "#f97316",
  },
  "regime-forfettario-2026": {
    eyebrow: "Guida fiscale",
    titolo: "Regime forfettario 2026",
    from: "#064e3b",
    to: "#10b981",
  },
  "quanto-costa-commercialista-online": {
    eyebrow: "Guida fiscale",
    titolo: "Quanto costa un commercialista online",
    from: "#1e293b",
    to: "#64748b",
  },
  "730-precompilato-conviene": {
    eyebrow: "Guida fiscale",
    titolo: "730 precompilato conviene?",
    from: "#581c87",
    to: "#a855f7",
  },
  // === Landing servizi ===
  "calcolo-imu": {
    eyebrow: "Servizio",
    titolo: "Calcolo IMU professionale",
    from: "#9a3412",
    to: "#fbbf24",
  },
  "quadro-rw": {
    eyebrow: "Servizio",
    titolo: "Quadro RW 2026",
    from: "#1e3a8a",
    to: "#3b82f6",
  },
  "quadro-rw-ravvedimento": {
    eyebrow: "Servizio",
    titolo: "Ravvedimento quadro RW",
    from: "#7f1d1d",
    to: "#dc2626",
  },
};
