import type { Metadata } from "next";
import {
  PrivacyHeroSection,
  PrivacyAssuranceSnapshotSection,
  PrivacyByDesignSection,
  PrivacyDataLifecycleSection,
  PrivacyCategoriesPurposesSection,
  PrivacyAccessIsolationSection,
  PrivacySecurityIntegritySection,
  PrivacyRetentionSection,
  PrivacyResidencySection,
  PrivacyVendorsSection,
  PrivacyRightsSection,
  PrivacyAiGovernanceSection,
  PrivacyCustomerControlsSection,
  PrivacyEvidenceSection,
  PrivacyIncidentSupportSection,
  PrivacyDueDiligenceSection,
  PrivacyFaqSection,
} from "@/components/privacy-data-protection";

export const metadata: Metadata = {
  title: "Privacy & Data Protection | Zoiko Shield",
  description:
    "Privacy controls that operate with the system—not around it. Automate verification of tenant boundaries, data classification, and continuous cryptographic deletion.",
};

export default function PrivacyDataProtectionPage() {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F0]">
      <PrivacyHeroSection />
      <PrivacyAssuranceSnapshotSection />
      <PrivacyByDesignSection />
      <PrivacyDataLifecycleSection />
      <PrivacyCategoriesPurposesSection />
      <PrivacyAccessIsolationSection />
      <PrivacySecurityIntegritySection />
      <PrivacyRetentionSection />
      <PrivacyResidencySection />
      <PrivacyVendorsSection />
      <PrivacyRightsSection />
      <PrivacyAiGovernanceSection />
      <PrivacyCustomerControlsSection />
      <PrivacyEvidenceSection />
      <PrivacyIncidentSupportSection />
      <PrivacyDueDiligenceSection />
      <PrivacyFaqSection />
    </div>
  );
}
