"use client";

import React from "react";
import { motion } from "framer-motion";

const stages = [
  {
    n: "01",
    title: "Ticket Received",
    desc: "System logs issue details and issues a public reference tracking ID.",
  },
  {
    n: "02",
    title: "Triage & Alternative",
    desc: "If a blocker exists, our support team contacts the user with an alternative format.",
  },
  {
    n: "03",
    title: "Remediation Track",
    desc: "Engineering schedules code fixes in the upcoming sprints.",
  },
  {
    n: "04",
    title: "Validation & Close",
    desc: "Certified testers re-verify the resolved ticket against WCAG guidelines.",
  },
];

export default function FeedbackLifecycleSection() {
  return (
    <section className="bg-[#f7f5f0] border-y border-[rgba(18,59,76,0.1)] w-full">
      <div className="flex flex-col gap-6 lg:gap-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
          <div className="flex gap-2 lg:gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
            <p className="font-jetbrains font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              OPERATIONAL WORKFLOW
            </p>
          </div>
          <h2 className="font-hanken font-extrabold text-[28px] lg:text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
            Feedback Intake &amp; Case Lifecycle
          </h2>
          <p className="font-manrope font-medium leading-[20px] lg:leading-[23px] text-[13px] lg:text-[15px] text-[#5b6670] m-0 w-full">
            Every reported barrier flows through our structured engineering
            pipeline. We track tickets from receipt to verified closure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-5 w-full">
          {stages.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-5 rounded-[12px]"
            >
              <p className="font-jetbrains font-extrabold text-[#c44242] text-[14px] m-0">{s.n}</p>
              <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0">{s.title}</p>
              <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
