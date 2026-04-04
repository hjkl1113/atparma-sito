import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, servizio, messaggio } = body;

    // Validazione base
    if (!nome || !email || !servizio || !messaggio) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    // TODO: Integrare invio email (es. Resend, Nodemailer, o Vercel Email)
    // Per ora logga la richiesta e restituisce successo
    console.log("Nuova richiesta consulenza:", {
      nome,
      email,
      telefono,
      servizio,
      messaggio,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Errore nel processamento della richiesta" },
      { status: 500 }
    );
  }
}
