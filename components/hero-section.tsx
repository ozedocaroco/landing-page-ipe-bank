import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import { HeartHandshake, TrendingUp } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center relative mx-auto overflow-hidden my-6 px-4 w-full">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Wave pattern background */}
        <svg
          className="absolute w-full h-full opacity-5"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 400 Q 300 200 600 400 T 1200 400 V 800 H 0 Z" fill="url(#wave-gradient)" opacity="0.3" />
          <path d="M0 500 Q 300 300 600 500 T 1200 500 V 800 H 0 Z" fill="url(#wave-gradient)" opacity="0.2" />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground) / 0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-20 w-full">
        <Header />
      </div>

      <div className="relative z-10 space-y-6 mb-8 max-w-4xl mt-16 md:mt-24 lg:mt-32 px-4">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-4">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-bold">FIDC</span>
          <span className="text-muted-foreground text-sm">•</span>
          <span className="text-foreground text-sm font-medium">Direitos Creditórios com Impacto Social</span>
        </div>

        <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          Invista em Crédito com Propósito
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto text-pretty">
          O Nexa FIDC une rentabilidade competitiva com impacto social real. Seus investimentos financiam empresas que
          destinam parte de seus lucros para entidades filantrópicas, transformando retorno financeiro em mudança social.
        </p>

        <div className="flex items-center justify-center gap-4 pt-2">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20">
            <HeartHandshake className="w-5 h-5 text-secondary" />
            <span className="text-secondary text-sm font-bold">Impacto Filantrópico</span>
          </div>
        </div>
      </div>

      <Link href="#contato" className="scroll-smooth relative z-10">
        <Button className="bg-primary text-primary-foreground hover:bg-primary-dark px-8 py-6 rounded-full font-bold text-base shadow-xl ring-2 ring-primary/20 transition-all hover:scale-105">
          Conhecer o Fundo Nexa
        </Button>
      </Link>
    </section>
  )
}
