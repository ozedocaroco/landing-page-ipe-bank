import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Montserrat } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Nexa FIDC - Investimento em Direitos Creditórios com Impacto Social",
  description:
    "Invista no Nexa FIDC, fundo de direitos creditórios que une rentabilidade competitiva (CDI + 5% classe sênior) com impacto social real. Exclusivo para investidores profissionais.",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: ${dmSans.style.fontFamily};
  --font-heading: ${montserrat.style.fontFamily};
}
        `}</style>
      </head>
      <body className={`${dmSans.variable} ${montserrat.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
