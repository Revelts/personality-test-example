import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import GoogleTagManager from '@/components/GoogleTagManager'
import Footer from '@/components/Footer'

// Modern Neo-Grotesk Font - Perfect for tech/cyber-punk aesthetic
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Personality Test - Temukan Tipe Kepribadian Kamu',
  description: 'Ikuti tes kepribadian interaktif 10 pertanyaan. Fast, professional, reliable. Temukan kekuatan dan karakter unik kamu.',
  keywords: 'personality test, tes kepribadian, kuis, mengenal diri, tipe kepribadian, character test',
  openGraph: {
    title: 'Personality Test - Temukan Tipe Kepribadian Kamu',
    description: 'Tes kepribadian interaktif dan profesional. 10 pertanyaan, 3 menit.',
    type: 'website',
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <html lang="id" className="dark h-full">
      <body className={`${spaceGrotesk.className} antialiased bg-bg-primary text-text-primary h-full`}>
        {/* Google Tag Manager */}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        
        {/* Main content wrapper - Fixed viewport height */}
        <div className="h-full flex flex-col">
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </main>
          
          {/* Footer - Fixed at bottom, always visible */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
