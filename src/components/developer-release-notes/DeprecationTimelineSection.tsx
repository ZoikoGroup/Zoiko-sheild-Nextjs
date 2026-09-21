"use client";

import React from "react";


export const DeprecationTimelineSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-4 sm:px-6 lg:px-8 border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-mono uppercase tracking-wider">
              DEPRECATION TIMELINE
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-extrabold font-sans">
            Active Deprecation &amp; Retirement Paths
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Transparent migration windows designed for security change-management policies.
          </p>
        </div>

        {/* 2 Path Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Active Deprecation */}
          <div className="p-6 sm:p-7 bg-white rounded-xl border border-cyan-950/10 hover:border-cyan-950/20 shadow-xs flex flex-col justify-between gap-5">
            <div className="space-y-4">
              <div className="inline-flex">
                <span className="px-3 py-1 bg-blue-50 text-slate-700 text-xs font-bold font-mono rounded-full border border-blue-200/60">
                  DEPRECATION ANNOUNCEMENT
                </span>
              </div>

              <h3 className="text-slate-900 text-lg sm:text-xl font-extrabold font-sans">
                Legacy directory API v1.2
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Announced May 1, 2026. Transition period spans 90 days. Endpoint will completely reject requests post-retirement.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4  text-xs">
              <span className="text-gray-500">Retirement Effective:</span>
              <span className="text-red-500 font-bold font-mono">
                August 1, 2026
              </span>
            </div>
          </div>

          {/* Card 2: Retired */}
          <div className="p-6 sm:p-7 bg-white rounded-xl border border-cyan-950/10 hover:border-cyan-950/20 shadow-xs flex flex-col justify-between gap-5">
            <div className="space-y-4">
              <div className="inline-flex">
                <span className="px-3 py-1 bg-red-50 text-rose-800 text-xs font-bold font-mono rounded-full border border-rose-200/70">
                  RETIRED / DEACTIVATED
                </span>
              </div>

              <h3 className="text-slate-900 text-lg sm:text-xl font-extrabold font-sans">
                TLS 1.1 Support Termination
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Support ended on April 15, 2026. All ingress connections utilizing TLS 1.1 are actively dropped at the network boundary.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4  text-xs">
              <span className="text-gray-500">Deactivation Completed:</span>
              <span className="text-slate-900 font-bold font-mono">
                April 15, 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
