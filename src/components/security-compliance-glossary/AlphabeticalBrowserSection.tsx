"use client";

import React from "react";

interface AlphabeticalBrowserProps {
  selectedLetter: string;
  setSelectedLetter: (letter: string) => void;
}

export const AlphabeticalBrowserSection: React.FC<AlphabeticalBrowserProps> = ({
  selectedLetter,
  setSelectedLetter,
}) => {
  const alphabetData = [
    { letter: "A", count: 42 },
    { letter: "B", count: 12 },
    { letter: "C", count: 15 },
    { letter: "D", count: 18 },
    { letter: "E", count: 21 },
    { letter: "F", count: 24 },
    { letter: "G", count: 27 },
    { letter: "H", count: 30 },
    { letter: "I", count: 33 },
    { letter: "J", count: 36 },
    { letter: "K", count: 39 },
    { letter: "L", count: 42 },
    { letter: "M", count: 45 },
    { letter: "N", count: 48 },
    { letter: "O", count: 51 },
    { letter: "P", count: 54 },
    { letter: "Q", count: 57 },
    { letter: "R", count: 60 },
    { letter: "S", count: 63 },
    { letter: "T", count: 66 },
    { letter: "U", count: 69 },
    { letter: "V", count: 72 },
    { letter: "W", count: 75 },
    { letter: "X", count: 0 },
    { letter: "Y", count: 0 },
    { letter: "Z", count: 0 },
  ];

  return (
    <section
      id="alphabetical-browser"
      className="w-full bg-stone-100 border-b border-cyan-950/10 py-10 px-4 sm:px-8 lg:px-28"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-gray-500 text-xs font-bold font-['JetBrains_Mono'] uppercase">
          Browse Alphabetically
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {alphabetData.map((item) => {
            const isZero = item.count === 0;
            const isSelected = selectedLetter === item.letter;

            if (isZero) {
              return (
                <div
                  key={item.letter}
                  className="w-11 sm:w-12 p-2 sm:p-3 opacity-40 bg-stone-200 rounded-lg flex flex-col items-center justify-center cursor-not-allowed select-none"
                  title="No entries currently listed"
                >
                  <span className="text-gray-500 text-base font-extrabold font-['Hanken_Grotesk'] leading-none">
                    {item.letter}
                  </span>
                  <span className="text-gray-500 text-[10px] font-normal font-['JetBrains_Mono'] leading-none mt-1">
                    0
                  </span>
                </div>
              );
            }

            return (
              <button
                key={item.letter}
                type="button"
                onClick={() =>
                  setSelectedLetter(isSelected ? "" : item.letter)
                }
                className={`w-11 sm:w-12 p-2 sm:p-3 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer select-none ${
                  isSelected
                    ? "bg-red-500 text-white shadow-xs"
                    : "bg-white hover:bg-stone-50 text-slate-900 outline outline-1 outline-offset-[-1px] outline-cyan-950/10"
                }`}
              >
                <span
                  className={`text-base font-extrabold font-['Hanken_Grotesk'] leading-none ${
                    isSelected ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.letter}
                </span>
                <span
                  className={`text-[10px] font-normal font-['JetBrains_Mono'] leading-none mt-1 ${
                    isSelected ? "text-white" : "text-gray-500"
                  }`}
                >
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
