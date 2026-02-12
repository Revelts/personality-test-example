/**
 * Google Analytics Component
 * Handles GA4 initialization for Next.js App Router
 */

'use client';

import Script from 'next/script';

interface GAProps {
  gaId: string;
}

export default function GoogleAnalytics({ gaId }: GAProps) {
  // Don't load GA in development (optional)
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_GA_ENABLED) {
    return null;
  }

  return (
    <>
      {/* Google Analytics - Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}
