"use client";

import React, { useState } from "react";
import { X, ShieldCheck, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/common/Button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<"video" | "form" | "success">("video");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStep("success");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="bg-white max-w-xl w-full rounded-2xl p-6 border border-zoiko-border relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zoiko-dark/40 hover:text-zoiko-primary p-1 rounded-lg hover:bg-zoiko-beige transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "video" && (
          <div>
            <div className="flex items-center gap-2 text-zoiko-cyan mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Interactive Live Defense Demo</span>
            </div>
            <h3 className="text-2xl font-bold text-zoiko-dark mb-4">Autonomous Threat Neutralization in Action</h3>

            <div className="relative rounded-xl overflow-hidden bg-zoiko-dark border border-zoiko-border aspect-video flex items-center justify-center mb-6 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="w-16 h-16 rounded-full bg-zoiko-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <div className="absolute bottom-4 left-4 z-10 text-xs font-mono text-gray-300">
                Zoiko Shield v4.2 Defense Simulation • 1080p 60fps
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-zoiko-dark/50">Request access to the full sandbox enterprise environment.</p>
              <Button size="md" variant="primary" onClick={() => setStep("form")}>
                Deploy Sandbox Access
              </Button>
            </div>
          </div>
        )}

        {step === "form" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-2xl font-bold text-zoiko-dark">Deploy Enterprise Sandbox</h3>
            <p className="text-sm text-zoiko-dark/50">
              Enter your corporate email to provision a zero-latency Zoiko Shield test cluster.
            </p>

            <div>
              <label className="block text-xs font-semibold text-zoiko-dark/70 mb-1.5 uppercase">Work Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="cto@enterprise.com"
                className="w-full px-4 py-3 rounded-lg bg-zoiko-beige border border-zoiko-border focus:border-zoiko-primary text-zoiko-dark text-sm focus:outline-none transition-colors"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button type="button" variant="ghost" onClick={() => setStep("video")}>
                Back
              </Button>
              <Button type="submit" variant="cyan">
                Generate Cluster Credentials
              </Button>
            </div>
          </form>
        )}

        {step === "success" && (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-zoiko-emerald flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-zoiko-dark mb-2">Sandbox Cluster Provisioned</h3>
            <p className="text-sm text-zoiko-dark/60 mb-6">
              Access instructions and JWT API keys sent to <span className="text-zoiko-cyan font-semibold">{email}</span>.
            </p>
            <Button size="md" variant="primary" onClick={onClose}>
              Close & Return to Dashboard
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
