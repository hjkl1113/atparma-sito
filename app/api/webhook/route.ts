import { NextResponse } from "next/server";

// Stripe webhook — riceve notifiche di pagamento completato
// Configurare su dashboard.stripe.com > Webhooks > Add endpoint
// URL: https://www.atparma.com/api/webhook
// Evento: checkout.session.completed

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const event = JSON.parse(body);

    // TODO: Verificare la firma Stripe con STRIPE_WEBHOOK_SECRET
    // per sicurezza in produzione

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const apiKey = process.env.BREVO_API_KEY;
      if (!apiKey) {
        console.error("BREVO_API_KEY mancante per notifica webhook");
        return NextResponse.json({ received: true });
      }

      const emailTo = process.env.EMAIL_TO || "segreteria@atparma.com";
      const customerEmail = session.customer_details?.email || "non disponibile";
      const customerName = session.customer_details?.name || "non disponibile";
      const amount = session.amount_total
        ? (session.amount_total / 100).toFixed(2)
        : "N/A";

      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: {
            name: "A.T. Consulting Parma",
            email: "segreteria@atparma.com",
          },
          to: [{ email: emailTo, name: "A.T. Consulting Parma" }],
          replyTo: { email: customerEmail, name: customerName },
          subject: `Nuovo pagamento Stripe — EUR ${amount} — ${customerName}`,
          htmlContent: `
            <h2>Nuovo pagamento ricevuto</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Cliente</td><td style="padding:8px;border:1px solid #ddd;">${customerName}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${customerEmail}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Importo</td><td style="padding:8px;border:1px solid #ddd;">EUR ${amount}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Stripe ID</td><td style="padding:8px;border:1px solid #ddd;">${session.id}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Stato</td><td style="padding:8px;border:1px solid #ddd;">${session.payment_status}</td></tr>
            </table>
            <p style="margin-top:16px;color:#888;font-size:12px;">Webhook Stripe — atparma.com</p>
          `,
        }),
      });

      console.log("Notifica pagamento inviata:", session.id);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Errore webhook:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
