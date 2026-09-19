"use client";

import React from "react";
import { motion } from "framer-motion";

const desktopFaqs = [
  {
    q: "What accessibility standard does Zoiko Shield follow?",
    a: "We design and test our core console using the World Wide Web Consortium's Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.",
  },
  {
    q: "Do you provide a formal Accessibility Conformance Report (ACR)?",
    a: "Yes. Our official ACR is built utilizing the VPAT 2.4 rev WCAG framework. You can request access via your primary procurement contact.",
  },
  {
    q: "How are keyboard focus issues reported?",
    a: "You can utilize our direct feedback form above. All reported focus gaps are evaluated manually and prioritized directly on our engineering roadmap.",
  },
  {
    q: "Where is accessibility testing performed?",
    a: "Testing occurs in certified staging environments and is conducted by accredited third-party specialists using standard JAWS and NVDA keyboard parameters.",
  },
  {
    q: "What is your posture on accessibility overlays?",
    a: "We believe overlays create separate, inferior experiences. We are dedicated to maintaining direct, native conformance in our standard build rather than relying on widgets.",
  },
  {
    q: "Are document downloads accessible?",
    a: "All platform-generated evidence documentation is systematically structured to allow screen readers to navigate cells and headings easily.",
  },
];

const mobileFaqs = desktopFaqs.slice(0, 3);

export default function FaqSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-6 lg:gap-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[80px]">
        <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
          <div className="flex gap-2 lg:gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
            <p className="font-jetbrains font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              ARCHITECTURE &amp; POLICY
            </p>
          </div>
          <h2 className="font-hanken font-extrabold text-[28px] lg:text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
            Frequently Asked Questions
          </h2>
          <p className="font-manrope font-medium leading-[20px] lg:leading-[23px] text-[13px] lg:text-[15px] text-[#5b6670] m-0 w-full">
            Answers to common questions regarding our platform&apos;s
            design constraints, standards, and vendor policies.
          </p>
        </div>

        {/* Desktop: 2-column list */}
        <div className="hidden lg:grid grid-cols-2 gap-8 w-full">
          {[0, 1].map((col) => (
            <div key={col} className="flex flex-col gap-5 items-start">
              {desktopFaqs.slice(col * 3, col * 3 + 3).map((f) => (
                <div key={f.q} className="flex flex-col gap-2 items-start w-full">
                  <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0">{f.q}</p>
                  <p className="font-manrope font-normal text-[#5b6670] text-[14px] leading-[22px] m-0">{f.a}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile: single column */}
        <div className="lg:hidden flex flex-col gap-4 w-full">
          {mobileFaqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
              className="flex flex-col gap-2 items-start w-full"
            >
              <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">{f.q}</p>
              <p className="font-manrope font-normal text-[#5b6670] text-[13px] leading-[20px] m-0">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
