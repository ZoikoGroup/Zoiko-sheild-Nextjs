"use client";

import React, { useState } from "react";
import {
  HeroSection,
  RegistryDataSection,
  TheProblemSection,
  TechnologyCatalogSection,
  CoreMethodologySection,
  PlatformResolutionMapSection,
  AiGovernanceDirectivesSection,
  TrustGatewaySection,
  InteroperabilitySection,
  LeadershipSection,
  EvidentiaryAssuranceSection,
  HistoricalLedgerSection,
  AboutCtaBannerSection,
  AboutFaqSection,
} from "@/components/about-zoiko-tech";
import { DemoModal } from "@/components/ui/DemoModal";

export default function AboutZoikoTechPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="w-full min-h-screen bg-stone-100 text-slate-900 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection
        onOpenDemo={() => setIsDemoOpen(true)}
        onTalkToSecurity={() => setIsDemoOpen(true)}
        onViewLeadership={() => scrollToSection("leadership-section")}
      />

      {/* 2. Verified Corporate Profile (Registry Data) */}
      <RegistryDataSection />

      {/* 3. The Problem */}
      <TheProblemSection />

      {/* 4. Technology Catalog (Security Architecture) */}
      <TechnologyCatalogSection />

      {/* 5. Core Methodology (Operating Principles) */}
      <CoreMethodologySection />

      {/* 6. Platform Resolution Map (Tracing Principle to Proof) */}
      <PlatformResolutionMapSection />

      {/* 7. Responsible Security & AI Directives */}
      <AiGovernanceDirectivesSection />

      {/* 8. Trust Gateway (Compliance, Privacy & Status) */}
      <TrustGatewaySection />

      {/* 9. Interoperability & Integration Ecosystem */}
      <InteroperabilitySection />

      {/* 10. Leadership & Governance */}
      <LeadershipSection />

      {/* 11. Evidentiary Assurance Policy */}
      <EvidentiaryAssuranceSection />

      {/* 12. Historical Ledger (Registry Timeline) */}
      <HistoricalLedgerSection />

      {/* 13. Conversion CTA Banner */}
      <AboutCtaBannerSection
        onRequestDemo={() => setIsDemoOpen(true)}
        onTalkToArchitect={() => setIsDemoOpen(true)}
      />

      {/* 14. Architecture & Corporate Facts FAQs */}
      <AboutFaqSection />

      {/* Interactive Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
