"use client";

import React from "react";

export default function CommunicationsSection() {
  const communicationCards = [
    {
      title: "communication_plan_id",
      description: "Canonical plan and version",
    },
    {
      title: "Audience",
      description: "Approved recipients and stakeholders",
    },
    {
      title: "Owner / approver",
      description: "Named accountability for release",
    },
    {
      title: "Channel",
      description: "Authorized delivery route",
    },
    {
      title: "Message purpose",
      description: "Operational intent and boundaries",
    },
    {
      title: "Source / evidence",
      description: "Traceable factual basis",
    },
    {
      title: "Timing",
      description: "Review and release window",
    },
    {
      title: "Privacy / legal",
      description: "Escalation and review needs",
    },
    {
      title: "Correction",
      description: "Controlled update process",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C44242]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
                COMMUNICATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] max-w-2xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Messages governed by evidence and review.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Define the approved audience, owner, channel, evidence and
              correction path before communications leave the room.
            </p>
          </div>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {communicationCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[14px] p-4 border border-[#123B4C1F] shadow-sm flex flex-col"
            >
              <h3 className="text-base font-bold text-[#0F172A] mb-2 font-mono sm:font-sans">
                {card.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer / Notice Box */}
        <div className="p-4 bg-[#F0EDE6] border-l-4 border-l-[#C44242] text-sm text-[#0A2029] leading-relaxed mb-8">
          Incident Readiness does not decide breach notification duties, legal
          reportability, privilege, regulator obligations or public disclosure.
        </div>

        {/* Action Button */}
        <div>
          <button
            className="px-5 py-2.5 rounded-xl border border-[#CBD5E1] bg-white hover:border-[#0F172A] text-[#0F172A] text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
          >
            Inspect Communication Plan
          </button>
        </div>
      </div>
    </section>
  );
}
