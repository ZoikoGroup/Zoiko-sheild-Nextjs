import {
  AISecurityAssistant,
  GroundedAnswerAnnotated,
  TenContextStates,
  ToolAvailability,
  DecisionRights,
  DeterministicFallbackComponent,
  WhereAssistanceHandsOffComponent,
  DataUseLimitsComponent,
  NextStepComponent,
} from "@/components/investigation-assistant";

export default function InvestigationAssistantPage() {
  return (
    <main>
      <AISecurityAssistant />
      <GroundedAnswerAnnotated />
      <TenContextStates />
      <ToolAvailability />
      <DecisionRights />
      <DeterministicFallbackComponent />
      <WhereAssistanceHandsOffComponent />
      <DataUseLimitsComponent />
      <NextStepComponent />
    </main>
  );
}
