"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./shared";

export default function CtaSection() {
  return (
    <section className="bg-[#0f2a4a] relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image src={`${IMG}/cta-bg.webp`} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(15,42,74,0.6)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col gap-6 items-center mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-[108px] py-16 lg:py-[96px] text-center"
      >
        <p className="font-jetbrains font-bold text-[13px] text-white tracking-[2px] uppercase m-0">
          Ready for Defensible Security
        </p>
        <h2 className="font-hanken font-extrabold leading-[1.3] text-[28px] sm:text-[34px] lg:text-[38px] text-white m-0 max-w-[720px]">
          Connect identity and endpoint context without losing control.
        </h2>
        <p className="font-manrope font-medium text-[15px] lg:text-[16px] leading-[24px] text-[#dce5ee] m-0 max-w-[720px]">
          See how Zoiko Shield can connect validated endpoint, identity,
          device-management, authentication, and privileged-access sources to
          strengthen investigations, expose coverage gaps, and preserve
          defensible evidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2 w-full sm:w-auto">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-[14px] rounded-[8px] bg-[#c44242] hover:bg-[#b23636] transition-colors w-full sm:w-auto"
          >
            <span className="font-manrope font-bold text-[15px] text-white whitespace-nowrap">Request a Demo</span>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-[14px] rounded-[8px] border border-white/60 hover:bg-white/5 transition-colors w-full sm:w-auto"
          >
            <span className="font-manrope font-bold text-[15px] text-white whitespace-nowrap">
              Talk to a Security Architect
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
