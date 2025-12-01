import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Plantilla 1: Notificación para ti
function getNotificationTemplate(name: string, email: string, message: string) {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Mensaje</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #000000;
            padding: 40px 20px;
            color: #ffffff;
        }
        .container {
            max-width: 560px;
            margin: 0 auto;
            background: #0a0a0a;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            overflow: hidden;
        }
        .header {
            padding: 40px 32px;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
        }
        .logo {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
        }
        .logo-dot { color: #60a5fa; }
        .header h1 {
            font-size: 18px;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 4px;
        }
        .header p {
            font-size: 14px;
            color: #a1a1aa;
        }
        .content { padding: 32px; }
        .field { margin-bottom: 24px; }
        .field:last-child { margin-bottom: 0; }
        .label {
            font-size: 12px;
            font-weight: 500;
            color: #71717a;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            display: block;
        }
        .value {
            font-size: 15px;
            color: #ffffff;
            line-height: 1.6;
        }
        .message-box {
            background: #000000;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 6px;
            padding: 16px;
            font-size: 14px;
            color: #e4e4e7;
            line-height: 1.7;
            white-space: pre-wrap;
        }
        .footer {
            padding: 32px;
            background: #000000;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
        }
        .footer p {
            font-size: 13px;
            color: #71717a;
            margin-bottom: 20px;
        }
        .social-links {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 20px;
        }
        .social-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background: #0a0a0a;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 6px;
            color: #a1a1aa;
            text-decoration: none;
            transition: all 0.2s ease;
        }
        .social-link:hover {
            background: #1a1a1a;
            border-color: rgba(255, 255, 255, 0.2);
            color: #ffffff;
        }
        .footer-text {
            font-size: 12px;
            color: #52525b;
        }
        @media only screen and (max-width: 600px) {
            body { padding: 20px 16px; }
            .header, .content { padding: 24px; }
            .footer { padding: 20px 24px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">MIGUELMORT<span class="logo-dot">.DEV</span></div>
            <h1>Nuevo mensaje de contacto</h1>
            <p>Has recibido un nuevo mensaje</p>
        </div>
        
        <div class="content">
            <div class="field">
                <span class="label">De</span>
                <div class="value">${name}</div>
            </div>
            
            <div class="field">
                <span class="label">Email</span>
                <div class="value">${email}</div>
            </div>
            
            <div class="field">
                <span class="label">Mensaje</span>
                <div class="message-box">${message}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>Puedes responder directamente a este email</p>
            
            <div class="social-links">
                <a href="https://github.com/MiguelMort09" class="social-link" title="GitHub" style="text-decoration: none;">
                    <span style="font-size: 13px; font-weight: 600; color: #60a5fa;">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/miguel-ernesto-uicab-canabal-2b72601bb/" class="social-link" title="LinkedIn" style="text-decoration: none;">
                    <span style="font-size: 13px; font-weight: 600; color: #60a5fa;">LinkedIn</span>
                </a>
                <a href="mailto:devmigueluicab@gmail.com" class="social-link" title="Email" style="text-decoration: none;">
                    <span style="font-size: 13px; font-weight: 600; color: #60a5fa;">Email</span>
                </a>
            </div>
            
            <p class="footer-text">© 2024 Miguel Mort • Desarrollador Fullstack</p>
        </div>
    </div>
</body>
</html>
  `;
}

// Plantilla 2: Confirmación para el contacto
function getConfirmationTemplate(name: string, message: string) {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gracias por tu mensaje</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #000000;
            padding: 40px 20px;
            color: #ffffff;
        }
        .container {
            max-width: 560px;
            margin: 0 auto;
            background: #0a0a0a;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            overflow: hidden;
        }
        .header {
            padding: 40px 32px;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
        }
        .logo {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
        }
        .logo-dot { color: #60a5fa; }
        .header h1 {
            font-size: 18px;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 4px;
        }
        .header p {
            font-size: 14px;
            color: #a1a1aa;
        }
        .content { padding: 32px; }
        .greeting {
            font-size: 16px;
            color: #ffffff;
            margin-bottom: 20px;
            font-weight: 600;
        }
        .message-box {
            background: #000000;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 6px;
            padding: 20px;
            font-size: 14px;
            color: #e4e4e7;
            line-height: 1.7;
            margin-bottom: 24px;
        }
        .message-copy {
            background: rgba(96, 165, 250, 0.1);
            border-left: 3px solid #60a5fa;
            padding: 16px;
            border-radius: 4px;
            margin-top: 20px;
        }
        .message-copy-label {
            font-size: 11px;
            text-transform: uppercase;
            color: #71717a;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }
        .message-copy-text {
            font-size: 13px;
            color: #a1a1aa;
            font-style: italic;
            line-height: 1.6;
        }
        .footer {
            padding: 32px;
            background: #000000;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
        }
        .footer p {
            font-size: 13px;
            color: #71717a;
            margin-bottom: 20px;
        }
        .social-links {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 20px;
        }
        .social-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background: #0a0a0a;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 6px;
            color: #a1a1aa;
            text-decoration: none;
            transition: all 0.2s ease;
        }
        .social-link:hover {
            background: #1a1a1a;
            border-color: rgba(255, 255, 255, 0.2);
            color: #ffffff;
        }
        .footer-text {
            font-size: 12px;
            color: #52525b;
        }
        @media only screen and (max-width: 600px) {
            body { padding: 20px 16px; }
            .header, .content { padding: 24px; }
            .footer { padding: 20px 24px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">MIGUELMORT<span class="logo-dot">.DEV</span></div>
            <h1>¡Gracias por contactarme!</h1>
            <p>Te responderé pronto</p>
        </div>
        
        <div class="content">
            <div class="greeting">Hola ${name},</div>
            
            <div class="message-box">
                Gracias por tomarte el tiempo de contactarme. He recibido tu mensaje y te responderé a la brevedad posible, generalmente dentro de las próximas 24-48 horas.
                <br><br>
                Mientras tanto, te invito a revisar mi trabajo en GitHub o conectar conmigo en LinkedIn.
                <br><br>
                ¡Saludos!<br>
                <strong>Miguel Mort</strong><br>
                Desarrollador Fullstack
            </div>

            <div class="message-copy">
                <div class="message-copy-label">Copia de tu mensaje:</div>
                <div class="message-copy-text">${message}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>Si necesitas algo urgente, responde directamente a este email</p>
            
            <div class="social-links">
                <a href="https://github.com/MiguelMort09" class="social-link" title="GitHub" style="text-decoration: none;">
                    <span style="font-size: 13px; font-weight: 600; color: #60a5fa;">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/miguel-ernesto-uicab-canabal-2b72601bb/" class="social-link" title="LinkedIn" style="text-decoration: none;">
                    <span style="font-size: 13px; font-weight: 600; color: #60a5fa;">LinkedIn</span>
                </a>
                <a href="mailto:devmigueluicab@gmail.com" class="social-link" title="Email" style="text-decoration: none;">
                    <span style="font-size: 13px; font-weight: 600; color: #60a5fa;">Email</span>
                </a>
            </div>
            
            <p class="footer-text">© 2024 Miguel Mort • Desarrollador Fullstack</p>
        </div>
    </div>
</body>
</html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validación
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // 1. Enviar notificación a ti
    await resend.emails.send({
      from: "Portfolio <contacto@miguelmort.dev>",
      to: ["devmigueluicab@gmail.com"],
      replyTo: email,
      subject: `🔔 Nuevo mensaje de ${name}`,
      html: getNotificationTemplate(name, email, message),
    });

    // 2. Enviar confirmación al contacto
    await resend.emails.send({
      from: "Miguel Mort <contacto@miguelmort.dev>",
      to: [email],
      replyTo: "devmigueluicab@gmail.com",
      subject: `✅ Gracias por tu mensaje, ${name}`,
      html: getConfirmationTemplate(name, message),
    });

    return NextResponse.json(
      { message: "Emails enviados exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar emails:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Por favor, intenta de nuevo." },
      { status: 500 }
    );
  }
}
