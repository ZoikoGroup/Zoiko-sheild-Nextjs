import {
  HeroSection,
  AssuranceStatusSection,
  TrustAreasSection,
  InfrastructureSecuritySection,
  PrivacyPrinciplesSection,
  AiGovernanceSection,
  VulnerabilityDisclosureSection,
  EvidenceLibrarySection,
  ProcessorMapSection,
  ResilienceSection,
  OwnershipSection,
  ChangeLogSection,
  RequestReviewSection,
  FaqSection,
} from "@/components/trust-center";

export default function TrustCenterPage() {
  return (
    <main>
      <HeroSection />
      <AssuranceStatusSection />
      <TrustAreasSection />
      <InfrastructureSecuritySection />
      <PrivacyPrinciplesSection />
      <AiGovernanceSection />
      <VulnerabilityDisclosureSection />
      <EvidenceLibrarySection />
      <ProcessorMapSection />
      <ResilienceSection />
      <OwnershipSection />
      <ChangeLogSection />
      <RequestReviewSection />
      <FaqSection />
    </main>
  );
}
