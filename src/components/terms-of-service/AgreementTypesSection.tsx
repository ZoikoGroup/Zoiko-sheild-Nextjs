"use client";

import React from "react";
import { FileText, Shield, FileCheck } from "lucide-react";

interface AgreementCard {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  authority: string;
}

const AGREEMENTS: AgreementCard[] = [
  {
    id: "public-terms",
    badge: "Standard Public",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
    title: "1. Public Terms of Service",
    description:
      "Applies automatically to all trial, evaluation, and direct online self-service registrations lacking a signed custom master agreement.",
    authority: "AUTHORITY: Default general baseline.",
  },
  {
    id: "msa-enterprise",
    badge: "Enterprise Custom",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
    title: "2. MSA / Enterprise Agreement",
    description:
      "Overrides standard online terms. Must be executed in writing by authorized representatives of both Zoiko and Customer.",
    authority: "AUTHORITY: Legal-approved contract authority required.",
  },
  {
    id: "dpa-security",
    badge: "Regulatory Addenda",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    title: "3. DPA & Security Exhibits",
    description:
      "Governs data privacy and cybersecurity posture. Integrates directly into public terms or negotiated master contracts seamlessly.",
    authority: "AUTHORITY: Legal-approved contract authority required.",
  },
];

export const AgreementTypesSection: React.FC = () => {
  return (
    <section className="py-14 md:py-18 bg-[#E6E4DD] border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-2.5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B26] font-sans">
            Which agreement applies to your use?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Zoiko Shield provides multiple contracts depending on how you procure,
            license, or access our defensible security workspace. Precedence maps
            cleanly across all documents.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AGREEMENTS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div className="space-y-3.5">
                <div className="inline-flex">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#0B1B26] font-sans">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-400 block font-normal">
                  {card.authority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
