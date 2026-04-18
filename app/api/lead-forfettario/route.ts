import { NextResponse } from "next/server";

interface LeadBody {
  email: string;
  fonte?: string;
  ricavi?: number;
  spese?: number;
  attivita?: string;
  cassa?: string;
  nuovaAttivita?: boolean;
  primoAnno?: boolean;
  inpsVersatiPrec?: number;
  verdetto?: string;
  nettoForf?: number;
  nettoOrd?: number;
  differenza?: number;
  modo?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadBody;
    const { email } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const emailTo = process.env.EMAIL_TO || "segreteria@atparma.com";

    if (!apiKey) {
      console.error("BREVO_API_KEY non configurata");
      return NextResponse.json({ error: "Configurazione email mancante" }, { status: 500 });
    }

    const fonte = body.fonte || "calcolatore-forfettario";
    const modo = body.modo === "professionista" ? "Commercialista" : "Privato/Professionista";

    const rows: [string, string][] = [
      ["Email", email],
      ["Fonte", fonte],
      ["Modo", modo],
    ];
    if (typeof body.ricavi === "number") rows.push(["Ricavi", `EUR ${body.ricavi.toLocaleString("it-IT")}`]);
    if (typeof body.spese === "number") rows.push(["Spese", `EUR ${body.spese.toLocaleString("it-IT")}`]);
    if (body.attivita) rows.push(["Attività", body.attivita]);
    if (body.cassa) rows.push(["Cassa", body.cassa]);
    if (typeof body.inpsVersatiPrec === "number" && !body.primoAnno) {
      rows.push(["INPS versati", `EUR ${body.inpsVersatiPrec.toLocaleString("it-IT")}`]);
    }
    if (body.primoAnno) rows.push(["Primo anno", "Sì"]);
    if (body.nuovaAttivita) rows.push(["Nuova attività", "Sì (aliquota 5%)"]);
    if (body.verdetto) rows.push(["Verdetto", body.verdetto]);
    if (typeof body.nettoForf === "number") {
      rows.push(["Netto forfettario", `EUR ${Math.round(body.nettoForf).toLocaleString("it-IT")}`]);
    }
    if (typeof body.nettoOrd === "number") {
      rows.push(["Netto ordinario", `EUR ${Math.round(body.nettoOrd).toLocaleString("it-IT")}`]);
    }
    if (typeof body.differenza === "number") {
      rows.push(["Differenza", `EUR ${Math.round(body.differenza).toLocaleString("it-IT")}`]);
    }

    const htmlContent = `
      <h2>Nuovo lead dal calcolatore forfettario</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">${k}</td><td style="padding:8px;border:1px solid #ddd;">${v}</td></tr>`
          )
          .join("")}
      </table>
      <p style="margin-top:16px;color:#888;font-size:12px;">Il lead ha scaricato il report PDF dal calcolatore su atparma.com</p>
    `;

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "A.T. Consulting Parma", email: "segreteria@atparma.com" },
        to: [{ email: emailTo, name: "A.T. Consulting Parma" }],
        replyTo: { email, name: email },
        subject: `Lead calcolatore forfettario — ${email}`,
        htmlContent,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Errore Brevo lead-forfettario:", err);
      return NextResponse.json({ error: "Errore invio lead" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Errore API lead-forfettario:", err);
    return NextResponse.json({ error: "Errore nel processamento" }, { status: 500 });
  }
}
