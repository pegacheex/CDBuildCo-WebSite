import { Link } from "@/lib/navigation";
import ProductIcon from "@/components/icons/ProductIcon";

interface ProductCardProps {
  id: string;
  nameKey: string;
  iconName: string;
  authorisedBrand?: string;
  name: string; // resolved translation string
  authorisedLabel: string;
  viewLabel: string;
}

/**
 * ProductCard — flat stone background, line icon, hairline border.
 * Hover: scale 1.00→1.02 + border color shift. No shadow.
 */
export default function ProductCard({
  id,
  iconName,
  authorisedBrand,
  name,
  authorisedLabel,
  viewLabel,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="cd-product-card"
      style={{
        display: "block",
        padding: "32px 24px",
        backgroundColor: "var(--cd-stone)",
        border: "1px solid var(--cd-line)",
        textDecoration: "none",
        transition: "background-color 150ms ease-out, transform 150ms ease-out",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <ProductIcon name={iconName} />
      </div>

      <p
        style={{
          fontWeight: 600,
          fontSize: "15px",
          color: "var(--cd-black)",
          marginBottom: "8px",
          lineHeight: 1.3,
        }}
      >
        {name}
      </p>

      {authorisedBrand && (
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--cd-orange)",
          }}
        >
          {authorisedLabel} {authorisedBrand}
        </p>
      )}

      <p
        style={{
          fontSize: "12px",
          color: "var(--cd-gray-text)",
          marginTop: "16px",
        }}
      >
        {viewLabel} →
      </p>
    </Link>
  );
}
