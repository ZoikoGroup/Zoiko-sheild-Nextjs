import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SlidersHorizontal,
  TestTube,
  FileCheck,
  AlertTriangle,
  FileScan,
  ChartNetwork,
  type LucideIcon,
} from "lucide-react";

const objects: { icon: LucideIcon; label: string; highlight?: boolean }[] = [
  { icon: SlidersHorizontal, label: "Control", highlight: true },
  { icon: TestTube, label: "Test" },
  { icon: FileCheck, label: "Assessment" },
  { icon: AlertTriangle, label: "Exception" },
  { icon: FileScan, label: "Audit workspace" },
  { icon: ChartNetwork, label: "Framework mapping" },
];

const mobileFlow: { label: string; step: string; highlight?: boolean }[] = [
  { label: "Control", step: "01", highlight: true },
  { label: "Evidence", step: "02" },
  { label: "Test", step: "03" },
];

export function EvidenceRelationshipSection() {
  return (
    <section id="evidence" className="relative w-full overflow-hidden scroll-mt-24">
      {/* Mobile */}
      <div className="md:hidden relative flex flex-col gap-[32px] items-start px-[22px] py-[68px] w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/images/compliance-control-plane/evidence-relationship-bg.webp" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[rgba(11,39,50,0.84)]" />
        </div>

        <div className="relative flex flex-col gap-[12px] w-full">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[12px] text-[#e0967d] uppercase m-0">
              Evidence relationship
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] text-white m-0">
            Trace support without copying authority.
          </h2>
          <p className="font-manrope font-medium leading-[1.55] text-[16.5px] text-[rgba(255,255,255,0.68)] m-0">
            Evidence verification describes provenance, integrity and access facts. It does not automatically set control status.
          </p>
        </div>

        <div className="relative flex flex-col gap-[10px] w-full">
          {mobileFlow.map(({ label, step, highlight }) => (
            <div
              key={label}
              className={`flex items-center justify-between h-[86px] p-[18px] rounded-[14px] border border-[rgba(255,255,255,0.14)] w-full ${
                highlight ? "bg-[#c44242]" : "bg-[#0c3445]"
              }`}
            >
              <p className="font-hanken font-extrabold text-[18px] text-white m-0">{label}</p>
              <p className="font-jetbrains font-normal text-[11px] text-[rgba(255,255,255,0.5)] m-0">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop / tablet */}
      <div className="hidden md:block relative w-full py-[56px] lg:py-[88px]">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/images/compliance-control-plane/evidence-relationship-bg.webp"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(18,59,76,0.76)]" />
        </div>

        <div className="relative w-full mx-auto max-w-[1440px] px-8 lg:px-[120px] flex flex-col gap-[32px] lg:gap-[42px]">
          <div className="flex flex-col gap-[14px] max-w-[760px]">
            <div className="flex gap-[10px] items-center">
              <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
              <p className="font-jetbrains font-medium text-[11px] text-[#c44242] uppercase m-0">
                Evidence relationship
              </p>
            </div>
            <h2 className="font-hanken font-extrabold leading-[1.08] text-[30px] sm:text-[36px] lg:text-[40px] text-[#c44242] m-0">
              Trace support without copying authority.
            </h2>
            <p className="font-manrope font-normal leading-[1.55] text-[16px] text-[#a8b0b8] m-0">
              Evidence verification describes evidence verification facts. It does not automatically set control status.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-[16px] items-stretch w-full">
            {objects.map(({ icon: Icon, label, highlight }) => (
              <div
                key={label}
                className={`flex-1 min-w-[140px] h-[160px] border border-[rgba(255,255,255,0.14)] flex flex-col justify-between p-[18px] rounded-[14px] ${
                  highlight ? "bg-[#c44242]" : "bg-[#0c3445]"
                }`}
              >
                <Icon className="text-white" size={28} strokeWidth={1.5} />
                <p className="font-hanken font-extrabold text-[16px] text-white m-0">{label}</p>
                <p className="font-jetbrains font-normal text-[9px] text-[rgba(255,255,255,0.44)] whitespace-nowrap m-0">
                  LINKED EVIDENCE →
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-[20px] items-start sm:items-center justify-between w-full">
            <p className="font-manrope font-normal leading-[1.5] text-[14px] text-[rgba(255,255,255,0.68)] m-0 max-w-[760px]">
              Verification, provenance, integrity and access facts remain attributable to evidence. A separate governed decision determines any effect on a control.
            </p>
            <Link
              href="/verify-evidence"
              className="bg-white border border-[#123b4c] flex items-center justify-center h-[52px] px-[24px] rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
            >
              <span className="font-manrope font-bold text-[14px] text-[#123b4c] whitespace-nowrap">
                View Evidence Platform
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
