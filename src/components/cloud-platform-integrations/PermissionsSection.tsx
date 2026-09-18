"use client";

import React from "react";
import { motion } from "framer-motion";

const states = [
  {
    title: "Permission Too Broad",
    dot: "#c44242",
    desc: "Connector has access to unapproved regions or services. Automatically flagged for adjustment.",
  },
  {
    title: "Permission Missing",
    dot: "#c44242",
    desc: "API collection failing due to incomplete policy assignment. Control status transitions to Degraded.",
  },
  {
    title: "Scope Mismatch",
    dot: "#c44242",
    desc: "Connected organizational scope lacks child subscriptions. Automatic alerting generated.",
  },
  {
    title: "Read-Only Certified",
    dot: "#1f7a6c",
    desc: "Zoiko Shield is certified for zero-write operations except during authorized remediation phases.",
  },
];

export default function PermissionsSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-10 mx-auto max-w-[1440px] px-[22px] lg:px-[108px] py-[22px] lg:py-[80px]">
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
              SHARED RESPONSIBILITY
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] sm:text-[34px] lg:text-[38px] text-[#0a2029] tracking-[-0.76px] m-0">
            Credential & Boundary Analysis
          </h2>
          <p className="font-manrope font-medium leading-[21px] lg:leading-[25px] text-[14px] lg:text-[16.5px] text-[#5b6670] m-0 max-w-[720px]">
            Understand the strict division of responsibility and target
            connectors&apos; risk states.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {states.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-5 rounded-[12px]"
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0">
                  {s.title}
                </p>
                <div
                  className="rounded-full size-[8px] shrink-0"
                  style={{ backgroundColor: s.dot }}
                />
              </div>
              <p className="font-manrope font-normal leading-[19px] text-[#5b6670] text-[13px] m-0">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
