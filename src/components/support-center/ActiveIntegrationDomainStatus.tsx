import React from "react";
import { Server, Users, Database, GitBranch, ShieldAlert } from "lucide-react";

const integrationItems = [
  {
    title: "Endpoint Ingestion Stream:",
    status: "Operational",
    statusClass: "text-[#137333]",
    icon: Server,
  },
  {
    title: "Identity Directory Sync:",
    status: "Degraded Performance",
    statusClass: "text-[#B06000]",
    icon: Users,
  },
  {
    title: "Crypto Ledger Storage:",
    status: "Operational",
    statusClass: "text-[#137333]",
    icon: Database,
  },
  {
    title: "API Gateway & Webhooks:",
    status: "Planned Maintenance",
    statusClass: "text-[#4B5563]",
    icon: GitBranch,
  },
  {
    title: "Policy Engine Evaluator:",
    status: "Status Unavailable",
    statusClass: "text-[#6B7280]",
    icon: ShieldAlert,
  },
];

export default function ActiveIntegrationDomainStatus() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left Column: Domain Status Banner info */}
        <div className="lg:col-span-6 flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#B06000] inline-block shrink-0"></span>
          <h2 className="text-base font-bold tracking-tight text-[#111827] leading-snug">
            Active Integration Domain Status: Degraded Sync Operations
          </h2>
        </div>

        {/* Right Column: Stacked Status Bars */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          {integrationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl px-6 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className={`${item.statusClass}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-[#111827]">
                    {item.title}
                  </span>
                </div>
                <span
                  className={`text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap ${item.statusClass}`}
                >
                  {item.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
