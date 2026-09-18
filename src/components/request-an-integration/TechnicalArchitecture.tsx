"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TechnicalArchitecture() {
  const [formData, setFormData] = useState({
    authModel: "",
    rateLimits: "",
    freshnessGoal: "",
    networkRules: "",
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
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#BE3A34]" />
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
                  <span className="sm:hidden">STEP 4 OF 6: TECHNICAL (OPTIONAL)</span>
                  <span className="hidden sm:inline">TECHNICAL ARCHITECTURE (OPTIONAL)</span>
                </span>
              </div>
              <span className="sm:hidden font-mono text-[10px] font-bold tracking-wider text-[#BE3A34] uppercase">
                COLLAPSIBLE
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1B26] tracking-tight mb-2">
              Advanced connectivity{" "}
              <span className="sm:hidden">&amp;</span>
              <span className="hidden sm:inline">and</span>{" "}
              authentication
            </h2>

            <p className="hidden sm:block text-[13.5px] sm:text-[14px] text-[#52606D] leading-relaxed">
              Provide explicit interface requirements if known. This accelerates feasibility checks.
            </p>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* Left 8 cols: Form Inputs */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-4 w-full">
              {/* Auth Model */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                  Preferred Authentication Model
                </label>
                {/* Mobile input */}
                <input
                  type="text"
                  name="authModel"
                  value={formData.authModel}
                  onChange={handleChange}
                  placeholder="e.g. OAuth2 Grant, API Key (Header), mTLS"
                  className="sm:hidden w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
                {/* Desktop input */}
                <input
                  type="text"
                  name="authModel"
                  value={formData.authModel}
                  onChange={handleChange}
                  placeholder="e.g. OAuth2 Grant, API Key (Header), mTLS, SAML"
                  className="hidden sm:block w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
              </div>

              {/* Two Column on desktop, stacked on mobile: Rate Limits & Freshness */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                    Estimated API Rate Limits{" "}
                    <span className="hidden sm:inline">/ Throttling limits</span>
                  </label>
                  <input
                    type="text"
                    name="rateLimits"
                    value={formData.rateLimits}
                    onChange={handleChange}
                    placeholder="e.g. 10000 req/min"
                    className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                    Expected Telemetry Freshness Goal
                  </label>
                  {/* Mobile input */}
                  <input
                    type="text"
                    name="freshnessGoal"
                    value={formData.freshnessGoal}
                    onChange={handleChange}
                    placeholder="e.g. Real-time stream, hourly sync"
                    className="sm:hidden w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                  />
                  {/* Desktop input */}
                  <input
                    type="text"
                    name="freshnessGoal"
                    value={formData.freshnessGoal}
                    onChange={handleChange}
                    placeholder="e.g. Real-time stream, hourly sync, manual audit"
                    className="hidden sm:block w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                  />
                </div>
              </div>

              {/* Allowlist / Network Configuration */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                  <span className="sm:hidden">Are explicit allowlist rules required?</span>
                  <span className="hidden sm:inline">
                    Are explicit allowlist or network configuration rules required?
                  </span>
                </label>
                <input
                  type="text"
                  name="networkRules"
                  value={formData.networkRules}
                  onChange={handleChange}
                  placeholder="e.g. Specific outbound proxies, dedicated NAT IPs"
                  className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
              </div>
            </div>

            {/* Right 4 cols: Guidance Card (Desktop only as shown in mobile reference) */}
            <div className="hidden sm:block lg:col-span-4">
              <div className="bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl p-5">
                <h4 className="text-xs font-bold text-[#0B1B26] mb-2">
                  Feasibility Signals
                </h4>
                <p className="text-[11.5px] text-[#6B7280] leading-relaxed">
                  Providing rate limits, freshness goals, and network constraints helps the review team assess whether the integration can be supported within your target production environment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
