import { HeartHandshake, Target, Users } from 'lucide-react'
import { Card } from "@/components/ui/card"

export function SocialImpactSection() {
  return (
    <section id="social-impact" className="w-full px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
            <HeartHandshake className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-bold">Impacto Social</span>
          </div>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-4">
            Investimento com Propósito
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O diferencial do Nexa FIDC: empresas emissoras dos ativos destinam parte de seu faturamento mensal para entidades filantrópicas, gerando impacto social real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-2 border-border hover:border-secondary/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-foreground text-lg font-bold mb-2">Doação Estruturada</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Percentual do faturamento mensal das emissoras é destinado à Associação Glannos (CNPJ 28.257.920/0001-09), entidade sem fins lucrativos.
            </p>
          </Card>

          <Card className="p-6 border-2 border-border hover:border-secondary/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-foreground text-lg font-bold mb-2">Transparência Total</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A gestora acompanha mensalmente os documentos contábeis das emissoras, garantindo o efetivo cumprimento das doações.
            </p>
          </Card>

          <Card className="p-6 border-2 border-border hover:border-secondary/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-foreground text-lg font-bold mb-2">Impacto Mensurável</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Seu investimento gera retorno financeiro e social simultaneamente, com prestação de contas regular sobre as doações realizadas.
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-secondary/5 to-primary/5 border-2 border-secondary/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <HeartHandshake className="w-10 h-10 text-secondary" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-foreground text-2xl font-bold mb-2">Entidade Beneficiada</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                <strong className="text-foreground">Associação Glannos</strong> - Organização da Sociedade Civil sem fins lucrativos dedicada ao desenvolvimento social e comunitário. As doações são verificadas mensalmente pela gestora através de documentação contábil oficial.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
