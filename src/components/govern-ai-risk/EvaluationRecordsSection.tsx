"use client";

import React from "react";

interface EvaluationCard {
  id: string;
  badgeText: string;
  badgeDotColor: string;
  title: string;
  subjectVersion: string;
  datasetSource: string;
  resultValue: string;
  limitationText: string;
}

const EVALUATION_CARDS: EvaluationCard[] = [
  {
    id: "e1",
    badgeText: "WITHIN THRESHOLD",
    badgeDotColor: "bg-[#10B981]",
    title: "Fairness disparity test",
    subjectVersion: "Credit Assistant · v4.8",
    datasetSource: "Q2 adjudicated outcomes",
    resultValue: "3.1%",
    limitationText: "Sparse samples for two regional cohorts.",
  },
  {
    id: "e2",
    badgeText: "REVIEW REQUIRED",
    badgeDotColor: "bg-[#F59E0B]",
    title: "Prompt injection challenge",
    subjectVersion: "Claims Copilot · v2.3",
    datasetSource: "Red-team suite RT-19",
    resultValue: "87/100",
    limitationText: "Multilingual attack coverage remains partial.",
  },
  {
    id: "e3",
    badgeText: "THRESHOLD MISSED",
    badgeDotColor: "bg-[#C44242]",
    title: "Grounding accuracy audit",
    subjectVersion: "Policy Search · v7.1",
    datasetSource: "Verified policy corpus",
    resultValue: "91.4%",
    limitationText: "Recently amended policies not yet represented.",
  },
];

export default function EvaluationRecordsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      {/* Outer wrapper aligned left with padding gap */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Eyebrow and Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              EVALUATION RECORDS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mb-4 leading-tight">
            Show the method, result — and what it cannot prove.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-2xl font-normal">
            Keep each result tied to a specific subject, version, dataset,
            threshold and visible limitation so teams can interpret evidence in
            context.
          </p>
        </div>

        {/* 3-Card Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          {EVALUATION_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-xl flex flex-col justify-between text-left"
            >
              <div>
                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F5F0] text-[9px] font-mono font-bold tracking-wider text-[#0F172A] uppercase">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${card.badgeDotColor}`}
                    />
                    {card.badgeText}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-[#0F172A] mb-5 leading-snug">
                  {card.title}
                </h3>

                {/* Card Metadata Fields */}
                <div className="space-y-4 text-xs mb-8">
                  <div>
                    <span className="block text-[9px] font-mono font-bold tracking-wider text-[#94A3B8] uppercase mb-0.5">
                      SUBJECT / VERSION
                    </span>
                    <span className="font-semibold text-[#0F172A]">
                      {card.subjectVersion}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[9px] font-mono font-bold tracking-wider text-[#94A3B8] uppercase mb-0.5">
                      DATASET / SOURCE
                    </span>
                    <span className="font-semibold text-[#0F172A]">
                      {card.datasetSource}
                    </span>
                  </div>
                </div>

                {/* Result Section */}
                <div className="flex items-end justify-between mb-6">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#94A3B8] uppercase mb-1">
                    RESULT
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-none">
                    {card.resultValue}
                  </span>
                </div>
              </div>

              {/* Limitation Inner Box */}
              <div className="bg-[#F0EDE6] rounded-2xl p-3.5 text-left">
                <span className="block text-[9px] font-mono font-bold tracking-widest text-[#C44242] uppercase mb-1">
                  LIMITATION
                </span>
                <p className="text-[11px] text-[#64748B] font-normal leading-normal">
                  {card.limitationText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
