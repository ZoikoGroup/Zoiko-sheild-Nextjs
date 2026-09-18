"use client";

import React from "react";
import { motion } from "framer-motion";

type Row = {
  provider: string;
  providerColor: string;
  service: string;
  status: "Available" | "Beta" | "Requestable";
  scope: string;
  direction: string;
  auth: string;
  validated: string;
};

const rows: Row[] = [
  {
    provider: "AWS",
    providerColor: "#f90",
    service: "Security Hub (ASFF)",
    status: "Available",
    scope: "Organization / Account",
    direction: "Inbound",
    auth: "IAM Role Assumption",
    validated: "4m ago",
  },
  {
    provider: "AWS",
    providerColor: "#f90",
    service: "CloudTrail (S3 Event Stream)",
    status: "Available",
    scope: "Organization-wide",
    direction: "Inbound",
    auth: "KMS + IAM Role",
    validated: "12m ago",
  },
  {
    provider: "Azure",
    providerColor: "#0089d6",
    service: "Defender for Cloud",
    status: "Available",
    scope: "Management Group",
    direction: "Inbound",
    auth: "App Registration",
    validated: "2m ago",
  },
  {
    provider: "Azure",
    providerColor: "#0089d6",
    service: "Activity Log",
    status: "Available",
    scope: "Subscription-level",
    direction: "Inbound",
    auth: "Service Principal",
    validated: "18m ago",
  },
  {
    provider: "GCP",
    providerColor: "#4285f4",
    service: "Security Command Center",
    status: "Available",
    scope: "Organization / Folder",
    direction: "Inbound",
    auth: "Service Account",
    validated: "1m ago",
  },
  {
    provider: "GCP",
    providerColor: "#4285f4",
    service: "Cloud Asset Inventory",
    status: "Available",
    scope: "Organization / Project",
    direction: "Inbound",
    auth: "IAM Delegation",
    validated: "1h ago",
  },
  {
    provider: "Kubernetes",
    providerColor: "#0a2029",
    service: "K8s API Server Audit",
    status: "Beta",
    scope: "Cluster-native",
    direction: "Inbound",
    auth: "Client Cert / Token",
    validated: "30s ago",
  },
  {
    provider: "Multi-Cloud",
    providerColor: "#0a2029",
    service: "Kubernetes Workload Agent",
    status: "Available",
    scope: "Namespace-bounded",
    direction: "Inbound",
    auth: "Kubernetes SA Token",
    validated: "15s ago",
  },
  {
    provider: "AWS",
    providerColor: "#f90",
    service: "Lambda Config & Triggers",
    status: "Available",
    scope: "Account Region",
    direction: "Inbound",
    auth: "IAM Role",
    validated: "3h ago",
  },
  {
    provider: "GCP",
    providerColor: "#4285f4",
    service: "Cloud Functions Metadata",
    status: "Available",
    scope: "Project Region",
    direction: "Inbound",
    auth: "Service Account",
    validated: "6h ago",
  },
  {
    provider: "Custom / SaaS",
    providerColor: "#0a2029",
    service: "Private Cloud API Gateway",
    status: "Requestable",
    scope: "Endpoint Bounded",
    direction: "Inbound",
    auth: "mTLS + API Key",
    validated: "Never",
  },
];

function StatusBadge({ status }: { status: Row["status"] }) {
  const isAvailable = status === "Available";
  return (
    <div
      className={`inline-flex items-start px-2 py-[3px] rounded-[4px] ${
        isAvailable ? "bg-[#e4f0ec]" : "bg-[#faf5f0]"
      }`}
    >
      <p
        className={`font-jetbrains font-bold text-[10px] whitespace-nowrap m-0 ${
          isAvailable ? "text-[#1f7a6c]" : "text-[#c44242]"
        }`}
      >
        {status}
      </p>
    </div>
  );
}

export default function IntegrationMatrix() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-10 mx-auto max-w-[1440px] px-[22px] lg:px-[108px] py-14 lg:py-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 items-start w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-[#c44242] size-[8px] shrink-0" />
            <p className="font-jetbrains font-bold text-[13px] text-[#c44242] tracking-[1.68px] uppercase m-0">
              ACTIVE REGISTRY
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] sm:text-[34px] lg:text-[38px] text-[#0a2029] tracking-[-0.76px] m-0">
            Cloud Telemetry Matrix
          </h2>
          <p className="font-manrope font-medium leading-[21px] lg:leading-[25px] text-[14px] lg:text-[16.5px] text-[#5b6670] m-0 max-w-[720px]">
            Exact capability and availability state parsed from live
            registration targets.
          </p>
        </motion.div>

        {/* Mobile / tablet: stacked cards (a 7-column table doesn't fit small widths) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 items-start w-full lg:hidden"
        >
          {rows.map((row, i) => (
            <div
              key={i}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col items-start p-[18px] rounded-[16px] w-full"
            >
              <div className="flex items-center justify-between w-full">
                <p
                  className="font-jetbrains font-bold text-[13px] whitespace-nowrap m-0"
                  style={{ color: row.providerColor }}
                >
                  {row.provider}
                </p>
                <div className="bg-[#f7f5f0] inline-flex items-center px-2 py-[3px] rounded-[4px]">
                  <p className="font-jetbrains font-normal text-[#1f7a6c] text-[10px] whitespace-nowrap m-0">
                    {row.validated}
                  </p>
                </div>
              </div>
              <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0 pt-3">
                {row.service}
              </p>
              <div className="h-px w-full bg-[rgba(18,59,76,0.1)] mt-3 mb-3" />
              <div className="flex flex-col gap-2 items-start w-full">
                <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
                  <span className="font-semibold text-[#0a2029]">Scope:</span>{" "}
                  {row.scope}
                </p>
                <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
                  <span className="font-semibold text-[#0a2029]">
                    Direction:
                  </span>{" "}
                  {row.direction}
                </p>
                <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
                  <span className="font-semibold text-[#0a2029]">
                    Auth Model:
                  </span>{" "}
                  {row.auth}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Desktop / large tablet: full data table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden lg:flex bg-white border border-[rgba(18,59,76,0.1)] flex-col items-start overflow-x-auto rounded-[16px] w-full"
        >
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="bg-[#0a2029]">
                <th className="font-jetbrains font-bold text-[11px] text-white text-left p-4 w-[100px]">
                  PROVIDER
                </th>
                <th className="font-jetbrains font-bold text-[11px] text-white text-left p-4">
                  SOURCE SERVICE
                </th>
                <th className="font-jetbrains font-bold text-[11px] text-white text-left p-4 w-[110px]">
                  STATUS
                </th>
                <th className="font-jetbrains font-bold text-[11px] text-white text-left p-4 w-[160px]">
                  INGEST SCOPE
                </th>
                <th className="font-jetbrains font-bold text-[11px] text-white text-left p-4 w-[100px]">
                  DIRECTION
                </th>
                <th className="font-jetbrains font-bold text-[11px] text-white text-left p-4 w-[160px]">
                  AUTH MODEL
                </th>
                <th className="font-jetbrains font-bold text-[11px] text-white text-left p-4 w-[100px]">
                  VALIDATED
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-[rgba(18,59,76,0.1)] ${
                    i % 2 === 0 ? "bg-white" : "bg-[#f7f5f0]"
                  }`}
                >
                  <td className="p-4">
                    <p
                      className="font-jetbrains font-bold text-[12px] whitespace-nowrap m-0"
                      style={{ color: row.providerColor }}
                    >
                      {row.provider}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="font-manrope font-semibold text-[#0a2029] text-[13.5px] m-0">
                      {row.service}
                    </p>
                  </td>
                  <td className="p-4">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="p-4">
                    <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
                      {row.scope}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="font-jetbrains font-normal text-[#5b6670] text-[11px] m-0">
                      {row.direction}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="font-manrope font-normal text-[#0a2029] text-[13px] m-0">
                      {row.auth}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="font-jetbrains font-normal text-[#1f7a6c] text-[11px] m-0">
                      {row.validated}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
