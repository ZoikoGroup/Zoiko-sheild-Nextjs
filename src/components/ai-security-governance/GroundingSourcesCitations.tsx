import React from "react";

const groundingCards = [
  {
    title: "Source & access authority",
    description:
      "Approved source, access authority, observation/review time, and evidence relationship or access.",
  },
  {
    title: "Citation target",
    description:
      "The supported statement, its citation target, and missing, restricted or incomplete context.",
  },
  {
    title: "Conflicts & failure",
    description:
      "Contradictory sources, citation failure and unsupported claims remain explicit.",
  },
];

const statusTags = [
  "CURRENT",
  "STALE",
  "PARTIAL",
  "CONFLICTING",
  "UNAVAILABLE",
  "UNKNOWN",
  "SUPERSEDED",
  "RESTRICTED",
];

export default function GroundingSourcesCitations() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            GROUNDING, SOURCES, CITATIONS AND EVIDENCE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Every supported statement stays traceable.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            A citation is a traceability aid, not a guarantee that the AI
            interpretation is correct. ZoikoShield never fabricates citations.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {groundingCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
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

        {/* Status Tags Pill Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          {statusTags.map((tag, index) => (
            <span
              key={index}
              className="bg-white border border-[#E5E7EB] text-[#111827] text-xs font-mono font-bold px-4 py-2 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)] tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
``