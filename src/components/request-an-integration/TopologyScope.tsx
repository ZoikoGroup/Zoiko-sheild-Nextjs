"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TopologyScope() {
  const [formData, setFormData] = useState({
    objective: "",
    dataReceived: "",
    actionsTriggered: "",
    frameworkEvidence: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="w-full bg-[#F5F2EB] py-4 sm:py-6 px-5 sm:px-6 md:px-12 lg:px-16 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#E7E5DF] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#BE3A34]" />
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
                <span className="sm:hidden">STEP 3 OF 6: TOPOLOGY SCOPE</span>
                <span className="hidden sm:inline">TOPOLOGY SCOPE</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1B26] tracking-tight mb-2">
              Define primary outcomes{" "}
              <span className="sm:hidden">&amp; direction</span>
              <span className="hidden sm:inline">and data direction</span>
            </h2>

            <p className="hidden sm:block text-[13.5px] sm:text-[14px] text-[#52606D] leading-relaxed">
              Remediation or write-back selection is treated purely as a requirements signal, not an SLA commitment.
            </p>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* Left 8 cols: Form Inputs */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
              {/* Objective */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                  Describe the main security objective{" "}
                  <span className="hidden sm:inline">of this connector</span>{" "}
                  <span className="text-[#BE3A34]">*</span>
                </label>
                {/* Mobile input with mobile placeholder */}
                <input
                  type="text"
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  placeholder="e.g. Correlate MFA failures directly with host processes"
                  className="sm:hidden w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
                {/* Desktop input with desktop placeholder */}
                <input
                  type="text"
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  placeholder="e.g. Correlate MFA failures directly with host process anomalies"
                  className="hidden sm:block w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
              </div>

              {/* Two Column on desktop, stacked on mobile: Data Receive & Trigger */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                    What data does Zoiko Shield receive? <span className="text-[#BE3A34]">*</span>
                  </label>
                  <input
                    type="text"
                    name="dataReceived"
                    value={formData.dataReceived}
                    onChange={handleChange}
                    placeholder="e.g. Raw audit events, device compliance state"
                    className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                    What actions does Zoiko Shield trigger? <span className="text-[#BE3A34]">*</span>
                  </label>
                  {/* Mobile input */}
                  <input
                    type="text"
                    name="actionsTriggered"
                    value={formData.actionsTriggered}
                    onChange={handleChange}
                    placeholder="e.g. Force re-auth, quarantine host, none"
                    className="sm:hidden w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                  />
                  {/* Desktop input */}
                  <input
                    type="text"
                    name="actionsTriggered"
                    value={formData.actionsTriggered}
                    onChange={handleChange}
                    placeholder="e.g. Force re-auth, quarantine host, none (read-only)"
                    className="hidden sm:block w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                  />
                </div>
              </div>

              {/* Framework Evidence */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                  Required Regulatory{" "}
                  <span className="hidden sm:inline">or Audit </span>Framework Evidence
                </label>
                {/* Mobile input */}
                <input
                  type="text"
                  name="frameworkEvidence"
                  value={formData.frameworkEvidence}
                  onChange={handleChange}
                  placeholder="e.g. SOC2 CC6.1, ISO 27001 A.12, FedRAMP"
                  className="sm:hidden w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
                {/* Desktop input */}
                <input
                  type="text"
                  name="frameworkEvidence"
                  value={formData.frameworkEvidence}
                  onChange={handleChange}
                  placeholder="e.g. SOC2 CC6.1, ISO 27001 A.12, FedRAMP, None"
                  className="hidden sm:block w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
              </div>
            </div>

            {/* Right 4 cols: Guidance Card */}
            <div className="lg:col-span-4 mt-2 lg:mt-0">
              <div className="bg-[#FAF9F5] border border-[#EAE6DF] border-l-4 border-l-[#0B1B26] rounded-xl p-4 sm:p-5">
                <h4 className="text-xs font-bold text-[#0B1B26] mb-1.5 sm:mb-2">
                  Data Direction Guidance
                </h4>
                <p className="text-[11.5px] text-[#6B7280] leading-relaxed">
                  Indicate whether the flow is read-only, write-back, or a mix of both. This helps the review team assess authorization boundaries
                  <span className="hidden sm:inline"> and compliance requirements</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
