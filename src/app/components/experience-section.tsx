"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Building, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

const experiences = [
  {
    company: "FREELANCE / INDEPENDIENTE",
    position: "Full Stack Developer & Consultant",
    period: "2021 - Presente",
    location: "Remoto",
    description:
      "Diseño y desarrollo de soluciones de software a medida para clientes internacionales y locales. Especialización en la digitalización de procesos de negocio mediante aplicaciones web personalizadas (ERPs, CRMs, POS). Gestión integral de proyectos, desde la toma de requerimientos hasta el despliegue y mantenimiento en servidores cloud (VPS).",
    achievements: [
      "Desarrollo de ecosistema 'Kovaya' (Punto de Venta y Gestión de Gimnasios).",
      "Implementación de plataforma educativa 'Sayci' para gestión universitaria.",
      "Arquitectura de sistemas escalables con Laravel, React y Docker.",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    company: "SAHURO CONSULTING",
    position: "Full Stack Developer",
    period: "Nov 2023 - Mar 2024",
    location: "Remoto",
    description:
      "Desarrollo y mantenimiento de aplicaciones web escalables utilizando Laravel y React. Implementación de APIs RESTful para la integración de sistemas externos y optimización de consultas a bases de datos MySQL para mejorar el rendimiento. Colaboración en un entorno ágil (Scrum) gestionado a través de Azure DevOps.",
    achievements: [
      "Reducción del 30% en tiempos de carga mediante optimización de queries.",
      "Implementación de módulos de facturación electrónica.",
      "Integración exitosa con SAP para sincronización de datos.",
    ],
    color: "from-blue-600 to-indigo-600",
  },
  {
    company: "JUNKYARD MEXICO",
    position: "Laravel Developer",
    period: "Nov 2023 - Feb 2024",
    location: "Remoto",
    description:
      "Ingeniería de backend para sistemas de gestión de inventarios (CMDB). Diseño de arquitectura de microservicios utilizando Docker y despliegue en servidores Linux. Mantenimiento de código legacy y migración gradual a versiones modernas de Laravel.",
    achievements: [
      "Migración exitosa de sistema legacy a Laravel 10.",
      "Containerización de entornos de desarrollo con Docker.",
      "Automatización de reportes diarios reduciendo carga manual.",
    ],
    color: "from-purple-600 to-pink-600",
  },
  {
    company: "GRUPO ICARUS",
    position: "Full Stack Developer",
    period: "Jul 2022 - Nov 2023",
    location: "Campeche, México",
    description:
      "Desarrollo full stack de soluciones a medida para clientes corporativos. Liderazgo técnico en proyectos de e-commerce y sistemas administrativos. Gestión de ciclo completo de desarrollo desde la toma de requerimientos hasta el despliegue en producción.",
    achievements: [
      "Desarrollo de pasarela de pagos personalizada.",
      "Implementación de sistema de tickets para soporte técnico.",
      "Mentoria a desarrolladores junior en buenas prácticas.",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
};

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 bg-muted/20 overflow-hidden">
      <div className="container px-4 mx-auto lg:max-w-4xl text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Mi <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trayectoria profesional construyendo soluciones web innovadoras
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Línea timeline animada */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <motion.div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
              >
                {/* Timeline dot animado */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-primary/50"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.2,
                  }}
                />

                {/* Contenido */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 pl-12" : "md:pl-12 pl-12"
                    }`}
                >
                  <Card className="bg-card/50 border-muted hover:border-primary/50 transition-all duration-300 hover-glow overflow-hidden backdrop-blur-sm group">
                    <div className={`absolute top-0 w-1 h-full bg-gradient-to-b ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-0 ${index % 2 === 0 ? 'md:left-auto md:right-0' : ''}`} />
                    <CardContent className="p-6 relative">
                      <div className="mb-4">
                        <div
                          className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-xs font-medium mb-3 shadow-md`}
                        >
                          {exp.period}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
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

                      <p className="text-muted-foreground mb-4 leading-relaxed text-left">
                        {exp.description}
                      </p>

                      {/* Render sólo si hay logros */}
                      {exp.achievements.length > 0 && (
                        <div className="text-left">
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Logros destacados:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
