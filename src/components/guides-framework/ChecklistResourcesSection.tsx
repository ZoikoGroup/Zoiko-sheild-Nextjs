"use client";

import React from "react";
import { FileText, Download } from "lucide-react";

interface ChecklistItem {
  id: string;
  title: string;
  format: string;
  desc: string;
  icon: React.ElementType;
}

const CHECKLISTS: ChecklistItem[] = [
  {
    id: "control-evidence",
    title: "Control Evidence Checklist",
    format: "XLSX Checklist",
    desc: "Download the verified metadata templates to document CrowdStrike agent telemetry.",
    icon: FileText,
  },
  {
    id: "framework-adoption",
    title: "Framework Adoption Worksheet",
    format: "PDF Template",
    desc: "Step-by-step roadmap to align team roles with active Zero Trust guidelines.",
    icon: FileText,
  },
  {
    id: "audit-readiness",
    title: "Audit-Readiness Worksheet",
    format: "Interactive Sheet",
    desc: "Cryptographic ledger requirements and verification paths before SOC 2 audits.",
    icon: FileText,
  },
];

interface ChecklistResourcesProps {
  onDownload?: (id: string) => void;
}

export const ChecklistResourcesSection: React.FC<ChecklistResourcesProps> = ({
  onDownload,
}) => {
  return (
    <section
      id="checklist-resources"
      className="py-14 md:py-20 bg-[#E6E4DD] border-b border-cyan-950/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="max-w-4xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B26] font-sans">
            Evidence &amp; Checklist Resources
          </h2>
          <p className="text-sm sm:text-sm text-slate-600 font-normal leading-relaxed">
            Attestation Boundary Warning: 
            Completion of checklists is for internal readiness assessment only. It
            does not constitute formal certification, attestation, or conformity
            audits.
          </p>
        </div>

        {/* 3 Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHECKLISTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#A91D22]/10 flex items-center justify-center text-[#A91D22]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#0B1B26] font-sans">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono font-bold text-teal-800">
                        {item.format}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onDownload?.(item.id)}
                    className="w-[175px] px-3 py-2.5 bg-[#E6E4DD]/70 hover:bg-[#E6E4DD] text-slate-900 border border-slate-300 rounded-lg text-xs font-bold font-sans transition-all flex items-start justify-start gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-700" />
                    <span>Download Resource</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
