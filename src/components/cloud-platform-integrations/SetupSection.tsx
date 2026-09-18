"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Review Scope & Prerequisites",
    desc: "Determine targeted administrative boundaries and lease-privilege criteria.",
  },
  {
    title: "Approve Service Authentication",
    desc: "Provision service accounts or IAM roles according to structured instructions.",
  },
  {
    title: "Validate Control Mapping Preview",
    desc: "Verify live resource-discovery results and select destination compliance frameworks.",
  },
  {
    title: "Enable Real-Time Telemetry Stream",
    desc: "Activate automated parsing, hashing, and audit mapping pipeline.",
  },
];

const summary = [
  { label: "Target Scope", value: "Root Management Group (Prod)" },
  { label: "Permissions Assigned", value: "SecurityAudit / Custom metadata reader" },
  { label: "Selected Target Regions", value: "us-east-1, us-west-2, eu-west-1" },
  { label: "Compliance Frame", value: "SOC 2 (CC7.1 - CC7.4)" },
  { label: "Status Path", value: "First Synchronizing..." },
];

export default function SetupSection() {
  return (
    <section className="bg-[#f0ede6] w-full">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[40px] items-center justify-center mx-auto max-w-[1440px] px-[22px] lg:px-[108px] py-[22px] lg:py-[80px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 items-start flex-1 min-w-0 w-full"
        >
          <div className="flex flex-col gap-4 items-start w-full">
            <div className="flex gap-2 items-center">
              <div className="bg-[#c44242] size-[8px] shrink-0" />
              <p className="font-jetbrains font-bold text-[13px] text-[#c44242] tracking-[1.68px] uppercase m-0">
                SETUP STEPS
              </p>
            </div>
            <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] sm:text-[34px] lg:text-[38px] text-[#0a2029] tracking-[-0.76px] m-0">
              Unified Connector Setup
            </h2>
            <p className="font-manrope font-medium leading-[21px] lg:leading-[25px] text-[14px] lg:text-[16.5px] text-[#5b6670] m-0 max-w-[560px]">
              Simple, standardized integration steps regardless of provider
              target.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start w-full">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-4 items-center w-full">
                <div className="bg-[#0a2029] flex items-center justify-center rounded-[14px] shrink-0 size-[28px]">
                  <p className="font-jetbrains font-bold text-[12px] text-white m-0">
                    {i + 1}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-[2px] items-start min-w-0">
                  <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">
                    {step.title}
                  </p>
                  <p className="font-manrope font-normal text-[#5b6670] text-[12.5px] m-0">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center min-w-0 w-full"
        >
          <div className="bg-[#f7f5f0] border border-[rgba(18,59,76,0.1)] flex flex-1 flex-col gap-4 items-start p-6 rounded-[16px] w-full">
            <p className="font-jetbrains font-bold text-[#c44242] text-[11px] whitespace-nowrap m-0">
              ACTIVE SETUP STATE SUMMARY
            </p>
            <div className="h-px w-full bg-[rgba(18,59,76,0.1)]" />
            <div className="flex flex-col gap-2 items-start text-[12.5px] w-full">
              {summary.map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between w-full gap-2"
                >
                  <p className="font-manrope font-normal text-[#5b6670] m-0 whitespace-nowrap">
                    {row.label}
                  </p>
                  <p className="font-manrope font-bold text-[#0a2029] m-0 text-right">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
