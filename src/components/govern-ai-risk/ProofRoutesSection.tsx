"use client";

import React from "react";
import {
  Sliders,
  Shield,
  Lock,
  FileText,
  UserCheck,
  ShieldAlert,
} from "lucide-react";

interface ProofRouteCard {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  route: string;
  isItalicDesc?: boolean;
}

const PROOF_ROUTES: ProofRouteCard[] = [
  {
    id: "p1",
    icon: ShieldAlert,
    title: "AI Security & Governance",
    description: "Operating model for AI risk, controls and evidence.",
    route: "/platform/ai",
  },
  {
    id: "p2",
    icon: UserCheck,
    title: "Responsible AI",
    description: "Principles, authority and accountable human oversight.",
    route: "/trust/responsible-ai",
  },
  {
    id: "p3",
    icon: FileText,
    title: "Evidence Ledger",
    description: "Immutable records traceable to source and action.",
    route: "/platform/evidence",
  },
  {
    id: "p4",
    icon: Sliders,
    title: "Compliance Control Plane",
    description: "Map controls, frameworks and assurance evidence.",
    route: "/platform/compliance",
  },
  {
    id: "p5",
    icon: Shield,
    title: "Trust Center",
    description: "Security, assurance and organizational trust materials.",
    route: "/trust",
  },
  {
    id: "p6",
    icon: Lock,
    title: "Privacy",
    description: "How personal data is handled and protected.",
    route: "/legal/privacy",
    isItalicDesc: true,
  },
];

export default function ProofRoutesSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              PROOF ROUTES
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#0F172A] tracking-tight mb-4 leading-[1.2]">
            Where governance truth lives.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Follow the authoritative route for product operation, responsible
            use, evidence, controls, trust and privacy.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROOF_ROUTES.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#C44242] mb-4">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 leading-snug">
                    {card.title}
                  </h3>

                  <p
                    className={`text-xs text-[#64748B] leading-relaxed font-normal ${
                      card.isItalicDesc ? "italic" : ""
                    }`}
                  >
                    {card.description}
                  </p>
                  <a
                    href={card.route}
                    className="inline-flex items-center text-[10px] font-mono font-semibold text-[#C44242] hover:underline"
                  >
                    {card.route} &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
