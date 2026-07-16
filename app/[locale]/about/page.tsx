import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PlaceholderBlock from "@/components/ui/PlaceholderBlock";
import SectionReveal from "@/components/ui/SectionReveal";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: "About Us | CD Enterprises — 25+ Years, Wai Taluka",
  description:
    "CD Enterprises has been serving Wai Taluka since 1997. Led by Dhiraj Oswal and Chetan Oswal — authorised dealer for ACC Cement and JSW.",
};

// ACC, JSW, Dr. Fixit are authorised dealerships
const CERT_BRANDS = ["ACC", "JSW", "Dr. Fixit"] as const;

const PILLARS = [
  "multiband",
  "years",
  "oneStop",
  "pricing",
  "delivery",
] as const;

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <>
      {/* Page header */}
      <section
        style={{
          backgroundColor: "var(--cd-black)",
          padding: "80px 24px 64px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            {t("eyebrow")}
          </p>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "var(--cd-white)",
              marginBottom: "16px",
            }}
          >
            {t("heading")}
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "var(--cd-gray-dark-bg-text)",
              maxWidth: "640px",
            }}
          >
            {t("subheading")}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <SectionReveal>
        <section style={{ padding: "80px 24px", backgroundColor: "var(--cd-white)" }}>
          <div
            className="cd-about-story-grid"
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div style={{ maxWidth: "720px" }}>
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
                {t("storyEyebrow")}
              </p>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "var(--cd-black)",
                  marginBottom: "24px",
                }}
              >
                {t("storyHeading")}
              </h2>
              <div style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--cd-gray-text)" }}>
                <p style={{ marginBottom: "16px" }}>{t("storyP1")}</p>
                <p style={{ marginBottom: "16px" }}>{t("storyP2")}</p>
                <p>{t("storyP3")}</p>
              </div>
            </div>

            {/* Team photo placeholder */}
            <PlaceholderBlock
              label={t("teamPhotoLabel")}
              aspectRatio="16/9"
            />
          </div>
        </section>
      </SectionReveal>

      {/* Authorised Dealer Certificates */}
      <SectionReveal>
        <section
          style={{
            padding: "80px 24px",
            backgroundColor: "var(--cd-stone)",
            borderTop: "1px solid var(--cd-line)",
            borderBottom: "1px solid var(--cd-line)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              {t("certEyebrow")}
            </p>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--cd-black)",
                marginBottom: "48px",
              }}
            >
              {t("certHeading")}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {CERT_BRANDS.map((brand) => (
                <PlaceholderBlock
                  key={brand}
                  label={`${brand} ${t("certLabel")}`}
                  aspectRatio="3/2"
                />
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Why Choose Us */}
      <SectionReveal>
        <section style={{ padding: "80px 24px", backgroundColor: "var(--cd-white)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              {t("whyEyebrow")}
            </p>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--cd-black)",
                marginBottom: "48px",
              }}
            >
              {t("whyHeading")}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "1px",
                border: "1px solid var(--cd-line)",
                backgroundColor: "var(--cd-line)",
              }}
            >
              {PILLARS.map((key, i) => (
                <div
                  key={key}
                  style={{
                    padding: "32px 24px",
                    backgroundColor: "var(--cd-white)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      color: "var(--cd-orange)",
                      marginBottom: "12px",
                    }}
                  >
                    0{i + 1}
                  </p>
                  <h3
                    style={{
                      fontWeight: 800,
                      fontSize: "15px",
                      color: "var(--cd-black)",
                      marginBottom: "8px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t(`pillar.${key}.name` as Parameters<typeof t>[0])}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--cd-gray-text)" }}>
                    {t(`pillar.${key}.description` as Parameters<typeof t>[0])}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Page-end CTA */}
      <PageCTA
        eyebrow={t("ctaEyebrow")}
        heading={t("ctaHeading")}
        ctaLabel="Get a Quote on WhatsApp"
        callLabel="Call Now: 91758 71222"
      />
    </>
  );
}
