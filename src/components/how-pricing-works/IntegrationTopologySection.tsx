import React from "react";

interface TopologyProfile {
  title: string;
  description: string;
  badge: string;
  badgeStyle: string;
}

const PROFILES: TopologyProfile[] = [
  {
    title: "Standard Directory & EDR",
    description:
      "Native API integration with CrowdStrike, Defender, Okta, and Entra ID. Standard bi-directional sync routines are maintained natively by Zoiko.",
    badge: "STANDARD",
    badgeStyle: "bg-[#e0f2f1] text-[#00695c]",
  },
  {
    title: "Custom API & Splunk / SIEM",
    description:
      "Integrations routing through intermediate SIEM databases, custom syslog brokers, or bespoke private tenant endpoints.",
    badge: "EVALUATION REQUIRED",
    badgeStyle: "bg-[#fff3e0] text-[#e65100]",
  },
  {
    title: "Isolated Tenancy / Private Link",
    description:
      "Requirements for completely isolated deployment partitions, local key control, or dedicated AWS/Azure Private Link connections.",
    badge: "CUSTOM ARCHITECTURE",
    badgeStyle: "bg-[#ffebee] text-[#c62828]",
  },
];

export const IntegrationTopologySection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F0] border-b border-stone-300/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
              — INTEGRATION TOPOLOGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
            Source Integration Profiles
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed">
            Standard out-of-the-box connectors are included inside our platform tiers. Deep, highly customized integrations require validated scoping.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROFILES.map((profile) => (
            <div
              key={profile.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:border-stone-300 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-2.5">
                  {profile.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed mb-6">
                  {profile.description}
                </p>
              </div>

              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold font-['JetBrains_Mono'] tracking-wider uppercase ${profile.badgeStyle}`}
                >
                  {profile.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
