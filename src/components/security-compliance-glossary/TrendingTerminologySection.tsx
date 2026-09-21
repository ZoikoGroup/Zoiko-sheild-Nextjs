"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface TrendingTerminologyProps {
  onSelectTerm?: (term: string) => void;
}

export const TrendingTerminologySection: React.FC<TrendingTerminologyProps> = ({
  onSelectTerm,
}) => {
  const trendingTerms = [
    {
      title: "Continuous Assurance",
      badge: "NIST SP 800-137",
      badgeType: "teal",
      definition:
        "The continuous assessment and cryptographic auditing of controls, proving steady state compliance over isolated, periodic reviews.",
      topic: "Topic: Evidence & Auditability",
    },
    {
      title: "Zero Trust Architecture",
      badge: "CIS Controls v8",
      badgeType: "slate",
      definition:
        "An enterprise cybersecurity architectural design based on never trusting implicitly; continuous explicit session validation is required.",
      topic: "Topic: Identity & Access",
    },
    {
      title: "Endpoint Posture",
      badge: "RFC 5209",
      badgeType: "amber",
      definition:
        "The status and cryptographic compliance state of a remote endpoint host compared to target enterprise configuration baseline policies.",
      topic: "Topic: Endpoint & Device",
    },
    {
      title: "Principle of Least Privilege",
      badge: "ISO/IEC 27001",
      badgeType: "teal",
      definition:
        "Restricting users, service accounts, and processes to only those access rights strictly necessary to execute their explicit business task.",
      topic: "Topic: Identity & Access",
    },
    {
      title: "Systemic Risk",
      badge: "COBIT 2019",
      badgeType: "amber",
      definition:
        "The potential for shared software, network, or structural infrastructure failures to trigger cascading outages across entire sectors.",
      topic: "Topic: GRC",
    },
    {
      title: "Responsible AI Alignment",
      badge: "NIST AI RMF",
      badgeType: "rose",
      definition:
        "The governance framework ensuring machine learning system models act in strict compliance with human intent, safety guidelines, and data regulations.",
      topic: "Topic: Responsible AI",
    },
  ];

  return (
    <section className="w-full bg-stone-200 border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <div className="w-4 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase">
              TRENDING TERMINOLOGY
            </span>
          </div>
          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            High-Intent Industry Terms
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTerms.map((term, idx) => (
            <div
              key={idx}
              onClick={() => onSelectTerm && onSelectTerm(term.title)}
              className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4 cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-slate-900 text-lg font-extrabold font-['Hanken_Grotesk'] group-hover:text-red-500 transition-colors">
                    {term.title}
                  </h3>
                  <div
                    className={`px-2 py-0.5 rounded-sm inline-flex items-center text-xs font-bold font-['JetBrains_Mono'] shrink-0 ${
                      term.badgeType === "teal"
                        ? "bg-gray-200 text-teal-700"
                        : term.badgeType === "amber"
                        ? "bg-amber-100 text-amber-700"
                        : term.badgeType === "rose"
                        ? "bg-red-50 text-rose-800"
                        : "bg-blue-100 text-slate-500"
                    }`}
                  >
                    {term.badge}
                  </div>
                </div>

                <p className="text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
                  {term.definition}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                <span className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                  {term.topic}
                </span>
                <div className="w-4 h-4  flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <ArrowRight className="w-3 h-3 font-bold" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
