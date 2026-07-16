import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import SectionReveal from "@/components/ui/SectionReveal";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: "Products | CD Enterprises — Building Materials Dealer, Wai",
  description:
    "Full range of building materials: ACC Cement, TMT Bars, JSW Roofing Sheets, CERA Bathroom Fittings, Waterproofing, Structural Steel. Authorised dealer, Wai Taluka.",
};

export default async function ProductsIndexPage() {
  const t = await getTranslations();

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
            {t("nav.products")}
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
            {t("products.indexHeading")}
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "var(--cd-gray-dark-bg-text)",
              maxWidth: "600px",
            }}
          >
            {t("products.indexSubheading")}
          </p>
        </div>
      </section>

      {/* Product grid */}
      <SectionReveal>
        <section style={{ padding: "64px 24px", backgroundColor: "var(--cd-white)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "16px",
              }}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  nameKey={product.nameKey}
                  iconName={product.iconName}
                  authorisedBrand={product.authorisedBrand}
                  name={t(product.nameKey as Parameters<typeof t>[0])}
                  authorisedLabel={t("home.authorisedDealer")}
                  viewLabel={t("home.viewProducts")}
                />
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Page-end CTA */}
      <PageCTA
        eyebrow="Get in Touch"
        heading={t("products.ctaHeading")}
        ctaLabel="Get a Quote on WhatsApp"
        callLabel="Call Now: 91758 71222"
      />
    </>
  );
}
