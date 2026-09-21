"use client";

import React from "react";
import { FileText, Code2, AlertTriangle } from "lucide-react";

interface LatestPublicationsProps {
  onOpenPaper?: (id: string) => void;
}

export const LatestPublicationsSection: React.FC<LatestPublicationsProps> = ({
  onOpenPaper,
}) => {
  const publications = [
    {
      id: "pub-01",
      category: "ENGINEERING LESSONS",
      date: "MARCH 02, 2026",
      statusBadge: "CURRENT",
      statusType: "teal",
      title:
        "Mitigating TCP Window Squeezes in High-Capacity Registry Sync Pipelines",
      summary:
        "A granular post-mortem analyzing packet buffer depletion anomalies in internal telemetry hubs. Technical details cover TCP socket exhaustion profiles and kernel window tuning parameters.",
      artifact: "ARTIFACT: TCP-DUMP-V4",
      authorTeam: "BY: Network Reliability Core",
      artifactType: "teal",
    },
    {
      id: "pub-02",
      category: "SECURITY PROGRAM",
      date: "FEB 18, 2026",
      statusBadge: "UPDATED",
      statusType: "amber",
      title:
        "Designing Defensible Evidence Ledgers: Implementation Specifications",
      summary:
        "Cryptographic system architecture for preserving audit-ready records of endpoint posture compliance. Discusses proof constraints and dual-approver validation routines.",
      artifact: "ERRATA LOG [V2.1]",
      authorTeam: "BY: Compliance Architecture",
      artifactType: "rose",
    },
    {
      id: "pub-03",
      category: "AI SECURITY",
      date: "FEB 05, 2026",
      statusBadge: "CURRENT",
      statusType: "teal",
      title:
        "Coordinated Vulnerability Study on Prompt Injection Mitigation Vectors",
      summary:
        "Evaluating the efficacy of strict input-level structural parsing against multi-modal cognitive hijack attempts in production LLM pipelines.",
      artifact: "ARTIFACT: prompt-rules-v1",
      authorTeam: "BY: AI Safety Core Group",
      artifactType: "slate",
    },
  ];

  return (
    <section className="w-full bg-stone-100 border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
          Latest Publications
        </h2>

        <div className="space-y-6">
          {publications.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenPaper && onOpenPaper(item.id)}
              className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Meta Column (w-44 on desktop) */}
                <div className="w-full lg:w-44 shrink-0 flex flex-col items-start gap-1.5">
                  <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase">
                    {item.category}
                  </span>
                  <span className="text-slate-900 text-xs font-medium font-['JetBrains_Mono']">
                    {item.date}
                  </span>
                  <div
                    className={`px-1.5 py-0.5 rounded-sm inline-flex items-center text-[10px] font-bold font-['JetBrains_Mono'] ${
                      item.statusType === "teal"
                        ? "bg-gray-200 text-teal-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {item.statusBadge}
                  </div>
                </div>

                {/* Middle Content Column */}
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-slate-900 text-lg font-extrabold font-['Hanken_Grotesk'] leading-snug group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-normal font-['Manrope'] leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Right Artifact Column (w-60 on desktop) */}
                <div className="w-full lg:w-60 shrink-0 flex flex-col items-start lg:items-start gap-2">
                  <div
                    className={`w-full p-2 rounded-md text-xs font-normal font-['JetBrains_Mono'] truncate flex items-center gap-2 ${
                      item.artifactType === "teal"
                        ? "bg-stone-100 text-teal-700 border border-stone-200/80"
                        : item.artifactType === "rose"
                        ? "bg-red-50 text-rose-800 border border-rose-200/80"
                        : "bg-stone-100 text-slate-700 border border-stone-200/80"
                    }`}
                  >
                    {item.artifactType === "teal" ? (
                      <FileText className="w-3 h-3 text-teal-700 shrink-0" />
                    ) : item.artifactType === "rose" ? (
                      <AlertTriangle className="w-3 h-3 text-rose-800 shrink-0" />
                    ) : (
                      <Code2 className="w-3 h-3 text-slate-700 shrink-0" />
                    )}
                    <span className="truncate">{item.artifact}</span>
                  </div>
                  <span className="text-slate-400 text-xs font-normal font-['Manrope']">
                    {item.authorTeam}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
