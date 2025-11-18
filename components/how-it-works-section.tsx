export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Análise de Mercado Global",
      description:
        "A equipe de gestão da Rocha monitora constantemente mercados internacionais, identificando oportunidades em diferentes classes de ativos e regiões.",
    },
    {
      number: "02",
      title: "Estratégia com Opções",
      description:
        "Utilização de opções internacionais para construir posições com risco controlado, capturando movimentos de mercado em múltiplos cenários.",
    },
    {
      number: "03",
      title: "Diversificação Internacional",
      description:
        "Exposição 100% offshore com benchmark em dólar comercial, proporcionando hedge cambial e acesso a mercados desenvolvidos.",
    },
    {
      number: "04",
      title: "Gestão Ativa",
      description:
        "Acompanhamento contínuo das posições pela Rocha Opções de Investimentos, com ajustes táticos conforme mudanças de cenário.",
    },
  ]

  return (
    <section className="w-full px-5 py-16 md:py-24 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="w-[400px] h-[600px] absolute top-[200px] right-[-100px] origin-top-left rotate-[20deg] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-[120px] z-0" />

      <div className="max-w-[1200px] w-full relative z-10">
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16">
          <h2 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight text-balance">
            Como Funciona a Estratégia
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl text-center max-w-[700px] text-pretty">
            Um processo sofisticado de gestão ativa em mercados internacionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">{step.number}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <h3 className="text-foreground text-xl md:text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
