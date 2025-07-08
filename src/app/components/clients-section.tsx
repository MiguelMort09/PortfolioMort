"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

const clients = [
  {
    name: "Itec Magistratus",
    industry: "Universidad",
    project: "Refactorización del portal de alumnos",
    description: "Actualización integral de un sistema heredado mediante una refactorización completa. Se reescribió la base de datos y se definió una estructura escalable para optimizar la integridad y el rendimiento. Además, se rediseñó la interfaz con un enfoque moderno utilizando Tailwind CSS, se migró a un nuevo servidor VPS y se implementó un entorno dockerizado para garantizar seguridad, escalabilidad y despliegues eficientes.",
    result: "Sistema estable con mejoras sustanciales en velocidad, estructura y capacidad de evolución",
    tech: ["Laravel", "MySQL", "Node", "Vite", "NGINX", "Docker", "Linux"],
    logo: "/logo_itec.png",
    color: "from-indigo-500 to-sky-500",
  },
  {
    name: "BigPrint",
    industry: "Impresión Comercial",
    project: "Sistema de Gestión a Medida",
    description: "Desarrollo a medida de un sistema de punto de venta y gestión operativa, enfocado a los procesos" +
        " de una imprenta. Incluye gestión de cotizaciones, aprobación de diseño, control de órdenes de producción," +
        " seguimiento del estado de fabricación, sistema de notificaciones via correo   y un expediente detallado por" +
        " cliente con historial de pedidos y almacenamiento centralizado de archivos de diseño para futuras compras.",
    result: "Automatización completa del ciclo de venta y producción, reduciendo tiempos administrativos y optimizando la experiencia del cliente final.",
    tech: ["Laravel", "Livewire", "MySQL"],
    logo: "/Innovart-Logo.png",
    color: "from-orange-500 to-yellow-500",
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
]

export default function ClientsSection() {

  return (
      <section id="clientes" className="py-20 relative clients-bg">
        <div className="w-full container mx-auto relative px-4">
          <header className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              <span className="gradient-text">Clientes</span> y Casos de Éxito
            </h2>
            <p className="text-lg text-muted-foreground">
              Casos de éxito que demuestran el impacto real de las soluciones desarrolladas
            </p>
          </header>

          {/* Carousel Container */}
            <Carousel opts={{
              align: "start",
              loop: true,
            }}>
              <CarouselContent>
                {clients.map((client, index) => (
                    <CarouselItem className="w-full md:basis-1/2 content-center" key={index}>
                      <Card className="group bg-card/50 border-muted hover:border-primary/50 transition-all duration-300 hover-glow backdrop-blur-sm">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className="flex-1 space-y-2">
                              <CardTitle>{client.name}</CardTitle>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">{client.industry}</span>
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
                              <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r ${client.color} rounded-full`}/>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed text-sm">
                              {client.description}
                            </p>
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-primary"/>
                            <span className="text-sm font-semibold text-primary">{client.result}</span>
                          </div>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
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
                    </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
      </section>
  )
}
