import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "@/app/components/footer";
import JsonLd from "@/app/components/json-ld";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MiguelMort.tech | Ingeniero de Software & Desarrollador Web",
    template: "%s | MiguelMort.tech",
  },
  description:
    "Portfolio de Miguel E. Uicab Canabal. Ingeniero en Tecnologías de Software especializado en Laravel, React, y desarrollo de aplicaciones web modernas.",
  keywords: [
    "Miguel Uicab",
    "Desarrollador Web",
    "Laravel",
    "React",
    "Next.js",
    "Software Engineer",
    "Portfolio",
    "Full Stack",
  ],
  authors: [
    { name: "Miguel E. Uicab Canabal", url: "https://miguelmort.tech" },
  ],
  creator: "Miguel E. Uicab Canabal",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://miguelmort.tech",
    title: "MiguelMort.tech | Ingeniero de Software",
    description:
      "Transformando ideas en soluciones digitales robustas. Especialista en Laravel y arquitecturas escalables.",
    siteName: "MiguelMort.tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MiguelMort.tech Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MiguelMort.tech | Ingeniero de Software",
    description:
      "Portfolio de Miguel E. Uicab Canabal. Especialista en Laravel y desarrollo web.",
    creator: "@MiguelMort",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://miguelmort.tech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <GoogleTagManager gtmId="GTM-XYZ" />
      <body
        className={`min-h-screen antialiased bg-background text-foreground   ${inter.className}`}
      >
        <JsonLd />
        {children}
        <Footer />
      </body>
    </html>
  );
}
