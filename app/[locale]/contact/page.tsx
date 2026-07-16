import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import EnquiryForm from "@/components/contact/EnquiryForm";
import { NAP } from "@/lib/nap";
import { CALL_URL } from "@/lib/whatsapp";
import QuoteButton from "@/components/ui/QuoteButton";

export const metadata: Metadata = {
  title: "Contact | CD Enterprises — Get a Quote, Wai Taluka",
  description:
    "Get a quote from CD Enterprises — authorised building materials dealer in Wai, Satara. WhatsApp, call, or fill in the enquiry form. Fast response guaranteed.",
};

export default async function ContactPage() {
  const t = await getTranslations("contact");

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

      {/* Quick CTAs */}
      <SectionReveal>
        <section
          style={{
            padding: "64px 24px",
            backgroundColor: "var(--cd-stone)",
            borderBottom: "1px solid var(--cd-line)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1px",
                border: "1px solid var(--cd-line)",
                backgroundColor: "var(--cd-line)",
              }}
            >
              {/* WhatsApp */}
              <div
                style={{
                  padding: "40px 32px",
                  backgroundColor: "var(--cd-white)",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--cd-orange)",
                    marginBottom: "12px",
                  }}
                >
                  {t("primaryCTALabel")}
                </p>
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "18px",
                    color: "var(--cd-black)",
                    marginBottom: "16px",
                  }}
                >
                  {t("whatsAppHeading")}
                </p>
                <QuoteButton
                  label={t("whatsAppHeading")}
                  variant="primary"
                  style={{ fontSize: "14px", padding: "12px 24px" }}
                />
              </div>

              {/* Call */}
              <div
                style={{
                  padding: "40px 32px",
                  backgroundColor: "var(--cd-white)",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--cd-gray-text)",
                    marginBottom: "12px",
                  }}
                >
                  {t("callLabel")}
                </p>
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "18px",
                    color: "var(--cd-black)",
                    marginBottom: "16px",
                  }}
                >
                  {t("callHeading")}
                </p>
                <a
                  href={CALL_URL}
                  style={{
                    display: "inline-block",
                    backgroundColor: "transparent",
                    color: "var(--cd-black)",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: "12px 24px",
                    borderRadius: "2px",
                    textDecoration: "none",
                    border: "1px solid var(--cd-line)",
                  }}
                >
                  {NAP.phone}
                </a>
              </div>

              {/* NAP block */}
              <div
                style={{
                  padding: "40px 32px",
                  backgroundColor: "var(--cd-white)",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--cd-gray-text)",
                    marginBottom: "12px",
                  }}
                >
                  {t("addressLabel")}
                </p>
                <address
                  style={{
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "var(--cd-gray-text)",
                  }}
                >
                  <strong style={{ color: "var(--cd-black)", fontWeight: 600, display: "block", marginBottom: "4px" }}>{NAP.brandName}</strong>
                  <span style={{ fontSize: "12px", color: "var(--cd-gray-text)", display: "block", marginBottom: "8px" }}>{NAP.legalName}</span>
                  {NAP.address}
                  <br />
                  <a href={NAP.callLink} style={{ color: "var(--cd-gray-text)", textDecoration: "none", display: "block" }}>
                    Call: {NAP.phone}
                  </a>
                  <a href={NAP.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "var(--cd-gray-text)", textDecoration: "none", display: "block" }}>
                    WhatsApp: 84840 77773
                  </a>
                  <span style={{ display: "block", marginTop: "8px", fontSize: "12px" }}>
                    {NAP.hours}
                  </span>
                  <strong style={{ color: "var(--cd-orange)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Open 7 Days — No Weekly Off
                  </strong>
                </address>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Enquiry form */}
      <SectionReveal>
        <section style={{ padding: "80px 24px", backgroundColor: "var(--cd-white)" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "64px",
            }}
          >
            <div style={{ maxWidth: "560px" }}>
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
                {t("formEyebrow")}
              </p>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--cd-black)",
                  marginBottom: "8px",
                }}
              >
                {t("formHeading")}
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--cd-gray-text)",
                  marginBottom: "32px",
                  lineHeight: 1.6,
                }}
              >
                {t("formSubheading")}
              </p>
              <EnquiryForm />
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Map / Directions placeholder */}
      <SectionReveal>
        <section
          style={{
            padding: "80px 24px",
            backgroundColor: "var(--cd-stone)",
            borderTop: "1px solid var(--cd-line)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--cd-gray-text)",
                marginBottom: "16px",
              }}
            >
              {t("directionsLabel")}
            </p>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                letterSpacing: "-0.02em",
                color: "var(--cd-black)",
                marginBottom: "24px",
              }}
            >
              {t("directionsHeading")}
            </h2>
            {/* Google Maps embed — WVRV+R5 Songirwadi Rural, Maharashtra (CD Enterprises location) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.0!2d73.8872!3d17.9490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zV1ZSVitSNSBTb25naXJ3YWRpIFJ1cmFsLCBNYWhhcmFzaHRyYQ!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin&q=WVRV%2BR5+Songirwadi+Rural,+Maharashtra"
              width="100%"
              style={{
                aspectRatio: "16/6",
                border: "1px solid var(--cd-line)",
                backgroundColor: "var(--cd-stone)",
                display: "block",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("mapAriaLabel")}
            />
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
