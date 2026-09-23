"use client";

import React from "react";

export default function ActiveEventsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-20 lg:py-24 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-3xl mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#C44242]" />
            <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-[0.0833em] text-[#C44242] uppercase">
              CURRENT ACTIVE EVENTS
            </span>
          </div>
          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029] tracking-tight">
            Active Maintenance Executions
          </h2>
          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            Maintenance operations currently in flight. Zoiko Shield prevents
            silent state changes: all completed tasks require positive
            cryptographic verification before transitioning out of Verifying
            state.
          </p>
        </div>

        {/* Active Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: ZS-MX-9942 */}
          <div className="flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 border border-[#123B4C]/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-5">
              {/* Badge + ID */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FBEFEF] text-[#A43737] font-jetbrains text-xs font-bold">
                  IN PROGRESS
                </span>
                <span className="font-jetbrains text-xs text-[#7891B1]">
                  EVENT ID: ZS-MX-9942
                </span>
              </div>

              {/* Title */}
              <h3 className="font-hanken font-extrabold text-xl sm:text-2xl text-[#0A2029]">
                Identity Registry Schema Optimization
              </h3>

              {/* Specs */}
              <div className="space-y-2 font-manrope text-sm text-[#5E6670]">
                <p>
                  <strong className="text-[#0A2029] font-semibold">Planned Window:</strong>{" "}
                  14:00 - 16:30 EST (UTC-5)
                </p>
                <p>
                  <strong className="text-[#0A2029] font-semibold">Scope:</strong>{" "}
                  Okta Directory Connector, Entra Sync Hubs
                </p>
                <p>
                  <strong className="text-[#0A2029] font-semibold">Expected Impact:</strong>{" "}
                  Degraded directory write performance (No auth outages)
                </p>
              </div>

              {/* Heartbeat box */}
              <div className="bg-[#F0EDE6] rounded-xl p-4 sm:p-5 space-y-2">
                <span className="font-jetbrains text-[11px] font-bold text-[#0A2029] uppercase tracking-wider block">
                  LATEST TELEMETRY HEARTBEAT (15:10 EST)
                </span>
                <p className="font-manrope text-xs sm:text-[13px] text-[#5E6670] leading-relaxed">
                  Data migration phase 2 of 3 initiated. Sensor pipelines are
                  operating on cached backup stores. Active authorization policies
                  remain unaffected.
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-6 mt-6 border-t border-[#123B4C]/10 flex flex-wrap items-center justify-between gap-4">
              <span className="font-manrope text-xs sm:text-[13px] font-semibold text-[#C44242]">
                No customer action required
              </span>
              <a
                href="#details"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#123B4C]/20 bg-white hover:bg-[#F0EDE6] text-[#0A2029] font-manrope text-xs sm:text-[13px] font-bold transition-colors cursor-pointer"
              >
                Track Live Details
              </a>
            </div>
          </div>

          {/* Card 2: ZS-MX-9941 */}
          <div className="flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 border border-[#123B4C]/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-5">
              {/* Badge + ID */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-jetbrains text-xs font-bold">
                  VERIFYING STATE (Not Completed)
                </span>
                <span className="font-jetbrains text-xs text-[#7891B1]">
                  EVENT ID: ZS-MX-9941
                </span>
              </div>

              {/* Title */}
              <h3 className="font-hanken font-extrabold text-xl sm:text-2xl text-[#0A2029]">
                EU-West Gateway Node Rotation
              </h3>

              {/* Specs */}
              <div className="space-y-2 font-manrope text-sm text-[#5E6670]">
                <p>
                  <strong className="text-[#0A2029] font-semibold">Planned Window:</strong>{" "}
                  13:00 - 15:00 EST (UTC-5)
                </p>
                <p>
                  <strong className="text-[#0A2029] font-semibold">Scope:</strong>{" "}
                  EU-West Load Balancers &amp; Ingestion Relays
                </p>
                <p>
                  <strong className="text-[#0A2029] font-semibold">Expected Impact:</strong>{" "}
                  Brief intermittent telemetry delay (under 90 seconds)
                </p>
              </div>

              {/* Heartbeat box */}
              <div className="bg-[#FEF3C7]/20 border border-[#FEF3C7] rounded-xl p-4 sm:p-5 space-y-2">
                <span className="font-jetbrains text-[11px] font-bold text-[#B45309] uppercase tracking-wider block">
                  VERIFICATION PIPELINE ACTIVE (14:58 EST)
                </span>
                <p className="font-manrope text-xs sm:text-[13px] text-[#5E6670] leading-relaxed">
                  Gateway nodes rotated successfully. Run-time health systems
                  are executing cryptographic challenge-response checks before
                  sealing verification ledger.
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-6 mt-6 border-t border-[#123B4C]/10 flex flex-wrap items-center justify-between gap-4">
              <span className="font-manrope text-xs sm:text-[13px] font-semibold text-[#1F7A6C]">
                Verifying integration paths...
              </span>
              <a
                href="#details"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#123B4C]/20 bg-white hover:bg-[#F0EDE6] text-[#0A2029] font-manrope text-xs sm:text-[13px] font-bold transition-colors cursor-pointer"
              >
                Verify Node Hashes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
