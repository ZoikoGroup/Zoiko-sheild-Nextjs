import React from "react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="overview" className="bg-[#f7f5f0] w-full relative">
      {/* Mobile (Figma: compliance control plane mobile) */}
      <div className="md:hidden flex flex-col gap-[24px] items-start pt-[48px] pb-[52px] px-[22px] w-full">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[12px] text-[#c44242] uppercase m-0">
              Governed control assurance
            </p>
          </div>
          <h1 className="font-hanken font-extrabold leading-[1.08] text-[28px] text-[#0a2029] m-0">
            Make control assurance inspectable.
          </h1>
          <p className="font-manrope font-medium leading-[1.55] text-[16.5px] text-[#5b6670] m-0">
            ZoikoShield organizes governed controls, mappings, tests, assessments, exceptions, linked evidence and an audit workspace — every state backed by a governed record.
          </p>
        </div>

        <div className="flex flex-col gap-[12px] items-start w-full">
          <button className="bg-[#c44242] border border-[#c44242] flex items-center justify-center h-[53px] px-[20px] rounded-[10px] w-full cursor-pointer hover:bg-[#b23636] transition-colors">
            <span className="font-manrope font-bold text-[15px] text-white whitespace-nowrap">
              Book a Demo
            </span>
          </button>
          <Link
            href="/platform-overview"
            className="bg-white border border-[#123b4c] flex items-center justify-center h-[53px] px-[20px] rounded-[10px] w-full cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span className="font-manrope font-bold text-[15px] text-[#0a2029] whitespace-nowrap">
              Explore the Platform
            </span>
          </Link>
        </div>

        <div className="relative flex flex-col h-[330px] p-[20px] rounded-[22px] shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] overflow-hidden w-full">
          <Image
            src="/images/compliance-control-plane/hero-visual.webp"
            alt="Control visualization: controls, mappings, tests and evidence interconnected"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <p className="relative font-jetbrains font-normal text-[11px] text-[rgba(255,255,255,0.5)] whitespace-nowrap m-0">
            CONTROL GRAPH · LIVE
          </p>
        </div>
      </div>

      {/* Desktop / tablet */}
      <div className="hidden md:flex md:flex-col gap-[26px] lg:gap-[30px] pt-[36px] pb-[48px] lg:pt-[52px] lg:pb-[64px] w-full mx-auto max-w-[1440px] px-8 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[60px] items-start w-full">
          {/* Hero copy */}
          <div className="flex flex-col gap-[20px] lg:gap-[24px] flex-1 min-w-0">
            <div className="flex gap-[10px] items-center">
              <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
              <p className="font-jetbrains font-medium text-[11px] text-[#c44242] uppercase tracking-[0.5px] m-0">
                Governed control assurance
              </p>
            </div>

            <h1 className="font-hanken font-extrabold leading-[1.05] lg:leading-[1.02] text-[38px] sm:text-[46px] lg:text-[60px] text-[#0a2029] m-0">
              Make control assurance inspectable.
            </h1>

            <p className="font-manrope font-medium leading-[1.55] text-[16px] lg:text-[18px] text-[#5b6670] m-0 max-w-[600px]">
              ZoikoShield organizes governed controls, mappings, tests, assessments, exceptions, linked evidence and an audit workspace—while exposing the basis and limitations of every displayed state and preserving human authority over consequential compliance conclusions.
            </p>

            <div className="flex flex-wrap gap-[14px] items-center">
              <button className="bg-[#c44242] border border-[#c44242] flex items-center justify-center h-[52px] px-[24px] rounded-[8px] cursor-pointer hover:bg-[#b23636] transition-colors">
                <span className="font-manrope font-bold text-[14px] text-white whitespace-nowrap">
                  Book a Demo
                </span>
              </button>
              <Link
                href="/platform-overview"
                className="bg-white border border-[#123b4c] flex items-center justify-center h-[52px] px-[24px] rounded-[8px] cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="font-manrope font-bold text-[14px] text-[#123b4c] whitespace-nowrap">
                  Explore the Platform
                </span>
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative w-full lg:w-[540px] h-[300px] sm:h-[380px] lg:h-[420px] rounded-[20px] border border-[rgba(18,59,76,0.12)] overflow-hidden shrink-0">
            <Image
              src="/images/compliance-control-plane/hero-visual.webp"
              alt="Control visualization: controls, mappings, tests and evidence interconnected"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
              priority
            />
            <div className="absolute left-[15px] top-[15px] bg-[rgba(255,255,255,0.9)] border border-[rgba(18,59,76,0.12)] flex items-center gap-[10px] px-[12px] py-[10px] rounded-[999px] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08)]">
              <div className="bg-[#c44242] rounded-[4px] size-[8px] shrink-0" />
              <p className="font-jetbrains font-bold text-[11px] text-[#0a2029] whitespace-nowrap m-0">
                CONTROL VISUALIZATION
              </p>
            </div>
            <div className="absolute right-[15px] bottom-[15px] bg-[rgba(255,255,255,0.9)] border border-[rgba(18,59,76,0.12)] flex flex-col gap-[6px] px-[14px] py-[12px] rounded-[14px] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08)] max-w-[220px]">
              <p className="font-jetbrains font-normal text-[10px] text-[#1f7a6c] m-0">
                INTERCONNECTED EVIDENCE
              </p>
              <p className="font-manrope font-bold text-[13px] text-[#0a2029] m-0">
                Controls → mappings → tests → evidence
              </p>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <p className="font-manrope font-normal text-[12px] text-[#5b6670] m-0">
          <Link href="/" className="hover:text-[#0a2029] transition-colors">Home</Link>
          {" › "}
          <Link href="/platform-overview" className="hover:text-[#0a2029] transition-colors">Platform</Link>
          {" › "}
          <span className="text-[#0a2029]">Compliance control plane</span>
        </p>

        {/* Standing claim limitation */}
        <div className="bg-[#fff3e8] border border-[rgba(167,90,40,0.25)] flex flex-col sm:flex-row gap-[8px] sm:gap-[14px] p-[16px] rounded-[8px] w-full">
          <p className="font-jetbrains font-bold text-[10px] text-[#a75a28] whitespace-nowrap m-0 shrink-0">
            CLAIM LIMITATION
          </p>
          <p className="font-manrope font-normal leading-[1.5] text-[12px] text-[#0a2029] m-0">
            Framework, standard, and regulatory references describe supported program alignment and do not imply certification, regulatory approval, guaranteed compliance, or guaranteed security outcomes.
          </p>
        </div>

        {/* Anchor navigation */}
        <nav className="flex flex-wrap gap-x-[22px] gap-y-[10px] items-center justify-between w-full font-jetbrains font-normal text-[10px] text-[#1f7a6c] uppercase">
          {[
            ["#overview", "#overview"],
            ["#controls", "#controls"],
            ["#mappings", "#mappings"],
            ["#tests", "#tests"],
            ["#assessments", "#assessments"],
            ["#exceptions", "#exceptions"],
            ["#audit-workspace", "#audit-workspace"],
            ["#evidence", "#evidence"],
            ["#frameworks", "#frameworks"],
            ["#faq", "#faq"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="hover:text-[#123b4c] transition-colors whitespace-nowrap">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
