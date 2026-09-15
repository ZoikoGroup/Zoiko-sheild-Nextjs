import {
  AssuranceLedService,
  AssuranceQuestionsSection,
  DefineServiceBoundarySection,
  ContextConnectsSection,
  ReviewAndExceptionsSection,
  ApprovedDeliverablesSection,
  CompareStartingPathsSection,
  FrameworkBoundarySection,
  TrustAndProofSection,
  FrequentlyAskedQuestionsSection,
  AssuranceWorkSection,
} from "@/components/continues-assurance";

export default function ContinuesAssurancePage() {
  return (
    <main>
      <AssuranceLedService />
      <AssuranceQuestionsSection />
      <DefineServiceBoundarySection />
      <ContextConnectsSection />
      <ReviewAndExceptionsSection />
      <ApprovedDeliverablesSection />
      <CompareStartingPathsSection />
      <FrameworkBoundarySection />
      <TrustAndProofSection />
      <FrequentlyAskedQuestionsSection />
      <AssuranceWorkSection />
    </main>
  );
}
