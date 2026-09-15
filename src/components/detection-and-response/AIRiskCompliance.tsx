"use client";

import Image from "next/image";

const SECTION_IMAGE = "/images/detection-and-response/ai-risk.png";
const BG_IMAGE = "/images/detection-and-response/bg2.png";

const relationships = [
  {
    title: "AI-Assisted Investigation",
    description:
      "Bounded, cited and overridable—no autonomous incident determination.",
    highlighted: true,
  },
  {
    title: "Risk Intelligence",
    description:
      "Findings may inform risk review—no automatic risk score.",
    highlighted: false,
  },
  {
    title: "Compliance",
    description:
      "Detection does not establish compliance status.",
    highlighted: false,
  },
  {
    title: "Trust Center",
    description:
      "Authoritative public assurance disclosures.",
    highlighted: false,
  },
];

export default function AIRiskCompliance() {
  return (
    <section className="relative w-full overflow-hidden bg-teal-950">
      {/* Background Image */}
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-teal-950/50" />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[1440px] items-start gap-16 overflow-hidden px-28 py-24">
        {/* Left Image */}
        <div className="flex h-96 w-96 shrink-0 overflow-hidden rounded-[20px] bg-white/5 p-3.5 outline outline-1 outline-offset-[-1px] outline-white/10">
          <div className="relative flex-1 overflow-hidden rounded-2xl">
            <Image
              src={SECTION_IMAGE}
              alt="AI, risk and compliance relationships"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-7 overflow-hidden">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-500" />

            <div className="font-['JetBrains_Mono'] text-xs font-normal uppercase text-red-400">
              09 · AI / risk / compliance relationships
            </div>
          </div>

          {/* Heading + Description */}
          <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
            <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-white">
              Assistive intelligence, separate authorities.
            </h2>

            <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-white/95">
              Each relationship has a defined boundary; none silently changes
              the state of another system.
            </p>
          </div>

          {/* Relationship Cards */}
          <div className="flex w-full flex-wrap content-start items-start gap-4 overflow-hidden">
            {relationships.map((relationship) => (
              <div
                key={relationship.title}
                className={`flex h-36 w-80 shrink-0 flex-col items-start overflow-hidden rounded-2xl outline outline-1 outline-offset-[-1px] ${
                  relationship.highlighted
                    ? "bg-cyan-950 outline-white/10"
                    : "bg-white/5 outline-white/10"
                }`}
              >
                <div className="flex h-36 w-full flex-col items-start gap-3 overflow-hidden rounded-2xl p-6">
                  <div className="w-full font-['Hanken_Grotesk'] text-xl font-extrabold text-white">
                    {relationship.title}
                  </div>

                  <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-white/60">
                    {relationship.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}