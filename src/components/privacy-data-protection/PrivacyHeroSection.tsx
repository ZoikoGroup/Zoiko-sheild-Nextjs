"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyHeroSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-[#C44242]" />
            <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              PRIVACY & DATA PROTECTION
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-[#0A2029] tracking-[-0.024em] leading-[1.12] mb-6">
            Privacy controls that operate with the system—not around it.
          </h1>

          {/* Paragraph */}
          <p className="text-[#5B6670] text-base sm:text-[18px] leading-[27px] max-w-xl mb-8 font-medium">
            Automate verification of tenant boundaries, data classification, and continuous cryptographic deletion.
            Zoiko Shield binds legal compliance guarantees directly to your running live operations—proving compliance
            with mathematical certainty.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8 w-full sm:w-auto">
            <Link
              href="#controls"
              className="inline-flex items-center justify-center px-6 py-3.5 sm:py-4 rounded-[10px] bg-[#C44242] hover:bg-[#ad3737] text-white font-bold text-[15px] transition-all shadow-sm active:scale-[0.98]"
            >
              Review Privacy Controls
            </Link>
            <Link
              href="#notice"
              className="inline-flex items-center justify-center px-6 py-3.5 sm:py-4 rounded-[10px] bg-transparent hover:bg-[#0A2440]/5 text-[#0A2440] font-bold text-[15px] border border-[#0A2440] transition-all active:scale-[0.98]"
            >
              View Privacy Notice
            </Link>
          </div>

          {/* Note */}
          <p className="font-mono text-xs text-[#5B6670] leading-relaxed">
            * Note: Legal disclosures and privacy policies constitute authoritative policies.
            Operational controls shown below serve to implement and verify these commitments continuously.
          </p>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-[560px] aspect-[560/469] rounded-2xl overflow-hidden shadow-2xl border border-[#123B4C]/15 bg-white">
            <Image
              src="/images/privacy-data-protection/privacy-hero-control.png"
              alt="Privacy controls that operate with the system"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
