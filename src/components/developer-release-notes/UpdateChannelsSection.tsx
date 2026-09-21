"use client";

import React, { useState } from "react";
import { Check, CheckCircle2, AlertCircle, Terminal, Rss, Mail } from "lucide-react";

export const UpdateChannelsSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [breakingOnly, setBreakingOnly] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({
    type: "success",
    text: "✔ Illustrative Subscription Success",
  });
  const [feedNotification, setFeedNotification] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatusMessage({
        type: "error",
        text: "❌ Error: Invalid email address or directory scope",
      });
      return;
    }
    setStatusMessage({
      type: "success",
      text: `✔ Subscribed ${email} to operational updates`,
    });
  };

  const handleFeedCopy = (feedName: string, url: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + url);
      setFeedNotification(`${feedName} URL copied to clipboard!`);
      setTimeout(() => setFeedNotification(null), 3000);
    }
  };

  return (
    <section
      id="update-channels"
      className="w-full bg-[#F0EDE6] border-t border-b border-cyan-950/10 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2">
          <h2 className="text-slate-900 text-lg sm:text-xl font-extrabold font-sans">
            Configure Update Channels
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Col 1: Feeds */}
          <div className="md:col-span-4 flex flex-col items-start gap-3">
            <div className="flex items-center gap-2 text-slate-900 text-sm font-bold font-sans">
              <span>RSS/Atom Feeds</span>
            </div>
            <p className="text-gray-600 text-xs font-normal leading-relaxed">
              Integrate changelogs directly into internal incident response tools, SIEM pipelines, or Slack channels.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() =>
                  handleFeedCopy("JSON Schema Feed", "/api/changelog/feed.json")
                }
                className="text-red-500 hover:text-red-600 text-xs font-bold font-mono uppercase tracking-wide hover:underline cursor-pointer flex items-center gap-1.5"
              >
                <span>JSON SCHEMA FEED</span>
              </button>
              <button
                onClick={() =>
                  handleFeedCopy("Atom XML Feed", "/api/changelog/atom.xml")
                }
                className="text-red-500 hover:text-red-600 text-xs font-bold font-mono uppercase tracking-wide hover:underline cursor-pointer flex items-center gap-1.5"
              >
                <span>ATOM XML FEED</span>
              </button>
            </div>
            {feedNotification && (
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                {feedNotification}
              </span>
            )}
          </div>

          {/* Col 2: Email Updates */}
          <div className="md:col-span-5 flex flex-col items-start gap-3">
            <div className="flex items-center gap-2 text-slate-900 text-sm font-bold font-sans">
              <span>Email Updates</span>
            </div>

            <form onSubmit={handleSubscribe} className="w-full flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@company.com"
                className="flex-1 px-3 py-2 text-xs bg-white text-slate-900 rounded-md border border-cyan-950/15 focus:outline-none focus:ring-1 focus:ring-red-500 placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-md transition-colors cursor-pointer shrink-0"
              >
                Subscribe
              </button>
            </form>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <label className="flex items-center gap-1.5 cursor-pointer select-none text-gray-600">
                <input
                  type="checkbox"
                  checked={breakingOnly}
                  onChange={(e) => setBreakingOnly(e.target.checked)}
                  className="rounded  w-3.5 h-3.5 border-gray-400"
                />
                <span>Breaking Only</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer select-none text-gray-600">
                <input
                  type="checkbox"
                  checked={securityAlerts}
                  onChange={(e) => setSecurityAlerts(e.target.checked)}
                  className="rounded  w-3.5 h-3.5 border-gray-400"
                />
                <span>Security Alerts</span>
              </label>

              <button
                type="button"
                onClick={() =>
                  setStatusMessage({
                    type: "success",
                    text: "Preferences dashboard loaded for current session.",
                  })
                }
                className="text-red-500 hover:text-red-600 text-xs font-normal underline cursor-pointer"
              >
                Manage Preferences / Unsubscribe
              </button>
            </div>
          </div>

          {/* Col 3: Status Simulation Boxes */}
          <div className="md:col-span-3 flex flex-col items-stretch gap-2">
            <div
              onClick={() =>
                setStatusMessage({
                  type: "success",
                  text: "✔ Illustrative Subscription Success",
                })
              }
              className={`p-2.5 rounded-md border transition-all cursor-pointer ${
                statusMessage.type === "success"
                  ? "bg-gray-100 border-teal-700/80 shadow-xs"
                  : "bg-white/60 border-stone-300 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="text-teal-800 text-xs font-semibold flex items-center gap-1.5">
                <span className="truncate">✔ Illustrative Subscription Success</span>
              </div>
            </div>

            <div
              onClick={() =>
                setStatusMessage({
                  type: "error",
                  text: "❌ Error: Invalid directory scope",
                })
              }
              className={`p-2.5 rounded-md border transition-all cursor-pointer ${
                statusMessage.type === "error"
                  ? "bg-red-50 border-rose-800 shadow-xs"
                  : "bg-white/60 border-stone-300 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="text-rose-800 text-xs font-semibold flex items-center gap-1.5">
                <span className="truncate">❌ Error: Invalid directory scope</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
