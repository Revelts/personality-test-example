'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import VoucherModal from './VoucherModal'

interface StoreOpeningPageProps {
  storeId: string
  voucherCode: string
  shopLink: string
}

export default function StoreOpeningPage({ storeId, voucherCode, shopLink }: StoreOpeningPageProps) {
  const [modal, setModal] = useState<{ open: boolean; result: 'win' | 'lose' | 'cooldown' }>({
    open: false,
    result: 'win',
  })
  const [hasPlayedToday, setHasPlayedToday] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(`sandisk_played_${storeId}`)
    const today = new Date().toLocaleDateString('en-CA')
    if (!stored) return
    try {
      const parsed = JSON.parse(stored)
      if (parsed.date === today) {
        if (parsed.result === 'win') {
          setModal({ open: true, result: 'win' })
        } else {
          setHasPlayedToday(true)
        }
      }
    } catch {
      if (stored === today) setHasPlayedToday(true)
    }
  }, [storeId])

  function handleFolderClick() {
    if (hasPlayedToday) {
      setModal({ open: true, result: 'cooldown' })
      return
    }
    const result = Math.random() < 0.6 ? 'win' : 'lose'
    const today = new Date().toLocaleDateString('en-CA')
    localStorage.setItem(`sandisk_played_${storeId}`, JSON.stringify({ date: today, result }))
    setHasPlayedToday(true)
    setModal({ open: true, result })
  }

  function handleClose() {
    setModal((prev) => ({ ...prev, open: false }))
  }

  return (
    <main
      className="w-full h-screen flex justify-center overflow-hidden"
      style={{ backgroundColor: '#CC1C14' }}
    >
      <div className="relative flex flex-col items-center w-full h-full overflow-hidden md:max-w-md">
        {/* Logo */}
        <header className="w-full flex justify-center pt-12 pb-4 px-8">
          <Image
            src="/assets/sandisk-logo.png"
            alt="SanDisk"
            width={180}
            height={60}
            priority
            className="object-contain"
          />
        </header>

        {/* Hero — folder + hand */}
        <section className="flex-1 flex flex-col items-center justify-center w-full">
          <button
            type="button"
            onClick={handleFolderClick}
            className="relative flex items-center justify-center mb-0 z-10 bg-transparent border-none cursor-pointer active:scale-95 transition-transform"
            aria-label="Klik folder untuk mendapatkan voucher"
          >
            {/* Folder icon */}
            <Image
              src="/assets/file-icon.png"
              alt="Folder"
              width={220}
              height={180}
              className="object-contain relative z-10"
            />
            {/* Hand / cursor icon — overlapping bottom-right of folder */}
            <div className="absolute bottom-[-20px] right-[-24px] z-20">
              <Image
                src="/assets/hand-icon.png"
                alt=""
                width={110}
                height={110}
                className="object-contain"
              />
            </div>
          </button>

          {/* Decorative circles — dot-icon.png, shifted 15% past right edge */}
          <div className="relative w-full z-0" style={{ height: '160px', marginTop: '-5%' }}>
            <Image
              src="/assets/dot-icon.png"
              alt=""
              width={430}
              height={160}
              className="absolute object-contain object-right"
              style={{ right: '-5%' }}
            />
          </div>

          {/* CTA Button — directly below dot-icon */}
          <div className="w-full px-16 mt-4">
            <button
              type="button"
              onClick={handleFolderClick}
              className="w-full bg-white text-black font-black uppercase tracking-widest text-xl rounded-full py-7 cursor-pointer select-none active:scale-95 transition-transform"
              style={{ letterSpacing: '0.12em' }}
            >
              KLIK FOLDER
            </button>
          </div>
        </section>

        {/* Footer disclaimer */}
        <footer className="relative w-full pt-6 pb-10 px-8">
          <p className="text-white text-center text-xs leading-relaxed opacity-90">
            S&amp;K berlaku. Kuota terbatas.
            <br />
            Event berakhir pada 30 Juni 2026.
          </p>

          {/* Corner accents */}
          <div className="absolute bottom-6 left-6 w-3 h-3 bg-white" />
          <div className="absolute bottom-6 right-6 w-3 h-3 bg-white" />
        </footer>
      </div>

      <VoucherModal
        isOpen={modal.open}
        result={modal.result}
        voucherCode={voucherCode}
        shopLink={shopLink}
        onClose={handleClose}
      />
    </main>
  )
}
