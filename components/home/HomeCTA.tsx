"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CALL_URL } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";
import QuoteModal from "@/components/ui/QuoteModal";

/**
 * HomeCTA — closing CTA section. Every page must end with a CTA.
 * Dark --cd-black background. No gradients, no shadows.
 */
export default function HomeCTA() {
  const t = useTranslations("home");
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section
      style={{
        backgroundColor: "var(--cd-black)",
        padding: "80px 24px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
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
          {t("ctaEyebrow")}
        </p>

        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--cd-white)",
            marginBottom: "16px",
          }}
        >
          {t("ctaHeading")}
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.6,
            color: "var(--cd-gray-dark-bg-text)",
            marginBottom: "40px",
          }}
        >
          {t("ctaBody")}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
          <button
            onClick={() => setQuoteOpen(true)}
            style={{
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

          <Button
            variant="secondary"
            href={CALL_URL}
            style={{ color: "var(--cd-white)", borderColor: "rgba(255,255,255,0.3)" }}
          >
            {t("ctaCall")}
          </Button>
        </div>
      </div>

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </section>
  );
}
