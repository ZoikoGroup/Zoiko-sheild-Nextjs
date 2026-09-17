import {
  AiDecisionRights,
  SourceDefinedClasses,
  PolicyAnatomy,
  AdvisorySection,
  ReviewRequiredSection,
  ApprovalRequiredSection,
  ProhibitedSection,
  UnknownUnresolvedSection,
  PermissionSeparation,
  OverrideCorrection,
  RelatedDomains,
  FAQSection,
  DecisionRightEnforcementContract,
  ReadyToMakeAiAuthorityExplicit,
} from "@/components/ai-decision-rights";

export default function AiDecisionRightsPage() {
  return (
    <main>
      <AiDecisionRights />
      <SourceDefinedClasses />
      <PolicyAnatomy />
      <AdvisorySection />
      <ReviewRequiredSection />
      <ApprovalRequiredSection />
      <ProhibitedSection />
      <UnknownUnresolvedSection />
      <PermissionSeparation />
      <OverrideCorrection />
      <RelatedDomains />
      <FAQSection />
      <DecisionRightEnforcementContract />
      <ReadyToMakeAiAuthorityExplicit />
    </main>
  );
}
