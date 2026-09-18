"use client";

import React from "react";
import { motion } from "framer-motion";

const qas = [
  {
    q: "Is native storage parsed or duplicated?",
    a: "No. We collect metadata state metrics and cryptographic audit events only. Actual application customer database layers remain inside your provider account.",
  },
  {
    q: "How is least-privilege credential access verified?",
    a: "Every connection path and IAM scope configuration is reviewed daily. Access boundaries are locked to read-only roles.",
  },
  {
    q: "What are regional data residency choices?",
    a: "We support distinct target deployment environments in the United States, United Kingdom, and the European Union. Evidence storage remains local.",
  },
  {
    q: "How are AWS and Azure rate limits avoided?",
    a: "Intelligent throttling backoff ensures we stay comfortably within native API constraints, avoiding production impact.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#f0ede6] w-full">
      <div className="flex flex-col gap-10 mx-auto max-w-[1440px] px-[22px] lg:px-[108px] py-12 lg:py-[80px]">
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
              ENTERPRISE COMPLIANCE
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] sm:text-[34px] lg:text-[38px] text-[#0a2029] tracking-[-0.76px] m-0">
            Security & Residency Principles
          </h2>
          <p className="font-manrope font-medium leading-[21px] lg:leading-[25px] text-[14px] lg:text-[16.5px] text-[#5b6670] m-0 max-w-[720px]">
            Core procurement guidelines designed to expedite CISO evaluation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[24px] w-full">
          {qas.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-2 items-start w-full"
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
