"use client";

import React from "react";

const stages = [
  {
    num: "01",
    title: "Discover",
    description: "Review tech guidelines and security constraints.",
  },
  {
    num: "02",
    title: "Apply",
    description: "Submit structural details about delivery fit.",
  },
  {
    num: "03",
    title: "Qualify",
    description: "Manual architectural fit review.",
  },
  {
    num: "04",
    title: "Validate",
    description: "Test cryptographic sync in secure sandbox.",
  },
  {
    num: "05",
    title: "Contract",
    description: "Execute standardized multi-party agreements.",
  },
  {
    num: "06",
    title: "Enable",
    description: "Handoff delivery playbooks and training.",
  },
  {
    num: "07",
    title: "Launch",
    description: "List within the cryptographic verified registry.",
  },
  {
    num: "08",
    title: "Operate",
    description: "Initiate continuous automated health auditing.",
  },
];

export default function LifecycleSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-20 px-6 sm:px-8 lg:px-12 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
              PARTNERSHIP STEPS
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029]">
            The 8-Stage Partnership Lifecycle
          </h2>

          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            From initial technical verification to ongoing continuous auditing,
            we govern partners through structural checkpoints.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="bg-white rounded-xl p-5 border border-[#123B4C]/10 flex flex-col justify-start space-y-2.5 shadow-sm hover:border-[#123B4C]/25 transition-all duration-200"
            >
              <span className="font-mono text-lg font-extrabold text-[#C44242]">
                {stage.num}
              </span>
              <h3 className="font-hanken font-extrabold text-base text-[#0A2029]">
                {stage.title}
              </h3>
              <p className="font-manrope text-[13px] leading-relaxed text-[#5E6670]">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
