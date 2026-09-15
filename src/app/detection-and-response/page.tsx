import {
  AIRiskCompliance,
  ConditionalChildren,
  DecisionHistory,
  DetectionCTA,
  DetectResponse,
  Evidence,
  GovernedResponse,
  Investigation,
  Lifecycle,
  ProofFAQ,
  ServiceHandoffs,
  SourceSignals,
} from "@/components/detection-and-response";

export default function Page() {
  return (
    <main>
      <DetectResponse />
      <Lifecycle />
      <SourceSignals />
      <Investigation />
      <Evidence />
      <DecisionHistory />
      <GovernedResponse />
      <ConditionalChildren />
      <ServiceHandoffs />
      <AIRiskCompliance />
      <ProofFAQ />
      <DetectionCTA />
    </main>
  );
}