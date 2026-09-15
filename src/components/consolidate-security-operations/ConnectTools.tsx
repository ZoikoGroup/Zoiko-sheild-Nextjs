"use client";

import Image from "next/image";

const connectionModes = [
  "Read-only pull",
  "Read-only push",
  "Bi-directional metadata",
  "Prepare-write",
  "Approval-required write",
  "Delegated reversible write",
  "Administrative",
  "Disconnected",
];

const connectorTypes = [
  "SIEM",
  "Endpoint / EDR",
  "Identity / PAM",
  "Cloud / SaaS",
  "Network / Email",
  "Ticketing / ITSM",
  "Messaging",
  "Threat Intel",
  "Custom / API",
];

function Pill({ children }: { children: string }) {
  return (
    <div className="flex items-start overflow-hidden rounded-[999px] bg-white px-3 py-2 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
      <div className="font-['Manrope'] text-xs font-semibold text-cyan-950">
        {children}
      </div>
    </div>
  );
}

export default function ConnectTools() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-start gap-14 overflow-hidden px-28 py-20">
        {/* Left Content */}
        <div className="flex w-[620px] shrink-0 flex-col items-start gap-6">
          {/* Heading */}
          <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="h-0.5 w-5 bg-red-500" />

              <div className="font-['JetBrains_Mono'] text-xs font-medium uppercase text-red-500">
                Connect existing tools
              </div>
            </div>

            {/* Title */}
            <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
              Connection without surrendering control.
            </h2>

            {/* Description */}
            <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-gray-500">
              Choose explicit modes, permissions and health states for every
              approved connector.
            </p>
          </div>

          {/* Connection Modes */}
          <div className="flex w-full flex-wrap content-start items-start gap-2.5 overflow-hidden">
            {connectionModes.map((mode) => (
              <Pill key={mode}>{mode}</Pill>
            ))}
          </div>

          {/* Connector Lifecycle */}
          <div className="flex w-full flex-col items-start gap-2.5 overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_12px_36px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <h3 className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
              Connector lifecycle
            </h3>

            <p className="w-full font-['Manrope'] text-xs font-normal leading-5 text-gray-500">
              Requested → Authorized → Configured → Validated → Active →
              Degraded / Suspended / Retired
            </p>
          </div>

          {/* Connector Types */}
          <div className="flex w-full flex-wrap content-start items-start gap-2.5 overflow-hidden">
            {connectorTypes.map((connector) => (
              <Pill key={connector}>{connector}</Pill>
            ))}
          </div>

          {/* Information Note */}
          <div className="flex w-full items-center gap-3 overflow-hidden rounded-2xl bg-gray-200 p-4 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            {/* Shield */}
            <div className="relative h-5 w-5 shrink-0 overflow-hidden">
              <div className="absolute left-[3.33px] top-[1.66px] h-4 w-3.5 rounded-[2px] outline outline-1 outline-offset-[-0.5px] outline-teal-700" />
            </div>

            <div className="flex-1 font-['Manrope'] text-sm font-bold leading-5 text-slate-900">
              Technical capability, configured permission and decision
              authority are three separate states.
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[570px] min-w-0 flex-1 overflow-hidden rounded-[20px]">
          <Image
            src="/images/consolidate-security-operations/connect-tools.png"
            alt="Connect existing security tools"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1440px) 40vw, 524px"
          />
        </div>
      </div>
    </section>
  );
}