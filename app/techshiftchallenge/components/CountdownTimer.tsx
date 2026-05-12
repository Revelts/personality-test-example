'use client';

export default function CountdownTimer() {
  return (
    <div className="flex items-center justify-start">
      <div className="bg-brand-red px-6 py-4 rounded-sm">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
          Campaign sudah berakhir
        </p>
      </div>
    </div>
  );
}
