import {
  HeroSection,
  IntegrationChannelsSection,
  AugmentSection,
  RegistryMatrixSection,
  IdentitySection,
  IncidentCorrelationSection,
  EndpointComplianceSection,
  AzureVisibilitySection,
  ComplianceEvidenceSection,
  EvidencePipelineSection,
  ResponsibilitySection,
  SetupJourneySection,
  AuditGapSection,
  ProcurementFaqSection,
  CtaSection,
  FaqSection,
} from "@/components/microsoft-ecosystem";

export default function MicrosoftEcosystemPage() {
  return (
    <main>
      <HeroSection />
      <IntegrationChannelsSection />
      <AugmentSection />
      <RegistryMatrixSection />
      <IdentitySection />
      <IncidentCorrelationSection />
      <EndpointComplianceSection />
      <AzureVisibilitySection />
      <ComplianceEvidenceSection />
      <EvidencePipelineSection />
      <ResponsibilitySection />
      <SetupJourneySection />
      <AuditGapSection />
      <ProcurementFaqSection />
      <CtaSection />
      <FaqSection />
    </main>
  );
}
