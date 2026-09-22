import React from "react";

interface CapabilityBlock {
  badge: string;
  badgeStyle: string;
  title: string;
  description: string;
}

const BLOCKS: CapabilityBlock[] = [
  {
    badge: "STANDARD ENGINE",
    badgeStyle: "bg-[#e8f5e9] text-[#2e7d32]",
    title: "Read & Correlate Only",
    description:
      "Continuous monitoring of directory states and host health. Connects directly to CrowdStrike, Okta, and Intune for diagnostic, non-remediating telemetry compilation.",
  },
  {
    badge: "WRITE-BACK REMEDIATION",
    badgeStyle: "bg-[#e0f2f1] text-[#00796b]",
    title: "Active containment rules",
    description:
      "Enables native write actions from Zoiko. Initiate host isolation in Defender or revoke active Okta sessions immediately during posture mismatch conditions.",
  },
  {
    badge: "ENTERPRISE GOVERNED",
    badgeStyle: "bg-[#fff3e0] text-[#e65100]",
    title: "Dual-Party Approval Policies",
    description:
      "Enforces multi-signature controls. Any critical containment or role elevation must pass cryptographic approval from two authorized enterprise leads before firing.",
  },
];

export const CapabilityBlocksSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f6f4ee] border-b border-stone-200/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
              — CAPABILITY BLOCKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
            Module &amp; Action Governance Options
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed">
            Commercial tiers reflect the level of active write authority and dual-approval checks integrated into your tenant.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOCKS.map((block) => (
            <div
              key={block.badge}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:border-stone-300 transition-all flex flex-col justify-start"
            >
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold font-['JetBrains_Mono'] tracking-wider uppercase ${block.badgeStyle}`}
                >
                  {block.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-3">
                {block.title}
              </h3>

              <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
