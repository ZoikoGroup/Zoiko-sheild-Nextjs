"use client";

import React from "react";

export default function LegalPrivacyNotificationAndPrSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              LEGAL, PRIVACY, NOTIFICATION AND PR
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Coordination is not ownership.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            The retainer is a cybersecurity service relationship. Legal, privacy
            and regulatory professionals retain their own decision authority
            unless a separately approved engagement explicitly says otherwise.
          </p>
        </div>

        {/* Graphic Showcase Container */}
        <div className="relative overflow-hidden">
          <img
            src="/images/ir/3.png"
            alt="Legal, privacy, notification and PR coordination workflow graphic"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
