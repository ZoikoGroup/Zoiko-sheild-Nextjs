"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "AWS Production Ingest",
    dot: "#1f7a6c",
    desc: "All 32 target accounts emitting telemetry.",
  },
  {
    title: "Azure Subscription Ingest",
    dot: "#e0967d",
    desc: "Subscription '0x12-Dev' has inactive token state.",
  },
  {
    title: "GCP Project Ingest",
    dot: "#c44242",
    desc: "Renew Service Account key in project 'zoiko-db'.",
  },
  {
    title: "K8s Cluster Node Ingest",
    dot: "#e0967d",
    desc: "Rate-limiting detected on cluster 'prod-eu-1'.",
  },
];

export default function CoverageHealthSection() {
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
              REMEDIATION CENTRIC
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] sm:text-[34px] lg:text-[38px] text-[#0a2029] tracking-[-0.76px] m-0">
            Coverage Health & Ingestion Gaps
          </h2>
          <p className="font-manrope font-medium leading-[21px] lg:leading-[25px] text-[14px] lg:text-[16.5px] text-[#5b6670] m-0 max-w-[720px]">
            Remediate existing coverage drops and auth states prior to
            compliance reports.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-5 rounded-[12px]"
            >
              <div className="flex items-center justify-between w-full gap-2">
                <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">
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
