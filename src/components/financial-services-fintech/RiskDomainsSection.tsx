"use client";

import React from "react";

interface DomainPair {
  left: {
    title: string;
    description: string;
    proof: string;
  };
  right: {
    title: string;
    description: string;
    proof: string;
  };
}

const DOMAIN_PAIRS: DomainPair[] = [
  {
    left: {
      title: "Identity compromise",
      description:
        "Credential theft, privilege abuse, account takeover, service-account misuse.",
      proof: "Proof: MFA/PAM evidence, identity anomalies, access reviews",
    },
    right: {
      title: "API / application exposure",
      description:
        "Broken auth, secret leakage, misconfiguration, exposed endpoints.",
      proof: "Proof: inventory, findings, remediation, test history",
    },
  },
  {
    left: {
      title: "Cloud / infrastructure drift",
      description:
        "Misconfiguration, excessive privilege, public exposure, vulnerable workloads.",
      proof: "Proof: posture over time, exceptions, test evidence",
    },
    right: {
      title: "Endpoint / ransomware risk",
      description:
        "Malware, hands-on-keyboard intrusion, lateral movement.",
      proof: "Proof: detection/response evidence, containment timestamps",
    },
  },
  {
    left: {
      title: "Third-party ICT risk",
      description:
        "Critical dependency failure, compromised supplier, control gaps.",
      proof: "Proof: provider register, criticality, incident linkage",
    },
    right: {
      title: "Payment / account-data security",
      description:
        "Cardholder/payment environment exposure where applicable.",
      proof: "Proof: scope-linked evidence, segmentation, access/log evidence",
    },
  },
  {
    left: {
      title: "Operational resilience",
      description:
        "Service disruption, recovery uncertainty, change/dependency failure.",
      proof: "Proof: critical service map, recovery tests, change evidence",
    },
    right: {
      title: "Governance / disclosure",
      description:
        "Board and regulators need defensible facts and decisions.",
      proof: "Proof: risk trend, decision log, control reliability",
    },
  },
];

export const RiskDomainsSection: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="text-red-500 text-xs font-bold font-['Inter'] uppercase tracking-widest">
              RISK &amp; ASSURANCE DOMAINS
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Manrope'] leading-tight">
            What finance teams must defend — and prove.
          </h2>
        </div>

        {/* 2-Column Grid Container matching Figma screenshot */}
        <div className="bg-[#F3EFE6] rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-300/60 overflow-hidden shadow-xs">
          <div className="divide-y divide-stone-200/80">
            {DOMAIN_PAIRS.map((pair, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200/80"
              >
                {/* Left Cell */}
                <div className="p-6 sm:p-7 md:p-8 flex flex-col justify-start items-start gap-1.5 hover:bg-[#EFEAE0]/50 transition-colors">
                  <h3 className="text-slate-900 text-sm sm:text-base font-bold font-['Inter']">
                    {pair.left.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal font-['Inter'] leading-relaxed">
                    {pair.left.description}
                  </p>
                  <div className="pt-1 text-[#2C6E63] text-xs font-semibold font-['Inter']">
                    {pair.left.proof}
                  </div>
                </div>

                {/* Right Cell */}
                <div className="p-6 sm:p-7 md:p-8 flex flex-col justify-start items-start gap-1.5 hover:bg-[#EFEAE0]/50 transition-colors">
                  <h3 className="text-slate-900 text-sm sm:text-base font-bold font-['Inter']">
                    {pair.right.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal font-['Inter'] leading-relaxed">
                    {pair.right.description}
                  </p>
                  <div className="pt-1 text-[#2C6E63] text-xs font-semibold font-['Inter']">
                    {pair.right.proof}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
