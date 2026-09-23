import type { Metadata } from "next";
import {
  ProveControlsHero,
  ComplianceGapSection,
  AssuranceModelSection,
  LivePostureSnapshotSection,
  ControlRegistrySection,
  TelemetryCapabilitiesSection,
  EvidenceIntegritySection,
  FrameworkReuseSection,
  RiskMitigationSection,
  AuditTrailTimelineSection,
  AuditPackagesSection,
  IntegrationsHealthSection,
  OrganizationalAlignmentSection,
  BusinessImpactSection,
  ComplianceSecuritySection,
  ProveControlsFaqSection,
  DefensibleComplianceCtaSection,
} from "@/components/prove-controls-continuously";

export const metadata: Metadata = {
  title: "Prove Controls Continuously | Zoiko Shield",
  description:
    "Turn control assurance from a periodic exercise into a continuously evaluated operating state with current, traceable cryptographic evidence.",
  openGraph: {
    title: "Prove Controls Continuously | Zoiko Shield",
    description:
      "Turn control assurance from a periodic exercise into a continuously evaluated operating state with current, traceable cryptographic evidence.",
    images: ["/images/prove-controls-continuously/hero-right-visual.png"],
  },
};

export default function ProveControlsContinuouslyPage() {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F0]">
      {/* 1. Hero Section */}
      <ProveControlsHero />

      {/* 2. The Compliance Gap Section */}
      <ComplianceGapSection />

      {/* 3. Assurance Engine Lifecycle Model */}
      <AssuranceModelSection />

      {/* 4. Live Assurance Posture Snapshot */}
      <LivePostureSnapshotSection />

      {/* 5. Control Registry Table & Ownership */}
      <ControlRegistrySection />

      {/* 6. Deterministic Tests vs Manual Review */}
      <TelemetryCapabilitiesSection />

      {/* 7. Evidence Provenance & Cryptographic Hashes */}
      <EvidenceIntegritySection />

      {/* 8. Framework Obligation Reuse & Mapping */}
      <FrameworkReuseSection />

      {/* 9. Risk Mitigation & Exception Tracking */}
      <RiskMitigationSection />

      {/* 10. Chronological Audit Trail & Time-Travel */}
      <AuditTrailTimelineSection />

      {/* 11. On-Demand Audit Packages & Portals */}
      <AuditPackagesSection />

      {/* 12. Ecosystem Context & Integration Health */}
      <IntegrationsHealthSection />

      {/* 13. Organizational Alignment & Role Dashboards */}
      <OrganizationalAlignmentSection />

      {/* 14. Business Impact & Posture Outcomes */}
      <BusinessImpactSection />

      {/* 15. Compliance Security & AI Guardrails */}
      <ComplianceSecuritySection />

      {/* 16. Architecture & Compliance FAQs */}
      <ProveControlsFaqSection />

      {/* 17. Defensible Compliance Conversion Band */}
      <DefensibleComplianceCtaSection />
    </div>
  );
}
