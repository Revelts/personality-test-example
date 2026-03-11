'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import GoogleTagManager from '@/components/GoogleTagManager';
import { trackEvent } from '@/lib/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const getElementText = (el: HTMLElement | null): string | undefined => {
  if (!el) return undefined;
  const text = (el.getAttribute('aria-label') || el.textContent || '').trim();
  return text || undefined;
};

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
  const clarityId = 'vthj8q2h3l';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target || typeof window === 'undefined') return;

      const pagePath = window.location.pathname;

      const link = target.closest('a') as HTMLAnchorElement | null;
      if (link) {
        const linkUrl = link.href;
        const linkText = getElementText(link);
        const linkId = link.id || undefined;
        const ariaLabel = link.getAttribute('aria-label') || undefined;

        trackEvent('link_click', {
          link_url: linkUrl,
          link_text: linkText,
          link_id: linkId,
          link_aria_label: ariaLabel,
          page_path: pagePath,
        });
        return;
      }

      const button = target.closest('button, [role="button"]') as HTMLElement | null;
      if (button) {
        const buttonId = button.id || undefined;
        const buttonText = getElementText(button);
        const ariaLabel = button.getAttribute('aria-label') || undefined;

        trackEvent('button_click', {
          button_id: buttonId,
          button_text: buttonText,
          button_aria_label: ariaLabel,
          page_path: pagePath,
        });
        return;
      }

      const cta = target.closest('[data-cta]') as HTMLElement | null;
      if (cta) {
        const ctaId = cta.id || undefined;
        const ctaLabel = cta.getAttribute('data-cta') || getElementText(cta);

        trackEvent('cta_click', {
          cta_id: ctaId,
          cta_label: ctaLabel,
          page_path: pagePath,
        });
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return (
    <>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}

      {clarityId && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}

      {children}
    </>
  );
}

