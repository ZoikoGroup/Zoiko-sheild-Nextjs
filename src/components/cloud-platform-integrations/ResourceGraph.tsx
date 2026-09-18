"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ResourceGraph() {
  return (
    <section className="bg-[#0a2029] relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/cloud-platform-integrations/resource-graph-bg.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,32,41,0.91)]" />
      </div>

      <div className="relative flex flex-col gap-10 mx-auto max-w-[1440px] px-[22px] lg:px-[108px] py-[22px] lg:py-[80px]">
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
              RELATIONAL ASSURANCE
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] sm:text-[34px] lg:text-[38px] text-white tracking-[-0.76px] m-0">
            Normalized Multi-Cloud Resource Topology
          </h2>
          <p className="font-manrope font-medium leading-[21px] lg:leading-[25px] text-[14px] lg:text-[16.5px] text-[rgba(255,255,255,0.68)] m-0 max-w-[720px]">
            See how resources depend on one another across providers. Graph
            coordinates native assets, access controls, and active
            compliance mappings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row gap-6 items-stretch p-8 rounded-[16px] w-full"
        >
          <div className="bg-[rgba(10,15,26,0.75)] flex flex-1 flex-col gap-4 items-start p-4 rounded-[12px] min-w-0">
            <p className="font-jetbrains font-bold text-[#f90] text-[11px] m-0">
              AWS PROVIDER LANE
            </p>
            <div className="bg-[#0a2029] border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-3 rounded-[8px] w-full">
              <p className="font-manrope font-bold text-[13px] text-white m-0">
                ARN: iam-user-access
              </p>
              <p className="font-jetbrains font-normal text-[#1f7a6c] text-[10px] m-0">
                → Mapped to SOC 2 CC7.1
              </p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col gap-3 items-center justify-center shrink-0 w-full md:w-[100px] py-2">
            <svg
              className="rotate-90 md:rotate-0"
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
            >
              <path
                d="M0 8H30M30 8L23 1M30 8L23 15"
                stroke="#dde1e5"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-jetbrains font-normal text-[#dde1e5] text-[9px] text-center whitespace-nowrap m-0">
              Cross-Cloud RBAC
            </p>
          </div>

          <div className="bg-[rgba(10,15,26,0.75)] flex flex-1 flex-col gap-4 items-start p-4 rounded-[12px] min-w-0">
            <p className="font-jetbrains font-bold text-[#0089d6] text-[11px] m-0">
              AZURE PROVIDER LANE
            </p>
            <div className="bg-[#0a2029] border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-3 rounded-[8px] w-full">
              <p className="font-manrope font-bold text-[13px] text-white m-0">
                Resource: prod-infra-sa
              </p>
              <p className="font-jetbrains font-normal text-[#1f7a6c] text-[10px] m-0">
                → Verified mTLS Active
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
