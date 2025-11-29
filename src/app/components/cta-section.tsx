"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-muted/20 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            ¿Listo para lanzar tu proyecto con{" "}
            <span className="gradient-text">tecnología moderna</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Trabajemos juntos para crear la aplicación web que tu negocio
            necesita. Con Laravel, React y las mejores prácticas de desarrollo.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {[
            { label: "Proyectos Completados", value: "10+" },
            { label: "Satisfacción del Cliente", value: "90%" },
            { label: "Tiempo de Respuesta", value: "24h" },
          ].map(({ label, value }, i) => (
            <motion.div
              key={i}
              className="group cursor-default"
              variants={fadeUpVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                className="text-3xl font-bold gradient-text mb-2"
                variants={scaleHoverVariants}
              >
                {value}
              </motion.div>
              <div className="text-muted-foreground">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
