import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tes Kepribadian - Temukan Tipe Unik Kamu',
  description: 'Ikuti tes kepribadian interaktif dan temukan karakter unik, kekuatan, dan apa yang bikin kamu spesial!',
  keywords: 'tes kepribadian, kuis, personality test, mengenal diri, tipe kepribadian',
  openGraph: {
    title: 'Tes Kepribadian - Temukan Tipe Unik Kamu',
    description: 'Ikuti tes kepribadian interaktif dan temukan karakter unik kamu!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
