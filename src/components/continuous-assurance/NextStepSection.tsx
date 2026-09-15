"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionEyebrow from "./SectionEyebrow";

export default function NextStepSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B2530] px-5 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-24 lg:py-24">
      <img
        src="/images/continuous-assurance/cta-bg.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[#0B2530]/45"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(11,37,48,0.72)_0%,rgba(11,37,48,0.25)_55%,transparent_80%)]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
      >
        <div className="flex justify-center">
          <SectionEyebrow label="Next step" tone="light" />
        </div>

        <h2 className="mb-4 font-hanken text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-5xl">
          Make your assurance work inspectable.
        </h2>

        <p className="mb-8 max-w-xl font-manrope text-sm leading-relaxed text-white/70 sm:text-base">
          Start with a bounded conversation about scope, evidence, review
          authority and the outcomes your team needs.
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="/contact"
            className="rounded-[10px] bg-[#C53B3B] px-6 py-3.5 text-center font-manrope text-sm font-bold text-white transition-colors hover:bg-[#a93030]"
          >
            Book a Demo
          </Link>
          <Link
            href="/compare-starting-paths"
            className="rounded-[10px] border border-white/30 px-6 py-3.5 text-center font-manrope text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Compare starting paths
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
