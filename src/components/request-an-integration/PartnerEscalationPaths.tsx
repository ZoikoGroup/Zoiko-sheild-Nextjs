"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PartnerEscalationPaths() {
  return (
    <section className="w-full bg-[#F5F2EB] py-4 sm:py-6 px-5 sm:px-6 md:px-12 lg:px-16 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-[#0B1E2E] rounded-3xl p-6 sm:p-10 lg:p-12 text-white border border-[#172A3A] shadow-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Tag / Kicker */}
          <span className="font-mono text-[10.5px] sm:text-xs font-bold tracking-[0.2em] text-[#E0402F] uppercase mb-2 sm:mb-3 block">
            SECURE ASSISTANCE
          </span>

          {/* Heading */}
          <h2 className="text-xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight mb-2.5 sm:mb-3">
            Partner &amp; Enterprise Escalation Paths
          </h2>

          {/* Description */}
          <p className="text-[13.5px] sm:text-[15px] text-gray-300 max-w-3xl leading-relaxed mb-6 sm:mb-8">
            Have a complex proprietary legacy system, custom write-back needs, or immediate procurement deadlines? Connect directly with a security architect.
          </p>

          {/* Action (Full-width button and centered label on mobile, horizontal row on desktop) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#BE3A34] hover:bg-[#A82E29] text-white text-[13.5px] font-semibold px-6 py-3.5 sm:py-3 rounded-lg shadow-sm transition-colors duration-150 flex items-center justify-center text-center"
            >
              Schedule Technical Briefing
            </Link>
            <span className="font-mono text-xs text-gray-300 text-center sm:text-left">
              Call duration: 15 minutes max
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
