// Dataset comuni italiani: lazy-loaded dal file statico in /data/comuni.json.
// Fonte: github.com/matteocontrini/comuni-json (slim: solo nome + sigla prov + codice catastale).

export interface Comune {
  n: string; // nome
  s: string; // sigla provincia (es. PR)
  c: string; // codice catastale (es. G337)
}

let cache: Comune[] | null = null;
let inflight: Promise<Comune[]> | null = null;

export async function loadComuni(): Promise<Comune[]> {
  if (cache) return cache;
  if (inflight) return inflight;
  inflight = fetch("/data/comuni.json")
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json() as Promise<Comune[]>;
    })
    .then((data) => {
      cache = data;
      inflight = null;
      return data;
    })
    .catch((err) => {
      inflight = null;
      throw err;
    });
  return inflight;
}

function normalizza(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function cercaComuni(lista: Comune[], query: string, max = 8): Comune[] {
  const q = normalizza(query);
  if (q.length < 2) return [];
  const prefix: Comune[] = [];
  const contains: Comune[] = [];
  for (const c of lista) {
    const n = normalizza(c.n);
    if (n.startsWith(q)) prefix.push(c);
    else if (n.includes(q)) contains.push(c);
    if (prefix.length >= max) break;
  }
  return [...prefix, ...contains].slice(0, max);
}

export function comuneByCatastale(lista: Comune[], codice: string): Comune | undefined {
  const up = codice.toUpperCase();
  return lista.find((c) => c.c === up);
}
