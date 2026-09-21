"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Terminal, Shield, Code } from "lucide-react";

export const RelatedResourcesSection: React.FC = () => {
  const resources = [
    {
      title: "Guides & Frameworks",
      description: "Detailed step-by-step implementation pathways.",
      link: "/guides-framework",
      icon: BookOpen,
    },
    {
      title: "Research & Engineering Blog",
      description: "Deep technical articles on live compliance telemetry.",
      link: "/research-engineering-blog",
      icon: Code,
    },
    {
      title: "Developers & Docs",
      description: "API configurations and strict endpoint schemas.",
      link: "/developers-documentation",
      icon: Terminal,
    },
    {
      title: "Trust & Security Center",
      description: "How Zoiko structures source-verifiable evidence.",
      link: "/trust-center",
      icon: Shield,
    },
  ];

  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase">
            CONTINUE LEARNING
          </div>
          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Related Resources &amp; Research
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.link}
                className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-start items-start gap-3 group"
              >
                <div className="size-8 bg-stone-100 rounded-lg flex justify-center items-center group-hover:bg-red-50 transition-colors">
                  <Icon className="w-4 h-4 text-red-500" />
                </div>
                <h3 className="text-slate-900 text-base font-extrabold font-['Hanken_Grotesk'] group-hover:text-red-500 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs font-normal font-['Manrope'] leading-relaxed">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
