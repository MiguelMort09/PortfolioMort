import { Card, CardContent } from "@/components/ui/card"
import { Building, MapPin } from "lucide-react"

const experiences = [
  {
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    period: "2022 - Presente",
    location: "Remoto",
    description:
      "Liderazgo técnico en el desarrollo de aplicaciones empresariales con Laravel y React. Implementación de arquitecturas escalables y mentoring a desarrolladores junior.",
    achievements: [
      "Reducción del 40% en tiempo de carga de aplicaciones",
      "Implementación de CI/CD que mejoró la productividad del equipo",
      "Migración exitosa de sistema legacy a arquitectura moderna",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    company: "StartupLab",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    location: "Ciudad de México",
    description:
      "Desarrollo de MVPs y productos digitales para startups. Trabajo directo con fundadores para materializar ideas innovadoras en aplicaciones funcionales.",
    achievements: [
      "Desarrollo de 8+ aplicaciones web desde cero",
      "Integración con APIs de terceros y servicios de pago",
      "Optimización SEO que incrementó tráfico orgánico 200%",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    company: "Digital Agency Pro",
    position: "Frontend Developer",
    period: "2019 - 2020",
    location: "Guadalajara",
    description:
      "Especialización en interfaces de usuario modernas y experiencias web interactivas. Colaboración estrecha con diseñadores UX/UI.",
    achievements: [
      "Desarrollo de 15+ sitios web responsivos",
      "Implementación de animaciones y micro-interacciones",
      "Mejora de métricas de usabilidad en 60%",
    ],
    color: "from-green-500 to-teal-500",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 bg-muted/20">
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Mi <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trayectoria profesional construyendo soluciones web innovadoras
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1.5 md:-translate-x-1.5 z-10 shadow-lg shadow-primary/50"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                    <Card className="bg-card/50 border-muted hover:border-primary/50 transition-all duration-300 hover-glow backdrop-blur-sm">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <div
                            className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-xs font-medium mb-3`}
                          >
                            {exp.period}
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.position}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Logros destacados:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
