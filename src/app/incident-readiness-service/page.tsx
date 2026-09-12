import {
  IncidentReadinessSection,
  ReadinessAtAGlanceSection,
  PreparationScopeSection,
  ActivationGovernanceSection,
  CommunicationsSection,
  EvidenceAndHistorySection,
  ResponseHandoffSection,
  RecoveryGovernanceSection,
  ServiceOptionsSection,
  ResponsibilitySection,
  ProofAndHelpSection,
  CtaSection,
} from "@/components/incident-readiness-service";

export default function IncidentReadinessServicePage() {
  return (
    <main>
      <IncidentReadinessSection />
      <ReadinessAtAGlanceSection />
      <PreparationScopeSection />
      <ActivationGovernanceSection />
      <CommunicationsSection />
      <EvidenceAndHistorySection />
      <ResponseHandoffSection />
      <RecoveryGovernanceSection />
      <ServiceOptionsSection />
      <ResponsibilitySection />
      <ProofAndHelpSection />
      <CtaSection />
    </main>
  );
}
