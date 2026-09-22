"use client";

import React, { useState } from "react";

export const SubscribeRegistrySection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <section
      id="subscribe-registry"
      className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-10">
          {/* Left Column */}
          <div className="flex-1 space-y-3 max-w-2xl">
            <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
              Subscribe to the publication registry
            </h2>
            <p className="leading-relaxed">
              <span className="text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
                Receive raw technical bulletins, coordinated vulnerability logs, and engineering notes.
              </span>
              <span className="text-red-500 text-sm font-bold font-['Manrope'] leading-5">
                {" "}Note:
              </span>
              <span className="text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
                {" "}Blog subscriptions do not replace official security advisories.
              </span>
            </p>
          </div>

          {/* Right Column Form */}
          <div className="w-full lg:w-[500px] flex flex-col gap-3">
            <form onSubmit={handleSubmit} className="flex items-center gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="operator@enterprise.com"
                required
                className="flex-1 px-4 py-3 bg-white text-slate-900 placeholder:text-gray-500 text-sm font-normal font-['Manrope'] rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 focus:outline-red-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-sm font-bold font-['Manrope'] rounded-lg transition-colors cursor-pointer shrink-0"
              >
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>

            <div className="flex flex-wrap items-center gap-4 text-xs font-normal font-['JetBrains_Mono'] text-slate-400">
              <span>FEEDS: RSS / Atom</span>
              <div className="w-px h-2.5 bg-cyan-950/10" />
              <span>CHANNELS: Core Research Only / All Bulletins</span>
            </div>

            {isSubscribed && (
              <p className="text-xs font-['JetBrains_Mono'] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                ✔ Verification link dispatched to {email}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
