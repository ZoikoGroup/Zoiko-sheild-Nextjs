"use client";

import React from "react";
import Image from "next/image";

interface AgendaEvent {
  id: string;
  status: string;
  statusBg: string;
  statusText: string;
  title: string;
  window: string;
  impact: string;
  note: string;
  component: string;
  region: string;
}

const allEvents: AgendaEvent[] = [
  {
    id: "ZS-MX-9950",
    status: "SCHEDULED",
    statusBg: "bg-[#DDEAF9]",
    statusText: "text-[#4E668A]",
    title: "Global CDN Edge Security Patching",
    window: "March 24, 01:00 - 03:00 EST",
    impact: "No Expected Customer Impact",
    note: "Edge traffic reroutes automatically to healthy adjacent nodes",
    component: "CDN Edge",
    region: "Global",
  },
  {
    id: "ZS-MX-9951",
    status: "RESCHEDULED (Original Window Retained)",
    statusBg: "bg-[#FEF3C7]",
    statusText: "text-[#B45309]",
    title: "US-East Identity Syncer Upgrade",
    window: "March 26, 04:00 - 05:00 EST (Shifted from Mar 25)",
    impact: "Brief directory read latency (under 30s)",
    note: "Retries active natively on all authentication plugins",
    component: "Identity",
    region: "US-East",
  },
  {
    id: "ZS-MX-9952",
    status: "COMPLETED",
    statusBg: "bg-[#E4F0EC]",
    statusText: "text-[#1F7A6C]",
    title: "API Gateway Token Verification Routine",
    window: "March 18, 02:00 - 02:30 EST",
    impact: "None. Cryptographically Verified.",
    note: "Complete zero downtime achieved",
    component: "API Gateway",
    region: "Global",
  },
  {
    id: "ZS-MX-9953",
    status: "CANCELED (No Silent Deletes)",
    statusBg: "bg-[#FBEFEF]",
    statusText: "text-[#A43737]",
    title: "Legacy Agent Telemetry Tunnel Ingestion deprecation",
    window: "Planned: March 20, 04:00 EST",
    impact: "Legacy compatibility remains active",
    note: "Substituted by unified TLS 1.3 endpoints",
    component: "Ingestion Relay",
    region: "Global",
  },
];

export default function MaintenanceCalendarSection() {

  return (
    <section id="calendar" className="w-full bg-[#F7F5F0] py-16 sm:py-20 lg:py-24 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        {/* Calendar Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-hanken font-extrabold text-2xl sm:text-3xl lg:text-[28px] text-[#0A2029] tracking-tight">
              Maintenance Agenda &amp; Calendar
            </h2>
            <p className="font-manrope text-sm sm:text-[15px] text-[#5E6670]">
              Active operational window tracking, configured with explicit UTC
              and localized offsets.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center px-3.5 py-2 rounded-md bg-white border border-[#123B4C]/10 text-[#0A2029] font-manrope text-xs sm:text-sm font-semibold shadow-xs">
              UTC Offset: Eastern Time (UTC-5)
            </div>
            <button className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#0A2440] hover:bg-[#0A2440]/90 text-white font-manrope text-xs sm:text-sm font-bold transition-colors cursor-pointer">
              Subscribe to Selected Filters
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-[#F0EDE6] rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="font-jetbrains text-xs font-bold text-[#0A2029] uppercase tracking-wider">
              FILTERS:
            </span>

            {/* Filter Dropdown 1: Component */}
            <div className="relative inline-flex items-center bg-white px-3.5 py-2 rounded-lg border border-[#123B4C]/10 text-xs sm:text-sm font-manrope text-[#0A2029]">
              <span>All Components</span>
              <Image
                src="/images/planned-maintenance/chevron-down.svg"
                alt=""
                width={10}
                height={10}
                className="ml-2 w-2.5 h-2.5 opacity-60"
              />
            </div>

            {/* Filter Dropdown 2: Region */}
            <div className="relative inline-flex items-center bg-white px-3.5 py-2 rounded-lg border border-[#123B4C]/10 text-xs sm:text-sm font-manrope text-[#0A2029]">
              <span>All Regions</span>
              <Image
                src="/images/planned-maintenance/chevron-down.svg"
                alt=""
                width={10}
                height={10}
                className="ml-2 w-2.5 h-2.5 opacity-60"
              />
            </div>

            {/* Filter Dropdown 3: Impact */}
            <div className="relative inline-flex items-center bg-white px-3.5 py-2 rounded-lg border border-[#123B4C]/10 text-xs sm:text-sm font-manrope text-[#0A2029]">
              <span>All Impact States</span>
              <Image
                src="/images/planned-maintenance/chevron-down.svg"
                alt=""
                width={10}
                height={10}
                className="ml-2 w-2.5 h-2.5 opacity-60"
              />
            </div>

            {/* Filter Dropdown 4: Status */}
            <div className="relative inline-flex items-center bg-white px-3.5 py-2 rounded-lg border border-[#123B4C]/10 text-xs sm:text-sm font-manrope text-[#0A2029]">
              <span>Scheduled &amp; Active Only</span>
              <Image
                src="/images/planned-maintenance/chevron-down.svg"
                alt=""
                width={10}
                height={10}
                className="ml-2 w-2.5 h-2.5 opacity-60"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block w-[1px] h-6 bg-[#123B4C]/10" />
            <button className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#1F7A6C]/10 text-[#1F7A6C] hover:bg-[#1F7A6C]/15 font-manrope text-xs sm:text-sm font-semibold transition-colors cursor-pointer">
              ICS Calendar Export (Secondary Link)
            </button>
          </div>
        </div>

        {/* Agenda Cards List */}
        <div className="space-y-4">
          {allEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-xl p-5 sm:p-6 border border-[#123B4C]/10 shadow-xs hover:shadow-md transition-shadow flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Left Details */}
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-jetbrains font-bold ${evt.statusBg} ${evt.statusText}`}
                  >
                    {evt.status}
                  </span>
                  <span className="font-jetbrains text-xs text-[#7891B1]">
                    ID: {evt.id}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-hanken font-extrabold text-lg sm:text-xl text-[#0A2029]">
                    {evt.title}
                  </h3>
                  <p className="font-manrope text-xs sm:text-sm text-[#5E6670]">
                    <strong className="text-[#0A2029] font-bold">Window:</strong>{" "}
                    {evt.window} ·{" "}
                    <strong className="text-[#0A2029] font-bold">Impact:</strong>{" "}
                    {evt.impact}
                  </p>
                </div>

                <p className="font-manrope text-xs text-[#5E6670] italic">
                  Note: {evt.note}
                </p>
              </div>

              {/* Right Action */}
              <div className="flex-shrink-0">
                <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#123B4C]/20 bg-white hover:bg-[#F0EDE6] text-[#0A2029] font-manrope text-xs sm:text-sm font-bold transition-colors cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
