"use client";

import React from "react";

export const PlatformOperationsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6] py-12 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
          Platform Operations &amp; Access Controls
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Simulated Platform States */}
          <div className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 font-sans">
              Simulated Platform States
            </h3>

            <div className="space-y-3 font-sans text-sm">
              <div className="p-3 bg-stone-100 rounded-lg flex items-center justify-between border border-cyan-950/5">
                <span className="font-bold text-slate-900">Loading State (Mock Skeleton)</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-3 bg-cyan-950/10 rounded-sm animate-pulse" />
                  <div className="w-16 h-3 bg-cyan-950/10 rounded-sm animate-pulse" />
                </div>
              </div>

              <div className="p-3 bg-stone-100 rounded-lg flex items-center justify-between border border-cyan-950/5">
                <span className="font-bold text-slate-900">No Results Found State</span>
                <span className="font-mono text-xs text-red-500 font-semibold">Try broad keywords</span>
              </div>

              <div className="p-3 bg-red-50 rounded-lg flex items-center justify-between border border-rose-200">
                <span className="font-bold text-rose-900">Rate Limited / Expired Connection</span>
                <span className="font-mono text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                  RE-AUTH REQUIRED
                </span>
              </div>
            </div>
          </div>

          {/* Role Authorization Directory */}
          <div className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 font-sans">
              Role Authorization Directory
            </h3>

            <div className="space-y-3 font-sans text-sm divide-y divide-gray-100">
              <div className="pt-2 first:pt-0 space-y-0.5">
                <h4 className="font-bold text-cyan-950">Auditor</h4>
                <p className="text-xs text-gray-500">Read-only access to SHA-256 evidence logs.</p>
              </div>

              <div className="pt-2 space-y-0.5">
                <h4 className="font-bold text-cyan-950">Organization Admin</h4>
                <p className="text-xs text-gray-500">Full write capability and secret escrows.</p>
              </div>

              <div className="pt-2 space-y-0.5">
                <h4 className="font-bold text-cyan-950">Compliance Manager</h4>
                <p className="text-xs text-gray-500">Control mapping validation and framework rules.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOperationsSection;
