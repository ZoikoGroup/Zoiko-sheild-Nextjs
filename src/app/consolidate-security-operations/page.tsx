import {
  ConnectSecurityOperations,
  FragmentationMapSection,
  ConnectExistingToolsSection,
  NormalizeAndCorrelate,
  TriageAndInvestigateSection,
  CasesAndWorkflowSyncSection,
  GovernResponse,
  EvidenceAndInvestigationSection,
  OperatingModelAndServicesSection,
  TrustAndFaqSection,
  SecurityOperationsSection,
} from "@/components/consolidate";

export default function ConsolidateSecurityOperationsPage() {
  return (
    <main>
      <ConnectSecurityOperations />
      <FragmentationMapSection />
      <ConnectExistingToolsSection />
      <NormalizeAndCorrelate />
      <TriageAndInvestigateSection />
      <CasesAndWorkflowSyncSection />
      <GovernResponse />
      <EvidenceAndInvestigationSection />
      <OperatingModelAndServicesSection />
      <TrustAndFaqSection />
      <SecurityOperationsSection />
    </main>
  );
}
