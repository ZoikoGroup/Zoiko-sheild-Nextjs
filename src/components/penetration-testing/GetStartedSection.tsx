"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GetStartedSection() {
  return (
    <section className="bg-[#0B1B26] px-5 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-24 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-5 shrink-0 bg-[#E0402F]" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#93A6B8] sm:text-xs">
            Get started
          </span>
        </div>

        <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          Start with the scope conversation.
        </h2>

        <p className="mb-8 max-w-xl text-sm leading-relaxed text-[#93A6B8] sm:text-base">
          We&apos;ll work out what you&apos;re trying to learn, what you&apos;re
          actually able to authorize, and which category fits — before anyone
          talks about a test window.
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <a
            href="#"
            className="rounded-lg bg-[#E0402F] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#c43722]"
          >
            Book a Demo
          </a>
          <a
            href="#"
            className="rounded-lg border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Visit Trust Center
          </a>
        </div>
      </motion.div>
    </section>
  );
}
