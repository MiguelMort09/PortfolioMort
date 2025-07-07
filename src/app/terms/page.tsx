import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Handshake, AlertTriangle, Scale } from "lucide-react"
import Header from "@/app/components/header";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-background">
            <Header/>


            {/* Content */}
            <main className="container py-12">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Introduction */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Handshake className="h-5 w-5 text-primary" />
                                Términos y Condiciones de Servicio
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Estos Términos de Servicio rigen el uso de los servicios de desarrollo web proporcionados por
                                <strong> Miguel Uicab</strong> (en adelante "Mort.dev", "nosotros", "nuestro"). Al contratar nuestros
                                servicios, aceptas estos términos en su totalidad.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <strong>Fecha de vigencia:</strong>{" "}
                                {new Date().toLocaleDateString("es-MX", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Services */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Servicios Ofrecidos</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Mort.dev ofrece servicios profesionales de desarrollo web que incluyen, pero no se limitan a:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                <li>Desarrollo de aplicaciones web con Laravel y React</li>
                                <li>Creación de sitios web responsivos</li>
                                <li>Desarrollo de APIs RESTful</li>
                                <li>Integración de sistemas de pago</li>
                                <li>Optimización de rendimiento web</li>
                                <li>Mantenimiento y soporte técnico</li>
                                <li>Consultoría técnica especializada</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Project Process */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Proceso de Proyecto</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">1. Cotización y Propuesta</h3>
                                <p className="text-muted-foreground mb-3">
                                    Proporcionamos cotizaciones detalladas basadas en los requerimientos específicos del proyecto.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">2. Contrato y Anticipo</h3>
                                <p className="text-muted-foreground mb-3">
                                    Se requiere un anticipo del 50% para iniciar el proyecto, con el saldo restante al completar la
                                    entrega.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">3. Desarrollo y Comunicación</h3>
                                <p className="text-muted-foreground mb-3">
                                    Mantenemos comunicación regular sobre el progreso y proporcionamos actualizaciones semanales.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">4. Entrega y Revisiones</h3>
                                <p className="text-muted-foreground">
                                    Incluimos hasta 3 rondas de revisiones menores sin costo adicional.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Payment Terms */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Términos de Pago</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>
                                    <strong>Anticipo:</strong> 50% del costo total antes de iniciar el proyecto
                                </li>
                                <li>
                                    <strong>Saldo final:</strong> 50% restante al completar y entregar el proyecto
                                </li>
                                <li>
                                    <strong>Métodos de pago:</strong> Transferencia bancaria, PayPal, Stripe
                                </li>
                                <li>
                                    <strong>Moneda:</strong> Pesos mexicanos (MXN) o dólares estadounidenses (USD)
                                </li>
                                <li>
                                    <strong>Facturas:</strong> Se emiten facturas fiscales para todos los pagos
                                </li>
                                <li>
                                    <strong>Pagos tardíos:</strong> Se aplicará un interés del 2% mensual por pagos vencidos
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Intellectual Property */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Propiedad Intelectual</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Derechos del Cliente</h3>
                                <p className="text-muted-foreground mb-3">
                                    Una vez completado el pago total, el cliente obtiene todos los derechos sobre el código desarrollado
                                    específicamente para su proyecto.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Derechos de Mort.dev</h3>
                                <p className="text-muted-foreground mb-3">
                                    Nos reservamos el derecho de utilizar técnicas, metodologías y conocimientos generales adquiridos
                                    durante el proyecto en trabajos futuros.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Código de Terceros</h3>
                                <p className="text-muted-foreground">
                                    Las librerías y frameworks de código abierto mantienen sus respectivas licencias.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Warranties and Limitations */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-primary" />
                                Garantías y Limitaciones
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Garantía de Calidad</h3>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <li>Garantizamos que el código estará libre de errores críticos por 30 días</li>
                                    <li>Corregimos bugs reportados durante el período de garantía sin costo</li>
                                    <li>Proporcionamos documentación técnica completa</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Limitaciones</h3>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <li>No garantizamos resultados específicos de negocio</li>
                                    <li>No somos responsables por pérdidas de datos del cliente</li>
                                    <li>La responsabilidad máxima se limita al costo total del proyecto</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Cancellation */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Cancelación y Terminación</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Cancelación por el Cliente</h3>
                                <p className="text-muted-foreground mb-3">
                                    El cliente puede cancelar el proyecto con 7 días de aviso. Se cobrará el trabajo completado hasta la
                                    fecha de cancelación, con un mínimo del 25% del costo total.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Terminación por Mort.dev</h3>
                                <p className="text-muted-foreground">
                                    Podemos terminar el contrato en caso de incumplimiento de pago o comportamiento inapropiado,
                                    reembolsando la parte proporcional no utilizada.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Confidentiality */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Confidencialidad</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                Nos comprometemos a mantener la confidencialidad de toda la información del cliente, incluyendo datos
                                comerciales, técnicos y estratégicos. Esta obligación permanece vigente incluso después de la
                                terminación del proyecto.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Governing Law */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Scale className="h-5 w-5 text-primary" />
                                Ley Aplicable
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta en los tribunales
                                competentes de México. En caso de conflicto entre las versiones en español e inglés, prevalecerá la
                                versión en español.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Contact */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Contacto</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Para preguntas sobre estos términos o para discutir un proyecto:
                            </p>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p>
                                    <strong>Miguel Uicab (Mort.dev)</strong>
                                </p>
                                <p>
                                    Email:{" "}
                                    <a href="mailto:contact@mort.dev" className="text-primary hover:underline">
                                        contact@mort.dev
                                    </a>
                                </p>
                                <p>Teléfono: +52 (555) 123-4567</p>
                                <p>Ubicación: México</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
