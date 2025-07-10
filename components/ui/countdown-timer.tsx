"use client"

import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

// Change this date to your target countdown date
const COUNTDOWN_FROM = "2025-07-19T18:00:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function ShiftingCountdown() {
  return (
    <div className="flex flex-row font-megarok justify-center items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl space-x-4 md:space-x-6 lg:space-x-8 mb-16">
      <CountdownItem unit="Day" label="DAYS" />
      <img src="/hourglass.png" className="w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 filter drop-shadow-lg" />
      <CountdownItem unit="Hour" label="HOURS" />
    </div>
  );
}

function CountdownItem({ unit, label }) {
  const { ref, time } = useTimer(unit);
  // For seconds, ensure two digits (00–59)
  const display = unit === "Second" ? String(time).padStart(2, '0') : time;

  return (
    <div className="flex items-center flex-col text-white drop-shadow-lg">
      <div className="relative overflow-hidden text-center">
        <span
          ref={ref}
          className="block font-bold"
        >
          {display}
        </span>
      </div>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-wider mt-1">
        {label}
      </p>
    </div>
  );
}

function useTimer(unit) {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    handleCountdown();
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => clearInterval(intervalRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = end - now;

    let newTime = 0;
    switch (unit) {
      case "Day":
        newTime = Math.max(0, Math.floor(distance / DAY));
        break;
      case "Hour":
        newTime = Math.max(0, Math.floor((distance % DAY) / HOUR));
        break;
      case "Minute":
        newTime = Math.max(0, Math.floor((distance % HOUR) / MINUTE));
        break;
      default:
        newTime = Math.max(0, Math.floor((distance % MINUTE) / SECOND));
    }

    if (newTime !== timeRef.current) {
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
}
