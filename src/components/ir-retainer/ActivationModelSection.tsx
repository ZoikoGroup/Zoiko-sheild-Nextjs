"use client";

import React from "react";
import { Shield, ShieldAlert, AlertTriangle } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Approved route",
    description:
      "Customer activation path, with a monitored fallback if it degrades.",
  },
  {
    number: "02",
    title: "Verify",
    description:
      "Entitlement and identity confirmed before engagement detail is exchanged.",
  },
  {
    number: "03",
    title: "Classify",
    description:
      "Approved taxonomy and severity method. Severity is not authority.",
  },
  {
    number: "04",
    title: "Initiate",
    description:
      "Case opened with roles, scope snapshot, unknowns and a secure channel.",
  },
  {
    number: "05",
    title: "Coordinate",
    description:
      "Incident command model, with your authority explicit at each decision.",
  },
  {
    number: "06",
    title: "Record",
    description:
      "Activation record, decisions, evidence links and correction history.",
  },
];

export default function ActivationModelSection() {
  return (
    <section className="w-full bg-[#EEEBE7] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              ACTIVATION MODEL
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Activation runs through entitlement, not through a form.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            The public page never collects an incident narrative. Activation
            happens through the approved customer route, where entitlement and
            identity can actually be verified.
          </p>
        </div>

        {/* 6-Column Steps Grid Container */}
        <div className="bg-white rounded-[14px] border border-[#CBD5E1] shadow-sm p-6 mb-8 overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 min-w-[700px] lg:min-w-0">
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col justify-start">
                <span className="text-xs font-mono font-bold text-[#E04F2E] mb-2">
                  {step.number}
                </span>
                <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Card 1: Who holds command */}
          <div className="bg-white rounded-[14px] p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F0EB] flex items-center justify-center text-[#0F172A] mb-6">
                <Shield className="w-5 h-5 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                Who holds command
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Incident command stays with your designated roles unless a
                separately approved arrangement says otherwise. We coordinate,
                advise, investigate within scope and record &mdash; we do not
                take control of your environment.
              </p>
            </div>
          </div>

          {/* Card 2: Action rights */}
          <div className="bg-white rounded-[14px] p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F0EB] flex items-center justify-center text-[#0F172A] mb-6">
                <ShieldAlert className="w-5 h-5 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                Action rights
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Recommend, prepare, execute-reversible and execute-consequential
                are distinct classes with distinct approval requirements.
                Incident urgency never silently widens them, and no action tier
                is assigned without the action registry and your contract
                agreeing.
              </p>
            </div>
          </div>

          {/* Card 3: If the route degrades (With highlighted top border) */}
          <div className="bg-white rounded-[14px] p-8 border border-[#E0402F] border-t-[3px] border-t-[#E0402F] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F0EB] flex items-center justify-center text-[#0F172A] mb-6">
                <AlertTriangle className="w-5 h-5 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                If the route degrades
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                The approved fallback and its current status are shown. The
                activation path is never replaced by a sales form, and urgency
                never routes into commercial qualification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
