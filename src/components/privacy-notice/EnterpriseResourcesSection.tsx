"use client";

import React from "react";
import { motion } from "framer-motion";

const cards = [
  { title: "Standard DPA", desc: "Request our pre-signed customer Data Processing Addendum." },
  { title: "Subprocessor List", desc: "The fully detailed subprocessor entity registry." },
  { title: "Trust Overview", desc: "Our SOC2 Type II audit results & active policies." },
  { title: "Data Residency", desc: "Configure physical storage limits for EU/US tenants." },
];

export default function EnterpriseResourcesSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
        Enterprise Privacy &amp; Procurement Resources
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 w-full">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: (i % 4) * 0.05 }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-5 rounded-[12px]"
          >
            <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0">{c.title}</p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] leading-[20px] m-0">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
