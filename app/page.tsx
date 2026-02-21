import { HeroSection } from "@/components/hero-section";
import { WhatIDoSection } from "@/components/what-i-do-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { CredibilitySection } from "@/components/credibility-section";
import { AboutSection } from "@/components/about-section";
import { FinalCTASection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatIDoSection />
      <HowItWorksSection />
      <CredibilitySection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
