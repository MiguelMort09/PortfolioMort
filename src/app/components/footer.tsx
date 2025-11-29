import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/MiguelMort09", icon: Github },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/miguel-ernesto-uicab-canabal-2b72601bb/",
      icon: Linkedin,
    },
    { name: "Email", href: "mailto:contact@miguelmort.tech", icon: Mail },
  ];

  return (
    <footer className="bg-background border-t border-muted">
      <div className="w-full container mx-auto px-4 py-12 ">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-bold gradient-text">
                MIGUELMORT.DEV
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Ingeniero en Tecnologías de Software especializado en desarrollo
              web moderno. Creando experiencias digitales excepcionales con
              tecnologías de vanguardia.
            </p>

            {/* Contact Info */}
            <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Campeche, México</span>
            </div>  <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Querétaro, México</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>devmigueluicab@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+52 982-102-9769</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Sígueme</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-background transition-all duration-300 hover-glow"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} MiguelMort.dev. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Términos de Servicio
            </Link>
            <Link
              href="/legal"
              className="hover:text-primary transition-colors"
            >
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
