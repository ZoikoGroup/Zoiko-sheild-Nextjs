import React from "react";

const policyCategoriesData = [
  {
    title: "ADVISORY",
    description:
      "Explain / summarize / recommend. Authorized person remains decision authority.",
    isHighlighted: false,
  },
  {
    title: "REVIEW-REQUIRED",
    description: "Cannot become governed next step until authorized review.",
    isHighlighted: false,
  },
  {
    title: "APPROVAL-REQUIRED",
    description:
      "Explicit authorized approval before consequential use or execution.",
    isHighlighted: false,
  },
  {
    title: "PROHIBITED",
    description:
      "AI/tool may not perform or make the specified action or decision.",
    isHighlighted: true,
  },
];

export default function SourceDefinedClasses() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Header section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            SOURCE-DEFINED CLASSES
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111827] leading-tight mb-4">
            Four policy categories. One clear authority model.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            These are policy categories - not autonomy or maturity levels, and
            not a low-to-high progression.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {policyCategoriesData.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border flex flex-col justify-between ${
                item.isHighlighted
                  ? "bg-[#FBEFEF] border-[#FBD5D5]"
                  : "bg-white border-[#E5E7EB]"
              }`}
            >
              <div className="space-y-3">
                <h3
                  className={`text-base font-bold tracking-wider ${
                    item.isHighlighted ? "text-[#C53030]" : "text-[#111827]"
                  }`}
                >
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
