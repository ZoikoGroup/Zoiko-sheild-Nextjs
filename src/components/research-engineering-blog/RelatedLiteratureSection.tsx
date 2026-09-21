"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export const RelatedLiteratureSection: React.FC = () => {
  const items = [
    {
      title: "Guides & Frameworks",
      description:
        "Read structural specifications and production implementation guides.",
      link: "/guides-framework",
    },
    {
      title: "Developers & Docs",
      description:
        "Read structural specifications and production implementation guides.",
      link: "/developers-documentation",
    },
    {
      title: "API Reference",
      description:
        "Read structural specifications and production implementation guides.",
      link: "/developers-documentation",
    },
    {
      title: "Release Notes",
      description:
        "Read structural specifications and production implementation guides.",
      link: "/developer-release-notes",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-slate-900 text-2xl font-extrabold font-['Hanken_Grotesk']">
          Related Platforms &amp; Literature
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/5 hover:outline-cyan-950/20 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-3 group"
            >
              <div className="space-y-2">
                <h3 className="text-slate-900 text-base font-extrabold font-['Hanken_Grotesk'] group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs font-normal font-['Manrope'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-1 text-red-500 text-xs font-bold font-['Manrope'] pt-1">
                <span>Browse Docs </span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
