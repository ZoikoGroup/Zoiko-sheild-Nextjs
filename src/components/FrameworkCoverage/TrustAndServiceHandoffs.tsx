import React from "react";

const handoffsData = [
  {
    title: "Trust Center",
    description: "ZoikoShield assurance and certification status.",
    isDark: true,
  },
  {
    title: "Compliance Control Plane",
    description: "Control relationships and mapping context.",
    isDark: false,
  },
  {
    title: "Evidence Ledger & Verification",
    description: "Evidence lineage, verification, and packages.",
    isDark: false,
  },
  {
    title: "Continuous Assurance",
    description: "Ongoing control and evidence monitoring context.",
    isDark: false,
  },
  {
    title: "Services comparison",
    description: "Defined service models and responsibility boundaries.",
    isDark: false,
  },
  {
    title: "Risk Intelligence",
    description: "Risk context with its own methods and scope.",
    isDark: false,
  },
  {
    title: "Docs",
    description: "Technical implementation references.",
    isDark: false,
  },
];

export default function TrustAndServiceHandoffs() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Header section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            TRUST AND SERVICE HANDOFFS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-4">
            Continue with the authoritative source.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Each destination keeps its own scope and authority. Proof and
            reference routes remain visible and ungated.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {handoffsData.map((item, index) => (
            <div
              key={index}
              className={`rounded-[14px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border flex flex-col ${
                item.isDark
                  ? "bg-[#123B4C] text-white border-[#123B4C]"
                  : "bg-white text-[#111827] border-[#E5E7EB]"
              }`}
            >
              <div className="space-y-2">
                <h3
                  className={`font-semibold ${item.isDark ? "text-white" : "text-[#111827]"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${item.isDark ? "text-[#D1D5DB]" : "text-[#4B5563]"}`}
                >
                  {item.description}
                </p>
                <a
                  href="#"
                  className={`text-sm font-semibold inline-flex items-center hover:opacity-80 transition-opacity ${
                    item.isDark ? "text-[#F87171]" : "text-[#C53030]"
                  }`}
                >
                  Open route →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
