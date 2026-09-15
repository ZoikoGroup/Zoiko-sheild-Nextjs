"use client";

import { Shield } from "lucide-react";

export default function GovernResponse() {
  const backgroundImage =
    "/images/consolidate-security-operations/background1.png";

  const normalImage =
    "/images/consolidate-security-operations/govern-response.png";

  const authorityModes = [
    "Advisory",
    "Review-required",
    "Approval-required",
    "Pre-authorized delegated",
    "Emergency overlay",
    "Prohibited",
    "Customer-executed",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 px-28 py-20">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 z-[1] bg-slate-900/55" />

      {/* Main Content */}
      <div className="relative z-10 flex w-full flex-col items-start justify-start gap-7">
        {/* Header */}
        <div className="flex w-full flex-col items-start justify-start gap-3.5 overflow-hidden">
          {/* Eyebrow */}
          <div className="flex items-center justify-start gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-400" />

            <div className="font-['JetBrains_Mono'] text-xs font-medium uppercase text-red-400">
              Govern response
            </div>
          </div>

          {/* Heading */}
          <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-white">
            Authority before action. Receipts after execution.
          </h2>

          {/* Description */}
          <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-white/70">
            Separate what a connector can technically do from what people have
            explicitly authorized it to do.
          </p>
        </div>

        {/* Main Two Column Area */}
        <div className="flex w-full items-start justify-center gap-8 overflow-hidden">
          {/* Normal Image */}
          <div className="w-[560px] shrink-0">
            <img
              src={normalImage}
              alt="Govern response"
              className="h-96 w-[560px] rounded-[20px] object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="flex w-[608px] flex-col items-start justify-start gap-16">
            {/* Authority Modes */}
            <div className="flex w-full flex-wrap content-start items-start justify-start gap-2.5 overflow-hidden">
              {authorityModes.map((mode) => (
                <div
                  key={mode}
                  className="flex items-start justify-start overflow-hidden rounded-[999px] bg-white/5 px-3 py-2 outline outline-1 outline-offset-[-1px] outline-white/10"
                >
                  <div className="font-['Manrope'] text-xs font-semibold text-white">
                    {mode}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Cards */}
            <div className="flex w-[592px] flex-col items-start justify-start gap-4 overflow-hidden">
              {/* Action Stages */}
              <div className="flex h-28 w-[591px] flex-col items-start justify-start gap-2.5 overflow-hidden rounded-2xl bg-white/5 p-5 outline outline-1 outline-offset-[-1px] outline-white/10">
                <div className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-white">
                  Action stages
                </div>

                <div className="w-full font-['Manrope'] text-xs font-normal leading-5 text-white/70">
                  Definition · Preconditions · Preview · Authorization ·
                  Re-authentication · Execution · Result · Receipt ·
                  Validation · Follow-up
                </div>
              </div>

              {/* Failure Handling */}
              <div className="flex h-28 w-[591px] flex-col items-start justify-start gap-2.5 overflow-hidden rounded-2xl bg-white/5 p-5 outline outline-1 outline-offset-[-1px] outline-white/10">
                <div className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-white">
                  Failure handling
                </div>

                <div className="w-full font-['Manrope'] text-xs font-normal leading-5 text-white/70">
                  Precondition failed · connector unavailable · timeout ·
                  partial success · rollback · forward fix · manual recovery ·
                  reconciliation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="flex w-full items-center justify-start gap-3 overflow-hidden rounded-2xl bg-white/5 p-4 outline outline-1 outline-offset-[-1px] outline-white/10">
          {/* Shield Icon */}
          <div className="flex h-5 w-5 shrink-0 items-center justify-center">
            <Shield
              size={19}
              strokeWidth={1.5}
              className="text-red-400"
            />
          </div>

          {/* Note Text */}
          <div className="flex-1 font-['Manrope'] text-sm font-bold leading-5 text-white">
            The existence of an integration does not authorize actions — each
            action class requires its own authority.
          </div>
        </div>
      </div>
    </section>
  );
}