import React from "react";
import { Settings } from "lucide-react";

const incidentHistory = [
  {
    title: "CrowdStrike Live Telemetry Stream Drop",
    details:
      "Resolved Jan 18 • Duration: 12 minutes • Affected Domain: Detection & SecOps",
    badge: "RESOLVED",
    badgeClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    title: "AWS CloudWatch API Ingestion Incompatibility",
    details:
      "Resolved Jan 05 • Duration: 44 minutes • Affected Domain: Cloud & Integrations",
    badge: "RESOLVED",
    badgeClass: "bg-[#E6F4EA] text-[#137333]",
  },
];

export default function UpcomingMaintenanceAndRecentIncidentHistory() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl space-y-12">
        {/* Top Upcoming Maintenance Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="text-[#D97706] mt-0.5 shrink-0">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#111827] mb-1">
                Upcoming Maintenance Window: Jan 28, 2026
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563]">
                Expected Impact: Scheduled 15-minute read-only window for core
                database schema migration.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-1 shrink-0">
            <p className="text-xs font-mono font-bold text-[#111827]">
              04:00 - 04:15 UTC
            </p>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-[#E6F4EA] text-[#137333]">
              SCHEDULED
            </span>
          </div>
        </div>

        {/* Recent Incident History Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111827] mb-2">
              Recent Incident History (Last 30 Days)
            </h2>
            <p className="text-[#4B5563] text-sm md:text-base">
              Accountability record of all system state transitions.
            </p>
          </div>

          <div className="space-y-4">
            {incidentHistory.map((incident, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-base font-bold text-[#111827] mb-1">
                    {incident.title}
                  </h3>
                  <p className="text-xs text-[#6B7280]">{incident.details}</p>
                </div>

                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${incident.badgeClass}`}
                  >
                    {incident.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
