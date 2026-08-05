"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThreatEvent, SecurityMetric, SecurityNode } from "@/types";
import { securityService } from "@/services/securityService";

interface SecurityContextType {
  metrics: SecurityMetric[];
  threats: ThreatEvent[];
  nodes: SecurityNode[];
  isDefenseActive: boolean;
  totalBlocked: number;
  toggleDefense: () => void;
  simulateAttack: () => void;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const SecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [metrics, setMetrics] = useState<SecurityMetric[]>(securityService.getMetrics());
  const [threats, setThreats] = useState<ThreatEvent[]>(securityService.getThreats());
  const [nodes] = useState<SecurityNode[]>(securityService.getNodes());
  const [isDefenseActive, setIsDefenseActive] = useState<boolean>(true);
  const [totalBlocked, setTotalBlocked] = useState<number>(2489120);

  // Live real-time threat stream generator
  useEffect(() => {
    if (!isDefenseActive) return;

    const interval = setInterval(() => {
      const newThreat = securityService.generateSimulatedThreat();
      setThreats((prev) => [newThreat, ...prev.slice(0, 7)]);
      setTotalBlocked((prev) => prev + 1);

      // Increment metric live
      setMetrics((prev) =>
        prev.map((m) => {
          if (m.title === "Threats Blocked Today") {
            const nextVal = (2489120 + Math.floor(Math.random() * 10)).toLocaleString();
            return { ...m, value: nextVal };
          }
          return m;
        })
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [isDefenseActive]);

  const toggleDefense = (): void => {
    setIsDefenseActive((prev) => !prev);
  };

  const simulateAttack = (): void => {
    const attack = securityService.generateSimulatedThreat();
    attack.severity = "CRITICAL";
    attack.type = "Zero-Day Exploit";
    setThreats((prev) => [attack, ...prev.slice(0, 7)]);
    setTotalBlocked((prev) => prev + 1);
  };

  return (
    <SecurityContext.Provider
      value={{
        metrics,
        threats,
        nodes,
        isDefenseActive,
        totalBlocked,
        toggleDefense,
        simulateAttack,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = (): SecurityContextType => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error("useSecurity must be used within a SecurityProvider");
  }
  return context;
};
