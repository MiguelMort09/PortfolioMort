import { Card, CardContent } from "@/components/ui/card"
import { Building, MapPin } from "lucide-react"

const experiences = [
  {
    company: "SAHURO CONSULTING",
    position: "Full Stack Developer",
    period: "2023-11-20 - 2024-03-31",
    location: "Remoto",
    description:
        "Consultoría en desarrollo de aplicaciones web con servicios REST API para empresa multinacional. Uso de Azure DevOps bajo Scrum para gestión de proyectos. Administración de servicios intranet, integración con SAP y desarrollo móvil con Apache Cordova, garantizando soluciones completas y eficientes.",
    achievements: [],
    color: "from-blue-600 to-indigo-600",
  },
  {
    company: "JUNKYARD MEXICO",
    position: "Laravel Developer",
    period: "2023-11-27 - 2024-02-29",
    location: "Remoto",
    description:
        "Participé en el desarrollo de aplicación CMDB con Laravel, docker, REST APIs y MySQL. Colaboré en la migración del sistema productivo asegurando continuidad operativa. Trabajo en equipo multicultural con Azure DevOps y Slack, fortaleciendo habilidades técnicas y colaboración internacional.",
    achievements: [],
    color: "from-purple-600 to-pink-600",
  },
  {
    company: "GRUPO ICARUS S.A. DE C.V",
    position: "Full Stack Developer",
    period: "2022-07-18 - 2023-11-15",
    location: "Presencial ",
    description:
        "Desarrollo de aplicaciones web personalizadas en PHP (legacy y moderno). Implementación de pasarelas de pago, facturación electrónica vía API y reportes con JasperReports. Participación en planeación y desarrollo bajo Scrum. Optimización, dockerización y resolución de tickets para mejora continua.",
    achievements: [],
    color: "from-green-500 to-emerald-500",
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
                                <div className="flex-1 flex items-center gap-1">
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
