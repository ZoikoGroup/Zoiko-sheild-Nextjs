"use client";

import Image from "next/image";

const responseLevels = [
  {
    title: "R0 · Advisory",
    description: "Recommend only",
    active: false,
  },
  {
    title: "R1 · Review-required",
    description: "Prepare bounded action",
    active: false,
  },
  {
    title: "R2 · Approval-required",
    description: "Named authority must approve",
    active: true,
  },
  {
    title: "R3 · Pre-authorized delegated",
    description: "Narrow reversible class",
    active: false,
  },
  {
    title: "R4 · Emergency overlay",
    description: "Only if explicit governance exists",
    active: false,
  },
  {
    title: "Prohibited",
    description: "Not allowed",
    active: false,
  },
];

const responseSteps = [
  "Definition",
  "Preconditions",
  "Preview",
  "Authorization",
  "Execution",
  "Result",
  "Receipt",
  "Validation",
  "Follow-up",
];

export default function GovernedResponse() {
  return (
    <section className="relative w-full overflow-hidden bg-teal-950">
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <Image
        src="/images/detection-and-response/bg1.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* =====================================================
          BACKGROUND OVERLAY
          Darker on the left, lighter on the right so the
          background image remains visible.
      ===================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,47,46,0.88) 0%, rgba(4,47,46,0.70) 35%, rgba(4,47,46,0.42) 65%, rgba(4,47,46,0.18) 100%)",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 overflow-hidden px-28 py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="h-0.5 w-5 bg-red-500" />

          <div className="font-['JetBrains_Mono'] text-xs font-normal uppercase text-red-400">
            06 · Governed response
          </div>
        </div>

        {/* Main Content */}
        <div className="flex w-full items-start gap-16 overflow-hidden">
          {/* Left Content */}
          <div className="flex w-96 shrink-0 flex-col items-start gap-5">
            <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
              <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-white">
                Automation is not authority.
              </h2>

              <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-white/70">
                Every consequential action inherits the decision-right model,
                including approval, execution scope, rollback and attestation.
              </p>
            </div>

            {/* Notice */}
            <div className="flex w-full flex-col items-start overflow-hidden rounded-2xl bg-red-500/25 p-4 outline outline-1 outline-offset-[-1px] outline-red-500/40">
              <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-white">
                Rollback and failure handling are defined before execution.
                Governed Response detail is available conditionally.
              </div>
            </div>
          </div>

          {/* =====================================================
              RESPONSE LEVELS
          ===================================================== */}
          <div className="flex min-w-0 flex-1 flex-col items-start gap-2.5 overflow-hidden">
            {responseLevels.map((level) => (
              <div
                key={level.title}
                className={`flex w-full items-start justify-between overflow-hidden rounded-[10px] px-4 py-3.5 outline outline-1 outline-offset-[-1px] ${
                  level.active
                    ? "bg-red-500/50 outline-white/10"
                    : "bg-cyan-950/75 outline-white/10"
                }`}
              >
                <div className="font-['Hanken_Grotesk'] text-base font-extrabold text-white">
                  {level.title}
                </div>

                <div className="font-['Manrope'] text-xs font-normal text-white/60">
                  {level.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            RESPONSE LIFECYCLE
        ===================================================== */}
        <div className="flex w-full items-start gap-2 overflow-hidden">
          {responseSteps.map((step, index) => (
            <div
              key={step}
              className="flex min-w-0 flex-1 flex-col items-start gap-2 overflow-hidden rounded-lg bg-white/5 p-3 outline outline-1 outline-offset-[-1px] outline-white/10"
            >
              <div className="font-['JetBrains_Mono'] text-[9px] font-normal text-red-400">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="w-full font-['Manrope'] text-xs font-bold text-white">
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}