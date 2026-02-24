import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

// Pilat Extended Font - SanDisk Branding
// Loading multiple weights for better typography
const pilatExtended = localFont({
  src: [
    {
      path: '../public/fonts/PilatExtended-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/PilatExtended-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/PilatExtended-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PilatExtended-Book.woff2',
      weight: '450',
      style: 'normal',
    },
    {
      path: '../public/fonts/PilatExtended-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/PilatExtended-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/PilatExtended-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/PilatExtended-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pilat-extended',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sandisktechshift.com'),
  title: 'Sandisk Techshift Stunt Test - Temukan Storage Personality Kamu',
  description: 'Ikuti Sandisk Techshift Stunt Test untuk menemukan tipe kepribadian digital kamu. Cara unik untuk memahami bagaimana kamu menyimpan dan mengelola momen-momen penting dalam hidup.',
  keywords: 'sandisk, techshift, stunt test, personality test, storage personality, digital personality, tes kepribadian, sandisk test',
  icons: {
    icon: '/images/favicon.jpg',
    shortcut: '/images/favicon.jpg',
    apple: '/images/favicon.jpg',
  },
  openGraph: {
    title: 'Sandisk Techshift Stunt Test',
    description: 'Temukan storage personality kamu. Test interaktif untuk mengetahui cara unik kamu menyimpan momen digital.',
    type: 'website',
    images: ['/images/meta-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sandisk Techshift Stunt Test',
    description: 'Temukan storage personality kamu. Test interaktif untuk mengetahui cara unik kamu menyimpan momen digital.',
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
