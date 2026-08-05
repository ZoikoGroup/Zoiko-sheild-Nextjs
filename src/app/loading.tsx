import React from "react";
import { Shield } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-zoiko-beige flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-zoiko-primary/10 border border-zoiko-primary text-zoiko-primary flex items-center justify-center animate-ping">
          <Shield className="w-8 h-8" />
        </div>
        <p className="font-mono text-xs text-zoiko-primary uppercase tracking-widest animate-pulse font-semibold">
          INITIALIZING ZOIKO SHIELD SECURE CONSOLE...
        </p>
      </div>
    </div>
  );
}
