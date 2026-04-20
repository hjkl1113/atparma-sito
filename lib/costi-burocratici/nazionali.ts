/**
 * Costi burocratici nazionali verificati da fonti ufficiali.
 * Ultima verifica: 2026-04-20 — Review semestrale prevista 2026-10-19.
 *
 * Modificando questi valori, aggiornare la data `ultimaVerifica` nel commit
 * e far girare il workflow GitHub `legal-review-reminder.yml` se la modifica
 * tocca numeri verso il pubblico.
 */

/** Bolli e diritti CCIAA per pratica ComUnica apertura ditta individuale.
 *  Fonti: Decreto MISE 17/07/2012 Tabella A + DPR 642/1972. */
export const BOLLI_CCIAA_2026 = {
  /** Imposta di bollo virtuale per pratica ComUnica — DPR 642/1972 */
  impostaBolloComUnica: 17.50,

  /** Diritti segreteria iscrizione sezione speciale (artigiani) */
  dirittiSegreteriaArtigiano: 9.00,

  /** Diritti segreteria iscrizione sezione ordinaria (commercianti/ditte individuali non artigiane) */
  dirittiSegreteriaCommerciante: 20.00,

  /** Bolli accessori SIA (Albo Imprese Artigiane) — stima base */
  bolliAccessoriSIA: { min: 20, max: 40 },

  fonte: "Decreto MISE 17/07/2012 Tabella A + DPR 642/1972 art. 28",
  ultimaVerifica: "2026-04-20",
} as const;

/** Diritto annuale camerale 2026.
 *  Fonte: MIMIT nota n. 0009347 del 16/01/2026 — importi 2025 confermati. */
export const DIRITTO_ANNUALE_CCIAA_2026 = {
  /** Misura fissa base prevista dal decreto 21/04/2011 */
  misuraFissaBase: 200,

  /** Riduzione strutturale applicata dal 2015 */
  riduzioneStrutturale: 0.5,

  /** Importo effettivo dovuto per fatturato fino €100k */
  importoEffettivoMisuraFissa: 100,

  /** Tetto massimo annuo (dopo riduzione 50%) */
  tettoMassimo: 20000,

  /** Alcune CCIAA applicano maggiorazione fino 20% su delibera locale */
  maggiorazioneLocaleMax: 0.2,

  fonte: "MIMIT nota 0009347 del 16/01/2026 — decreto interministeriale 21/04/2011",
  ultimaVerifica: "2026-04-20",
} as const;

/** Contributi INPS artigiani e commercianti 2026.
 *  Fonte: INPS Circolare n. 14/2026 del 9 febbraio 2026. */
export const INPS_ARTIGIANI_COMMERCIANTI_2026 = {
  /** Reddito minimale su cui calcolare i contributi fissi */
  minimaleAnnuo: 18808,

  /** Aliquota pensionistica IVS — artigiani */
  aliquotaArtigiani: 0.24,

  /** Aliquota pensionistica IVS — commercianti (24% + 0,48% indennizzo cessazione) */
  aliquotaCommercianti: 0.2448,

  /** Contributi fissi annuali artigiani (4 rate trimestrali) */
  contributiFissiArtigiani: 4521.36,

  /** Contributi fissi annuali commercianti (4 rate trimestrali) */
  contributiFissiCommercianti: 4611.64,

  /** Contributo maternità mensile (aggiuntivo) */
  contributoMaternitaMensile: 0.62,

  /** Iscrizione alla gestione INPS: gratuita */
  costoIscrizione: 0,

  fonte: "INPS Circolare 14/2026 del 09/02/2026",
  fonteUrl: "https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.02.gestioni-artigiani-e-commercianti-i-contributi-per-il-2026.html",
  ultimaVerifica: "2026-04-20",
} as const;

/** Apertura P.IVA presso Agenzia Entrate (modello AA9/12 per persona fisica).
 *  Fonte: Agenzia Entrate scheda informativa — presentazione gratuita. */
export const APERTURA_PIVA_AE = {
  costoPresentazione: 0,
  nota: "Presentazione modello AA9/12 in via telematica è gratuita",
  fonte: "Agenzia delle Entrate — Scheda informativa AA9/12",
  fonteUrl: "https://www.agenziaentrate.gov.it/portale/schede/istanze/aa9_11-apertura-variazione-chiusura-pf",
  ultimaVerifica: "2026-04-20",
} as const;

/** Iscrizione INAIL (obbligatoria solo se dipendenti, ma gratuita). */
export const INAIL_ISCRIZIONE = {
  costoIscrizione: 0,
  nota: "Iscrizione gratuita. I premi si pagano in autoliquidazione sulla retribuzione effettiva dei dipendenti.",
  fonte: "INAIL — normativa T.U. 1124/1965",
  ultimaVerifica: "2026-04-20",
} as const;
