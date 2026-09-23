import React from "react";

export default function VerifiedSupportEntitlementProfile() {
  return (
    <div className="bg-[#F6F4EE] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {}
        <div className="max-w-3xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            TENANT CONTEXT
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Verified Support Entitlement Profile
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Cryptographically bound contract parameters. Standard response
            boundaries apply.
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#111827] tracking-tight mb-6">
                Active Environment Profile
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs md:text-sm py-2 border-b border-[#F3F4F6]">
                  <span className="text-[#6B7280]">Organization Scope:</span>
                  <span className="font-mono font-bold text-[#111827]">
                    Zoiko-Internal-SecOps (Tenant_A)
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs md:text-sm py-2 border-b border-[#F3F4F6]">
                  <span className="text-[#6B7280]">Active Integrations:</span>
                  <span className="font-mono font-bold text-[#111827]">
                    Okta, CrowdStrike, Duo, Jamf Pro
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs md:text-sm py-2 border-b border-[#F3F4F6]">
                  <span className="text-[#6B7280]">
                    Operational Connector Health:
                  </span>
                  <span className="font-mono font-bold text-[#B06000]">
                    1 Degraded (Okta Sync)
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs md:text-sm py-2">
                  <span className="text-[#6B7280]">
                    Pending Compliance Evidence Reviews:
                  </span>
                  <span className="font-mono font-bold text-[#111827]">
                    4 Open Segments
                  </span>
                </div>
              </div>
            </div>
          </div>

          {}
          <div className="bg-[#0A2440] text-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold tracking-tight">
                  Contractual SLA Parameters
                </h2>
                <span className="bg-[#E0967D] text-[#111827] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Enterprise Tier
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs md:text-sm py-2 border-b border-white/10">
                  <span className="text-[#94A3B8]">Coverage Hours:</span>
                  <span className="font-mono font-bold text-white">
                    24/7/365 Direct Registry Support
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs md:text-sm py-2 border-b border-white/10">
                  <span className="text-[#94A3B8]">
                    Response Target (Severity 1):
                  </span>
                  <span className="font-mono font-bold text-[#E0967D]">
                    Within 30 Minutes
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs md:text-sm py-2 border-b border-white/10">
                  <span className="text-[#94A3B8]">
                    Supervisor Escalation Path:
                  </span>
                  <span className="font-mono font-bold text-white">
                    Active Policy Enabled
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs md:text-sm py-2">
                  <span className="text-[#94A3B8]">
                    Assigned Security Architect:
                  </span>
                  <span className="font-mono font-bold text-white">
                    Verified (Contract-Bound)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
