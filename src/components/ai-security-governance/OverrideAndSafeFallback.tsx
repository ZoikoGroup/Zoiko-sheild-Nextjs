import React from "react";
import Image from "next/image";

export default function OverrideAndSafeFallback() {
  const fallbackItems = [
    { number: "01", text: "Reject – decline the output" },
    { number: "02", text: "Correct – preserve an authorized correction" },
    { number: "03", text: "Stop – end the current use" },
    { number: "04", text: "Escalate – route to the correct authority" },
  ];

  return (
    <section className="relative w-full bg-[#0B2732C7] overflow-hidden flex items-center justify-center font-sans">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ai-security/3.png"
          alt="AI Security Background"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2732C7] via-[#0B2732C7]/80 to-[#0B2732C7]/90" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Heading & Text Content */}
        <div className="flex-1 flex flex-col items-start max-w-[620px]">
          {/* Subtitle with accent bar */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#10b981]" />
            <span className="text-[#10b981] font-mono text-xs tracking-[0.2em] uppercase">
              OVERRIDE AND SAFE FALLBACK
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-[52px] font-normal tracking-tight leading-[1.1] mb-6">
            Human command persists through failure.
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#94a3b8] text-base lg:text-[17px] leading-relaxed mb-8 font-light">
            Fallback identifies the trigger, fallback type, available inputs,
            lost capability, continuing authority and recovery. Regenerate,
            Disable and Revert appear only when supported.
          </p>

          {/* Quote Box */}
          <blockquote className="relative pl-6 py-1">
            <p className="text-white text-lg lg:text-[19px] leading-relaxed italic font-normal">
              &ldquo;When grounding, model, tool, permission, decision-right
              policy or approval is uncertain, the product becomes more explicit
              and less autonomous — never more capable by default.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Right Column: Interactive / List Options */}
        <div className="w-full lg:w-[540px] flex flex-col gap-4">
          {fallbackItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group relative flex items-center px-6 py-4 rounded-xl bg-[#FFFFFF0D] hover:bg-[#162533]/80 border border-[#FFFFFF24] hover:border-[#10b981]/40 transition-all duration-300 shadow-lg"
            >
              {/* Number Prefix */}
              <span className="font-mono text-sm text-[#10b981] font-medium mr-6 tracking-wider">
                {item.number}
              </span>

              {/* Item Text */}
              <span className="text-white text-base lg:text-[17px] font-light tracking-wide group-hover:text-[#e2e8f0] transition-colors">
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
