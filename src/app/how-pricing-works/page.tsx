"use client";

import React, { useState } from "react";
import {
  HeroProcurementSection,
  CostDriversSection,
  IndicativeEstimatorSection,
  CapabilityBlocksSection,
  ScopingMetricsSection,
  UsageRetentionSection,
  IntegrationTopologySection,
  ComplianceNoticeSection,
  ImplementationSlaSection,
  CoreInclusionsSection,
  VariabilityMatricesSection,
  IntegrityPipelineSection,
  ProcurementProtocolsSection,
  AccountManagementSection,
  PricingFaqSection,
  PricingCtaBannerSection,
} from "@/components/how-pricing-works";
import { DemoModal } from "@/components/ui/DemoModal";

export default function HowPricingWorksPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoOpen(true);
  };

  return (
    <main className="w-full min-h-screen bg-stone-100 text-slate-900 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Hero Procurement Section */}
      <HeroProcurementSection onOpenDemo={handleOpenDemo} />

      {/* 2. Six Key Architectural Drivers */}
      <CostDriversSection />

      {/* 3. Indicative Scope Estimator */}
      <IndicativeEstimatorSection onOpenDemo={handleOpenDemo} />

      {/* 4. Capability Blocks */}
      <CapabilityBlocksSection />

      {/* 5. Scoping Metrics */}
      <ScopingMetricsSection />

      {/* 6. Usage and Retention */}
      <UsageRetentionSection />

      {/* 7. Integration Topology */}
      <IntegrationTopologySection />

      {/* 8. Regulatory Compliance Ledger Notice */}
      <ComplianceNoticeSection />

      {/* 9. Implementation & SLA Tiers */}
      <ImplementationSlaSection />

      {/* 10. Common Quote Inclusions */}
      <CoreInclusionsSection />

      {/* 11. Variability Matrices */}
      <VariabilityMatricesSection />

      {/* 12. Commercial Integrity Pipeline */}
      <IntegrityPipelineSection />

      {/* 13. Procurement Protocols */}
      <ProcurementProtocolsSection />

      {/* 14. Account Management */}
      <AccountManagementSection onOpenDemo={handleOpenDemo} />

      {/* 15. Detailed Architecture FAQs */}
      <PricingFaqSection />

      {/* 16. Defensible Enterprise Security CTA Banner */}
      <PricingCtaBannerSection onOpenDemo={handleOpenDemo} />

      {/* Interactive Demo / Scoping Modal */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </main>
  );
}
