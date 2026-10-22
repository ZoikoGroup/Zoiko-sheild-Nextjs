import React from "react";

const steps = [
  {
    number: "01",
    title: "Your security priorities",
    description: "Tell us the workflows and outcomes that matter most.",
  },
  {
    number: "02",
    title: "Platform walkthrough",
    description:
      "Follow a connected detection, investigation and response story.",
  },
  {
    number: "03",
    title: "Trust and assurance",
    description: "Discuss governance, evidence, integrations and next steps.",
  },
];

export default function ADemonstrationShapedAroundYourSecurityPriorities() {
  return (
    <div className="bg-[#F2F6F7] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-6xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            WHAT TO EXPECT
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            A demonstration shaped around your security priorities
          </h1>
          <p className="text-[#4B5563] text-sm max-w-xl md:text-base leading-relaxed">
            We will walk through a realistic, illustrative security workflow and
            answer questions about your use case, operating model and evaluation
            criteria.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] overflow-hidden">
          <div className="divide-y divide-[#E5E7EB]">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
              >
                <div className="text-xs font-bold text-[#C53030] font-mono tracking-wider w-8 shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111827] tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#4B5563]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Notice */}
          <div className="bg-[#F2F6F7] border-t border-[#E5E7EB] p-6 text-xs text-[#6B7280]">
            The demonstration may use synthetic example data. Product
            availability and deployment options will be confirmed during
            evaluation.
          </div>
        </div>
      </div>
    </div>
  );
}
