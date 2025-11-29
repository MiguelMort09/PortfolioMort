"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TechStack from "@/app/components/partials/tech-stack";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <motion.section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.div className="space-y-6 sm:space-y-8" variants={containerVariants}>
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center rounded-full glass-effect px-4 py-2 text-sm font-medium"
          >
            <div className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
            Disponible para nuevos proyectos
          </motion.div>

          {/* Personal Introduction */}
          <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
            <p className="text-base sm:text-lg text-muted-foreground">Hola, soy</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Miguel Uicab</span>
            </h1>
          </motion.div>

          {/* Role & Expertise */}
          <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Desarrollador Web <span className="gradient-text">Fullstack</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Ingeniero en Tecnologías de Software especializado en{" "}
              <span className="text-primary font-semibold">Laravel </span>y tecnologías modernas como{" "}
              <span className="text-primary font-semibold">React</span>. Desarrollador orientado a crear soluciones web
              modernas, escalables y optimizadas.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Button
              size="lg"
              asChild
              className="text-base bg-primary hover:bg-primary/90 text-background font-semibold hover-glow"
            >
              <Link href="#proyectos">
                Ver Portafolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base border-muted hover:border-primary hover:text-primary bg-transparent"
            >
              <Link href="#contacto">Hablemos</Link>
            </Button>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants}>
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              Tecnologías principales:
            </p>
            <TechStack />
          </motion.div>
        </motion.div>

        {/* Terminal Component */}
        <motion.div
          className="order-first lg:order-last content-center"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-md mx-auto lg:max-w-none terminal-container">
            <div className="bg-card border rounded-2xl p-4 sm:p-6 shadow-2xl relative z-10">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  ~/mort/projects
                </div>
              </div>

              {/* Terminal Content */}
              <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
                <div className="text-green-400">$ whoami</div>
                <div className="text-blue-400">miguel-uicab (mort)</div>
                <div className="text-green-400 mt-3 sm:mt-4">
                  $ cat profile.json
                </div>
                <div className="pl-2 text-gray-600">{"{"}</div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-orange-400">&quot;name&quot;</span>:{" "}
                  <span className="text-yellow-400">
                    &quot;Miguel Uicab&quot;
                  </span>
                  ,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-orange-400">&quot;alias&quot;</span>:{" "}
                  <span className="text-yellow-400">&quot;mort&quot;</span>,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-orange-400">&quot;role&quot;</span>:{" "}
                  <span className="text-yellow-400">
                    &quot;Fullstack Developer&quot;
                  </span>
                  ,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-orange-400">&quot;backend&quot;</span>:{" "}
                  <span className="text-green-400">
                    [&quot;Laravel&quot;, &quot;PHP&quot;]
                  </span>
                  ,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-orange-400">&quot;frontend&quot;</span>:{" "}
                  <span className="text-green-400">
                    [&quot;React&quot;, &quot;Livewire&quot;,
                    &quot;Vue.js&quot;, &quot;JavaScript&quot;]
                  </span>
                  ,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-orange-400">&quot;devops&quot;</span>:{" "}
                  <span className="text-green-400">
                    [&quot;Docker&quot;, &quot;Ubuntu&quot;, &quot;Nginx&quot;,
                    &quot;Cloudflare&quot;]
                  </span>
                  ,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-orange-400">&quot;passion&quot;</span>:{" "}
                  <span className="text-yellow-400">
                    &quot;building amazing apps&quot;
                  </span>
                </div>
                <div className="pl-2 text-gray-600">{"}"}</div>
                <div className="text-green-400 mt-3 sm:mt-4">$ _</div>
              </div>
            </div>
            {/* Floating Tech Cards */}
            <div className="floating-card floating-card-react hidden sm:block">
              React.js
            </div>
            <div className="floating-card floating-card-laravel hidden sm:block">
              Laravel
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </motion.section>
  );
}
