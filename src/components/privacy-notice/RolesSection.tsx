"use client";

import React from "react";
import { motion } from "framer-motion";

const rows = [
  {
    context: "Marketing & Websites",
    role: "Controller",
    roleColor: "text-[#c44242]",
    desc: "Directly determining marketing, optimization, analytics, and visitor cookie preferences.",
  },
  {
    context: "Account & Billing Admin",
    role: "Controller",
    roleColor: "text-[#c44242]",
    desc: "Managing commercial relations, subscription terms, authentication records, and secure invoice handling.",
  },
  {
    context: "Endpoint Payload Logs",
    role: "Processor",
    roleColor: "text-[#4e668a]",
    desc: "Acting solely on behalf of our licensed customers to correlate alerts, map integrations, and enforce system isolation rules.",
  },
];

export default function RolesSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-5 items-start w-full">
      <div className="flex flex-col gap-1 lg:gap-2 items-start w-full">
        <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
          Our Privacy Roles: Context Matrix
        </p>
        <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] lg:text-[14.5px] m-0">
          We do not assume a single regulatory role across all
          operations. Our legal obligations adjust based on the specific
          context of the data engagement:
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden lg:flex border border-[rgba(18,59,76,0.1)] flex-col items-start overflow-hidden rounded-[12px] w-full">
        <div className="bg-[#f0ede6] flex items-start p-3 w-full font-jetbrains font-bold text-[#0a2029] text-[12px]">
          <p className="w-[220px] m-0">DATA CONTEXT</p>
          <p className="w-[140px] m-0">ZOIKO ROLE</p>
          <p className="flex-1 m-0">REGULATORY RESPONSIBILITY</p>
        </div>
        {rows.map((r) => (
          <div key={r.context} className="border border-[rgba(18,59,76,0.1)] flex items-start p-3 w-full text-[13px]">
            <p className="font-manrope font-bold text-[#0a2029] w-[220px] m-0">{r.context}</p>
            <p className={`font-manrope font-semibold ${r.roleColor} w-[140px] m-0`}>{r.role}</p>
            <p className="flex-1 font-manrope font-normal text-[#5b6670] m-0">{r.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="lg:hidden flex flex-col gap-3 w-full">
        {rows.map((r, i) => (
          <motion.div
            key={r.context}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[10px] w-full"
          >
            <p className="font-jetbrains font-bold text-[#5b6670] text-[11px] m-0">{r.context}</p>
            <p className={`font-manrope font-bold ${r.roleColor} text-[15px] m-0`}>{r.role}</p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13px] leading-[19px] m-0">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
