"use client"

import { Linkedin, Mail, Phone } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col gap-8 py-10 md:py-[70px] border-t-2 border-primary/20">
      {/* Top Section: Logo and Description */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
        <div className="flex flex-col justify-start items-start gap-6 p-4 md:p-8 max-w-md">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15 8L22 9L17 14L18 22L12 18L6 22L7 14L2 9L9 8L12 2Z" fill="white" />
              </svg>
            </div>
            <div className="text-foreground text-2xl font-bold">Nexa FIDC</div>
          </div>
          <p className="text-muted-foreground text-sm font-normal leading-relaxed">
            Fundo de Investimento em Direitos Creditórios que une rentabilidade competitiva com impacto social real,
            financiando empresas que destinam recursos para entidades filantrópicas.
          </p>
          <div className="flex justify-start items-start gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-5 h-5 flex items-center justify-center hover:text-primary transition-colors"
            >
              <Linkedin className="w-full h-full text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:contato@nexafidc.com.br"
              aria-label="Email"
              className="w-5 h-5 flex items-center justify-center"
            >
              <Mail className="w-full h-full text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="tel:+551131130060" aria-label="Phone" className="w-5 h-5 flex items-center justify-center">
              <Phone className="w-full h-full text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
          <div className="flex flex-col justify-start items-start gap-3">
            <h3 className="text-muted-foreground text-sm font-bold leading-5 uppercase tracking-wide">O Fundo</h3>
            <div className="flex flex-col justify-end items-start gap-2">
              <a
                href="#performance"
                className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors"
              >
                Rentabilidade
              </a>
              <a
                href="#social-impact"
                className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors"
              >
                Impacto Social
              </a>
              <a
                href="#faq-section"
                className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors"
              >
                FAQ
              </a>
              <a
                href="#contato"
                className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <h3 className="text-muted-foreground text-sm font-bold leading-5 uppercase tracking-wide">Gestão</h3>
            <div className="flex flex-col justify-center items-start gap-2">
              <a
                href="https://www.seferinvestimentos.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors"
              >
                SEFER Investimentos
              </a>
              <a
                href="#"
                className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors"
              >
                Rocha Opções
              </a>
              <a
                href="#"
                className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors"
              >
                Documentos CVM
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <h3 className="text-muted-foreground text-sm font-bold leading-5 uppercase tracking-wide">Legal</h3>
            <div className="flex flex-col justify-center items-start gap-2">
              <a
                href="#"
                className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors"
              >
                Regulamento
              </a>
              <a
                href="#"
                className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors"
              >
                Lâmina de Informações
              </a>
              <a
                href="#"
                className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Legal Disclaimer */}
      <div className="border-t-2 border-primary/20 pt-8">
        <div className="space-y-4">
          <p className="text-muted-foreground text-xs leading-relaxed">
            <strong className="text-foreground">Aviso Legal:</strong> Este material tem caráter exclusivamente informativo, não constituindo qualquer tipo de recomendação, oferta ou solicitação de investimento. Investimentos em Fundos de Investimento em Direitos Creditórios apresentam riscos para o investidor. É recomendada a leitura atenta do Regulamento e do Formulário de Informações Complementares antes de investir. Fundos de investimento não contam com garantia da Administradora, da Gestora, de qualquer mecanismo de seguro ou do Fundo Garantidor de Créditos (FGC). A rentabilidade passada ou projetada não representa garantia de rentabilidade futura. Para avaliação da performance de um fundo de investimento, é recomendável a análise de, no mínimo, 12 (doze) meses.
          </p>
          <p className="text-muted-foreground text-xs">
            <strong className="text-foreground">Administradora:</strong> SEFER Investimentos DTVM - CNPJ 00.329.598/0001-67
          </p>
          <p className="text-muted-foreground text-xs">
            <strong className="text-foreground">Gestora:</strong> Rocha Opções de Investimentos LTDA - CNPJ 55.713.167/0001-91
          </p>
          <p className="text-muted-foreground text-xs">
            <strong className="text-foreground">Contato:</strong> Av. Brigadeiro Faria Lima, 3900, 6º andar, Conj. 601 - Itaim Bibi - São Paulo/SP - CEP 04538-132 | Tel: (11) 3113-0060 | Ouvidoria: 0800 494 1060
          </p>
          <p className="text-muted-foreground text-xs mt-4">
            © 2025 Nexa FIDC. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
