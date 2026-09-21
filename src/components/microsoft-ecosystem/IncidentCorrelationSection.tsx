"use client";

import React from "react";
import { Badge, Reveal, Section, SectionHeader, cardClass } from "./shared";

const incidents = [
  {
    id: "INC-DEF-2026-09",
    critical: true,
    title: "Lateral movement pattern detected on corporate network",
    meta: "Source: Defender XDR • Alerts linked: 4 • Scope: Tenant Global",
  },
  {
    id: "INC-SEN-2026-44",
    critical: false,
    title: "Unusual bulk download activity from secure resource vault",
    meta: "Source: Sentinel SIEM Logs • Rule mapping: CC7.2",
  },
];

export default function IncidentCorrelationSection() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="Incident Correlation"
        title="Correlate Microsoft incidents without losing source authority."
        description="Zoiko Shield continuously aggregates, standardizes, and links Microsoft security alert structures with external compliance framework constraints."
      />

      <Reveal className={`${cardClass} p-5 sm:p-6 flex flex-col gap-4 w-full`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-hanken font-extrabold text-[16px] text-[#0a2029] m-0">
              Incident Pipeline Monitor
            </h3>
            <Badge tone="teal" size="sm">Lineage Active</Badge>
          </div>
          <p className="font-jetbrains text-[11px] text-[#5b6670] m-0">Freshness: 1m ago</p>
        </div>

        <div className="flex flex-col gap-3">
          {incidents.map((inc) => (
            <div
              key={inc.id}
              className="bg-[#f0ede6] rounded-[10px] px-4 sm:px-5 py-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-8"
            >
              <p
                className={`font-jetbrains font-bold text-[12px] m-0 md:w-[120px] shrink-0 ${
                  inc.critical ? "text-[#c44242]" : "text-[#5b6670]"
                }`}
              >
                {inc.id}
              </p>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <p className="font-manrope font-bold text-[14px] text-[#0a2029] m-0">{inc.title}</p>
                <p className="font-manrope text-[12px] text-[#5b6670] m-0">{inc.meta}</p>
              </div>
              <span className="self-start md:self-center bg-[#e4f0ec] rounded-[4px] px-2.5 py-1 font-jetbrains font-bold text-[10px] text-[#1f7a6c] whitespace-nowrap">
                EVIDENCE PRESERVED
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
