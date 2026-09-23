import React from "react";

export default function VerifiableSLALimitsForActiveWorkspace() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            SERVICE LEVEL ENTITLEMENTS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Verifiable SLA limits for active workspace
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Your support channels and response speeds are tied strictly to your
            registered service contract in the Zoiko registry.
          </p>
        </div>

        {/* Dark Contract Card */}
        <div className="bg-[#0A2440] rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-white">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold text-[#E0967D] uppercase tracking-wider mb-2">
              ACTIVE SLA LEVEL
            </p>
            <h2 className="text-2xl md:text-[28px] font-bold tracking-tight mb-3">
              Levelset Enterprise Contract Tier 2
            </h2>
            <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed">
              Includes full 24/7 technical assistance coverage with 4-hour
              response SLAs on critical integration blocks.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-xs text-[#94A3B8] lg:text-right border-t lg:border-t-0 pt-4 lg:pt-0 border-[#1E293B] w-full lg:w-auto">
            <p>
              <span className="text-white font-medium">
                Authorized Case Creators:
              </span>{" "}
              4 admin accounts
            </p>
            <p>
              <span className="text-white font-medium">
                Remediation Capabilities:
              </span>{" "}
              Write Enabled
            </p>
            <p>
              <span className="text-white font-medium">Effective Period:</span>{" "}
              Active through Aug 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
