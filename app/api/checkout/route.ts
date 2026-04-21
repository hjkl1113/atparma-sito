import { NextResponse } from "next/server";
import Stripe from "stripe";
import { list } from "@vercel/blob";
import { parseCheckoutIdentity } from "@/app/lib/checkout";

export const runtime = "nodejs";

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY non configurata");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

interface Servizio {
  id: string;
  title: string;
  desc: string;
  price: number | null;
  originalPrice: number | null;
  active: boolean;
}

const DEFAULT_PREZZI: Servizio[] = [
  { id: "730", title: "Dichiarazione 730", desc: "Compilazione e invio della dichiarazione dei redditi modello 730.", price: 79, originalPrice: null, active: true },
  { id: "piva", title: "Apertura Partita IVA", desc: "Apertura e configurazione della Partita IVA per la tua attività.", price: 149, originalPrice: null, active: true },
];

async function getPrezzi(): Promise<Servizio[]> {
  try {
    const { blobs } = await list({ prefix: "prezzi.json" });
    if (blobs.length === 0) return DEFAULT_PREZZI;
    const res = await fetch(blobs[0].url);
    return await res.json();
  } catch {
    return DEFAULT_PREZZI;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { servizio } = body;
    const parsedIdentity = parseCheckoutIdentity(body);
    if (!parsedIdentity.data) {
      return NextResponse.json({ error: parsedIdentity.error }, { status: 400 });
    }

    const prezzi = await getPrezzi();
    const item = prezzi.find((p) => p.id === servizio && p.active && p.price);

    if (!item || !item.price) {
      return NextResponse.json({ error: "Servizio non valido" }, { status: 400 });
    }

    const stripe = getStripe();
    const origin = request.headers.get("origin") || "https://www.atparma.com";
    const metadata = {
      source: "atparma-site",
      serviceId: item.id,
      serviceTitle: item.title,
      fullName: parsedIdentity.data.fullName,
      email: parsedIdentity.data.email,
      taxCode: parsedIdentity.data.taxCode || "",
      vatNumber: parsedIdentity.data.vatNumber || "",
    };

    const enableBnpl = item.price >= 400;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: enableBnpl ? ["card", "klarna"] : ["card"],
      billing_address_collection: "required",
      client_reference_id: item.id,
      customer_creation: "always",
      customer_email: parsedIdentity.data.email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: item.title,
              description: item.desc,
            },
            unit_amount: item.price * 100, // centesimi
          },
          quantity: 1,
        },
      ],
      metadata,
      payment_intent_data: {
        metadata,
      },
      success_url: `${origin}/checkout/successo?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/annullato`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Errore Stripe checkout:", err);
    return NextResponse.json({ error: "Errore creazione checkout" }, { status: 500 });
  }
}
