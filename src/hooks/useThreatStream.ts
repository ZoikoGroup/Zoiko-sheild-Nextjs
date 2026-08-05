import { useSecurity } from "@/context/SecurityContext";

export const useThreatStream = () => {
  const { threats, totalBlocked, isDefenseActive, simulateAttack, toggleDefense } = useSecurity();
  return { threats, totalBlocked, isDefenseActive, simulateAttack, toggleDefense };
};
