"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IncidentResponseRetainer() {
  return (
    <section className="bg-[#F7F5F0] text-[#111827] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-screen">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span
              className="w-5 h-[2px] bg-[#E05236]"
              aria-hidden="true"
            ></span>
            <span className="text-[#E05236] font-semibold text-xs tracking-[0.2em] uppercase">
              INCIDENT RESPONSE RETAINER
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#111827] leading-[1.1] mb-6">
            Prepare the authority, evidence and response path{" "}
            <span className="text-[#E05236]">before an incident starts.</span>
          </h1>

          {/* Description */}
          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            Establish readiness, contacts, access prerequisites, decision rights
            and a controlled activation path for incident response — within a
            defined annual service scope and with clear exclusions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="bg-[#E05236] hover:bg-[#c9452b] text-white font-medium text-sm px-6 py-3.5 rounded-lg transition-colors shadow-sm"
            >
              Book a Demo
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-black/5 text-[#111827] font-medium text-sm px-6 py-3.5 rounded-lg border border-[#D1D5DB] transition-colors"
            >
              Review Incident Readiness
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-black/5 text-[#111827] font-medium text-sm px-6 py-3.5 rounded-lg border border-[#D1D5DB] transition-colors"
            >
              Visit Trust Center
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Illustration Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[540px] aspect-square rounded-2xl overflow-hidden">
            <img
              src="/images/ir/1.png"
              alt="Incident Response 3D Dashboard and Security Network Graphic"
              className="w-full h-full object-cover mix-blend-normal opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
