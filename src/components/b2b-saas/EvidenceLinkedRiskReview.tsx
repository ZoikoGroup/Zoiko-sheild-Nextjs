import React from "react";

const riskReviewCards = [
  {
    title: "Cloud dependencies",
    meta: "SCOPE · OWNER · PERIOD · SOURCE · LIMITATIONS",
  },
  {
    title: "Detection and case facts",
    meta: "SCOPE · OWNER · PERIOD · SOURCE · LIMITATIONS",
  },
  {
    title: "Control and assurance state",
    meta: "SCOPE · OWNER · PERIOD · SOURCE · LIMITATIONS",
  },
  {
    title: "AI use cases and evaluations",
    meta: "SCOPE · OWNER · PERIOD · SOURCE · LIMITATIONS",
  },
  {
    title: "Incidents and outages",
    meta: "SCOPE · OWNER · PERIOD · SOURCE · LIMITATIONS",
  },
  {
    title: "Customer trust findings",
    meta: "SCOPE · OWNER · PERIOD · SOURCE · LIMITATIONS",
  },
  {
    title: "Comparable trends",
    meta: "SCOPE · OWNER · PERIOD · SOURCE · LIMITATIONS",
  },
  {
    title: "Evidence-linked Board narratives",
    meta: "SCOPE · OWNER · PERIOD · SOURCE · LIMITATIONS",
  },
];

export default function EvidenceLinkedRiskReview() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            EVIDENCE-LINKED RISK REVIEW
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Support review without inventing materiality.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Each input carries scope, owner, period, source and limitations. The
            page does not create scores, appetite, thresholds, probabilities,
            forecasts, causality, legal materiality or fiduciary conclusions.
          </p>
        </div>

        {/* 8 Cards Grid (2 rows x 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {riskReviewCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#111827] tracking-tight mb-4">
                  {card.title}
                </h3>
                <p className="text-[11px] font-mono tracking-wider font-semibold text-[#6B7280]">
                  {card.meta}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Warning Disclaimer */}
        <div className="pt-2">
          <p className="text-xs font-semibold text-[#C53030]">
            No unsupported numeric metrics. Service metrics appear only with
            exact authority and scope.
          </p>
        </div>
      </div>
    </div>
  );
}
