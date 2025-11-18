"use client"

import { Card } from "@/components/ui/card"
import { BarChart3, TrendingUp } from 'lucide-react'

export function PerformanceSection() {
  return (
    <section id="performance" className="w-full px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-bold">Projeção de Rentabilidade</span>
          </div>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-4">
            Comparativo de Rentabilidade
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projeções baseadas em CDI de 14,9% a.a. A rentabilidade passada ou projetada não representa garantia de retorno futuro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Annual Returns Comparison */}
          <Card className="p-8 border-2 border-border hover:border-primary/30 transition-all">
            <h3 className="text-foreground text-xl font-bold mb-6">Rentabilidade Anual Projetada</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm font-medium">CDI (14,9% a.a.)</span>
                  <span className="text-foreground text-lg font-bold">14,9%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-muted-foreground to-muted-foreground-light h-3 rounded-full" style={{ width: "74.5%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-secondary text-sm font-medium">Classe Sênior (~20,7% a.a.)</span>
                  <span className="text-secondary text-lg font-bold">20,7%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-secondary to-secondary/80 h-3 rounded-full shadow-lg" style={{ width: "100%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-accent text-sm font-medium">Classe Júnior (~19,5% a.a.)</span>
                  <span className="text-accent text-lg font-bold">19,5%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-accent to-accent/80 h-3 rounded-full shadow-lg" style={{ width: "94%" }} />
                </div>
              </div>
            </div>
          </Card>

          {/* Accumulated Returns */}
          <Card className="p-8 border-2 border-border hover:border-primary/30 transition-all">
            <h3 className="text-foreground text-xl font-bold mb-6">Retorno Acumulado 36 Meses</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                <div>
                  <p className="text-secondary text-sm font-medium mb-1">Classe Sênior</p>
                  <p className="text-secondary text-2xl font-bold">75,6%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-accent/10 border border-accent/20">
                <div>
                  <p className="text-accent text-sm font-medium mb-1">Classe Júnior</p>
                  <p className="text-accent text-2xl font-bold">70,6%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>

              <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border">
                <p className="text-muted-foreground text-xs leading-relaxed">
                  <strong className="text-foreground">Importante:</strong> Valores meramente ilustrativos. Rentabilidade passada ou projetada não representa garantia de retorno futuro. Investimentos em FIDC apresentam riscos de crédito e liquidez.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
