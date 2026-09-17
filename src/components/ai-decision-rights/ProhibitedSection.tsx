import React from "react";
import { Check } from "lucide-react";

const prohibitedItems = [
  "Show a safe reason and an allowed alternative or escalation when approved.",
  "No tool, model or integration substitution and no prompt-reframing bypass.",
  "Never frame prohibition as an upsell.",
  "AI cannot change its class on request.",
];

export default function ProhibitedSection() {
  return (
    <div className="bg-[#FBEFEF] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Title & Description */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            04 · PROHIBITED
          </p>
          <h1 className="text-4xl md:text-[40px] font-bold tracking-tight text-[#111827] leading-tight">
            An enforced block, not an upgrade path.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Do not allow the AI or tool to perform or make a prohibited action
            or decision. Only authoritative policy change alters the class.
          </p>

          <div className="pt-2">
            <p className="text-[#C53030] text-[10px] font-bold tracking-widest uppercase mb-1">
              PROHIBITION LAW
            </p>
          </div>
        </div>

        {/* Right Side: Card */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
            <ul className="space-y-4">
              {prohibitedItems.map((item, index) => (
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
        </div>
      </div>
    </div>
  );
}
