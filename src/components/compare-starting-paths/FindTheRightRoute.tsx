"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface RouteItem {
  id: string;
  title: string;
  pathText: string;
  href: string;
}

const routeItems: RouteItem[] = [
  {
    id: "product-capability",
    title: "Product capability",
    pathText: "/platform/detection-response",
    href: "#",
  },
  {
    id: "evidence-concept",
    title: "Evidence concept",
    pathText: "/platform/evidence",
    href: "#",
  },
  {
    id: "compliance-controls",
    title: "Compliance controls",
    pathText: "/platform/compliance",
    href: "#",
  },
  {
    id: "active-incident",
    title: "Active incident",
    pathText: "Approved support route",
    href: "#",
  },
  {
    id: "vulnerability-report",
    title: "Vulnerability report",
    pathText: "/trust/vulnerability-disclosure",
    href: "#",
  },
  {
    id: "architecture",
    title: "Architecture",
    pathText: "/platform/architecture",
    href: "#",
  },
  {
    id: "ai-governance",
    title: "AI governance",
    pathText: "/platform/ai",
    href: "#",
  },
];

export default function FindTheRightRoute() {
  return (
    <div className="relative w-full bg-[#F6F4EE] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-20"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              FIND THE RIGHT ROUTE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-[44px] font-bold text-[#111A1E] tracking-tight mb-4 leading-[1.1]">
            Looking for something else?
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed">
            If neither service matches the job, continue to the most relevant
            product, trust or support route.
          </p>
        </motion.div>

        {/* Right Column: Links List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col w-full border-t border-[#E5E0D5]"
        >
          {routeItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group flex items-center justify-between py-6 px-4 sm:px-6 border-b border-[#E5E0D5] hover:bg-[#EAE6DD] transition-colors"
            >
              {/* Title */}
              <span className="text-base sm:text-lg font-bold text-[#111A1E] tracking-tight">
                {item.title}
              </span>

              {/* Path & Arrow */}
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-mono text-[#C8382C] tracking-wide">
                  {item.pathText}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#C8382C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
