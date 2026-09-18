"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    name: "AWS",
    metric: "32 Accounts",
    desc: "Region scope restricted to us-east-1, us-west-2. Read-only role.",
  },
  {
    name: "Azure",
    metric: "14 Subscriptions",
    desc: "Management group scope. Evaluated Defender Recommendations.",
  },
  {
    name: "GCP",
    metric: "8 Projects",
    desc: "SCC asset catalog mapped. Access key rotation verified daily.",
  },
  {
    name: "K8s",
    metric: "11 Clusters",
    desc: "EKS & AKS nodes. Audit stream parsed continuously.",
  },
  {
    name: "Serverless",
    metric: "186 Functions",
    desc: "Lambda & Cloud Functions. Execution role limits audited.",
  },
  {
    name: "Hybrid",
    metric: "4 Locations",
    desc: "Outposts & Arc instances. Continuous heartbeats active.",
  },
];

export default function CoverageStrip() {
  return (
    <section className="bg-[#123b4c] relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/cloud-platform-integrations/coverage-bg.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(18,59,76,0.77)]" />
      </div>

      <div className="relative flex flex-col gap-5 mx-auto max-w-[1440px] px-[22px] lg:px-[108px] py-10 lg:py-[48px]">
        <p className="font-jetbrains font-bold text-[12px] text-[#e0967d] tracking-[1px] uppercase m-0">
          Active Multicloud Ingestion Status (100% Non-Overclaim Verified)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="bg-[#000001] border border-[rgba(255,255,255,0.1)] flex flex-col gap-2 items-start p-4 rounded-[12px]"
            >
              <div className="flex items-center justify-between w-full whitespace-nowrap">
                <p className="font-jetbrains font-bold text-[#e0967d] text-[11px] m-0">
                  {card.name}
                </p>
                <p className="font-jetbrains font-normal text-[#1f7a6c] text-[10px] m-0">
                  ● Verified
                </p>
              </div>
              <p className="font-hanken font-extrabold text-[16px] text-white whitespace-nowrap m-0">
                {card.metric}
              </p>
              <p className="font-manrope font-normal leading-[18px] text-[12px] text-[rgba(255,255,255,0.72)] m-0">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
