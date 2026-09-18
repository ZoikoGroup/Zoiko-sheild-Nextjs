"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function RequestConfirmationBanner() {
  return (
    <section className="w-full bg-[#F5F2EB] py-5 sm:py-6 px-6 md:px-12 lg:px-16 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#0D9488] shadow-[0_2px_12px_rgba(13,148,136,0.06)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Status Header */}
          <div className="flex items-center gap-2.5 mb-4">
            <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1B26]">
              Your integration request has been received.
            </h3>
          </div>

          {/* Details Inner Box */}
          <div className="bg-[#FAF8F4] border border-[#E7E5DF] rounded-xl p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="font-mono font-bold text-xs sm:text-[13px] text-[#0B1B26] tracking-wider">
                REQUEST ID: ZSI-948202-A
              </span>
              <span className="font-mono text-[10px] font-bold tracking-wider text-[#0284C7] bg-[#E0F2FE] border border-[#BAE6FD] px-2 py-0.5 rounded">
                Pending Evaluation
              </span>
            </div>

            <p className="text-[12px] sm:text-[12.5px] text-[#5A6874] leading-relaxed">
              Your request has been compiled into our evidence-ledger queue. A confirmation receipt has been sent to your verified corporate email domain. Our product and engineering routing review completes in 5 business days.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
