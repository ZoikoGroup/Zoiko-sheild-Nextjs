import {
  DetectionAndResponse,
  AtAGlanceLifecycleSection,
  SourceSignalsSection,
  InvestigationSection,
  EvidenceSection,
  DecisionHistorySection,
  CorrelationSection,
  GovernedResponseSection,
  ConditionalChildrenSection,
  ServiceHandoffsSection,
  AiRiskComplianceSection,
  ProofFaqSection,
  BuildResponseSection,
} from "@/components/detection-and-response";

export default function DetectionAndResponsePage() {
  return (
    <main>
      <DetectionAndResponse />
      <AtAGlanceLifecycleSection />
      <SourceSignalsSection />
      <CorrelationSection />
      <InvestigationSection />
      <EvidenceSection />
      <DecisionHistorySection />
      <GovernedResponseSection />
      <ConditionalChildrenSection />
      <ServiceHandoffsSection />
      <AiRiskComplianceSection />
      <ProofFaqSection />
      <BuildResponseSection />
    </main>
  );
}
