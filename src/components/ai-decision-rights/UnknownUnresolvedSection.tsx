import React from "react";

const uncertaintyBadges = [
  "No policy found",
  "Conflicting policies",
  "Stale cache",
  "Unknown reviewer/approver eligibility",
  "Unknown permission",
  "Unknown scope/consequence",
  "Service unavailable",
  "Ambiguous intent",
];

export default function UnknownUnresolvedSection() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header section */}
        <div className="mb-10">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            UNKNOWN / UNRESOLVED
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Uncertainty makes the interface less permissive.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            When current decision right cannot be established, fail closed or
            route to an approved review path.
          </p>
        </div>

        {/* Badges Container */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {uncertaintyBadges.map((badge, index) => (
            <span
              key={index}
              className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-[#FBEFEF] text-[#C44242]"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Bottom Dark Banner */}
        <div className="bg-[#123B4C] text-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="shrink-0">
            <span className="text-[#34D399] text-xs font-bold tracking-widest uppercase block">
              FAIL-CLOSED LAW
            </span>
          </div>
          <div>
            <p className="text-base md:text-lg font-medium text-[#F9FAFB] leading-relaxed">
              &quot;When the current decision right is unknown, the interface
              becomes less permissive, not more confident.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
