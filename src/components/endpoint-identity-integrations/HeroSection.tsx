"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { IMG } from "./shared";

export default function HeroSection() {
  return (
    <section className="bg-[#f7f5f0] w-full relative overflow-hidden">
      {/* Glow effects */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-160px] top-[-120px] size-[560px] rounded-full bg-[radial-gradient(circle,rgba(196,66,66,0.3),transparent_70%)]" />
        <div className="absolute left-[34%] top-[120px] size-[460px] rounded-full bg-[radial-gradient(circle,rgba(31,122,108,0.18),transparent_70%)]" />
        <div className="absolute right-[-200px] bottom-[-220px] size-[600px] rounded-full bg-[radial-gradient(circle,rgba(10,32,41,0.28),transparent_70%)]" />
      </div>

      <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-10 items-center mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-10 xl:px-[108px] pt-12 pb-14 lg:pt-14 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 items-start flex-1 min-w-0 w-full lg:max-w-[640px]"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#c44242] shrink-0" />
            <span className="font-jetbrains font-bold text-[13px] sm:text-[14px] text-[#c44242] uppercase tracking-[2.5px]">
              Endpoint &amp; Identity
            </span>
          </div>

          <h1 className="font-hanken font-extrabold leading-[1.05] text-[38px] sm:text-[48px] lg:text-[52px] xl:text-[60px] text-[#0a2029] tracking-[-1px] m-0">
            Connect the user, the device, and the risk.
          </h1>

          <p className="font-manrope font-medium leading-[28px] text-[16px] lg:text-[18px] text-[#5b6670] m-0">
            Bring validated endpoint, device-management, identity,
            authentication, session, and privileged-access context into Zoiko
            Shield so teams can investigate faster, preserve evidence, and
            govern response without losing source authority.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="/integration-catalog"
              className="inline-flex items-center justify-center px-7 py-4 rounded-[10px] bg-[#c44242] hover:bg-[#b23636] transition-colors"
            >
              <span className="font-manrope font-bold text-[15px] lg:text-[16px] text-white">
                Explore endpoint &amp; identity coverage
              </span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-4 rounded-[10px] border border-[#0f2a4a] hover:bg-[#0f2a4a0d] transition-colors"
            >
              <span className="font-manrope font-bold text-[15px] lg:text-[16px] text-[#0f2a4a]">
                Talk to a Security Architect
              </span>
            </a>
          </div>

          <div className="flex items-start gap-3 pt-4">
            <CircleCheck className="size-4 text-[#1f7a6c] shrink-0 mt-px" />
            <p className="font-jetbrains font-medium text-[12px] text-[#5b6670] m-0">
              Source-aware. Permission-scoped. Evidence-backed. Human-governed.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-[565px] lg:w-[46%] xl:w-[565px] shrink-0"
        >
          <div className="bg-[#0f2a4a] border border-white/20 rounded-[16px] p-3 sm:p-5">
            <div className="relative w-full aspect-[525/360] rounded-[12px] overflow-hidden">
              <Image
                src={`${IMG}/hero-visual.webp`}
                alt="Security analyst reviewing endpoint and identity telemetry"
                fill
                sizes="(max-width: 1024px) 100vw, 525px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
