import React from "react";
import { ArrowUpRight } from "lucide-react";

const routingItems = [
  {
    title: "Vulnerability Disclosure",
    description: "Responsible AI & Security reporting pipeline",
  },
  {
    title: "Suspected Compromise",
    description: "Immediate session termination & account audit",
  },
  {
    title: "Privacy Rights / HIPAA",
    description: "Data isolation & regional telemetry parameters",
  },
  {
    title: "Legal & Regulatory Notice",
    description: "Immutability guarantees and audit logs",
  },
];

export default function StrictRegulatoryAndSecurityRouting() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Card: Strict Regulatory & Security Routing */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-[#E5E7EB]">
            <h2 className="text-lg md:text-xl font-bold text-[#111827] mb-6">
              Strict Regulatory &amp; Security Routing
            </h2>

            <div className="divide-y divide-[#E5E7EB]">
              {routingItems.map((item, index) => (
                <div
                  key={index}
                  className="py-4 first:pt-0 last:pb-0 flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-[#111827] mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-[#6B7280]">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-[#C53030] p-2 rounded-lg group-hover:bg-[#FDF2F2] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Maintenance & Change Log Registry */}
          <div className="lg:col-span-6 bg-[#0A2440] text-white rounded-3xl p-6 md:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight mb-6">
                Maintenance &amp; Change Log Registry
              </h2>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-xs md:text-sm font-bold text-white">
                      Upcoming: Entra ID Sync API Migration
                    </h3>
                    <span className="text-[11px] font-mono text-[#E07A5F] whitespace-nowrap">
                      Feb 14, 02:00 - 04:00 UTC
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    No disruption expected to active telemetry streams. Read
                    sync will be paused.
                  </p>
                </div>

                {/* Item 2 */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-xs md:text-sm font-bold text-white">
                      Recent: Policy Engine Patch v3.4.1
                    </h3>
                    <span className="text-[11px] font-mono text-[#E07A5F] whitespace-nowrap">
                      Completed Jan 21
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Optimized evaluation times on unmanaged active host queries
                    by 14%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feedback Section */}
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold text-[#111827] mb-4">
            Was this Support Center layout clear and helpful?
          </p>
          <div className="flex items-center gap-3 mb-4">
            <button className="bg-white hover:bg-[#F9FAFB] text-[#137333] border border-[#137333] text-xs font-bold px-6 py-2.5 rounded-xl transition-colors shadow-sm">
              Yes, completely
            </button>
            <button className="bg-white hover:bg-[#F9FAFB] text-[#C53030] border border-[#C53030] text-xs font-bold px-6 py-2.5 rounded-xl transition-colors shadow-sm">
              No, need correction
            </button>
          </div>
          <p className="text-[11px] text-[#6B7280] font-mono">
            This form runs locally. We do not use third-party behavioral
            marketing trackers on active support sessions.
          </p>
        </div>
      </div>
    </div>
  );
}
