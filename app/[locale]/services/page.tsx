import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import PageCTA from "@/components/ui/PageCTA";
import ServiceEnquiryForm from "@/components/services/ServiceEnquiryForm";

export const metadata: Metadata = {
  title: "Services | CD Enterprises — Retail, Wholesale & Delivery, Wai",
  description:
    "Retail and wholesale supply of building materials in Wai Taluka. Doorstep delivery, expert material guidance. Contact CD Enterprises for your project requirements.",
};

const SERVICES = [
  { key: "retail", icon: "→" },
  { key: "wholesale", icon: "→" },
  { key: "delivery", icon: "→" },
  { key: "guidance", icon: "→" },
] as const;

export default async function ServicesPage() {
  const t = await getTranslations("services");

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

      {/* Services detail */}
      <SectionReveal>
        <section style={{ padding: "80px 24px", backgroundColor: "var(--cd-white)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {SERVICES.map((svc, i) => (
                <div
                  key={svc.key}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "0",
                    borderTop: "1px solid var(--cd-line)",
                    padding: "48px 0",
                  }}
                >
                  {/* Number */}
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      color: "var(--cd-orange)",
                      paddingTop: "4px",
                    }}
                  >
                    0{i + 1}
                  </p>

                  {/* Content */}
                  <div style={{ maxWidth: "640px" }}>
                    <h2
                      style={{
                        fontWeight: 800,
                        fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                        letterSpacing: "-0.02em",
                        color: "var(--cd-black)",
                        marginBottom: "16px",
                      }}
                    >
                      {t(`${svc.key}.name` as Parameters<typeof t>[0])}
                    </h2>
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: "var(--cd-gray-text)",
                        marginBottom: "24px",
                      }}
                    >
                      {t(`${svc.key}.description` as Parameters<typeof t>[0])}
                    </p>
                    <ServiceEnquiryForm
                      serviceName={t(`${svc.key}.name` as Parameters<typeof t>[0])}
                      serviceDescription={t(`${svc.key}.description` as Parameters<typeof t>[0])}
                    />
                  </div>
                </div>
              ))}

              {/* Bottom border */}
              <div style={{ borderTop: "1px solid var(--cd-line)" }} />
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
