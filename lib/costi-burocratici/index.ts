/**
 * API pubblica per il calcolo del preventivo indicativo apertura P.IVA
 * artigiano/commerciante. Usato dal tool `/strumenti/preventivo-artigiano-commerciante`.
 *
 * Filosofia: output sempre con range min/max (non valori puntuali) + disclaimer
 * chiaro che è stima indicativa, non quotation vincolante.
 */

import {
  BOLLI_CCIAA_2026,
  DIRITTO_ANNUALE_CCIAA_2026,
  INPS_ARTIGIANI_COMMERCIANTI_2026,
} from "./nazionali";
import {
  COSTI_PER_CARATTERISTICA,
  type CaratteristicaAttivita,
} from "./scia-usl";

export type Tipologia = "artigiano" | "commerciante";
export type Regime = "forfettario" | "non-forfettario";

export interface InputPreventivo {
  tipologia: Tipologia;
  regime: Regime;
  caratteristiche: Partial<Record<CaratteristicaAttivita, boolean>>;
  /** Sigla provincia (opzionale, usata per disclaimer personalizzato) */
  provincia?: string;
}

export interface VoceOutput {
  label: string;
  min: number;
  max: number;
  nota?: string;
}

/** Listino AT Parma — valori "a partire da". Allineato a `app/lib/prezzi-default.ts`
 *  (matrice pricing ibrida 2026-04-22, commit 384ea74). */
export const AT_PARMA_LISTINO_ARTIGIANO = {
  /** Apertura artigiano/commerciante una tantum (include CCIAA + SIA + INPS + SUAP base) */
  aperturaDa: 610,
  /** Contabilità forfettario annuale — a partire da (ricorrente) */
  contabilitaForfettarioDa: 610,
  /** Contabilità non forfettario (semplificata/ordinaria) annuale — a partire da */
  contabilitaNonForfettarioDa: 1464,
} as const;

export interface RisultatoPreventivo {
  /** Prezzi "a partire da" del servizio AT Parma */
  servizio: {
    aperturaDa: number;
    contabilitaAnnualeDa: number;
    regimeLabel: string;
  };
  /** Elenco voci tributi e diritti pubblici applicabili */
  costiVivi: VoceOutput[];
  /** Totale tributi e diritti pubblici (min, max) */
  totaleCostiVivi: { min: number; max: number };
  /** Totale primo anno completo: servizio AT Parma + tributi e diritti pubblici */
  totalePrimoAnno: { min: number; max: number };
  /** Info INPS da comunicare separatamente al cliente */
  contributiINPS: {
    minimaleAnnuo: number;
    aliquota: number;
    contributiFissiAnnui: number;
    nota: string;
  };
  /** Disclaimer e informazioni legali */
  disclaimer: string[];
}

export function calcolaPreventivo(input: InputPreventivo): RisultatoPreventivo {
  const { tipologia, regime, caratteristiche, provincia } = input;

  // Servizio AT Parma
  const contabilitaAnnualeDa = regime === "forfettario"
    ? AT_PARMA_LISTINO_ARTIGIANO.contabilitaForfettarioDa
    : AT_PARMA_LISTINO_ARTIGIANO.contabilitaNonForfettarioDa;

  const regimeLabel = regime === "forfettario"
    ? "Contabilità forfettario"
    : "Contabilità semplificata/ordinaria";

  // Tributi e diritti pubblici — voci sempre presenti
  const costiVivi: VoceOutput[] = [];

  // CCIAA bolli + diritti
  const dirittiSegreteria = tipologia === "artigiano"
    ? BOLLI_CCIAA_2026.dirittiSegreteriaArtigiano
    : BOLLI_CCIAA_2026.dirittiSegreteriaCommerciante;

  const cciaaBaseMin = BOLLI_CCIAA_2026.impostaBolloComUnica + dirittiSegreteria;
  const cciaaBaseMax = cciaaBaseMin; // importi fissi, nessun range qui

  costiVivi.push({
    label: "Bolli + diritti CCIAA (pratica ComUnica)",
    min: cciaaBaseMin,
    max: cciaaBaseMax,
    nota: `Imposta di bollo €${BOLLI_CCIAA_2026.impostaBolloComUnica} + diritti segreteria €${dirittiSegreteria} (${tipologia})`,
  });

  // Diritto annuale CCIAA
  const dirittoMin = DIRITTO_ANNUALE_CCIAA_2026.importoEffettivoMisuraFissa;
  const dirittoMax = Math.round(
    dirittoMin * (1 + DIRITTO_ANNUALE_CCIAA_2026.maggiorazioneLocaleMax),
  );
  costiVivi.push({
    label: "Diritto annuale CCIAA 2026",
    min: dirittoMin,
    max: dirittoMax,
    nota: `Misura fissa ridotta 50% (€${dirittoMin}-${dirittoMax} a seconda della CCIAA provinciale)`,
  });

  // SIA — solo artigiani
  if (tipologia === "artigiano") {
    costiVivi.push({
      label: "Iscrizione SIA — Albo Imprese Artigiane",
      min: BOLLI_CCIAA_2026.bolliAccessoriSIA.min,
      max: BOLLI_CCIAA_2026.bolliAccessoriSIA.max,
      nota: "Bolli camerali aggiuntivi per iscrizione Sezione Speciale Imprese Artigiane",
    });
  }

  // Caratteristiche opzionali (SCIA, USL, ecc.)
  (Object.keys(caratteristiche) as CaratteristicaAttivita[]).forEach((k) => {
    if (!caratteristiche[k]) return;
    const v = COSTI_PER_CARATTERISTICA[k];
    if (v.costo === null) return;
    costiVivi.push({
      label: v.label,
      min: v.costo.min,
      max: v.costo.max,
      nota: v.costo.nota,
    });
  });

  // Totali
  const totaleCostiVivi = costiVivi.reduce(
    (acc, v) => ({ min: acc.min + v.min, max: acc.max + v.max }),
    { min: 0, max: 0 },
  );

  const servizioMin = AT_PARMA_LISTINO_ARTIGIANO.aperturaDa + contabilitaAnnualeDa;

  const totalePrimoAnno = {
    min: servizioMin + totaleCostiVivi.min,
    max: servizioMin + totaleCostiVivi.max,
  };

  // INPS
  const contributiFissiAnnui = tipologia === "artigiano"
    ? INPS_ARTIGIANI_COMMERCIANTI_2026.contributiFissiArtigiani
    : INPS_ARTIGIANI_COMMERCIANTI_2026.contributiFissiCommercianti;
  const aliquota = tipologia === "artigiano"
    ? INPS_ARTIGIANI_COMMERCIANTI_2026.aliquotaArtigiani
    : INPS_ARTIGIANI_COMMERCIANTI_2026.aliquotaCommercianti;

  const contributiINPS = {
    minimaleAnnuo: INPS_ARTIGIANI_COMMERCIANTI_2026.minimaleAnnuo,
    aliquota,
    contributiFissiAnnui,
    nota: `Contributi INPS ${tipologia} 2026: €${contributiFissiAnnui.toFixed(2)}/anno sul minimale (${(aliquota * 100).toFixed(2)}%). Pagamento in 4 rate. Da aggiungere ai costi sopra.`,
  };

  // Disclaimer
  const disclaimer: string[] = [
    "Stima indicativa basata su dati pubblici 2026. Gli importi esatti saranno indicati in sede di invio della bozza di mandato.",
    "I tributi e diritti pubblici sono pagati direttamente agli enti competenti (CCIAA, Comune, USL, INPS), non allo studio.",
    "Gli importi possono variare da provincia a provincia e da Comune a Comune, in base ai tariffari degli enti pubblici coinvolti (Camera di Commercio, SUAP/Comune, USL, Regione). Il range mostrato riflette le variazioni tipiche.",
  ];

  if (provincia) {
    disclaimer.push(
      `Per la provincia di ${provincia.toUpperCase()} l'importo esatto dei diritti CCIAA e di eventuali SCIA comunali sarà indicato nella bozza di mandato.`,
    );
  }

  return {
    servizio: {
      aperturaDa: AT_PARMA_LISTINO_ARTIGIANO.aperturaDa,
      contabilitaAnnualeDa,
      regimeLabel,
    },
    costiVivi,
    totaleCostiVivi,
    totalePrimoAnno,
    contributiINPS,
    disclaimer,
  };
}

export {
  BOLLI_CCIAA_2026,
  DIRITTO_ANNUALE_CCIAA_2026,
  INPS_ARTIGIANI_COMMERCIANTI_2026,
} from "./nazionali";
export { COSTI_PER_CARATTERISTICA, type CaratteristicaAttivita } from "./scia-usl";
