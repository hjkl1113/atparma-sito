import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, servizio, messaggio } = body;

    if (!nome || !email || !servizio || !messaggio) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const emailTo = process.env.EMAIL_TO || "segreteria@atparma.com";

    if (!apiKey) {
      console.error("BREVO_API_KEY non configurata");
      return NextResponse.json(
        { error: "Configurazione email mancante" },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "Sito ATParma", email: "segreteria@atparma.com" },
        to: [{ email: emailTo, name: "A.T. Consulting Parma" }],
        replyTo: { email, name: nome },
        subject: `Nuova richiesta: ${servizio} — ${nome}`,
        htmlContent: `
          <h2>Nuova richiesta dal sito</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nome</td><td style="padding:8px;border:1px solid #ddd;">${nome}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefono</td><td style="padding:8px;border:1px solid #ddd;">${telefono || "Non indicato"}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Servizio</td><td style="padding:8px;border:1px solid #ddd;">${servizio}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Messaggio</td><td style="padding:8px;border:1px solid #ddd;">${messaggio}</td></tr>
          </table>
          <p style="margin-top:16px;color:#888;font-size:12px;">Inviato dal form di contatto su atparma.com</p>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Errore Brevo:", err);
      return NextResponse.json({ error: "Errore invio email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Errore API contatti:", err);
    return NextResponse.json(
      { error: "Errore nel processamento della richiesta" },
      { status: 500 }
    );
  }
}
