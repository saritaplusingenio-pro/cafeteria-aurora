import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidPayload(data: unknown): data is ContactPayload {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length > 0 &&
    typeof d.email === "string" &&
    /\S+@\S+\.\S+/.test(d.email) &&
    typeof d.message === "string" &&
    d.message.trim().length > 0
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Cuerpo de la solicitud inválido." },
      { status: 400 }
    );
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios o son inválidos." },
      { status: 400 }
    );
  }

  const { name, email, message } = body;

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !contactTo) {
    console.error(
      "Falta configurar RESEND_API_KEY o CONTACT_TO_EMAIL en las variables de entorno."
    );
    return NextResponse.json(
      { ok: false, error: "El servicio de contacto no está configurado." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Cafetería Aurora <web@cafeteriaurora.example>",
        to: contactTo,
        reply_to: email,
        subject: `Nuevo mensaje de contacto de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Error enviando email vía Resend:", errorBody);
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el mensaje. Inténtalo más tarde." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error inesperado al procesar el contacto:", error);
    return NextResponse.json(
      { ok: false, error: "Error inesperado. Inténtalo más tarde." },
      { status: 500 }
    );
  }
}
