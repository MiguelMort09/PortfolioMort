"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "devmigueluicab@gmail.com",
      href: "mailto:devmigueluicab@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+52 982-102-9769",
      href: "tel:+529995055438",
      color: "text-green-500",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Campeche & Querétaro, México",
      href: "#",
      color: "text-red-500",
    },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/MiguelMort09", icon: Github },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/miguel-ernesto-uicab-canabal-2b72601bb/",
      icon: Linkedin,
    },
  ];

  return (
    <section
      id="contacto"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="gradient-text">Contáctame</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? ¡Hablemos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="bg-card/50 border-muted hover:border-primary/50 transition-colors group"
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div
                      className={`p-3 rounded-full bg-background shadow-sm ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        {item.title}
                      </h3>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Sígueme en redes</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-card border-muted shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="¿En qué puedo ayudarte?"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] bg-background/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : isSubmitted ? (
                      "¡Mensaje Enviado!"
                    ) : (
                      <>
                        Enviar Mensaje <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
