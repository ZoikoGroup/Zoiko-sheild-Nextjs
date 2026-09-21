"use client";

import React from "react";
import Image from "next/image";

interface AccountManagementSectionProps {
  onOpenDemo?: () => void;
}

export const AccountManagementSection: React.FC<AccountManagementSectionProps> = ({
  onOpenDemo,
}) => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-stone-200/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
                  — ACCOUNT MANAGEMENT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
                Active Client Expansion &amp; Reduction
              </h2>
              <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed max-w-xl">
                Already running Zoiko? Modifying EDR sensor boundaries or directory scopes is fully managed inside your Customer Success panel. Prorated calculations apply dynamically.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenDemo}
                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold font-['Manrope'] shadow-sm transition-all"
              >
                Access CS Portal
              </button>

              <button
                type="button"
                onClick={onOpenDemo}
                className="px-5 py-2.5 rounded-lg bg-stone-200/80 hover:bg-stone-300/80 border border-stone-300 text-slate-800 text-xs sm:text-sm font-bold font-['Manrope'] shadow-xs transition-all"
              >
                Talk to Account Lead
              </button>
            </div>
          </div>

          {/* Right Column: CS Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-900">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/how-pricing-works/CS-Illustration.png"
                  alt="Customer Success and Account Management"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
