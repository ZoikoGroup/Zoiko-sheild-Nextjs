"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PenetrationTestingHero() {
  return (
    <section className="bg-[#F5F2EB] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start lg:col-span-6"
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-5 shrink-0 bg-[#E0402F]" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E0402F] sm:text-xs">
              Penetration testing
            </span>
          </div>

          <h1 className="mb-5 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B1B26] sm:mb-6 sm:text-4xl md:text-5xl lg:text-[52px]">
            Test what matters —{" "}
            <span className="text-[#E0402F]">
              within a scope everyone can inspect.
            </span>
          </h1>

          <p className="mb-7 max-w-xl text-sm leading-relaxed text-[#4B5563] sm:mb-8 sm:text-base lg:text-lg">
            Assess approved systems through a defined testing engagement with
            explicit authorization, safety boundaries, evidence-led findings and
            scoped retest.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#"
              className="rounded-lg bg-[#E0402F] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#c43722]"
            >
              Book a Demo
            </a>
            <a
              href="#"
              className="rounded-lg border border-[#D9D4CA] px-6 py-3.5 text-center text-sm font-semibold text-[#0B1B26] transition-colors hover:bg-black/5"
            >
              Review Testing Scope
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:col-span-6 lg:justify-end"
        >
          <div className="relative w-full max-w-[560px] overflow-hidden rounded-2xl">
            <img
              src="/images/penetration-testing/aside.rcard.webp"
              alt="Illustration of a scoped penetration testing engagement: an authorization checklist, assessment metrics and a verified result seal"
              width={468}
              height={602}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full max-w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
