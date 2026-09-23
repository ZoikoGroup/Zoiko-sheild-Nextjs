import React from "react";

const pipelineSteps = [
  {
    number: "01",
    title: "Intake",
    description: "User logs observed posture conflict",
  },
  {
    number: "02",
    title: "Triage",
    description: "System verifies directory scope",
  },
  {
    number: "03",
    title: "Investigate",
    description: "Query sensor health on device",
  },
  {
    number: "04",
    title: "Collaborate",
    description: "Supervisor signs approval request",
  },
  {
    number: "05",
    title: "Escalate",
    description: "Route to verified domain analyst",
  },
  {
    number: "06",
    title: "Resolve",
    description: "Remediation executed & verified",
  },
  {
    number: "07",
    title: "Learn",
    description: "Evidence added to ledger immutably",
  },
];

export default function TransparentLifecyclePipeline() {
  return (
    <div className="bg-[#F6F4EE] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-6">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            TRANSPARENT LIFECYCLE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            The verified direct-to-evidence pipeline
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            How Zoiko Shield processes and remediates unmanaged device states
            from intake to cryptographic learn.
          </p>
        </div>

        {/* 7 Cards Grid (Responsive layout fitting 7 items nicely) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {pipelineSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <p className="text-sm font-mono font-bold text-[#C53030] mb-3">
                  {step.number}
                </p>
                <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
