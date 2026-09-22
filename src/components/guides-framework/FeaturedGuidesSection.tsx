"use client";

import React from "react";
import { Link2 } from "lucide-react";

interface FeaturedGuidesProps {
  onOpenDemo?: () => void;
}

interface GuideCard {
  id: string;
  source: string;
  title: string;
  outcome: string;
  audience: string;
  maturity: string;
  effort: string;
  requiredState: string;
  lastReviewed: string;
}

const GUIDES: GuideCard[] = [
  {
    id: "edr-verification",
    source: "SOURCE BASED ON: CIS Controls v8.1 Safeguard 1.1",
    title: "Active Process & EDR Verification Plan",
    outcome:
      "Verify CrowdStrike sensor active status directly via directory logins, preventing unmanaged endpoints.",
    audience: "SecOps Leads / AppSec Engineers",
    maturity: "Established (Maturity 3)",
    effort: "Medium (approx 8 hrs)",
    requiredState: "Okta Tenant + Active Falcon API Token",
    lastReviewed: "Last reviewed: Jan 10, 2026 by SecOps Review Board",
  },
  {
    id: "mfa-containment",
    source: "SOURCE BASED ON: NIST SP 800-207 Zero Trust Architecture",
    title: "MFA Token Reset & Identity Containment",
    outcome:
      "Enforce cryptographic re-authentication automatically on directory drift flags.",
    audience: "Identity & IAM Architects",
    maturity: "Advanced (Maturity 4)",
    effort: "High (requires policy change)",
    requiredState: "Microsoft Entra ID Premium P1/P2",
    lastReviewed: "Last reviewed: Jan 05, 2026 by Identity Governance",
  },
];

export const FeaturedGuidesSection: React.FC<FeaturedGuidesProps> = ({
  onOpenDemo,
}) => {
  return (
    <section id="featured-guides" className="py-14 md:py-20 bg-[#F5F2EB] border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header with Review Badge */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B26] font-sans">
              Featured Implementation Guides
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Source-grounded, peer-reviewed plans to resolve explicit posture
              conflict rules.
            </p>
          </div>

          <div className="inline-flex">
            <span className="px-3 py-1.5 bg-teal-50 text-teal-800 border border-teal-200 rounded-sm font-mono text-xs font-bold uppercase tracking-wider">
              CRITICAL REVIEW PASS STATUS
            </span>
          </div>
        </div>

        {/* 2 Guide Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 hover:border-slate-300 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#A91D22] uppercase">
                  <Link2 className="w-3 h-3  text-[#A91D22]" />
                  <span>{guide.source}</span>
                </div>

                <h3 className="text-xl font-extrabold text-[#0B1B26] font-sans">
                  {guide.title}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-bold text-[#0B1B26]">INTENDED OUTCOME: </span>
                  <span className="text-slate-600 font-normal">{guide.outcome}</span>
                </p>

                {/* Metadata Table */}
                <div className="p-4 bg-[#E6E4DD]/60 rounded-xl space-y-2.5 text-xs">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-300/50">
                    <span className="text-slate-500 font-normal">Target Audience</span>
                    <span className="font-semibold text-slate-900">{guide.audience}</span>
                  </div>

                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-300/50">
                    <span className="text-slate-500 font-normal">Resource Maturity</span>
                    <span className="font-semibold text-slate-900">{guide.maturity}</span>
                  </div>

                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-300/50">
                    <span className="text-slate-500 font-normal">Qualitative Effort</span>
                    <span className="font-semibold text-slate-900">{guide.effort}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-normal">Required State</span>
                    <span className="font-semibold text-slate-900">{guide.requiredState}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-400">
                  {guide.lastReviewed}
                </span>

                <button
                  onClick={onOpenDemo}
                  className="px-5 py-2.5 bg-[#0B1B26] hover:bg-[#122A36] text-white text-xs font-bold rounded-lg transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Access Guide</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
