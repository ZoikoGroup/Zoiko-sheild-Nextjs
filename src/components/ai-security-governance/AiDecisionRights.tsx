import React from "react";

const decisionCards = [
  {
    badge: "INFORM",
    title: "Advisory",
    description:
      "AI can provide information, explanation, summary or recommendation within approved scope; user/authorized role remains the decision authority.",
  },
  {
    badge: "REVIEW",
    title: "Review-required",
    description:
      "AI output cannot be used as the governed next step until an authorized human/role reviews it according to policy.",
  },
  {
    badge: "APPROVE",
    title: "Approval-required",
    description:
      "The proposed consequential action/decision requires explicit authorized approval before execution/use.",
  },
  {
    badge: "DO NOT PERFORM",
    title: "Prohibited actions",
    description:
      "AI is not permitted to perform or make the specified action/decision under the current policy.",
  },
];

const processSteps = [
  "IDENTIFY",
  "RESOLVE POLICY",
  "APPLY GATE",
  "REVALIDATE",
  "RECORD",
];

export default function AiDecisionRights() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            AI DECISION RIGHTS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Authority is classified before it is exercised.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            These are decision-right classes — not capability, maturity or
            autonomy levels, and not a low-to-high progression.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {decisionCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <p className="text-[#C53030] text-[10px] font-bold tracking-widest uppercase mb-3">
                  {card.badge}
                </p>
                <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Process Bar */}
        <div className="bg-[#E7E3D8] border border-[#DDD8CB] rounded-2xl p-5 mb-8 flex flex-wrap items-center justify-between gap-4">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <span className="text-xs font-mono font-bold tracking-wider text-[#111827]">
                {step}
              </span>
              {index < processSteps.length - 1 && (
                <span className="text-[#4B5563] text-sm hidden md:inline">
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm font-semibold text-[#111827] leading-relaxed">
            Class does not grant technical permission. Permission does not grant
            decision authority. AI cannot approve itself, change class, or use
            confidence or urgency to bypass gates.
          </p>
        </div>
      </div>
    </div>
  );
}
