"use client";

import React from "react";
import { motion } from "framer-motion";

const providers = [
  {
    title: "Live Support Chat",
    badge: "Internal Guardrail",
    desc: "Allows real-time access to our secure client advisors. Scripts do not load until you explicitly launch the help widget.",
    link: "View Transfer / Residency Link",
  },
  {
    title: "Host Metrics Mapping",
    badge: "Anonymized",
    desc: "Aggregated latency analysis strictly bound to compliance controls. No cross-site profiling is technically possible.",
    link: "Vendor Compliance File",
  },
  {
    title: "Identity Federation",
    badge: "Registry Approved",
    desc: "Secure SSO and directory handshakes. Strictly permission-scoped within current browser sandboxing rules.",
    link: "SSO Posture Document",
  },
];

export default function ThirdPartyProvidersSection() {
  return (
    <section className="hidden lg:block bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-8 mx-auto max-w-[1440px] px-[108px] py-[60px]">
        <div className="flex flex-col gap-3 items-start">
          <h2 className="font-sans font-extrabold text-[28px] text-[#0a2029] m-0">
            Third-Party Provider Transparency
          </h2>
          <p className="font-sans font-normal text-[14px] text-[#5b6670] m-0">
            Independent vendor services authorized to interact with choices
            on strict approval windows.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 w-full">
          {providers.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-5 rounded-[8px]"
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-sans font-extrabold text-[#0a2029] text-[16px] m-0">{p.title}</p>
                <div className="bg-[#e4f0ec] flex items-start px-2 py-1 rounded-full shrink-0">
                  <p className="font-sans font-bold text-[#1f7a6c] text-[10px] whitespace-nowrap m-0">
                    {p.badge}
                  </p>
                </div>
              </div>
              <p className="font-sans font-normal text-[#5b6670] text-[13px] m-0 w-full">{p.desc}</p>
              <p className="font-sans font-semibold text-[#4e668a] text-[11px] underline m-0 w-full">
                {p.link}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
