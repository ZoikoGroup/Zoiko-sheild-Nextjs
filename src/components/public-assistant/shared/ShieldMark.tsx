import { useId } from "react";

// Centres of the square circuit nodes on either side of the keyhole.
const NODES: ReadonlyArray<readonly [number, number]> = [
  [14, 9.5], [8.5, 15.5], [14, 18.7], [14, 24], [9.3, 30], [14, 38.3],
  [37, 7], [41.5, 15.5], [37, 21.7], [37, 27], [42.3, 30], [37, 36.1],
];

// The Zoiko Shield symbol (circuit shield with keyhole), drawn in currentColor so it
// takes the text colour of wherever it sits. Traced from public/images/favicon.png.
export function ShieldMark({ className }: { className?: string }) {
  const mask = useId();
  return (
    <svg viewBox="0 0 52 56" className={className} aria-hidden focusable="false">
      <mask id={mask}>
        <path d="M1 8Q0.5 3 5 2.5Q26-1 47 2.5Q51.5 3 51.5 8Q50 38 26 55.5Q2 38 1 8Z" fill="white" />
        <g fill="black">
          <rect x="25" y="0" width="1.4" height="56" />
          <circle cx="25.6" cy="21.5" r="5.8" />
          <path d="M22.2 26h6.8l2.3 9.3h-11.4z" />
          {NODES.map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x - 1.4} y={y - 1.4} width="2.8" height="2.8" />
          ))}
        </g>
        <path
          d="M14 9.5V18.7M8.5 15.5V27.5L5 31V40M14 24V32.5L19.5 38V53M9.3 30V40M14 38.3V46M31 0V8.5L37 14.5V21.7M37 27V36.1M37 0V7M41.5 0V15.5M45.5 0V17.5L42.3 20.7V30"
          stroke="black"
          strokeWidth="1.4"
          fill="none"
        />
      </mask>
      <rect width="52" height="56" fill="currentColor" mask={`url(#${mask})`} />
    </svg>
  );
}
