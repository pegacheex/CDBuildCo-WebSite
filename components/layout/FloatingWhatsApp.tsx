'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const SESSION_KEY = 'wa_btn_interacted';

export default function FloatingWhatsApp() {
  const t = useTranslations('common');
  const btnRef = useRef<HTMLAnchorElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Set up idle pulse animation — skip if already interacted this session
  useEffect(() => {
    // Check sessionStorage on mount
    const hasInteracted =
      typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem(SESSION_KEY) === 'true';

    if (hasInteracted) return;

    // Run pulse every 8s
    const triggerPulse = () => {
      const el = btnRef.current;
      if (!el) return;
      // Remove then re-add to re-trigger animation
      el.classList.remove('cd-wa-pulse');
      // Force reflow to restart animation
      void el.offsetWidth;
      el.classList.add('cd-wa-pulse');
    };

    // First pulse after 8s, then every 8s
    intervalRef.current = setInterval(triggerPulse, 8000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleClick = () => {
    // Stop pulse permanently for this session
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Remove pulse class immediately so animation doesn't fire on click
    btnRef.current?.classList.remove('cd-wa-pulse');
    // Store interaction in sessionStorage
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(SESSION_KEY, 'true');
    }
  };

  return (
    <a
      ref={btnRef}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('floatingWhatsAppLabel')}
      onClick={handleClick}
      className="cd-fab-circle"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 100,
        width: '56px',
        height: '56px',
        backgroundColor: 'var(--cd-orange)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      {/* WhatsApp line icon — stroke only, no fill */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    </a>
  );
}
