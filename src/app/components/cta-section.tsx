import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-br from-muted/50 to-muted/20 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center relative px-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                        ¿Listo para lanzar tu proyecto con <span className="gradient-text">tecnología moderna</span>?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                        Trabajemos juntos para crear la aplicación web que tu negocio necesita. Con Laravel, React y las mejores
                        prácticas de desarrollo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            size="lg"
                            asChild
                            className="text-base bg-primary hover:bg-primary/90 text-background font-semibold hover-glow"
                        >
                            <Link href="#contacto">
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Hablemos Hoy
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            asChild
                            className="text-base border-primary text-primary hover:bg-primary hover:text-background bg-transparent"
                        >
                            <Link href="#proyectos">Ver Casos de Éxito</Link>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="group">
                            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                                10+
                            </div>
                            <div className="text-muted-foreground">Proyectos Completados</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                                90%
                            </div>
                            <div className="text-muted-foreground">Satisfacción del Cliente</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                                24h
                            </div>
                            <div className="text-muted-foreground">Tiempo de Respuesta</div>
                        </div>
                    </div>
                
            </div>
        </section>
    )
}
