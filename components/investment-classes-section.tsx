import { Card } from "@/components/ui/card"
import { Shield, TrendingUp } from 'lucide-react'

export function InvestmentClassesSection() {
  return (
    <section className="w-full px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-4">
            Classes de Investimento
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estrutura de subordinação que oferece diferentes perfis de risco e retorno para investidores profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Classe Sênior */}
          <Card className="p-8 border-2 border-secondary hover:border-secondary/50 transition-all hover:shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-foreground text-2xl font-bold mb-1">Classe Sênior</h3>
                <p className="text-secondary text-sm font-bold">Prioridade no pagamento</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/20">
                <p className="text-muted-foreground text-sm font-medium mb-1">Remuneração Alvo</p>
                <p className="text-secondary text-3xl font-bold">CDI + 5% a.a.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">Prioridade de amortização e resgate em relação às classes subordinadas</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">Remuneração limitada ao CDI + spread contratado</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">Perfil mais conservador com menor exposição a perdas</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">Sem come-cotas (FIDC enquadrado como entidade de investimento)</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Classe Júnior */}
          <Card className="p-8 border-2 border-accent hover:border-accent/50 transition-all hover:shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-foreground text-2xl font-bold mb-1">Classe Júnior</h3>
                <p className="text-accent text-sm font-bold">Subordinada</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <p className="text-muted-foreground text-sm font-medium mb-1">Remuneração Alvo</p>
                <p className="text-accent text-3xl font-bold">CDI + 4% a.a.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">Subordinada à classe sênior na ordem de pagamentos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">Pode receber rentabilidade excedente além do CDI + spread</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">Absorve primeiro os efeitos de inadimplência da carteira</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">Permite integralização e resgate em direitos creditórios</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-6 bg-muted/30 border-2 border-border">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-foreground text-lg font-bold mb-2">Índice de Subordinação</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                O fundo mantém um <strong className="text-foreground">índice mínimo de subordinação de 15%</strong>, sendo 5% em cotas subordinadas júnior. Isso significa que há uma proteção patrimonial significativa para os cotistas da classe sênior. Em caso de inadimplência, as perdas são primeiro absorvidas pelas cotas subordinadas.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
