import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"
import Image from "next/image";

const clients = [
  {
    name: "FinanceFlow",
    industry: "Fintech",
    project: "Plataforma de gestión financiera",
    description: "Dashboard completo para análisis financiero con integración bancaria y reportes automatizados.",
    result: "Reducción del 60% en tiempo de procesamiento",
    tech: ["Laravel", "React", "Chart.js"],
    logo: "/placeholder.svg?height=60&width=60",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "EduTech Pro",
    industry: "Educación",
    project: "LMS personalizado",
    description: "Sistema de gestión de aprendizaje con videoconferencias, evaluaciones y seguimiento de progreso.",
    result: "10,000+ estudiantes activos",
    tech: ["Laravel", "Livewire", "WebRTC"],
    logo: "/placeholder.svg?height=60&width=60",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "RetailMax",
    industry: "E-commerce",
    project: "Marketplace B2B",
    description: "Plataforma de comercio electrónico para mayoristas con gestión de inventario multi-almacén.",
    result: "$2M+ en transacciones mensuales",
    tech: ["Laravel", "React", "Stripe"],
    logo: "/placeholder.svg?height=60&width=60",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "HealthCare+",
    industry: "Salud",
    project: "Sistema de citas médicas",
    description: "Aplicación para gestión de citas, historiales médicos y telemedicina con alta seguridad.",
    result: "99.9% de disponibilidad",
    tech: ["Laravel", "Inertia.js", "HIPAA"],
    logo: "/placeholder.svg?height=60&width=60",
    color: "from-red-500 to-orange-500",
  },
]

export default function ClientsSection() {
  return (
      <section id="clientes" className="py-20 relative clients-bg">
        <div className="container relative px-4">
          <header className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              <span className="gradient-text">Clientes</span> y Proyectos
            </h2>
            <p className="text-lg text-muted-foreground">
              Casos de éxito que demuestran el impacto real de las soluciones desarrolladas
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {clients.map((client, index) => (
                <Card
                    key={index}
                    className="group bg-card/50 border-muted hover:border-primary/50 transition-all duration-300 hover-glow backdrop-blur-sm overflow-hidden p-6"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          className="w-12 h-12 rounded-lg object-cover border border-muted"
                      />
                      <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r ${client.color} rounded-full`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {client.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{client.industry}</span>
                        <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                      {client.project}
                    </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{client.description}</p>

                  {/* Result */}
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{client.result}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {client.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded border">
                    {tech}
                  </span>
                    ))}
                  </div>

                  {/* Action */}
                  <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs group-hover:border-primary group-hover:text-primary bg-transparent"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Ver caso de estudio
                  </Button>
                </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Proyectos Entregados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Proyectos a Tiempo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Tiempo de Respuesta</div>
            </div>
          </div>
        </div>
      </section>
  )
}
