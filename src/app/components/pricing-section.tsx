import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Plan Básico",
    price: "$2,500",
    description: "Página informativa estática perfecta para startups",
    features: [
      "Diseño responsivo moderno",
      "Optimización SEO básica",
      "Formulario de contacto",
      "Integración redes sociales",
      "3 meses de soporte",
      "Documentación completa",
    ],
    popular: false,
  },
  {
    name: "Plan Avanzado",
    price: "$5,000",
    description: "Web dinámica con panel administrativo completo",
    features: [
      "Todo del plan básico",
      "Panel de administración",
      "Base de datos dinámica",
      "Sistema de usuarios",
      "API RESTful",
      "6 meses de soporte",
      "Capacitación incluida",
    ],
    popular: true,
  },
  {
    name: "Plan Premium",
    price: "$10,000",
    description: "Desarrollo fullstack completo y escalable",
    features: [
      "Todo del plan avanzado",
      "Arquitectura escalable",
      "Integración servicios externos",
      "Testing automatizado",
      "CI/CD pipeline",
      "12 meses de soporte",
      "Consultoría técnica",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="planes" className="py-20 relative">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="gradient-text">Planes</span> de Servicio
          </h2>
          <p className="text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a las necesidades de tu proyecto
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group bg-card/50 border-muted hover:border-primary/50 transition-all duration-300 backdrop-blur-sm ${
                plan.popular
                  ? "border-primary/50 shadow-lg shadow-primary/10 scale-105"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1.5 text-sm font-medium text-background">
                    <Star className="h-4 w-4" />
                    Más Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-foreground">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground"> USD</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-background"
                      : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-background"
                  }`}
                  size="lg"
                >
                  Solicitar Cotización
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
