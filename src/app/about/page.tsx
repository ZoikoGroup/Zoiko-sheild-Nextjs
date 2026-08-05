import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/common/Badge";
import { Lock, Cpu, Server, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zoiko-beige text-zoiko-dark relative">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 space-y-16 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="cyan">CYBER DEFENSE ARCHITECTURE</Badge>
          <h1 className="text-4xl font-extrabold text-zoiko-dark sm:text-5xl">
            Inside <span className="text-gradient-red">Zoiko Shield</span>
          </h1>
          <p className="text-base text-zoiko-dark/60">
            A radical departure from reactive legacy firewalls. Zoiko Shield provides predictive, zero-latency autonomous security across multi-cloud edge environments.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-zoiko-border space-y-4 hover:border-zoiko-primary/30 hover:shadow-lg hover:shadow-zoiko-primary/5 hover:-translate-y-1 transition-all duration-300">
            <div className="p-3 rounded-xl bg-zoiko-primary/8 text-zoiko-primary w-fit border border-zoiko-primary/20">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-zoiko-dark">Neural Mesh AI</h3>
            <p className="text-sm text-zoiko-dark/60 leading-relaxed">
              Deep neural net models trained on over 50 PB of threat telemetry per day. Identifying zero-day exploits prior to execution.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-zoiko-border space-y-4 hover:border-zoiko-cyan/30 hover:shadow-lg hover:shadow-zoiko-cyan/5 hover:-translate-y-1 transition-all duration-300">
            <div className="p-3 rounded-xl bg-zoiko-cyan/8 text-zoiko-cyan w-fit border border-zoiko-cyan/20">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-zoiko-dark">Lattice Cryptography</h3>
            <p className="text-sm text-zoiko-dark/60 leading-relaxed">
              NIST Kyber-1024 post-quantum key encapsulation protects all inter-cluster traffic against quantum computer decryption.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-zoiko-border space-y-4 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 hover:-translate-y-1 transition-all duration-300">
            <div className="p-3 rounded-xl bg-purple-500/8 text-zoiko-purple w-fit border border-purple-500/20">
              <Server className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-zoiko-dark">18,450 Global Edge Nodes</h3>
            <p className="text-sm text-zoiko-dark/60 leading-relaxed">
              Our global Anycast network absorbs up to 120 Tbps DDoS floods at edge ingress points with sub-4ms SLA.
            </p>
          </div>
        </div>

        {/* Technical Specs Checklist */}
        <div className="bg-white p-8 rounded-3xl border border-zoiko-primary/20 space-y-6 shadow-sm">
          <h2 className="text-2xl font-bold text-zoiko-dark">Enterprise Compliance & Engineering Specs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono text-xs text-zoiko-dark/70">
            <div className="p-4 rounded-xl bg-zoiko-beige border border-zoiko-border flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-zoiko-emerald shrink-0" />
              <span>SOC2 Type II Certified</span>
            </div>
            <div className="p-4 rounded-xl bg-zoiko-beige border border-zoiko-border flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-zoiko-emerald shrink-0" />
              <span>ISO 27001 Security Standard</span>
            </div>
            <div className="p-4 rounded-xl bg-zoiko-beige border border-zoiko-border flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-zoiko-emerald shrink-0" />
              <span>GDPR & HIPAA Compliant</span>
            </div>
            <div className="p-4 rounded-xl bg-zoiko-beige border border-zoiko-border flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-zoiko-emerald shrink-0" />
              <span>PCI-DSS Level 1 Service</span>
            </div>
            <div className="p-4 rounded-xl bg-zoiko-beige border border-zoiko-border flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-zoiko-emerald shrink-0" />
              <span>Sub-4ms Ingress Latency SLA</span>
            </div>
            <div className="p-4 rounded-xl bg-zoiko-beige border border-zoiko-border flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-zoiko-emerald shrink-0" />
              <span>24/7/365 Dedicated SOC Team</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
