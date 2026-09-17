import React from "react";

const governanceCards = [
  {
    number: "01",
    title: "Purpose",
    description: "User job, scope, owner, state and unsupported use.",
  },
  {
    number: "02",
    title: "Grounding",
    description:
      "Approved context, evidence, citations, freshness and limitations.",
  },
  {
    number: "03",
    title: "Tools",
    description: "Approved categories, permissions, prerequisites and state.",
  },
  {
    number: "04",
    title: "Decision rights",
    description: "Classify the proposed output or action.",
  },
  {
    number: "05",
    title: "Override & fallback",
    description:
      "Reject, correct, stop or escalate; preserve a safe deterministic/manual path.",
  },
];

const footerItems = [
  "IDENTITY",
  "SCOPE",
  "GROUNDING",
  "TOOLS",
  "DECISION RIGHTS",
  "OVERRIDE / FALLBACK",
  "AI-RISK CONTROLS",
  "DATA USE",
  "HISTORY / PROOF",
];

export default function AiGovernanceAtAGlance() {
  return (
    <div className="font-sans antialiased flex flex-col items-center">
      {/* Section 1: Light Background */}
      <section className="w-full bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-6xl flex flex-col items-center">
          {/* Top Navigation Steps */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 text-xs font-bold tracking-wider text-[#4B5563]">
            <div className="flex items-center gap-2">
              <span className="text-[#C53030]">01</span>
              <span>·</span>
              <span className="uppercase">SCOPE BEFORE USE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#C53030]">02</span>
              <span>·</span>
              <span className="uppercase">INSPECTABLE GROUNDING</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#C53030]">03</span>
              <span>·</span>
              <span className="uppercase">HUMAN DECISION AUTHORITY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#C53030]">04</span>
              <span>·</span>
              <span className="uppercase">SAFE FALLBACK</span>
            </div>
          </div>

          <div className="w-full max-w-3xl mb-12 mr-auto">
            <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
              <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
              AI GOVERNANCE AT A GLANCE
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
              Governance is a visible operating sequence.
            </h1>
            <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
              Every AI use begins with purpose and ends with an inspectable
              record of authority, controls and history.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {governanceCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
              >
                <div>
                  <p className="text-[#C53030] text-xs font-bold tracking-wider mb-4">
                    {card.number}
                  </p>
                  <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Dark Background */}
      <section className="w-full bg-[#F7F5F0] text-[#111827] px-6 py-12 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-6xl bg-[#123B4C] text-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <h3 className="text-lg font-bold tracking-tight mb-6 text-white">
            Compact governance record
          </h3>
          <div className="flex flex-wrap items-center gap-y-3 text-[11px] font-mono tracking-wider text-[#FFFFFFA8]">
            {footerItems.map((item, index) => (
              <React.Fragment key={index}>
                <span>{item}</span>
                {index < footerItems.length - 1 && (
                  <span className="mx-3 text-[#FFFFFFA8]">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
