"use client";

import { Card } from "@/components/ui/card";
import { Heart, Music, Gamepad2, Coffee, UtensilsCrossed, Plane } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const personalInterests = [
  { icon: Music, title: "Música", description: "Disfruto de escuchar Blues, Rock Alternativo, Trap, Rap Latino y Regional" },
  { icon: Plane, title: "Viajes", description: "Me encanta conocer playas y destinos con historia y cultura" },
  { icon: Gamepad2, title: "Gaming", description: "Fan de los shooters y carreras, siempre explorando nuevos juegos" },
  { icon: UtensilsCrossed, title: "Cocina", description: "Me gusta cocinar en fechas especiales para mi familia y personas cercanas" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, ease: "easeOut", duration: 0.4 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
      <motion.section
          id="sobre-mi"
          className="py-20 bg-muted/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
      >
        <div className="w-full lg:max-w-7xl mx-auto container px-4">
          <motion.div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Foto Personal */}
            <motion.div className="relative mx-auto w-72 h-72 lg:w-96 lg:h-96 profile-container" variants={itemVariants}>
              <Image
                  src="/profile.jpg"
                  width={400}
                  height={400}
                  alt="Mort - Desarrollador"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl shadow-primary/10 relative z-10"
              />
              <Coffee className="absolute -top-4 -right-4 w-12 h-12 p-3 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full text-white animate-bounce z-20" />
              <Heart className="absolute -bottom-4 -left-4 w-10 h-10 p-2 bg-gradient-to-br from-amber-500 to-emerald-500 rounded-full text-white animate-pulse z-20" />
            </motion.div>

            {/* Contenido Personal */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Más allá del <span className="gradient-text">código</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full mb-6" />

              <p className="text-muted-foreground leading-relaxed mb-4">
                ¡Hola! Soy <span className="text-primary font-semibold">Miguel Uicab</span>, pero mis amigos me llaman{" "}
                <span className="text-primary font-semibold">Mort</span>. Soy un apasionado del automovilismo y el boxeo,
                deportes que me han enseñado que, aunque son individuales, el éxito siempre depende del trabajo realizado en equipo.
                Esta mentalidad la aplico tanto en mi vida personal como profesional, buscando siempre la superación y el desarrollo constante de mis habilidades.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <span className="text-primary font-semibold">Fun fact:</span> Soy coleccionista de Funko Pops de Fórmula 1 y un entusiasta del whisky,
                dos pasiones que disfruto en mis momentos libres.
              </p>

              {/* Grid intereses sin motion en cada item para reducir DOM */}
              <div className="grid gap-4 sm:grid-cols-2 pt-4">
                {personalInterests.map(({ icon: Icon, title, description }, idx) => (
                    <Card
                        key={idx}
                        className="bg-card/30 border-muted/50 hover:border-primary/30 transition-all duration-300 p-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-4 w-4 text-primary p-0.5 bg-primary/10 rounded-lg box-content" />
                        <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                    </Card>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20 mt-8 text-center">
                <p className="text-foreground italic">
                  Simplicity is key; true progress is not measured by effort, but by finding the most efficient way to achieve it.
                </p>
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">— Mi filosofía personal</cite>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
  );
}
