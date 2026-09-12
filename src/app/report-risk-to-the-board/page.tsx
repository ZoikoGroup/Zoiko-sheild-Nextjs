import React from "react";

import { HeroSection } from "@/components/report-risk-to-the-board/HeroSection";
import { WhatChangedSection } from "@/components/report-risk-to-the-board/WhatChangedSection";
import { StatementAnatomySection } from "@/components/report-risk-to-the-board/StatementAnatomySection";
import { EvidenceDrillDownSection } from "@/components/report-risk-to-the-board/EvidenceDrillDownSection";
import { UncertaintySection } from "@/components/report-risk-to-the-board/UncertaintySection";
import { MethodBoundariesSection } from "@/components/report-risk-to-the-board/MethodBoundariesSection";
import { TrendBenchmarkSection } from "@/components/report-risk-to-the-board/TrendBenchmarkSection";
import { AIRelatedSection } from "@/components/report-risk-to-the-board/AIRelatedSection";
import { PackConfidentialitySection } from "@/components/report-risk-to-the-board/PackConfidentialitySection";
import { FAQSection } from "@/components/report-risk-to-the-board/FAQSection";
import { CTASection } from "@/components/report-risk-to-the-board/CTASection";

export default function ReportRiskToTheBoardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zoiko-beige text-zoiko-dark relative">

      <main className="flex-grow w-full">
        <HeroSection />

        <WhatChangedSection />

        <StatementAnatomySection />
        <EvidenceDrillDownSection />

        <UncertaintySection />
        <MethodBoundariesSection />

        <TrendBenchmarkSection />
        <AIRelatedSection />

        <PackConfidentialitySection />
        
        <FAQSection />

        <CTASection />
      </main>

    </div>
  );
}

