import React from "react";
import { ChevronDown } from "lucide-react";

export default function RegionalAndEnvironmentPosture() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111827] mb-2">
            Regional &amp; Environment Posture
          </h1>
          <p className="text-[#4B5563] text-sm md:text-base">
            Verify status constraints specific to your deployment zone. Global
            status metrics do not guarantee local environment availability.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-6">
          <span className="text-[11px] font-bold text-[#6B7280] tracking-wider uppercase">
            Filter Registry:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <button className="bg-white hover:bg-[#F9FAFB] text-[#111827] text-xs font-medium px-4 py-2 rounded-lg border border-[#E5E7EB] shadow-sm flex items-center gap-2">
              Region: US-East-1
              <ChevronDown className="w-3.5 h-3.5 text-[#6B7280]" />
            </button>
            <button className="bg-white hover:bg-[#F9FAFB] text-[#111827] text-xs font-medium px-4 py-2 rounded-lg border border-[#E5E7EB] shadow-sm flex items-center gap-2">
              Environment: Production-Multi-Tenant
              <ChevronDown className="w-3.5 h-3.5 text-[#6B7280]" />
            </button>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E7EB] text-[10px] font-bold text-[#6B7280] uppercase tracking-wider bg-[#F0EDE6]">
                  <th className="py-4 px-6">Deployment Region</th>
                  <th className="py-4 px-6">Tenant Type</th>
                  <th className="py-4 px-6">Integration Status</th>
                  <th className="py-4 px-6">Data Isolation</th>
                  <th className="py-4 px-6">Authenticated Scope Health</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-xs md:text-sm">
                {/* Row 1 */}
                <tr className="hover:bg-[#FAFAF9] transition-colors">
                  <td className="py-4 px-6 font-bold text-[#111827]">
                    US-East-1 (N. Virginia)
                  </td>
                  <td className="py-4 px-6 text-[#4B5563]">Multi-Tenant</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-[#FEF3C7] text-[#B45309]">
                      DEGRADED POSTURE
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#4B5563]">KMS Encrypted</td>
                  <td className="py-4 px-6 text-[#4B5563]">
                    Tenant-specific verification active • Stale state blocked
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-[#FAFAF9] transition-colors">
                  <td className="py-4 px-6 font-bold text-[#111827]">
                    EU-Central-1 (Frankfurt)
                  </td>
                  <td className="py-4 px-6 text-[#4B5563]">
                    Sovereign / Isolated
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-[#E6F4EA] text-[#137333]">
                      OPERATIONAL
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#4B5563]">Local EU Keys</td>
                  <td className="py-4 px-6 text-[#4B5563]">
                    All directories synced • Zero posture anomalies detected
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
