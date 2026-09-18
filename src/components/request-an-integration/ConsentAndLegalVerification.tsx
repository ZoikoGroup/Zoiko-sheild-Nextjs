"use client";

import React from "react";
import { motion } from "framer-motion";

interface ConsentProps {
  onSubmit?: () => void;
  onClear?: () => void;
}

export default function ConsentAndLegalVerification({ onSubmit, onClear }: ConsentProps) {
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
                <span className="sm:hidden">CONSENT &amp; LEGAL</span>
                <span className="hidden sm:inline">CONSENT &amp; LEGAL VERIFICATION</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1B26] tracking-tight">
              Review proposal summary{" "}
              <span className="sm:hidden">&amp;</span>
              <span className="hidden sm:inline">and</span>{" "}
              certify data hygiene
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* Left 8 cols: Statement and Action Buttons */}
            <div className="lg:col-span-8 w-full">
              {/* Evidentiary Declaration Box */}
              <div className="bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl p-4 sm:p-6 mb-5 sm:mb-6">
                <h3 className="text-xs sm:text-[13px] font-bold text-[#0B1B26] mb-2.5 sm:mb-3">
                  Evidentiary Declaration &amp; Integrity Statement
                </h3>
                <p className="text-[11.5px] sm:text-[12.5px] text-[#5A6874] leading-[1.6] sm:leading-[1.65] mb-2">
                  By executing this submission, you certify that:
                </p>
                <ol className="list-decimal list-inside text-[11.5px] sm:text-[12.5px] text-[#5A6874] leading-[1.6] sm:leading-[1.65] space-y-1">
                  <li>No passwords, client credentials, API tokens, or secrets have been entered.</li>
                  <li>
                    No protected personal health data (PHI), PII, or{" "}
                    <span className="hidden sm:inline">confidential </span>active breach material is present.
                  </li>
                  <li>This is an informational request and does not constitute a legally binding service-level timeline.</li>
                </ol>
              </div>

              {/* Action Buttons (Full-width vertical stack on mobile, horizontal row on desktop) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={onSubmit}
                  className="w-full sm:w-auto bg-[#BE3A34] hover:bg-[#A82E29] text-white text-[13.5px] font-semibold px-6 py-3 sm:py-2.5 rounded-lg shadow-sm transition-colors duration-150 inline-flex items-center justify-center cursor-pointer text-center"
                >
                  Submit Integration Request
                </button>
                <button
                  type="button"
                  onClick={onClear}
                  className="w-full sm:w-auto bg-transparent hover:bg-black/5 border border-[#0B1B26] text-[#0B1B26] text-[13.5px] font-semibold px-5 py-2.5 rounded-lg transition-colors duration-150 inline-flex items-center justify-center cursor-pointer text-center"
                >
                  Clear Draft
                </button>
              </div>
            </div>

            {/* Right 4 cols: Submission Checklist (Hidden on mobile as shown in reference) */}
            <div className="hidden sm:block lg:col-span-4">
              <div className="bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl p-5">
                <h4 className="text-xs font-bold text-[#0B1B26] mb-2">
                  Submission Checklist
                </h4>
                <p className="text-[11.5px] text-[#6B7280] leading-relaxed">
                  Review the request type, target platform, topology, technical notes, deployment scope, and contact details before submitting.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
