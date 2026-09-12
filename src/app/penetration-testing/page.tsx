import {
  PenetrationTestingHero,
  RightAssessmentTabs,
  AuthorizationAndRulesSection,
  ScopeInventorySection,
  HowTestingWorksSection,
  SafetyBoundarySection,
  FindingsAndEvidenceSection,
  RemediationAndRetestSection,
  ThirdPartiesAndDataSection,
  GetStartedSection,
} from "@/components/penetration-testing";

export default function PenetrationTestingPage() {
  return (
    <main>
      <PenetrationTestingHero />
      <RightAssessmentTabs />
      <AuthorizationAndRulesSection />
      <ScopeInventorySection />
      <HowTestingWorksSection />
      <SafetyBoundarySection />
      <FindingsAndEvidenceSection />
      <RemediationAndRetestSection />
      <ThirdPartiesAndDataSection />
      <GetStartedSection />
    </main>
  );
}
