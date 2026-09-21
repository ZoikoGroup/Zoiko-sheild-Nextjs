"use client";

import React from "react";

export const GlossaryShowcaseSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase">
            GLOSSARY SHOWCASE
          </div>
          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Deep-Dive: Sample Term Detail View
          </h2>
        </div>

        {/* Showcase Detail Box */}
        <div className="p-6 sm:p-10 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 shadow-xs flex flex-col gap-8">
          {/* Top Title & Badges */}
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Hanken_Grotesk']">
              Multi-Factor Authentication
            </h3>
            <div className="px-3 py-1 bg-blue-100 rounded-[100px] text-slate-500 text-xs font-bold font-['JetBrains_Mono']">
              Acronym: MFA
            </div>
            <div className="px-3 py-1 bg-gray-200 rounded-[100px] text-teal-700 text-xs font-bold font-['JetBrains_Mono']">
              Status: Active
            </div>
          </div>

          {/* 2 Comparative Panes */}
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">
            {/* Left Pane (Zoiko Explanation) */}
            <div className="flex-1 p-6 sm:p-7 bg-stone-100 rounded-xl flex flex-col justify-between gap-5 border border-stone-200/60">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <div className="size-2 bg-red-500 rounded-full" />
                  <h4 className="text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
                    Zoiko Plain-English Explanation
                  </h4>
                </div>

                <p className="text-gray-500 text-sm sm:text-base font-normal font-['Manrope'] leading-relaxed">
                  Unlike strict textbook wording, MFA in practice is about
                  validating that the human trying to log in actually possesses the
                  cryptographic key or device registered to their account. Zoiko
                  Shield checks these sessions continuously, matching them to
                  verified device compliance.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex flex-col gap-1.5">
                <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono']">
                  IN ZOIKO SHIELD PRODUCT:
                </span>
                <p className="text-gray-500 text-xs font-normal font-['Manrope'] leading-relaxed">
                  Real-time webhook queries match MFA logs (e.g. Duo, Okta Verify)
                  directly against live EDR host state.
                </p>
              </div>
            </div>

            {/* Right Pane (Authoritative Source Wording) */}
            <div className="flex-1 p-6 sm:p-7 rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col justify-between gap-5 bg-white">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <div className="size-2 bg-slate-400 rounded-full" />
                  <h4 className="text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
                    Authoritative Source Wording
                  </h4>
                </div>

                <blockquote className="text-gray-500 text-sm sm:text-base font-normal font-['Manrope'] leading-relaxed italic">
                  &ldquo;An authentication method that requires the user to provide
                  two or more verification factors to gain access to a resource,
                  asset, or application, conforming strictly to verified
                  authentication assurance levels (AAL).&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <span className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                  Citation: NIST SP 800-63B &middot; Section 4.2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
