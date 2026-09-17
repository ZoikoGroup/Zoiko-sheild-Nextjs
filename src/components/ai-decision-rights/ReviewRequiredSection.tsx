import React from "react";

const badgesData = [
  { label: "Review required", bg: "bg-[#D1FAE5] text-[#065F46]" },
  { label: "Reviewed / accepted", bg: "bg-[#D1FAE5] text-[#065F46]" },
  { label: "Rejected", bg: "bg-[#FEE2E2] text-[#991B1B]" },
  { label: "Changes requested", bg: "bg-[#D1FAE5] text-[#065F46]" },
  { label: "Reviewer unavailable", bg: "bg-[#FEE2E2] text-[#991B1B]" },
  { label: "Stale output", bg: "bg-[#FEE2E2] text-[#991B1B]" },
];

export default function ReviewRequiredSection() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            02 · REVIEW-REQUIRED
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Put an eligible reviewer between output and governed use.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Governed next-step use stays blocked until eligible review. History
            is preserved and stale context is revalidated.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Card */}
          <div className="lg:col-span-5 bg-[#FDF2F2] rounded-2xl p-8 border border-[#FBD5D5] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="text-base font-bold tracking-wider text-[#C53030] mb-3 uppercase">
              REVIEW ≠ APPROVAL
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Review validates suitability for the reviewed purpose; it does not
              create organizational approval or response authority.
            </p>
          </div>

          {/* Right Badges Container */}
          <div className="lg:col-span-7 flex flex-wrap gap-3 items-center">
            {badgesData.map((badge, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold ${badge.bg}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
