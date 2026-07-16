"use client";

import React, { useEffect, useRef } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * SectionReveal — wraps children with a fade + 8px translateY reveal animation.
 *
 * - IntersectionObserver at 10% threshold (threshold: 0.1)
 * - On first entry: removes opacity-0 + translate-y-[8px], applies opacity-100 + translate-y-0
 * - Transition: transition-all duration-[250ms] ease-out
 * - Fires EXACTLY ONCE — uses a ref to track triggered state, disconnects observer after trigger
 * - Does NOT use useState for triggered to avoid unnecessary re-renders
 */
export default function SectionReveal({ children, className = "" }: SectionRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Track triggered state in a ref — not state — to prevent re-renders
  const triggeredRef = useRef(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Fire exactly once
        if (entry.isIntersecting && !triggeredRef.current) {
          triggeredRef.current = true;

          // Remove initial hidden classes, apply visible classes
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";

          // Disconnect after first trigger — never re-fires
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        // Initial state: invisible, 8px down
        opacity: 0,
        transform: "translateY(8px)",
        // Transition on opacity and transform only — ease-out, 250ms
        transition: "opacity 250ms ease-out, transform 250ms ease-out",
      }}
    >
      {children}
    </div>
  );
}
