import React from "react";
import Link from "next/link";
import SectionEyebrow from "./SectionEyebrow";

export default function ProveControlsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F5F0] py-14 sm:py-16 lg:py-20 border-b border-[#123B4C]/10">
      {/* Background decorative glow from Figma (with -z-10 to never cover text) */}
      <div
        className="pointer-events-none absolute right-[-80px] top-[-60px] -z-10 h-[550px] w-[1100px] max-w-none opacity-70"
        aria-hidden="true"
      >
        <img
          src="/images/prove-controls-continuously/hero-blur-glow.svg"
          alt=""
          className="h-full w-full object-contain"
          loading="eager"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <SectionEyebrow text="SOLUTIONS BY NEED" />

            <h1 className="font-hanken font-extrabold text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.08] tracking-[-0.0214em] text-[#0A2029]">
              Prove every control with current, traceable evidence.
            </h1>

            <p className="font-manrope text-[16px] sm:text-[17px] font-medium leading-[27px] text-[#5B6670] max-w-2xl">
              Turn control assurance from a periodic exercise into a continuously evaluated operating state. Connect control intent to tests, evidence, owners, exceptions, and framework obligations — while preserving source, scope, freshness, and review history.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#C44242] px-6 py-4 font-manrope text-[15px] font-bold text-white shadow-sm transition-all hover:bg-[#a93030] hover:shadow-md cursor-pointer"
              >
                See Continuous Assurance in Action
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[10px] border border-[#0A2440] px-6 py-4 font-manrope text-[15px] font-bold text-[#0A2440] transition-colors hover:bg-[#0A2440]/5 cursor-pointer"
              >
                Talk to a Compliance Architect
              </Link>
            </div>

            <p className="font-jetbrains text-[12px] font-medium leading-relaxed text-[#5B6670] pt-2">
              * Trust Note: Automated checks, evidence signals, manual assessments, and human review remain independent and distinct in our ledger model.
            </p>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[565px] rounded-[16px] border border-[#123B4C]/15 bg-[#0A2029] p-2 shadow-2xl overflow-hidden">
              <img
                src="/images/prove-controls-continuously/hero-right-visual.png"
                alt="Live Continuous Assurance Control Dashboard and telemetry visualization"
                width={565}
                height={305}
                className="h-auto w-full rounded-[12px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
