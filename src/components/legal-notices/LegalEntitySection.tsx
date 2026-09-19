"use client";

import React from "react";
import { motion } from "framer-motion";

function AlertTriangleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0" aria-hidden>
      <path d="M8 1.5L15 14.5H1L8 1.5Z" stroke="#a43737" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M8 6V9.5" stroke="#a43737" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="11.6" r="0.8" fill="#a43737" />
    </svg>
  );
}

const desktopFields = [
  "Covered Domains",
  "Exact Legal Operator",
  "Entity Type & Jurisdiction",
  "Registration Number",
  "Registered Office Address",
  "Corporate Business Office",
  "Regulatory Identifiers",
];

const mobileFields = [
  "Legal Entity Type",
  "Registered Country",
  "Tax Registry Identifier",
  "Operating License Status",
];

export default function LegalEntitySection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex gap-2 lg:gap-2 items-center w-full">
        <div className="bg-[#c44242] h-[2px] w-4 lg:w-6 shrink-0" />
        <p className="font-jetbrains font-bold text-[#c44242] text-[12px] tracking-[1.2px] lg:tracking-[1.5px] uppercase m-0">
          01. LEGAL ENTITY &amp; PUBLISHER
        </p>
      </div>
      <p className="font-sans font-normal leading-[22px] lg:leading-[1.6] text-[14px] lg:text-[15px] text-[#5b6670] m-0 w-full">
        The following details represent the legal operating entity and
        official publisher responsible for the Zoiko Shield security
        platform. Under statutory guidelines, all official notices, claims,
        and inquiries must target this designated operator.
      </p>

      <div className="bg-[#fdf5f5] border border-[#f1d4d4] flex gap-3 lg:gap-4 items-start p-[14px] lg:p-4 rounded-[8px] w-full">
        <AlertTriangleIcon />
        <div className="flex flex-col gap-1 items-start text-[#a43737] flex-1">
          <p className="font-sans font-bold text-[13px] lg:text-[14px] m-0">
            Identity Fact Isolation Gate Active
          </p>
          <p className="font-sans font-normal leading-[18px] lg:leading-[1.5] text-[12px] lg:text-[13px] m-0">
            To maintain absolute compliance, exact operator coordinates,
            business addresses, corporate registers, and registered tax
            identifiers require binding Authoritative Legal Registry
            values prior to formal publication.
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 lg:gap-4 items-start p-4 lg:p-5 rounded-[12px] w-full"
      >
        <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] lg:text-[16px] m-0">
          Structured Entity Records
        </p>
        <div className="flex flex-col gap-[10px] lg:gap-3 items-start w-full">
          {/* Desktop rows: label + value inline */}
          <div className="hidden lg:flex flex-col gap-3 items-start w-full">
            {desktopFields.map((label) => (
              <div key={label} className="border-b border-[rgba(18,59,76,0.1)] flex items-center justify-between pb-2 w-full">
                <p className="font-jetbrains font-normal text-[#5b6670] text-[12px] m-0">{label}</p>
                <p className="font-sans font-semibold text-[#a43737] text-[13px] m-0">
                  Authoritative Legal Registry value required
                </p>
              </div>
            ))}
          </div>
          {/* Mobile rows: label above value */}
          <div className="lg:hidden flex flex-col gap-[10px] items-start w-full">
            {mobileFields.map((label) => (
              <div key={label} className="border-b border-[rgba(18,59,76,0.12)] flex flex-col gap-1 items-start pb-2 w-full">
                <p className="font-sans font-bold text-[#5b6670] text-[11px] uppercase m-0">{label}</p>
                <p className="font-jetbrains font-normal text-[#a43737] text-[12px] m-0">
                  Authoritative Legal Registry value required
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
