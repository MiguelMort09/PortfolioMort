"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const clients = [
  {
    name: "Itec Magistratus",
    industry: "Universidad",
    project: "Refactorización del portal de alumnos",
    description:
      "Actualización integral de un sistema heredado mediante una refactorización completa. Se reescribió la base de datos y se definió una estructura escalable para optimizar la integridad y el rendimiento. Además, se rediseñó la interfaz con un enfoque moderno utilizando Tailwind CSS, se migró a un nuevo servidor VPS y se implementó un entorno dockerizado para garantizar seguridad, escalabilidad y despliegues eficientes.",
    result: "80% menos de tickets de usuario",
    tech: ["Laravel", "MySQL", "Node", "Vite", "NGINX", "Docker", "Linux"],
    logo: "/logo_itec.png",
    color: "from-indigo-500 to-sky-500",
  },
  {
    name: "BigPrint",
    industry: "Impresión Comercial",
    project: "Sistema de Gestión a Medida",
    description:
      "Desarrollo a medida de un sistema de punto de venta y gestión operativa, enfocado a los procesos de una imprenta. Incluye gestión de cotizaciones, aprobación de diseño, control de órdenes de producción, seguimiento del estado de fabricación, sistema de notificaciones vía correo y un expediente detallado por cliente con historial de pedidos y almacenamiento centralizado de archivos de diseño para futuras compras.",
    result: "-30% en tiempos de entrega",
    tech: ["Laravel", "Livewire", "MySQL"],
    logo: "/Innovart-Logo.png",
    color: "from-orange-500 to-yellow-500",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="clientes"
      className="py-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="w-full container max-w-fit content-center">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          variants={cardVariants}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="gradient-text">Clientes</span> y Casos de Éxito
          </h2>
          <p className="text-lg text-muted-foreground">
            Casos de éxito que demuestran el impacto real de las soluciones
            desarrolladas
          </p>
        </motion.div>

        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 10000 })]}
          className="max-w-2/3 mx-auto"
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem className="md:basis-1/2 content-center" key={index}>
                <motion.div variants={cardVariants}>
                  <Card className="group bg-card/50 border-muted hover:border-primary/50 transition-all duration-300 hover-glow backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row items-center gap-4">
                        <div className="flex-1 space-y-2">
                          <CardTitle>{client.name}</CardTitle>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {client.industry}
                            </span>
                            <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                              {client.project}
                            </span>
                          </div>
                        </div>
                        <div className="relative">
                          <Image
                            src={client.logo || "/placeholder.svg"}
                            alt={client.name}
                            width={100}
                            height={100}
                            className="w-auto h-12 object-cover border border-muted"
                          />
                          <div
                            className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r ${client.color} rounded-full`}
                          />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-center text-muted-foreground leading-relaxed text-xs lg:text-sm">
                        {client.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <Star className="h-10 w-10 text-primary" />
                        <span className="text-xs lg:text-sm font-semibold text-primary">
                          {client.result}
                        </span>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex justify-center flex-wrap gap-2 mb-4">
                        {client.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.section>
  );
}
