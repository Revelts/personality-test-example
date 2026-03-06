/**
 * Countdown Timer Component
 * Real-time countdown to challenge end date
 */

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  endDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ endDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(endDate) - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (!mounted) {
    return (
      <div className="flex gap-3 sm:gap-4 justify-start">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-brand-red px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px] rounded-sm text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
              00
            </div>
            <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide">
              {['Days', 'Hours', 'Mins', 'Secs'][i]}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Mins' },
    { value: timeLeft.seconds, label: 'Secs' },
  ];

  return (
    <div className="flex gap-3 sm:gap-4 justify-start flex-wrap">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-brand-red px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px] rounded-sm text-center"
        >
          <motion.div
            key={unit.value}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1"
          >
            {String(unit.value).padStart(2, '0')}
          </motion.div>
          <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
