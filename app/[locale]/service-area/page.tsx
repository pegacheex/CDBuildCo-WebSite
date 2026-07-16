import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: "Service Area | CD Enterprises — Wai Taluka",
  description:
    "CD Enterprises delivers building materials across the entire Wai Taluka — Wai, Panchgani, Mahabaleshwar. Call or WhatsApp to confirm delivery.",
};

const AREAS = ["wai", "panchgani", "mahabaleshwar"] as const;

export default async function ServiceAreaPage() {
  const t = await getTranslations("serviceArea");

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
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cd-orange)", marginBottom: "16px" }}>
            {t("eyebrow")}
          </p>
          <h1 style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--cd-white)", marginBottom: "16px" }}>
            {t("heading")}
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--cd-gray-dark-bg-text)", maxWidth: "640px" }}>
            {t("subheading")}
          </p>
        </div>
      </section>

      {/* Map + coverage */}
      <SectionReveal>
        <section style={{ padding: "80px 24px", backgroundColor: "var(--cd-white)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

            {/* Google Maps showing Wai Taluka, Panchgani, Mahabaleshwar coverage area */}
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cd-gray-text)", marginBottom: "16px" }}>
              {t("mapLabel")}
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120754.82!2d73.8200!3d17.9200!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc238b7e9b8a123%3A0x5a1234567890abcd!2sWai%20Taluka%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720000000001!5m2!1sen!2sin"
              width="100%"
              style={{
                aspectRatio: "16/7",
                border: "1px solid var(--cd-line)",
                backgroundColor: "var(--cd-stone)",
                display: "block",
                marginBottom: "64px",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CD Enterprises Service Area — Wai Taluka, Panchgani, Mahabaleshwar"
            />

            {/* Coverage areas */}
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cd-orange)", marginBottom: "16px" }}>
              {t("areasEyebrow")}
            </p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em", color: "var(--cd-black)", marginBottom: "32px" }}>
              {t("areasHeading")}
            </h2>

            {/* 3 area cards with descriptions */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", border: "1px solid var(--cd-line)", backgroundColor: "var(--cd-line)", marginBottom: "32px" }}>
              <div style={{ padding: "32px 24px", backgroundColor: "var(--cd-white)" }}>
                <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cd-orange)", marginBottom: "8px" }}>01</p>
                <p style={{ fontWeight: 800, fontSize: "18px", color: "var(--cd-black)", marginBottom: "8px" }}>{t("area.wai" as Parameters<typeof t>[0])}</p>
                <p style={{ fontSize: "14px", color: "var(--cd-gray-text)", lineHeight: 1.6 }}>Town centre and surrounding villages. Our base of operations since 1997.</p>
              </div>
              <div style={{ padding: "32px 24px", backgroundColor: "var(--cd-white)" }}>
                <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cd-orange)", marginBottom: "8px" }}>02</p>
                <p style={{ fontWeight: 800, fontSize: "18px", color: "var(--cd-black)", marginBottom: "8px" }}>{t("area.panchgani" as Parameters<typeof t>[0])}</p>
                <p style={{ fontSize: "14px", color: "var(--cd-gray-text)", lineHeight: 1.6 }}>Full delivery coverage including surrounding areas.</p>
              </div>
              <div style={{ padding: "32px 24px", backgroundColor: "var(--cd-white)" }}>
                <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cd-orange)", marginBottom: "8px" }}>03</p>
                <p style={{ fontWeight: 800, fontSize: "18px", color: "var(--cd-black)", marginBottom: "8px" }}>{t("area.mahabaleshwar" as Parameters<typeof t>[0])}</p>
                <p style={{ fontSize: "14px", color: "var(--cd-gray-text)", lineHeight: 1.6 }}>Serving the Mahabaleshwar region for construction and renovation projects.</p>
              </div>
            </div>

            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--cd-gray-text)" }}>
              {t("areasNote")}
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* CTA */}
      <PageCTA
        eyebrow={t("ctaEyebrow")}
        heading={t("ctaHeading")}
        ctaLabel="Get a Quote on WhatsApp"
        callLabel="Call Now: 91758 71222"
      />
    </>
  );
}
