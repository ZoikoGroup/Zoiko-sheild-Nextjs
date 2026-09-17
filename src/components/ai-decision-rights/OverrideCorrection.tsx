import React from "react";
import { CornerDownRight } from "lucide-react";

const leftColumnActions = [
  { title: "Reject output" },
  { title: "Stop AI/tool" },
  { title: "Appeal/escalation when authoritative" },
  { title: "Undo downstream use not assumed" },
];

const rightColumnActions = [
  { title: "Correct output" },
  { title: "Challenge class" },
  { title: "Policy correction" },
  { title: "History" },
];

export default function OverrideCorrection() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Title & Callout Box */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
                <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
                OVERRIDE / CORRECTION
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
                Human challenge stays available and attributable.
              </h1>
              <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
                AI cannot change its class on request. Rejections, corrections,
                challenges and authoritative appeals preserve history.
              </p>
            </div>

            {/* Authority Boundary Box */}
            <div className="bg-[#FDF2F2] border border-[#123B4C1F] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <h3 className="text-sm font-bold tracking-wider text-[#C53030] uppercase mb-2">
                Authority boundary
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                Undo of downstream use is not assumed; it requires the
                appropriate governed action and evidence.
              </p>
            </div>
          </div>

          {/* Right Side: Two Columns of Action Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Left Column Items */}
            <div className="flex flex-col gap-4">
              {leftColumnActions.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex items-center gap-4"
                >
                  <span className="text-[#C53030] shrink-0">
                    <CornerDownRight className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-[#111827] leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column Items */}
            <div className="flex flex-col gap-4">
              {rightColumnActions.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex items-center gap-4"
                >
                  <span className="text-[#C53030] shrink-0">
                    <CornerDownRight className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-[#111827] leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
