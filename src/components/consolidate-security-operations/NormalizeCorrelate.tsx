"use client";

import Image from "next/image";

const cards = [
  {
    title: "Telemetry ingestion",
    description:
      "Source events · received time · schema version · parser / transform · normalized fields · raw / source reference",
  },
  {
    title: "Correlation objects",
    description:
      "User / account · Device / endpoint · Cloud resource · Application / service · IP / network · Email / domain",
  },
  {
    title: "Signal correlation",
    description:
      "Cluster ID · underlying records · relationship reason · scope · source severities preserved",
  },
];

export default function NormalizeCorrelate() {
  return (
    <section className="relative w-full overflow-hidden bg-teal-950/80">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/consolidate-security-operations/background.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Teal Overlay */}
      <div className="absolute inset-0 bg-teal-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start gap-7 overflow-hidden px-28 py-20">
        {/* Heading */}
        <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-400" />

            <div className="font-['JetBrains_Mono'] text-xs font-medium uppercase text-red-400">
              Normalize and correlate
            </div>
          </div>

          {/* Title */}
          <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-white">
            Build context. Preserve identity.
          </h2>

          {/* Description */}
          <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-white/70">
            Interpret telemetry into a useful operating view while retaining
            every raw source reference and severity.
          </p>
        </div>

        {/* Cards */}
        <div className="flex w-full items-start gap-4 overflow-hidden">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-1 flex-col items-start gap-2.5 overflow-hidden rounded-2xl bg-white/5 p-5 outline outline-1 outline-offset-[-1px] outline-white/10"
            >
              <h3 className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-white">
                {card.title}
              </h3>

              <p className="w-full font-['Manrope'] text-xs font-normal leading-5 text-white/70">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Normal Image */}
        <div className="relative h-96 w-full overflow-hidden rounded-[20px]">
          <Image
            src="/images/consolidate-security-operations/normalize-correlate.png"
            alt="Normalize and correlate security operations"
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1200px"
          />
        </div>

        {/* Information Note */}
        <div className="flex w-full items-center gap-3 overflow-hidden rounded-2xl bg-white/5 p-4 outline outline-1 outline-offset-[-1px] outline-white/10">
          <div className="relative h-5 w-5 shrink-0 overflow-hidden">
            <div className="absolute left-[3.33px] top-[1.66px] h-4 w-3.5 rounded-[2px] outline outline-1 outline-offset-[-0.5px] outline-red-400" />
          </div>

          <div className="flex-1 font-['Manrope'] text-sm font-bold leading-5 text-white">
            Normalization is interpretation, not replacement for source
            evidence.
          </div>
        </div>
      </div>
    </section>
  );
}