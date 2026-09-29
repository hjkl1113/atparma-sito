// Selezione redazionale della pagina /debiti-e-crisi.
//
// Le news brevi restano nella loro sezione e nella loro categoria (di norma
// "generale"): qui si riportano SOLO quelle che meritano di comparire
// nell'argomento. È una scelta editoriale, non automatica: si aggiunge uno slug
// quando la notizia conta davvero.
//
// Gli approfondimenti, invece, entrano da soli: sono i pezzi lunghi scritti
// apposta quando arriva una novità importante su crisi, sovraindebitamento,
// riscossione o fideiussioni.

export const NEWS_IN_EVIDENZA: string[] = [
  // Riscossione: le voci più cercate del momento.
  "rottamazione-quinquies-fermo-auto-chiarimenti-agenzia-entrate",
  "pignoramento-esattoriale-crediti-futuri-cassazione",
  "rateizzazione-residuo-interessi-mora-no-decadenza",
  "rottamazione-rateizzazione-cartelle-in-corso",
];

// Parole chiave per riconoscere gli approfondimenti dell'argomento.
export const TEMI_DEBITI_CRISI =
  /sovraindebit|esdebitaz|liquidazione controllata|concordato minore|composizione negoziata|concordato semplificato|crisi d'impresa|codice della crisi|fideiussion|schema abi|rottamazion|cartell[ae]|riscossion|pignorament/i;
