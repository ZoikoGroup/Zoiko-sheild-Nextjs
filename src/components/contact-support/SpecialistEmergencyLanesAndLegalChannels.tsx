import React from "react";

const channels = [
  {
    title: "Vulnerability Disclosure",
    description:
      "Submit discovered system loopholes securely using PGP encryption guidelines.",
    linkText: "Access PGP Keys",
  },
  {
    title: "Privacy & Data Rights",
    description:
      "Initiate tenant deletion, data portability, or export parameters under CCPA/GDPR.",
    linkText: "Data Request Portal",
  },
  {
    title: "Legal & Compliance Notices",
    description:
      "Submit regulatory requests, board certifications, or official policy notices.",
    linkText: "Submit Official Notice",
  },
];

export default function SpecialistEmergencyLanesAndLegalChannels() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            SECURE VAULT DISPATCH
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Specialist emergency lanes &amp; legal channels
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Vulnerability disclosures, compliance breaches, and regulatory
            notices require segregated channels to prevent compromise leakage.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-3">
                  {channel.title}
                </h3>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed mb-6">
                  {channel.description}
                </p>
              </div>

              <div>
                <a
                  href="#action"
                  className="text-xs font-bold text-[#C53030] hover:text-[#B91C1C] transition-colors inline-block"
                >
                  {channel.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
