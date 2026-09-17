import {
  B2bSaasCloudAi,
  BuyerPressures,
  SaasTenantAndSharedResponsibility,
  GovernedIntelligenceSection,
  AiGovernance,
  SecurityOperations,
  ReviewableAssuranceSection,
  EnterpriseProofRoute,
  EvidenceLinkedRiskReview,
  FrequentlyAskedQuestions,
  StartWithDeclaredScopeSection,
} from "@/components/b2b-saas";

export default function B2BSaasPage() {
  return (
    <main>
      <B2bSaasCloudAi />
      <BuyerPressures />
      <SaasTenantAndSharedResponsibility />
      <GovernedIntelligenceSection />
      <AiGovernance />
      <SecurityOperations />
      <ReviewableAssuranceSection />
      <EnterpriseProofRoute />
      <EvidenceLinkedRiskReview />
      <FrequentlyAskedQuestions />
      <StartWithDeclaredScopeSection />
    </main>
  );
}
