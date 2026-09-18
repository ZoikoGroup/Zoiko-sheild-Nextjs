"use client";

import React, { useState } from "react";
import {
  HeroSection,
  OverviewSection,
  InvestigationSection,
  EvidenceSection,
  CommunicationsSection,
  DecisionHistorySection,
  AuthorityHandoffsSection,
  AiAssistanceSection,
  ProofTrustSection,
  FAQSection,
  FinalCtaSection,
} from "@/components/case-management";
import { DemoModal } from "@/components/ui/DemoModal";

export default function CaseManagementPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-[#F5F2EB] text-[#151B28] antialiased selection:bg-[#C53B3B] selection:text-white">
      <HeroSection onOpenDemo={() => setIsDemoOpen(true)} />
      <OverviewSection />
      <InvestigationSection />
      <EvidenceSection />
      <CommunicationsSection />
      <DecisionHistorySection />
      <AuthorityHandoffsSection />
      <AiAssistanceSection />
      <ProofTrustSection />
      <FAQSection />
      <FinalCtaSection onOpenDemo={() => setIsDemoOpen(true)} />

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
