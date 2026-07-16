import type { Metadata } from "next";

const BASE_URL = "https://cd-build-co-web-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "CD Enterprises — Authorised Building Materials Dealer, Wai Taluka",
  description:
    "CD Enterprises is a 25+ year multi-brand authorised dealer of ACC Cement, JSW Roofing & Dr. Fixit in Wai Taluka, Satara, Maharashtra.",
  openGraph: {
    title: "CD Enterprises — Authorised Building Materials Dealer, Wai Taluka",
    description:
      "25+ year multi-brand authorised dealer of ACC Cement, JSW Roofing & Dr. Fixit in Wai Taluka, Satara, Maharashtra. Retail & wholesale supply.",
    url: BASE_URL,
    siteName: "CD Enterprises",
    images: [
      {
        url: `${BASE_URL}/applogo.png`,
        width: 1200,
        height: 630,
        alt: "CD Enterprises — Strong Foundations. Trusted Generations.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CD Enterprises — Authorised Building Materials Dealer, Wai Taluka",
    description:
      "25+ year multi-brand authorised dealer of ACC Cement, JSW Roofing & Dr. Fixit in Wai Taluka, Satara.",
    images: [`${BASE_URL}/applogo.png`],
  },
  icons: {
    icon: "/applogo.png",
    apple: "/applogo.png",
  },
};

/**
 * Root layout — Next.js App Router requires this to export metadata.
 * The actual HTML shell is in [locale]/layout.tsx.
 * This layout just passes through children.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
