import React from "react";
import { Link } from "@/lib/navigation";

interface ButtonProps {
  variant: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  [key: string]: unknown; // forward any additional HTML attributes
}

/**
 * CD Enterprises Button component
 *
 * - Automatically detects internal vs external hrefs:
 *   - Internal paths: renders localized `<Link>` from `@/lib/navigation` (e.g. `/about`)
 *   - External/tel/whatsapp paths: renders standard `<a>` tag
 * - border-radius: 2px (enforced via inline style — no default rounded utilities)
 * - No box-shadow, no gradient
 * - Hover: 150ms border/color transition only — no transform, no scale
 * - font-weight: 600, font-size: 14px, padding: 12px 24px
 */
export default function Button({
  variant,
  href,
  onClick,
  children,
  ariaLabel,
  className = "",
  style,
  ...rest
}: ButtonProps & { style?: React.CSSProperties }) {
  // Base styles shared across all variants
  const baseStyle: React.CSSProperties = {
    borderRadius: "2px",
    fontWeight: 600,
    fontSize: "14px",
    padding: "12px 24px",
    display: "inline-block",
    textDecoration: "none",
    cursor: "pointer",
    border: "1px solid transparent",
    // Transition only on color/border — no transform, no shadow
    transition: "color 150ms ease-out, border-color 150ms ease-out, background-color 150ms ease-out",
    lineHeight: 1.1,
    textAlign: "center",
  };

  // Variant-specific base styles (non-hover state)
  const variantStyles: Record<"primary" | "secondary" | "ghost", React.CSSProperties> = {
    primary: {
      backgroundColor: "var(--cd-orange)",
      color: "var(--cd-white)",
      borderColor: "var(--cd-orange)",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "var(--cd-black)",
      borderColor: "var(--cd-line)",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--cd-gray-text)",
      border: "none",
    },
  };

  const combinedStyle = {
    ...baseStyle,
    ...variantStyles[variant],
    ...(style || {}),
  };

  // CSS class string — use data attribute for hover targeting via global CSS
  const variantClass = `cd-btn cd-btn--${variant}`;
  const fullClassName = [variantClass, className].filter(Boolean).join(" ");

  if (href) {
    const isExternal = /^(https?:|tel:|mailto:|wa\.me)/.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          style={combinedStyle}
          className={fullClassName}
          aria-label={ariaLabel}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        style={combinedStyle}
        className={fullClassName}
        aria-label={ariaLabel}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={combinedStyle}
      className={fullClassName}
      aria-label={ariaLabel}
      type="button"
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
