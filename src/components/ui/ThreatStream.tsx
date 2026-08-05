"use client";

import React from "react";
import { useSecurity } from "@/context/SecurityContext";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Shield, Zap, Terminal, AlertCircle } from "lucide-react";
import { getSeverityColor } from "@/utils";

export const ThreatStream: React.FC = () => {
  const { threats, totalBlocked, isDefenseActive, toggleDefense, simulateAttack } = useSecurity();

  return (
    <div className="bg-white rounded-2xl p-6 border border-zoiko-border relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zoiko-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Terminal className="w-5 h-5 text-zoiko-cyan" />
            <h3 className="text-xl font-bold text-zoiko-dark tracking-wide">Live Threat Neutralization Stream</h3>
          </div>
          <p className="text-xs text-zoiko-dark/50">Real-time autonomous attack intercept and mitigation log</p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant={isDefenseActive ? "primary" : "outline"}
            onClick={toggleDefense}
            icon={<Shield className="w-4 h-4" />}
          >
            {isDefenseActive ? "Shield Active" : "Shield Paused"}
          </Button>

          <Button
            size="sm"
            variant="cyan"
            onClick={simulateAttack}
            icon={<Zap className="w-4 h-4" />}
          >
            Simulate Attack
          </Button>
        </div>
      </div>

      {/* Stream Table / Logs */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-zoiko-dark/80">
          <thead className="text-xs uppercase bg-zoiko-beige text-zoiko-dark/50 border-b border-zoiko-border">
            <tr>
              <th className="py-3 px-4">Event ID</th>
              <th className="py-3 px-4">Timestamp</th>
              <th className="py-3 px-4">Threat Type</th>
              <th className="py-3 px-4">Severity</th>
              <th className="py-3 px-4">Target Node</th>
              <th className="py-3 px-4">Action Taken</th>
              <th className="py-3 px-4 text-right">Latency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zoiko-border font-mono text-xs">
            {threats.map((threat) => (
              <tr
                key={threat.id}
                className="hover:bg-zoiko-beige/60 transition-colors duration-150"
              >
                <td className="py-3 px-4 font-semibold text-zoiko-cyan">{threat.id}</td>
                <td className="py-3 px-4 text-zoiko-dark/50">{threat.timestamp}</td>
                <td className="py-3 px-4 text-zoiko-dark font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-zoiko-primary shrink-0" />
                  {threat.type}
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getSeverityColor(threat.severity)}`}>
                    {threat.severity}
                  </span>
                </td>
                <td className="py-3 px-4 text-zoiko-dark/60">{threat.targetNode}</td>
                <td className="py-3 px-4">
                  <Badge variant="emerald">{threat.actionTaken}</Badge>
                </td>
                <td className="py-3 px-4 text-right text-zoiko-emerald font-bold">{threat.responseLatencyMs}ms</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-zoiko-border flex items-center justify-between text-xs text-zoiko-dark/50">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-zoiko-emerald animate-ping" />
          Autonomous AI Sentinel active • Sub-4ms threshold enforced
        </span>
        <span className="font-mono text-zoiko-cyan">Total Neutralized Session: {totalBlocked.toLocaleString()}</span>
      </div>
    </div>
  );
};
