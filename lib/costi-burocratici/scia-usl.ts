/**
 * Range costi indicativi per SCIA comunali, USL/HACCP e SCIA abilitative.
 *
 * ATTENZIONE: questi costi VARIANO significativamente per Comune e per
 * tipologia di attività. I range qui riportati sono STIME AGGREGATE
 * basate su dati pubblici raccolti da principali CCIAA e Comuni
 * metropolitani. Il valore esatto va sempre verificato in consulenza.
 *
 * Ultima verifica: 2026-04-20 — Review semestrale prevista 2026-10-19.
 */

/** SCIA (Segnalazione Certificata di Inizio Attività) al SUAP comunale.
 *  Tipica per: locale aperto al pubblico, esercizio commerciale,
 *  vicinato, ambulanti, pubblici esercizi non alimentari. */
export const SCIA_COMUNALE = {
  min: 50,
  max: 200,
  nota: "Diritti di segreteria SUAP + bolli. Varia significativamente per Comune.",
  esempi: "Parma ~€80, Milano ~€150, comuni piccoli €50-80",
  fonte: "Dati SUAP aggregati Comuni principali (verificabili su Sportello Unico Attività Produttive del Comune)",
  ultimaVerifica: "2026-04-20",
} as const;

/** Autorizzazioni sanitarie USL/ASL + corso HACCP base.
 *  Tipica per: bar, ristoranti, alimentaristi, produzione alimenti,
 *  vendita alimenti e bevande, agriturismi. */
export const AUTORIZZAZIONI_USL_HACCP = {
  min: 100,
  max: 300,
  nota: "SCIA sanitaria al Dipartimento Prevenzione USL + corso HACCP base obbligatorio.",
  esempi: "SCIA sanitaria €50-150 + corso HACCP €50-150 (rinnovo ogni 2-5 anni)",
  fonte: "Dati USL regionali + enti di formazione accreditati",
  ultimaVerifica: "2026-04-20",
} as const;

/** SCIA abilitativa per attività regolamentate.
 *  Tipica per: estetista, parrucchiere, tatuatore, massaggiatore,
 *  piercing, istruttore sportivo, alcune attività artigianali. */
export const SCIA_ABILITATIVA = {
  min: 50,
  max: 150,
  nota: "Pratica comunale abilitativa. Richiede dichiarazione di possesso requisiti professionali.",
  esempi: "Estetista e parrucchiere €60-120, tatuatore €80-150",
  fonte: "Dati SUAP aggregati Comuni principali + Regolamenti regionali arti e mestieri",
  ultimaVerifica: "2026-04-20",
} as const;

/** Mapping dalle caratteristiche scelte dall'utente ai costi applicabili. */
export type CaratteristicaAttivita =
  | "localePubblico"
  | "alimentare"
  | "attivitaRegolata"
  | "dipendenti";

export const COSTI_PER_CARATTERISTICA: Record<CaratteristicaAttivita, {
  label: string;
  costo: { min: number; max: number; nota: string } | null;
}> = {
  localePubblico: {
    label: "Locale aperto al pubblico (SCIA SUAP)",
    costo: { ...SCIA_COMUNALE, min: SCIA_COMUNALE.min, max: SCIA_COMUNALE.max, nota: SCIA_COMUNALE.nota },
  },
  alimentare: {
    label: "Attività alimentare (USL + HACCP)",
    costo: { ...AUTORIZZAZIONI_USL_HACCP, min: AUTORIZZAZIONI_USL_HACCP.min, max: AUTORIZZAZIONI_USL_HACCP.max, nota: AUTORIZZAZIONI_USL_HACCP.nota },
  },
  attivitaRegolata: {
    label: "Attività regolamentata (SCIA abilitativa)",
    costo: { ...SCIA_ABILITATIVA, min: SCIA_ABILITATIVA.min, max: SCIA_ABILITATIVA.max, nota: SCIA_ABILITATIVA.nota },
  },
  dipendenti: {
    label: "Iscrizione INAIL (dipendenti)",
    costo: { min: 0, max: 0, nota: "Iscrizione gratuita. Premi in autoliquidazione sulla retribuzione effettiva." },
  },
};
