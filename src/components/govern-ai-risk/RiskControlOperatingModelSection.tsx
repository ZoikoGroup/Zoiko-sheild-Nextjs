"use client";

import React from "react";
import {
  AlertTriangle,
  Shield,
  ClipboardList,
  BarChart2,
  User,
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Risk",
    description: "Biased eligibility recommendation",
    icon: AlertTriangle,
  },
  {
    number: "02",
    title: "Control",
    description: "Human review before decision",
    icon: Shield,
  },
  {
    number: "03",
    title: "Evidence",
    description: "Reviewer action + rationale",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Evaluation",
    description: "Fairness drift suite v3.2",
    icon: BarChart2,
  },
  {
    number: "05",
    title: "Owner",
    description: "Model Risk Committee",
    icon: User,
  },
];

export default function RiskControlOperatingModelSection() {
  return (
    <section className="relative w-full py-16 md:py-24 text-white bg-[#0A2029] font-sans overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/govern/chain.png"
          alt="Traceable Chain Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Main Content Container aligned left with padding */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#10B981]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#10B981] uppercase">
              RISK &amp; CONTROL OPERATING MODEL
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-white tracking-tight leading-[1.2] mb-4">
            Make every control traceable to proof and authority.
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
            Link risk, control, evidence, evaluation and accountable ownership
            in one inspectable chain — with limitations attached, not buried.
          </p>
        </div>

        {/* 5-Step Process Cards Row with Connecting Line */}
        <div className="relative mb-8 max-w-6xl">
          {/* Horizontal Connecting Line behind cards */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-[#123B4C] backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between text-left min-h-[180px] shadow-lg"
                >
                  <div>
                    <span className="text-[11px] font-mono text-[#64748B] block mb-3 font-semibold">
                      {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-white mb-3" />
                    <h3 className="text-base font-bold text-white mb-1">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-normal font-normal">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Known Limitation Banner */}
        <div className="max-w-6xl bg-[#C442421F] backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#C44242]/30 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-left">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase shrink-0">
            KNOWN LIMITATION
          </span>
          <p className="text-xs sm:text-sm text-[#FFFFFFAD] font-normal leading-relaxed">
            Fairness evaluation excludes applicants with incomplete demographic
            attributes; manual review remains mandatory for every consequential
            outcome.
          </p>
        </div>
      </div>
    </section>
  );
}
