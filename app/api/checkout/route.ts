import { NextResponse } from "next/server";
import Stripe from "stripe";
import { parseCheckoutIdentity } from "@/app/lib/checkout";
import { getPrezzi } from "@/app/lib/prezzi";
import type { Servizio } from "@/app/lib/prezzi-default";
import { getScontoAnticipato, isRateizzabile } from "@/app/lib/pricing-utils";

export const runtime = "nodejs";

const COUPON_BY_PCT: Record<number, string> = {
  5: "SCONTO_ANT_5",
  10: "SCONTO_ANT_10",
};

const RATE_FRACTION = 0.30;

/**
 * Fallback per i nuovi serviceId IMU non ancora presenti in DEFAULT_PREZZI
 * (file in WIP pricing M, non si tocca finche' non chiude). A WIP chiuso si
 * migrano in app/lib/prezzi-default.ts e questa mappa va rimossa.
 */
const FALLBACK_SERVICES: Record<string, Servizio> = {
  "calcolo-imu": {
    id: "calcolo-imu",
    title: "Calcolo IMU professionale",
    desc: "Calcolo IMU acconto giugno e saldo dicembre per 1 immobile, F24 pronti, opzione delega F24 con addebito Entratel inclusa.",
    price: 39,
    originalPrice: null,
    active: true,
    slug: "calcolo-imu",
    priceFormat: "fisso",
  },
  "calcolo-imu-multi": {
    id: "calcolo-imu-multi",
    title: "Calcolo IMU professionale — multi-immobile",
    desc: "Calcolo IMU acconto giugno e saldo dicembre per 2-5 immobili, F24 pronti, opzione delega F24 con addebito Entratel inclusa.",
    price: 69,
    originalPrice: null,
    active: true,
    slug: "calcolo-imu",
    priceFormat: "fisso",
  },
};

/** Metodi di pagamento F24 accettabili in metadata Stripe (solo per IMU). */
const ALLOWED_PAYMENT_METHODS = new Set(["self", "entratel"]);

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY non configurata");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { servizio, paymentMode: rawMode, paymentMethod: rawPaymentMethod } = body;
    const paymentMode: "full" | "rate" = rawMode === "rate" ? "rate" : "full";
    const paymentMethod = typeof rawPaymentMethod === "string" && ALLOWED_PAYMENT_METHODS.has(rawPaymentMethod)
      ? rawPaymentMethod
      : null;
    const parsedIdentity = parseCheckoutIdentity(body);
    if (!parsedIdentity.data) {
      return NextResponse.json({ error: parsedIdentity.error }, { status: 400 });
    }

    const prezzi = await getPrezzi();
    const fromCatalog = prezzi.find((p) => p.id === servizio && p.active && p.price);
    const item: Servizio | undefined = fromCatalog ?? FALLBACK_SERVICES[servizio as string];

    if (!item || !item.price || !item.active) {
      return NextResponse.json({ error: "Servizio non valido" }, { status: 400 });
    }

    if (paymentMode === "rate" && !isRateizzabile(item.price)) {
      return NextResponse.json(
        { error: "Questo servizio non e' rateizzabile" },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const origin = request.headers.get("origin") || "https://www.atparma.com";

    const sconto = paymentMode === "full" ? getScontoAnticipato(item.price) : null;
    const couponId = sconto ? COUPON_BY_PCT[sconto.pct] : null;

    const acconto = paymentMode === "rate"
      ? Math.round(item.price * RATE_FRACTION * 100) / 100
      : null;
    const unitAmountCents = Math.round((acconto ?? item.price) * 100);
    const tranche = item.price - (acconto ?? item.price);
    const productName = paymentMode === "rate"
      ? `${item.title} — Acconto 30% (saldo in 3 tranche trimestrali)`
      : item.title;
    const productDesc = paymentMode === "rate"
      ? `Acconto 30% alla firma del mandato. Saldo di ${tranche.toFixed(2).replace(".", ",")} euro in 3 tranche trimestrali.`
      : item.desc;

    const metadata = {
      source: "atparma-site",
      serviceId: item.id,
      serviceTitle: item.title,
      fullName: parsedIdentity.data.fullName,
      email: parsedIdentity.data.email,
      taxCode: parsedIdentity.data.taxCode || "",
      vatNumber: parsedIdentity.data.vatNumber || "",
      paymentMode,
      totalPrice: item.price.toFixed(2),
      ...(paymentMode === "rate" && {
        acconto: acconto!.toFixed(2),
        saldoResiduo: tranche.toFixed(2),
      }),
      ...(sconto && couponId && {
        couponId,
        scontoPct: String(sconto.pct),
        prezzoScontato: sconto.final.toFixed(2),
      }),
      ...(paymentMethod && { paymentMethod }),
    };

    const enableBnpl = paymentMode === "full" && item.price >= 400;

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
            product_data: { name: productName, description: productDesc },
            unit_amount: unitAmountCents,
          },
          quantity: 1,
        },
      ],
      ...(couponId && { discounts: [{ coupon: couponId }] }),
      metadata,
      payment_intent_data: { metadata },
      success_url: `${origin}/checkout/successo?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/annullato`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Errore Stripe checkout:", err);
    return NextResponse.json({ error: "Errore creazione checkout" }, { status: 500 });
  }
}
