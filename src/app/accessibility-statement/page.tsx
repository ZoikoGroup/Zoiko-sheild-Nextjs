import {
  HeroSection,
  StandardsScopeSection,
  ConformanceStatusSection,
  AccessibilityFeaturesSection,
  KnownLimitationsSection,
  TestingCompatibilitySection,
  FeedbackFormSection,
  FeedbackLifecycleSection,
  ThirdPartyScopeSection,
  EnterpriseAccessibilitySection,
  RemediationGovernanceSection,
  VersionHistorySection,
  FaqSection,
} from "@/components/accessibility-statement";

export default function AccessibilityStatementPage() {
  return (
    <main>
      <HeroSection />
      <StandardsScopeSection />
      <ConformanceStatusSection />
      <AccessibilityFeaturesSection />
      <KnownLimitationsSection />
      <TestingCompatibilitySection />
      <FeedbackFormSection />
      <FeedbackLifecycleSection />
      <ThirdPartyScopeSection />
      <EnterpriseAccessibilitySection />
      <RemediationGovernanceSection />
      <VersionHistorySection />
      <FaqSection />
    </main>
  );
}
