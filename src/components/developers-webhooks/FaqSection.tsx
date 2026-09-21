"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const faqs = [
  {
    q: "What are webhooks in Zoiko Shield?",
    a: "Webhooks allow your servers to receive real-time JSON event payloads immediately when security occurrences, posture drift, or auth breaches happen.",
  },
  {
    q: "How do I verify the authenticity of webhook deliveries?",
    a: "Each payload is signed using HMAC-SHA256 with your endpoint secret. Verify signatures against the raw body bytes and drop expired timestamps.",
  },
  {
    q: "How are duplicate deliveries resolved?",
    a: "Always ensure your consumers deduplicate using the unique `event_id` in the JSON header. At-least-once deliveries may result in retries.",
  },
  {
    q: "Is delivery ordering strictly guaranteed?",
    a: "No. Network routes vary. Check the explicit timestamp field inside the resource payload to resolve correct state progression.",
  },
  {
    q: "What happens if my endpoint receptor goes offline?",
    a: "The retry backoff scheduler retries failing dispatches over 24 hours. After 24 hours, events transition to expired states.",
  },
  {
    q: "How long is failed delivery history retained?",
    a: "All retry and simulation logs are kept in your secure audit register for up to 7 days for troubleshooting purposes.",
  },
  {
    q: "When should Webhook Secrets be rotated?",
    a: "Secrets should be rotated periodically (e.g. every 90 days). Utilize dual secret windows if supported by your security pipelines.",
  },
  {
    q: "Can I subscribe to a specific sub-selection of events?",
    a: "Yes. Use our deterministic registration UI to subscribe only to exact, qualified events needed by your downstream integrations.",
  },
  {
    q: "Is there a simulator to test configuration state?",
    a: "Yes, use our simulation testing panels to immediately dispatch synthetic payloads without triggering live sensor alerts.",
  },
  {
    q: "Are there automated remediation boundaries?",
    a: "Absolutely. Write and containment actions are strictly policy-bound and require dual-approver confirmation parameters before execution.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <Section>
      <SectionHeader eyebrow="Technical FAQ" title="Frequently Asked Questions" />

      <div className="flex flex-col gap-4 w-full">
        {faqs.map((f, i) => {
          const open = openIndex === i;
          return (
            <Reveal key={f.q} delay={i * 0.03}>
              <div className={cardClass}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  aria-controls={`wh-faq-${i}`}
                  className={`w-full flex items-center justify-between gap-4 px-6 pt-6 text-left ${open ? "pb-2" : "pb-6"}`}
                >
                  <span className="font-manrope font-bold text-[15px] lg:text-[16px] text-[#0a2029]">{f.q}</span>
                  {open ? (
                    <Minus className="size-5 text-[#c44242] shrink-0" />
                  ) : (
                    <Plus className="size-5 text-[#5b6670] shrink-0" />
                  )}
                </button>
                <div id={`wh-faq-${i}`} hidden={!open} className="px-6 pb-6">
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
