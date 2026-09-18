"use client";

import React from "react";
import Image from "next/image";
import { Shield, CheckCircle2, Lock, ArrowRight, CircleX } from "lucide-react";

export const FeaturedConnectorDetailSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0B181E] text-white py-16 lg:py-20 border-b border-gray-800 relative overflow-hidden">
      {/* Background Graphic Overlay */}
       <Image
              src="/images/integration-catalog/DetailDrawer-Section.png"
              alt="Authority & Handoffs Background"
              fill
              className="object-cover  pointer-events-none"
              priority
            />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Top Connector Title & Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <CircleX className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                CrowdStrike Falcon Connector
              </h2>
            </div>
            <p className="text-xs text-white/70 font-sans pl-12">
              System Tier: Endpoint &amp; Identity Security
            </p>
          </div>

          <span className="px-3 py-1 bg-gray-200 text-teal-700 text-xs font-bold font-mono rounded-xl self-start sm:self-center">
            Available
          </span>
        </div>

        {/* 2 Column Detail Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column Info (7 Spans) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Why Connect */}
            <div className="space-y-2">
              <h3 className="text-lg font-extrabold text-white font-sans">
                Why Connect CrowdStrike?
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                By connecting CrowdStrike Falcon, Zoiko Shield continuously monitors active system-level processes, user credential modifications, and malware alert status. The integration translates threat alerts into automated control exceptions, proving mathematically that remediations were implemented immediately.
              </p>
            </div>

            {/* Data Received */}
            <div className="space-y-3">
              <h3 className="text-lg font-extrabold text-white font-sans">
                Data Received &amp; Schema normalization
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                Ingested telemetry is normalized into the ASV (Auditable Security Vector) format.
              </p>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-white">
                <span className="px-3 py-1.5 bg-white/10 rounded-md border border-white/10">
                  System Processes
                </span>
                <span className="px-3 py-1.5 bg-white/10 rounded-md border border-white/10">
                  Alert Context
                </span>
                <span className="px-3 py-1.5 bg-white/10 rounded-md border border-white/10">
                  Sensor Health Status
                </span>
                <span className="px-3 py-1.5 bg-white/10 rounded-md border border-white/10">
                  Credential Audit Events
                </span>
              </div>
            </div>

            {/* Required Credentials */}
            <div className="space-y-3">
              <h3 className="text-lg font-extrabold text-white font-sans">
                Required Credentials &amp; Least Privilege Configuration
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                Requires API Key client credentials. The following scope must be strictly restricted to least privilege:
              </p>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 font-mono text-xs space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-200 font-bold">Scope:</span>
                  <span className="text-white">threats:read, sensors:read, alerts:read</span>
                </div>
                <div className="flex items-center gap-3 pt-1 border-t border-white/10">
                  <span className="text-emerald-200 font-bold">Write Back:</span>
                  <span className="text-white">Disabled by policy - zoiko-shield is strictly write-isolated.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Setup & Action Card (5 Spans) */}
          <div className="lg:col-span-5 p-7 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="text-lg font-extrabold text-white font-sans">
                Sync Status &amp; Topology
              </h3>

              <div className="flex items-center gap-2 text-sm text-emerald-200 font-bold font-sans">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse shrink-0" />
                <span>Connected · Real-time pipeline active</span>
              </div>

              {/* Setup Steps List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono font-bold text-white/40 uppercase block">
                  Setup Preview Steps
                </span>

                <div className="space-y-2.5 text-xs font-sans">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-teal-700 text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                      1
                    </div>
                    <span className="text-white font-bold">Check API Scope</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-teal-700 text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                      2
                    </div>
                    <span className="text-white font-bold">Enter Credentials</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-white/10 text-white/70 font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                      3
                    </div>
                    <span className="text-white/70 font-medium">Select Evidence Scope</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-white/10 text-white/70 font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                      4
                    </div>
                    <span className="text-white/70 font-medium">Run Integration Test</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button className="w-full py-3.5 bg-red-500 hover:bg-[#A91D22] text-white font-bold text-sm rounded-lg transition-colors shadow-md">
                Authenticate Connection
              </button>
              <button className="w-full py-3.5 bg-transparent hover:bg-white/10 text-white font-bold text-sm rounded-lg border border-white transition-colors">
                View Integration Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedConnectorDetailSection;
