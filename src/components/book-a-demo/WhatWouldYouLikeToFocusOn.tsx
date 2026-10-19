"use client"
import React, { useState } from "react";

const options = [
  "Full platform overview",
  "Security operations",
  "Governed AI & response",
  "Evidence & continuous assurance",
  "Platform & integrations",
  "Executive / commercial overview",
];

export default function WhatWouldYouLikeToFocusOn() {
  const [selected, setSelected] = useState("Full platform overview");

  return (
    <div className="bg-white text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl text-center">
        {/* Header Section */}
        <div className="mb-10">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            SHAPE THE SESSION
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827] mb-3">
            What would you like to focus on?
          </h1>
          <p className="text-[#4B5563] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Pick one and we&apos;ll centre the walkthrough there. If you&apos;d
            rather not choose, we&apos;ll cover the full platform.
          </p>
        </div>

        {/* Pill Selection Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {options.map((option, index) => {
            const isSelected = selected === option;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelected(option)}
                className={`text-xs md:text-sm font-medium px-5 py-3 rounded-full transition-all shadow-sm ${
                  isSelected
                    ? "bg-[#FEF2F2] border-2 border-[#C53030] text-[#C53030]"
                    : "bg-white border border-[#D1D5DB] text-[#374151] hover:bg-[#F9FAFB]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="text-xs text-[#6B7280]">
          Your selection is applied to the request form above.
        </p>
      </div>
    </div>
  );
}
