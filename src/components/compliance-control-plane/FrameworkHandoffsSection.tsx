import React from "react";
import Link from "next/link";

const referenceFields = [
  "reference_id",
  "public name",
  "publisher / authority",
  "edition / version",
  "relationship",
  "scope",
  "limitations",
  "licensing",
  "status",
  "owner / review",
];

const handoffs: { title: string; route: string; label: string }[] = [
  { title: "Framework library", route: "/resources/frameworks", label: "/resources/frameworks · conditional" },
  { title: "Continuous Assurance", route: "/continuous-assurance", label: "/continuous-assurance · optional peer" },
  { title: "Trust Center", route: "/trust", label: "/trust · operating trust" },
];

const mobileExample: [string, string][] = [
  ["reference_id", "REF-NIST-80053"],
  ["public name", "NIST Cybersecurity Framework"],
  ["version", "2.0"],
  ["relationship", "Approved alignment"],
  ["scope", "Identity controls"],
  ["limitations", "No equivalence implied"],
];

export function FrameworkHandoffsSection() {
  return (
    <section id="frameworks" className="bg-[#f7f5f0] w-full scroll-mt-24">
      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-[28px] items-start px-[22px] py-[68px] w-full">
        <div className="flex flex-col gap-[12px] w-full">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[12px] text-[#c44242] uppercase m-0">
              Framework / assurance handoffs
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] text-[#0a2029] m-0">
            Alignment is distinct from assurance and trust.
          </h2>
          <p className="font-manrope font-medium leading-[1.55] text-[16.5px] text-[#5b6670] m-0">
            Framework references show supported relationships with explicit version, scope, rights and limitations.
          </p>
        </div>

        <div className="flex flex-col gap-[10px] w-full">
          {mobileExample.map(([name, value]) => (
            <div key={name} className="bg-[#f0ede6] flex flex-col gap-[5px] p-[14px] rounded-[8px] w-full">
              <p className="font-jetbrains font-normal text-[10.5px] text-[#5b6670] m-0">{name}</p>
              <p className="font-manrope font-semibold text-[14px] text-[#0a2029] m-0">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop / tablet */}
      <div className="hidden md:flex md:flex-col gap-[32px] lg:gap-[40px] w-full mx-auto max-w-[1440px] px-8 lg:px-[120px] py-[56px] lg:py-[88px]">
        <div className="flex flex-col gap-[14px] max-w-[960px]">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[11px] text-[#c44242] uppercase m-0">
              Framework / assurance handoffs
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[30px] sm:text-[36px] lg:text-[40px] text-[#c44242] m-0">
            Alignment is distinct from assurance and trust.
          </h2>
          <p className="font-manrope font-normal leading-[1.55] text-[16px] text-[#5b6670] m-0">
            Framework references show supported relationships with explicit version, scope, rights and limitations. Continuous Assurance is a peer, optional assurance-led path.
          </p>
        </div>

        <div className="flex flex-wrap gap-[12px] items-start w-full">
          {referenceFields.map((name) => (
            <div
              key={name}
              className="bg-white border border-[rgba(18,59,76,0.12)] flex flex-col gap-[8px] p-[18px] rounded-[8px] w-full sm:w-[calc(20%-9.6px)] min-w-[170px]"
            >
              <p className="font-jetbrains font-normal text-[10px] text-[#c44242] m-0">{name}</p>
              <p className="font-manrope font-semibold text-[13px] text-[#0a2029] m-0">
                Explicit and source-attributed
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-[16px] items-start w-full">
          {handoffs.map(({ title, route, label }) => (
            <Link
              key={title}
              href={route}
              className="bg-white border border-[rgba(18,59,76,0.12)] flex-1 flex flex-col gap-[10px] p-[24px] rounded-[14px] w-full hover:border-[rgba(18,59,76,0.3)] transition-colors"
            >
              <p className="font-hanken font-extrabold text-[20px] text-[#0a2029] m-0">{title}</p>
              <p className="font-jetbrains font-normal text-[11px] text-[#1f7a6c] m-0">{label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
