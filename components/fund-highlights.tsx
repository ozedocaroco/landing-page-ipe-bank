import { Building2, Shield, TrendingUp, Users } from 'lucide-react'

export function FundHighlights() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Rentabilidade Atrativa",
      description: "Classe Sênior: CDI + 5% a.a. | Classe Júnior: CDI + 4% a.a.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Shield,
      title: "Estrutura Profissional",
      description: "Gestão Rocha Opções | Administração SEFER Investimentos DTVM",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Building2,
      title: "Direitos Creditórios",
      description: "Carteira diversificada com mínimo 50% em direitos creditórios elegíveis",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Users,
      title: "Investidores Profissionais",
      description: "Fundo exclusivo para investidores qualificados (aplicação mínima: R$ 10 mil)",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  return (
    <section className="w-full px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg">
            <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <h3 className="text-foreground text-lg font-bold">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
