import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const BASE_URL = "https://cdenterprises.in";
const LOCALES = ["en", "mr", "hi"] as const;
const STATIC_PATHS = [
  "",
  "/about",
  "/products",
  "/services",
  "/service-area",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages — all locales
  for (const locale of LOCALES) {
    for (const path of STATIC_PATHS) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1.0 : 0.8,
      });
    }
  }

  // Product category pages — all locales
  for (const locale of LOCALES) {
    for (const product of products) {
      entries.push({
        url: `${BASE_URL}/${locale}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  return entries;
}
