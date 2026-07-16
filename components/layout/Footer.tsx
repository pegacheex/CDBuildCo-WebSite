import { Link } from '@/lib/navigation';
import { getTranslations } from 'next-intl/server';
import { NAP } from '@/lib/nap';
import { WHATSAPP_URL } from '@/lib/whatsapp';

// ─── Product links — structural, hardcoded slugs ─────────────────────────────
// These link to product category pages; text uses English names as structural links.
// Full i18n of product names is handled on the product pages themselves.

const PRODUCT_LINKS = [
  { slug: 'acc-cement', label: 'ACC Cement' },
  { slug: 'waterproofing', label: 'Waterproofing (Dr. Fixit)' },
  { slug: 'tmt-bars', label: 'TMT Bars' },
  { slug: 'structural-steel', label: 'Structural Steel (JSW)' },
  { slug: 'roofing-sheets', label: 'Roofing & Sheets (JSW)' },
  { slug: 'cera-bathroom-fittings', label: 'CERA Bathroom Fittings' },
  { slug: 'samruddhi-water-tanks', label: 'Samruddhi Water Tanks' },
  { slug: 'ms-grills-manhole-covers', label: 'MS Grills & Manhole Covers' },
] as const;

// ─── Types ───────────────────────────────────────────────────────────────────

interface FooterProps {
  locale: string;
}

// ─── Footer Component ────────────────────────────────────────────────────────

export default async function Footer({ locale }: FooterProps) {
  const t = await getTranslations({ locale, namespace: 'footer' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  return (
    <footer
      style={{
        backgroundColor: 'var(--cd-black)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'var(--cd-gray-dark-bg-text)',
      }}
    >
      {/* ── Main grid ───────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
        className="cd-footer-inner"
      >
        {/* Column 1 — Business name, tagline, NAP */}
        <div>
          <p
            style={{
              color: 'var(--cd-white)',
              fontWeight: 800,
              fontSize: '18px',
              marginBottom: '4px',
            }}
          >
            {NAP.brandName}
          </p>
          <p
            style={{
              color: 'var(--cd-gray-dark-bg-text)',
              fontSize: '12px',
              marginBottom: '8px',
            }}
          >
            {NAP.legalName}
          </p>
          <p
            style={{
              color: 'var(--cd-gray-dark-bg-text)',
              fontSize: '14px',
              lineHeight: 1.6,
              marginBottom: '24px',
            }}
          >
            {t('tagline')}
          </p>

          {/* NAP block */}
          <address
            style={{ fontStyle: 'normal', fontSize: '14px', lineHeight: 1.7, color: 'var(--cd-gray-dark-bg-text)' }}
          >
            <p style={{ marginBottom: '4px' }}>{NAP.address}</p>
            <a
              href={NAP.callLink}
              style={{ color: 'var(--cd-gray-dark-bg-text)', textDecoration: 'none', display: 'block' }}
            >
              Call: {NAP.phone}
            </a>
            <a
              href={NAP.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--cd-gray-dark-bg-text)', textDecoration: 'none', display: 'block' }}
            >
              WhatsApp: 84840 77773
            </a>
            <p style={{ marginTop: '8px', fontSize: '12px' }}>
              {NAP.hours} · Open 7 Days
            </p>
          </address>
        </div>

        {/* Column 2 — Products */}
        <div>
          <p
            style={{
              color: 'var(--cd-white)',
              fontWeight: 600,
              fontSize: '14px',
              marginBottom: '16px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {t('products')}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {PRODUCT_LINKS.map(({ slug, label }) => (
              <li key={slug}>
                <Link
                  href={`/products/${slug}`}
                  style={{
                    color: 'var(--cd-gray-dark-bg-text)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    lineHeight: 1.5,
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Quick Links */}
        <div>
          <p
            style={{
              color: 'var(--cd-white)',
              fontWeight: 600,
              fontSize: '14px',
              marginBottom: '16px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {t('quickLinks')}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>
              <Link href="/" style={{ color: 'var(--cd-gray-dark-bg-text)', textDecoration: 'none', fontSize: '14px' }}>
                {tNav('home')}
              </Link>
            </li>
            <li>
              <Link href="/about" style={{ color: 'var(--cd-gray-dark-bg-text)', textDecoration: 'none', fontSize: '14px' }}>
                {tNav('about')}
              </Link>
            </li>
            <li>
              <Link href="/services" style={{ color: 'var(--cd-gray-dark-bg-text)', textDecoration: 'none', fontSize: '14px' }}>
                {tNav('services')}
              </Link>
            </li>
            <li>
              <Link href="/service-area" style={{ color: 'var(--cd-gray-dark-bg-text)', textDecoration: 'none', fontSize: '14px' }}>
                {tNav('serviceArea')}
              </Link>
            </li>
            <li>
              <Link href="/contact" style={{ color: 'var(--cd-gray-dark-bg-text)', textDecoration: 'none', fontSize: '14px' }}>
                {tNav('contact')}
              </Link>
            </li>
            <li style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '6px' }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--cd-orange)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                {t('whatsAppLink')}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom copyright strip ────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '24px',
          marginTop: '0',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
        className="cd-footer-copyright"
      >
        <p
          style={{
            fontSize: '12px',
            color: 'var(--cd-gray-dark-bg-text)',
            margin: 0,
          }}
        >
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
