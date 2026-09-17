import {
  AiSecurityGovernance,
  AiGovernanceAtAGlance,
  InvestigationAssistantSection,
  AiDecisionRights,
  GroundingSourcesCitations,
  ToolsAndPermissions,
  OverrideAndSafeFallback,
  AiRiskControlsAndGovernance,
  DataUseAndPrivacy,
  HowAiWorksAcrossZoikoshield,
  ProofAndTransparencyFaq,
  BringBoundedCitedAndOverridableAi,
} from "@/components/ai-security-governance";

export default function AiSecurityGovernancePage() {
  return (
    <main>
      <AiSecurityGovernance />
      <AiGovernanceAtAGlance />
      <InvestigationAssistantSection />
      <AiDecisionRights />
      <GroundingSourcesCitations />
      <ToolsAndPermissions />
      <OverrideAndSafeFallback />
      <AiRiskControlsAndGovernance />
      <DataUseAndPrivacy />
      <HowAiWorksAcrossZoikoshield />
      <ProofAndTransparencyFaq />
      <BringBoundedCitedAndOverridableAi />
    </main>
  );
}
