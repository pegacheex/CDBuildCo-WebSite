"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

interface QuoteButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "ghost" | "link";
  preselectedProduct?: string;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * QuoteButton — universal "Get a Quote" trigger.
 * Renders a button that opens the QuoteModal on click.
 * Use variant="primary" for orange filled, "secondary" for outlined,
 * "ghost" for transparent, "link" for inline text link style.
 */
export default function QuoteButton({
  label = "Get a Quote on WhatsApp",
  variant = "primary",
  preselectedProduct,
  style,
  className,
}: QuoteButtonProps) {
  const [open, setOpen] = useState(false);

  const baseStyle: React.CSSProperties = {
    display: "inline-block",
    fontWeight: 600,
    fontSize: "14px",
    borderRadius: "2px",
    cursor: "pointer",
    border: "none",
    fontFamily: "inherit",
    letterSpacing: "0.01em",
    lineHeight: 1,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "var(--cd-orange)",
      color: "var(--cd-white)",
      border: "1px solid var(--cd-orange)",
      padding: "14px 28px",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "var(--cd-white)",
      border: "1px solid rgba(255,255,255,0.3)",
      padding: "14px 28px",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--cd-orange)",
      border: "1px solid var(--cd-orange)",
      padding: "10px 20px",
    },
    link: {
      backgroundColor: "transparent",
      color: "var(--cd-orange)",
      border: "none",
      padding: "0",
      fontSize: "13px",
    },
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{ ...baseStyle, ...variantStyles[variant], ...style }}
        className={className}
      >
        {label}
      </button>

      {open && (
        <QuoteModal
          onClose={() => setOpen(false)}
          preselectedProduct={preselectedProduct}
        />
      )}
    </>
  );
}
