import React from "react";
import Image from "next/image";

const featureCards = [
  {
    description: "Summarize authorized investigation context with citations.",
  },
  {
    description:
      "Explain relationships without converting correlation into causality.",
  },
  {
    description:
      "Formulate questions or hypotheses preserving uncertainty and contradictory evidence.",
  },
  {
    description:
      "Propose governed next steps: route to Case Management, Evidence or Governed Response without taking authority.",
  },
];

const rightContextRows = [
  { label: "Source", value: "Approved context", highlight: "text-[#5FE3C5]" },
  { label: "Citation target", value: "Traceable", highlight: "text-white" },
  { label: "Limitations", value: "Explicit", highlight: "text-white" },
  { label: "Governed Response", value: "GATED", highlight: "text-[#EF4444]" },
  { label: "Case Management", value: "AVAILABLE", highlight: "text-[#5FE3C5]" },
];

export default function InvestigationAssistantSection() {
  return (
    <div className="relative text-white px-6 py-20 md:py-28 md:px-12 font-sans antialiased flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 -z-25 overflow-hidden">
        <Image
          src="/images/ai-security/2.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="w-full max-w-6xl relative z-10 flex flex-col gap-12">
        {/* Top Header & Right Side Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Title & Description */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2">
              <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
              INVESTIGATION ASSISTANT
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              Grounded assistance, without taking authority.
            </h1>
            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Inspectable sources and citations, approved tools with proposed /
              performed / unavailable states, and review or approval before
              consequential use. If assistance is unavailable, an approved
              deterministic / manual fallback identifies what remains available.
            </p>
          </div>

          {/* Right Side: Grounded Context Panel */}
          <div className="lg:col-span-5 bg-[#FFFFFF0D] border border-[#FFFFFF18] rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#FFFFFF12]">
              <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                Grounded context
              </h3>
              <span className="text-[10px] font-bold tracking-widest text-[#5FE3C5]">
                CURRENT
              </span>
            </div>
            <div className="space-y-3">
              {rightContextRows.map((row, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-[#9CA3AF]">{row.label}</span>
                  <span className={`font-semibold ${row.highlight}`}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="pt-2 border-t border-[#FFFFFF12] flex items-start justify-between text-xs">
                <span className="text-[#9CA3AF]">FALLBACK</span>
                <span className="text-right text-white/80 max-w-[200px]">
                  Approved deterministic/manual path identifies what remains
                  available.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF0D] border border-[#FFFFFF18] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col justify-between"
            >
              <div className="flex items-start gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FE3C5] mt-2 shrink-0"></span>
                <p className="text-xs md:text-sm text-[#D1D5DB] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Boundary Footer Note */}
        <div className="bg-[#FBEFEF26] border border-[#FFFFFF18] rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4">
          <span className="bg-[#C53030] text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-widest uppercase shrink-0">
            BOUNDARY
          </span>
          <p className="text-xs md:text-sm text-[#9CA3AF] leading-relaxed">
            Investigation Assistant is assistance. It does not automatically
            determine compromise, attacker identity, root cause, incident
            severity, legal responsibility, case closure or response authority.
          </p>
        </div>
      </div>
    </div>
  );
}
