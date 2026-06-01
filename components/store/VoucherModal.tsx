'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface VoucherModalProps {
  isOpen: boolean
  result: 'win' | 'lose' | 'cooldown'
  voucherCode: string
  shopLink: string
  onClose: () => void
}

export default function VoucherModal({ isOpen, result, voucherCode, shopLink, onClose }: VoucherModalProps) {
  const [copied, setCopied] = useState(false)
  const [subtitleSpacing, setSubtitleSpacing] = useState('0px')
  const [cobaSubSpacing, setCobaSubSpacing] = useState('0px')
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const cobaRef = useRef<HTMLParagraphElement>(null)
  const subCobaRef = useRef<HTMLParagraphElement>(null)

  const isWin = result === 'win'
  const isCooldown = result === 'cooldown'

  const heading = isWin ? 'SELAMAT!' : 'YAH...'
  const subtitle = isWin
    ? 'PENAWARAN TERBATAS UNTUK KAMU'
    : isCooldown
    ? 'KAMU SUDAH BERMAIN HARI INI'
    : 'KAMU BELUM BERUNTUNG KALI INI'

  useEffect(() => {
    if (!isOpen || !h1Ref.current || !subtitleRef.current) return
    const h1Width = h1Ref.current.getBoundingClientRect().width
    const el = subtitleRef.current
    el.style.letterSpacing = '0px'
    el.style.wordSpacing = '0px'
    const naturalWidth = el.getBoundingClientRect().width
    el.style.letterSpacing = ''
    const charCount = (el.textContent ?? '').length
    if (charCount > 0) {
      const spacing = (h1Width - naturalWidth) / charCount
      setSubtitleSpacing(`${Math.max(0, spacing)}px`)
    }
  }, [isOpen, subtitle])

  useEffect(() => {
    if (!isOpen || isWin || !cobaRef.current || !subCobaRef.current) return
    const cobaWidth = cobaRef.current.getBoundingClientRect().width
    const el = subCobaRef.current
    el.style.letterSpacing = '0px'
    el.style.wordSpacing = '0px'
    const naturalWidth = el.getBoundingClientRect().width
    el.style.letterSpacing = ''
    const charCount = (el.textContent ?? '').length
    if (charCount > 0) {
      const spacing = (cobaWidth - naturalWidth) / charCount
      setCobaSubSpacing(`${Math.max(0, spacing)}px`)
    }
  }, [isOpen, isWin, isCooldown])

  if (!isOpen) return null

  function handleCopy() {
    navigator.clipboard.writeText(voucherCode).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function handlePakaiSekarang() {
    window.open(shopLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 overflow-y-auto py-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm md:max-w-md flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading */}
        <h1
          ref={h1Ref}
          className="text-white font-black uppercase text-center mb-1"
          style={{ fontSize: 'clamp(46px, 17vw, 70px)', lineHeight: 1.0, letterSpacing: '-1px' }}
        >
          {heading}
        </h1>
        <p
          ref={subtitleRef}
          className="text-white font-semibold uppercase text-center mb-3"
          style={{ fontSize: '12px', letterSpacing: subtitleSpacing, wordSpacing: '0px' }}
        >
          {subtitle}
        </p>

        {/* folder.png is the full card including the white button panel at bottom */}
        <div className="relative w-full">
          <Image
            src="/assets/folder.png"
            alt=""
            width={866}
            height={938}
            className="w-full h-auto object-contain"
          />

          {/* Zone 1 — voucher content on the white inner card area (~20-62% from top) */}
          <div
            className="absolute flex flex-col items-center"
            style={{ top: '18%', left: '10%', right: '10%', bottom: '38%' }}
          >
            <Image
              src="/assets/minivoucher.png"
              alt="voucher"
              width={64}
              height={53}
              className="object-contain mb-1"
            />

            {isWin ? (
              <div className="flex items-center justify-between w-full" style={{ paddingLeft: '5%' }}>
                <div>
                  <p
                    className="font-black uppercase text-black"
                    style={{ fontSize: 'clamp(1rem, 4.5vw, 1.2rem)' }}
                  >
                    VOUCHER RP 5.000
                  </p>
                  <p
                    className="font-normal uppercase text-black whitespace-nowrap"
                    style={{ fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', letterSpacing: '0.38em', wordSpacing: '0' }}
                  >
                    PRODUK TERTENTU
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-shrink-0 mr-2 text-white font-black uppercase rounded-full px-4 py-2 text-sm transition-opacity active:opacity-80"
                  style={{ backgroundColor: '#CC1C14' }}
                >
                  {copied ? 'SALIN' : 'SALIN'}
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <p
                  ref={cobaRef}
                  className="font-black uppercase text-black text-center"
                  style={{ fontSize: '20px', letterSpacing: '-0.5px' }}
                >
                  COBA LAGI
                </p>
                <p
                  ref={subCobaRef}
                  className="font-bold uppercase text-black text-center"
                  style={{ fontSize: '14px', letterSpacing: cobaSubSpacing, wordSpacing: '0px' }}
                >
                  {isCooldown ? 'BESOK YA!' : 'DI LAIN KESEMPATAN'}
                </p>
              </div>
            )}

          </div>

          {/* Zone HINGGA — anchored to card image, always below dashed line */}
          <div
            className="absolute flex justify-center items-start"
            style={{ top: '52%', left: '10%', right: '10%' }}
          >
            <p
              className={`font-black uppercase text-black tracking-widest ${isWin ? 'text-left' : 'text-center'}`}
              style={{ fontSize: 'clamp(1rem, 4.5vw, 1.3rem)' }}
            >
              HINGGA 30 : 06 : 2026
            </p>
          </div>

          {/* Zone 2 — buttons on the white button panel area */}
          <div
            className="absolute flex flex-col gap-2"
            style={{ top: isWin ? '70%' : '75%', left: '8%', right: '8%' }}
          >
            {isWin && (
              <button
                type="button"
                onClick={handlePakaiSekarang}
                className="w-full border-2 border-black text-black font-black uppercase tracking-widest rounded-full py-3 text-sm transition-colors hover:bg-black hover:text-white active:scale-95"
                style={{ letterSpacing: '0.12em' }}
              >
                PAKAI SEKARANG
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-full border-2 border-black text-black font-black uppercase tracking-widest rounded-full py-3 text-sm transition-colors hover:bg-black hover:text-white active:scale-95"
              style={{ letterSpacing: '0.12em' }}
            >
              TUTUP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
