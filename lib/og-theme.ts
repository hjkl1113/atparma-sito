/**
 * Tema visivo per le OG image dinamiche generate da app/og/route.tsx.
 * Mappa slug -> {titolo, eyebrow}.
 *
 * Palette unificata navy → blue per coerenza brand. Differenziazione
 * affidata alla tipografia (titolo + eyebrow), non al colore.
 */
export interface OgTheme {
  titolo: string;
  eyebrow: string;
}

export const ogThemes: Record<string, OgTheme> = {
  default: {
    eyebrow: "A.T. Consulting Parma",
    titolo: "Studio commercialista a Parma",
  },
  // === Articoli blog (nuovi) ===
  "concordato-semplificato-liquidazione-2026": {
    eyebrow: "Guida fiscale",
    titolo: "Concordato semplificato 2026",
  },
  "adeguati-assetti-indici-crisi-2026": {
    eyebrow: "Guida fiscale",
    titolo: "Adeguati assetti e indici della crisi",
  },
  "concordato-minore-2026": {
    eyebrow: "Guida fiscale",
    titolo: "Concordato minore 2026",
  },
  "esdebitazione-incapiente-2026": {
    eyebrow: "Guida fiscale",
    titolo: "Esdebitazione del debitore incapiente",
  },
  "composizione-negoziata-crisi-impresa-2026": {
    eyebrow: "Guida fiscale",
    titolo: "Composizione negoziata 2026",
  },
  "sovraindebitamento-2026-come-uscire-dai-debiti": {
    eyebrow: "Guida fiscale",
    titolo: "Sovraindebitamento 2026",
  },
  "cripto-quadro-rw-2026": {
    eyebrow: "Guida fiscale",
    titolo: "Cripto in dichiarazione 2026",
  },
  "ravvedimento-cripto-quadro-rw": {
    eyebrow: "Guida fiscale",
    titolo: "Ravvedimento cripto quadro RW",
  },
  "regime-forfettario-2026": {
    eyebrow: "Guida fiscale",
    titolo: "Regime forfettario 2026",
  },
  "quanto-costa-commercialista-online": {
    eyebrow: "Guida fiscale",
    titolo: "Quanto costa un commercialista online",
  },
  "730-precompilato-conviene": {
    eyebrow: "Guida fiscale",
    titolo: "730 precompilato: conviene?",
  },
  // === Articoli blog (storici, allineati alla nuova grafica) ===
  "commercialista-online": {
    eyebrow: "Guida fiscale",
    titolo: "Commercialista online: come sceglierlo",
  },
  "aprire-partita-iva-online": {
    eyebrow: "Guida fiscale",
    titolo: "Aprire la Partita IVA online nel 2026",
  },
  "come-fare-730-online": {
    eyebrow: "Guida fiscale",
    titolo: "Come fare il 730 online — Guida 2026",
  },
  // === Landing servizi ===
  "calcolo-imu": {
    eyebrow: "Servizio",
    titolo: "Calcolo IMU professionale",
  },
  "quadro-rw": {
    eyebrow: "Servizio",
    titolo: "Quadro RW 2026",
  },
  "quadro-rw-ravvedimento": {
    eyebrow: "Servizio",
    titolo: "Ravvedimento quadro RW",
  },
};
