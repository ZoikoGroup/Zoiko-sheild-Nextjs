"use client";

import { Shield } from "lucide-react";

export default function OperatingModel() {
  const roles = [
    "Security ops owner",
    "Detection engineer",
    "Analyst",
    "Case owner",
    "Integration owner",
    "Action approver",
    "System owner",
    "Service provider",
    "Customer executive",
    "AI assistant",
  ];

  return (
    <section className="w-full overflow-hidden bg-stone-200 px-28 py-20">
      <div className="flex w-full flex-col items-start justify-start gap-7">
        {/* Header */}
        <div className="flex w-full flex-col items-start justify-start gap-3.5 overflow-hidden">
          {/* Eyebrow */}
          <div className="flex items-center justify-start gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-500" />

            <div className="font-['JetBrains_Mono'] text-xs font-medium uppercase text-red-500">
              Operating model + services
            </div>
          </div>

          {/* Heading */}
          <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
            Clear roles. Separate services. No forced rip-and-replace.
          </h2>

          {/* Description */}
          <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-gray-500">
            Consolidate Security Operations is an outcome-led solution. Managed
            Defense is an independent service — they are not bundled.
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex w-full items-start justify-start gap-4">
          {/* Consolidate Security Operations */}
          <div className="flex-1 overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_12px_36px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <div className="flex flex-col items-start justify-start gap-2.5">
              <div className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
                Consolidate Security Operations
              </div>

              <div className="w-full font-['Manrope'] text-xs font-normal leading-5 text-gray-500">
                Outcome-led coordination across approved tools, signals, cases
                and governed response.
              </div>
            </div>
          </div>

          {/* Managed Defense */}
          <div className="flex-1 overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_12px_36px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <div className="flex flex-col items-start justify-start gap-2.5">
              <div className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
                Managed Defense
              </div>

              <div className="w-full font-['Manrope'] text-xs font-normal leading-5 text-gray-500">
                Independent service with separately verified service coverage
                and contract.
              </div>
            </div>
          </div>

          {/* Adjacent Capabilities */}
          <div className="flex-1 overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_12px_36px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <div className="flex flex-col items-start justify-start gap-2.5">
              <div className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
                Adjacent capabilities
              </div>

              <div className="w-full font-['Manrope'] text-xs font-normal leading-5 text-gray-500">
                Continuous Assurance · Evidence · Compliance · Risk — each
                remains separate.
              </div>
            </div>
          </div>
        </div>

        {/* Roles */}
        <div className="flex w-full flex-wrap content-start items-start justify-start gap-2.5 overflow-hidden">
          {roles.map((role) => (
            <div
              key={role}
              className="flex items-start justify-start overflow-hidden rounded-[999px] bg-white px-3 py-2 outline outline-1 outline-offset-[-1px] outline-cyan-950/10"
            >
              <div className="font-['Manrope'] text-xs font-semibold text-cyan-950">
                {role}
              </div>
            </div>
          ))}
        </div>

        {/* Existing SOC / SIEM / EDR Coexistence */}
        <div className="flex w-full flex-col items-start justify-start gap-2.5 overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_12px_36px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
          <div className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
            Existing SOC / SIEM / EDR coexistence
          </div>

          <div className="w-full font-['Manrope'] text-xs font-normal leading-5 text-gray-500">
            Use the operating stack you already trust. Connect where verified,
            preserve ownership, and avoid unnecessary replacement.
          </div>
        </div>

        {/* Bottom Note */}
        <div className="flex w-full items-center justify-start gap-3 overflow-hidden rounded-2xl bg-gray-200 p-4 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
          {/* Shield Icon */}
          <Shield
            size={20}
            strokeWidth={1.5}
            className="shrink-0 text-teal-700"
          />

          <div className="flex-1 font-['Manrope'] text-sm font-bold leading-5 text-slate-900">
            No bundle; no implied replacement; coexistence where verified.
          </div>
        </div>
      </div>
    </section>
  );
}