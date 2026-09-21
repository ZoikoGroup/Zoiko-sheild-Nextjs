"use client";

import React from "react";
import { ArrowRight, Layers, ShieldCheck, Code, Crosshair, KeyRound, FileCheck } from "lucide-react";

interface QuickPath {
  title: string;
  desc: string;
  progression: string;
  anchor: string;
  icon: React.ElementType;
}

const QUICK_PATHS: QuickPath[] = [
  {
    title: "Build a program",
    desc: "For new security teams establishing modern control structures.",
    progression: "NIST CSF 2.0 → CIS Controls",
    anchor: "framework-library",
    icon: Layers,
  },
  {
    title: "Prioritize safeguards",
    desc: "Focus execution on the highest-impact defensive actions.",
    progression: "CIS Safeguards Group 1 → CIS v8.1",
    anchor: "featured-guides",
    icon: ShieldCheck,
  },
  {
    title: "Improve AppSec",
    desc: "Practical containment for development pipelines.",
    progression: "OWASP Top 10 → Software Checklists",
    anchor: "framework-library",
    icon: Code,
  },
  {
    title: "Understand adversaries",
    desc: "Map active process detections to real attack paths.",
    progression: "MITRE ATT&CK → Host Telemetry Rules",
    anchor: "spotlight-deepdive",
    icon: Crosshair,
  },
  {
    title: "Adopt Zero Trust",
    desc: "Migrate boundary posture from perimeter to session checks.",
    progression: "NIST SP 800-207 → CISA ZTMM",
    anchor: "crosswalk-explorer",
    icon: KeyRound,
  },
  {
    title: "Prepare for audits",
    desc: "Package evidence artifacts with cryptographic proof.",
    progression: "Audit Worksheet → Evidence Checklist",
    anchor: "checklist-resources",
    icon: FileCheck,
  },
];

export const QuickPathsSection: React.FC = () => {
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-14 md:py-18 bg-[#E6E4DD] border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B26] font-sans">
            Quick Paths by Goal
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Select your current operational goal to access pre-mapped,
            source-grounded sequence templates.
          </p>
        </div>

        {/* 6 Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {QUICK_PATHS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => scrollToAnchor(item.anchor)}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#A91D22]/40 text-left transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    
                  </div>

                  <h3 className="text-base font-extrabold text-[#0B1B26] font-sans group-hover:text-[#A91D22] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 p-2.5 bg-[#E6E4DD]/70 rounded-lg flex items-center gap-2 text-xs font-mono">
                  <ArrowRight className="w-3.5 h-3.5  text-[#A91D22] " />
                  <span className="font-bold text-slate-900 truncate">
                    {item.progression}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
