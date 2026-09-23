import React from "react";
import { ArrowUpRight } from "lucide-react";

const apiCards = [
  {
    title: "API Authentication",
    description: "OAuth2 client credentials and token refresh policies.",
    link: "View Endpoint Schema",
  },
  {
    title: "HTTP/API Error Handling",
    description: "Handling 429 Rate Limits, 403 Forbidden, and 503 Outages.",
    link: "View Endpoint Schema",
  },
  {
    title: "Webhook Delivery Retries",
    description: "Verifying cryptographic signatures and retry thresholds.",
    link: "View Endpoint Schema",
  },
  {
    title: "Integration Permissions",
    description:
      "Read vs. write scopes required for live telemetry verification.",
    link: "View Endpoint Schema",
  },
];

export default function IntegrationApisAndWebhookTraces() {
  return (
    <div className="bg-[#F6F4EE] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-6">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            DEVELOPER INFRASTRUCTURE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Integration APIs &amp; Webhook Traces
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Query rate-limiting rules, verify cryptographic delivery signatures,
            and download verified JSON schemas.
          </p>
        </div>

        {/* 4 Cards Grid (1 row x 4 columns on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apiCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-[#C53030] cursor-pointer group">
                <span>{card.link}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
