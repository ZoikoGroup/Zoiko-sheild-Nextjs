import React from "react";

export default function VerifyTelemetryDataPackageBeforeDispatch() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            DISPATCH REVIEW
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[36px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Verify telemetry data package before dispatch
          </h1>
          <p className="text-[#4B5563] text-base leading-relaxed">
            Review your case properties. Submitting locks the diagnostic
            cryptographic hashes and initiates the SLA countdown.
          </p>
        </div>

        {/* Main Card Section */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
                AUTHENTICATED TENANT
              </p>
              <h3 className="text-base font-bold text-[#111827]">
                Levelset Corp (US-East)
              </h3>
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
                ISSUE CATEGORY
              </p>
              <h3 className="text-base font-bold text-[#111827]">
                Identity &amp; Endpoint Compliance
              </h3>
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
                IMPACT PROFILE
              </p>
              <h3 className="text-base font-bold text-[#111827]">
                Standard Operational Triage
              </h3>
            </div>
          </div>

          <hr className="border-[#E5E7EB] mb-8" />

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#C53030] hover:bg-[#B91C1C] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-colors shadow-sm">
              Confirm &amp; Dispatch Request
            </button>
            <button className="bg-white hover:bg-[#F9FAFB] text-[#111827] border border-[#D1D5DB] text-xs font-bold px-6 py-3.5 rounded-xl transition-colors shadow-sm">
              Back to Workspace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
