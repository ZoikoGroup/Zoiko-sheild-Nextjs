import React from "react";

export default function ProvideExactSymptomsAndObservedTimelines() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            INCIDENT NARRATIVE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Provide exact symptoms and observed timelines
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Help our operations team isolate the failure faster. Provide
            structured details to bypass basic question-and-answer loops.
          </p>
        </div>

        {/* Form Fields Section */}
        <div className="flex flex-col gap-6">
          {/* Summary of Situation */}
          <div>
            <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
              SUMMARY OF SITUATION
            </label>
            <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#9CA3AF] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              e.g., Jamf Pro posture compliance mismatches with Okta Auth checks
              in US-East
            </div>
          </div>

          {/* Detailed Reproduction Narrative */}
          <div>
            <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
              DETAILED REPRODUCTION NARRATIVE
            </label>
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 md:p-5 text-sm text-[#374151] shadow-[0_2px_10px_rgba(0,0,0,0.02)] leading-relaxed space-y-2">
              <p>1. Admin elevates privileges in Microsoft Entra PIM.</p>
              <p>
                2. Compliance query is dispatched from Zoiko Shield to local
                CrowdStrike sensor.
              </p>
              <p>3. Query times out after 120 seconds.</p>
              <p>
                4. Access is incorrectly blocked at the authentication boundary
                although the device is compliant.
              </p>
              <div className="pt-3 mt-3 border-t border-[#F3F4F6] font-mono text-xs text-[#C53030]">
                Error trace: ERR_POSTURE_STALE_AGNT
              </div>
            </div>
          </div>

          {/* Recent Technical Changes */}
          <div>
            <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
              RECENT TECHNICAL CHANGES
            </label>
            <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#9CA3AF] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              e.g. Upgraded CrowdStrike Sensor version to 7.15.x on macOS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
