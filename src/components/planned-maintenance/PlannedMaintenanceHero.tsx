"use client";

import React from "react";
import Image from "next/image";

export default function PlannedMaintenanceHero() {
  return (
    <section className="relative w-full bg-[#F7F5F0] overflow-hidden py-14 sm:py-16 lg:py-20 border-b border-[#123B4C]/10">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#C44242]" />
              <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-[0.12em] text-[#C44242] uppercase">
                PLANNED MAINTENANCE
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-hanken font-extrabold text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] tracking-[-0.023em] text-[#0A2029]">
              Plan around upcoming Zoiko Shield maintenance.
            </h1>

            {/* Description */}
            <p className="font-manrope text-base sm:text-[17px] leading-[26px] text-[#5E6670] max-w-2xl">
              Review scheduled maintenance windows, expected system impact,
              affected service layers, required customer-side actions, and live
              execution progress verified directly by telemetry.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#subscribe"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] bg-[#C44242] text-white font-manrope font-bold text-[15px] shadow-sm hover:bg-[#b03939] transition-all hover:shadow-md cursor-pointer"
              >
                Subscribe to Maintenance Updates
              </a>
              <a
                href="#calendar"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-[10px] border border-[#0A2440] text-[#0A2440] font-manrope font-bold text-[15px] hover:bg-[#0A2440]/5 transition-colors cursor-pointer"
              >
                View Maintenance Calendar
              </a>
            </div>

            {/* Proof Line */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/planned-maintenance/check-circle.svg"
                  alt="Verified source"
                  width={16}
                  height={16}
                  className="w-4 h-4 text-[#1F7A6C]"
                />
              </div>
              <p className="font-jetbrains text-xs font-medium text-[#5E6670]">
                Freshness: Checked 3m ago · Directly linked to AWS &amp; Azure source registries
              </p>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] rounded-2xl bg-[#0A2440] p-4 border border-white/15 shadow-xl">
              <div className="relative w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden bg-[#0A2029]">
                <Image
                  src="/images/planned-maintenance/operations-photo.png"
                  alt="Zoiko Shield Operations and Telemetry Monitoring Center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
