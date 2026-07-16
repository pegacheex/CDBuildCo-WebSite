import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CD Enterprises — Authorised Building Materials Dealer, Wai Taluka",
  description:
    "CD Enterprises is a 25+ year multi-brand authorised dealer of ACC Cement, JSW Roofing & Dr. Fixit in Wai Taluka, Satara, Maharashtra.",
  openGraph: {
    title: "CD Enterprises — Authorised Building Materials Dealer, Wai Taluka",
    description:
      "25+ year multi-brand authorised dealer of ACC Cement, JSW Roofing & Dr. Fixit in Wai Taluka, Satara, Maharashtra. Retail & wholesale supply.",
    url: "https://cd-build-co-web-site.vercel.app",
    siteName: "CD Enterprises",
    images: [
      {
        url: "https://cd-build-co-web-site.vercel.app/applogo.png",
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
    images: ["https://cd-build-co-web-site.vercel.app/applogo.png"],
  },
  icons: {
    icon: "/applogo.png",
    apple: "/applogo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
