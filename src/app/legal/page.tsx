import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  Building, User, Globe } from "lucide-react"
import Header from "@/app/components/header";

export default function LegalNotice() {
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
                                <Building className="h-5 w-5 text-primary" />
                                Información Legal
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                En cumplimiento con la Ley Federal de Protección al Consumidor y demás normativas aplicables en México,
                                se proporciona la siguiente información legal sobre este sitio web y los servicios ofrecidos por{" "}
                                <strong>Mort.dev</strong>.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Owner Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5 text-primary" />
                                Datos del Titular
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                                <div>
                                    <h3 className="font-semibold">Nombre Comercial:</h3>
                                    <p className="text-muted-foreground">Mort.dev</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Titular:</h3>
                                    <p className="text-muted-foreground">Miguel Uicab</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Actividad:</h3>
                                    <p className="text-muted-foreground">Servicios de Desarrollo Web y Consultoría Tecnológica</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Ubicación:</h3>
                                    <p className="text-muted-foreground">México</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Correo Electrónico:</h3>
                                    <p className="text-muted-foreground">
                                        <a href="mailto:legal@mort.dev" className="text-primary hover:underline">
                                            legal@mort.dev
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Teléfono:</h3>
                                    <p className="text-muted-foreground">+52 (555) 123-4567</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Website Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-primary" />
                                Información del Sitio Web
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Dominio:</h3>
                                <p className="text-muted-foreground">mort.dev</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Finalidad:</h3>
                                <p className="text-muted-foreground">
                                    Sitio web corporativo para la promoción y contratación de servicios de desarrollo web, así como para
                                    proporcionar información sobre proyectos y experiencia profesional.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Audiencia:</h3>
                                <p className="text-muted-foreground">
                                    Empresas, emprendedores y organizaciones que requieren servicios de desarrollo web profesional.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Intellectual Property */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Propiedad Intelectual</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Todos los contenidos de este sitio web, incluyendo pero no limitándose a textos, imágenes, gráficos,
                                logotipos, iconos, código fuente y diseño, son propiedad de Miguel Uicab (Mort.dev) o se utilizan bajo
                                licencia.
                            </p>
                            <div>
                                <h3 className="font-semibold mb-2">Derechos Reservados</h3>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <li>Queda prohibida la reproducción total o parcial sin autorización expresa</li>
                                    <li>No se permite el uso comercial de los contenidos sin consentimiento</li>
                                    <li>Las marcas comerciales mencionadas pertenecen a sus respectivos propietarios</li>
                                    <li>El código fuente del sitio está protegido por derechos de autor</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Liability */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Limitación de Responsabilidad</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Información del Sitio Web</h3>
                                <p className="text-muted-foreground mb-3">
                                    Aunque nos esforzamos por mantener la información actualizada y precisa, no garantizamos la exactitud,
                                    completitud o actualidad de toda la información presentada en este sitio.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Enlaces Externos</h3>
                                <p className="text-muted-foreground mb-3">
                                    Este sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido o las
                                    prácticas de privacidad de estos sitios externos.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Disponibilidad del Servicio</h3>
                                <p className="text-muted-foreground">
                                    No garantizamos la disponibilidad continua del sitio web y no seremos responsables por interrupciones
                                    temporales del servicio debido a mantenimiento o causas técnicas.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* User Conduct */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Conducta del Usuario</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">Al utilizar este sitio web, te comprometes a:</p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                <li>Utilizar el sitio de manera legal y apropiada</li>
                                <li>No intentar acceder a áreas restringidas del sitio</li>
                                <li>No transmitir virus, malware o código malicioso</li>
                                <li>Respetar los derechos de propiedad intelectual</li>
                                <li>No utilizar el sitio para actividades fraudulentas o ilegales</li>
                                <li>Proporcionar información veraz en los formularios de contacto</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Privacy and Data Protection */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Protección de Datos</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                El tratamiento de datos personales se realiza conforme a la Ley Federal de Protección de Datos
                                Personales en Posesión de los Particulares. Para información detallada, consulta nuestra{" "}
                                <Link href="/privacy" className="text-primary hover:underline">
                                    Política de Privacidad
                                </Link>
                                .
                            </p>
                            <div>
                                <h3 className="font-semibold mb-2">Derechos ARCO</h3>
                                <p className="text-muted-foreground">
                                    Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación y Oposición contactándonos en{" "}
                                    <a href="mailto:privacy@mort.dev" className="text-primary hover:underline">
                                        privacy@mort.dev
                                    </a>
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Applicable Law */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Legislación Aplicable</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Este aviso legal se rige por la legislación mexicana, específicamente:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                <li>Ley Federal de Protección al Consumidor</li>
                                <li>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</li>
                                <li>Código Civil Federal</li>
                                <li>Código de Comercio</li>
                                <li>Ley Federal del Derecho de Autor</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Para cualquier controversia derivada del uso de este sitio web, las partes se someten a la jurisdicción
                                de los tribunales competentes de México.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Updates */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Modificaciones</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                Nos reservamos el derecho de modificar este aviso legal en cualquier momento. Las modificaciones
                                entrarán en vigor inmediatamente después de su publicación en este sitio web. Se recomienda revisar
                                periódicamente esta página para mantenerse informado de cualquier cambio.
                            </p>
                            <p className="text-muted-foreground mt-4">
                                <strong>Última actualización:</strong>{" "}
                                {new Date().toLocaleDateString("es-MX", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Contact */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Contacto Legal</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">Para consultas legales o ejercicio de derechos:</p>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p>
                                    <strong>Miguel Uicab (Mort.dev)</strong>
                                </p>
                                <p>
                                    Email legal:{" "}
                                    <a href="mailto:legal@mort.dev" className="text-primary hover:underline">
                                        legal@mort.dev
                                    </a>
                                </p>
                                <p>
                                    Email general:{" "}
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
