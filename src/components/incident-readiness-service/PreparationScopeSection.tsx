"use client";

import React from "react";
import Image from "next/image";

export default function PreparationScopeSection() {
  const preparationTags = [
    "scope_id / version",
    "business / service context",
    "systems / environments",
    "included activities",
    "exclusions",
    "assumptions",
    "dependencies",
    "known gaps",
    "owner",
    "review date",
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content & Tags */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C44242]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
                PREPARATION SCOPE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
              Know what is ready &mdash; and what is not.
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-8">
              Make owners, context, dependencies, assumptions and known gaps
              inspectable before pressure arrives.
            </p>

            {/* Tags Grid */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {preparationTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-[#E4F0EC] text-[10px] font-mono font-medium text-[#123B4C] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={() => console.log("Inspect Scope clicked")}
                className="px-5 py-2.5 rounded-xl border border-[#CBD5E1] hover:border-[#0F172A] text-[#0F172A] text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 bg-white cursor-pointer shadow-sm"
              >
                Inspect Scope
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0] aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src="/images/incident/2.png"
                alt="Preparation Scope Discussion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
