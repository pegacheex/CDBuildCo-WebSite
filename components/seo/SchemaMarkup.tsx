import { NAP } from "@/lib/nap";

/**
 * SchemaMarkup — LocalBusiness + Organization JSON-LD on every page.
 * NAP values from lib/nap.ts — single source of truth.
 */
export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": "https://cdbuildco.in/#business",
        name: NAP.brandName,
        legalName: NAP.legalName,
        description:
          "Authorised multi-brand building materials dealer in Wai Taluka, Satara — ACC Cement, JSW Roofing Sheets, Dr. Fixit Waterproofing. 25+ years. Open 7 days.",
        url: "https://cdbuildco.in",
        telephone: `+91${NAP.phoneRaw}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Yashwant Nagar, Opposite Wai Bazar Samiti, Mahabaleshwar Road",
          addressLocality: NAP.addressLocality,
          addressRegion: NAP.addressRegion,
          postalCode: NAP.postalCode,
          addressCountry: NAP.addressCountry,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: "Wai Taluka" },
          { "@type": "AdministrativeArea", name: "Satara District" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Building Materials",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "ACC Cement" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "TMT Bars" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "JSW Roofing Sheets" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "CERA Sanitaryware" } },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://cdbuildco.in/#organization",
        name: NAP.brandName,
        legalName: NAP.legalName,
        url: "https://cdbuildco.in",
        telephone: `+91${NAP.phoneRaw}`,
        foundingDate: "2003",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
