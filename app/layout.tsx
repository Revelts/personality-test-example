import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

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

  return (
    <html lang="id" className="dark">
      <body className={`${pilatExtended.className} antialiased bg-bg-primary text-text-primary`}>
        {/* Google Analytics */}
        <GoogleAnalytics gaId={gaId} />
        
        {children}
      </body>
    </html>
  )
}
