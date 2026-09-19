"use client";

import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "What is covered?",
    desc: "All local storage, HTTP cookies, tracking pixels, and session tokens active across the zoikoshield.com domain and operational architecture.",
  },
  {
    title: "How choices are applied",
    desc: "Your choices are verified cryptographically and synchronized globally across your browser session without requiring an account login.",
  },
  {
    title: "Third-Party governance",
    desc: "No third parties are allowed to deploy scripts that track you across other domains. Live chat is the only direct external dependency.",
  },
];

export default function QuickSummarySection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-6 lg:gap-8 mx-auto max-w-[1440px] px-4 py-6 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-1 lg:gap-3 items-start">
          <h2 className="font-hanken lg:font-sans font-extrabold text-[20px] lg:text-[24px] text-[#0a2029] m-0">
            Quick Summary
          </h2>
          <p className="font-manrope lg:font-sans font-normal text-[13px] lg:text-[14px] text-[#5b6670] m-0">
            The complete privacy framework at a glance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 w-full">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 lg:p-[20px] rounded-[8px]"
            >
              <p className="font-hanken lg:font-sans font-extrabold text-[#0a2029] text-[15px] lg:text-[16px] m-0 w-full">
                {c.title}
              </p>
              <p className="font-manrope lg:font-sans font-normal text-[#5b6670] text-[13px] lg:text-[13.5px] leading-[20px] m-0 w-full">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
