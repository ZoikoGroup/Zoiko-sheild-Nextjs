import React from "react";

const limitationsData = [
  {
    title: "Edition gap",
    description:
      "The referenced edition differs from another edition a reader may use.",
  },
  {
    title: "Scope gap",
    description: "Only the stated product or service boundary is represented.",
  },
  {
    title: "Mapping gap",
    description: "Unmapped or indirectly related requirements remain visible.",
  },
  {
    title: "Evidence gap",
    description: "Evidence availability and completeness vary by record.",
  },
  {
    title: "Customer responsibility",
    description:
      "Customer and shared responsibilities remain customer-specific.",
  },
  {
    title: "Third-party dependency",
    description:
      "External providers retain their own authority and limitations.",
  },
  {
    title: "Legal applicability",
    description:
      "ZoikoShield does not determine which laws apply to an organization.",
  },
  {
    title: "Trust Center boundary",
    description:
      "ZoikoShield assurance status is published only through the Trust Center.",
  },
];

export default function LimitationsAndGaps() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C44242] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            LIMITATIONS AND GAPS
          </p>
          <h1 className="text-4xl md:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-4">
            Claims and limitations travel together.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Every record exposes applicable gaps in the same journey, using
            text—not scores, heatmaps, or maturity indicators.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {limitationsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-[#111827] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
