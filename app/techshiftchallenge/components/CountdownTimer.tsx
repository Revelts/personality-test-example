/**
 * Countdown Timer Component
 * Weekly countdown: resets every Monday 00:00, counts down to Sunday 23:59:59
 */

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/** Returns the end of the current week: Sunday 23:59:59 (local time) */
function getWeekEnd(): Date {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  const end = new Date(now);
  end.setDate(now.getDate() + daysUntilSunday);
  end.setHours(23, 59, 59, 999);
  return end;
}

function calculateTimeLeft(): TimeLeft {
  const difference = getWeekEnd().getTime() - Date.now();

  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const totalSeconds = Math.floor(difference / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Hari' },
    { value: timeLeft.hours, label: 'Jam' },
    { value: timeLeft.minutes, label: 'Menit' },
    { value: timeLeft.seconds, label: 'Detik' },
  ];

  if (!mounted) {
    return (
      <div className="flex gap-3 sm:gap-4 justify-start">
        {timeUnits.map(({ label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div className="bg-brand-red px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px] rounded-sm text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">00</div>
            </div>
            <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide">{label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-4 justify-start flex-wrap">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center gap-1"
        >
          <div className="bg-brand-red px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px] rounded-sm text-center">
            <motion.div
              key={unit.value}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            >
              {String(unit.value).padStart(2, '0')}
            </motion.div>
          </div>
          <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
