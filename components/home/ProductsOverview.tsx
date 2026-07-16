import { Link } from "@/lib/navigation";
import { getTranslations } from "next-intl/server";
import { products } from "@/data/products";
import ProductIcon from "@/components/icons/ProductIcon";

/**
 * ProductsOverview — grid of 7 product category cards.
 * Server component. Each card links to its category page.
 * Hover: scale 1.00→1.02 + hairline border color shift (CSS only).
 * No shadow, no gradient.
 */
export default async function ProductsOverview() {
  const t = await getTranslations();

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
          {t("home.productsEyebrow")}
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
          {t("home.productsHeading")}
        </h2>

        {/* 7-card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1px",
            border: "1px solid var(--cd-line)",
          }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="cd-product-card"
              style={{
                display: "block",
                padding: "32px 24px",
                backgroundColor: "var(--cd-stone)",
                border: "none",
                textDecoration: "none",
                transition: "background-color 150ms ease-out, transform 150ms ease-out",
              }}
            >
              {/* Line icon */}
              <div style={{ marginBottom: "16px" }}>
                <ProductIcon name={product.iconName} />
              </div>

              {/* Category name */}
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "var(--cd-black)",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                {t(product.nameKey as Parameters<typeof t>[0])}
              </p>

              {/* Authorised brand badge */}
              {product.authorisedBrand && (
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--cd-orange)",
                  }}
                >
                  {t("home.authorisedDealer")} {product.authorisedBrand}
                </p>
              )}

              {/* Arrow indicator */}
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--cd-gray-text)",
                  marginTop: "16px",
                }}
              >
                {t("home.viewProducts")} →
              </p>
            </Link>
          ))}
        </div>

        {/* Brands We Carry */}
        <div style={{ marginTop: "64px" }}>
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
            {t("home.brandsEyebrow")}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0",
              border: "1px solid var(--cd-line)",
            }}
          >
            {["ACC Cement", "JSW Steel", "JSW Roofing", "Dr. Fixit (Pidilite)", "CERA", "Samruddhi", "Jindal"].map((brand) => (
              <div
                key={brand}
                style={{
                  padding: "16px 24px",
                  borderRight: "1px solid var(--cd-line)",
                  borderBottom: "1px solid var(--cd-line)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--cd-black)",
                  letterSpacing: "0.02em",
                  backgroundColor: "var(--cd-white)",
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
