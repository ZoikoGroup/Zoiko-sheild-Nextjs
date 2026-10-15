import type { Metadata } from "next";
import {
  PlannedMaintenanceHero,
  MaintenanceSummaryStrip,
  ActiveEventsSection,
  NextScheduledSection,
  MaintenanceCalendarSection,
  MaintenanceDetailTimelineSection,
  ExpectedImpactSection,
  MaintenanceComparisonSection,
  MaintenanceFaqSection,
} from "@/components/planned-maintenance";

export const metadata: Metadata = {
  title: "Planned Maintenance & Operational Windows | Zoiko Shield",
  description:
    "Review scheduled maintenance windows, expected system impact, affected service layers, required customer-side actions, and live execution progress verified directly by telemetry.",
};

export default function PlannedMaintenancePage() {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F0]">
      <PlannedMaintenanceHero />
      <MaintenanceSummaryStrip />
      <ActiveEventsSection />
      <NextScheduledSection />
      <MaintenanceCalendarSection />
      <MaintenanceDetailTimelineSection />
      <ExpectedImpactSection />
      <MaintenanceComparisonSection />
      <MaintenanceFaqSection />
    </div>
  );
}
