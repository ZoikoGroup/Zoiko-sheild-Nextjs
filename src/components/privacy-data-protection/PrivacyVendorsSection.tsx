"use client";

import React from "react";
import { motion } from "framer-motion";

interface VendorRow {
  provider: string;
  service: string;
  zone: string;
  category: string;
  reviewDate: string;
  status: string;
}

const vendors: VendorRow[] = [
  {
    provider: "Amazon Web Services",
    service: "Primary Hosting & Storage",
    zone: "Europe (Paris)",
    category: "Tenant DB, Logs",
    reviewDate: "Jan 10, 2026",
    status: "Approved",
  },
  {
    provider: "Okta Inc.",
    service: "Identity Hook Ingestion",
    zone: "EU Multi-Region",
    category: "User Session Identifiers",
    reviewDate: "Dec 18, 2025",
    status: "Approved",
  },
  {
    provider: "CrowdStrike Inc.",
    service: "Host Telemetry Stream",
    zone: "United States (East)",
    category: "Process Hashes",
    reviewDate: "Feb 02, 2026",
    status: "Approved",
  },
];

const workflowSteps = [
  { step: "STEP 01", title: "Propose" },
  { step: "STEP 02", title: "Security Review" },
  { step: "STEP 03", title: "Privacy Review" },
  { step: "STEP 04", title: "Legal / DPA" },
  { step: "STEP 05", title: "Customer Notice" },
  { step: "STEP 06", title: "Registry Update" },
  { step: "STEP 07", title: "Active Audit" },
];

export default function PrivacyVendorsSection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              SUPPLY CHAIN
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            Vendors & Subprocessors Registry
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Continuous oversight of external pipelines. We govern all third-party connectors under a strict review workflow.
          </p>
        </motion.div>

        {/* Vendors Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-x-auto rounded-xl border border-[#123B4C]/10 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
        >
          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead>
              <tr className="bg-[#F7F5F0] border-b border-[#123B4C]/10">
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  PROVIDER
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  SERVICE / PURPOSE
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  PROCESSING ZONE
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  DATA CATEGORY
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  LAST COMPLIANCE REVIEW
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#123B4C]/5 text-xs sm:text-[13px]">
              {vendors.map((v) => (
                <tr
                  key={v.provider}
                  className="hover:bg-[#F7F5F0]/60 transition-colors"
                >
                  <td className="py-4 px-5 font-bold text-[#0A2029]">
                    {v.provider}
                  </td>
                  <td className="py-4 px-5 text-[#5B6670] font-medium">
                    {v.service}
                  </td>
                  <td className="py-4 px-5 text-[#0A2029] font-medium">
                    {v.zone}
                  </td>
                  <td className="py-4 px-5 text-[#5B6670] font-medium">
                    {v.category}
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#0A2029] font-medium">
                        {v.reviewDate}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#E4F0EC] text-[#1F7A6C] text-[10px] font-bold">
                        {v.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Subprocessor Onboarding Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2029] tracking-tight">
            Subprocessor Onboarding Workflow
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-[#123B4C]/10 rounded-lg p-3 sm:p-3.5 flex flex-col gap-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              >
                <span className="font-mono text-[11px] font-bold text-[#5B6670]">
                  {step.step}
                </span>
                <span className="text-xs sm:text-[13px] font-bold text-[#0A2029] tracking-tight">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
