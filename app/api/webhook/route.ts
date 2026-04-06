import { NextResponse } from "next/server";

// Stripe webhook — riceve notifiche di pagamento completato
// Configurare su dashboard.stripe.com > Webhooks > Add endpoint
// URL: https://www.atparma.com/api/webhook
// Evento: checkout.session.completed

async function sendNotification(
  subject: string,
  customerName: string,
  customerEmail: string,
  servizio: string,
  amount: string,
  metodo: string,
  transactionId: string
) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return;

  const emailTo = process.env.EMAIL_TO || "segreteria@atparma.com";
  const portalUrl = "https://clienti.atparma.com/admin/clients";

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
      subject,
      htmlContent: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;">
          <h2 style="color:#0A0A0A;border-bottom:2px solid #4A9FD8;padding-bottom:8px;">
            Nuovo acquisto dal sito
          </h2>
          <table style="border-collapse:collapse;width:100%;margin:16px 0;">
            <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;width:140px;">Cliente</td><td style="padding:10px;border:1px solid #e5e7eb;">${customerName}</td></tr>
            <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">Email</td><td style="padding:10px;border:1px solid #e5e7eb;">${customerEmail}</td></tr>
            <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">Servizio</td><td style="padding:10px;border:1px solid #e5e7eb;">${servizio}</td></tr>
            <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">Importo</td><td style="padding:10px;border:1px solid #e5e7eb;font-weight:700;color:#059669;">EUR ${amount}</td></tr>
            <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">Pagamento</td><td style="padding:10px;border:1px solid #e5e7eb;">${metodo}</td></tr>
            <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">ID Transazione</td><td style="padding:10px;border:1px solid #e5e7eb;font-family:monospace;font-size:12px;">${transactionId}</td></tr>
          </table>
          <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;padding:16px;margin:16px 0;">
            <p style="margin:0 0 8px;font-weight:600;color:#0369a1;">Azione richiesta</p>
            <p style="margin:0;font-size:14px;color:#0c4a6e;">
              Crea l'account del cliente sul portale per gestire la pratica.<br>
              <a href="${portalUrl}" style="color:#4A9FD8;font-weight:600;">Apri il portale clienti &rarr;</a>
            </p>
          </div>
          <p style="color:#9ca3af;font-size:11px;margin-top:24px;">
            Acquisto da www.atparma.com &mdash; ${new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" })}
          </p>
        </div>
      `,
    }),
  });
}

// Stripe webhook
export async function POST(request: Request) {
  try {
    const body = await request.text();
    const event = JSON.parse(body);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const customerEmail = session.customer_details?.email || "non disponibile";
      const customerName = session.customer_details?.name || "non disponibile";
      const amount = session.amount_total
        ? (session.amount_total / 100).toFixed(2)
        : "N/A";
      const servizio = session.line_items?.data?.[0]?.description
        || session.metadata?.servizio
        || "Servizio da sito";

      await sendNotification(
        `Nuovo cliente dal sito — ${customerName} — EUR ${amount}`,
        customerName,
        customerEmail,
        servizio,
        amount,
        "Carta (Stripe)",
        session.id
      );
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Errore webhook:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
