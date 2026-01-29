/**
 * Google Tag Manager Component
 * Handles GTM initialization for Next.js App Router
 */

'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initializeDataLayer, trackPageView } from '@/lib/analytics';

interface GTMProps {
  gtmId: string;
}

export default function GoogleTagManager({ gtmId }: GTMProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize dataLayer on mount
  useEffect(() => {
    initializeDataLayer();
  }, []);

  // Track page views on route change (SPA navigation)
  useEffect(() => {
    if (pathname) {
      // Determine page type
      let pageType = 'default';
      let pageName = 'Home';

      if (pathname === '/') {
        pageType = 'landing';
        pageName = 'Landing Page';
      } else if (pathname === '/test') {
        pageType = 'test';
        pageName = 'Personality Test';
      } else if (pathname.startsWith('/result/')) {
        pageType = 'result';
        pageName = 'Test Result';
      }

      // Track page view
      trackPageView(pageName, pageType);
    }
  }, [pathname, searchParams]);

  // Don't load GTM in development (optional)
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_GTM_ENABLED) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager - Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />

      {/* Google Tag Manager - NoScript Fallback */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    </>
  );
}

/**
 * GTM Provider Component
 * Use this to wrap your app with GTM tracking
 */
export function GTMProvider({ children, gtmId }: { children: React.ReactNode; gtmId: string }) {
  return (
    <>
      <GoogleTagManager gtmId={gtmId} />
      {children}
    </>
  );
}
