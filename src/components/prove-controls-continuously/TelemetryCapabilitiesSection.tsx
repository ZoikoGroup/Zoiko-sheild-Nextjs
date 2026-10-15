import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface CheckCard {
  title: string;
  badge: string;
  scope: string;
  limit: string;
}

const checkCards: CheckCard[] = [
  {
    title: "Automated API Checks",
    badge: "Continuous Stream",
    scope: "Scope: Direct registry polling (Okta, Entra)",
    limit: "Limit: Limited to supported API schemas",
  },
  {
    title: "Manual Review Checklists",
    badge: "Scheduled / Triggered",
    scope: "Scope: SOP reviews & auditor signoffs",
    limit: "Limit: Subject to operational latency",
  },
  {
    title: "Signal-Assisted Audit",
    badge: "Hybrid Assessment",
    scope: "Scope: Heuristic compliance evaluation",
    limit: "Limit: Requires final human confirmation",
  },
];

export default function TelemetryCapabilitiesSection() {
  return (
    <section className="w-full bg-[#F0EDE6] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="TELEMETRY CAPABILITIES" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Deterministic tests vs. manual evidence review
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            Different checks hold different authority boundaries. Know when a check is truly automated, signal-assisted, or requires human eyes.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {checkCards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-hanken text-[20px] font-extrabold text-[#0A2029]">
                {card.title}
              </h3>
              <div>
                <span className="font-jetbrains text-[12px] font-normal text-[#C44242]">
                  {card.badge}
                </span>
              </div>
              <p className="font-manrope text-[14px] text-[#5B6670]">
                {card.scope}
              </p>
              <p className="font-manrope text-[12px] text-[#5B6670]">
                {card.limit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
