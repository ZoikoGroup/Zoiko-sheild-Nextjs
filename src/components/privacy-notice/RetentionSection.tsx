"use client";

import React from "react";
import { motion } from "framer-motion";

const desktopCards = [
  { title: "Account Profile", desc: "Retained for the duration of the active subscription + 120 days post-termination for transition safety." },
  { title: "Platform Logs", desc: "Automatically rotated or archived after 90 days of inactivity under strict compliance rules." },
  { title: "Billing History", desc: "Stored for 7 years to meet tax, auditing, and corporate statutory obligations." },
  { title: "Recruitment Files", desc: "Kept for 1 year from the date of final determination, unless candidate consent is given to extend." },
  { title: "Marketing Contacts", desc: "Removed instantly upon opt-out / unsubscribe action via automated workflow." },
  { title: "Legal Holds", desc: "Maintained indefinitely upon active service of legal hold until formal release." },
];

const mobileCards = [
  { title: "Subscription Data", desc: "Retained for the duration of the active subscription + 120 days post-termination for transition safety." },
  { title: "Telemetry Logs", desc: "Automatically rotated or archived after 90 days of inactivity under strict compliance rules." },
  { title: "Billing Records", desc: "Stored for 7 years to meet tax, auditing, and corporate statutory obligations." },
];

export default function RetentionSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex flex-col gap-1 lg:gap-2 items-start w-full">
        <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
          Data Retention Criteria
        </p>
        <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] lg:text-[14.5px] m-0">
          We store your personal data only as long as necessary to
          fulfill the underlying processing purposes, as mapped below:
        </p>
      </div>

      <div className="hidden lg:grid grid-cols-3 gap-4 w-full">
        {desktopCards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: (i % 3) * 0.06 }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-5 rounded-[12px]"
          >
            <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0">{c.title}</p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] leading-[20px] m-0">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="lg:hidden flex flex-col gap-3 w-full">
        {mobileCards.map((c) => (
          <div key={c.title} className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[12px] w-full">
            <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">{c.title}</p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13px] leading-[19px] m-0">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
