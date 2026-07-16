const BASE_URL = "https://cdenterprises.in";

/**
 * HreflangTags — server component.
 * Outputs 3 alternate + 1 x-default hreflang link tags.
 * Used in the root layout <head> — covers every page at the domain level.
 * Per-page canonical hreflang is handled via generateMetadata on individual pages.
 */
export default function HreflangTags() {
  const locales = ["en", "mr", "hi"] as const;

  return (
    <>
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${BASE_URL}/${locale}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/en`} />
    </>
  );
}
