"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from 'lucide-react'

const faqData = [
  {
    question: "O que é o Nexa FIDC?",
    answer:
      "O Nexa FIDC é um Fundo de Investimento em Direitos Creditórios que investe em créditos de empresas que destinam parte de seu faturamento para entidades filantrópicas. É administrado pela SEFER Investimentos e gerido pela Rocha Opções de Investimentos, oferecendo rentabilidade competitiva aliada a impacto social real.",
  },
  {
    question: "Qual a diferença entre as classes Sênior e Júnior?",
    answer:
      "A Classe Sênior tem prioridade no recebimento e remuneração alvo de CDI + 5% a.a., sendo mais conservadora. A Classe Júnior é subordinada, com remuneração alvo de CDI + 4% a.a., mas pode receber rentabilidade excedente. A Júnior absorve primeiro eventuais perdas da carteira, oferecendo maior proteção à Sênior.",
  },
  {
    question: "Como funciona o impacto social do fundo?",
    answer:
      "As empresas emissoras dos direitos creditórios se comprometem a doar percentual de seu faturamento mensal para a Associação Glannos (CNPJ 28.257.920/0001-09), entidade sem fins lucrativos. A gestora acompanha mensalmente os documentos contábeis para garantir o cumprimento das doações, gerando transparência total sobre o impacto social.",
  },
  {
    question: "Quais são os principais riscos?",
    answer:
      "Os principais riscos incluem: crédito (inadimplência dos devedores), liquidez (dificuldade de venda dos ativos), mercado (variação do CDI), concentração (carteira focada em poucos cedentes) e patrimônio líquido negativo (possibilidade de chamada de capital adicional). Este é um fundo para investidores profissionais com compreensão desses riscos.",
  },
  {
    question: "Qual a aplicação mínima e quem pode investir?",
    answer:
      "A aplicação mínima inicial é de R$ 10.000,00. O fundo é destinado exclusivamente a investidores profissionais, conforme classificação da CVM. É um fundo fechado, portanto não há possibilidade de resgate antes do prazo de duração, apenas negociação das cotas no mercado secundário.",
  },
  {
    question: "Quais são as taxas cobradas?",
    answer:
      "Taxa de Administração: 0,20% a.a. (mínimo R$ 10 mil/mês). Taxa de Gestão: 0,15% a.a. Taxa de Custódia: R$ 1.000/mês fixo. Taxa de Auditoria: R$ 12.000/ano. Não há taxa de performance, entrada ou saída. Podem incidir despesas operacionais conforme previsto no regulamento.",
  },
  {
    question: "Como é a tributação do fundo?",
    answer:
      "Por ser um FIDC enquadrado como entidade de investimento (direitos creditórios), não há come-cotas semestral. A Classe Sênior tem IR de 15% sobre ganho de capital no resgate final (bullet). A Classe Júnior tem IR regressivo sobre juros amortizados (22,5% a 15%), conforme prazo. IOF regressivo até 30 dias.",
  },
  {
    question: "O fundo tem garantia do FGC?",
    answer:
      "Não. O Nexa FIDC não conta com garantia da Administradora, Gestora, do Fundo Garantidor de Créditos (FGC) ou de qualquer mecanismo de seguro. Toda rentabilidade está sujeita aos riscos inerentes aos direitos creditórios da carteira e à gestão do fundo.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-card shadow-sm overflow-hidden rounded-xl border-2 transition-all duration-500 ease-out cursor-pointer ${
        isOpen ? "border-primary/40" : "border-primary/20"
      }`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-bold leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-primary transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-muted-foreground text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[600px] text-center text-foreground text-4xl md:text-5xl font-bold leading-tight break-words">
            Perguntas Frequentes
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-base md:text-lg font-normal leading-relaxed break-words max-w-[700px]">
            Tudo o que você precisa saber sobre o Nexa FIDC e como investir em crédito com impacto social
          </p>
        </div>
      </div>
      <div className="w-full max-w-[700px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
