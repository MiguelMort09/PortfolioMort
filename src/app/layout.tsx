import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Mort.dev - Desarrollo Web Moderno",
    description: "Ingeniero en Tecnologías de Software especializado en Laravel, React, Livewire e Inertia.js",
    generator: 'v0.dev'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className="dark">
        <GoogleTagManager gtmId="GTM-XYZ" />
        <body className={inter.className}>{children}</body>
        </html>
    )
}
