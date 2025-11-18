"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp } from 'lucide-react'

export function RiskMatrixSection() {
  return (
    <section className="w-full px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-bold">Análise de Risco</span>
          </div>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-4">
            Risco vs Retorno
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compreenda o posicionamento do Nexa FIDC no espectro de investimentos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-2 border-border hover:border-accent/30 transition-all">
            <h3 className="text-foreground text-xl font-bold mb-6">Posicionamento de Mercado</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Poupança</span>
                  <span className="text-muted-foreground">Risco: 1 | Retorno: ~7%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">CDB/CDI</span>
                  <span className="text-muted-foreground">Risco: 2 | Retorno: ~15%</span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold border-l-4 border-secondary pl-3">
                  <span className="text-secondary">Classe Sênior Nexa</span>
                  <span className="text-secondary">Risco: 4 | Retorno: ~20%</span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold border-l-4 border-accent pl-3">
                  <span className="text-accent">Classe Júnior Nexa</span>
                  <span className="text-accent">Risco: 5 | Retorno: ~19%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Ações</span>
                  <span className="text-muted-foreground">Risco: 8-9 | Retorno: Variável</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20">
                <p className="text-muted-foreground text-xs leading-relaxed">
                  <strong className="text-foreground">Escala de Risco:</strong> 1-10, onde 1 representa menor risco e 10 maior risco. O Nexa FIDC oferece retorno superior ao CDI com risco moderado, posicionado entre renda fixa tradicional e renda variável.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
