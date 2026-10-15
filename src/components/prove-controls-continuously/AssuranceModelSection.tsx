import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface LifecycleStep {
  step: string;
  pill: string;
  title: string;
  desc: string;
}

const lifecycleSteps: LifecycleStep[] = [
  {
    step: "01",
    pill: "Policy Active",
    title: "01. Policy & Intent",
    desc: "Access Policy v3.1, SOC2 Trust Criteria mapped strictly to operational domains.",
  },
  {
    step: "02",
    pill: "Unified Control",
    title: "02. Canonical Control",
    desc: "Explicit mapping of multi-framework obligations to unified control endpoints.",
  },
  {
    step: "03",
    pill: "Active Webhook",
    title: "03. Continuous Test",
    desc: "Deterministic validation script executing on live production APIs every 24 hours.",
  },
  {
    step: "04",
    pill: "Proof Hashed",
    title: "04. Cryptographic Proof",
    desc: "Validated payload, hashed and signed, indexed in the evidence ledger with lineage.",
  },
];

export default function AssuranceModelSection() {
  return (
    <section className="w-full bg-[#F7F5F0] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="ASSURANCE ENGINE" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            The Continuous Assurance Lifecycle Model
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            An inspectable chain that links policy requirements directly to cryptographic evidence blocks. Trace backward from compliance status to source.
          </p>
        </div>

        {/* 4 Model Blocks */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycleSteps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-3">
                <span className="inline-flex items-center rounded-full bg-[#E4F0EC] px-2.5 py-1 font-jetbrains text-[11px] font-bold tracking-[0.0455em] text-[#1F7A6C]">
                  {item.pill}
                </span>
              </div>
              <h3 className="mb-2 font-hanken text-[18px] font-extrabold text-[#0A2029]">
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
