import {
  SystemStatus,
  ActiveIncidentCard,
  CurrentStatusByDomain,
  RegionalAndEnvironmentPosture,
  CurrentIncidentLogAndTimeline,
  SystemMetricsAndHistoricalPerformance,
  UpcomingMaintenanceAndRecentIncidentHistory,
  PostIncidentReviews,
  NeverMissAStateChange,
  StatusVsLocalEnvironmentHealth,
  MachineReadableIntegrations,
  DetailedArchitectureAndStateConstraints,
} from "@/components/system-status";

export default function SystemStatusPage() {
  return (
    <main>
      <SystemStatus />
      <ActiveIncidentCard />
      <CurrentStatusByDomain />
      <RegionalAndEnvironmentPosture />
      <CurrentIncidentLogAndTimeline />
      <SystemMetricsAndHistoricalPerformance />
      <UpcomingMaintenanceAndRecentIncidentHistory />
      <PostIncidentReviews />
      <NeverMissAStateChange />
      <StatusVsLocalEnvironmentHealth />
      <MachineReadableIntegrations />
      <DetailedArchitectureAndStateConstraints />
    </main>
  );
}
