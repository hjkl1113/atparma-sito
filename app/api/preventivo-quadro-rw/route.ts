import { NextResponse } from "next/server";

interface PreventivoRwBody {
  nome: string;
  email: string;
  telefono?: string;
  tipologie: string[];
  anni: number[];
  valoreRange: string;
  paesi?: string;
  note?: string;
  letteraCompliance: boolean;
}

const TIPOLOGIA_LABEL: Record<string, string> = {
  cripto: "Criptovalute (exchange esteri o wallet privati)",
  conti: "Conti correnti / depositi esteri",
  immobili: "Immobili all'estero",
  broker: "Broker / dossier titoli stranieri",
  partecipazioni: "Partecipazioni in società estere",
  polizze: "Polizze vita o pensioni private estere",
};

const VALORE_RANGE_LABEL: Record<string, string> = {
  "0-15k": "Fino a €15.000",
  "15-50k": "€15.000 — €50.000",
  "50-200k": "€50.000 — €200.000",
  "200k-1m": "€200.000 — €1.000.000",
  "1m+": "Oltre €1.000.000",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PreventivoRwBody;
    const { nome, email, telefono, tipologie, anni, valoreRange, paesi, note, letteraCompliance } = body;

    if (!nome || nome.trim().length < 2) {
      return NextResponse.json({ error: "Nome non valido" }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 });
    }
    if (!Array.isArray(tipologie) || tipologie.length === 0) {
      return NextResponse.json({ error: "Almeno una tipologia richiesta" }, { status: 400 });
    }
    if (!Array.isArray(anni) || anni.length === 0) {
      return NextResponse.json({ error: "Almeno un anno richiesto" }, { status: 400 });
    }
    if (!valoreRange || !VALORE_RANGE_LABEL[valoreRange]) {
      return NextResponse.json({ error: "Range di valore richiesto" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const emailTo = process.env.EMAIL_TO || "segreteria@atparma.com";

    if (!apiKey) {
      console.error("BREVO_API_KEY non configurata");
      return NextResponse.json({ error: "Configurazione email mancante" }, { status: 500 });
    }

    const tipologieLabel = tipologie.map((t) => TIPOLOGIA_LABEL[t] || t).join(", ");
    const anniLabel = anni.sort((a, b) => b - a).join(", ");
    const valoreLabel = VALORE_RANGE_LABEL[valoreRange];
    const urgente = letteraCompliance ? "🔴 URGENTE — Lettera compliance AdE già ricevuta" : "";

    // ===== Email interna allo studio =====
    const rowsInterna: [string, string][] = [
      ["Cliente", nome],
      ["Email", email],
      ["Telefono", telefono || "—"],
      ["Anni da regolarizzare", anniLabel],
      ["Tipologie attività estere", tipologieLabel],
      ["Valore complessivo (range)", valoreLabel],
      ["Paesi coinvolti", paesi || "—"],
      ["Note aggiuntive", note || "—"],
    ];

    const subjectInterna = letteraCompliance
      ? `🔴 URGENTE Ravvedimento RW (lettera AdE) — ${nome} — ${valoreLabel}`
      : `Preventivo Ravvedimento RW — ${nome} — ${valoreLabel}`;

    const tableRowsInterna = rowsInterna
      .map(
        ([k, v]) =>
          `<tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;width:180px;">${k}</td><td style="padding:10px;border:1px solid #e5e7eb;">${escape(v)}</td></tr>`
      )
      .join("");

    const interna = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { accept: "application/json", "content-type": "application/json", "api-key": apiKey },
      body: JSON.stringify({
        sender: { name: "A.T. Consulting Parma", email: "segreteria@atparma.com" },
        to: [{ email: emailTo, name: "A.T. Consulting Parma" }],
        replyTo: { email, name: nome },
        subject: subjectInterna,
        htmlContent: `
          <div style="font-family:system-ui,sans-serif;max-width:640px;">
            <h2 style="color:#0A0A0A;border-bottom:2px solid ${letteraCompliance ? "#dc2626" : "#4A9FD8"};padding-bottom:8px;">
              ${letteraCompliance ? "🔴 URGENTE: " : ""}Richiesta preventivo Ravvedimento Quadro RW
            </h2>
            ${urgente ? `<p style="background:#fef2f2;border:1px solid #fecaca;padding:12px;border-radius:8px;color:#991b1b;font-size:14px;margin:16px 0;"><strong>Il cliente ha già ricevuto una lettera di compliance dall'Agenzia delle Entrate.</strong> Priorità alta — rispondere entro poche ore se possibile.</p>` : ""}
            <table style="border-collapse:collapse;width:100%;margin:16px 0;">${tableRowsInterna}</table>
            <p style="color:#9ca3af;font-size:11px;margin-top:24px;">
              Richiesta da www.atparma.com/servizi/quadro-rw-ravvedimento &mdash; ${new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" })}
            </p>
          </div>
        `,
      }),
    });

    if (!interna.ok) {
      console.error("Brevo email interna fallita", await interna.text().catch(() => ""));
    }

    // ===== Email di conferma al cliente =====
    const conferma = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { accept: "application/json", "content-type": "application/json", "api-key": apiKey },
      body: JSON.stringify({
        sender: { name: "A.T. Consulting Parma", email: "segreteria@atparma.com" },
        to: [{ email, name: nome }],
        replyTo: { email: "segreteria@atparma.com", name: "A.T. Consulting Parma" },
        subject: "Richiesta preventivo Ravvedimento Quadro RW ricevuta",
        htmlContent: `
          <div style="font-family:system-ui,sans-serif;max-width:600px;color:#0A0A0A;">
            <h2 style="color:#0A0A0A;border-bottom:2px solid #4A9FD8;padding-bottom:8px;">
              Abbiamo ricevuto la tua richiesta
            </h2>
            <p style="font-size:15px;line-height:1.6;">Ciao ${escape(nome.split(/\s+/)[0])},</p>
            <p style="font-size:15px;line-height:1.6;">
              grazie per averci contattato. Un dottore commercialista del nostro studio analizzerà la tua posizione (anni: ${escape(anniLabel)}, attività: ${escape(tipologieLabel)}, valore: ${escape(valoreLabel)}) e ti risponderà entro 1 giorno lavorativo all&apos;email <strong>${escape(email)}</strong> con il preventivo dettagliato e i prossimi passi.
            </p>
            ${letteraCompliance ? `<p style="background:#fef2f2;border:1px solid #fecaca;padding:12px;border-radius:8px;color:#991b1b;font-size:14px;margin:16px 0;"><strong>Hai indicato di aver ricevuto una lettera di compliance dall'AdE.</strong> Tratteremo la tua richiesta come urgente: ti contattiamo entro la giornata lavorativa.</p>` : ""}
            <p style="font-size:14px;color:#52525b;line-height:1.6;">
              Cosa succede ora:
            </p>
            <ol style="font-size:14px;line-height:1.7;color:#27272a;padding-left:20px;">
              <li>Riceverai email con preventivo e prima stima della sanzione ridotta col ravvedimento</li>
              <li>Se procediamo, ti chiediamo una videocall per ricostruire i dettagli (gratuita, 30 minuti)</li>
              <li>Compiliamo le dichiarazioni integrative e ti consegniamo F24 con sanzioni ridotte</li>
              <li>Tu paghi il F24 e regolarizzi la posizione, noi inviamo telematicamente all&apos;AdE</li>
            </ol>
            <p style="font-size:13px;color:#71717a;margin-top:24px;">
              Hai domande? Rispondi a questa email o chiama lo <strong>0521 247721</strong>.
            </p>
            <p style="font-size:13px;color:#71717a;margin:16px 0 0;">
              A presto,<br>
              <strong>Il team di A.T. Consulting Parma</strong>
            </p>
            <p style="font-size:11px;color:#a1a1aa;margin-top:24px;border-top:1px solid #e5e7eb;padding-top:16px;line-height:1.5;">
              A.T. Consulting Parma S.R.L.S. &mdash; P.IVA 02794450342<br>
              Borgo Riccio da Parma 5, 43121 Parma (PR) &mdash; PEC: atconsultingparma@pec.it
            </p>
          </div>
        `,
      }),
    });

    if (!conferma.ok) {
      console.error("Brevo email conferma cliente fallita", await conferma.text().catch(() => ""));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Errore preventivo Quadro RW:", err);
    return NextResponse.json({ error: "Errore nell'invio della richiesta" }, { status: 500 });
  }
}

function escape(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
