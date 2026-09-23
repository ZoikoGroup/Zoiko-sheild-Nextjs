import React from "react";

export default function TenantValidationFromLiveTelemetry() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-8">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            IDENTITY &amp; AUTHENTICATION
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Tenant validation from live telemetry
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            To verify eligible service levels and prevent diagnostic data leaks,
            verify your active tenant connection properties below.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Authenticated Identity Context Fields */}
          <div className="lg:col-span-8">
            <h2 className="text-lg font-bold text-[#111827] mb-6">
              Authenticated Identity Context
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Active Tenant */}
              <div>
                <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                  ACTIVE TENANT
                </label>
                <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#111827] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-1.5">
                  Levelset Corp (US-East)
                </div>
                <p className="text-[10px] font-mono text-[#6B7280] tracking-wide">
                  MATCHED IN REGISTRY
                </p>
              </div>

              {/* Account / Registration ID */}
              <div>
                <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                  ACCOUNT / REGISTRATION ID
                </label>
                <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#111827] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-1.5">
                  tnt-0428-levelset-prod
                </div>
                <p className="text-[10px] font-mono text-[#6B7280] tracking-wide">
                  READ-ONLY FROM ACTIVE SSO
                </p>
              </div>

              {/* Environment Scope */}
              <div>
                <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                  ENVIRONMENT SCOPE
                </label>
                <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#111827] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-1.5">
                  Production Cluster 4
                </div>
                <p className="text-[10px] font-mono text-[#6B7280] tracking-wide">
                  SELECT TARGET CLUSTER
                </p>
              </div>

              {/* Entitlement Level */}
              <div>
                <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                  ENTITLEMENT LEVEL
                </label>
                <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#111827] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-1.5">
                  Premier 24/7 Enterprise Assistance
                </div>
                <p className="text-[10px] font-mono text-[#6B7280] tracking-wide">
                  VERIFIED SYSTEM ELIGIBILITY
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Alternate Contexts Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#111827] mb-3">
                Alternate Contexts
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed mb-6">
                If you are filing on behalf of a sandbox cluster or a trial
                environment with unverified eligibility parameters, select the
                option below. Note that specific write-remediation actions are
                disabled on unauthenticated tunnels.
              </p>
            </div>

            <div>
              <button className="w-full bg-white hover:bg-[#F9FAFB] text-[#C53030] border border-[#C53030] text-xs font-bold px-4 py-3 rounded-xl transition-colors shadow-sm text-center">
                Configure Unauthenticated / Trial Target
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
