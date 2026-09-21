import React from "react";

interface DriverCard {
  id: string;
  title: string;
  description: string;
  dataToPrepare: string;
}

const DRIVERS: DriverCard[] = [
  {
    id: "01",
    title: "Protected Coverage",
    description: "Aligns platform capacity to host count and active identity nodes.",
    dataToPrepare: "Total endpoints (EDR) + active directory users.",
  },
  {
    id: "02",
    title: "Active Capabilities",
    description: "Write-back containment, dual-party approval, and compliance modules.",
    dataToPrepare: "Remediation requirements + audit scope.",
  },
  {
    id: "03",
    title: "Evidence Data Volume",
    description: "Retention periods and event storage sizes drive ledger capacity.",
    dataToPrepare: "Target compliance standard (e.g. SOC2, HIPAA) timeline.",
  },
  {
    id: "04",
    title: "Integration Ecosystem",
    description: "Direct sources registered to maintain cryptographically signed proof.",
    dataToPrepare: "E.g., Okta Tenant count, Jamf/Intune profiles, CyberArk.",
  },
  {
    id: "05",
    title: "Assurance Level",
    description: "Ledger isolation level and frequency of independent verification.",
    dataToPrepare: "Tenant partition isolation requirements.",
  },
  {
    id: "06",
    title: "Service Model",
    description: "Direct access to named security architects and critical response SLAs.",
    dataToPrepare: "Onboarding complexity & support tier selection.",
  },
];

export const CostDriversSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f6f4ee] border-b border-stone-200/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
              — COST DRIVERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
            Six Key Architectural Drivers
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed">
            Understanding these dimensions helps prepare the telemetry data required for our architects to compute an authoritative pricing profile.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DRIVERS.map((driver) => (
            <div
              key={driver.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:border-stone-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-bold font-['JetBrains_Mono'] text-red-500 tracking-wider uppercase mb-2">
                  DRIVER {driver.id}
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-2">
                  {driver.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed mb-6">
                  {driver.description}
                </p>
              </div>

              <div>
                <div className="text-[10px] font-bold font-['JetBrains_Mono'] text-teal-700 uppercase tracking-wider mb-1">
                  DATA TO PREPARE :
                </div>
                <div className="text-xs text-slate-700 font-['Manrope'] font-medium">
                  {driver.dataToPrepare}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
