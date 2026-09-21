"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="bg-[#0a2029] relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/microsoft-ecosystem/cta-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,66,66,0.18),transparent_60%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col gap-6 items-center mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-[108px] py-16 lg:py-[80px] text-center"
      >
        <p className="font-jetbrains font-bold text-[11px] text-white/80 tracking-[1.2px] uppercase m-0">
          Get Started Today
        </p>
        <h2 className="font-hanken font-extrabold leading-[1.2] text-[28px] sm:text-[34px] lg:text-[38px] text-white m-0 max-w-[880px]">
          Turn Microsoft security context into a governed operating advantage.
        </h2>
        <p className="font-manrope text-[15px] lg:text-[16px] leading-[26px] text-white/70 m-0 max-w-[680px]">
          See how Zoiko Shield can fit around your Microsoft security estate,
          preserve source authority, surface evidence gaps, and help teams
          coordinate defensible security and assurance workflows.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-1 w-full sm:w-auto">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-[14px] rounded-[10px] bg-[#c44242] shadow-[0px_6px_20px_rgba(196,66,66,0.3)] hover:bg-[#b23636] transition-colors w-full sm:w-auto"
          >
            <span className="font-manrope font-bold text-[15px] text-white whitespace-nowrap">
              Book a Technical Demo
            </span>
          </a>
          <a
            href="/integration-catalog"
            className="inline-flex items-center justify-center px-7 py-[14px] rounded-[10px] border border-white/40 hover:bg-white/5 transition-colors w-full sm:w-auto"
          >
            <span className="font-manrope font-bold text-[15px] text-white whitespace-nowrap">
              Explore the Integration Catalog
            </span>
          </a>
        </div>
        <p className="font-jetbrains text-[10.5px] text-white/60 m-0 pt-2 max-w-[900px]">
          Architecture and availability are validated against your Microsoft
          tenant, licensing, and security requirements before implementation.
        </p>
      </motion.div>
    </section>
  );
}
