"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentAmount: "", // Added investment amount field
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section
      id="contato"
      className="w-full pt-20 md:pt-40 lg:pt-60 pb-10 md:pb-20 px-5 relative flex flex-col justify-center items-center overflow-visible"
    >
      <div className="absolute inset-0 top-[-90px]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1388 825"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <mask
            id="mask0_182_1049"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="269"
            y="27"
            width="850"
            height="493"
          >
            <rect x="269.215" y="27.4062" width="849.57" height="492.311" fill="url(#paint0_linear_182_1049)" />
          </mask>
          <g mask="url(#mask0_182_1049)">
            <g filter="url(#filter0_f_182_1049)">
              <ellipse
                cx="694"
                cy="-93.0414"
                rx="670.109"
                ry="354.908"
                fill="url(#paint1_radial_182_1049)"
                fillOpacity="0.8"
              />
            </g>
            <ellipse cx="694" cy="-91.5385" rx="670.109" ry="354.908" fill="url(#paint2_linear_182_1049)" />
            <ellipse cx="694" cy="-93.0414" rx="670.109" ry="354.908" fill="url(#paint3_linear_182_1049)" />
          </g>
          <defs>
            <filter
              id="filter0_f_182_1049"
              x="-234.109"
              y="-705.949"
              width="1856.22"
              height="1225.82"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="129" result="effect1_foregroundBlur_182_1049" />
            </filter>
            <linearGradient
              id="paint0_linear_182_1049"
              x1="1118.79"
              y1="273.562"
              x2="269.215"
              y2="273.562"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--background))" stopOpacity="0" />
              <stop offset="0.2" stopColor="hsl(var(--background))" stopOpacity="0.8" />
              <stop offset="0.8" stopColor="hsl(var(--background))" stopOpacity="0.8" />
              <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_182_1049"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(683.482 245.884) rotate(-3.78676) scale(469.009 248.4)"
            >
              <stop offset="0.1294" stopColor="hsl(var(--primary))" />
              <stop offset="0.2347" stopColor="hsl(var(--secondary))" />
              <stop offset="0.3" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="paint2_linear_182_1049"
              x1="694"
              y1="-446.446"
              x2="694"
              y2="263.369"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_182_1049"
              x1="694"
              y1="-447.949"
              x2="694"
              y2="261.866"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--background))" />
              <stop offset="1" stopColor="hsl(var(--background))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col justify-start items-center gap-9 max-w-2xl mx-auto w-full">
        <div className="flex flex-col justify-start items-center gap-4 text-center">
          <h2 className="text-foreground text-4xl md:text-5xl lg:text-[68px] font-bold leading-tight md:leading-tight lg:leading-[76px] break-words text-balance">
            Invista com Propósito
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-normal leading-[18.20px] md:leading-relaxed break-words max-w-xl text-pretty">
            Preencha o formulário abaixo e fale com um especialista para entender como o Nexa FIDC pode gerar
            rentabilidade competitiva enquanto contribui para causas sociais importantes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <Input
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-background border-2 border-primary/30 text-foreground placeholder:text-muted-foreground h-12 focus:border-primary"
            required
          />
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-background border-2 border-primary/30 text-foreground placeholder:text-muted-foreground h-12 focus:border-primary"
            required
          />
          <Input
            type="tel"
            placeholder="Seu telefone (WhatsApp)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-background border-2 border-primary/30 text-foreground placeholder:text-muted-foreground h-12 focus:border-primary"
            required
          />
          
          <div className="space-y-3 p-4 rounded-xl border-2 border-primary/30 bg-background">
            <Label className="text-foreground text-sm font-bold">Quanto pretende investir?</Label>
            <RadioGroup 
              value={formData.investmentAmount} 
              onValueChange={(value) => setFormData({ ...formData, investmentAmount: value })}
              required
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="10k-50k" id="10k-50k" />
                <Label htmlFor="10k-50k" className="text-muted-foreground cursor-pointer font-normal">
                  De R$ 10 mil a R$ 50 mil
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="50k-100k" id="50k-100k" />
                <Label htmlFor="50k-100k" className="text-muted-foreground cursor-pointer font-normal">
                  De R$ 50 mil a R$ 100 mil
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="100k-500k" id="100k-500k" />
                <Label htmlFor="100k-500k" className="text-muted-foreground cursor-pointer font-normal">
                  De R$ 100 mil a R$ 500 mil
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="500k+" id="500k+" />
                <Label htmlFor="500k+" className="text-muted-foreground cursor-pointer font-normal">
                  Acima de R$ 500 mil
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button
            type="submit"
            className="w-full px-[30px] py-3 bg-primary text-white text-base font-bold leading-6 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-200 h-12"
            size="lg"
          >
            Falar com Especialista
          </Button>
          <p className="text-muted-foreground text-xs text-center leading-relaxed">
            Ao enviar seus dados, você concorda em receber informações sobre o Nexa FIDC.
          </p>
        </form>
      </div>
    </section>
  )
}
