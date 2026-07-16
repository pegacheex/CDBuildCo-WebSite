"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number;    // e.g. 20
  suffix: string;    // e.g. "+ Years"
  label: string;     // e.g. "In Business"
  duration?: number; // ms, default 1200
}

/**
 * StatCounter — animated count-up triggered exactly once on viewport entry.
 *
 * - Uses IntersectionObserver (threshold: 0.2) to detect viewport entry
 * - Fires EXACTLY ONCE — triggeredRef prevents re-triggers
 * - Count-up via requestAnimationFrame from 0 → target over duration ms
 * - Large number: font-weight 800, clamp(2.5rem, 5vw, 4rem), --cd-orange
 * - Label: 12px, 600, 0.12em letter-spacing, uppercase, --cd-gray-text
 */
export default function StatCounter({
  target,
  suffix,
  label,
  duration = 1200,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  // Store triggered state in a ref — NOT state — to prevent re-renders resetting it
  const triggeredRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Fire exactly once — check ref before doing anything
        if (entry.isIntersecting && !triggeredRef.current) {
          triggeredRef.current = true;

          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Linear interpolation (ease-out achieved by clamping at 1)
            const currentValue = Math.floor(progress * target);
            setCount(currentValue);

            if (progress < 1) {
              rafRef.current = requestAnimationFrame(tick);
            } else {
              // Ensure we land exactly on target
              setCount(target);
            }
          };

          rafRef.current = requestAnimationFrame(tick);

          // Disconnect after first trigger — never re-fires
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
    // duration and target should not change, but list them as deps for correctness
  }, [target, duration]);

  return (
    <div ref={containerRef} style={{ textAlign: "center" }}>
      {/* Large number with suffix */}
      <div
        style={{
          color: "var(--cd-orange)",
          fontWeight: 800,
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          lineHeight: 1,
        }}
        aria-live="polite"
        aria-label={`${count}${suffix}`}
      >
        {count}
        {suffix}
      </div>
      {/* Label below */}
      <div
        style={{
          color: "var(--cd-gray-text)",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginTop: "8px",
        }}
      >
        {label}
      </div>
    </div>
  );
}
