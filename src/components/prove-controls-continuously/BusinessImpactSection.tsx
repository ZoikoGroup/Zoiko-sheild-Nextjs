import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface ImpactCard {
  title: string;
  desc: string;
}

const outcomes: ImpactCard[] = [
  {
    title: "Continuous Proof State",
    desc: "No more panic snapshots when auditors arrive. Your controls are continuously verified on active evidence pipelines.",
  },
  {
    title: "Zero-Latency GRC",
    desc: "Dramatically lower the internal GRC cost. Automated collectors do the heavy lifting of evidence retrieval.",
  },
  {
    title: "Defensible Board Reporting",
    desc: "Present true, risk-aware telemetry directly to leadership. No false percentages, just verifiable cryptographic proof.",
  },
];

export default function BusinessImpactSection() {
  return (
    <section className="w-full bg-[#F0EDE6] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="BUSINESS IMPACT" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Defensible posture. Zero audit scramble.
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            Convert compliance from an active resource drain into a passive, verifiable proof architecture that accelerates deals.
          </p>
        </div>

        {/* 3 Outcome Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-hanken text-[22px] font-extrabold text-[#0A2029]">
                {item.title}
              </h3>
              <p className="font-manrope text-[14px] leading-relaxed text-[#5B6670]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
