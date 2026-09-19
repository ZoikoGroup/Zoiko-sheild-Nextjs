"use client";

import React from "react";
import { motion } from "framer-motion";

const contacts = [
  {
    title: "Corporate & B2B",
    desc: "Managing partner data, business integration handshakes, and platform metrics.",
    email: "b2b.privacy@zoiko.com",
  },
  {
    title: "Recruitment Desk",
    desc: "Candidate file handling, talent pool extensions, and background verification.",
    email: "careers.privacy@zoiko.com",
  },
  {
    title: "Events & Marketing",
    desc: "Opt-out management, event registrations, and newsletter database purges.",
    email: "events.privacy@zoiko.com",
  },
];

export default function ContactsSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
        Specific Operational Contacts
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 w-full">
        {contacts.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[8px]"
          >
            <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">{c.title}</p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">{c.desc}</p>
            <p className="font-jetbrains font-normal text-[#c44242] text-[11px] m-0">{c.email}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
