"use client";

import React from "react";
import Image from "next/image";

export default function ContactSupport() {
  return (
    <div className="relative w-full bg-[#F7F5F0] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
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
        {/* Left Column: Text, Warning Box, and CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center">
          {/* Top Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#C8382C] uppercase font-semibold">
              — CONTACT SUPPORT
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-[42px] lg:text-[46px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-4">
            Get the right team the right context.
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-6 font-normal">
            We route cases instantly based on authenticated cryptographic proof of your active identity and endpoint configuration. Ensure credentials, tokens, and private keys remain sanitized.
          </p>

          {/* Warning Notice Box */}
          <div className="w-full bg-[#FCEAEA] border border-[#E8D1D1] rounded-2xl p-4 flex items-start gap-3 mb-6">
            <div className="text-[#C8382C] mt-0.5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-[#593333] text-xs sm:text-sm leading-relaxed">
              Never paste API tokens, private private-keys, cleartext passwords, or un-redacted session dumps in your descriptions or attachment payloads.
            </p>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors"
            >
              Create Support Request
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-[#111A1E30] text-[#111A1E] text-sm font-medium tracking-wide hover:bg-[#111A1E08] transition-colors"
            >
              Check Live Status
            </a>
          </div>

          {/* Footer Subtext */}
          <div className="flex items-center">
            <span className="text-[10px] tracking-[0.15em] font-mono text-[#7A858B] uppercase">
              Cryptographically scoped. Evidence-backed. Human-governed.
            </span>
          </div>
        </div>

        {/* Right Column: Large Feature Image Card */}
        <div className="lg:col-span-6">
          <div className="relative w-full overflow-hidden">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/images/support/contact.png"
                alt="Contact Support Team & Workspace Preview"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
