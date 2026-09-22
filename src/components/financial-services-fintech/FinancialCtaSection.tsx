"use client";

import React from "react";

interface FinancialCtaProps {
  onRequestReview?: () => void;
  onTalkToArchitect?: () => void;
}

export const FinancialCtaSection: React.FC<FinancialCtaProps> = ({
  onRequestReview,
  onTalkToArchitect,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white py-20 sm:py-24 px-4 sm:px-8 lg:px-28">
      {/* Radial atmospheric glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-red-500/15 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2">
          <div className="w-5 h-0.5 bg-red-500" />
          <span className="text-red-400 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
            GET STARTED
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Hanken_Grotesk'] leading-[1.15] tracking-tight">
          Ready for defensible financial-sector security?
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg font-normal font-['Manrope'] leading-relaxed max-w-2xl">
          Review your control model, evidence flows, critical dependencies, and integration architecture with a team that works in regulated finance.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onRequestReview}
            className="w-full sm:w-auto px-7 py-4 bg-red-500 hover:bg-red-600 text-white text-base font-bold font-['Manrope'] rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-center"
          >
            Request a Financial Services Security Review
          </button>

          <button
            type="button"
            onClick={onTalkToArchitect || onRequestReview}
            className="w-full sm:w-auto px-6 py-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/40 hover:bg-white/10 text-white text-base font-bold font-['Manrope'] transition-colors cursor-pointer text-center"
          >
            Talk to a Compliance Architect
          </button>
        </div>

        {/* Sensitive Data Notice */}
        <p className="text-slate-400 text-xs font-normal font-['Manrope'] pt-2">
          Do not include account credentials, payment data, API secrets, or sensitive incident evidence in this form.
        </p>
      </div>
    </section>
  );
};
 




