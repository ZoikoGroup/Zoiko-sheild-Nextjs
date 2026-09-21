"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { IMG } from "./shared";

export default function HeroSection() {
  return (
    <section className="bg-[#f7f5f0] w-full relative overflow-hidden">
      {/* Glow effects */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-160px] top-[-120px] size-[560px] rounded-full bg-[radial-gradient(circle,rgba(196,66,66,0.28),transparent_70%)]" />
        <div className="absolute left-[36%] top-[120px] size-[440px] rounded-full bg-[radial-gradient(circle,rgba(31,122,108,0.16),transparent_70%)]" />
        <div className="absolute right-[-200px] bottom-[-220px] size-[600px] rounded-full bg-[radial-gradient(circle,rgba(10,32,41,0.26),transparent_70%)]" />
      </div>

      <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-10 items-center mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-10 xl:px-[108px] py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 items-start flex-1 min-w-0 w-full lg:max-w-[640px]"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#c44242] shrink-0" />
            <span className="font-jetbrains font-bold text-[14px] text-[#c44242] uppercase tracking-[2.5px]">
              Security Practices
            </span>
          </div>

          <h1 className="font-hanken font-extrabold leading-[1.15] text-[36px] sm:text-[44px] xl:text-[48px] text-[#0a2029] tracking-[-0.8px] m-0">
            Security designed for accountable operations.
          </h1>

          <p className="font-manrope font-medium leading-[26px] text-[16px] text-[#5b6670] m-0">
            Zoiko Shield implements zero-trust boundaries, continuous telemetry
            collection, and human-in-the-loop governance. Our posture is backed
            by direct-from-source cryptographic evidence — proving control
            states without security theater.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="/trust-center#request-review"
              className="inline-flex items-center justify-center px-6 py-4 rounded-[10px] bg-[#c44242] hover:bg-[#b23636] transition-colors"
            >
              <span className="font-manrope font-bold text-[14px] text-white">Request Security Review</span>
            </a>
            <a
              href="/trust-center#evidence-library"
              className="inline-flex items-center justify-center px-6 py-4 rounded-[10px] border border-[#0f2a4a] hover:bg-[#0f2a4a0d] transition-colors"
            >
              <span className="font-manrope font-bold text-[14px] text-[#0f2a4a]">Download Security Overview</span>
            </a>
          </div>

          <div className="flex items-center gap-3 pt-3">
            <Check className="size-4 text-[#1f7a6c] shrink-0" strokeWidth={2.5} />
            <p className="font-jetbrains font-medium text-[12px] text-[#5b6670] m-0">
              Governed. Monitored. Evidence-backed. Human-directed.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-[565px] lg:w-[46%] shrink-0"
        >
          <div className="relative w-full aspect-[565/393] rounded-[16px] overflow-hidden border border-white">
            <Image
              src={`${IMG}/hero-visual.webp`}
              alt="Security team reviewing a control framework dashboard"
              fill
              sizes="(max-width: 1024px) 100vw, 565px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
