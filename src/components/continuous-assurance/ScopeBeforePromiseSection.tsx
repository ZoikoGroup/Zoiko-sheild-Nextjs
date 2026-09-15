"use client";

import React from "react";
import SectionEyebrow from "./SectionEyebrow";
import BoundaryNotice from "./BoundaryNotice";

const IDENTITY_FIELDS = [
  "service_id",
  "display_name",
  "service_purpose",
  "included_scope",
  "excluded_scope",
  "eligibility",
  "engagement_modes",
  "delivery_owner",
  "customer_roles",
  "third_party_roles",
  "regions / languages",
  "review_date",
];

const ENGAGEMENT_RECORD = [
  "Engagement ID + authority",
  "Approved service scope",
  "Customer + third-party roles",
  "Evidence sources + access boundaries",
  "Review cadence + milestones",
  "Decision owners + escalation",
  "Output classes + states",
  "Limitations + expiry",
];

export default function ScopeBeforePromiseSection() {
  return (
    <section className="bg-[#F5F2EB] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionEyebrow label="Scope before promise" tone="red" />

        <h2 className="mb-4 font-hanken text-2xl font-extrabold leading-tight tracking-tight text-[#0B2530] sm:text-3xl lg:text-4xl">
          Define the service boundary first.
        </h2>

        <p className="mb-8 max-w-2xl font-manrope text-sm leading-relaxed text-[#6B7280] sm:text-base">
          Required identity and engagement inputs are recorded before any
          service promise is made.
        </p>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
          <div className="rounded-2xl border border-[#0B2530]/10 bg-white p-5 sm:p-7 lg:col-span-7">
            <h3 className="mb-4 font-hanken text-lg font-extrabold text-[#0B2530] sm:text-xl">
              Service identity fields
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {IDENTITY_FIELDS.map((field) => (
                <li
                  key={field}
                  className="rounded-lg bg-[#F5F2EB] px-3.5 py-3 font-jetbrains text-xs text-[#0B2530]"
                >
                  {field}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#0B2530] p-5 sm:p-7 lg:col-span-5">
            <h3 className="mb-2 font-hanken text-lg font-extrabold text-white sm:text-xl">
              Engagement record
            </h3>
            <ul>
              {ENGAGEMENT_RECORD.map((item) => (
                <li
                  key={item}
                  className="border-b border-white/10 py-3.5 font-manrope text-sm text-white/80 last:border-b-0"
                >
                  <span className="mr-2 text-[#7FD1C1]" aria-hidden="true">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <BoundaryNotice>
          Page shows exactly which scope fields must be defined before a service
          promise.
        </BoundaryNotice>
      </div>
    </section>
  );
}
