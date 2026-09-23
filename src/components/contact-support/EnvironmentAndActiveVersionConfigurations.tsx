import React from "react";

export default function EnvironmentAndActiveVersionConfigurations() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            INFRASTRUCTURE CONTEXT
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Environment and active version configurations
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Provide details regarding the deployment and integration states
            directly affected by the active issue.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                DEPLOYMENT ENVIRONMENT
              </label>
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#111827] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                Staging / Pre-Production Sandbox
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                MDM PLATFORM
              </label>
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#111827] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                Microsoft Intune v10.4.x
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                TARGET REGION / INSTANCE
              </label>
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#111827] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                US-East-1 (AWS Console Sync)
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                IDENTITY SOURCE ID
              </label>
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#111827] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                Okta Tenant ID: okta-level-889
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                EDR / AGENT VERSION
              </label>
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#111827] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                CrowdStrike Sensor 7.14.3
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                PREVIOUS STABLE WORKING STATE
              </label>
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#111827] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                Fully functional before Feb 10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
