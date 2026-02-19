import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

// Pilat Narrow Font - SanDisk Branding
const pilat = localFont({
  src: '../public/fonts/Pilat-Narrow.ttf',
  display: 'swap',
  variable: '--font-pilat',
  weight: '100 900',
})

export const metadata: Metadata = {
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
    images: ['/images/favicon.jpg'],
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
      <body className={`${pilat.className} antialiased bg-bg-primary text-text-primary`}>
        {/* Google Analytics */}
        <GoogleAnalytics gaId={gaId} />
        
        {children}
      </body>
    </html>
  )
}
