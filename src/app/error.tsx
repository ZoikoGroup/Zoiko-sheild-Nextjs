"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/common/Button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Zoiko Shield Error Boundary Caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zoiko-beige flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-2xl p-8 border border-zoiko-primary/20 text-center space-y-4 shadow-lg">
        <div className="w-16 h-16 rounded-full bg-zoiko-primary/8 text-zoiko-primary flex items-center justify-center mx-auto border border-zoiko-primary/20">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-zoiko-dark">System Anomaly Intercepted</h2>
        <p className="text-xs text-zoiko-dark/50 font-mono">{error.message || "An isolated runtime anomaly occurred."}</p>
        <Button variant="primary" onClick={() => reset()} icon={<RefreshCw className="w-4 h-4" />}>
          Re-initialize Shield Session
        </Button>
      </div>
    </div>
  );
}
