"use client";

import React from "react";
import Image from "next/image";
import { AlertCircle } from "lucide-react";

export default function SupportCenter() {
  return (
    <div className="relative w-full bg-[#F6F4EE] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
      {/* Background blur/shadow element positioned outside on the right */}
      <div className="absolute -right-32 md:-right-20 lg:-right-10 top-1/2 -translate-y-1/2 pointer-events-none z-0">
        <Image
          src="/images/blur.png"
          alt=""
          width={900}
          height={900}
          className="w-[500px] md:w-[700px] lg:w-[950px] opacity-80 object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text, Search Input, and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          {/* Top Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#C8382C] uppercase font-semibold">
              — SUPPORT CENTER
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-[42px] lg:text-[44px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-4">
            Get to the answer — or the right support team — faster.
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-6 font-normal">
            Search our directly verified documentation pipeline or execute
            read-only local diagnostics. Standard support channels remain active
            for verified administrative entities.
          </p>

          {/* Search Box */}
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-[#111A1E15] p-2 flex items-center mb-6">
            <div className="pl-3 pr-2 text-[#7A858B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search errors, feature setups, EDR integrations, API schemas, credential diagnostics..."
              className="w-full bg-transparent text-xs sm:text-sm text-[#111A1E] placeholder-[#7A858B] focus:outline-none px-2 py-2"
            />
            <button className="px-5 py-3 rounded-xl bg-[#C8382C] text-white text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors whitespace-nowrap">
              Search Support
            </button>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors"
            >
              Contact Support
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-[#111A1E30] text-[#111A1E] text-sm font-medium tracking-wide hover:bg-[#111A1E08] transition-colors"
            >
              View System Status
            </a>
          </div>

          {/* Safeguard Notice */}
          <div className="flex items-center gap-2">
            <AlertCircle className="text-[#B45309] h-3 w-3"/>
            <span className="text-[10px] tracking-[0.15em] font-mono text-[#C8382C] uppercase font-semibold">
              Safeguard: Never share API keys, OAuth secrets, or active session
              tokens.
            </span>
          </div>
        </div>

        {/* Right Column: Large Feature Image Card */}
        <div className="lg:col-span-5">
          <div className="relative w-ful overflow-hidden">
            <div className="relative w-full aspect-[5/4] overflow-hidden">
              <Image
                src="/images/support/1.png"
                alt="Support Center Team & Diagnostics Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
