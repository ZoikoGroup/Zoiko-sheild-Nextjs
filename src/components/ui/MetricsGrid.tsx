"use client";

import React from "react";
import { useSecurity } from "@/context/SecurityContext";
import { Shield, Zap, Server, Lock, ArrowUpRight } from "lucide-react";

export const MetricsGrid: React.FC = () => {
  const { metrics } = useSecurity();

  const getIcon = (name: string) => {
    switch (name) {
      case "Shield":
        return <Shield className="w-6 h-6 text-zoiko-primary" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-zoiko-cyan" />;
      case "Server":
        return <Server className="w-6 h-6 text-zoiko-purple" />;
      case "Lock":
        return <Lock className="w-6 h-6 text-zoiko-emerald" />;
      default:
        return <Shield className="w-6 h-6 text-zoiko-primary" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-5 border border-zoiko-border hover:border-zoiko-primary/30 transition-all duration-300 relative group hover:shadow-lg hover:shadow-zoiko-primary/5 hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-zoiko-beige border border-zoiko-border group-hover:scale-110 transition-transform duration-300">
              {getIcon(metric.iconName)}
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-zoiko-emerald bg-emerald-500/8 px-2.5 py-1 rounded-full border border-emerald-500/15">
              {metric.change}
              <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </span>
          </div>

          <h4 className="text-2xl lg:text-3xl font-extrabold text-zoiko-dark tracking-tight mb-1 font-mono">
            {metric.value}
          </h4>
          <p className="text-xs text-zoiko-dark/60 font-medium mb-1">{metric.title}</p>
          <span className="text-[10px] text-zoiko-dark/40 uppercase tracking-wider">{metric.unit}</span>
        </div>
      ))}
    </div>
  );
};
