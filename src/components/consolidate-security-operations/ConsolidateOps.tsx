"use client";

import Image from "next/image";

export default function ConsolidateOps() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-start gap-16 overflow-hidden px-28 py-20">
        {/* Left Content */}
        <div className="flex w-[580px] shrink-0 flex-col items-start gap-6 overflow-hidden">
          {/* Heading Group */}
          <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="h-0.5 w-5 bg-red-500" />

              <div className="font-['JetBrains_Mono'] text-xs font-medium uppercase text-red-500">
                Consolidate Security Operations
              </div>
            </div>

            {/* Heading */}
            <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
              Connect security operations without losing source truth or
              decision authority.
            </h2>
          </div>

          {/* Description */}
          <p className="w-full font-['Manrope'] text-lg font-normal leading-7 text-gray-500">
            Bring approved security tools, signals, cases and response
            workflows into a governed operating model that preserves source
            identity, ownership, evidence and explicit action authority.
          </p>

          {/* Buttons */}
          <div className="flex items-start gap-3.5 overflow-hidden">
            {/* Primary Button */}
            <button
              type="button"
              className="flex h-12 items-center justify-center rounded-[10px] bg-red-500 px-6 font-['Manrope'] text-sm font-bold text-white outline outline-1 outline-offset-[-1px] outline-black/0"
            >
              Book a Demo
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              className="flex h-12 items-center justify-center rounded-[10px] bg-transparent px-6 font-['Manrope'] text-sm font-bold text-cyan-950 outline outline-1 outline-offset-[-1px] outline-cyan-950"
            >
              Explore Detection &amp; Response
            </button>
          </div>

          {/* Disclaimer */}
          <p className="w-full font-['Manrope'] text-xs font-normal leading-4 text-gray-500">
            Connector support, data modes, response actions, service coverage
            and regions vary by verified configuration and contract.
          </p>
        </div>

        {/* Image */}
        <div className="relative h-[510px] min-w-0 flex-1 overflow-hidden rounded-[20px]">
          <Image
            src="/images/consolidate-security-operations/hero.png"
            alt="Consolidate Security Operations"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1440px) 50vw, 556px"
          />
        </div>
      </div>
    </section>
  );
}