"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

interface ReadinessCard {
  id: string;
  title: string;
  description: string;
}

const READINESS_CARDS: ReadinessCard[] = [
  {
    id: "rc-1",
    title: "Preparation",
    description: "Define scope, owners, dependencies and known gaps.",
  },
  {
    id: "rc-2",
    title: "Activation",
    description: "Qualify the request and verify decision authority.",
  },
  {
    id: "rc-3",
    title: "Response Governance",
    description: "Route approved actions through explicit controls.",
  },
  {
    id: "rc-4",
    title: "Communications",
    description: "Coordinate reviewed messages for approved audiences.",
  },
  {
    id: "rc-5",
    title: "Recovery Review",
    description: "Record residual state, decisions and lessons.",
  },
];

export default function ReadinessAtAGlanceSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              THE GOVERNED PATH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
            Readiness at a glance.
          </h2>
        </div>

        {/* 5-Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {READINESS_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#10B981] mb-4">
                  <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2 leading-snug">
                  {card.title}
                </h3>
              </div>

              <div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
