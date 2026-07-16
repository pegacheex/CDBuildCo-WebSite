import { getTranslations } from "next-intl/server";
import StatCounter from "@/components/ui/StatCounter";
import PlaceholderBlock from "@/components/ui/PlaceholderBlock";

/**
 * TrustSection — stat counters, photo placeholders, certification placeholders.
 * StatCounter is a client component (count-up animation).
 * Everything else is server-rendered.
 */
export default async function TrustSection() {
  const t = await getTranslations("home");

  // ACC, JSW, Dr. Fixit are authorised dealerships
  const CERT_BRANDS = ["ACC", "JSW", "Dr. Fixit"] as const;

  return (
    <section
      style={{
        padding: "80px 24px",
        backgroundColor: "var(--cd-white)",
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
          {t("trustEyebrow")}
        </p>

        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--cd-black)",
            marginBottom: "56px",
          }}
        >
          {t("trustHeading")}
        </h2>

        {/* ── Stat counters ───────────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "0",
            border: "1px solid var(--cd-line)",
            marginBottom: "64px",
          }}
        >
          {/* 25+ Years */}
          <div
            style={{
              padding: "40px 24px",
              borderRight: "1px solid var(--cd-line)",
              textAlign: "center",
            }}
          >
            <StatCounter target={25} suffix="+" label={t("statYears")} />
          </div>

          {/* 3 Authorised brands (ACC, JSW, Dr. Fixit) */}
          <div
            style={{
              padding: "40px 24px",
              borderRight: "1px solid var(--cd-line)",
              textAlign: "center",
            }}
          >
            <StatCounter target={3} suffix="" label={t("statBrands")} />
          </div>

          {/* 100% Genuine */}
          <div
            style={{
              padding: "40px 24px",
              borderRight: "1px solid var(--cd-line)",
              textAlign: "center",
            }}
          >
            <StatCounter target={100} suffix="%" label={t("statGenuine")} />
          </div>

          {/* 3 Generations */}
          <div
            style={{
              padding: "40px 24px",
              textAlign: "center",
            }}
          >
            <StatCounter target={3} suffix="" label={t("statGenerations")} />
          </div>
        </div>

        {/* ── Photo placeholders ─────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          <PlaceholderBlock
            label={t("photoTeam")}
            aspectRatio="4/3"
          />
          <PlaceholderBlock
            label={t("photoGodown")}
            aspectRatio="4/3"
          />
          <PlaceholderBlock
            label={t("photoDelivery")}
            aspectRatio="4/3"
          />
        </div>

        {/* ── Certification placeholders ────────────────────────────── */}
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--cd-gray-text)",
            marginBottom: "24px",
          }}
        >
          {t("certHeading")}
        </p>

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
  );
}
