import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleTagManager } from '@next/third-parties/google'
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "MiguelMort.tech",
    description: "Ingeniero en Tecnologías de Software especializado en Laravel",
    authors: [
        { name: "MIGUEL E UICAB CANABAL" }
    ],
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className="dark">
        <GoogleTagManager gtmId="GTM-XYZ" />
        <body className={`min-h-screen antialiased bg-background text-foreground   ${inter.className}`}>
        {children}
        <Footer/>
        </body>
        </html>
)
}
