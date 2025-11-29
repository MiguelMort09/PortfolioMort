"use client";

import { Card } from "@/components/ui/card";
import { Code, Database, Zap, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: Database,
    title: "Desarrollo backend con Laravel",
    description:
      "APIs RESTful seguras y escalables con arquitectura robusta y mejores prácticas.",
    features: [
      "APIs RESTful",
      "Eloquent ORM",
      "Autenticación JWT",
      "Migraciones BD",
    ],
  },
  {
    icon: Zap,
    title: "Frontend interactivo con Livewire e Inertia",
    description:
      "Interacción fluida sin sacrificar el control del backend, experiencia SPA moderna.",
    features: [
      "Componentes reactivos",
      "Validación tiempo real",
      "SPA experience",
      "Server-side rendering",
    ],
  },
  {
    icon: Code,
    title: "Aplicaciones SPA con React y React Router",
    description:
      "Navegación instantánea y experiencia moderna con las últimas tecnologías frontend.",
    features: [
      "React 18+",
      "TypeScript",
      "State management",
      "Responsive design",
    ],
  },
  {
    icon: Rocket,
    title: "Optimización y despliegue continuo",
    description:
      "Pipeline CI/CD, entornos staging y producción con monitoreo y optimización constante.",
    features: [
      "Docker containers",
      "GitHub Actions",
      "Performance optimization",
      "Monitoring",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
      ease: [0.77, 0, 0.175, 1],
      duration: 0.6,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <motion.section
      id="servicios"
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="w-full mx-auto container relative px-4">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="gradient-text">Servicios</span> Especializados
          </h2>
          <p className="text-lg text-muted-foreground">
            Desarrollo completo de aplicaciones web modernas con tecnologías de
            vanguardia
          </p>
        </header>

        {/* Services Grid */}
        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={cardVariants} className="group">
                <Card className="bg-card/50 border-muted hover:border-primary/50 transition-all duration-300 hover-glow backdrop-blur-sm p-6">
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <Icon className="h-12 w-12 p-3 text-primary bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-lg flex-shrink-0" />
                    <div>
                      <h3 className="text-xl text-foreground group-hover:text-primary transition-colors font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="grid lg:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="mr-3 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
