import React from "react";

export default function ActiveIncidentCard() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Main Incident Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
          {/* Top Row: Badge, Title, Incident ID */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FEF3C7] text-[#B45309]">
                ACTIVE INCIDENT
              </span>
              <h2 className="text-lg md:text-xl font-bold text-[#111827] tracking-tight">
                Okta Directory Posture Synchronization Latency
              </h2>
            </div>
            <div className="text-xs font-mono text-[#6B7280]">
              INCIDENT ID: INC-87421
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pt-2 border-t border-[#F3F4F6]">
            <div>
              <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
                AFFECTED COMPONENT
              </p>
              <p className="text-xs md:text-sm font-medium text-[#111827]">
                Identity &amp; Endpoint - Okta Sync
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
                IMPACT LEVEL
              </p>
              <p className="text-xs md:text-sm font-medium text-[#C53030]">
                Degraded Performance
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
                START TIME
              </p>
              <p className="text-xs md:text-sm font-medium text-[#111827]">
                Jan 23, 2026 - 14:22 UTC
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
                LATEST UPDATE
              </p>
              <p className="text-xs md:text-sm font-medium text-[#111827]">
                Jan 23, 2026 - 15:45 UTC
              </p>
            </div>
          </div>

          {/* Latest Status & Description */}
          <div>
            <h4 className="text-xs font-bold text-[#111827] mb-2">
              Latest Status: Monitoring
            </h4>
            <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
              We have identified a rate limit exhaustion issue with the upstream
              Okta posture evaluation registry. Remediation actions have been
              applied and synchronization backlogs are currently clearing.
              Telemetry freshness remains stable but delayed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
