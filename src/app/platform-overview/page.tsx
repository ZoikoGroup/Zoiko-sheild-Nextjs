import {
  PlatformHero,
  OperatingSequence,
  FiveLayerModel,
  OperatingLayer,
  WhereToGoDeeper,
  TwoWaysToStart,
  RouteStateMap,
  NextStepCTA,
} from "@/components/platform-overview";

export default function OverviewPage() {
  return (
    <main>
      <PlatformHero />
      <OperatingSequence />
      <FiveLayerModel />
      <OperatingLayer />
      <WhereToGoDeeper />
      <TwoWaysToStart />
      <RouteStateMap />
      <NextStepCTA />
    </main>
  );
}
