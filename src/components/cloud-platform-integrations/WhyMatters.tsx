"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    number: "1",
    title: "Keep native context",
    desc: "Preserve original provider IDs, structures, region tags, and namespaces. Never flatten or sanitize out critical context before hashing.",
  },
  {
    number: "2",
    title: "Make coverage visible",
    desc: "Instantly locate blind spots. Know exactly which subscription, region, or cluster lacks active telemetry collection.",
  },
  {
    number: "3",
    title: "Freshness as control state",
    desc: "If a connector hasn't validated state in 10 minutes, the control is automatically flagged as Stale — not just silent.",
  },
  {
    number: "4",
    title: "Support multi-cloud governance",
    desc: "Map AWS, Azure, and Google Cloud controls to singular compliance metrics without losing raw evidence lineage.",
  },
  {
    number: "5",
    title: "Govern response",
    desc: "Validate that incident mitigations are authorized by named human operators before executing in target regions.",
  },
];

export default function WhyMatters() {
  return (
    <section className="bg-[#f0ede6] w-full">
      <div className="flex flex-col gap-12 mx-auto max-w-[1440px] px-[22px] lg:px-[108px] py-14 lg:py-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 items-start w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-[#c44242] size-[8px] shrink-0" />
            <p className="font-jetbrains font-bold text-[13px] text-[#c44242] tracking-[1.68px] uppercase m-0">
              THE CORE PROBLEM
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] sm:text-[34px] lg:text-[38px] text-[#0a2029] tracking-[-0.76px] m-0">
            Why general posture platforms fail compliance.
          </h2>
          <p className="font-manrope font-medium leading-[21px] lg:leading-[25px] text-[14px] lg:text-[16.5px] text-[#5b6670] m-0 max-w-[720px]">
            Typical tools flatten native cloud states, breaking evidence
            chains. Zoiko Shield preserves the exact structure auditors
            require.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-4 items-start p-5 lg:p-6 rounded-[16px]"
            >
              <div className="bg-[#e4f0ec] flex items-center justify-center rounded-[10px] size-[32px] lg:size-[42px]">
                <p className="font-hanken font-extrabold text-[#1f7a6c] text-[18px] m-0">
                  {b.number}
                </p>
              </div>
              <p className="font-hanken font-extrabold text-[#0a2029] text-[18px] m-0">
                {b.title}
              </p>
              <p className="font-manrope font-normal leading-[21px] text-[#5b6670] text-[14px] m-0">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
