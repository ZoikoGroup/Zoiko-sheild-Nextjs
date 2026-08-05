import React from "react";
import { ShieldFeature } from "@/types";
import { Cpu, Lock, Server, Shield, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  feature: ShieldFeature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-6 h-6 text-zoiko-primary" />;
      case "Lock":
        return <Lock className="w-6 h-6 text-zoiko-cyan" />;
      case "Server":
        return <Server className="w-6 h-6 text-zoiko-purple" />;
      default:
        return <Shield className="w-6 h-6 text-zoiko-emerald" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-zoiko-border hover:border-zoiko-primary/30 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-zoiko-primary/5 hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="p-3 rounded-xl bg-zoiko-beige border border-zoiko-border group-hover:border-zoiko-primary/30 transition-colors duration-300">
            {getIcon(feature.icon)}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-zoiko-beige text-zoiko-dark/60 border border-zoiko-border">
            {feature.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-zoiko-dark mb-1 group-hover:text-zoiko-primary transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-xs font-semibold text-zoiko-primary mb-3">{feature.tagline}</p>
        <p className="text-sm text-zoiko-dark/60 leading-relaxed mb-6">{feature.description}</p>
      </div>

      <div className="pt-4 border-t border-zoiko-border flex items-center justify-between text-xs">
        <span className="font-mono text-zoiko-dark/70 font-medium">{feature.metrics}</span>
        <span className="text-zoiko-primary group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1 font-semibold">
          Explore <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};
