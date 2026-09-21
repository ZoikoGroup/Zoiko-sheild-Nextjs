"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const faqs = [
  {
    q: "What endpoint and identity providers are supported out-of-the-box?",
    a: "Currently, we fully support CrowdStrike Falcon, Microsoft Defender, Okta, Microsoft Entra ID (Azure AD), Jamf Pro, and Microsoft Intune. Production validation is ongoing.",
  },
  {
    q: "Can we use Zoiko Shield solely for compliance evidence without isolating devices?",
    a: "Yes. All isolation and remediation features require explicit authorization permissions and dual-party approval keys. You can configure full read-only policies.",
  },
  {
    q: "What happens when source directories and endpoint health reports conflict?",
    a: "Zoiko Shield flags the device posture context immediately. We do not automatically assume everything is compliant — conflict records are explicitly compiled for review.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <Section>
      <SectionHeader eyebrow="FAQ" title="Detailed architecture and integration constraints" />

      <div className="flex flex-col gap-4 w-full">
        {faqs.map((f, i) => {
          const open = openIndex === i;
          return (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className={cardClass}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  aria-controls={`stc-faq-${i}`}
                  className={`w-full flex items-center justify-between gap-4 px-6 pt-6 text-left ${open ? "pb-2" : "pb-6"}`}
                >
                  <span className="font-manrope font-bold text-[16px] lg:text-[17px] text-[#0a2029]">{f.q}</span>
                  {open ? (
                    <Minus className="size-5 text-[#c44242] shrink-0" />
                  ) : (
                    <Plus className="size-5 text-[#5b6670] shrink-0" />
                  )}
                </button>
                <div id={`stc-faq-${i}`} hidden={!open} className="px-6 pb-6">
                  <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0">{f.a}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
