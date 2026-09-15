"use client";

import React from "react";
import Link from "next/link";
import SectionEyebrow from "./SectionEyebrow";

const PATHS: {
  kicker: string;
  title: string;
  body: string;
  meta: string;
}[] = [
  {
    kicker: "Assurance-led entry offer",
    title: "Continuous Assurance",
    body: "Governed evidence, control context, attributable review and accountable follow-through.",
    meta: "Independent path • Scope-led • Human authority",
  },
  {
    kicker: "Security-led entry offer",
    title: "Managed Defense",
    body: "Security operations support focused on defense, detection and response.",
    meta: "Independent path • Security-led • Separate scope",
  },
];

export default function CompareStartingPathsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B2530] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <img
        src="/images/continuous-assurance/compare-paths-bg.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[#0B2530]/35"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl">
        <SectionEyebrow label="Compare starting paths" tone="light" />

        <h2 className="mb-4 font-hanken text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          Two independent ways to begin.
        </h2>

        <p className="mb-8 max-w-2xl font-manrope text-sm leading-relaxed text-white/70 sm:text-base">
          Equal peer paths with distinct service identities. Neither is selected
          by default, and neither is a prerequisite for the other.
        </p>

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PATHS.map((path) => (
            <div
              key={path.title}
              className="rounded-2xl border border-white/15 bg-[#0B2530]/55 p-5 backdrop-blur-md sm:p-7"
            >
              <p className="mb-4 font-jetbrains text-[11px] uppercase tracking-wide text-white/60">
                {path.kicker}
              </p>
              <h3 className="mb-4 font-hanken text-xl font-extrabold text-white sm:text-2xl">
                {path.title}
              </h3>
              <p className="mb-4 font-manrope text-sm leading-6 text-white/75">
                {path.body}
              </p>
              <p className="font-manrope text-xs text-white/55">{path.meta}</p>
            </div>
          ))}
        </div>

        <Link
          href="/compare-starting-paths"
          className="inline-block rounded-[10px] border border-white/30 px-6 py-3.5 font-manrope text-sm font-bold text-white transition-colors hover:bg-white/10"
        >
          Compare starting paths
        </Link>
      </div>
    </section>
  );
}
