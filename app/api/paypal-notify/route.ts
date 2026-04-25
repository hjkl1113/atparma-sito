import { NextResponse } from "next/server";

import { sendPaymentConfirmationEmail } from "@/lib/email-customer";

export const runtime = "nodejs";

type PayPalOrder = {
  id?: string;
  status?: string;
  payer?: {
    email_address?: string;
    name?: {
      given_name?: string;
      surname?: string;
    };
  };
  purchase_units?: Array<{
    description?: string;
    custom_id?: string;
    amount?: {
      value?: string;
      currency_code?: string;
    };
  }>;
};

async function getPayPalAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID || process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const baseUrl = process.env.PAYPAL_API_BASE_URL || "https://api-m.paypal.com";

  if (!clientId || !clientSecret) {
    throw new Error("PayPal non configurato lato server");
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error(`Token PayPal non ottenuto (${response.status})`);
  }

  const payload = await response.json() as { access_token?: string };
  if (!payload.access_token) {
    throw new Error("Risposta token PayPal non valida");
  }

  return { accessToken: payload.access_token, baseUrl };
}

async function getVerifiedPayPalOrder(orderId: string) {
  const { accessToken, baseUrl } = await getPayPalAccessToken();
  const response = await fetch(`${baseUrl}/v2/checkout/orders/${orderId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Ordine PayPal non verificabile (${response.status})`);
  }

  return await response.json() as PayPalOrder;
}

export async function POST(request: Request) {
  try {
    const { servizio, importo, orderId, serviceId, taxCode, vatNumber } = await request.json() as {
      servizio?: string;
      importo?: string;
      orderId?: string;
      serviceId?: string;
      taxCode?: string;
      vatNumber?: string;
    };

    if (!orderId || typeof orderId !== "string") {
      return NextResponse.json({ error: "Order ID PayPal obbligatorio" }, { status: 400 });
    }

    const verifiedOrder = await getVerifiedPayPalOrder(orderId);
    if (verifiedOrder.status !== "COMPLETED") {
      return NextResponse.json({ error: "Ordine PayPal non completato" }, { status: 400 });
    }

    const purchaseUnit = verifiedOrder.purchase_units?.[0];
    const verifiedAmount = purchaseUnit?.amount?.value;
    if (importo && verifiedAmount && Number(importo).toFixed(2) !== Number(verifiedAmount).toFixed(2)) {
      return NextResponse.json({ error: "Importo PayPal non coerente" }, { status: 400 });
    }

    if (serviceId && purchaseUnit?.custom_id && purchaseUnit.custom_id !== serviceId) {
      return NextResponse.json({ error: "Servizio PayPal non coerente" }, { status: 400 });
    }

    const verifiedName = [
      verifiedOrder.payer?.name?.given_name,
      verifiedOrder.payer?.name?.surname,
    ].filter(Boolean).join(" ") || "Cliente PayPal";
    const verifiedEmail = verifiedOrder.payer?.email_address || "noreply@atparma.com";
    const verifiedService = purchaseUnit?.description || servizio || "Servizio da sito";
    const amount = verifiedAmount || importo || "N/A";

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email non configurata" }, { status: 500 });
    }

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
        replyTo: { email: verifiedEmail, name: verifiedName },
        subject: `Nuovo cliente dal sito — ${verifiedName} — EUR ${amount}`,
        htmlContent: `
          <div style="font-family:system-ui,sans-serif;max-width:600px;">
            <h2 style="color:#0A0A0A;border-bottom:2px solid #4A9FD8;padding-bottom:8px;">
              Nuovo acquisto dal sito
            </h2>
            <table style="border-collapse:collapse;width:100%;margin:16px 0;">
              <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;width:140px;">Cliente</td><td style="padding:10px;border:1px solid #e5e7eb;">${verifiedName}</td></tr>
              <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">Email</td><td style="padding:10px;border:1px solid #e5e7eb;">${verifiedEmail}</td></tr>
              <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">Servizio</td><td style="padding:10px;border:1px solid #e5e7eb;">${verifiedService}</td></tr>
              <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">Importo</td><td style="padding:10px;border:1px solid #e5e7eb;font-weight:700;color:#059669;">EUR ${amount}</td></tr>
              <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">Pagamento</td><td style="padding:10px;border:1px solid #e5e7eb;">PayPal verificato server-side</td></tr>
              ${taxCode ? `<tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">Codice fiscale</td><td style="padding:10px;border:1px solid #e5e7eb;">${taxCode}</td></tr>` : ""}
              ${vatNumber ? `<tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">P.IVA</td><td style="padding:10px;border:1px solid #e5e7eb;">${vatNumber}</td></tr>` : ""}
              <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">ID Ordine</td><td style="padding:10px;border:1px solid #e5e7eb;font-family:monospace;font-size:12px;">${verifiedOrder.id || orderId}</td></tr>
            </table>
            <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;padding:16px;margin:16px 0;">
              <p style="margin:0 0 8px;font-weight:600;color:#0369a1;">Azione richiesta</p>
              <p style="margin:0;font-size:14px;color:#0c4a6e;">
                Pagamento verificato via API PayPal server-side.<br>
                Crea o collega l'account del cliente sul portale per gestire la pratica.<br>
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

    // Email di conferma al cliente (best-effort: non blocca il flusso se Brevo è giù).
    // Vedi REPORT.md punto 4 "TESTI PRONTI".
    await sendPaymentConfirmationEmail({
      customerName: verifiedName,
      customerEmail: verifiedEmail,
      serviceTitle: verifiedService,
      amountEur: amount,
      transactionId: verifiedOrder.id || orderId,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Errore notifica PayPal:", err);
    return NextResponse.json({ error: "Errore notifica" }, { status: 500 });
  }
}
