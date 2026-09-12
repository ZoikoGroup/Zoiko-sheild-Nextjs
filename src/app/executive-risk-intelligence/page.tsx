import {
  ExecutiveRiskIntelligence,
  DirectAnswerSection,
  TraceabilitySection,
  ChangeIntelligence,
  DecisionRights,
  MethodVisibilitySection,
  VisibleBoundariesSection,
  ConnectedGovernance,
  GovernedIntelligenceSection,
  ControlledDistribution,
  ProofAndFaqSection,
  ExecutiveClaritySection,
} from "@/components/executive-risk-intelligence";

export default function ExecutiveRiskIntelligencePage() {
  return (
    <main>
      <ExecutiveRiskIntelligence />
      <DirectAnswerSection />
      <TraceabilitySection />
      <ChangeIntelligence />
      <DecisionRights />
      <MethodVisibilitySection />
      <VisibleBoundariesSection />
      <ConnectedGovernance />
      <GovernedIntelligenceSection />
      <ControlledDistribution />
      <ProofAndFaqSection />
      <ExecutiveClaritySection />
    </main>
  );
}
