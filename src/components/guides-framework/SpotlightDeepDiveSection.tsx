"use client";

import React from "react";

export const SpotlightDeepDiveSection: React.FC = () => {
  return (
    <section id="spotlight-deepdive" className="py-14 md:py-20 bg-[#F5F2EB] border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Panel 1: NIST SP 800-207 Pattern */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-teal-50 text-teal-800 border border-teal-200 rounded-full text-xs font-mono font-bold">
                  CURRENT VERSION
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Official NIST standard
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#0B1B26] font-sans">
                NIST SP 800-207 Architecture Pattern
              </h3>

              {/* At a Glance */}
              <div className="p-4 bg-[#E6E4DD]/60 rounded-xl space-y-1">
                <div className="text-xs font-extrabold text-[#0B1B26] font-sans">
                  AT A GLANCE
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Zero Trust Architecture (ZTA) guidelines for eliminating persistent
                  explicit directory credentials, replacing access with continuous
                  cryptographic session evaluation.
                </p>
              </div>

              {/* Zoiko Interpretation */}
              <div className="pl-4 border-l-[3px] border-teal-700 space-y-1">
                <div className="text-xs font-mono font-bold text-teal-800 uppercase">
                  ZOIKO INTERPRETATION
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verify every auth attempt against the active endpoint state. If
                  CrowdStrike Falcon signals a process drift or missing sensor on the
                  host, terminate active Okta sessions immediately.
                </p>
              </div>

              {/* Limitations */}
              <div className="space-y-1">
                <div className="text-xs font-extrabold text-[#0B1B26] font-sans">
                  LIMITATIONS
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Does not define specific network payload profiles or proprietary
                  directory configuration variables.
                </p>
              </div>
            </div>

            
          </div>

          {/* Panel 2: Continuous EDR Guide */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs font-mono font-bold">
                  PRACTITIONER LEVEL
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Actionable Guide Template
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#0B1B26] font-sans">
                Continuous EDR Host Compliance Guide
              </h3>

              {/* Required Actions */}
              <div className="space-y-3">
                <div className="text-xs font-extrabold text-[#0B1B26] font-sans">
                  REQUIRED ACTIONS
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 p-3 ">
                    <span className="px-2 py-1 bg-[#E6E4DD] text-[#A91D22] text-xs font-mono font-bold rounded">
                      01
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-slate-900">
                        Query Directory Session Identity
                      </div>
                      <div className="text-xs text-slate-600">
                        Match Okta Client OS with Jamf registered Hardware Serial.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3">
                    <span className="px-2 py-1 bg-[#E6E4DD] text-[#A91D22] text-xs font-mono font-bold rounded">
                      02
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-slate-900">
                        Evaluate Live Telemetry Sensor
                      </div>
                      <div className="text-xs text-slate-600">
                        Query active process alerts on host prior to role elevation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evidence to Retain */}
              <div className="space-y-1">
                <div className="text-xs font-extrabold text-[#0B1B26] font-sans">
                  EVIDENCE TO RETAIN
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  &bull; Cryptographic logs of policy-check validation status
                  &bull; Raw sensor status payload with matching timestamp hashes
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};
