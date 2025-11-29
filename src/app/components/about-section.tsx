"use client";

import { Card } from "@/components/ui/card";
import {
  Heart,
  Music,
  Gamepad2,
  Coffee,
  UtensilsCrossed,
  Plane,
} from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const personalInterests = [
  {
    icon: Music,
    title: "Música",

    description:
      "Disfruto de escuchar Blues, Rock Alternativo, Trap, Rap Latino y Regional",
  },
  {
    icon: Plane,
    title: "Viajes",
    description: "Me encanta conocer playas y destinos con historia y cultura",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "Fan de los shooters y carreras, siempre explorando nuevos juegos",
  },
  {
    icon: UtensilsCrossed,
    title: "Cocina",
    description:
      "Me gusta cocinar en fechas especiales para mi familia y personas cercanas",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.25, ease: "easeOut", duration: 0.4 },
  },
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
      <div className="w-full lg:max-w-7xl mx-auto container px-4 sm:px-6 lg:px-8">
        <motion.div className="grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Foto Personal */}
          <motion.div
            className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 profile-container"
            variants={itemVariants}
          >
            {/* Fondo decorativo con patrón de puntos */}
            <div className="absolute inset-0 -z-20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-3xl" />
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                color: 'var(--primary)'
              }} />
            </div>

            {/* Anillos decorativos */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/10 -z-10 scale-110 animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 rounded-full border border-secondary/10 -z-10 scale-125 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />

            <Image
              src="/profile.jpg"
              width={400}
              height={400}
              alt="Mort - Desarrollador"
              className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl shadow-primary/10 relative z-10"
            />

            {/* Íconos flotantes con mejor distribución y colores temáticos */}

            {/* Café - Top Right */}
            <div className="absolute -top-6 -right-6 w-14 h-14 p-3 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full text-white z-20 shadow-xl shadow-amber-600/60 animate-bounce hover:scale-110 transition-transform" style={{ animationDuration: '2s' }}>
              <Coffee className="w-full h-full" />
            </div>

            {/* F1/Racing - Top Left */}
            <div className="absolute -top-6 -left-6 w-14 h-14 p-3 bg-gradient-to-br from-red-600 to-rose-700 rounded-full text-white z-20 shadow-xl shadow-red-600/60 animate-pulse hover:scale-110 transition-transform" style={{ animationDuration: '2.5s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>

            {/* Boxeo - Left */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-12 h-12 p-2.5 bg-gradient-to-br from-slate-700 to-zinc-900 rounded-full text-white z-20 shadow-xl shadow-slate-700/60 animate-bounce hover:scale-110 transition-transform" style={{ animationDuration: '2.2s', animationDelay: '0.3s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
              </svg>
            </div>

            {/* Música - Right */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-12 h-12 p-2.5 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full text-white z-20 shadow-xl shadow-emerald-600/60 animate-pulse hover:scale-110 transition-transform" style={{ animationDuration: '2.8s', animationDelay: '0.5s' }}>
              <Music className="w-full h-full" />
            </div>

            {/* Gaming - Bottom Right */}
            <div className="absolute -bottom-6 -right-6 w-13 h-13 p-3 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full text-white z-20 shadow-xl shadow-purple-600/60 animate-bounce hover:scale-110 transition-transform" style={{ animationDuration: '2.3s', animationDelay: '0.2s' }}>
              <Gamepad2 className="w-full h-full" />
            </div>

            {/* Whisky - Bottom Left */}
            <div className="absolute -bottom-6 -left-6 w-13 h-13 p-3 bg-gradient-to-br from-orange-700 to-amber-900 rounded-full text-white z-20 shadow-xl shadow-orange-700/60 animate-pulse hover:scale-110 transition-transform" style={{ animationDuration: '3s', animationDelay: '0.4s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
            </div>

            {/* Viajes - Top Center Right */}
            <div className="absolute top-8 -right-10 w-11 h-11 p-2.5 bg-gradient-to-br from-sky-600 to-blue-700 rounded-full text-white z-20 shadow-xl shadow-sky-600/60 animate-bounce hover:scale-110 transition-transform" style={{ animationDuration: '2.6s', animationDelay: '0.6s' }}>
              <Plane className="w-full h-full" />
            </div>

            {/* Corazón/Pasión - Bottom Center Left */}
            <div className="absolute bottom-8 -left-10 w-11 h-11 p-2.5 bg-gradient-to-br from-pink-600 to-rose-700 rounded-full text-white z-20 shadow-xl shadow-pink-600/60 animate-pulse hover:scale-110 transition-transform" style={{ animationDuration: '2.4s', animationDelay: '0.7s' }}>
              <Heart className="w-full h-full" />
            </div>
          </motion.div>

          {/* Contenido Personal */}
          <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-center lg:text-left">
              Más allá del <span className="gradient-text">código</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-center lg:text-left">
              ¡Hola! Soy <span className="text-primary font-semibold">Miguel Uicab</span>, pero mis amigos me llaman{" "}
              <span className="text-primary font-semibold">Mort</span>. Soy un apasionado del automovilismo y el boxeo,
              deportes que me han enseñado que, aunque son individuales, el éxito siempre depende del trabajo realizado en equipo.
              Esta mentalidad la aplico tanto en mi vida personal como profesional, buscando siempre la superación y el desarrollo constante de mis habilidades.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-center lg:text-left">
              <span className="text-primary font-semibold">Fun fact:</span> Soy coleccionista de Funko Pops de Fórmula 1 y un entusiasta del whisky,
              dos pasiones que disfruto en mis momentos libres.
            </p>

            {/* Grid intereses y educación */}
            <div className="grid gap-4 sm:grid-cols-2 pt-4">
              {personalInterests.map(
                ({ icon: Icon, title, description }, idx) => (
                  <Card
                    key={idx}
                    className="bg-card/30 border-muted/50 hover:border-primary/30 transition-all duration-300 p-4"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-4 w-4 text-primary p-0.5 bg-primary/10 rounded-lg box-content" />
                      <h3 className="font-semibold text-foreground text-sm">
                        {title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </Card>
                ),
              )}
            </div>

            {/* Quote */}
            <blockquote className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20 mt-8 text-center">
              <p className="text-foreground italic">
                Simplicity is key; true progress is not measured by effort, but
                by finding the most efficient way to achieve it.
              </p>
              <cite className="block mt-2 text-sm text-muted-foreground not-italic">
                — Mi filosofía personal
              </cite>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
