"use client"

import { Card } from "@/components/ui/card"
import { DollarSign, PieChart } from 'lucide-react'

export function FeeStructureSection() {
  return (
    <section className="w-full px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <PieChart className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-bold">Estrutura de Custos</span>
          </div>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-4">
            Taxas e Encargos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estrutura transparente e competitiva de custos do Nexa FIDC.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-2 border-border hover:border-primary/30 transition-all">
            <h3 className="text-foreground text-xl font-bold mb-6 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              Principais Taxas
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground text-sm font-bold">Taxa de Administração</span>
                  <span className="text-primary text-lg font-bold">0,20% a.a.</span>
                </div>
                <p className="text-muted-foreground text-xs">Sobre o patrimônio líquido (mínimo mensal R$ 10.000, corrigido pelo IPCA)</p>
              </div>

              <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground text-sm font-bold">Taxa de Gestão</span>
                  <span className="text-secondary text-lg font-bold">0,15% a.a.</span>
                </div>
                <p className="text-muted-foreground text-xs">Sobre o patrimônio líquido, corrigida anualmente pelo IPCA</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-foreground text-lg font-bold mb-4">Taxas Não Cobradas</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-muted-foreground text-sm">Taxa de Performance: <strong className="text-foreground">Não há</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-muted-foreground text-sm">Taxa de Entrada: <strong className="text-foreground">Não há</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-muted-foreground text-sm">Taxa de Saída: <strong className="text-foreground">Não há</strong></span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
