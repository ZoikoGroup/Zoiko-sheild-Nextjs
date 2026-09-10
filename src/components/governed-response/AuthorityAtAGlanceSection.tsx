"use client";

import React from "react";
import { XCircle } from "lucide-react";

export default function AuthorityAtAGlanceSection() {
  const policyTags = [
    "RECOMMEND",
    "REVIEW",
    "APPROVE",
    "EXECUTE",
    "STOP",
    "RECOVER",
  ];

  const modelBadges = ["R0", "R1", "R2", "R3", "R4"];

  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              AUTHORITY AT A GLANCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
            Decision rights before action.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Authority policy defines who may recommend, review, approve,
            execute, stop, and recover — with every level source-gated and
            inspectable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card: Authority policy */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                Authority policy
              </h3>

              <p className="text-xs text-[#5B6670] leading-relaxed mb-6">
                Policy binds people, systems and actions to explicit decision
                rights.
              </p>
              <div className="mb-4">
                <XCircle className="w-6 h-6 text-[#C44242] stroke-[1.5]" />
              </div>
            </div>

            <div>
              {/* Action Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {policyTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-[#E6F4F1] text-[10px] font-mono font-bold text-[#10B981] tracking-wider uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card: Source-controlled model */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                Source-controlled model
              </h3>

              <p className="text-sm text-[#5B6670] leading-relaxed mb-6">
                R0–R4 labels are displayed exactly as governed at source;
                meanings are never inferred.
              </p>
            </div>

            {/* Level Badges */}
            <div className="flex flex-wrap items-center gap-2 mt-auto pt-6">
              {modelBadges.map((badge) => (
                <span
                  key={badge}
                  className="w-8 h-8 rounded-full bg-[#E6F4F1] text-[10px] font-mono font-bold text-[#10B981] flex items-center justify-center tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
