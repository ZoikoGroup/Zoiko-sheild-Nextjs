"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const CustomIntegrationRequestSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#F5F2EB]/90 py-16 lg:py-20 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Need a custom integration?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            Submit your telemetry or evidence collection requirements. Our engineering team reviews connector pipelines weekly to prioritize framework compatibility.
          </p>
        </div>

        {/* Form + Backlog Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Form (6 Spans) */}
          <div className="lg:col-span-6 p-8 bg-white rounded-3xl border border-cyan-950/10 shadow-sm space-y-5">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Request Submitted</h3>
                <p className="text-sm text-gray-500 max-w-md mx-auto">
                  Your custom connector request has been queued in our engineering backlog (`PIPELINE-REF-ID: 0x9F4B-ACTIVE`).
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-cyan-950 block">Integration Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Splunk Enterprise"
                      className="w-full h-11 px-4 bg-stone-100 rounded-lg border border-cyan-950/10 text-sm text-slate-900 focus:outline-none focus:border-cyan-950"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-cyan-950 block">Vendor / Publisher *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Splunk"
                      className="w-full h-11 px-4 bg-stone-100 rounded-lg border border-cyan-950/10 text-sm text-slate-900 focus:outline-none focus:border-cyan-950"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-cyan-950 block">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full h-11 px-4 bg-stone-100 rounded-lg border border-cyan-950/10 text-sm text-slate-900 focus:outline-none focus:border-cyan-950"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-cyan-950 block">Data Scope &amp; Target Controls</label>
                  <textarea
                    rows={3}
                    placeholder="Describe the security logs, API queries, or compliance controls this integration must map..."
                    className="w-full px-4 py-3 bg-stone-100 rounded-lg border border-cyan-950/10 text-sm text-slate-900 focus:outline-none focus:border-cyan-950 resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 rounded bg-red-500 focus:ring-red-500"
                  />
                  <span className="text-xs text-gray-500">I agree to the Zoiko Shield privacy policy.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-red-500 hover:bg-[#A91D22] text-white font-bold text-sm rounded-lg shadow-md transition-colors"
                >
                  Submit Connector Request
                </button>
              </form>
            )}
          </div>

          {/* Right Confirmation Mock Card (6 Spans) */}
          <div className="lg:col-span-6 p-8 bg-cyan-950 rounded-3xl text-white shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-200 tracking-wider uppercase block">
                REQUEST CONFIRMATION MOCK
              </span>
              <h3 className="text-2xl font-extrabold text-white font-sans">
                Weekly Pipeline Backlog
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                Your request automatically initiates a tracking hash inside our verification matrix. Status changes are communicated transparently in real time.
              </p>
            </div>

            <div className="p-5 bg-white/5 rounded-xl border border-white/10 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/40">PIPELINE-REF-ID</span>
                <span className="text-emerald-200 font-bold">0x9F4B-ACTIVE</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-white/40">PRIORITY STATUS</span>
                <span className="text-white font-medium">Review queue (estimated 3 days)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomIntegrationRequestSection;
