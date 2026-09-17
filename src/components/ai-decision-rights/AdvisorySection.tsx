import React from "react";
import { Check } from "lucide-react";

const assistanceItems = [
  "Does not grant write or action authority.",
  "Cannot silently set official case, risk, compliance or action state.",
  "Record assistance, sources, policy version and correction or rejection.",
  "Re-evaluate when purpose, context, target or policy materially changes.",
];

export default function AdvisorySection() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Title & Description */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            01 · ADVISORY
          </p>
          <h1 className="text-4xl md:text-[42px] font-bold tracking-tight text-[#111827] leading-tight">
            Approved assistance, not delegated authority.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            AI may explain, summarize, compare or recommend within an approved
            purpose and scope. The authorized user remains decision authority.
          </p>
        </div>

        {/* Right Side: Cards */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Top White Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
            <div className="inline-block bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase mb-6">
              ASSISTANCE ONLY
            </div>

            <ul className="space-y-4">
              {assistanceItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-[#4B5563]"
                >
                  <span className="text-[#059669] shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom White Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
            <p className="text-[#C53030] text-[10px] font-bold tracking-wider uppercase mb-2">
              ADVISORY LAW
            </p>
            <h3 className="text-lg font-bold text-[#111827] leading-snug">
              Advisory does not mean low risk, always accurate, legally safe or
              automatically usable.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
