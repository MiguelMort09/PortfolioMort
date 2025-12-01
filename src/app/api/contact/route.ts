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
                <a href="https://github.com/MiguelMort09" class="social-link" title="GitHub">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/miguel-ernesto-uicab-canabal-2b72601bb/" class="social-link" title="LinkedIn">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
                <a href="mailto:devmigueluicab@gmail.com" class="social-link" title="Email">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
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
                <a href="https://github.com/MiguelMort09" class="social-link" title="GitHub">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/miguel-ernesto-uicab-canabal-2b72601bb/" class="social-link" title="LinkedIn">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
                <a href="mailto:devmigueluicab@gmail.com" class="social-link" title="Email">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
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
