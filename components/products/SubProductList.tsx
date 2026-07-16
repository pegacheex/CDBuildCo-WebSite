import { getTranslations } from "next-intl/server";
import Image from "next/image";
import type { SubProduct } from "@/data/products";

interface SubProductListProps {
  subProducts: SubProduct[];
}

function groupByRange(subProducts: SubProduct[]): Map<string | undefined, SubProduct[]> {
  const map = new Map<string | undefined, SubProduct[]>();
  for (const sp of subProducts) {
    const key = sp.rangeKey;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(sp);
  }
  return map;
}

export default async function SubProductList({ subProducts }: SubProductListProps) {
  if (subProducts.length === 0) return null;

  const t = await getTranslations();
  const grouped = groupByRange(subProducts);
  const hasRanges = grouped.size > 1 || (grouped.size === 1 && grouped.keys().next().value !== undefined);

  return (
    <div style={{ marginTop: "48px" }}>
      {Array.from(grouped.entries()).map(([rangeKey, items]) => (
        <div key={rangeKey ?? "default"} style={{ marginBottom: "40px" }}>
          {rangeKey && hasRanges && (
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--cd-orange)",
                marginBottom: "16px",
                paddingBottom: "8px",
                borderBottom: "1px solid var(--cd-line)",
              }}
            >
              {t(rangeKey as Parameters<typeof t>[0])}
            </p>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1px",
              border: "1px solid var(--cd-line)",
              backgroundColor: "var(--cd-line)",
            }}
          >
            {items.map((sp) => (
              <div
                key={sp.id}
                style={{
                  backgroundColor: "var(--cd-white)",
                }}
              >
                {/* Product image — shown if available, else stone placeholder */}
                {sp.image ? (
                  <div
                    style={{
                      backgroundColor: "var(--cd-white)",
                      borderBottom: "1px solid var(--cd-line)",
                      height: "240px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={sp.image}
                      alt={t(sp.nameKey as Parameters<typeof t>[0])}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                ) : null}

                <div style={{ padding: "24px" }}>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "15px",
                      color: "var(--cd-black)",
                      marginBottom: "8px",
                      lineHeight: 1.3,
                    }}
                  >
                    {t(sp.nameKey as Parameters<typeof t>[0])}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "var(--cd-gray-text)",
                    }}
                  >
                    {t(sp.descriptionKey as Parameters<typeof t>[0])}
                  </p>
                  {sp.brand && (
                    <p
                      style={{
                        marginTop: "12px",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--cd-gray-text)",
                      }}
                    >
                      {sp.brand}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
