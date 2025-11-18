export function InvestmentDetailsSection() {
  const details = [
    {
      label: "Categoria",
      value: "Multimercado",
      subtext: "Investimento no Exterior",
    },
    {
      label: "Patrimônio Líquido",
      value: "R$ 1,09 mi",
      subtext: "Em funcionamento normal",
    },
    {
      label: "Benchmark",
      value: "Dólar",
      subtext: "Dólar comercial",
    },
    {
      label: "Administrador",
      value: "S3 CACEIS",
      subtext: "Gestão especializada",
    },
  ]

  return (
    <section className="w-full px-5 py-16 md:py-20 flex justify-center items-center">
      <div className="max-w-[1200px] w-full">
        <div className="rounded-3xl border-2 border-primary/30 p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-background to-primary/5">
          <div className="relative z-10">
            <div className="flex flex-col items-center gap-3 mb-10">
              <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold text-center text-balance">
                Detalhes do Fundo
              </h2>
              <p className="text-muted-foreground text-base md:text-lg text-center max-w-[600px]">
                Informações completas sobre o Rocha Opções Internacionais FIM
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-background/50 border border-primary/20"
                >
                  <span className="text-muted-foreground text-sm font-bold uppercase tracking-wide">
                    {detail.label}
                  </span>
                  <span className="text-primary text-3xl md:text-4xl font-bold">{detail.value}</span>
                  <span className="text-muted-foreground text-sm">{detail.subtext}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="p-4 rounded-xl bg-background/30 border border-primary/10">
                  <h4 className="text-foreground font-bold mb-2 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                      <path d="M8 1L10 6L15 7L11 11L12 16L8 13L4 16L5 11L1 7L6 6L8 1Z" fill="currentColor" />
                    </svg>
                    Estrutura do Fundo
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    FIF (Fundo de Investimento Financeiro) multimercado com estratégia em opções internacionais. Investe
                    100% offshore para exposição global.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background/30 border border-primary/10">
                  <h4 className="text-foreground font-bold mb-2 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-secondary">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M8 4V8L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Primeira Cota
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Fundo iniciado em 20/08/2025, em funcionamento normal. CNPJ 61.748.792/0001-71, adaptação RCVM 175
                    prevista para 15/07/2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
