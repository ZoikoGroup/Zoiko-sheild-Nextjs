import {
  PlatformArchitectureHero,
  ArchitectureAtAGlance,
  ThreeTaxonomies,
  FiveLayerContract,
  TrustBoundaries,
  DeploymentModel,
  DataControlFlows,
  DiagramDisclosure,
  EstateEdgeRelationships,
  ControlledArchitectureReview,
} from "@/components/platform-architecture";

export default function ArchitecturePage() {
  return (
    <main>
      <PlatformArchitectureHero />
      <ArchitectureAtAGlance />
      <ThreeTaxonomies />
      <FiveLayerContract />
      <TrustBoundaries />
      <DeploymentModel />
      <DataControlFlows />
      <DiagramDisclosure />
      <EstateEdgeRelationships />
      <ControlledArchitectureReview />
    </main>
  );
}
