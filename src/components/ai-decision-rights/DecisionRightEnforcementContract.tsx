import React from "react";
import Image from "next/image";

const contractSteps = [
  {
    number: "01",
    title: "CLASSIFY",
    description: "Current policy + use case",
  },
  {
    number: "02",
    title: "EXPLAIN",
    description: "Show right + reason",
  },
  {
    number: "03",
    title: "GATE",
    description: "Review / approval / block",
  },
  {
    number: "04",
    title: "REVALIDATE",
    description: "Scope + policy + context",
  },
  {
    number: "05",
    title: "RECORD",
    description: "Decision + override + history",
  },
];

export default function DecisionRightEnforcementContract() {
  return (
    <div className="relative text-white px-6 py-20 md:py-28 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/images/decision/3.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Darkness / Dimming Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B2732F2] to-[#0B2732D1] backdrop-brightness-75" />

      <div className="w-full max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#5FE3C5] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#5FE3C5]"></span>
            PROOF
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight mb-3">
            DECISION-RIGHT ENFORCEMENT CONTRACT
          </h1>
          <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed">
            A visible, attributable contract from classification to durable
            record.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {contractSteps.map((step, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF0D] border border-[#FFFFFF24] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col justify-between"
            >
              <div>
                <p className="text-[#5FE3C5] text-xs font-bold tracking-wider mb-4">
                  {step.number}
                </p>
                <h3 className="text-base font-bold text-white tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-[#9CA3AF] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer Note */}
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm text-[#5FE3C5] leading-relaxed">
            No self-approval. No permissive default when a class is unknown. No
            inference of approval from urgency, confidence, user silence or tool
            availability. Technical write access does not create organizational
            authority.
          </p>
        </div>
      </div>
    </div>
  );
}
