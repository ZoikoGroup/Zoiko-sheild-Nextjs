import React from "react";
import { HeroSection } from "@/components/how-zoikoshield-works/HeroSection";
import { OperatingModelSection } from "@/components/how-zoikoshield-works/OperatingModelSection";
import { ConnectSection } from "@/components/how-zoikoshield-works/ConnectSection";
import { CorrelateSection } from "@/components/how-zoikoshield-works/CorrelateSection";
import { GovernSection } from "@/components/how-zoikoshield-works/GovernSection";
import { PreserveSection } from "@/components/how-zoikoshield-works/PreserveSection";
import { VerifySection } from "@/components/how-zoikoshield-works/VerifySection";
import { ScenariosSection } from "@/components/how-zoikoshield-works/ScenariosSection";
import { PathwaysSection } from "@/components/how-zoikoshield-works/PathwaysSection";
import { ProofSection } from "@/components/how-zoikoshield-works/ProofSection";
import { FAQSection } from "@/components/how-zoikoshield-works/FAQSection";
import { CTASection } from "@/components/how-zoikoshield-works/CTASection";

export default function HowZoikoShieldWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zoiko-beige text-zoiko-dark relative overflow-x-hidden">
      <main className="flex-grow w-full">
        <HeroSection />
        <OperatingModelSection />
        <ConnectSection />
        <CorrelateSection />
        <GovernSection />
        <PreserveSection />
        <VerifySection />
        <ScenariosSection />
        <PathwaysSection />
        <ProofSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
}
