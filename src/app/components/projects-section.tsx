'use client'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {ExternalLink, Github, Rocket, University, Users, Zap} from 'lucide-react'

const projects = [
  {
    title: "Sayci",
    description: "Plataforma web para la gestión integral de alumnos, carreras y procesos académicos universitarios.",
    tech: ["Laravel", "Livewire", "Tailwind CSS", "Docker", "NGINX"],
    icon: University,          // Cambia Store por University (o el icono que prefieras)
    status: "Activo",
    users: "Más de 200 usuarios",  // Modificado para mayor alcance
    color: "from-purple-600 to-indigo-500",  // Nuevo degradado de color
    projectPrivate: true,
    codePublic: false,
    urlDemo: null
  },
  {
    title: "KOVAYA'S POS",
    description: "Aplicación de punto de venta con gestión de inventarios, ventas y reportes en tiempo real, optimizada para flujo rápido en comercios.",
    tech: ["Laravel", "Livewire", "Alpine.js", "WebSockets"],
    icon: Users,
    status: "En fase piloto",
    users: "10 negocios activos",
    color: "from-purple-500 to-pink-500",
    projectPrivate: false,
    codePublic: false,
    urlDemo: 'https://app-pos.kovaya.com.mx'
  },
  {
    title: "KOVAYA'S GYM",
    description: "Dashboard analytics personalizable para gimnasios con seguimiento de membresías, asistencia y métricas de rendimiento.",
    tech: ["React", "TypeScript", "Chart.js", "Laravel API"],
    icon: Zap,
    status: "En fase piloto",
    users: "7 gimnasios en uso",
    color: "from-green-500 to-emerald-500",
    projectPrivate: false,
    codePublic: false,
    urlDemo: 'https://app-gym.kovaya.com.mx'
  }


]

export default function ProjectsSection() {
  return (
      <section id="proyectos" className="py-20 relative projects-bg">
        <div className="w-full mx-auto container relative px-4 space-y-6">
          <header>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Proyectos <span className="gradient-text">Destacados</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Una selección de proyectos y aplicaciones sobresalientes que he desarrollado para clientes y como iniciativas propias.
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
                      {project.projectPrivate ? (
                          <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 text-xs cursor-not-allowed"
                              disabled
                              title="Proyecto privado"
                          >
                            <Github className="h-3 w-3 mr-1 opacity-50" />
                            Proyecto privado
                          </Button>
                      ) : (
                          <>
                            {project.codePublic && (
                                <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                                  <Github className="h-3 w-3 mr-1" />
                                  Código
                                </Button>
                            )}

                            {project.urlDemo && (
                                <Button
                                    size="sm"
                                    className="flex-1 text-xs bg-primary hover:bg-primary/90"
                                    onClick={() => window.open(project.urlDemo, "_blank")}
                                >
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  Visitar sitio
                                </Button>
                            )}
                          </>
                      )}
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
