import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, Mail } from "lucide-react"
import Header from "@/app/components/header";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <Header/>

            {/* Content */}
            <main className="container py-12">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Introduction */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Eye className="h-5 w-5 text-primary" />
                                Introducción
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                En <strong>Mort.dev</strong> (Miguel Uicab), nos comprometemos a proteger y respetar tu privacidad. Esta
                                Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información personal cuando
                                visitas nuestro sitio web o utilizas nuestros servicios de desarrollo web.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <strong>Última actualización:</strong>{" "}
                                {new Date().toLocaleDateString("es-MX", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Information We Collect */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Información que Recopilamos</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Información Personal</h3>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <li>Nombre y apellidos</li>
                                    <li>Dirección de correo electrónico</li>
                                    <li>Número de teléfono</li>
                                    <li>Información de la empresa (si aplica)</li>
                                    <li>Detalles del proyecto y requerimientos</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Información Técnica</h3>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <li>Dirección IP</li>
                                    <li>Tipo de navegador y versión</li>
                                    <li>Sistema operativo</li>
                                    <li>Páginas visitadas y tiempo de permanencia</li>
                                    <li>Cookies y tecnologías similares</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* How We Use Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Cómo Utilizamos tu Información</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Responder a tus consultas y solicitudes de cotización</li>
                                <li>Proporcionar servicios de desarrollo web personalizados</li>
                                <li>Comunicarnos contigo sobre el progreso de proyectos</li>
                                <li>Enviar actualizaciones importantes sobre nuestros servicios</li>
                                <li>Mejorar nuestro sitio web y experiencia del usuario</li>
                                <li>Cumplir con obligaciones legales y contractuales</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Data Protection */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Lock className="h-5 w-5 text-primary" />
                                Protección de Datos
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
                                personal contra acceso no autorizado, alteración, divulgación o destrucción.
                            </p>
                            <div>
                                <h3 className="font-semibold mb-2">Medidas de Seguridad</h3>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <li>Cifrado SSL/TLS para transmisión de datos</li>
                                    <li>Acceso restringido a información personal</li>
                                    <li>Copias de seguridad regulares y seguras</li>
                                    <li>Monitoreo continuo de seguridad</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Cookies */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Cookies y Tecnologías Similares</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Las cookies son pequeños archivos
                                de texto que se almacenan en tu dispositivo.
                            </p>
                            <div>
                                <h3 className="font-semibold mb-2">Tipos de Cookies</h3>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <li>
                                        <strong>Esenciales:</strong> Necesarias para el funcionamiento del sitio
                                    </li>
                                    <li>
                                        <strong>Analíticas:</strong> Para entender cómo interactúas con nuestro sitio
                                    </li>
                                    <li>
                                        <strong>Funcionales:</strong> Para recordar tus preferencias
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Your Rights */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Tus Derechos</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, tienes
                                derecho a:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                <li>
                                    <strong>Acceso:</strong> Conocer qué datos personales tenemos sobre ti
                                </li>
                                <li>
                                    <strong>Rectificación:</strong> Solicitar la corrección de datos inexactos
                                </li>
                                <li>
                                    <strong>Cancelación:</strong> Solicitar la eliminación de tus datos
                                </li>
                                <li>
                                    <strong>Oposición:</strong> Oponerte al tratamiento de tus datos
                                </li>
                                <li>
                                    <strong>Portabilidad:</strong> Solicitar una copia de tus datos en formato estructurado
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Contact */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-primary" />
                                Contacto
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos, puedes
                                contactarnos:
                            </p>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p>
                                    <strong>Miguel Uicab (Mort.dev)</strong>
                                </p>
                                <p>
                                    Email:{" "}
                                    <a href="mailto:privacy@mort.dev" className="text-primary hover:underline">
                                        privacy@mort.dev
                                    </a>
                                </p>
                                <p>Teléfono: +52 (555) 123-4567</p>
                                <p>Ubicación: México</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Updates */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Actualizaciones de la Política</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Las
                                modificaciones serán efectivas inmediatamente después de su publicación en este sitio web. Te
                                recomendamos revisar periódicamente esta página para estar al tanto de cualquier cambio.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
