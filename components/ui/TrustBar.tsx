import { getTranslations } from "next-intl/server";

/**
 * TrustBar — server component rendering the trust signal strip.
 * Mobile: stacks vertically. Desktop: horizontal with hairline dividers.
 */
export default async function TrustBar() {
  const t = await getTranslations("trustBar");

  const items = [
    t("years"),
    t("authorised"),
    t("genuine"),
    t("supply"),
  ];

  return (
    <div
      style={{
        backgroundColor: "var(--cd-stone)",
        borderTop: "1px solid var(--cd-line)",
        borderBottom: "1px solid var(--cd-line)",
        padding: "16px 24px",
      }}
    >
      <ul className="cd-trust-bar-list">
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              color: "var(--cd-gray-text)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ padding: "4px 12px", textAlign: "center" }}>
              {item}
            </span>
            {index < items.length - 1 && (
              <span
                className="cd-trust-bar-divider"
                aria-hidden="true"
                style={{
                  width: "1px",
                  height: "12px",
                  backgroundColor: "var(--cd-line)",
                  flexShrink: 0,
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
