import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Rocket, Store, Users, Zap } from 'lucide-react'

const projects = [
  {
    title: "EcommerceFlow",
    description:
        "Plataforma de e-commerce completa con panel administrativo, gestión de inventario y analytics en tiempo real.",
    tech: ["Laravel", "React", "Inertia.js", "Stripe"],
    icon: Store,
    status: "Activo",
    users: "500+ usuarios",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "TaskMaster Pro",
    description:
        "Aplicación de gestión de proyectos con colaboración en tiempo real, notificaciones push y reportes avanzados.",
    tech: ["Laravel", "Livewire", "Alpine.js", "WebSockets"],
    icon: Users,
    status: "En desarrollo",
    users: "Beta testing",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AnalyticsDash",
    description:
        "Dashboard de analytics personalizable con integración a múltiples fuentes de datos y visualizaciones interactivas.",
    tech: ["React", "TypeScript", "Chart.js", "Laravel API"],
    icon: Zap,
    status: "Lanzamiento próximo",
    users: "Pre-registro",
    color: "from-green-500 to-emerald-500",
  },
]

export default function ProjectsSection() {
  return (
      <section id="proyectos" className="py-20 relative projects-bg">
        <div className="w-full mx-auto container relative px-4 space-y-6">
          <header>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Mis <span className="gradient-text">Proyectos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Emprendimientos y aplicaciones que he desarrollado, desde la idea hasta la implementación
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                  <Card
                      key={index}
                      className="group bg-card/50 border-muted hover:border-primary/50 transition-all duration-300 hover-glow backdrop-blur-sm overflow-hidden p-6"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className={`h-12 w-12 p-3 rounded-lg bg-gradient-to-br ${project.color} text-white flex-shrink-0`} />
                      <div className="flex-1">
                        <h3 className="text-xl text-foreground group-hover:text-primary transition-colors font-semibold">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {project.status}
                      </span>
                          <span className="text-xs text-muted-foreground">{project.users}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded border">
                      {tech}
                    </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                        <Github className="h-3 w-3 mr-1" />
                        Código
                      </Button>
                      <Button size="sm" className="flex-1 text-xs bg-primary hover:bg-primary/90">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </Card>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">¿Interesado en colaborar en un proyecto?</p>
            <Button className="bg-primary hover:bg-primary/90 text-background">
              <Rocket className="mr-2 h-4 w-4" />
              Hablemos de tu idea
            </Button>
          </div>
        </div>
      </section>
  )
}
