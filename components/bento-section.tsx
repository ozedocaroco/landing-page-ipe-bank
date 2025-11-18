import { Globe, Shield, TrendingUp, DollarSign, BarChart3, Target } from "lucide-react"

const BentoCard = ({ title, description, icon: Icon, highlight, highlightLabel }) => (
  <div className="overflow-hidden rounded-2xl border-2 border-primary/20 flex flex-col justify-start items-start relative min-h-[280px] bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-4 relative z-10 h-full">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-3 flex-1">
        <h3 className="self-stretch text-foreground text-xl font-bold leading-7">{title}</h3>
        <p className="self-stretch text-muted-foreground text-base leading-relaxed">{description}</p>
        {highlight && (
          <div className="mt-auto pt-4 flex flex-col gap-1">
            <span className="text-primary text-3xl font-bold">{highlight}</span>
            {highlightLabel && <span className="text-sm text-muted-foreground font-medium">{highlightLabel}</span>}
          </div>
        )}
      </div>
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "Exposição Internacional",
      description:
        "Acesso ao mercado global através de estratégias com opções internacionais, permitindo diversificação geográfica e proteção cambial.",
      icon: Globe,
      highlight: "100%",
      highlightLabel: "Offshore",
    },
    {
      title: "Regulamentação CVM",
      description:
        "Fundo multimercado regulamentado pela CVM, categoria Investimento no Exterior, com total transparência e governança.",
      icon: Shield,
      highlight: null,
    },
    {
      title: "Benchmark Dólar",
      description:
        "Estratégia referenciada em dólar comercial, oferecendo hedge cambial natural e proteção contra desvalorização do real.",
      icon: DollarSign,
      highlight: "USD",
      highlightLabel: "Dólar Comercial",
    },
    {
      title: "Gestão Especializada",
      description:
        "Administrado por S3 CACEIS Brasil e gerido pela Rocha Opções de Investimentos, especialistas em mercados derivativos.",
      icon: BarChart3,
      highlight: null,
    },
    {
      title: "Estratégia em Opções",
      description:
        "Utilização de opções internacionais para capturar oportunidades em diferentes cenários de mercado com risco controlado.",
      icon: TrendingUp,
      highlight: null,
    },
    {
      title: "Patrimônio Consolidado",
      description:
        "Fundo em funcionamento normal desde agosto de 2025, com patrimônio líquido consolidado e base de cotistas estabelecida.",
      icon: Target,
      highlight: "R$ 1,09 mi",
      highlightLabel: "Patrimônio Líquido",
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[600px] h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-[150px] z-0" />

        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-4 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[900px] text-center text-foreground text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              O Risco de Investir Apenas no Brasil
            </h2>
            <p className="w-full max-w-[700px] text-center text-muted-foreground text-lg md:text-xl leading-relaxed text-pretty">
              Concentrar investimentos em um único mercado expõe seu patrimônio a riscos políticos, cambiais e
              econômicos locais. A diversificação internacional é essencial para proteger e potencializar resultados.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
