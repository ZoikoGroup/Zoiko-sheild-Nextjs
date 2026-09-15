"use client";

import Image from "next/image";

export default function DetectionCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      {/* Background Image */}
      <Image
        src="/images/detection-and-response/background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Light Dark Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.20) 45%, rgba(15,23,42,0.08) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-[1440px] flex-col items-center justify-center gap-5 overflow-hidden px-5 py-16 text-center sm:px-8 md:px-16 lg:px-28 lg:py-20 xl:px-64 xl:py-24">
        {/* Eyebrow */}
        <div className="text-xs font-normal uppercase tracking-wide text-red-400">
          See detection decisions in context
        </div>

        {/* Heading */}
        <h2 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Build response around evidence and human authority.
        </h2>

        {/* Description */}
        <p className="max-w-3xl text-base font-normal leading-7 text-slate-300 sm:text-lg">
          Explore an inspectable path from source signal to governed action—
          without turning uncertainty into an autonomous decision.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/request-a-demo"
            className="inline-flex h-12 items-center justify-center rounded-md bg-red-500 px-7 text-sm font-semibold text-white transition hover:bg-red-400"
          >
            Book a Demo
          </a>

          <a
            href="/platform"
            className="inline-flex h-12 items-center justify-center rounded-md border border-slate-400/60 bg-slate-900/30 px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-slate-900/50"
          >
            Explore the Platform
          </a>
        </div>
      </div>
    </section>
  );
}