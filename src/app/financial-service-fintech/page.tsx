"use client";

import React from "react";
import {
  HeroSection,
  SectorSnapshotSection,
  InstitutionSelectorSection,
  RiskDomainsSection,
  SectorPackSection,
  IdentityAccessSection,
  ApiSecuritySection,
  ControlAssuranceSection,
  RegulatoryMappingSection,
  ThirdPartyResilienceSection,
  BoardReportingSection,
  EvidenceTraceableSection,
  FinancialCtaSection,
} from "@/components/financial-services-fintech";

export default function FinancialServiceFintechPage() {
  return (
    <main className="w-full min-h-screen bg-stone-100 text-slate-900 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Sector Snapshot (5 Cards Grid) */}
      <SectorSnapshotSection />

      {/* 3. Choose Your Institution Type (Filter Pills) */}
      <InstitutionSelectorSection />

      {/* 4. Risk & Assurance Domains (8 Distinct Domains) */}
      <RiskDomainsSection />

      {/* 5. Financial Services Sector Pack (6 Capability Cards) */}
      <SectorPackSection />

      {/* 6. Deep-Dive 1: Identity & Privileged Access */}
      <IdentityAccessSection />

      {/* 7. Deep-Dive 2: API, Application & Payment-Surface Security */}
      <ApiSecuritySection />

      {/* 8. Live Assurance Table: Continuous Control Assurance */}
      <ControlAssuranceSection />

      {/* 9. Regulatory Mapping Center (6 Framework Cards) */}
      <RegulatoryMappingSection />

      {/* 10. Third-Party ICT & Supply-Chain Resilience */}
      <ThirdPartyResilienceSection />

      {/* 11. Board & Regulator Reporting (4 Decision Cards) */}
      <BoardReportingSection />

      {/* 12. Evidence, Traceable to the Source */}
      <EvidenceTraceableSection />

      {/* 13. Conversion CTA Banner */}
      <FinancialCtaSection />
    </main>
  );
}
