"use client";

import React from "react";
import Link from "next/link";
import SectionEyebrow from "./SectionEyebrow";

type Route = {
  title: string;
  description: string;
  icon: React.ReactNode;
  /** Internal route, or null when no page exists for it yet. */
  href: string | null;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "size-5",
  "aria-hidden": true,
};

const ROUTES: Route[] = [
  {
    title: "Trust Center",
    description: "Security and privacy posture",
    href: null,
    icon: (
      <svg {...iconProps}>
        <path d="M12 2.5 4.5 5.5v5.2c0 4.6 3.1 8.9 7.5 10.3 4.4-1.4 7.5-5.7 7.5-10.3V5.5L12 2.5Z" />
        <path d="m9.2 11.8 2 2 3.6-3.6" />
      </svg>
    ),
  },
  {
    title: "Evidence",
    description: "Governed source records",
    href: "/evidence-ledger-verification",
    icon: (
      <svg {...iconProps}>
        <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
        <path d="M14 3v4h4" />
        <circle cx="11" cy="14" r="2.2" />
        <path d="m12.8 15.8 1.7 1.7" />
      </svg>
    ),
  },
  {
    title: "Docs",
    description: "Service and platform guidance",
    href: null,
    icon: (
      <svg {...iconProps}>
        <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
        <path d="M14 3v4h4" />
        <path d="M9 12h6M9 15.5h6M9 8.5h2" />
      </svg>
    ),
  },
  {
    title: "System Status",
    description: "Live availability history",
    href: null,
    icon: (
      <svg {...iconProps}>
        <path d="M3 12h3.5l2-6 3.5 12 2.5-8 1.8 2h4.7" />
      </svg>
    ),
  },
];

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5 shrink-0 text-[#6B7280]"
      aria-hidden="true"
    >
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export default function TrustAndProofSection() {
  return (
    <section className="bg-[#EEEBE7] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionEyebrow label="Trust + proof" tone="teal" />

        <h2 className="mb-4 font-hanken text-2xl font-extrabold leading-tight tracking-tight text-[#0B2530] sm:text-3xl lg:text-4xl">
          Verify the claim. Follow the source.
        </h2>

        <p className="mb-8 max-w-2xl font-manrope text-sm leading-relaxed text-[#6B7280] sm:text-base">
          Buyer-facing proof routes expose security, privacy and assurance
          context without hiding boundaries.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROUTES.map((route) => {
            const body = (
              <>
                <span className="mb-4 flex text-[#C53B3B]">{route.icon}</span>
                <span className="mb-2 flex items-center gap-1.5 font-hanken text-base font-bold text-[#0B2530] sm:text-lg">
                  {route.title}
                  <ExternalIcon />
                </span>
                <span className="block font-manrope text-sm leading-6 text-[#6B7280]">
                  {route.description}
                </span>
              </>
            );

            const className =
              "group rounded-2xl border border-[#0B2530]/10 bg-white p-5 transition-colors hover:border-[#C53B3B]/40";

            return route.href ? (
              <Link key={route.title} href={route.href} className={className}>
                {body}
              </Link>
            ) : (
              <a key={route.title} href="#" className={className}>
                {body}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
