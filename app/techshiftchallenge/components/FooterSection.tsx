'use client';

import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="bg-black px-6 pt-10 pb-10">

      <div className="max-w-6xl mx-auto">

        {/* Desktop: two columns. Mobile: single column */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-0">

          {/* Left: heading + subtitle + marketplace */}
          <div className="flex flex-col max-w-sm">
            <h3 className="text-white text-xl font-black mb-1">BEBASIN MEMORI HP</h3>
            <p className="text-white/60 text-sm mb-8">
              Pindahin file dari HP dengan SANDISK® Phone Drive.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/images/lazada-market.png" alt="Lazada" width={80} height={28} className="h-7 w-auto object-contain" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/images/shopee-market.png" alt="Shopee" width={80} height={28} className="h-7 w-auto object-contain" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/images/tiktok-market.png" alt="TikTok Shop" width={100} height={28} className="h-7 w-auto object-contain" />
              </a>
            </div>
          </div>

          {/* Right: SanDisk logo + socials */}
          <div className="flex items-center gap-5">
            <Image
              src="/images/sandisk-logo.png"
              alt="SanDisk"
              width={120}
              height={32}
              className="h-6 w-auto object-contain"
            />
            <div className="w-px h-7 bg-white/20" />
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/sandiskid" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white hover:fill-brand-red transition-colors">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/sandisk" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white hover:fill-brand-red transition-colors">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@sandiskindonesia" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white hover:fill-brand-red transition-colors">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
