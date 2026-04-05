import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// DEBUG endpoint: lista tutti i blob con prefix prezzi
async function listAllBlobs() {
  const { blobs } = await list({ prefix: "prezzi" });
  return blobs.map((b) => ({ url: b.url, pathname: b.pathname, uploadedAt: b.uploadedAt }));
}

export interface Servizio {
  id: string;
  title: string;
  desc: string;
  price: number | null;
  originalPrice: number | null; // prezzo sbarrato (promo)
  active: boolean;
}

const DEFAULT_PREZZI: Servizio[] = [
  {
    id: "730",
    title: "Dichiarazione 730",
    desc: "Compilazione e invio della dichiarazione dei redditi modello 730.",
    price: 79,
    originalPrice: null,
    active: true,
  },
  {
    id: "piva",
    title: "Apertura Partita IVA",
    desc: "Apertura e configurazione della Partita IVA per la tua attivita.",
    price: 149,
    originalPrice: null,
    active: true,
  },
  {
    id: "consulenza",
    title: "Consulenza su misura",
    desc: "Analisi personalizzata e piano d'azione per la tua situazione specifica.",
    price: null,
    originalPrice: null,
    active: true,
  },
];

const BLOB_NAME = "prezzi.json";

async function getPrezzi(): Promise<Servizio[]> {
  try {
    const { blobs } = await list({ prefix: BLOB_NAME });
    if (blobs.length === 0) return DEFAULT_PREZZI;
    // Usa downloadUrl o url con cache-buster per evitare CDN cache
    const url = `${blobs[0].url}?v=${Date.now()}`;
    const res = await fetch(url, { cache: "no-store" });
    return await res.json();
  } catch (err) {
    console.error("Errore lettura prezzi:", err);
    return DEFAULT_PREZZI;
  }
}

// GET — legge i prezzi (pubblico)
export async function GET(request: Request) {
  const url = new URL(request.url);
  if (url.searchParams.get("debug") === "1") {
    const all = await listAllBlobs();
    return NextResponse.json({ blobs: all }, {
      headers: { "Cache-Control": "no-store" },
    });
  }
  const prezzi = await getPrezzi();
  return NextResponse.json(prezzi, {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}

// POST — aggiorna i prezzi (protetto da password)
export async function POST(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return NextResponse.json({ error: "Admin non configurato" }, { status: 500 });
  }

  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${adminPassword}`) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }

  try {
    const prezzi: Servizio[] = await request.json();
    await put(BLOB_NAME, JSON.stringify(prezzi), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Errore sconosciuto";
    console.error("Errore blob put:", msg);
    return NextResponse.json({ error: `Errore salvataggio: ${msg}` }, { status: 500 });
  }
}
