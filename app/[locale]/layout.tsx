import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import HreflangTags from "@/components/seo/HreflangTags";
import "../globals.css";

// ─── Fonts ─────────────────────────────────────────────────────────────────
// Inter: weights 400/500/600/800 ONLY — never 700
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-inter",
  display: "swap",
});

// Noto Sans Devanagari for Marathi and Hindi
const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

// ─── Metadata ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "CD Enterprises — Authorised Building Materials Dealer, Wai Taluka",
  description:
    "CD Enterprises is a 25+ year multi-brand authorised dealer of ACC Cement, JSW Roofing & CERA Sanitaryware in Wai Taluka, Satara, Maharashtra.",
  openGraph: {
    title: "CD Enterprises — Authorised Building Materials Dealer, Wai Taluka",
    description:
      "CD Enterprises is a 25+ year multi-brand authorised dealer of ACC Cement, JSW Roofing & Dr. Fixit in Wai Taluka, Satara, Maharashtra. Retail & wholesale supply.",
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
      "25+ year multi-brand authorised dealer of ACC Cement, JSW Roofing & Dr. Fixit in Wai Taluka, Satara, Maharashtra.",
    images: ["https://cd-build-co-web-site.vercel.app/applogo.png"],
  },
  icons: {
    icon: "/applogo.png",
    apple: "/applogo.png",
  },
};

// ─── Types ──────────────────────────────────────────────────────────────────
type Locale = (typeof routing.locales)[number];

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// ─── Layout ─────────────────────────────────────────────────────────────────
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <html lang={locale}>
      <head>
        <SchemaMarkup />
        <HreflangTags />
      </head>
      <body className={`${inter.variable} ${notoSansDevanagari.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {/* Skip to main content — keyboard accessibility */}
          <a href="#main-content" className="cd-skip-link">
            {tCommon("skipToContent")}
          </a>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <main id="main-content" style={{ flex: 1 }} tabIndex={-1}>
              {children}
            </main>
            <Footer locale={locale} />
          </div>
          <FloatingWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
