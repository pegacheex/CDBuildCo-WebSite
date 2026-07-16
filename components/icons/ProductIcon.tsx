/**
 * ProductIcon — line icons for each product category.
 * All icons: fill="none", stroke="currentColor", strokeWidth between 1.5 and 2.
 * Never filled/solid.
 */

interface ProductIconProps {
  name: string;
  size?: number;
  color?: string;
}

export default function ProductIcon({ name, size = 32, color = "var(--cd-black)" }: ProductIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "cement-bag":
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
          <line x1="9" y1="3" x2="9" y2="8" />
          <line x1="15" y1="3" x2="15" y2="8" />
          <path d="M8 12 h8" />
        </svg>
      );

    case "water-drop":
      return (
        <svg {...props}>
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );

    case "rebar":
      return (
        <svg {...props}>
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="8" x2="21" y2="8" />
          <line x1="3" y1="16" x2="21" y2="16" />
          <line x1="6" y1="5" x2="6" y2="19" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="18" y1="5" x2="18" y2="19" />
        </svg>
      );

    case "beam":
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="7" y1="7" x2="7" y2="17" />
          <line x1="17" y1="7" x2="17" y2="17" />
        </svg>
      );

    case "roof":
      return (
        <svg {...props}>
          <polyline points="3 12 12 4 21 12" />
          <polyline points="5 10 5 20 19 20 19 10" />
          <line x1="9" y1="20" x2="9" y2="14" />
          <line x1="15" y1="20" x2="15" y2="14" />
          <rect x="9" y="14" width="6" height="6" />
        </svg>
      );

    case "faucet":
      return (
        <svg {...props}>
          <path d="M5 8h6a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2h2" />
          <path d="M19 13v4" />
          <circle cx="19" cy="19" r="2" />
          <path d="M5 8V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" />
          <line x1="3" y1="8" x2="7" y2="8" />
        </svg>
      );

    case "grill":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      );

    case "water-tank":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="7" rx="9" ry="3" />
          <path d="M3 7v10c0 1.66 4.03 3 9 3s9-1.34 9-3V7" />
          <line x1="12" y1="17" x2="12" y2="20" />
          <line x1="8" y1="20" x2="16" y2="20" />
        </svg>
      );

    case "tile":
      return (
        <svg {...props}>
          {/* 2x2 grid of rectangles representing tiles */}
          <rect x="3" y="3" width="8" height="8" />
          <rect x="13" y="3" width="8" height="8" />
          <rect x="3" y="13" width="8" height="8" />
          <rect x="13" y="13" width="8" height="8" />
        </svg>
      );

    default:
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" />
        </svg>
      );
  }
}
