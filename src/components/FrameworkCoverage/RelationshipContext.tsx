import React from "react";
import Image from "next/image";

const contextCardsData = [
  {
    number: "01",
    title: "Mapping context",
    description:
      "See how a cited reference relates to controls, assessments, or service support. Every mapping retains its source, exact edition, scope, exclusions, and review state.",
    linkText: "Compliance Control Plane →",
  },
  {
    number: "02",
    title: "Evidence context",
    description:
      "Approved evidence records preserve lineage, verification, completeness boundaries, and package context. Evidence is context—not certification or a compliance verdict.",
    linkText: "Evidence Ledger & Verification →",
  },
];

export default function RelationshipContext() {
  return (
    <div className="relative bg-[#0A2029C9] text-white px-6 py-16 md:px-16 lg:px-24 font-sans antialiased flex justify-center">
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/framework/2.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="w-full max-w-6xl">
        {/* Header section */}
        <div className="max-w-2xl mb-12">
          <p className="text-[#E0967D] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            RELATIONSHIP CONTEXT
          </p>
          <h1 className="text-4xl md:text-[40px] font-bold tracking-tight text-white leading-tight mb-4">
            Trace the relationship. Keep the boundary.
          </h1>
          <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed">
            Mapped-to, related evidence, assessment context, and service support
            describe different relationships. None implies equivalence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contextCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white text-[#111827] rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-bold text-[#C53030] tracking-wider mb-3">
                  {card.number}
                </p>
                <h3 className="text-2xl font-bold text-[#111827] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#4B5563] text-sm md:text-base leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              <div>
                <a
                  href="#"
                  className="text-sm font-semibold text-[#C53030] hover:opacity-80 transition-opacity inline-flex items-center"
                >
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
