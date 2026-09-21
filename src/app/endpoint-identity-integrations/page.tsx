import {
  HeroSection,
  DomainStatusSection,
  WhyTogetherSection,
  StatusMatrixSection,
  EndpointSecuritySection,
  IdentityAuthSection,
  DevicePostureSection,
  PrivilegedAccessSection,
  EntityResolutionSection,
  InvestigationTimelineSection,
  EvidenceLedgerSection,
  ResponseGovernanceSection,
  SetupFlowSection,
  CoverageAssuranceSection,
  ProcurementTrustSection,
  CtaSection,
  FaqSection,
} from "@/components/endpoint-identity-integrations";

export default function EndpointIdentityIntegrationsPage() {
  return (
    <main>
      <HeroSection />
      <DomainStatusSection />
      <WhyTogetherSection />
      <StatusMatrixSection />
      <EndpointSecuritySection />
      <IdentityAuthSection />
      <DevicePostureSection />
      <PrivilegedAccessSection />
      <EntityResolutionSection />
      <InvestigationTimelineSection />
      <EvidenceLedgerSection />
      <ResponseGovernanceSection />
      <SetupFlowSection />
      <CoverageAssuranceSection />
      <ProcurementTrustSection />
      <CtaSection />
      <FaqSection />
    </main>
  );
}
