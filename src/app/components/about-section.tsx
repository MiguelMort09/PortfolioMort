"use client"

import { Card } from "@/components/ui/card"
import { Heart, Music, Gamepad2, Coffee, UtensilsCrossed, Plane } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const personalInterests = [
  {
    icon: Music,
    title: "Música",
    description: "Disfruto de escuchar Blues, Rock Alternativo, Trap, Rap Latino y Regional",
  },
  {
    icon: Plane,
    title: "Viajes",
    description: "Me encanta conocer playas y destinos con historia y cultura",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Fan de los shooters y carreras, siempre explorando nuevos juegos",
  },
  {
    icon: UtensilsCrossed,
    title: "Cocina",
    description: "Me gusta cocinar en fechas especiales para mi familia y personas cercanas",
  },
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const current = sectionRef.current;

    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.2 }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);


  return (
      <section id="sobre-mi" ref={sectionRef} className="py-20 bg-muted/20">
        <div className="w-full lg:max-w-7xl mx-auto container px-4">
          <div
              className={`grid gap-8 lg:grid-cols-2 items-center transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Personal Photo - Simplified Structure */}
            <div className="relative mx-auto size-28 lg:w-96 lg:h-96 profile-container">
              <Image
                  src="/profile.jpg"
                  width={400}
                  height={400}
                  alt="Mort - Desarrollador"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl shadow-primary/10 relative z-10"
              />

              {/* Floating Icons - Simplified */}
              <Coffee className="absolute -top-4 -right-4 w-12 h-12 p-3 bg-gradient-to-br from-primary to-secondary rounded-full text-white animate-bounce z-20" />
              <Heart className="absolute -bottom-4 -left-4 w-10 h-10 p-2 bg-gradient-to-br from-secondary to-primary rounded-full text-white animate-pulse z-20" />
            </div>

            {/* Personal Content */}
            <div className="space-y-6">
              <header>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Más allá del <span className="gradient-text">código</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />
              </header>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ¡Hola! Soy <span className="text-primary font-semibold">Miguel Uicab</span>, pero mis amigos me llaman{" "}
                  <span className="text-primary font-semibold">Mort</span> soy un apasionado del automovilismo y el boxeo,
                  deportes que me han enseñado que, aunque son individuales, el éxito siempre depende del trabajo
                  realizado en equipo. Esta mentalidad la aplico tanto en mi vida personal como profesional, buscando
                  siempre la superación y el desarrollo constante de mis habilidades.
                </p>
                <p>
                  <span className="text-primary font-semibold">Fun fact:</span> Soy coleccionista de Funko Pops de Fórmula
                  1 y un entusiasta del whisky, dos pasiones que disfruto en mis momentos libres.
                </p>
              </div>

              {/* Personal Interests - Simplified Cards */}
              <div className="grid gap-4 sm:grid-cols-2 pt-4">
                {personalInterests.map((interest, index) => {
                  const Icon = interest.icon
                  return (
                      <Card
                          key={index}
                          className="bg-card/30 border-muted/50 hover:border-primary/30 transition-all duration-300 p-4"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="h-4 w-4 text-primary p-0.5 bg-primary/10 rounded-lg box-content" />
                          <h3 className="font-semibold text-foreground text-sm">{interest.title}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{interest.description}</p>
                      </Card>
                  )
                })}
              </div>

              {/* Personal Quote - Simplified */}
              <blockquote className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20 mt-8 text-center">
                <p className="text-foreground italic">
                  Simplicity is key; true progress is not measured by effort, but by finding the most efficient way to
                  achieve it.
                </p>
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">— Mi filosofía personal</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
  )
}
