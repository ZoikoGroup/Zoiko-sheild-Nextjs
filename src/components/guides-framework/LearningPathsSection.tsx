"use client";

import React from "react";
import { User } from "lucide-react";

interface RolePath {
  title: string;
  icon: React.ElementType;
  progression: string;
}

const ROLE_PATHS: RolePath[] = [
  {
    title: "Security Leader",
    icon: User,
    progression: "ZTA Strategy → CIS Controls Framework → Governance Reports",
  },
  {
    title: "GRC / Compliance Specialist",
    icon: User,
    progression: "Audit Worksheet → Evidence Checklists → Cryptographic Evidence",
  },
  {
    title: "Security Engineer",
    icon: User,
    progression: "Telemetry Mapping → CIS Safeguards Group 1 → Active Posture Audit",
  },
  {
    title: "Developer / AppSec",
    icon: User,
    progression: "OWASP Top 10 Prevention → Software Checklist → Secure Endpoints",
  },
];

export const LearningPathsSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-[#F5F2EB] border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B26] font-sans">
            Role &amp; Maturity Learning Paths
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Disclaimer: Zoiko maturity paths are independent learning tracks based
            on our documentation and are not official source-framework scores.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROLE_PATHS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#A91D22]/10 flex items-center justify-center text-[#A91D22]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-extrabold text-[#0B1B26] font-sans">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-normal">
                    Recommended progression for professional competency:
                  </p>

                  <div className="p-3 bg-[#E6E4DD]/60 rounded-lg">
                    <span className="text-xs font-mono font-bold text-slate-900 leading-relaxed block">
                      {item.progression}
                    </span>
                  </div>
                </div>

                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
