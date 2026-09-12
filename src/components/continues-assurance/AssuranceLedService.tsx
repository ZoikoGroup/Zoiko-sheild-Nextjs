"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AssuranceLedService() {
  return (
    <div className="relative w-full min-h-screen bg-[#F6F4EE] flex items-center justify-center px-6 md:px-16 lg:px-24 py-16">
      {/* Background blur/shadow element positioned outside on the right */}
      <div className="absolute -right-32 md:-right-20 lg:-right-10 top-1/2 -translate-y-1/2 pointer-events-none z-0">
        <Image
          src="/images/blur.png"
          alt=""
          width={900}
          height={900}
          className="w-[500px] md:w-[700px] lg:w-[950px] opacity-70 object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start justify-center"
        >
          {/* Breadcrumb / Top Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#C8382C] uppercase font-semibold">
              — ASSURANCE-LED SERVICE
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-[44px] lg:text-[44px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-6">
            Make assurance work
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            An assurance-led starting path that connects governed evidence,
            control context, review and accountable follow-through — without
            implying certification or guaranteed compliance.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors"
            >
              Book a Demo
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-[#111A1E30] text-[#111A1E] text-sm font-medium tracking-wide hover:bg-[#111A1E08] transition-colors"
            >
              Compare starting paths
            </a>
          </div>

          {/* Micro Footer Note */}
          <p className="text-[11px] text-[#7C8890] font-mono leading-relaxed max-w-md">
            Framework, standard and regulatory references describe supported
            program alignment and do not imply certification, regulatory
            approval, guaranteed compliance or guaranteed security outcomes.
          </p>
        </motion.div>

        {/* Right Column: Card with Inner Image and Custom UI Metadata */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[520px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Inner Graphic / Image Frame with Overlay Metadata Card */}
            <div className="relative w-full aspect-[3/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/assurance/1.png"
                alt="Assurance-led Service Visualization"
                fill
                className="object-cover opacity-90"
              />

              {/* Floating Metadata Card Inside Bottom of Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A1A22EE] backdrop-blur-md border border-[#ffffff20] rounded-2xl p-4 font-mono">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-[0.15em] text-[#7C8890] uppercase">
                    EVIDENCE RECORD / VERIFIED
                  </span>
                </div>
                <div className="text-[#FFFFFF] text-sm font-semibold mb-2">
                  Access review &middot; Q3
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#7C8890] tracking-wider uppercase">
                  <span>Source linked</span>
                  <span>Owner assigned</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
