import React from "react";

interface PlaceholderBlockProps {
  label: string;
  aspectRatio: string; // e.g. "16/9", "4/3", "1/1"
  className?: string;
  ariaLabel?: string;
}

/**
 * PlaceholderBlock — clearly marked layout block reserved for future media.
 *
 * - --cd-stone (#EFEDE6) background
 * - 1px solid --cd-line border
 * - Centered label in --cd-gray-text, 12px, 600, 0.12em letter-spacing, uppercase
 * - Uses aspect-ratio CSS to prevent CLS
 * - role="img" + aria-label for accessibility
 * - NO shadow, NO border-radius above 4px, NO gradient
 */
export default function PlaceholderBlock({
  label,
  aspectRatio,
  className = "",
  ariaLabel,
}: PlaceholderBlockProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel ?? label}
      className={className}
      style={{
        aspectRatio,
        backgroundColor: "var(--cd-stone)",
        border: "1px solid var(--cd-line)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // No shadow, no gradient, no border-radius above 4px
        boxShadow: "none",
        borderRadius: "0px",
      }}
    >
      <span
        style={{
          color: "var(--cd-gray-text)",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textAlign: "center",
          padding: "0 16px",
          userSelect: "none",
        }}
      >
        {label}
      </span>
    </div>
  );
}
