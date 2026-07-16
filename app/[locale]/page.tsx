import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/ui/TrustBar";
import ProductsOverview from "@/components/home/ProductsOverview";
import ServicesSection from "@/components/home/ServicesSection";
import TrustSection from "@/components/home/TrustSection";
import HomeCTA from "@/components/home/HomeCTA";
import SectionReveal from "@/components/ui/SectionReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: "CD Enterprises — Authorised Building Materials Dealer, Wai Taluka",
    mr: "CD Enterprises — अधिकृत बांधकाम साहित्य डीलर, वाई तालुका",
    hi: "CD Enterprises — अधिकृत निर्माण सामग्री डीलर, वाई तालुका",
  };
  const descs: Record<string, string> = {
    en: "Authorised multi-brand dealer for ACC Cement, JSW Roofing & CERA Sanitaryware in Wai Taluka, Satara. 25+ years. Retail & wholesale supply.",
    mr: "वाई तालुका, सातारामध्ये ACC सिमेंट, JSW रूफिंग व CERA सॅनिटरीवेअरचे 25+ वर्षांचे अधिकृत मल्टी-ब्रँड डीलर.",
    hi: "वाई तालुका, सातारा में ACC सीमेंट, JSW रूफिंग व CERA सैनिटरीवेयर के 25+ वर्षों के अधिकृत मल्टी-ब्रांड डीलर।",
  };
  return {
    title: titles[locale] ?? titles.en,
    description: descs[locale] ?? descs.en,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // params consumed for future use; locale is handled by layout
  await params;

  return (
    <>
      {/* Hero: load animation handled inside the component */}
      <Hero />

      {/* Trust bar: immediately below hero */}
      <TrustBar />

      {/* Products overview */}
      <SectionReveal>
        <ProductsOverview />
      </SectionReveal>

      {/* Services */}
      <SectionReveal>
        <ServicesSection />
      </SectionReveal>

      {/* Trust / stats / placeholders */}
      <SectionReveal>
        <TrustSection />
      </SectionReveal>

      {/* Closing CTA — no dead-end page */}
      <HomeCTA />
    </>
  );
}
