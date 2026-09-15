"use client";

import Image from "next/image";

const fragmentationItems = [
  {
    title: "Sources",
    description:
      "Telemetry split across tools  →  Approved connection and source inventory",
  },
  {
    title: "Identity / asset context",
    description:
      "Different names for same subject  →  Governed correlation with provenance",
  },
  {
    title: "Queues",
    description:
      "Alerts split across consoles  →  Routing and linked state",
  },
  {
    title: "Cases",
    description:
      "Investigation history scattered  →  Case linkage and timeline continuity",
  },
  {
    title: "Tickets",
    description:
      "ITSM/security ownership diverges  →  System-of-record + sync rules",
  },
  {
    title: "Actions",
    description:
      "Different APIs/privileges  →  Action registry + authority by connector",
  },
  {
    title: "Evidence",
    description:
      "Facts/decisions hard to reconstruct  →  Attributable evidence and receipts",
  },
  {
    title: "Ownership",
    description:
      "Unclear next actor  →  Explicit RACI, queue and escalation",
  },
  {
    title: "Health",
    description:
      "Silent connector degradation  →  Visible coverage impact and fallback",
  },
];

export default function FragmentationMap() {
  return (
    <section className="w-full bg-stone-200">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 overflow-hidden px-28 py-20">
        {/* Heading */}
        <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-500" />

            <div className="font-['JetBrains_Mono'] text-xs font-medium uppercase text-red-500">
              Fragmentation map
            </div>
          </div>

          {/* Title */}
          <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
            See every break in the operating chain.
          </h2>

          {/* Description */}
          <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-gray-500">
            Map sources, queues, handoffs and ownership gaps — then define the
            governed treatment for each.
          </p>
        </div>

        {/* Fragmentation Image */}
        <div className="relative h-60 w-full overflow-hidden rounded-[20px]">
          <Image
            src="/images/consolidate-security-operations/fragmentation-map.png"
            alt="Fragmentation map"
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1200px"
          />
        </div>

        {/* Cards */}
        <div className="flex w-full flex-wrap content-start items-start gap-4">
          {fragmentationItems.map((item) => (
            <div
              key={item.title}
              className="flex h-36 w-96 flex-col items-start"
            >
              <div className="flex h-36 w-full flex-col items-start gap-2.5 overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_12px_36px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
                <h3 className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
                  {item.title}
                </h3>

                <p className="w-full font-['Manrope'] text-xs font-normal leading-5 text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}