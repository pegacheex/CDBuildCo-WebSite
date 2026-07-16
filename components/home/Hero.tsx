"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { CALL_URL } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";
import QuoteModal from "@/components/ui/QuoteModal";

/**
 * Hero — dark --cd-black section with headline, subheadline, and CTAs.
 * Animates on load: fade + 8px upward slide, 250ms ease-out.
 * NO animation on the CTA buttons themselves.
 */
export default function Hero() {
  const t = useTranslations("hero");
  const contentRef = useRef<HTMLDivElement>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    // Trigger fade + slide up on mount
    requestAnimationFrame(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section
      style={{
        backgroundColor: "var(--cd-black)",
        padding: "96px 24px 80px",
        position: "relative",
      }}
    >
      {/* Hairline bottom border */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.08)",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Eyebrow label */}
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--cd-orange)",
            marginBottom: "24px",
          }}
        >
          {t("eyebrow")}
        </p>

        {/* Animated content block */}
        <div
          ref={contentRef}
          style={{
            opacity: 0,
            transform: "translateY(8px)",
            transition: "opacity 250ms ease-out, transform 250ms ease-out",
          }}
        >
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--cd-white)",
              marginBottom: "24px",
            }}
          >
            {t("headline")}
          </h1>

          <p
            style={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "var(--cd-gray-dark-bg-text)",
              maxWidth: "680px",
              marginBottom: "40px",
            }}
          >
            {t("subheadline")}
          </p>

          {/* CTAs — no animation on these */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              alignItems: "center",
            }}
          >
            {/* Primary: Get a Quote — opens modal */}
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
              {t("ctaWhatsApp")}
            </button>

            {/* Secondary: Call */}
            <Button
              variant="secondary"
              href={CALL_URL}
              style={{
                color: "var(--cd-white)",
                borderColor: "rgba(255,255,255,0.3)",
              }}
            >
              {t("ctaCall")}
            </Button>
          </div>
        </div>
      </div>

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </section>
  );
}
