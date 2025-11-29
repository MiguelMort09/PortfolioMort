"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStart",
    content:
      "Mort transformó nuestra visión en una aplicación de alto nivel. Profesionalismo y atención al detalle inmejorables.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Carlos Ruiz",
    role: "CTO, InnovateLab",
    content:
      "Excelente experiencia técnica y comunicación constante durante todo el proyecto. Superó nuestras expectativas.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-muted/20">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Lo que dicen mis <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Testimonios reales de empresas que han confiado en mi trabajo
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative bg-card/50 border-muted hover:border-primary/50 transition-all duration-300 hover-glow backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating || 0)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <blockquote className="text-foreground mb-6 leading-relaxed text-lg">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
