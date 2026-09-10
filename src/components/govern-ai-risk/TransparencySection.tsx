"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ProviderRow {
  id: string;
  provider: string;
  badgeLabel: string;
  badgeDotColor: string;
  dataUse: string;
  region: string;
  model: string;
  dueDiligence: string;
}

interface StepItem {
  number: string;
  label: string;
}

const PROVIDERS: ProviderRow[] = [
  {
    id: "p1",
    provider: "Vertex AI",
    badgeLabel: "CHANGE REVIEW",
    badgeDotColor: "bg-[#F59E0B]",
    dataUse: "Contract restricted",
    region: "EU - Belgium",
    model: "Gemini 2.5",
    dueDiligence: "Evidence attached",
  },
  {
    id: "p2",
    provider: "Azure OpenAI",
    badgeLabel: "DUE DILIGENCE CURRENT",
    badgeDotColor: "bg-[#10B981]",
    dataUse: "Contract restricted",
    region: "UK - London",
    model: "GPT-4.1",
    dueDiligence: "Evidence attached",
  },
  {
    id: "p3",
    provider: "Anthropic",
    badgeLabel: "RESIDENCY EXCEPTION",
    badgeDotColor: "bg-[#C44242]",
    dataUse: "Contract restricted",
    region: "US - Virginia",
    model: "Claude 4",
    dueDiligence: "Evidence attached",
  },
];

const STEPS: StepItem[] = [
  { number: "01", label: "Material change" },
  { number: "02", label: "Re-review" },
  { number: "03", label: "Re-evaluation" },
  { number: "04", label: "Data-use review" },
  { number: "05", label: "Policy re-resolution" },
];

const CHECK_POINTS = [
  "Data categories · application, financial, interaction",
  "Provider sharing · Azure OpenAI, no training",
  "Decision right · advisory",
  "Evaluation summary · 3 active, 1 limitation",
  "Known limitations · regional cohort sparsity",
  "Reviewed · 18 Sep 2026 · version 4.8",
  "Concern route · governed internal routing",
];

export default function TransparencySection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              TRANSPARENCY
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#0F172A] tracking-tight mb-4 leading-[1.2]">
            Make data use, dependencies and change visible.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-3xl">
            Publish an inspectable record of what each AI system uses, shares,
            decides and cannot prove — then reopen governance whenever a
            material dependency changes.
          </p>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
          {/* Left Dark Card */}
          <div className="lg:col-span-4 bg-[#0A2029] rounded-3xl p-6 text-white flex flex-col justify-between shadow-xl">
            <div>
              {/* Badge Header */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono font-bold tracking-wider text-white uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  REVIEWED · V4.8
                </span>
              </div>

              {/* Title & Sub-header */}
              <h3 className="text-xl font-extrabold mb-1 tracking-tight text-white">
                Customer credit assistant
              </h3>
              <p className="text-[10px] font-mono tracking-wider text-[#10B981] uppercase mb-6">
                TR-041 · PUBLIC TRANSPARENCY RECORD
              </p>

              {/* Bullet Points with Checkmarks */}
              <ul className="space-y-3">
                {CHECK_POINTS.map((text, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white/90 shrink-0 mt-0.5" />
                    <span className="text-xs text-[#CBD5E1] font-normal leading-snug">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Provider Stack Cards */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {PROVIDERS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-bold text-[#0F172A]">
                    {item.provider}
                  </h4>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F7F5F0] text-[9px] font-mono font-bold tracking-wider text-[#0F172A] uppercase">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${item.badgeDotColor}`}
                    />
                    {item.badgeLabel}
                  </span>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left border-t border-[#F1F5F9] pt-3">
                  <div>
                    <span className="block text-[8px] font-mono font-bold tracking-widest text-[#94A3B8] uppercase mb-1">
                      DATA USE / TRAINING
                    </span>
                    <span className="text-xs font-semibold text-[#0F172A]">
                      {item.dataUse}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[8px] font-mono font-bold tracking-widest text-[#94A3B8] uppercase mb-1">
                      REGIONS / RESIDENCY
                    </span>
                    <span className="text-xs font-semibold text-[#0F172A]">
                      {item.region}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[8px] font-mono font-bold tracking-widest text-[#94A3B8] uppercase mb-1">
                      MODEL / VERSION
                    </span>
                    <span className="text-xs font-semibold text-[#0F172A]">
                      {item.model}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[8px] font-mono font-bold tracking-widest text-[#94A3B8] uppercase mb-1">
                      DUE DILIGENCE
                    </span>
                    <span className="text-xs font-semibold text-[#0F172A]">
                      {item.dueDiligence}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Horizontal Lifecycle Step Box */}
        <div className="bg-[#F0EDE6] rounded-2xl p-4 border border-[#E2E8F0]">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {STEPS.map((step) => (
              <div key={step.number} className="text-left">
                <span className="block text-[9px] font-mono font-bold text-[#C44242] mb-1">
                  {step.number}
                </span>
                <span className="text-xs font-bold text-[#0F172A]">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
