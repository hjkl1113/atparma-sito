/**
 * Helper per inviare email transazionali al cliente finale tramite Brevo.
 *
 * Diverso da `sendNotification` interno (in webhook Stripe e paypal-notify):
 * quelle email vanno alla segreteria, queste vanno al cliente che ha pagato.
 *
 * Stile coerente coi testi approvati nel REPORT v0.6 punto 4.
 *
 * Best-effort: errori loggati su console ma mai propagati. Il pagamento è gia'
 * andato a buon fine, l'email è cortesia operativa: se Brevo è giù, non
 * vogliamo far fallire il webhook (Stripe ritrasmetterebbe creando duplicati).
 */

const SENDER = {
  name: "A.T. Consulting Parma",
  email: "segreteria@atparma.com",
} as const;

const PORTAL_URL = "https://clienti.atparma.com";
const PORTAL_REGISTER_URL = `${PORTAL_URL}/register`;

interface PaymentEmailParams {
  customerName: string;
  customerEmail: string;
  serviceTitle: string;
  /** Importo formattato pronto per visualizzazione (es. "549.00", "50,00"). */
  amountEur: string;
  /** ID transazione Stripe / PayPal. */
  transactionId: string;
}

/**
 * Email "Pagamento ricevuto - la tua pratica è aperta".
 * Trigger: dopo conferma pagamento (Stripe webhook checkout.session.completed
 * o PayPal notify con order COMPLETED).
 */
export async function sendPaymentConfirmationEmail(params: PaymentEmailParams): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.warn("[email-customer] BREVO_API_KEY non configurata, email cliente non inviata");
    return;
  }

  if (!params.customerEmail || params.customerEmail === "non disponibile") {
    console.warn("[email-customer] customer email mancante, salto invio");
    return;
  }

  const firstName = params.customerName.trim().split(/\s+/)[0] || "";
  const greetingName = firstName || params.customerName || "";

  const subject = "Pagamento ricevuto — la tua pratica è aperta";

  const htmlContent = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;color:#0A0A0A;">
      <div style="border-bottom:2px solid #4A9FD8;padding-bottom:16px;margin-bottom:24px;">
        <h1 style="margin:0;font-size:22px;color:#0A0A0A;">Pagamento ricevuto</h1>
        <p style="margin:8px 0 0;color:#52525b;font-size:14px;">A.T. Consulting Parma — Studio professionale</p>
      </div>

      <p style="font-size:16px;line-height:1.6;">
        Ciao ${greetingName ? escapeHtml(greetingName) : ""},<br>
        il pagamento è andato a buon fine. La tua pratica è aperta e il tuo commercialista è già al lavoro.
      </p>

      <h2 style="font-size:16px;margin-top:28px;margin-bottom:12px;color:#0A0A0A;">Cosa fare adesso — 3 passi</h2>

      <ol style="padding-left:20px;line-height:1.6;font-size:15px;color:#27272a;">
        <li style="margin-bottom:12px;">
          <strong>Accedi al portale.</strong> Trovi tutto nella tua dashboard: stato della pratica, scadenze, documenti.<br>
          <a href="${PORTAL_URL}" style="color:#4A9FD8;font-weight:600;text-decoration:none;">Accedi al portale →</a>
        </li>
        <li style="margin-bottom:12px;">
          <strong>Carica i documenti.</strong> Nella sezione Documenti trovi la lista esatta di quello che ti serve. Più in fretta li carichi, più in fretta procediamo.
        </li>
        <li style="margin-bottom:12px;">
          <strong>Aspetta il nostro contatto.</strong> Entro 1 giorno lavorativo ti contattiamo per confermare la presa in carico e i prossimi passi.
        </li>
      </ol>

      <p style="font-size:14px;color:#52525b;line-height:1.6;margin-top:20px;">
        Niente da stampare, niente da spedire. Tutto sul portale, da qualsiasi browser.
      </p>

      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin:24px 0;">
        <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">
          Riepilogo acquisto
        </p>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">
          <tr>
            <td style="padding:6px 0;color:#52525b;width:140px;">Servizio</td>
            <td style="padding:6px 0;color:#0A0A0A;font-weight:500;">${escapeHtml(params.serviceTitle)}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#52525b;">Importo</td>
            <td style="padding:6px 0;color:#0A0A0A;font-weight:600;">€ ${escapeHtml(params.amountEur)} IVA inclusa</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#52525b;">Riferimento</td>
            <td style="padding:6px 0;color:#0A0A0A;font-family:monospace;font-size:12px;">${escapeHtml(params.transactionId)}</td>
          </tr>
        </table>
        <p style="margin:12px 0 0;font-size:12px;color:#6b7280;">
          La fattura elettronica viene emessa entro 24 ore lavorative e ti arriva al tuo cassetto fiscale dell&apos;Agenzia delle Entrate.
        </p>
      </div>

      <p style="font-size:14px;color:#52525b;line-height:1.6;">
        Non hai ancora un account sul portale? <a href="${PORTAL_REGISTER_URL}" style="color:#4A9FD8;font-weight:600;text-decoration:none;">Registrati gratis qui</a> — bastano 2 minuti, niente carta richiesta.
      </p>

      <hr style="border:none;border-top:1px solid #e5e7eb;margin:32px 0 16px;">

      <p style="font-size:13px;color:#71717a;line-height:1.6;margin:0;">
        Hai dubbi? Rispondi a questa email oppure chiama lo <strong>0521 247721</strong>.<br>
        Risposta entro 1 giorno lavorativo.
      </p>

      <p style="font-size:13px;color:#71717a;line-height:1.6;margin:16px 0 0;">
        A presto,<br>
        <strong>Il team di A.T. Consulting Parma</strong><br>
        <a href="mailto:segreteria@atparma.com" style="color:#71717a;">segreteria@atparma.com</a>
      </p>

      <p style="font-size:11px;color:#a1a1aa;margin-top:24px;border-top:1px solid #e5e7eb;padding-top:16px;line-height:1.5;">
        A.T. Consulting Parma S.R.L.S. — P.IVA 02794450342<br>
        Borgo Riccio da Parma 5, 43121 Parma (PR) — PEC: atconsultingparma@pec.it
      </p>
    </div>
  `;

  // Versione plain-text per i client che non supportano HTML.
  const textContent = [
    `Ciao ${greetingName},`,
    "",
    "Il pagamento è andato a buon fine. La tua pratica è aperta e il tuo commercialista è già al lavoro.",
    "",
    "COSA FARE ADESSO — 3 PASSI",
    "",
    `1. Accedi al portale: ${PORTAL_URL}`,
    "   Trovi tutto nella tua dashboard: stato pratica, scadenze, documenti.",
    "",
    "2. Carica i documenti.",
    "   Nella sezione Documenti trovi la lista esatta di quello che ti serve.",
    "",
    "3. Aspetta il nostro contatto entro 1 giorno lavorativo.",
    "",
    "Niente da stampare, niente da spedire. Tutto sul portale.",
    "",
    "RIEPILOGO ACQUISTO",
    `Servizio: ${params.serviceTitle}`,
    `Importo: € ${params.amountEur} IVA inclusa`,
    `Riferimento: ${params.transactionId}`,
    "",
    "La fattura elettronica viene emessa entro 24 ore lavorative.",
    "",
    "Hai dubbi? Rispondi a questa email o chiama lo 0521 247721.",
    "Risposta entro 1 giorno lavorativo.",
    "",
    "A presto,",
    "Il team di A.T. Consulting Parma",
    "segreteria@atparma.com",
  ].join("\n");

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: SENDER,
        to: [{ email: params.customerEmail, name: params.customerName }],
        replyTo: SENDER,
        subject,
        htmlContent,
        textContent,
        // Tag Brevo per filtrare/segmentare in dashboard.
        tags: ["payment-confirmation", "atparma-sito"],
      }),
    });

    if (!response.ok) {
      const errBody = await response.text().catch(() => "");
      console.error("[email-customer] Brevo response not ok", {
        status: response.status,
        body: errBody.slice(0, 500),
        customerEmail: params.customerEmail,
        transactionId: params.transactionId,
      });
    }
  } catch (err) {
    console.error("[email-customer] fetch failed", {
      err: err instanceof Error ? err.message : String(err),
      customerEmail: params.customerEmail,
      transactionId: params.transactionId,
    });
  }
}

/**
 * Escape HTML minimo per evitare injection nei template inline.
 * Non usiamo libreria esterna per non aggiungere dipendenze a un percorso
 * critico come il webhook pagamento.
 */
function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
