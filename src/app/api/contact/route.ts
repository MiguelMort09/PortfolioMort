import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Enviar email usando Resend
    const data = await resend.emails.send({
      from: "Portfolio <contacto@miguelmort.dev>",
      to: ["devmigueluicab@gmail.com"],
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #667eea; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">📬 Nuevo Mensaje de Contacto</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Nombre:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">💬 Mensaje:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Email enviado exitosamente", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Por favor, intenta de nuevo." },
      { status: 500 }
    );
  }
}
