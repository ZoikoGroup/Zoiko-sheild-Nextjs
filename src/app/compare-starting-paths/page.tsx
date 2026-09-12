import {
  CompareStartingPaths,
  CompareServices,
  WhatJobAreYouTryingToSolve,
  ComparisonMatrix,
  ParallelPaths,
  ManagedDefenseSummary,
  ContinuousAssuranceSummary,
  PrepareOwners,
  FindTheRightRoute,
  TrustAndProcurement,
  FAQ,
  ExploreServicePage,
} from "@/components/compare-starting-paths";

export default function CompareStartingPathsPage() {
  return (
    <main>
      <CompareStartingPaths />
      <CompareServices />
      <WhatJobAreYouTryingToSolve />
      <ComparisonMatrix />
      <ParallelPaths />
      <ManagedDefenseSummary />
      <ContinuousAssuranceSummary />
      <PrepareOwners />
      <FindTheRightRoute />
      <TrustAndProcurement />
      <FAQ />
      <ExploreServicePage />
    </main>
  );
}
