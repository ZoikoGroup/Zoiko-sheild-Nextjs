"use client";

import React from "react";
import Image from "next/image";

export const PublicationProtocolsSection: React.FC = () => {
  const protocols = [
    {
      title: "Technical Peer Review",
      description:
        "Every system and vulnerability study is routed through Core Security group validation, verifying matching code schemas prior to disclosure.",
    },
    {
      title: "Limitations Policy",
      description:
        "Publications explicitly outline telemetry coverage limits, hardware configuration dependencies, and structural boundaries.",
    },
    {
      title: "Coordinated Disclosure",
      description:
        "We strictly align with coordinated patch cycles. Vulnerabilities are published only after reliable mitigation schemes are production-validated.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/research-engineering-blog/Editorial-Standards-Section-9.png"
          alt="Editorial Standards Background"
          fill
          className="object-cover object-center "
          priority
        />
        <div className="absolute inset-0  backdrop-blur-xs" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-400" />
            <span className="text-red-400 text-xs font-medium font-['JetBrains_Mono'] uppercase tracking-wider">
              PUBLICATION PROTOCOLS
            </span>
          </div>

          <h2 className="text-white text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Methods, Limitations, and Disclosures
          </h2>

          <p className="text-slate-400 text-base font-medium font-['Manrope'] leading-6">
            We adhere to strict peer review, reproducible research paths, and defensive security disclosures.
          </p>
        </div>

        {/* 3 Dark Protocol Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {protocols.map((p, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 hover:outline-white/35 transition-all flex flex-col justify-start items-start gap-3 shadow-lg"
            >
              <h3 className="text-white text-lg font-extrabold font-['Hanken_Grotesk']">
                {p.title}
              </h3>
              <p className="text-slate-400 text-xs font-normal font-['Manrope'] leading-5">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
