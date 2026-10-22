"use client";
import React, { useState } from "react";

const directions = [
  {
    title: "Managed Defense",
    description:
      "Explore operational security detection, investigation and coordinated response support.",
  },
  {
    title: "Continuous Assurance",
    description:
      "Explore governance, control visibility and evidence-oriented assurance workflows.",
  },
];

export default function WhereWouldYouLikeTheConversationToStart() {
  const [selected, setSelected] = useState("Managed Defense");

  return (
    <div className="bg-white text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl text-center">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            TWO DIRECTIONS
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Where would you like the conversation to start?
          </h1>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {directions.map((item, index) => {
            const isSelected = selected === item.title;
            return (
              <div
                key={index}
                onClick={() => setSelected(item.title)}
                className={`rounded-2xl p-6 md:p-8 cursor-pointer transition-all shadow-[0_4px_20px_rgba(0,0,0,0.03)] border ${
                  isSelected
                    ? "border-[#C53030] bg-[#FEF2F2]/30 ring-2 ring-[#C53030]/20"
                    : "border-[#E5E7EB] bg-white hover:border-[#D1D5DB]"
                }`}
              >
                <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
