import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { products, generateProductStaticParams } from "@/data/products";
import SubProductList from "@/components/products/SubProductList";
import ProductIcon from "@/components/icons/ProductIcon";
import SectionReveal from "@/components/ui/SectionReveal";
import PageCTA from "@/components/ui/PageCTA";
import { Link } from "@/lib/navigation";

interface PageProps {
  params: Promise<{ locale: string; category: string }>;
}

export async function generateStaticParams() {
  return generateProductStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, category } = await params;
  const product = products.find((p) => p.id === category);
  if (!product) return {};

  const t = await getTranslations({ locale });
  return {
    title: t(product.metaTitleKey as Parameters<typeof t>[0]),
    description: t(product.metaDescriptionKey as Parameters<typeof t>[0]),
  };
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const product = products.find((p) => p.id === category);

  if (!product) notFound();

  const t = await getTranslations();
  const categoryName = t(product.nameKey as Parameters<typeof t>[0]);
  const categoryDesc = t(product.descriptionKey as Parameters<typeof t>[0]);

  return (
    <>
      {/* Page header — dark */}
      <section
        style={{
          backgroundColor: "var(--cd-black)",
          padding: "80px 24px 64px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--cd-gray-dark-bg-text)",
              marginBottom: "16px",
            }}
          >
            <Link
              href="/products"
              style={{ color: "var(--cd-gray-dark-bg-text)", textDecoration: "none" }}
            >
              {t("nav.products")}
            </Link>
            {" / "}
            <span style={{ color: "var(--cd-orange)" }}>{categoryName}</span>
          </p>

          {/* Icon + heading */}
          <div style={{ marginBottom: "16px" }}>
            <ProductIcon name={product.iconName} size={40} color="var(--cd-orange)" />
          </div>

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
            {categoryName}
          </h1>

          {/* Authorised dealer badge */}
          {product.authorisedBrand && (
            <p
              style={{
                display: "inline-block",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--cd-orange)",
                border: "1px solid var(--cd-orange)",
                padding: "4px 10px",
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            >
              {t("home.authorisedDealer")} {product.authorisedBrand}
            </p>
          )}

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "var(--cd-gray-dark-bg-text)",
              maxWidth: "680px",
            }}
          >
            {categoryDesc}
          </p>
        </div>
      </section>

      {/* Sub-product list */}
      <SectionReveal>
        <section style={{ padding: "64px 24px", backgroundColor: "var(--cd-white)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {product.subProducts.length > 0 ? (
              <SubProductList subProducts={product.subProducts} />
            ) : (
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--cd-gray-text)",
                  lineHeight: 1.6,
                }}
              >
                {t("products.contactForDetails")}
              </p>
            )}
          </div>
        </section>
      </SectionReveal>

      {/* Page-end CTA — every product page must have one */}
      <PageCTA
        eyebrow={t("products.ctaEyebrow")}
        heading={t("products.ctaHeading")}
        ctaLabel="Get a Quote on WhatsApp"
        callLabel="Call Now: 91758 71222"
        preselectedProduct={categoryName}
      />
    </>
  );
}
