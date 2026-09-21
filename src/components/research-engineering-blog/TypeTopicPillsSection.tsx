"use client";

import React from "react";

interface TypeTopicPillsProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedTopic: string;
  setSelectedTopic: (topic: string) => void;
}

const TYPES = [
  "All Studies",
  "Security Research",
  "Threat Analysis",
  "Engineering Lessons",
  "Reliability & Resilience",
  "Product Architecture",
  "Core Research Notes",
];

const TOPICS = [
  "# Identity & Access",
  "# Endpoint Security",
  "# Cloud & SaaS Protocols",
  "# AppSec Metrics",
  "# Detection Algorithms",
  "# AI Assurance & Safety",
  "# Compliance Proofs",
];

export const TypeTopicPillsSection: React.FC<TypeTopicPillsProps> = ({
  selectedType,
  setSelectedType,
  selectedTopic,
  setSelectedTopic,
}) => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-10 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* TYPES ROW */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-gray-500 text-xs font-bold font-['JetBrains_Mono'] mr-1">
            TYPES:
          </span>
          {TYPES.map((t) => {
            const isActive =
              selectedType === t ||
              (t === "All Studies" && (!selectedType || selectedType === "All"));
            return (
              <button
                key={t}
                onClick={() => setSelectedType(t === "All Studies" ? "All" : t)}
                className={`px-3 py-1.5 text-xs font-semibold font-['Manrope'] rounded-md transition-all cursor-pointer select-none ${
                  isActive
                    ? "bg-slate-900 text-white outline outline-1 outline-offset-[-1px] outline-black/0 shadow-xs"
                    : "bg-white text-gray-500 hover:text-slate-900 hover:bg-stone-50 outline outline-1 outline-offset-[-1px] outline-cyan-950/10"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* TOPICS ROW */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-gray-500 text-xs font-bold font-['JetBrains_Mono'] mr-1">
            TOPICS:
          </span>
          {TOPICS.map((topic) => {
            const isActive = selectedTopic === topic;
            return (
              <button
                key={topic}
                onClick={() => setSelectedTopic(isActive ? "" : topic)}
                className={`px-3 py-1.5 text-xs rounded-md transition-all cursor-pointer select-none ${
                  isActive
                    ? "bg-slate-800 text-white font-semibold font-['Manrope'] shadow-xs"
                    : "bg-white text-gray-500 font-normal font-['Manrope'] hover:text-slate-900 hover:bg-stone-50 outline outline-1 outline-offset-[-1px] outline-cyan-950/5"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
