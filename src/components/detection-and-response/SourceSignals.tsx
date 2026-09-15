"use client";

import Image from "next/image";

export default function Correlation() {
  return (
    <section className="relative w-full overflow-hidden bg-teal-950">
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <Image
        src="/images/detection-and-response/bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* =====================================================
          BACKGROUND OVERLAY
          Keeps the image clearly visible while maintaining
          the dark teal appearance.
      ===================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,47,46,0.82) 0%, rgba(4,47,46,0.60) 45%, rgba(4,47,46,0.35) 75%, rgba(4,47,46,0.20) 100%)",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-start gap-16 px-28 py-24">
        {/* =====================================================
            RELATIONSHIP VIEW CARD
        ===================================================== */}
        <div className="flex h-[470px] w-[560px] shrink-0 flex-col items-start gap-4 overflow-hidden rounded-[20px] bg-white/5 p-7 outline outline-1 outline-offset-[-1px] outline-white/10">
          <div className="font-['JetBrains_Mono'] text-xs font-normal text-red-400">
            RELATIONSHIP VIEW · CONFIDENCE 0.72
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/detection-and-response/relation.png"
              alt="Relationship view"
              fill
              sizes="560px"
              className="object-cover"
            />
          </div>

          <div className="flex items-start gap-2 overflow-hidden">
            <div className="font-['Manrope'] text-xs font-normal text-white">
              Observed
            </div>

            <div className="font-['Manrope'] text-xs font-normal text-red-400">
              ● Inferred
            </div>

            <div className="font-['Manrope'] text-xs font-normal text-white/40">
              ○ Unknown
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT CONTENT
        ===================================================== */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-500" />

            <div className="font-['JetBrains_Mono'] text-xs font-normal uppercase text-red-400">
              02 · Correlation
            </div>
          </div>

          {/* Heading + Description */}
          <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
            <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-white">
              Relationship is context—not a conclusion.
            </h2>

            <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-white/80">
              Entity correlation, signal correlation and clusters preserve
              lineage and uncertainty boundaries. Conditional: explore
              Security Analytics for rules, correlation and replay context.
            </p>
          </div>

          {/* =====================================================
              RELATIONSHIP TYPES
          ===================================================== */}
          <div className="flex w-full items-start gap-4">
            {/* Entity */}
            <div className="flex h-36 flex-1 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-cyan-950/80 p-6 outline outline-1 outline-offset-[-1px] outline-white/10">
              <div className="font-['Hanken_Grotesk'] text-xl font-extrabold text-white">
                Entity
              </div>

              <div className="w-48 font-['Manrope'] text-sm font-normal leading-5 text-white/60">
                Identity, device and resource relationships.
              </div>
            </div>

            {/* Signal */}
            <div className="flex flex-1 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-cyan-950/80 p-6 outline outline-1 outline-offset-[-1px] outline-white/10">
              <div className="font-['Hanken_Grotesk'] text-xl font-extrabold text-white">
                Signal
              </div>

              <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-white/60">
                Events related by time, scope and observable context.
              </div>
            </div>

            {/* Cluster */}
            <div className="flex flex-1 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-cyan-950/80 p-6 outline outline-1 outline-offset-[-1px] outline-white/10">
              <div className="font-['Hanken_Grotesk'] text-xl font-extrabold text-white">
                Cluster
              </div>

              <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-white/60">
                A reviewable relationship—not automatic causality.
              </div>
            </div>
          </div>

          {/* =====================================================
              WARNING
          ===================================================== */}
          <div className="flex w-full flex-col items-start overflow-hidden rounded-2xl bg-red-500/10 p-4 outline outline-1 outline-offset-[-1px] outline-red-500/40">
            <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-white">
              A correlated relationship is NOT automatically causality,
              compromise, attacker intent, or authorized response.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}