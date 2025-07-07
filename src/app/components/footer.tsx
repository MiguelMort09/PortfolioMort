import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
  ]

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Email", href: "mailto:contact@mort.dev", icon: Mail },
  ]

  return (
    <footer className="bg-background border-t border-muted">
        <div className="container mx-auto px-4 py-12 ">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-background font-bold">
                M
              </div>
              <span className="text-xl font-bold gradient-text">Mort.dev</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Ingeniero en Tecnologías de Software especializado en desarrollo web moderno. Creando experiencias
              digitales excepcionales con tecnologías de vanguardia.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>México</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@mort.dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+52 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
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

            <div>
              <h4 className="font-medium mb-3 text-foreground">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-3">Recibe tips y actualizaciones sobre desarrollo web</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-3 py-2 text-sm border border-muted rounded-md bg-background text-foreground focus:border-primary focus:outline-none"
                />
                <button className="px-4 py-2 text-sm bg-primary text-background rounded-md hover:bg-primary/90 transition-colors font-medium">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">© {currentYear} Mort.dev. Todos los derechos reservados.</div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Términos de Servicio
            </Link>
            <Link href="/legal" className="hover:text-primary transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
        </div>
    </footer>
  )
}
