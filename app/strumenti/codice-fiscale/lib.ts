// Calcolo codice fiscale italiano — algoritmo ufficiale Agenzia delle Entrate.
// Calcolo diretto (dati -> CF) e inverso (CF -> dati).

const VOCALI = /[AEIOU]/g;
const CONSONANTI = /[BCDFGHJKLMNPQRSTVWXYZ]/g;
const MESI = "ABCDEHLMPRST"; // gen=A, feb=B, mar=C, apr=D, mag=E, giu=H, lug=L, ago=M, set=P, ott=R, nov=S, dic=T

function normalizza(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z]/g, "");
}

function estraiConsonanti(s: string): string {
  return normalizza(s).replace(VOCALI, "");
}
function estraiVocali(s: string): string {
  return normalizza(s).replace(CONSONANTI, "");
}

export function codiceCognome(cognome: string): string {
  const cons = estraiConsonanti(cognome);
  const voc = estraiVocali(cognome);
  return (cons + voc + "XXX").substring(0, 3);
}

export function codiceNome(nome: string): string {
  const cons = estraiConsonanti(nome);
  if (cons.length >= 4) {
    return cons[0] + cons[2] + cons[3];
  }
  const voc = estraiVocali(nome);
  return (cons + voc + "XXX").substring(0, 3);
}

export function codiceDataNascita(isoDate: string, sesso: "M" | "F"): string {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) throw new Error("Data non valida");
  const yy = String(d.getUTCFullYear() % 100).padStart(2, "0");
  const m = MESI[d.getUTCMonth()];
  let day = d.getUTCDate();
  if (sesso === "F") day += 40;
  return yy + m + String(day).padStart(2, "0");
}

const DISPARI: Record<string, number> = {
  "0": 1, "1": 0, "2": 5, "3": 7, "4": 9, "5": 13, "6": 15, "7": 17, "8": 19, "9": 21,
  A: 1, B: 0, C: 5, D: 7, E: 9, F: 13, G: 15, H: 17, I: 19, J: 21,
  K: 2, L: 4, M: 18, N: 20, O: 11, P: 3, Q: 6, R: 8, S: 12, T: 14,
  U: 16, V: 10, W: 22, X: 25, Y: 24, Z: 23,
};
const PARI: Record<string, number> = {
  "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
  A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9,
  K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19,
  U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25,
};

export function caratteroControllo(cf15: string): string {
  if (cf15.length !== 15) throw new Error("Lunghezza attesa 15");
  let s = 0;
  for (let i = 0; i < 15; i++) {
    const ch = cf15[i];
    const v = i % 2 === 0 ? DISPARI[ch] : PARI[ch];
    if (v === undefined) throw new Error(`Carattere non valido in posizione ${i}: ${ch}`);
    s += v;
  }
  return String.fromCharCode(65 + (s % 26));
}

export interface InputCF {
  nome: string;
  cognome: string;
  sesso: "M" | "F";
  dataNascita: string; // YYYY-MM-DD
  codiceCatastale: string; // 1 lettera + 3 cifre
}

export interface RisultatoCF {
  valido: boolean;
  codiceFiscale: string;
  error?: string;
  parti?: {
    cognome: string;
    nome: string;
    dataSesso: string;
    comune: string;
    controllo: string;
  };
}

export function calcolaCodiceFiscale(input: InputCF): RisultatoCF {
  try {
    if (!input.nome?.trim()) return { valido: false, codiceFiscale: "", error: "Nome obbligatorio" };
    if (!input.cognome?.trim()) return { valido: false, codiceFiscale: "", error: "Cognome obbligatorio" };
    if (!input.dataNascita) return { valido: false, codiceFiscale: "", error: "Data di nascita obbligatoria" };
    const cc = input.codiceCatastale?.toUpperCase().trim() ?? "";
    if (!/^[A-Z]\d{3}$/.test(cc)) {
      return { valido: false, codiceFiscale: "", error: "Codice catastale non valido (formato L999)" };
    }

    const cog = codiceCognome(input.cognome);
    const nom = codiceNome(input.nome);
    const dat = codiceDataNascita(input.dataNascita, input.sesso);
    const prefix = cog + nom + dat + cc;
    const ctrl = caratteroControllo(prefix);
    return {
      valido: true,
      codiceFiscale: prefix + ctrl,
      parti: { cognome: cog, nome: nom, dataSesso: dat, comune: cc, controllo: ctrl },
    };
  } catch (e) {
    return {
      valido: false,
      codiceFiscale: "",
      error: e instanceof Error ? e.message : "Errore nel calcolo",
    };
  }
}

export interface DecodificaCF {
  valido: boolean;
  anno?: number;
  mese?: number; // 1-12
  giorno?: number;
  sesso?: "M" | "F";
  codiceCatastale?: string;
  error?: string;
}

export function decodificaCodiceFiscale(cf: string): DecodificaCF {
  const up = (cf ?? "").toUpperCase().replace(/\s/g, "");
  if (up.length !== 16 || !/^[A-Z0-9]{16}$/.test(up)) {
    return { valido: false, error: "Formato non valido: servono 16 caratteri alfanumerici" };
  }
  let atteso: string;
  try {
    atteso = caratteroControllo(up.substring(0, 15));
  } catch {
    return { valido: false, error: "Caratteri non validi nel codice" };
  }
  if (atteso !== up[15]) {
    return {
      valido: false,
      error: `Codice di controllo errato (atteso ${atteso}, ricevuto ${up[15]})`,
    };
  }
  const yy = parseInt(up.substring(6, 8), 10);
  const mLetter = up[8];
  const monthIdx = MESI.indexOf(mLetter);
  if (monthIdx < 0) return { valido: false, error: "Lettera del mese non valida" };
  let day = parseInt(up.substring(9, 11), 10);
  if (Number.isNaN(day)) return { valido: false, error: "Giorno non valido" };
  const sesso: "M" | "F" = day > 40 ? "F" : "M";
  if (sesso === "F") day -= 40;
  const cc = up.substring(11, 15);
  const currentYY = new Date().getUTCFullYear() % 100;
  const anno = yy <= currentYY ? 2000 + yy : 1900 + yy;
  return {
    valido: true,
    anno,
    mese: monthIdx + 1,
    giorno: day,
    sesso,
    codiceCatastale: cc,
  };
}
