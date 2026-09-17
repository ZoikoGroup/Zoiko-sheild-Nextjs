import React from 'react';

const historyData = [
  {
    status: 'Current',
    statusBg: 'bg-[#E4F0EC] text-[#0A2029]',
    title: 'Edition / version: controlled placeholder',
    reviewDate: 'Review date: pending approval',
    description: 'Public relationship is approved and active.',
  },
  {
    status: 'Under review',
    statusBg: 'bg-[#FFF3D7] text-[#0A2029]',
    title: 'Edition / version: controlled placeholder',
    reviewDate: 'Review date: pending',
    description: 'Relationship, scope, evidence, or rights are being evaluated.',
  },
  {
    status: 'Superseded',
    statusBg: 'bg-[#F0EDE6] text-[#0A2029]',
    title: 'Exact prior edition retained',
    reviewDate: 'Review date retained',
    description: 'Replaced by a named newer record; not treated as equivalent.',
  },
  {
    status: 'Withdrawn',
    statusBg: 'bg-[#F0EDE6] text-[#0A2029]',
    title: 'Exact edition retained for history',
    reviewDate: 'Withdrawal date required',
    description: 'No longer presented as a supported public relationship.',
  },
];

export default function VersionHistory() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-16 lg:px-24 font-sans antialiased flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Title & Description */}
        <div className="lg:col-span-4 space-y-4">
          <p className="text-[#1F7A6C] text-xs font-bold tracking-[0.15em] uppercase">
            VERSION AND CHANGE HISTORY
          </p>
          <h1 className="text-4xl md:text-[40px] font-bold tracking-tight text-[#111827] leading-tight">
            Exact editions, visible lifecycle.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Compare records only where the relationship basis and scope are compatible. A newer edition never silently inherits an older mapping.
          </p>
        </div>

        {/* Right Side: List / Table Rows */}
        <div className="lg:col-span-8 flex flex-col">
          {historyData.map((item, index) => (
            <div 
              key={index}
              className="py-6 border-t border-[#E5E7EB] last:border-b grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
            >
              {/* Status Badge */}
              <div className="sm:col-span-3">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${item.statusBg}`}>
                  {item.status}
                </span>
              </div>

              {/* Title / Version */}
              <div className="sm:col-span-4">
                <p className="text-sm font-semibold text-[#111827]">
                  {item.title}
                </p>
              </div>

              {/* Review Date */}
              <div className="sm:col-span-2">
                <p className="text-xs text-[#4B5563]">
                  {item.reviewDate}
                </p>
              </div>

              {/* Description */}
              <div className="sm:col-span-3">
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}