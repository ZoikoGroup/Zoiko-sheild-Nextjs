"use client";

import React from "react";

export default function ExternalLinksSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex gap-2 items-center w-full">
        <div className="bg-[#c44242] h-[2px] w-4 lg:w-6 shrink-0" />
        <p className="font-jetbrains font-bold text-[#c44242] text-[12px] tracking-[1.2px] lg:tracking-[1.5px] uppercase m-0">
          06. EXTERNAL LINKS &amp; THIRD-PARTY SERVICES
        </p>
      </div>
      <p className="font-sans font-normal leading-[22px] lg:leading-[1.6] text-[14px] lg:text-[15px] text-[#5b6670] m-0 w-full">
        We may provide descriptive links to external directories, security
        standards boards, or regulatory frameworks. We maintain no
        responsibility for the uptime, content, accessibility standards, or
        privacy policies of third-party domains.
      </p>

      <div className="bg-[#f0ede6] flex items-start p-4 rounded-[8px] w-full">
        <p className="font-sans text-[13px] text-[#5b6670] leading-[20px] lg:leading-[1.5] m-0">
          <span className="font-bold">Broken Links &amp; Errors: </span>
          External linking does not represent a blanket endorsement. To
          report dead or misdirected routing, please notify the Web
          Operations Team.
        </p>
      </div>
    </div>
  );
}
