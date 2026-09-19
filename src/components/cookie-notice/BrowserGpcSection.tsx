"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BrowserGpcSection() {
  return (
    <section className="bg-[#f0ede6] w-full">
      <div className="flex flex-col gap-6 lg:gap-8 mx-auto max-w-[1440px] px-4 py-6 lg:px-[108px] lg:py-[60px]">
        <h2 className="font-hanken lg:font-sans font-extrabold text-[20px] lg:text-[28px] text-[#0a2029] m-0">
          <span className="lg:hidden">Browser &amp; GPC Signals</span>
          <span className="hidden lg:inline">Browser &amp; Signal Governance</span>
        </h2>
        <p className="hidden lg:block font-sans font-normal text-[14px] text-[#5b6670] -mt-4">
          Automatic detection and synchronization with global user
          preference signals.
        </p>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-1 flex-col gap-3 lg:gap-4 items-start p-4 lg:p-[24px] rounded-[12px] w-full"
          >
            <p className="font-hanken lg:font-sans font-extrabold text-[#0a2029] text-[16px] lg:text-[18px] m-0">
              Global Privacy Control (GPC)
            </p>
            <p className="font-manrope lg:font-sans font-normal text-[#5b6670] text-[13px] lg:text-[13.5px] leading-[20px] m-0">
              <span className="lg:hidden">
                We auto-detect the GPC header broadcasted by compatible
                browsers. When active, our gateway automatically registers
                an opt-out policy.
              </span>
              <span className="hidden lg:inline">
                We listen for the GPC header broadcasted by compatible
                browsers. When active, our gateway automatically registers
                an absolute opt-out signal. No manual opt-out configuration
                is required on your part.
              </span>
            </p>
            <div className="flex gap-2 items-center">
              <div className="bg-[#1f7a6c] rounded-full size-[6px] lg:size-[8px] shrink-0" />
              <p className="font-manrope lg:font-sans font-bold text-[#1f7a6c] text-[12px] m-0">
                GPC Signals Monitored Automatically
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="hidden lg:flex bg-white border border-[rgba(18,59,76,0.1)] flex-1 flex-col gap-4 items-start p-[24px] rounded-[12px]"
          >
            <p className="font-sans font-extrabold text-[#0a2029] text-[18px] m-0">
              Manual Browser Blocking
            </p>
            <p className="font-sans font-normal text-[#5b6670] text-[13.5px] leading-[20px] m-0">
              You can also block local storage and tracking scripts via
              native browser settings. If you block all storage, the
              essential workspace parameters will continue to safely
              fallback to temporary in-memory contexts.
            </p>
            <div className="flex gap-2 items-center">
              <div className="bg-[#4e668a] rounded-full size-[8px] shrink-0" />
              <p className="font-sans font-bold text-[#4e668a] text-[12px] m-0">
                Temporary In-Memory Fallback Available
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
