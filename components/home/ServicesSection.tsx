import { getTranslations } from "next-intl/server";

const SERVICE_KEYS = [
  "retail",
  "wholesale",
  "delivery",
  "guidance",
] as const;

/**
 * ServicesSection — 4 service items in a grid.
 * Server component. Flat design, hairline borders, no shadow.
 */
export default async function ServicesSection() {
  const t = await getTranslations("home");

  return (
    <section
      style={{
        padding: "80px 24px",
        backgroundColor: "var(--cd-stone)",
        borderTop: "1px solid var(--cd-line)",
        borderBottom: "1px solid var(--cd-line)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Eyebrow */}
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
          {t("servicesEyebrow")}
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
          {t("servicesHeading")}
        </h2>

        {/* 4-column grid — stacks on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1px",
            border: "1px solid var(--cd-line)",
            backgroundColor: "var(--cd-line)",
          }}
        >
          {SERVICE_KEYS.map((key, i) => (
            <div
              key={key}
              style={{
                padding: "32px 24px",
                backgroundColor: "var(--cd-white)",
              }}
            >
              {/* Service number */}
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "var(--cd-orange)",
                  marginBottom: "16px",
                }}
              >
                0{i + 1}
              </p>

              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "16px",
                  color: "var(--cd-black)",
                  marginBottom: "12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {t(`service.${key}.name` as Parameters<typeof t>[0])}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "var(--cd-gray-text)",
                }}
              >
                {t(`service.${key}.description` as Parameters<typeof t>[0])}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
