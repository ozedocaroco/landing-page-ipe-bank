import { Shield, TrendingUp, Globe, Users } from "lucide-react"

export function SocialProof() {
  const trustIndicators = [
    {
      icon: Shield,
      value: "CVM",
      label: "Regulamentado",
    },
    {
      icon: Globe,
      value: "100%",
      label: "Offshore",
    },
    {
      icon: TrendingUp,
      value: "R$ 1,09M",
      label: "Patrimônio Líquido",
    },
    {
      icon: Users,
      value: "13",
      label: "Cotistas",
    },
  ]

  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-8">
      <div className="text-center text-muted-foreground text-sm font-bold leading-tight uppercase tracking-wider">
        Fundo Internacional Regulamentado
      </div>
      <div className="self-stretch grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center max-w-4xl mx-auto">
        {trustIndicators.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3 text-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-foreground text-2xl font-bold">{item.value}</span>
              <span className="text-muted-foreground text-sm font-medium">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Administrado pela <span className="text-foreground font-bold">S3 CACEIS Brasil</span> e gerido pela{" "}
          <span className="text-foreground font-bold">Rocha Opções de Investimentos</span>, especialistas em estratégias
          com derivativos em mercados globais.
        </p>
      </div>
    </section>
  )
}
