"use client";

import React from "react";
import { motion } from "framer-motion";

function Toggle({ on }: { on: boolean }) {
  return (
    <div
      className={`h-5 w-10 rounded-full flex items-center px-[2px] shrink-0 ${on ? "bg-[#1f7a6c] justify-end" : "bg-[rgba(18,59,76,0.15)] justify-start"
        }`}
    >
      <div className="size-[16px] rounded-full bg-white" />
    </div>
  );
}

export default function PreferenceCenterSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-6 lg:gap-8 mx-auto max-w-[1440px] px-4 py-6 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-2 lg:gap-3 items-start">
          <h2 className="font-hanken lg:font-sans font-extrabold text-[20px] lg:text-[28px] text-[#0a2029] m-0">
            Preference Center
            <span className="hidden lg:inline"> &amp; Granular Controls</span>
          </h2>
          <p className="font-manrope lg:font-sans font-normal text-[13px] lg:text-[14px] text-[#5b6670] m-0">
            <span className="lg:hidden">
              Configure precise functional states with active status
              indicators.
            </span>
            <span className="hidden lg:inline">
              Configure precise functional states without coercive
              pre-selection.
            </span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-5 lg:gap-6 items-center max-w-[1000px] p-5 lg:p-[32px] rounded-[16px] w-full"
        >
          {/* Header row - desktop only */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex flex-col gap-1 items-start">
              <p className="font-sans font-extrabold text-[#0a2029] text-[18px] m-0">
                Consent Preference Dashboard
              </p>
              <p className="font-sans font-normal text-[#5b6670] text-[13px] m-0">
                Current policy version: v2.4 (No account required)
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <button className="border border-[#0a2029] flex items-start px-4 py-2 rounded-[6px]">
                <span className="font-sans font-bold text-[#0a2029] text-[12px]">Reject All Optional</span>
              </button>
              <button className="bg-[#c44242] flex items-start px-4 py-2 rounded-[6px]">
                <span className="font-sans font-bold text-white text-[12px]">Accept All Optional</span>
              </button>
            </div>
          </div>
          <div className="hidden lg:block bg-[rgba(18,59,76,0.1)] h-px w-full" />

          <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
            <div className="bg-[#f0ede6] flex items-center justify-between p-3 lg:p-[16px] rounded-[8px] w-full">
              <div className="flex flex-col gap-1 items-start max-w-[600px]">
                <p className="font-hanken lg:font-sans font-extrabold text-[#0a2029] text-[15px] m-0">
                  <span className="lg:hidden">Essential Security</span>
                  <span className="hidden lg:inline">Essential / Security Technologies</span>
                </p>
                <p className="font-manrope lg:font-sans font-normal text-[#5b6670] text-[13px] m-0">
                  <span className="lg:hidden">
                    Required for workspace routing and exploit protection.
                  </span>
                  <span className="hidden lg:inline">
                    Required for secure sessions, cross-site request
                    protection, and system load-balancing.
                  </span>
                </p>
              </div>
              <div className="bg-[#e4f0ec] flex items-start px-3 py-1 rounded-full shrink-0">
                <p className="font-manrope lg:font-sans font-bold text-[#1f7a6c] text-[11px] whitespace-nowrap m-0">
                  Always Active
                </p>
              </div>
            </div>

            <div className="border border-[rgba(18,59,76,0.1)] flex items-center justify-between p-3 lg:p-[16px] rounded-[8px] w-full">
              <div className="flex flex-col gap-1 items-start max-w-[600px]">
                <p className="font-hanken lg:font-sans font-extrabold text-[#0a2029] text-[15px] m-0">
                  <span className="lg:hidden">Analytics &amp; Metrics</span>
                  <span className="hidden lg:inline">Analytics &amp; Performance Metrics</span>
                </p>
                <p className="font-manrope lg:font-sans font-normal text-[#5b6670] text-[13px] m-0">
                  <span className="lg:hidden">
                    Aggregated resource loads and latency metrics.
                  </span>
                  <span className="hidden lg:inline">
                    Aggregated latency metrics and resource loads. All
                    telemetry is localized and anonymized.
                  </span>
                </p>
              </div>
              <div className="hidden lg:flex gap-2 items-center shrink-0">
                <p className="font-sans font-bold text-[#5b6670] text-[12px] m-0 whitespace-nowrap">Disabled</p>
                <Toggle on={false} />
              </div>
              <div className="lg:hidden shrink-0">
                <Toggle on={false} />
              </div>
            </div>

            <div className="border border-[rgba(18,59,76,0.1)] flex items-center justify-between p-3 lg:p-[16px] rounded-[8px] w-full">
              <div className="flex flex-col gap-1 items-start max-w-[600px]">
                <p className="font-hanken lg:font-sans font-extrabold text-[#0a2029] text-[15px] m-0">
                  <span className="lg:hidden">Functional Support</span>
                  <span className="hidden lg:inline">Support &amp; Interactive Live Chat</span>
                </p>
                <p className="font-manrope lg:font-sans font-normal text-[#5b6670] text-[13px] m-0">
                  <span className="lg:hidden">
                    Powers live technical support and playground environments.
                  </span>
                  <span className="hidden lg:inline">
                    Allows secure routing to live support engineers. If
                    disabled, chat functionality is hidden.
                  </span>
                </p>
              </div>
              <div className="hidden lg:flex gap-2 items-center shrink-0">
                <p className="font-sans font-bold text-[#1f7a6c] text-[12px] m-0 whitespace-nowrap">Enabled</p>
                <Toggle on={true} />
              </div>
              <div className="lg:hidden shrink-0">
                <Toggle on={true} />
              </div>
            </div>
          </div>

          {/* Footer row - desktop only */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <p className="font-sans font-normal text-[#5b6670] text-[12px] m-0">
              Withdrawal or reset can be triggered at any time using the
              persistent footer control.
            </p>
            <div className="flex gap-3 items-start">
              <button className="border border-[#0a2029] flex items-start px-6 py-3 rounded-[6px]">
                <span className="font-sans font-bold text-[#0a2029] text-[13px]">Close without saving</span>
              </button>
              <button className="bg-[#0a2029] flex items-start px-6 py-3 rounded-[6px]">
                <span className="font-sans font-bold text-white text-[13px]">Save current choices</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
