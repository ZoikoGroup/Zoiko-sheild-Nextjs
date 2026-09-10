"use client";

import React, { useState } from "react";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
import { MetricsGrid } from "@/components/ui/MetricsGrid";
import { ThreatStream } from "@/components/ui/ThreatStream";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { useSecurity } from "@/context/SecurityContext";
import { Shield, Server, Activity, RefreshCw } from "lucide-react";

export default function DashboardPage() {
  const { nodes, isDefenseActive, toggleDefense, simulateAttack } = useSecurity();
  const [activeTab, setActiveTab] = useState<"nodes" | "stream" | "settings">("stream");

  return (
    <div className="min-h-screen flex flex-col bg-zoiko-beige text-zoiko-dark relative">
      {/* <Navbar /> */}

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-8 w-full">
        {/* Console Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-zoiko-border shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="cyan">THREAT OPERATIONS CENTER</Badge>
              <span className="text-xs font-mono text-zoiko-dark/40">SESSION ID: #ZOIKO-OPS-8841</span>
            </div>
            <h1 className="text-3xl font-extrabold text-zoiko-dark tracking-tight">Global Shield Command Console</h1>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant={isDefenseActive ? "primary" : "outline"}
              size="sm"
              onClick={toggleDefense}
              icon={<Shield className="w-4 h-4" />}
            >
              {isDefenseActive ? "Grid Active" : "Grid Standby"}
            </Button>

            <Button
              variant="cyan"
              size="sm"
              onClick={simulateAttack}
              icon={<RefreshCw className="w-4 h-4" />}
            >
              Trigger Test Exploit
            </Button>
          </div>
        </div>

        {/* Real-time Metrics Grid */}
        <MetricsGrid />

        {/* Console View Tabs */}
        <div className="flex items-center gap-3 border-b border-zoiko-border pb-4">
          <button
            onClick={() => setActiveTab("stream")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === "stream"
                ? "bg-zoiko-primary text-white shadow-md"
                : "bg-white text-zoiko-dark/50 hover:text-zoiko-dark border border-zoiko-border"
            }`}
          >
            <Activity className="w-4 h-4" /> Live Threat Stream
          </button>
          <button
            onClick={() => setActiveTab("nodes")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === "nodes"
                ? "bg-zoiko-cyan text-white shadow-md"
                : "bg-white text-zoiko-dark/50 hover:text-zoiko-dark border border-zoiko-border"
            }`}
          >
            <Server className="w-4 h-4" /> Edge Clusters ({nodes.length})
          </button>
        </div>

        {/* Tab 1: Live Threat Stream */}
        {activeTab === "stream" && <ThreatStream />}

        {/* Tab 2: Edge Clusters */}
        {activeTab === "nodes" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nodes.map((node) => (
              <div key={node.id} className="bg-white p-6 rounded-2xl border border-zoiko-border space-y-4 hover:border-zoiko-primary/30 hover:shadow-lg hover:shadow-zoiko-primary/5 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zoiko-cyan/8 text-zoiko-cyan border border-zoiko-cyan/20">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zoiko-dark text-lg">{node.name}</h3>
                      <p className="text-xs text-zoiko-dark/40">{node.region}</p>
                    </div>
                  </div>
                  <Badge variant={node.status === "DEFENDING" ? "primary" : "emerald"}>
                    {node.status}
                  </Badge>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-zoiko-dark/60">
                    <span>CPU Workload Load</span>
                    <span className="font-bold text-zoiko-cyan">{node.loadPercentage}%</span>
                  </div>
                  <div className="w-full bg-zoiko-beige h-2 rounded-full overflow-hidden border border-zoiko-border">
                    <div
                      className="bg-gradient-to-r from-zoiko-cyan to-zoiko-primary h-full rounded-full transition-all duration-500"
                      style={{ width: `${node.loadPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-zoiko-border flex items-center justify-between text-xs font-mono text-zoiko-dark/50">
                  <span>24h Intercepted:</span>
                  <span className="text-zoiko-dark font-bold">{node.threatsIntercepted24h.toLocaleString()} attacks</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
