"use client";

import React from "react";
import Link from "next/link";
import SectionEyebrow from "./SectionEyebrow";
import BoundaryNotice from "./BoundaryNotice";

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5 shrink-0"
      aria-hidden="true"
    >
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export default function HowRecordsConnectSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B2530] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <img
        src="/images/continuous-assurance/records-connect-bg.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[#0B2530]/45"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl">
        <SectionEyebrow label="How records connect" tone="light" />

        <h2 className="mb-4 font-hanken text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          Context connects. Authority stays bounded.
        </h2>

        <p className="mb-8 max-w-2xl font-manrope text-sm leading-relaxed text-white/70 sm:text-base">
          Continuous Assurance can use approved context from the Compliance
          Control Plane and organize governed records from the Evidence Ledger.
        </p>

        <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-16">
          <div className="rounded-2xl border border-white/15 bg-[#0B2530]/55 p-5 backdrop-blur-md sm:p-6">
            <h3 className="mb-3 font-hanken text-base font-bold text-white sm:text-lg">
              Compliance Control Plane
            </h3>
            <p className="font-manrope text-sm leading-6 text-white/70">
              Approved control, mapping, test, assessment and exception context
              can support the service. Participation does not automatically set
              compliance states.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-[#0B2530]/55 p-5 backdrop-blur-md sm:p-6">
            <h3 className="mb-3 font-hanken text-base font-bold text-white sm:text-lg">
              Evidence Ledger
            </h3>
            <p className="font-manrope text-sm leading-6 text-white/70">
              Evidence may be organized and reviewed when authorized.
              ZoikoShield does not own evidence truth; source, custody and
              authority remain visible.
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/compliance-control-plane"
            className="inline-flex items-center gap-1.5 font-manrope text-sm font-bold text-[#E8A398] transition-colors hover:text-white"
          >
            Compliance platform
            <ExternalIcon />
          </Link>
          <Link
            href="/evidence-ledger-verification"
            className="inline-flex items-center gap-1.5 font-manrope text-sm font-bold text-[#E8A398] transition-colors hover:text-white"
          >
            Evidence platform
            <ExternalIcon />
          </Link>
        </div>

        <BoundaryNotice onDark>
          Participation in Continuous Assurance does not set a control to
          compliant, effective or certified.
        </BoundaryNotice>
      </div>
    </section>
  );
}
