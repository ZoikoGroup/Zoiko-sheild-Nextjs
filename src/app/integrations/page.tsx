import {
  PlatformIntegrations,
  CatalogAtAGlance,
  ConnectorRecordContract,
  ConnectionGovernance,
  PermissionsAndLeastPrivilege,
  DataMovementAndTrustBoundaries,
  HealthAndFreshness,
  GovernedActions,
  SelectiveConnection,
  DemandIntake,
  DeveloperDocsCards,
  NextStepCTA,
} from "@/components/platform-integrations";

export default function IntegrationsPage() {
  return (
    <main>
      <PlatformIntegrations />
      <CatalogAtAGlance />
      <ConnectorRecordContract />
      <ConnectionGovernance />
      <PermissionsAndLeastPrivilege />
      <DataMovementAndTrustBoundaries />
      <HealthAndFreshness />
      <GovernedActions />
      <SelectiveConnection />
      <DemandIntake />
      <DeveloperDocsCards />
      <NextStepCTA />
    </main>
  );
}
