import React from "react";

const domainsData = [
  {
    title: "Investigation Assistant",
    description: "Advice and investigation support remain governed.",
  },
  {
    title: "Governed Response",
    description: "R0-R4 response authority stays separate.",
  },
  {
    title: "Evidence Ledger & Verification",
    description: "Evidence proves history; it does not create permission.",
  },
  {
    title: "Detection & Response",
    description: "Signals do not create response authority.",
  },
  {
    title: "Security Analytics",
    description: "Analytics remain evidence, not approval.",
  },
  {
    title: "Case Management",
    description: "No silent official case history.",
  },
  {
    title: "Compliance Control Plane",
    description: "No inferred certification or compliance state.",
  },
  {
    title: "Risk Intelligence",
    description: "No opaque risk authority.",
  },
  {
    title: "Trust / Responsible AI",
    description: "Shared governance boundary and evidence.",
  },
];

export default function RelatedDomains() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            RELATED DOMAINS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Decision rights constrain AI - they do not grant adjacent authority.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Boundaries remain explicit across investigation, response, evidence,
            detection, analytics, case, compliance, risk and Responsible AI
            domains.
          </p>
        </div>

        {/* 3x3 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {domainsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#111827] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer Banner */}
        <div className="text-center md:text-left">
          <p className="text-xs md:text-sm font-semibold text-[#C53030] leading-relaxed">
            AI Decision Rights does not define or grant R0-R4 response
            authority, certification, compliance state, official case history or
            opaque risk authority.
          </p>
        </div>
      </div>
    </div>
  );
}
