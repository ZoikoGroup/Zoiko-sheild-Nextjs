import React from "react";
import Link from "next/link";

const links = [
  {
    title: "Trust Center →",
    desc: "Operating practices, security and assurance context.",
    href: "/trust",
  },
  {
    title: "Evidence →",
    desc: "Verification, provenance and immutable evidence details.",
    href: "/verify-evidence",
  },
];

const mobileLinks: { title: string; href: string }[] = [
  { title: "Trust Center →", href: "/trust" },
  { title: "Evidence Ledger →", href: "/verify-evidence" },
  { title: "Security Practices →", href: "/trust" },
];

export function ProofLinksSection() {
  return (
    <section className="bg-[#f0ede6] w-full relative">
      <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#123b4c] opacity-[0.12]" />

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-[24px] items-start px-[22px] py-[56px] w-full">
        <div className="flex flex-col gap-[12px] items-center text-center w-full">
          <p className="font-jetbrains font-medium text-[12px] text-[#c44242] uppercase m-0">
            Proof &amp; trust
          </p>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] text-[#0a2029] m-0">
            Go deeper into how trust is built.
          </h2>
          <p className="font-manrope font-medium leading-[1.55] text-[16.5px] text-[#5b6670] m-0">
            Explore operating practices, evidence provenance and the boundaries behind every claim.
          </p>
        </div>

        <div className="flex flex-col gap-[16px] w-full">
          {mobileLinks.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className="bg-white border border-[rgba(18,59,76,0.12)] flex flex-col p-[18px] rounded-[12px] w-full hover:border-[rgba(18,59,76,0.3)] transition-colors"
            >
              <p className="font-hanken font-extrabold text-[17px] text-[#0a2029] m-0">{title}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop / tablet */}
      <div className="hidden md:flex md:flex-col gap-[24px] w-full mx-auto max-w-[1440px] px-8 lg:px-[120px] py-[40px] lg:py-[56px]">
        <div className="flex flex-col gap-[10px] items-center text-center">
          <p className="font-jetbrains font-bold text-[11px] text-[#1f7a6c] uppercase m-0">
            Proof &amp; trust
          </p>
          <h2 className="font-hanken font-extrabold text-[24px] sm:text-[28px] text-[#0a2029] m-0 max-w-[760px]">
            Go deeper into how trust is built.
          </h2>
          <p className="font-manrope font-normal leading-[1.6] text-[14px] text-[#5b6670] m-0 max-w-[760px]">
            Operating practices, evidence provenance, and assurance context-designed to support reviewer confidence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-[24px] items-start w-full">
          {links.map(({ title, desc, href }) => (
            <Link
              key={title}
              href={href}
              className="bg-white border border-[rgba(18,59,76,0.12)] flex-1 flex flex-col gap-[10px] p-[28px] rounded-[14px] w-full hover:border-[rgba(18,59,76,0.3)] transition-colors"
            >
              <p className="font-jetbrains font-normal text-[10px] text-[#1f7a6c] m-0">PROOF / TRUST</p>
              <p className="font-hanken font-extrabold text-[24px] text-[#0a2029] m-0">{title}</p>
              <p className="font-manrope font-normal text-[14px] text-[#5b6670] m-0">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
