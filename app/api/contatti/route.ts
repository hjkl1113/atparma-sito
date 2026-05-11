import { NextResponse, after } from "next/server";

// Normalizza "MONICA STORI CANDIANI" / "monica stori candiani" -> "Monica Stori Candiani"
function toTitleCase(s: string): string {
  return s
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
    .replace(/(^|[\s'-])\S/g, (c) => c.toUpperCase());
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { titolo, nome, email, telefono, servizio, messaggio } = body;

    if (!nome || !email || !servizio || !messaggio) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    // Titolo opzionale lato schema (per backward-compat con eventuali integrazioni
    // esterne), ma il form `app/contatti/form.tsx` lo rende obbligatorio.
    // Valori accettati: "Sig." | "Sig.ra"; fallback "Gentile" se assente.
    const titoloPulito: string | null =
      typeof titolo === "string" && (titolo === "Sig." || titolo === "Sig.ra")
        ? titolo
        : null;

    const apiKey = process.env.BREVO_API_KEY;
    const emailTo = process.env.EMAIL_TO || "segreteria@atparma.com";

    if (!apiKey) {
      console.error("BREVO_API_KEY non configurata");
      return NextResponse.json(
        { error: "Configurazione email mancante" },
        { status: 500 }
      );
    }

    // 1) Mail allo studio (segreteria@) — invariata rispetto al pre-11/05
    const studioRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "A.T. Consulting Parma", email: "segreteria@atparma.com" },
        to: [{ email: emailTo, name: "A.T. Consulting Parma" }],
        replyTo: { email, name: nome },
        subject: `Nuova richiesta: ${servizio} — ${nome}`,
        htmlContent: `
          <h2>Nuova richiesta dal sito</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Titolo</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(titoloPulito || "Non indicato")}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nome</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(nome)}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefono</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(telefono || "Non indicato")}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Servizio</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(servizio)}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Messaggio</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(messaggio)}</td></tr>
          </table>
          <p style="margin-top:16px;color:#888;font-size:12px;">Inviato dal form di contatto su atparma.com</p>
        `,
      }),
    });

    if (!studioRes.ok) {
      const err = await studioRes.text();
      console.error("Errore Brevo (mail studio):", err);
      return NextResponse.json({ error: "Errore invio email" }, { status: 500 });
    }

    // 2) Auto-reply al cliente — generica per tutti i servizi, CC casciaro@
    // per conoscenza. Headers Auto-Submitted/Precedence per evitare loop con
    // altre auto-reply (es. Out-of-Office). Best-effort: se fallisce, log
    // ma NON ritorniamo errore al cliente (la richiesta principale e' gia'
    // arrivata in studio).
    const nomeBuongiorno = toTitleCase(nome);
    const servizioPulito = escapeHtml(servizio);
    // Saluto: "Buongiorno Sig./Sig.ra Nome Cognome," se titolo presente,
    // altrimenti fallback "Gentile Nome Cognome," (formale neutro).
    const salutoCompleto = titoloPulito
      ? `Buongiorno ${escapeHtml(titoloPulito)} ${escapeHtml(nomeBuongiorno)}`
      : `Gentile ${escapeHtml(nomeBuongiorno)}`;
    const autoReplyHtml = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#18181b;line-height:1.6;">
        <p>${salutoCompleto},</p>
        <p>abbiamo ricevuto la Sua richiesta.</p>
        <p>La dott.ssa Casciaro la contatter&agrave; entro 24 ore dal numero <strong>0521 247721</strong>.</p>
        <p>Se deciderà di procedere con la pratica, lo studio le fornir&agrave; le credenziali per accedere al portale clienti, dove potr&agrave; caricare documenti e seguire le comunicazioni relative all'incarico.</p>
        <p style="margin-top:24px;">Cordiali saluti,<br/>
        <strong>A.T. Consulting Parma S.R.L.S.</strong><br/>
        <a href="mailto:segreteria@atparma.com" style="color:#2563eb;">segreteria@atparma.com</a><br/>
        0521 247721</p>
        <hr style="border:none;border-top:1px solid #e4e4e7;margin:24px 0;"/>
        <p style="color:#a1a1aa;font-size:12px;">Email automatica inviata in risposta alla Sua richiesta. Se non l'ha inviata Lei, ignori questo messaggio.</p>
      </div>
    `;

    // Auto-reply cliente eseguito in `after()`: best-effort, non blocca la
    // response al sito. Il dato critico (mail allo studio) e' gia' confermato
    // sopra; l'auto-reply migliora UX ma una sua failure non deve far vedere
    // "errore" al cliente che ha appena cliccato Invia.
    after(async () => {
      try {
        const clientRes = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "api-key": apiKey,
          },
          body: JSON.stringify({
            sender: { name: "A.T. Consulting Parma", email: "segreteria@atparma.com" },
            to: [{ email, name: nome }],
            cc: [{ email: "casciaro@atparma.com", name: "Sara Casciaro" }],
            subject: "Abbiamo ricevuto la sua richiesta — A.T. Consulting Parma",
            htmlContent: autoReplyHtml,
            headers: {
              "Auto-Submitted": "auto-replied",
              "Precedence": "bulk",
              "X-Auto-Response-Suppress": "All",
            },
          }),
        });

        if (!clientRes.ok) {
          const err = await clientRes.text();
          console.warn("Errore Brevo (auto-reply cliente, non bloccante):", err);
        }
      } catch (err) {
        console.warn("Errore invio auto-reply cliente (non bloccante):", err);
      }
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Errore API contatti:", err);
    return NextResponse.json(
      { error: "Errore nel processamento della richiesta" },
      { status: 500 }
    );
  }
}
