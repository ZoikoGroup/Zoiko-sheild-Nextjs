"use client";

import React from "react";
import { CircleAlert, CircleCheck } from "lucide-react";
import { Badge, Reveal, Section, SectionHeader, cardClass } from "./shared";

const checks = [
  {
    name: "Identity Risk telemetry",
    detail: "Rule validated under ENTRA-ID-RISK, evidence mapped successfully.",
    healthy: true,
  },
  {
    name: "Purview Document Trace",
    detail: "Gap detected: Audit premium licensing missing. Evidence cannot be mapped continuously.",
    healthy: false,
  },
];

export default function AuditGapSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Audit Gap Detector"
        eyebrowTone="slate"
        title="Identify exposure before an external audit."
        description={
          <>
            No arbitrary gamified &quot;security scores&quot;. Zoiko Shield maps
            actual connected domains against frameworks to isolate missing data
            trails and expired consent tokens.
          </>
        }
        descriptionClassName="max-w-[690px]"
      />

      <Reveal className={`${cardClass} p-5 sm:p-6 flex flex-col gap-4 w-full`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-hanken font-extrabold text-[16px] text-[#0a2029] m-0">
            Active Framework Gap Checklist
          </h3>
          <Badge tone="amber" size="sm">Contains Gaps</Badge>
        </div>

        <div className="flex flex-col gap-3">
          {checks.map((c) => (
            <div
              key={c.name}
              className="border border-[rgba(18,59,76,0.1)] rounded-[10px] px-4 py-3.5 flex flex-col md:flex-row md:items-center gap-2 md:gap-6"
            >
              <div className="flex items-center gap-3 md:w-[220px] lg:w-[270px] shrink-0">
                {c.healthy ? (
                  <CircleCheck className="size-4 text-[#1f7a6c] shrink-0" />
                ) : (
                  <CircleAlert className="size-4 text-[#c44242] shrink-0" />
                )}
                <p className="font-manrope font-bold text-[14px] text-[#0a2029] m-0">{c.name}</p>
              </div>
              <p className="font-manrope text-[13px] text-[#5b6670] m-0 flex-1">{c.detail}</p>
              <div className="self-start md:self-center">
                <Badge tone={c.healthy ? "teal" : "amber"} size="sm">
                  {c.healthy ? "Healthy" : "Limited"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
