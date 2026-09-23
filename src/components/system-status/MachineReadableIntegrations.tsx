import React from "react";
import { Rss, Settings, ShieldCheck } from "lucide-react";

const integrations = [
  {
    icon: <Settings className="w-4 h-4 text-[#C53030]" />,
    title: "JSON Status API",
    description:
      "Return raw system state, active incidents array, and upcoming maintenance schedules.",
    endpoint: "GET https://status.zolko.com/api/v1/health",
  },
  {
    icon: <Rss className="w-4 h-4 text-[#C53030]" />,
    title: "RSS & Atom Feeds",
    description:
      "Subscribe your Slack channel or webhook listeners directly to public state-transition records.",
    endpoint: "XML Feed: status.zolko.com/feed.xml",
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-[#C53030]" />,
    title: "Verifiable Proof Ledger",
    description:
      "Cryptographically verify past incident timelines and state drops via absolute hashes.",
    endpoint: "API Endpoint: /api/v1/evidence-proof",
  },
];

export default function MachineReadableIntegrations() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111827] mb-2">
            Machine-Readable Integrations
          </h1>
          <p className="text-[#4B5563] text-sm md:text-base">
            Ingest live system health programmatically into your local SIEM or
            posture dashboards.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {item.icon}
                  <h3 className="text-base font-bold text-[#111827] tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2 text-[11px] font-mono text-[#475569] overflow-x-auto whitespace-nowrap">
                  {item.endpoint}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
