"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const scopePath = ["Tenant (0x19A2)", "Prod Management Group", "Subscription: Azure-Enterprise-01"];

const stats = [
  { label: "Monitored Subscriptions", value: "8 Active", accent: false },
  { label: "Validated Controls", value: "112 Controls", accent: true },
  { label: "Latest Activity Sync", value: "4 minutes ago", accent: false },
];

export default function AzureVisibilitySection() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="Azure Context"
        title="Multi-Tenant Azure Asset Visibility"
        description="Observe and map cloud infrastructure configurations against compliance requirements down to the individual resource level."
      />

      <Reveal className={`${cardClass} p-4 sm:p-5 flex flex-col gap-4 w-full`}>
        <div className="bg-[#f0ede6] rounded-[8px] px-3 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="font-jetbrains font-bold text-[10px] text-[#5b6670] uppercase">Connected Scope:</span>
          {scopePath.map((s, i) => (
            <React.Fragment key={s}>
              {i > 0 && <ChevronRight className="size-3 text-[#5b6670] shrink-0" />}
              <span className="font-manrope font-bold text-[13px] text-[#0a2029]">{s}</span>
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#f0ede6] rounded-[8px] p-4 flex flex-col gap-1">
              <p className="font-manrope text-[11px] text-[#5b6670] uppercase m-0">{s.label}</p>
              <p
                className={`font-jetbrains font-bold text-[22px] sm:text-[18px] lg:text-[24px] m-0 ${
                  s.accent ? "text-[#1f7a6c]" : "text-[#0a2029]"
                }`}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
