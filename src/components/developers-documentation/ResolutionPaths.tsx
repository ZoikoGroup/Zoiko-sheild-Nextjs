"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const checkSteps = [
  "1. Validate target tenant guidelines and network parameters.",
  "2. Confirm credential lifespan and OIDC client scopes.",
  "3. Audit permission limits (verify write-vs-read boundaries).",
  "4. Ensure active sensor telemetry in origin EDR portal.",
  "5. Check webhook delivery success in Developer Console.",
];

export default function ResolutionPaths() {
  return (
    <section className="w-full bg-[#F5F2EB] py-16 sm:py-20 lg:py-24 px-6 md:px-12 lg:px-16 font-sans text-[#111827] border-t border-[#E7E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          {/* Tag / Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#BE3A34]" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
              DIAGNOSTIC FRAMEWORK
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B1B26] tracking-tight mb-3">
            Resolution paths for stale or failed connections
          </h2>

          {/* Subtitle */}
          <p className="text-[14.5px] sm:text-base text-[#52606D] max-w-3xl leading-relaxed">
            Address authorization failures, webhook timeouts, or degraded sensor states using our structured validation sequence.
          </p>
        </div>

        {/* Two-Column Diagnostic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Recommended Check Order */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0B1B26] mb-4">
              Recommended check order
            </h3>

            <div className="space-y-2.5">
              {checkSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#EAE6DE]/90 border border-[#DDD8CE] rounded-xl px-4 py-3 sm:py-3.5 transition-colors duration-150 hover:bg-[#E3DFD5]"
                >
                  <p className="font-mono text-[12px] sm:text-[12.5px] text-[#243340] leading-snug">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Diagnostic Visual Image */}
          <motion.div
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-black/5">
              <Image
                src="/images/Zoiko Shield - Developers-documentation/ddp2.jpg"
                alt="Security engineer monitoring server telemetry and diagnosing system connections"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
