"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ConversionSection() {
  return (
    <section className="bg-[#0a2029] relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/cloud-platform-integrations/cta-bg.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,32,41,0.8)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col gap-6 items-center mx-auto max-w-[1440px] px-[22px] lg:px-[108px] py-12 lg:py-[64px] text-center"
      >
        <div className="flex gap-2 items-center">
          <div className="bg-[#c44242] size-[8px] shrink-0" />
          <p className="font-jetbrains font-bold text-[13px] text-[#c44242] tracking-[1.68px] uppercase m-0">
            GET STARTED
          </p>
        </div>
        <h2 className="font-hanken font-extrabold text-[32px] sm:text-[36px] lg:text-[40px] text-white m-0">
          Ready for defensible security?
        </h2>
        <p className="font-manrope font-medium text-[16.5px] text-[rgba(255,255,255,0.68)] m-0 max-w-[680px]">
          Join industry leaders who trust Zoiko Shield to protect their
          critical infrastructure, map native telemetry, and automate
          compliance evidence collection across every cloud.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-3 w-full sm:w-auto">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-[14px] rounded-[10px] bg-[#c44242] shadow-[0px_4px_6px_rgba(196,66,66,0.2)] hover:bg-[#b23636] transition-colors w-full sm:w-auto"
          >
            <span className="font-manrope font-bold text-[15px] text-white whitespace-nowrap">
              Book a Technical Demo
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-[14px] rounded-[10px] border-[1.5px] border-[rgba(255,255,255,0.35)] hover:bg-white/5 transition-colors w-full sm:w-auto"
          >
            <span className="font-manrope font-bold text-[15px] text-white whitespace-nowrap">
              Explore the Platform
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
