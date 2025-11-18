import { HeroSection } from "@/components/hero-section"
import { FundHighlights } from "@/components/fund-highlights"
import { PerformanceSection } from "@/components/performance-section"
import { FeeStructureSection } from "@/components/fee-structure-section"
import { SocialImpactSection } from "@/components/social-impact-section"
import { InvestmentClassesSection } from "@/components/investment-classes-section"
import { RiskMatrixSection } from "@/components/risk-matrix-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          <HeroSection />
        </main>

        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 mt-16" delay={0.1}>
          <FundHighlights />
        </AnimatedSection>

        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <PerformanceSection />
        </AnimatedSection>

        <AnimatedSection id="social-impact" className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <SocialImpactSection />
        </AnimatedSection>

        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <InvestmentClassesSection />
        </AnimatedSection>

        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <FeeStructureSection />
        </AnimatedSection>

        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <RiskMatrixSection />
        </AnimatedSection>

        <AnimatedSection id="faq-section" className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <FAQSection />
        </AnimatedSection>

        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <CTASection />
        </AnimatedSection>

        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
