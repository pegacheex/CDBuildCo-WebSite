'use client';

import { Link, useRouter, usePathname } from '@/lib/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { CALL_URL } from '@/lib/whatsapp';
import Button from '@/components/ui/Button';

type Locale = 'en' | 'mr' | 'hi';

const LOCALES: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'mr', label: 'मराठी' },
  { code: 'hi', label: 'हिंदी' },
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const [compressed, setCompressed] = useState(false);
  const lastScrollY = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 60) {
        setCompressed(true);
      } else {
        setCompressed(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Use next-intl router for locale switching
  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { key: 'home' as const, href: '/' },
    { key: 'about' as const, href: '/about' },
    { key: 'products' as const, href: '/products' },
    { key: 'services' as const, href: '/services' },
    { key: 'serviceArea' as const, href: '/service-area' },
    { key: 'contact' as const, href: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--cd-white)',
        borderBottom: '1px solid var(--cd-line)',
        transition: 'padding 150ms ease-out',
        paddingTop: compressed ? '4px' : '8px',
        paddingBottom: compressed ? '4px' : '8px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
          aria-label="CD Enterprises — Home"
        >
          <img
            src="/logo.png"
            alt="CD Enterprises"
            style={{
              height: compressed ? '64px' : '80px',
              width: 'auto',
              transition: 'height 150ms ease-out',
            }}
          />
        </Link>

        {/* Desktop nav — hidden on mobile via CSS */}
        <nav
          aria-label="Main navigation"
          className="cd-header-desktop-nav"
          style={{ display: 'none', alignItems: 'center', gap: '24px', flex: 1, justifyContent: 'center' }}
        >
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--cd-gray-text)',
                textDecoration: 'none',
              }}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Desktop right: language switcher + Call CTA */}
        <div
          className="cd-header-desktop-right"
          style={{ display: 'none', alignItems: 'center', gap: '16px', flexShrink: 0 }}
        >
          <nav aria-label="Language switcher" aria-live="polite">
            <div style={{ display: 'flex', gap: '8px' }}>
              {LOCALES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => handleLocaleChange(code)}
                  aria-pressed={locale === code}
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: locale === code ? 'var(--cd-orange)' : 'var(--cd-gray-text)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px 6px',
                    borderRadius: '2px',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>

          <Button
            variant="secondary"
            href={CALL_URL}
            style={{
              fontSize: '13px',
              padding: '6px 12px',
              whiteSpace: 'nowrap',
            }}
          >
            91758 71222
          </Button>
        </div>

        {/* Mobile: Call CTA + hamburger */}
        <div
          className="cd-header-mobile-controls"
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <Button
            variant="secondary"
            href={CALL_URL}
            style={{
              fontSize: '13px',
              padding: '6px 12px',
              whiteSpace: 'nowrap',
            }}
          >
            91758 71222
          </Button>

          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="cd-mobile-menu"
            onClick={() => setMenuOpen((p) => !p)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              borderRadius: '2px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  backgroundColor: 'var(--cd-black)',
                  borderRadius: '1px',
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="cd-mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          style={{
            maxWidth: '1200px',
            margin: '16px auto 0',
            paddingTop: '16px',
            borderTop: '1px solid var(--cd-line)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'var(--cd-gray-text)',
                  textDecoration: 'none',
                }}
              >
                {t(key)}
              </Link>
            ))}

            <div style={{ display: 'flex', gap: '16px', paddingTop: '8px', borderTop: '1px solid var(--cd-line)' }}>
              {LOCALES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => { handleLocaleChange(code); setMenuOpen(false); }}
                  aria-pressed={locale === code}
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: locale === code ? 'var(--cd-orange)' : 'var(--cd-gray-text)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px 0',
                    borderRadius: '2px',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
