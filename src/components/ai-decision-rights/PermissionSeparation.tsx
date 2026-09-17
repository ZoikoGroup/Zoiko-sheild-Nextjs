import React from "react";

const layersData = [
  {
    number: "01",
    title: "CAPABILITY",
    description: "What the model or tool can technically do",
    isDark: false,
  },
  {
    number: "02",
    title: "PERMISSION",
    description: "What credentials and systems permit",
    isDark: false,
  },
  {
    number: "03",
    title: "DECISION RIGHT",
    description: "What policy allows for this use",
    isDark: true,
  },
  {
    number: "04",
    title: "HUMAN REVIEW / APPROVAL",
    description: "Who must assess or authorize",
    isDark: false,
  },
  {
    number: "05",
    title: "GOVERNED RESPONSE",
    description: "Separately governed R0-R4 authority",
    isDark: false,
  },
];

export default function PermissionSeparation() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            PERMISSION SEPARATION
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Five layers that must never collapse into one.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            External provider result is a separate outcome. Technical access and
            organizational authority remain distinct.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
          {layersData.map((layer, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border flex flex-col justify-between ${
                layer.isDark
                  ? "bg-[#123B4C] text-white border-[#123B4C]"
                  : "bg-white text-[#111827] border-[#E5E7EB]"
              }`}
            >
              <div>
                <p
                  className={`text-xs font-bold tracking-wider mb-4 ${layer.isDark ? "text-[#34D399]" : "text-[#C53030]"}`}
                >
                  {layer.number}
                </p>
                <h3
                  className={`text-base font-bold tracking-tight mb-3 ${layer.isDark ? "text-white" : "text-[#111827]"}`}
                >
                  {layer.title}
                </h3>
                <p
                  className={`text-xs md:text-sm leading-relaxed ${layer.isDark ? "text-[#D1D5DB]" : "text-[#4B5563]"}`}
                >
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#FDF2F2] border border-[#FBD5D5] rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <h3 className="text-sm md:text-base font-bold text-[#C53030] mb-2 leading-relaxed">
            Tool availability + permission + AI recommendation still do not
            equal organizational approval or response authorization.
          </h3>
          <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
            R0-R4 stays separately governed. Approval alone does not authorize
            response execution.
          </p>
        </div>
      </div>
    </div>
  );
}
