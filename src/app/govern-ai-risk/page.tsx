import {
  AIRiskGovernanceSection,
  InventoryCoverageSection,
  RiskControlOperatingModelSection,
  EvaluationRecordsSection,
  DecisionRightsSection,
  TransparencySection,
  IncidentResponseSection,
  ProofRoutesSection,
  FAQSection,
  GovernWithProofHeroSection,
} from "@/components/govern-ai-risk";

export default function GovernAiRiskPage() {
  return (
    <main>
      <AIRiskGovernanceSection />
      <InventoryCoverageSection />
      <RiskControlOperatingModelSection />
      <EvaluationRecordsSection />
      <DecisionRightsSection />
      <TransparencySection />
      <IncidentResponseSection />
      <ProofRoutesSection />
      <FAQSection />
      <GovernWithProofHeroSection />
    </main>
  );
}
