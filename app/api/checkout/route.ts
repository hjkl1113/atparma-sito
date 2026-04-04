import { NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY non configurata");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

const SERVIZI: Record<string, { name: string; price: number; description: string }> = {
  "730": {
    name: "Dichiarazione 730",
    price: 7900, // centesimi
    description: "Compilazione e invio della dichiarazione dei redditi modello 730",
  },
  "piva": {
    name: "Apertura Partita IVA",
    price: 14900,
    description: "Apertura e configurazione della Partita IVA per la tua attivita",
  },
};

export async function POST(request: Request) {
  try {
    const { servizio } = await request.json();
    const item = SERVIZI[servizio];

    if (!item) {
      return NextResponse.json({ error: "Servizio non valido" }, { status: 400 });
    }

    const stripe = getStripe();
    const origin = request.headers.get("origin") || "https://atparma-sito.vercel.app";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: item.name,
              description: item.description,
            },
            unit_amount: item.price,
          },
          quantity: 1,
        },
      ],
      customer_creation: "always",
      success_url: `${origin}/checkout/successo?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/annullato`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Errore Stripe checkout:", err);
    return NextResponse.json({ error: "Errore creazione checkout" }, { status: 500 });
  }
}
