import { list } from "@vercel/blob";
import { DEFAULT_PREZZI, type Servizio } from "@/app/lib/prezzi-default";

export const BLOB_NAME = "prezzi.json";

export function mergePrezziWithDefaults(prezzi: Servizio[]) {
  const incomingById = new Map(prezzi.map((servizio) => [servizio.id, servizio]));
  return DEFAULT_PREZZI.map((servizio) => {
    const incoming = incomingById.get(servizio.id);
    return incoming ? { ...servizio, active: incoming.active } : servizio;
  });
}

export async function getPrezzi(): Promise<Servizio[]> {
  try {
    const { blobs } = await list({ prefix: BLOB_NAME });
    if (blobs.length === 0) return DEFAULT_PREZZI;

    const downloadUrl = blobs[0].downloadUrl || blobs[0].url;
    const res = await fetch(`${downloadUrl}?t=${Date.now()}`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) return DEFAULT_PREZZI;

    const prezzi = (await res.json()) as Servizio[];
    return Array.isArray(prezzi) ? mergePrezziWithDefaults(prezzi) : DEFAULT_PREZZI;
  } catch (err) {
    console.error("Errore lettura prezzi:", err);
    return DEFAULT_PREZZI;
  }
}
