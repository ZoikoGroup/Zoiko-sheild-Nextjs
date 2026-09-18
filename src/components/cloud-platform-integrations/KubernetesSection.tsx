"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const bullets = [
  "Runtime API Server audit log parsing in sub-second latency",
  "Privileged container and capability escalation protection verification",
  "Service Account token boundary auditing",
  "EKS, AKS, and GKE native cloud connector orchestration",
];

export default function KubernetesSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-[40px] items-start mx-auto max-w-[1440px] px-[22px] lg:px-[108px] py-[22px] lg:py-[80px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center w-full"
        >
          <div className="relative border border-[rgba(18,59,76,0.1)] w-full h-[240px] lg:size-full lg:h-auto lg:max-w-[560px] lg:aspect-square rounded-[12px] shadow-[0px_16px_32px_rgba(10,32,41,0.04)] overflow-hidden">
            <Image
              src="/images/cloud-platform-integrations/kubernetes-visual.webp"
              alt="Kubernetes cluster runtime visualization"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 items-start flex-1 min-w-0 w-full"
        >
          <div className="flex flex-col gap-4 items-start w-full">
            <div className="flex gap-2 items-center">
              <div className="bg-[#c44242] size-[8px] shrink-0" />
              <p className="font-jetbrains font-bold text-[13px] text-[#c44242] tracking-[1.68px] uppercase m-0">
                KUBERNETES & CONTAINERS
              </p>
            </div>
            <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] sm:text-[34px] lg:text-[38px] text-[#0a2029] tracking-[-0.76px] m-0">
              Cluster-native runtime proof
            </h2>
            <p className="font-manrope font-medium leading-[21px] lg:leading-[25px] text-[14px] lg:text-[16.5px] text-[#5b6670] m-0 max-w-[560px]">
              Deep security control monitoring for orchestrated
              microservices. Translate pod specs and cluster activity
              directly to audit states.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start w-full">
            {bullets.map((b) => (
              <div key={b} className="flex gap-2 items-center">
                <div className="bg-[#c44242] rounded-full size-[6px] shrink-0" />
                <p className="font-manrope font-normal text-[#0a2029] text-[14.5px] m-0">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
