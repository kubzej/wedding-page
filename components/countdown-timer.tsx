'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: 'Dní', value: (timeLeft as any).days },
    { label: 'Hodin', value: (timeLeft as any).hours },
    { label: 'Minut', value: (timeLeft as any).minutes },
    { label: 'Sekund', value: (timeLeft as any).seconds },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="text-sm uppercase tracking-widest mb-4 font-light">
        Do svatby zbývá
      </div>
      <div className="flex space-x-4 md:space-x-8">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center border border-white/30">
              <span className="text-2xl md:text-3xl font-light">
                {unit.value || 0}
              </span>
            </div>
            <span className="text-xs uppercase tracking-wider mt-2 font-light">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
