import {
  ContinuousAssuranceHero,
  WhoThisIsForSection,
  ScopeBeforePromiseSection,
  HowRecordsConnectSection,
  ReviewAndExceptionsSection,
  OutputsAndLimitationsSection,
  CompareStartingPathsSection,
  FrameworkBoundarySection,
  TrustAndProofSection,
  FaqSection,
  NextStepSection,
} from "@/components/continuous-assurance";

export default function ContinuousAssurancePage() {
  return (
    <main>
      <ContinuousAssuranceHero />
      <WhoThisIsForSection />
      <ScopeBeforePromiseSection />
      <HowRecordsConnectSection />
      <ReviewAndExceptionsSection />
      <OutputsAndLimitationsSection />
      <CompareStartingPathsSection />
      <FrameworkBoundarySection />
      <TrustAndProofSection />
      <FaqSection />
      <NextStepSection />
    </main>
  );
}
