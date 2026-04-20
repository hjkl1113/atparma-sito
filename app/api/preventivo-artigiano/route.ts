import { NextResponse } from "next/server";

interface PreventivoBody {
  nome: string;
  email: string;
  telefono?: string;
  tipologia: "artigiano" | "commerciante";
  regime: "forfettario" | "non-forfettario";
  caratteristiche: Partial<
    Record<"localePubblico" | "alimentare" | "attivitaRegolata" | "dipendenti", boolean>
  >;
  provincia?: string;
  totale: { min: number; max: number };
}

const CARATTERISTICA_LABEL: Record<string, string> = {
  localePubblico: "Locale aperto al pubblico (SCIA SUAP)",
  alimentare: "Attività alimentare (USL + HACCP)",
  attivitaRegolata: "Attività regolamentata (SCIA abilitativa)",
  dipendenti: "Avrà dipendenti (INAIL)",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PreventivoBody;
    const { nome, email, telefono, tipologia, regime, caratteristiche, provincia, totale } = body;

    if (!nome || nome.trim().length < 2) {
      return NextResponse.json({ error: "Nome non valido" }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const emailTo = process.env.EMAIL_TO || "segreteria@atparma.com";

    if (!apiKey) {
      console.error("BREVO_API_KEY non configurata");
      return NextResponse.json({ error: "Configurazione email mancante" }, { status: 500 });
    }

    const caratteristicheAttive = Object.entries(caratteristiche)
      .filter(([, v]) => v)
      .map(([k]) => CARATTERISTICA_LABEL[k] || k);

    const fmt = (n: number) => `EUR ${n.toLocaleString("it-IT")}`;
    const tipologiaLabel = tipologia === "artigiano" ? "Artigiano" : "Commerciante";
    const regimeLabel = regime === "forfettario" ? "Forfettario" : "Semplificato/Ordinario";

    // Email interna allo studio (copia pronta per nuovo cliente nel portale)
    const rowsInterna: [string, string][] = [
      ["Cliente", nome],
      ["Email", email],
      ["Telefono", telefono || "—"],
      ["Tipologia", tipologiaLabel],
      ["Regime", regimeLabel],
      ["Provincia", provincia?.toUpperCase() || "—"],
      [
        "Caratteristiche attività",
        caratteristicheAttive.length > 0 ? caratteristicheAttive.join(", ") : "Attività standard (nessuna regolata)",
      ],
      ["Totale stimato primo anno", `${fmt(totale.min)}-${fmt(totale.max)}`],
    ];

    const copyBlock = [
      `Nome: ${nome}`,
      `Email: ${email}`,
      telefono ? `Telefono: ${telefono}` : null,
      `Tipologia: ${tipologiaLabel}`,
      `Regime: ${regimeLabel}`,
      provincia ? `Provincia: ${provincia.toUpperCase()}` : null,
      `Note: Preventivo artigiano/commerciante via sito — caratteristiche: ${
        caratteristicheAttive.length > 0 ? caratteristicheAttive.join(", ") : "standard"
      } — stima ${fmt(totale.min)}-${fmt(totale.max)}`,
    ]
      .filter(Boolean)
      .join("\n");

    const portalUrl = "https://clienti.atparma.com/admin/clients";

    const htmlContentInterna = `
      <div style="font-family:system-ui,sans-serif;max-width:640px;">
        <h2 style="color:#0A0A0A;border-bottom:2px solid #4A9FD8;padding-bottom:8px;">
          Nuovo lead — Preventivo artigiano/commerciante
        </h2>
        <table style="border-collapse:collapse;width:100%;margin:16px 0;">
          ${rowsInterna
            .map(
              ([k, v]) =>
                `<tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;width:180px;">${k}</td><td style="padding:10px;border:1px solid #e5e7eb;">${v}</td></tr>`,
            )
            .join("")}
        </table>

        <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;padding:16px;margin:16px 0;">
          <p style="margin:0 0 8px;font-weight:600;color:#0369a1;">Azione richiesta</p>
          <p style="margin:0 0 12px;font-size:14px;color:#0c4a6e;">
            Contatto entro 24h lavorative per offerta puntuale + mandato digitale.
          </p>
          <p style="margin:0 0 8px;font-size:13px;color:#0c4a6e;">
            <strong>1.</strong> Apri il portale: <a href="${portalUrl}" style="color:#4A9FD8;font-weight:600;">${portalUrl} &rarr;</a><br>
            <strong>2.</strong> Clicca <em>"+ Nuovo Cliente"</em> e incolla i dati qui sotto.
          </p>
        </div>

        <div style="margin:16px 0;">
          <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">
            Dati copiabili
          </p>
          <pre style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;padding:12px;font-family:monospace;font-size:12px;line-height:1.6;white-space:pre-wrap;margin:0;">${copyBlock}</pre>
        </div>

        <p style="color:#9ca3af;font-size:11px;margin-top:24px;">
          Preventivo da www.atparma.com/strumenti/preventivo-artigiano-commerciante &mdash;
          ${new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" })}<br>
          Destinatario: segreteria@atparma.com &mdash; gestibile anche da casciaro@atparma.com
        </p>
      </div>
    `;

    // Email al cliente
    const caratteristicheClienteHtml =
      caratteristicheAttive.length > 0
        ? `<ul>${caratteristicheAttive.map((c) => `<li>${c}</li>`).join("")}</ul>`
        : "<p>Attività standard (nessuna caratteristica regolata selezionata)</p>";

    const htmlContentCliente = `
      <div style="font-family:system-ui,sans-serif;max-width:640px;padding:20px;">
        <h2 style="color:#0A0A0A;">Grazie, ${nome.split(" ")[0]}.</h2>
        <p style="color:#374151;line-height:1.6;">
          Abbiamo ricevuto la tua richiesta di preventivo per l'apertura
          P.IVA <strong>${tipologiaLabel.toLowerCase()}</strong> in regime
          <strong>${regimeLabel.toLowerCase()}</strong>.
        </p>

        <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin:16px 0;">
          <p style="margin:0 0 8px;font-weight:600;color:#111;">
            Stima indicativa primo anno
          </p>
          <p style="margin:0;font-size:20px;font-weight:700;color:#0A0A0A;">
            ${fmt(totale.min)} – ${fmt(totale.max)}
          </p>
          <p style="margin:8px 0 0;font-size:12px;color:#6b7280;">
            Include onorario AT Parma (apertura + 1 anno contabilità) + costi vivi
            verso enti terzi (CCIAA, bolli, eventuali SCIA/USL).
          </p>
        </div>

        <p style="color:#374151;line-height:1.6;"><strong>Caratteristiche indicate:</strong></p>
        ${caratteristicheClienteHtml}

        <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;padding:16px;margin:24px 0;">
          <p style="margin:0 0 8px;font-weight:600;color:#0369a1;">Prossimi passi</p>
          <p style="margin:0;font-size:14px;color:#0c4a6e;">
            Ti contatteremo <strong>entro 24 ore lavorative</strong> per:
          </p>
          <ul style="color:#0c4a6e;font-size:14px;margin:8px 0 0;">
            <li>offerta puntuale personalizzata</li>
            <li>verifica caso specifico (codice ATECO, requisiti, SCIA se serve)</li>
            <li>invio mandato professionale digitale</li>
          </ul>
        </div>

        <p style="color:#374151;line-height:1.6;">
          Se preferisci parlarne al telefono: <strong>0521 247721</strong> (lunedì-venerdì 9-18).
        </p>

        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">

        <p style="color:#9ca3af;font-size:12px;">
          A.T. Consulting Parma S.R.L.S. — Dottori commercialisti iscritti
          agli Albi di Parma e Brescia.<br>
          Borgo Riccio da Parma 5, 43121 Parma (PR) — P.IVA 02794450342
        </p>
      </div>
    `;

    // Invia entrambe le email (studio + cliente)
    const [resInterna, resCliente] = await Promise.all([
      fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: { name: "A.T. Consulting Parma", email: "segreteria@atparma.com" },
          to: [{ email: emailTo, name: "A.T. Consulting Parma" }],
          replyTo: { email, name: nome },
          subject: `Preventivo artigiano/commerciante — ${nome}`,
          htmlContent: htmlContentInterna,
        }),
      }),
      fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: { name: "A.T. Consulting Parma", email: "segreteria@atparma.com" },
          to: [{ email, name: nome }],
          subject: `Il tuo preventivo — apertura P.IVA ${tipologiaLabel.toLowerCase()}`,
          htmlContent: htmlContentCliente,
        }),
      }),
    ]);

    if (!resInterna.ok) {
      const err = await resInterna.text();
      console.error("Errore Brevo preventivo-artigiano (interna):", err);
    }
    if (!resCliente.ok) {
      const err = await resCliente.text();
      console.error("Errore Brevo preventivo-artigiano (cliente):", err);
    }

    // Se almeno la mail interna è passata, successo
    if (!resInterna.ok) {
      return NextResponse.json({ error: "Errore invio preventivo" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Errore API preventivo-artigiano:", err);
    return NextResponse.json({ error: "Errore nel processamento" }, { status: 500 });
  }
}
