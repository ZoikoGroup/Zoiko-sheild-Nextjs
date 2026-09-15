"use client";

import Image from "next/image";

export default function DetectResponse() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-start gap-16 overflow-hidden px-28 py-16">
        {/* Left Content */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-500" />

            <div className="font-['JetBrains_Mono'] text-xs font-normal uppercase text-red-500">
              Inspectable security operations
            </div>
          </div>

          {/* Heading */}
          <h2 className="w-full font-['Hanken_Grotesk'] text-6xl font-extrabold leading-[65.28px] text-slate-900">
            Detection &amp; Response
          </h2>

          {/* Description */}
          <p className="w-full font-['Manrope'] text-lg font-normal leading-7 text-gray-500">
            Explore how ZoikoShield connects correlated detection,
            investigation, evidence-linked decisions and governed response
            while keeping source context, uncertainty and human authority
            visible.
          </p>

          {/* Supporting Text */}
          <div className="font-['JetBrains_Mono'] text-xs font-normal text-teal-700">
            Correlated detection, investigation, cases, and governed response.
          </div>

          {/* Buttons */}
          <div className="flex items-start gap-3.5">
            <button
              type="button"
              className="flex h-12 items-center justify-center overflow-hidden rounded-lg bg-red-500 px-6 font-['Manrope'] text-sm font-bold text-white shadow-[0px_12px_32px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-red-500"
            >
              Book a Demo
            </button>

            <button
              type="button"
              className="flex h-12 items-center justify-center overflow-hidden rounded-lg bg-white px-6 font-['Manrope'] text-sm font-bold text-slate-900 outline outline-1 outline-offset-[-1px] outline-cyan-950"
            >
              Explore the Platform
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="flex w-[540px] shrink-0 flex-col items-start overflow-hidden rounded-[20px] bg-cyan-950 p-4 shadow-[0px_12px_32px_0px_rgba(11,37,48,0.09)]">
          {/* Image */}
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/detection-and-response/detect.png"
              alt="Detection and response"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Card Footer */}
          <div className="flex w-full items-center justify-between overflow-hidden p-4">
            <div className="flex flex-col items-start gap-[5px] overflow-hidden">
              <div className="font-['JetBrains_Mono'] text-[10px] font-normal text-red-400">
                CASE ZS–1042 · IN REVIEW
              </div>

              <div className="font-['Hanken_Grotesk'] text-lg font-extrabold text-white">
                Related identity anomaly
              </div>
            </div>

            <div className="flex shrink-0 items-center overflow-hidden rounded-[999px] bg-white/5 px-3 py-1.5">
              <div className="font-['Manrope'] text-xs font-normal text-white">
                Human approval required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}