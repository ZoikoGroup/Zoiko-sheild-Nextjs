import React from "react";
import type { Metadata } from "next";

import { HeroSection } from "@/components/compliance-control-plane/HeroSection";
import { GovernedComplianceRecordsSection } from "@/components/compliance-control-plane/GovernedComplianceRecordsSection";
import { EvidenceRelationshipSection } from "@/components/compliance-control-plane/EvidenceRelationshipSection";
import { FrameworkHandoffsSection } from "@/components/compliance-control-plane/FrameworkHandoffsSection";
import { AuditWorkspaceSection } from "@/components/compliance-control-plane/AuditWorkspaceSection";
import { FAQSection } from "@/components/compliance-control-plane/FAQSection";
import { ProofLinksSection } from "@/components/compliance-control-plane/ProofLinksSection";
import { CTASection } from "@/components/compliance-control-plane/CTASection";

export const metadata: Metadata = {
  title: "Compliance Control Plane | Zoiko Shield",
  description:
    "Make control assurance inspectable. ZoikoShield organizes governed controls, mappings, tests, assessments, exceptions, linked evidence and an audit workspace.",
};

export default function ComplianceControlPlanePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f0] text-[#0a2029] relative">
      <main className="flex-grow w-full">
        <HeroSection />
        <GovernedComplianceRecordsSection />
        <EvidenceRelationshipSection />
        <FrameworkHandoffsSection />
        <AuditWorkspaceSection />
        <FAQSection />
        <ProofLinksSection />
        <CTASection />
      </main>
    </div>
  );
}
