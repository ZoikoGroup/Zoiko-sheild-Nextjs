"use client";

import React from "react";
import { ArrowRight, Shield, CheckCircle2, XCircle, Star } from "lucide-react";

interface FrameworkItem {
  id: string;
  org: string;
  title: string;
  badge: string;
  whatItIs: string;
  whatItIsNot: string;
  bestFor: string;
}

const FRAMEWORKS: FrameworkItem[] = [
  {
    id: "nist-csf",
    org: "National Institute of Standards and Technology",
    title: "NIST Cybersecurity Framework 2.0",
    badge: "ACTIVE: CSF 2.0 (Official 2024)",
    whatItIs:
      "High-level risk management functions (Govern, Identify, Protect, Detect, Respond, Recover) mapping to core enterprise strategy.",
    whatItIsNot:
      "A specific software audit checklist, technological requirement document, or out-of-the-box certification plan.",
    bestFor:
      "Building a global governance strategy and aligning board risk reports.",
  },
  {
    id: "cis-controls",
    org: "Center for Internet Security",
    title: "CIS Critical Security Controls v8.1",
    badge: "ACTIVE: v8.1 (Released 2024)",
    whatItIs:
      "18 prioritized security controls detailing 153 specific Safeguards designed to stop top technical attacks.",
    whatItIsNot:
      "An abstract threat model or a high-level corporate governance charter. These are direct, prescriptive actions.",
    bestFor:
      "Operational teams looking for exact sequence prioritization (Safeguards Group 1).",
  },
  {
    id: "owasp-top-10",
    org: "Open Web Application Security Project",
    title: "OWASP Top 10 API/Web Security",
    badge: "ACTIVE: 2025 Core Draft Release",
    whatItIs:
      "A consensus standard outlining critical web and API application-level security threats and practical prevention methods.",
    whatItIsNot:
      "A platform infrastructure hardening plan or corporate directory access control policy.",
    bestFor:
      "DevSecOps and application engineers securing software endpoints.",
  },
];

interface FrameworkLibraryProps {
  onSelectFramework?: (id: string) => void;
}

export const FrameworkLibrarySection: React.FC<FrameworkLibraryProps> = ({
  onSelectFramework,
}) => {
  return (
    <section
      id="framework-library"
      className="py-14 md:py-20 bg-[#E6E4DD] border-b border-cyan-950/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B26] font-sans">
            Direct-to-Source Framework Library
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Presence in this registry means we maintain mapped coverage — it does
            not imply official certification, endorsement, or compliance
            guarantees.
          </p>
        </div>

        {/* 3 Framework Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FRAMEWORKS.map((fw) => (
            <div
              key={fw.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-slate-500 block">
                    {fw.org}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#0B1B26] font-sans">
                    {fw.title}
                  </h3>
                  <div className="pt-1">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                      {fw.badge}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5  ">
                    <span className="font-bold text-[#0B1B26]">WHAT IT IS: </span>
                    <span className="text-slate-600">{fw.whatItIs}</span>
                  </div>

                  <div className="p-2.5 ">
                    <span className="font-bold text-[#A91D22]">WHAT IT IS NOT: </span>
                    <span className="text-slate-600">{fw.whatItIsNot}</span>
                  </div>

                  <div className="p-2.5  ">
                    <span className="font-bold text-teal-800">BEST FOR: </span>
                    <span className="text-slate-600">{fw.bestFor}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => onSelectFramework?.(fw.id)}
                  className="text-xs font-bold text-[#A91D22] hover:text-[#8e171b] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Framework Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
