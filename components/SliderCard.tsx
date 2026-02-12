'use client';

import { motion } from 'framer-motion';
import { PersonalityResult } from '@/lib/results';
import { useRouter } from 'next/navigation';
import ScreenshotButton from '@/components/ScreenshotButton';
import ShareButton from '@/components/ShareButton';

interface SliderCardProps {
  result: PersonalityResult;
  userName?: string;
  resultId?: string;
}

export default function SliderCard({ result, userName, resultId }: SliderCardProps) {
  const router = useRouter();

  const handleGoToGear = () => {
    if (resultId) {
      // Preserve URL params when navigating to gear page
      const currentParams = new URLSearchParams(window.location.search);
      const paramString = currentParams.toString();
      const gearUrl = paramString 
        ? `/result/${resultId}/gear?${paramString}` 
        : `/result/${resultId}/gear`;
      router.push(gearUrl);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      {/* Capturable Content - 9:16 format for Instagram Story */}
      <div id="result-capture" className="hidden">
        <div className="bg-white" style={{ width: '1080px', height: '1920px', boxSizing: 'border-box' }}>
          <div className="h-full flex flex-col justify-start px-16 py-20 space-y-6" style={{ maxWidth: '1080px', boxSizing: 'border-box' }}>
            <h1 className="text-5xl font-bold text-black tracking-tight leading-tight" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'auto' }}>
              {result.title}
            </h1>

            {/* Overall Character Result */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-3">
                Overall Result Karakter
              </h2>
              <p className="text-xl text-gray-800 leading-relaxed" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                {result.description}
              </p>
            </div>

            {/* Piece Quote / Poem */}
            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-2xl font-bold text-black mb-3">
                Piece Quote / Poem
              </h3>
              <p className="text-xl text-gray-800 italic leading-relaxed" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                {result.quote}
              </p>
            </div>

            {/* Elemen */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Elemen
              </h3>
              <p className="text-xl text-gray-800" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                {result.element}
              </p>
            </div>

            {/* Warna */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Warna
              </h3>
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm flex-shrink-0" 
                  style={{ backgroundColor: result.colorHex }}
                />
                <p className="text-xl text-gray-800 font-medium">
                  {result.colorName}
                </p>
              </div>
            </div>

            {/* Kenangan Paling Penting */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Kenangan Paling Penting
              </h3>
              <p className="text-xl text-gray-800 leading-relaxed" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}>
                {result.mostImportant}
              </p>
            </div>

            {/* Music */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Music
              </h3>
              <p className="text-xl text-gray-800" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                {result.musicArtist} – {result.music}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visible Display Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
            {result.title}
          </h1>

          {/* Overall Character Result */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-black mb-2">
              Overall Result Karakter
            </h2>
            <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
              {result.description}
            </p>
          </div>

          {/* Piece Quote / Poem */}
          <div className="border-l-4 border-gray-300 pl-3 sm:pl-4">
            <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
              Piece Quote / Poem
            </h3>
            <p className="text-xs sm:text-sm text-gray-800 italic leading-relaxed">
              {result.quote}
            </p>
          </div>

          {/* Elemen */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
              Elemen
            </h3>
            <p className="text-xs sm:text-sm text-gray-800">
              {result.element}
            </p>
          </div>

          {/* Warna */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
              Warna
            </h3>
            <div className="flex items-center gap-2">
              <div 
                className="w-6 h-6 rounded-full border-2 border-gray-300 shadow-sm" 
                style={{ backgroundColor: result.colorHex }}
              />
              <p className="text-xs sm:text-sm text-gray-800 font-medium">
                {result.colorName}
              </p>
            </div>
          </div>

          {/* Kenangan Paling Penting */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
              Kenangan Paling Penting
            </h3>
            <p className="text-xs sm:text-sm text-gray-800 leading-relaxed whitespace-pre-line">
              {result.mostImportant}
            </p>
          </div>

          {/* Music */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
              Music
            </h3>
            <p className="text-xs sm:text-sm text-gray-800">
              {result.musicArtist} – {result.music}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons - Outside capture area */}
      <div className="space-y-3">
        {/* Your Best Gear Button */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGoToGear}
          className="w-full py-3 sm:py-4 bg-brand-red hover:bg-red-700 text-white text-sm sm:text-base font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Your best gear
        </motion.button>

        {/* Download & Share Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ScreenshotButton elementId="result-capture" />
          <ShareButton resultId={resultId || ''} />
        </div>
      </div>
    </div>
  );
}
