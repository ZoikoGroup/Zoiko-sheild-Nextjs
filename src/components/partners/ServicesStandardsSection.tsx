"use client";

import React from "react";
import Image from "next/image";

export default function ServicesStandardsSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-[108px] border-b border-[#123B4C]/10">
      <div className="max-w-[1224px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        {/* Left Column Content */}
        <div className="w-full lg:max-w-[540px] flex flex-col items-start space-y-6">
          <div className="space-y-4">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C44242]" />
              <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
                DELIVERY ASSURANCE
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029] leading-tight tracking-[-0.022em]">
              Governed Implementation Frameworks
            </h2>

            {/* Description */}
            <p className="font-manrope text-base text-[#4F5358] leading-[1.5em]">
              Every partner deployment follows pre-engineered architecture
              constraints to guarantee that no security posture is degraded
              during handoff.
            </p>
          </div>

          {/* Details (No box, exactly as in Figma design) */}
          <div className="space-y-2 pt-2">
            <h3 className="font-manrope font-semibold text-[15px] text-[#0A2029]">
              Continuous Skills & Enablement Requirements
            </h3>
            <p className="font-manrope text-sm leading-[1.5em] text-[#5E6670]">
              SIs and MSPs are evaluated against core competency models. Every
              certified architecture engineer must demonstrate mastery of
              zero-trust tenant routing and direct cryptographic evidence
              auditing.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-auto shrink-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px] aspect-[560/344] sm:w-[560px] sm:h-[344px] rounded-[16px] overflow-hidden">
            <Image
              src="/images/partners/delivery-framework-ui.png"
              alt="Enterprise Network Security Dashboard - Threat Detection & Response"
              width={560}
              height={344}
              className="w-full h-full object-cover rounded-[16px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
