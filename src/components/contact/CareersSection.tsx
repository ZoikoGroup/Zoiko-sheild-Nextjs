"use client";

import React from "react";
import Link from "next/link";
import { Eyebrow } from "./shared";

export const CareersSection: React.FC = () => {
  return (
    <section
      id="careers"
      className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div className="flex-1 max-w-[700px] flex flex-col items-start gap-6">
          <Eyebrow>09 · CAREERS &amp; TALENT</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Access official talent channels
          </h2>
          <p className="text-gray-500 text-base font-normal font-manrope leading-6">
            Join the engineering and architecture teams building secure directories and endpoint posture systems.
            All active applications, recruiter profiles, and vendor states are processed exclusively on the talent
            board.
          </p>
        </div>

        <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col gap-3">
          <h3 className="text-slate-900 text-lg font-extrabold font-hanken">Talent Portal Status</h3>
          <p className="text-gray-500 text-xs font-manrope leading-relaxed">
            We do not accept resume attachments via standard contact forms. Please use the verified Greenhouse board
            for applications.
          </p>
          <Link
            href="/about-zoiko-tech"
            className="mt-2 w-full py-3 bg-[#0B2239] hover:bg-sky-900 text-white text-center text-sm font-bold font-manrope rounded-lg transition-colors"
          >
            Browse Open Positions
          </Link>
        </div>
      </div>
    </section>
  );
};
