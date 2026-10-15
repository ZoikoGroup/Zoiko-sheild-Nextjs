"use client";

import React from "react";

export default function NextScheduledSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 sm:py-20 lg:py-24 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-3xl mb-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#C44242]" />
            <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-[0.0833em] text-[#C44242] uppercase">
              UPCOMING MAINTENANCE
            </span>
          </div>
          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029] tracking-tight">
            Next Scheduled Operations
          </h2>
        </div>

        {/* Upcoming Main Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#123B4C]/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Meta Column */}
            <div className="lg:col-span-4 flex flex-col space-y-5 lg:border-r lg:border-[#123B4C]/10 lg:pr-8">
              <span className="self-start inline-flex items-center px-3.5 py-1 rounded-full bg-[#DDEAF9] text-[#4E668A] font-jetbrains text-xs font-bold">
                SCHEDULED
              </span>

              <div className="space-y-1">
                <span className="font-manrope text-xs text-[#5E6670] uppercase font-semibold tracking-wider">
                  STARTING IN:
                </span>
                <p className="font-hanken font-extrabold text-2xl sm:text-3xl text-[#0A2029]">
                  2 Days, 4 Hours
                </p>
              </div>

              <div className="space-y-1 font-jetbrains text-xs text-[#7891B1] pt-1">
                <p>ID: ZS-MX-9945</p>
                <p>Freshness: Source-Verified</p>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-8 flex flex-col space-y-6">
              <div className="space-y-2">
                <h3 className="font-hanken font-extrabold text-2xl sm:text-[26px] text-[#0A2029]">
                  Database Failover &amp; Hot-Replica Verification Test
                </h3>
                <p className="font-manrope text-sm sm:text-[15px] text-[#5E6670] leading-relaxed">
                  Routine operational test triggering active database
                  replication failover. All telemetry writes will pause during
                  the 90-second switch window. Secondary storage caches will
                  buffer incoming process events.
                </p>
              </div>

              {/* 3-Col Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#123B4C]/10">
                <div className="space-y-1.5">
                  <span className="font-jetbrains text-[11px] font-bold text-[#7891B1] uppercase tracking-wider block">
                    TARGET WINDOW &amp; TIMEZONE
                  </span>
                  <p className="font-manrope text-xs sm:text-sm font-semibold text-[#0A2029]">
                    March 22, 02:00 - 04:00 EST (UTC-5)
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="font-jetbrains text-[11px] font-bold text-[#7891B1] uppercase tracking-wider block">
                    AFFECTED COMPONENTS
                  </span>
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#F0EDE6] text-[#0A2029] font-manrope text-xs font-semibold">
                      Metrics DB
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#F0EDE6] text-[#0A2029] font-manrope text-xs font-semibold">
                      US-East-1 Relays
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="font-jetbrains text-[11px] font-bold text-[#7891B1] uppercase tracking-wider block">
                    EXPECTED CUSTOMER IMPACT
                  </span>
                  <p className="font-manrope text-xs sm:text-sm font-semibold text-[#C44242]">
                    Intermittent 90s telemetry write pause
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
