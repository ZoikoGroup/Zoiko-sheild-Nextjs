"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContinuousAssuranceHero() {
  return (
    <section className="bg-[#F5F2EB] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start lg:col-span-6"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-0.5 w-5 shrink-0 bg-[#C53B3B]" aria-hidden="true" />
            <span className="font-jetbrains text-[11px] font-bold uppercase tracking-wider text-[#C53B3B] sm:text-xs">
              Assurance-led service
            </span>
          </div>

          <h1 className="mb-5 font-hanken text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#0B2530] sm:text-5xl lg:text-6xl">
            Make assurance work
          </h1>

          <p className="mb-7 max-w-xl font-manrope text-sm leading-relaxed text-[#6B7280] sm:text-base">
            An assurance-led starting path that connects governed evidence,
            control context, review and accountable follow-through — without
            implying certification or guaranteed compliance.
          </p>

          <div className="mb-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
            <Link
              href="/contact"
              className="rounded-[10px] bg-[#C53B3B] px-6 py-3.5 text-center font-manrope text-sm font-bold text-white transition-colors hover:bg-[#a93030]"
            >
              Book a Demo
            </Link>
            <Link
              href="/compare-starting-paths"
              className="rounded-[10px] border border-[#0B2530] px-6 py-3.5 text-center font-manrope text-sm font-bold text-[#0B2530] transition-colors hover:bg-black/5"
            >
              Compare starting paths
            </Link>
          </div>

          <p className="max-w-xl font-manrope text-xs leading-5 text-[#6B7280]">
            Framework, standard and regulatory references describe supported
            program alignment and do not imply certification, regulatory
            approval, guaranteed compliance or guaranteed security outcomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative lg:col-span-6"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_0_rgba(11,37,48,0.16)]">
            <img
              src="/images/continuous-assurance/hero-visual.webp"
              alt="An assurance reviewer working with a holographic evidence graph in a control room"
              width={698}
              height={670}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full max-w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#0B2530]/90 p-4 backdrop-blur-sm sm:right-auto sm:w-72">
              <p className="mb-1.5 font-jetbrains text-[10px] uppercase tracking-wide text-[#F0A3A3]">
                Evidence record / verified
              </p>
              <p className="mb-1 font-hanken text-base font-extrabold text-white">
                Access review · Q3
              </p>
              <p className="font-manrope text-xs text-white/60">
                Source linked &nbsp;•&nbsp; Owner assigned
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
