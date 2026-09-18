"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

interface IntegrationsGridSectionProps {
  onSelectConnector?: (connectorId: string) => void;
}

export const IntegrationsGridSection: React.FC<IntegrationsGridSectionProps> = ({
  onSelectConnector,
}) => {
  const connectors = [
    {
      id: "sentinel",
      name: "Microsoft Sentinel",
      category: "SIEM & Observability",
      desc: "Sync high-fidelity security alerts and mapped control evidence directly.",
      status: "Available",
      statusStyle: "bg-gray-200 text-teal-700",
      auth: "OAUTH_2",
      evidenceReady: true,
    },
    {
      id: "aws",
      name: "Amazon Web Services",
      category: "Cloud Platforms",
      desc: "Ingest CloudTrail API audit trails, configuration compliance, and S3 evidence.",
      status: "Available",
      statusStyle: "bg-gray-200 text-teal-700",
      auth: "ROLE_ARN",
      evidenceReady: true,
    },
    {
      id: "crowdstrike",
      name: "CrowdStrike Falcon",
      category: "Endpoint & Identity",
      desc: "Acquire telemetry from active endpoint sensors for real-time trace response.",
      status: "Available",
      statusStyle: "bg-gray-200 text-teal-700",
      auth: "API_KEY",
      evidenceReady: true,
    },
    {
      id: "okta",
      name: "Okta Directory",
      category: "Endpoint & Identity",
      desc: "Map identity events, auth trails, and MFA enrollment state to compliance criteria.",
      status: "Available",
      statusStyle: "bg-gray-200 text-teal-700",
      auth: "OAUTH_2",
      evidenceReady: true,
    },
    {
      id: "jira",
      name: "Jira Software Cloud",
      category: "Collaboration & Tickets",
      desc: "Automate incident ticket creation, analyst assignments, and evidence capture.",
      status: "Beta",
      statusStyle: "bg-sky-100 text-cyan-800",
      auth: "WEBHOOK",
      evidenceReady: false,
    },
    {
      id: "github",
      name: "GitHub Enterprise",
      category: "Developer & API",
      desc: "Continuous mapping of pull requests, security alerts, and pipeline sign-offs.",
      status: "Planned",
      statusStyle: "bg-lime-50 text-yellow-700",
      auth: "APP",
      evidenceReady: true,
    },
    {
      id: "gcp",
      name: "Google Cloud Platform",
      category: "Cloud Platforms",
      desc: "Audit trail mapping and configuration drift detection for GKE and IAM.",
      status: "Partner-assisted",
      statusStyle: "bg-purple-50 text-purple-700",
      auth: "OAUTH_2",
      evidenceReady: true,
    },
    {
      id: "slack",
      name: "Slack Enterprise",
      category: "Collaboration & Tickets",
      desc: "Deliver notification trails and automated interactive approvals to analysts.",
      status: "Available",
      statusStyle: "bg-gray-200 text-teal-700",
      auth: "OAUTH_2",
      evidenceReady: false,
    },
    {
      id: "vault",
      name: "HashiCorp Vault",
      category: "Data & Evidence",
      desc: "Hashed log verification of secrets access, rotation state, and key lifecycle.",
      status: "Requestable",
      statusStyle: "bg-stone-200 text-gray-500",
      auth: "API_KEY",
      evidenceReady: true,
    },
  ];

  return (
    <section id="catalog-grid" className="w-full bg-white py-12 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header Row */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
            All Integrations
          </h2>
          <span className="text-sm text-gray-500 font-sans">Showing 1-9 of 42</span>
        </div>

        {/* 3x3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectors.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md hover:border-cyan-950/30 transition-all"
            >
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className=" space-y-0.5">
                    <div className="flex gap-3">
                    <ShieldCheck className="text-[#C44242] size-8"></ShieldCheck>
                    <h3 className="text-base font-extrabold text-slate-900 font-sans">
                      {item.name}<br/><p className="text-xs text-gray-500 gap-3 font-sans block" >{item.category} </p>
                    </h3></div>
                    
                    
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold font-mono shrink-0 ${item.statusStyle}`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Specs & Auth Footer */}
              <div className="space-y-3 pt-2">
                <div className="pt-2 border-t border-cyan-950/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500">Auth:</span>
                    <span className="text-slate-900 font-bold">{item.auth}</span>
                  </div>
                  {item.evidenceReady && (
                    <span className="px-2 py-0.5 bg-gray-200 text-teal-700 text-[10px] font-bold rounded">
                      EVIDENCE-READY
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-3.5 h-3.5 rounded border-cyan-950/20 text-red-500 focus:ring-red-500"
                    />
                    <span className="text-xs font-semibold text-gray-500">Compare</span>
                  </label>

                  <button
                    onClick={() => onSelectConnector && onSelectConnector(item.id)}
                    className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors flex items-center gap-1"
                  >
                    <span>View integration</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="pt-4 flex justify-center">
          <button className="px-6 py-3 rounded-lg border-[1.5px] border-cyan-950 text-cyan-950 font-bold text-sm hover:bg-stone-100 transition-colors">
            Load More Connectors
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsGridSection;
