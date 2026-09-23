import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface FailureCard {
  title: string;
  body: string;
  pill: string;
}

const failureCards: FailureCard[] = [
  {
    title: "Evidence Aging",
    body: "Audit artifacts lose value the moment they are captured. Stale proof hides critical production degradation.",
    pill: "Stale State Visible",
  },
  {
    title: "Control Drift",
    body: "Configuration changes occur daily, yet audits happen yearly. Zoiko catches drifts instantly when policies diverge.",
    pill: "Auto-Detected",
  },
  {
    title: "Fragmented Owners",
    body: "Ownership transfers create accountability voids. Explicit delegation matrices protect institutional continuity.",
    pill: "Owner Audited",
  },
  {
    title: "Broken Audit Trails",
    body: "Stitched-together evidence screenshots lack cryptographic lineage. Zoiko hashes every source artifact.",
    pill: "Ledger Immutable",
  },
];

export default function ComplianceGapSection() {
  return (
    <section className="w-full bg-[#F0EDE6] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="THE COMPLIANCE GAP" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            A control is not proven because it passed once.
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            Point-in-time audits offer a false sense of security. True defensible posture requires continuous telemetry validation across structural changes.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {failureCards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white p-5 shadow-sm transition-all hover:shadow-md min-h-[194px]"
            >
              <div>
                <h3 className="mb-2 font-hanken text-[18px] font-extrabold text-[#0A2029]">
                  {card.title}
                </h3>
                <p className="font-manrope text-[14px] leading-relaxed text-[#5B6670]">
                  {card.body}
                </p>
              </div>

              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-[#F0EDE6] px-2.5 py-1 font-jetbrains text-[11px] font-bold tracking-[0.0455em] text-[#5B6670]">
                  {card.pill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
