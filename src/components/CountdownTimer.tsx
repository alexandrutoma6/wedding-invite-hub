import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SprigDivider from "./SprigDivider";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const weddingDate = new Date("2026-08-09T17:00:00+03:00");

  const calculateTimeLeft = (): TimeLeft => {
    const difference = weddingDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Zile" },
    { value: timeLeft.hours, label: "Ore" },
    { value: timeLeft.minutes, label: "Minute" },
    { value: timeLeft.seconds, label: "Secunde" },
  ];

  return (
    <section className="py-20 md:py-28 bg-wedding-ivory">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center uppercase tracking-[0.4em] text-xs md:text-sm text-wedding-charcoal/60 mb-3">
            Numărătoarea inversă
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-wedding-charcoal text-center mb-10 tracking-[0.15em] md:tracking-[0.2em]">
            09 August 2026
          </h2>

          <SprigDivider className="mb-12" />

          <div className="grid grid-cols-4 gap-2 md:gap-8 max-w-3xl mx-auto">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <span className="block font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-wedding-charcoal">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="block mt-3 md:mt-4 text-wedding-charcoal/60 uppercase tracking-[0.25em] text-[10px] md:text-xs">
                  {unit.label}
                </span>
                {index < timeUnits.length - 1 && (
                  <span className="absolute right-0 top-4 md:top-8 h-10 md:h-16 w-px bg-wedding-charcoal/20 translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
