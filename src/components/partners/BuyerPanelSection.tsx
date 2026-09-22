"use client";

import React from "react";

const stages = [
  {
    stage: "STAGE 01",
    title: "Validate Partner Type",
    description:
      "Verify if the partner is a validated Tech, MSSP, or Advisory provider using direct signature validation.",
  },
  {
    stage: "STAGE 02",
    title: "Customer Consent Grant",
    description:
      "Activate integrations directly inside the customer environment under multi-party administrative sign-off rules.",
  },
  {
    stage: "STAGE 03",
    title: "Telemetry Audit Trail",
    description:
      "All partner actions, read-writes, and synchronizations are stored indelibly in the customer evidence ledger.",
  },
];

export default function BuyerPanelSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-20 px-6 sm:px-8 lg:px-12 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
              BUYER VERIFICATION PANEL
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029]">
            How Regulated Buyers Verify Partners
          </h2>

          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            Regulated enterprises require verifiable, defensible assurance. Here
            is how your credentials are evaluated before activation.
          </p>
        </div>

        {/* Buyer Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((s) => (
            <div
              key={s.stage}
              className="bg-white rounded-xl p-6 sm:p-7 border border-[#123B4C]/10 flex flex-col justify-start space-y-3.5 shadow-sm hover:border-[#123B4C]/25 transition-all duration-200"
            >
              <span className="font-mono text-sm font-bold text-[#C44242]">
                {s.stage}
              </span>
              <h3 className="font-hanken font-extrabold text-lg text-[#0A2029]">
                {s.title}
              </h3>
              <p className="font-manrope text-sm leading-relaxed text-[#5E6670]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
