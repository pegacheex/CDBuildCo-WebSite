"use client";

import { useState } from "react";
import { CALL_URL } from "@/lib/whatsapp";
import QuoteModal from "./QuoteModal";

interface PageCTAProps {
  eyebrow: string;
  heading: string;
  ctaLabel: string;
  callLabel: string;
  preselectedProduct?: string;
}

/**
 * PageCTA — reusable dark-background section-end CTA block.
 * Primary button opens QuoteModal; secondary is the Call CTA.
 */
export default function PageCTA({
  eyebrow,
  heading,
  ctaLabel,
  callLabel,
  preselectedProduct,
}: PageCTAProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section
      style={{
        backgroundColor: "var(--cd-black)",
        padding: "80px 24px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--cd-orange)",
            marginBottom: "16px",
          }}
        >
          {eyebrow}
        </p>
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            letterSpacing: "-0.02em",
            color: "var(--cd-white)",
            marginBottom: "24px",
          }}
        >
          {heading}
        </h2>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => setQuoteOpen(true)}
            style={{
              display: "inline-block",
              backgroundColor: "var(--cd-orange)",
              color: "var(--cd-white)",
              fontWeight: 600,
              fontSize: "14px",
              padding: "14px 28px",
              borderRadius: "2px",
              border: "1px solid var(--cd-orange)",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {ctaLabel}
          </button>
          <a
            href={CALL_URL}
            style={{
              display: "inline-block",
              backgroundColor: "transparent",
              color: "var(--cd-white)",
              fontWeight: 600,
              fontSize: "14px",
              padding: "14px 28px",
              borderRadius: "2px",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            {callLabel}
          </a>
        </div>
      </div>

      {quoteOpen && (
        <QuoteModal
          onClose={() => setQuoteOpen(false)}
          preselectedProduct={preselectedProduct}
        />
      )}
    </section>
  );
}
