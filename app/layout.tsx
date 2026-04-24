import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import AnalyticsProvider from '@/components/AnalyticsProvider'

// Pilat Font - SanDisk Branding
// Using .otf files from public/fonts
const pilatExtended = localFont({
  src: [
    {
      path: '../public/fonts/Pilat-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pilat-Book.otf',
      weight: '450',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pilat-Demi.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pilat-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pilat-extended',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sandisktechshift.com'),
  title: 'Sandisk Tech Shift - Unlock Your Digital Side',
  description: 'Kenali kepribadianmu dan temukan storage idealmu melalui kuis ini.',
  keywords: 'sandisk, techshift, stunt test, personality test, storage personality, digital personality, tes kepribadian, sandisk test',
  icons: {
    icon: '/images/favicon.jpg',
    shortcut: '/images/favicon.jpg',
    apple: '/images/favicon.jpg',
  },
  openGraph: {
    title: 'Sandisk Tech Shift - Unlock Your Digital Side',
    description: 'Kenali kepribadianmu dan temukan storage idealmu melalui kuis ini.',
    type: 'website',
    images: ['/images/meta-image.png'],
  },
  twitter: {
    card: 'summary_large_image',  
    title: 'Sandisk Tech Shift - Unlock Your Digital Side',
    description: 'Kenali kepribadianmu dan temukan storage idealmu melalui kuis ini.',
    images: ['/images/meta-image.png'],
  },
}

export const viewport = {
  themeColor: '#E10600',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevent zoom on iOS Safari
  viewportFit: 'cover', // For notched devices (iPhone X+)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = 'G-PH28648C02';
  const gtmId = 'GTM-5323NFPL';

  return (
    <html lang="id" className="dark">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
        {/* TikTok Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
  ttq.load('D7LEI8JC77U6PFPAGFDG');
  ttq.page();
}(window, document, 'ttq');`,
          }}
        />
      </head>
      <body className={`${pilatExtended.className} antialiased bg-bg-primary text-text-primary`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <AnalyticsProvider>
          {/* Google Analytics */}
          <GoogleAnalytics gaId={gaId} />
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  )
}
