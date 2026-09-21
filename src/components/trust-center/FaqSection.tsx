"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const faqs = [
  {
    q: "Is write access required for directory integrations?",
    a: "No. You can configure Zoiko Shield in a completely Read-Only posture to automatically compile assurance reports. Write permissions are solely requested for active containment rules.",
  },
  {
    q: "How does Zoiko map user sessions to target devices?",
    a: "The correlation agent matches IDP metadata hashes directly against MDM serial directories with zero interpolation or passive guesses.",
  },
  {
    q: "Can we review previous certifications if they are superseded?",
    a: "Yes. Archived certifications can be made on-demand following active NDA confirmation from our legal desk.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <Section tone="alt">
      <SectionHeader eyebrow="Architectural Constraints" title="Frequently Asked Questions" />

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
                  aria-controls={`tc-faq-${i}`}
                  className={`w-full flex items-center justify-between gap-4 px-6 pt-6 text-left ${open ? "pb-2" : "pb-6"}`}
                >
                  <span className="font-sans font-bold text-[16px] text-[#0a2029]">{f.q}</span>
                  {open ? (
                    <Minus className="size-5 text-[#c44242] shrink-0" />
                  ) : (
                    <Plus className="size-5 text-[#5b6670] shrink-0" />
                  )}
                </button>
                <div id={`tc-faq-${i}`} hidden={!open} className="px-6 pb-6">
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
