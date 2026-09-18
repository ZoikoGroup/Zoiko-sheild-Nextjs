"use client";

import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Which cloud platforms are supported natively?",
    a: "Zoiko Shield natively integrates with Amazon Web Services, Microsoft Azure, Google Cloud Platform, and Kubernetes. Hybrid environments are supported through localized connector agents.",
  },
  {
    q: "How does this relate to tools like AWS Security Hub or Microsoft Defender?",
    a: "We ingest findings from these native tools, preserve their specific ASFF/Defender telemetry, and map them to unified framework objectives while generating verifiable SHA-256 evidence logs.",
  },
  {
    q: "What permissions does Zoiko Shield require inside our cloud environments?",
    a: "We operate on a strictly least-privilege model. Our default configuration requires read-only permissions (e.g., SecurityAudit and custom metadata reader roles). Write permissions are only required for active mitigation paths.",
  },
  {
    q: "Can we restrict Zoiko Shield scanning to specific regions or folders?",
    a: "Yes. Scope can be defined precisely by AWS Organization units, accounts, or regions, Google Cloud folder hierarchies, or Azure management groups.",
  },
  {
    q: "What happens when cloud provider APIs are throttled or temporarily unavailable?",
    a: "Our connectors utilize exponential backoff and intelligent throttling management. Gaps in API availability are flagged internally with a status of 'Stale' but do not corrupt previously validated evidence.",
  },
  {
    q: "Can Zoiko Shield execute autonomous remediation?",
    a: "By default, no. High-impact remediation actions require explicit human-in-the-loop authorization. Every action waits for an authorized operator's signature before executing.",
  },
  {
    q: "How is the evidence ledger cryptographically verified?",
    a: "Every telemetry ingest and state transition generates a signed metadata record. The SHA-256 hash of this record is appended to a Merkle tree, establishing an immutable chain of custody.",
  },
  {
    q: "What is the process for requesting an unlisted cloud integration?",
    a: "You can define custom targets via our Private Cloud API specifications, or collaborate with our engineering team for partner-assisted integrations through the registry.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-12 mx-auto max-w-[1440px] px-[22px] lg:px-[108px] py-[22px] lg:py-[80px]">
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
              QUESTIONS
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] sm:text-[34px] lg:text-[38px] text-[#0a2029] tracking-[-0.76px] m-0">
            Frequently Asked Questions
          </h2>
          <p className="font-manrope font-medium leading-[21px] lg:leading-[25px] text-[14px] lg:text-[16.5px] text-[#5b6670] m-0 max-w-[720px]">
            Common questions regarding multi-cloud evidence aggregation.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 items-start w-full">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
              className="border-b border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start pb-4 w-full"
            >
              <p className="font-hanken font-extrabold text-[#0a2029] text-[18px] m-0">
                {item.q}
              </p>
              <p className="font-manrope font-normal leading-[22px] text-[#5b6670] text-[14.5px] m-0">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
