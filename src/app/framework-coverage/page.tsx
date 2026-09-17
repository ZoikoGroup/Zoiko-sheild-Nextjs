import {
  FrameworkCoverage,
  ClaimBoundary,
  FrameworkDirectory,
  ControlledPlaceholder,
  RelationshipContext,
  VersionHistory,
  LimitationsAndGaps,
  LicensingAndFaq,
  TrustAndServiceHandoffs,
  DiscussYourScope,
} from "@/components/FrameworkCoverage";

export default function FrameworkCoveragePage() {
  return (
    <main>
      <FrameworkCoverage />
      <ClaimBoundary />
      <FrameworkDirectory />
      <ControlledPlaceholder />
      <RelationshipContext />
      <VersionHistory />
      <LimitationsAndGaps />
      <LicensingAndFaq />
      <TrustAndServiceHandoffs />
      <DiscussYourScope />
    </main>
  );
}
