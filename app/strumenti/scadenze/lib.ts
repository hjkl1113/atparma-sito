// Scadenziario fiscale 2026 — elenco delle scadenze principali per contribuenti italiani.
// Dataset semplificato. Quando la scadenza cade di sabato, domenica o festivo e
// posticipata al primo giorno feriale successivo (non applicato qui: usiamo le date
// "nominali" previste dalla norma; verifica sempre col commercialista per lo slittamento).

export type Categoria =
  | "iva"
  | "irpef"
  | "inps"
  | "imu"
  | "770-cu"
  | "ritenute"
  | "dichiarazione"
  | "altro";

export type Tag =
  | "tutti"
  | "forfettario"
  | "ordinario"
  | "societa"
  | "dipendenti"
  | "iva-mensile"
  | "iva-trimestrale"
  | "artigiani-commercianti"
  | "gestione-separata"
  | "cassa-privata";

export interface Scadenza {
  id: string;
  data: string; // YYYY-MM-DD
  titolo: string;
  descrizione: string;
  categoria: Categoria;
  tags: Tag[];
}

export const CATEGORIA_LABEL: Record<Categoria, string> = {
  iva: "IVA",
  irpef: "IRPEF / redditi",
  inps: "INPS",
  imu: "IMU",
  "770-cu": "770 / CU",
  ritenute: "Ritenute",
  dichiarazione: "Dichiarazioni",
  altro: "Altro",
};

export const CATEGORIA_COLOR: Record<Categoria, string> = {
  iva: "bg-blue-100 text-blue-900 border-blue-200",
  irpef: "bg-amber-100 text-amber-900 border-amber-200",
  inps: "bg-purple-100 text-purple-900 border-purple-200",
  imu: "bg-emerald-100 text-emerald-900 border-emerald-200",
  "770-cu": "bg-sky-100 text-sky-900 border-sky-200",
  ritenute: "bg-indigo-100 text-indigo-900 border-indigo-200",
  dichiarazione: "bg-rose-100 text-rose-900 border-rose-200",
  altro: "bg-zinc-100 text-zinc-900 border-zinc-200",
};

// Scadenze 2026 — selezione principale.
export const SCADENZE_2026: Scadenza[] = [
  // Gennaio
  { id: "lipe-q4-2025", data: "2026-02-28", titolo: "LIPE IV trimestre 2025", descrizione: "Liquidazione periodica IVA relativa al IV trimestre 2025.", categoria: "iva", tags: ["iva-trimestrale", "ordinario", "societa"] },
  { id: "ritenute-gen", data: "2026-02-16", titolo: "Ritenute e IVA gennaio", descrizione: "Versamento ritenute gennaio e IVA mensile dicembre 2025.", categoria: "ritenute", tags: ["ordinario", "societa", "dipendenti", "iva-mensile"] },
  { id: "inps-artigiani-feb", data: "2026-02-16", titolo: "INPS artigiani/commercianti — 4a rata", descrizione: "Ultima rata fissa 2025 per artigiani e commercianti.", categoria: "inps", tags: ["artigiani-commercianti"] },

  // Marzo
  { id: "cu-cartacea", data: "2026-03-16", titolo: "CU 2026 consegna ai lavoratori", descrizione: "Consegna della Certificazione Unica ai lavoratori dipendenti, autonomi e assimilati.", categoria: "770-cu", tags: ["dipendenti", "societa", "ordinario"] },
  { id: "iva-annuale-saldo", data: "2026-03-16", titolo: "Saldo IVA annuale", descrizione: "Versamento saldo IVA risultante dalla dichiarazione annuale 2025 (o rateizzazione).", categoria: "iva", tags: ["ordinario", "societa"] },
  { id: "ritenute-feb", data: "2026-03-16", titolo: "Ritenute e IVA febbraio", descrizione: "Versamento ritenute febbraio e IVA mensile gennaio.", categoria: "ritenute", tags: ["ordinario", "societa", "dipendenti", "iva-mensile"] },

  // Aprile
  { id: "iva-annuale", data: "2026-04-30", titolo: "Dichiarazione IVA annuale 2025", descrizione: "Invio telematico della dichiarazione IVA relativa al 2025.", categoria: "dichiarazione", tags: ["ordinario", "societa"] },
  { id: "lipe-q1", data: "2026-05-31", titolo: "LIPE I trimestre 2026", descrizione: "Liquidazione periodica IVA I trimestre 2026.", categoria: "iva", tags: ["iva-trimestrale", "ordinario", "societa"] },
  { id: "ritenute-mar", data: "2026-04-16", titolo: "Ritenute e IVA marzo", descrizione: "Versamento ritenute marzo e IVA mensile febbraio.", categoria: "ritenute", tags: ["ordinario", "societa", "dipendenti", "iva-mensile"] },

  // Maggio
  { id: "iva-trim-q1", data: "2026-05-16", titolo: "IVA I trimestre 2026", descrizione: "Versamento IVA I trimestre per contribuenti trimestrali.", categoria: "iva", tags: ["iva-trimestrale", "ordinario", "societa"] },
  { id: "inps-artigiani-mag", data: "2026-05-16", titolo: "INPS artigiani/commercianti — 1a rata", descrizione: "Prima rata contributi fissi minimi 2026.", categoria: "inps", tags: ["artigiani-commercianti"] },
  { id: "ritenute-apr", data: "2026-05-16", titolo: "Ritenute e IVA aprile", descrizione: "Versamento ritenute aprile e IVA mensile marzo.", categoria: "ritenute", tags: ["ordinario", "societa", "dipendenti", "iva-mensile"] },

  // Giugno
  { id: "irpef-saldo", data: "2026-06-30", titolo: "Saldo IRPEF 2025 + acconto 2026", descrizione: "Versamento saldo IRPEF 2025 e primo acconto 2026. Include imposta sostitutiva forfettario.", categoria: "irpef", tags: ["forfettario", "ordinario", "societa"] },
  { id: "imu-acconto", data: "2026-06-16", titolo: "Acconto IMU 2026", descrizione: "Versamento acconto IMU (50% imposta calcolata con aliquote 2025).", categoria: "imu", tags: ["tutti"] },
  { id: "ritenute-mag", data: "2026-06-16", titolo: "Ritenute e IVA maggio", descrizione: "Versamento ritenute maggio e IVA mensile aprile.", categoria: "ritenute", tags: ["ordinario", "societa", "dipendenti", "iva-mensile"] },
  { id: "inps-saldo-separata", data: "2026-06-30", titolo: "INPS Gestione Separata saldo 2025 + 1° acconto 2026", descrizione: "Versamento saldo contributi 2025 e primo acconto 2026 in un'unica soluzione.", categoria: "inps", tags: ["gestione-separata", "forfettario", "ordinario"] },

  // Luglio
  { id: "irpef-saldo-magg", data: "2026-07-30", titolo: "Saldo IRPEF 2025 con maggiorazione 0,40%", descrizione: "Versamento saldo IRPEF + 1° acconto con maggiorazione 0,40% (proroga).", categoria: "irpef", tags: ["forfettario", "ordinario", "societa"] },
  { id: "ritenute-giu", data: "2026-07-16", titolo: "Ritenute e IVA giugno", descrizione: "Versamento ritenute giugno e IVA mensile maggio.", categoria: "ritenute", tags: ["ordinario", "societa", "dipendenti", "iva-mensile"] },

  // Agosto
  { id: "inps-artigiani-ago", data: "2026-08-20", titolo: "INPS artigiani/commercianti — 2a rata", descrizione: "Seconda rata contributi fissi minimi 2026.", categoria: "inps", tags: ["artigiani-commercianti"] },
  { id: "ritenute-lug", data: "2026-08-20", titolo: "Ritenute e IVA luglio", descrizione: "Versamento ritenute luglio e IVA mensile giugno (con proroga Ferragosto).", categoria: "ritenute", tags: ["ordinario", "societa", "dipendenti", "iva-mensile"] },
  { id: "iva-trim-q2", data: "2026-08-20", titolo: "IVA II trimestre 2026", descrizione: "Versamento IVA II trimestre per contribuenti trimestrali.", categoria: "iva", tags: ["iva-trimestrale", "ordinario", "societa"] },

  // Settembre
  { id: "lipe-q2", data: "2026-09-16", titolo: "LIPE II trimestre 2026", descrizione: "Liquidazione periodica IVA II trimestre 2026.", categoria: "iva", tags: ["iva-trimestrale", "ordinario", "societa"] },
  { id: "ritenute-ago", data: "2026-09-16", titolo: "Ritenute e IVA agosto", descrizione: "Versamento ritenute agosto e IVA mensile luglio.", categoria: "ritenute", tags: ["ordinario", "societa", "dipendenti", "iva-mensile"] },

  // Ottobre
  { id: "770", data: "2026-10-31", titolo: "Modello 770/2026", descrizione: "Invio telematico del modello 770 per sostituti d'imposta.", categoria: "770-cu", tags: ["societa", "dipendenti"] },
  { id: "cu-telematica", data: "2026-10-31", titolo: "CU 2026 invio telematico", descrizione: "Invio telematico della Certificazione Unica per autonomi occasionali.", categoria: "770-cu", tags: ["societa", "ordinario"] },
  { id: "ritenute-set", data: "2026-10-16", titolo: "Ritenute e IVA settembre", descrizione: "Versamento ritenute settembre e IVA mensile agosto.", categoria: "ritenute", tags: ["ordinario", "societa", "dipendenti", "iva-mensile"] },

  // Novembre
  { id: "redditi", data: "2026-11-30", titolo: "Modello Redditi 2026", descrizione: "Invio telematico della dichiarazione dei redditi (persone fisiche e società).", categoria: "dichiarazione", tags: ["forfettario", "ordinario", "societa"] },
  { id: "lipe-q3", data: "2026-11-30", titolo: "LIPE III trimestre 2026", descrizione: "Liquidazione periodica IVA III trimestre 2026.", categoria: "iva", tags: ["iva-trimestrale", "ordinario", "societa"] },
  { id: "irpef-2-acconto", data: "2026-11-30", titolo: "2° acconto IRPEF 2026", descrizione: "Versamento secondo acconto IRPEF e imposta sostitutiva.", categoria: "irpef", tags: ["forfettario", "ordinario", "societa"] },
  { id: "inps-2-acconto-separata", data: "2026-11-30", titolo: "INPS Gestione Separata 2° acconto 2026", descrizione: "Secondo acconto contributi Gestione Separata.", categoria: "inps", tags: ["gestione-separata", "forfettario", "ordinario"] },
  { id: "iva-trim-q3", data: "2026-11-16", titolo: "IVA III trimestre 2026", descrizione: "Versamento IVA III trimestre per contribuenti trimestrali.", categoria: "iva", tags: ["iva-trimestrale", "ordinario", "societa"] },
  { id: "inps-artigiani-nov", data: "2026-11-16", titolo: "INPS artigiani/commercianti — 3a rata", descrizione: "Terza rata contributi fissi minimi 2026.", categoria: "inps", tags: ["artigiani-commercianti"] },
  { id: "ritenute-ott", data: "2026-11-16", titolo: "Ritenute e IVA ottobre", descrizione: "Versamento ritenute ottobre e IVA mensile settembre.", categoria: "ritenute", tags: ["ordinario", "societa", "dipendenti", "iva-mensile"] },

  // Dicembre
  { id: "imu-saldo", data: "2026-12-16", titolo: "Saldo IMU 2026", descrizione: "Versamento saldo IMU con aliquote 2026.", categoria: "imu", tags: ["tutti"] },
  { id: "acconto-iva", data: "2026-12-29", titolo: "Acconto IVA 2026", descrizione: "Versamento acconto IVA dicembre (per mensili e trimestrali).", categoria: "iva", tags: ["iva-mensile", "iva-trimestrale", "ordinario", "societa"] },
  { id: "ritenute-nov", data: "2026-12-16", titolo: "Ritenute e IVA novembre", descrizione: "Versamento ritenute novembre e IVA mensile ottobre.", categoria: "ritenute", tags: ["ordinario", "societa", "dipendenti", "iva-mensile"] },
];

export function filtraScadenze(
  scadenze: Scadenza[],
  tagsAttivi: Tag[]
): Scadenza[] {
  if (tagsAttivi.length === 0) return scadenze;
  return scadenze.filter((s) => s.tags.includes("tutti") || s.tags.some((t) => tagsAttivi.includes(t)));
}

export function raggruppaPerMese(scadenze: Scadenza[]): Array<{ mese: string; items: Scadenza[] }> {
  const MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
  const map = new Map<number, Scadenza[]>();
  const sorted = [...scadenze].sort((a, b) => a.data.localeCompare(b.data));
  for (const s of sorted) {
    const m = new Date(s.data).getUTCMonth();
    if (!map.has(m)) map.set(m, []);
    map.get(m)!.push(s);
  }
  return [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([m, items]) => ({ mese: MESI[m], items }));
}

// Genera file ICS (RFC 5545) con le scadenze selezionate.
export function generaICS(scadenze: Scadenza[]): string {
  const header = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//A.T. Consulting Parma//Scadenzario IT//IT",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Scadenze fiscali 2026",
  ];
  const footer = ["END:VCALENDAR"];
  const now = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const events = scadenze.flatMap((s) => {
    const dateStr = s.data.replace(/-/g, ""); // YYYYMMDD
    const nextDay = new Date(s.data);
    nextDay.setUTCDate(nextDay.getUTCDate() + 1);
    const endStr = nextDay.toISOString().split("T")[0].replace(/-/g, "");
    return [
      "BEGIN:VEVENT",
      `UID:${s.id}@atparma.com`,
      `DTSTAMP:${now}`,
      `DTSTART;VALUE=DATE:${dateStr}`,
      `DTEND;VALUE=DATE:${endStr}`,
      `SUMMARY:${s.titolo}`,
      `DESCRIPTION:${s.descrizione.replace(/\n/g, "\\n")}`,
      `CATEGORIES:${CATEGORIA_LABEL[s.categoria]}`,
      "END:VEVENT",
    ];
  });

  return [...header, ...events, ...footer].join("\r\n");
}
