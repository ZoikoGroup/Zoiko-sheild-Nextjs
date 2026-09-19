"use client";

import React from "react";
import { motion } from "framer-motion";

function AlertTriangleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden>
      <path d="M7 1.5L13 12.5H1L7 1.5Z" stroke="#b45309" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M7 5.5V8" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="10.2" r="0.7" fill="#b45309" />
    </svg>
  );
}

function FormFields() {
  return (
    <>
      <div className="flex flex-col gap-2 items-start w-full">
        <p className="font-manrope font-bold text-[#0a2029] text-[13px] lg:text-[13.5px] m-0">
          AFFECTED URL / SCREEN *
        </p>
        <div className="bg-[#f7f5f0] border border-[rgba(18,59,76,0.1)] flex items-center p-3 rounded-[8px] w-full">
          <p className="font-manrope font-normal text-[#5b6670] text-[13px] lg:text-[14px] m-0 truncate">
            https://shield.zoiko.com/console/integrations
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start w-full">
        <p className="font-manrope font-bold text-[#0a2029] text-[13px] lg:text-[13.5px] m-0">
          DESIRED OUTCOME / ALTERNATIVE FORMAT *
        </p>
        <div className="bg-[#f7f5f0] border border-[rgba(18,59,76,0.1)] flex items-center p-3 rounded-[8px] w-full">
          <p className="font-manrope font-normal text-[#5b6670] text-[13px] lg:text-[14px] m-0">
            Request accessible PDF version of the Endpoint guidelines
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start w-full">
        <p className="font-manrope font-bold text-[#0a2029] text-[13px] lg:text-[13.5px] m-0">
          ADDITIONAL CONTEXT (Browser / Assistive Tool)
        </p>
        <div className="bg-[#f7f5f0] border border-[rgba(18,59,76,0.1)] flex items-center p-3 rounded-[8px] w-full">
          <p className="font-manrope font-normal text-[#5b6670] text-[13px] lg:text-[14px] m-0">
            Chrome / NVDA screen reader user
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center w-full">
        <div className="border-2 border-[#c44242] rounded-[4px] shrink-0 size-4" />
        <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
          I agree to the privacy notice guidelines.
        </p>
      </div>
    </>
  );
}

export default function FeedbackFormSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[80px] items-start">
        <div className="flex flex-col gap-5 lg:gap-6 items-start w-full lg:flex-1 lg:max-w-[580px]">
          <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
            <div className="flex gap-2 lg:gap-3 items-center w-full">
              <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
              <p className="font-jetbrains font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
                ACCOMMODATION &amp; BARRIERS
              </p>
            </div>
            <h2 className="font-hanken font-extrabold text-[28px] lg:text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
              Request Accommodation or Report a Barrier
            </h2>
            <p className="font-manrope font-medium leading-[20px] lg:leading-[23px] text-[13px] lg:text-[15px] text-[#5b6670] m-0 w-full">
              <span className="lg:hidden">
                If you encounter a barrier while using Zoiko Shield, or
                require an alternative format, please complete this form.
                Disclosure of medical status is not required.
              </span>
              <span className="hidden lg:inline">
                If you encounter a barrier while using Zoiko Shield, or
                require an alternative format of any documentation, please
                complete this form. It does not require any disclosure of
                personal medical status.
              </span>
            </p>
          </div>

          <p className="font-manrope font-normal text-[#5b6670] text-[13px] lg:text-[14px] m-0 w-full">
            <span className="lg:hidden">
              All submissions generate a tracking ticket with a unique
              reference ID.
            </span>
            <span className="hidden lg:inline">
              All submissions generate a tracking ticket with a unique
              reference ID. For urgent security or credential issues, please
              use the standard bypass protocol.
            </span>
          </p>

          <div className="bg-[#fef3c7] border border-[#b45309] flex gap-3 items-start p-4 rounded-[8px] w-full">
            <AlertTriangleIcon />
            <p className="flex-1 font-manrope font-normal text-[#b45309] text-[13px] m-0">
              Submissions are prioritized based on user impact severity. We
              do not use third-party accessibility widgets or overlays.
            </p>
          </div>

          {/* Mobile-only compact form card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:hidden bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-4 items-start p-5 rounded-[16px] w-full"
          >
            <p className="font-hanken font-extrabold text-[#0a2029] text-[19px] m-0">
              Accessibility Ticket Intake
            </p>
            <FormFields />
            <div className="flex gap-3 items-start w-full">
              <button className="flex-1 flex items-center justify-center bg-[#c44242] px-6 py-3 rounded-[8px]">
                <span className="font-manrope font-bold text-white text-[14px]">Submit Request</span>
              </button>
              <button className="flex items-center justify-center border border-[rgba(18,59,76,0.1)] px-6 py-3 rounded-[8px]">
                <span className="font-manrope font-semibold text-[#5b6670] text-[14px]">Clear</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Desktop form card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="hidden lg:flex bg-white border border-[rgba(18,59,76,0.1)] flex-1 flex-col gap-6 items-start p-[32px] rounded-[16px]"
        >
          <p className="font-hanken font-extrabold text-[#0a2029] text-[22px] m-0">
            Accommodation Request
          </p>
          <FormFields />
          <div className="flex gap-3 items-start w-full">
            <button className="flex items-center justify-center bg-[#c44242] px-6 py-3 rounded-[8px]">
              <span className="font-manrope font-bold text-white text-[14px]">Submit Request</span>
            </button>
            <button className="flex items-center justify-center border border-[rgba(18,59,76,0.1)] px-6 py-3 rounded-[8px]">
              <span className="font-manrope font-semibold text-[#5b6670] text-[14px]">Clear Form</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
