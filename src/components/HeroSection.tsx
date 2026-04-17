import { motion } from "framer-motion";
import { Sprig } from "./GypsophilaArch";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-wedding-ivory flex items-center justify-center">
      {/* Corner botanicals */}
      <div className="pointer-events-none absolute top-0 left-0 w-36 sm:w-48 md:w-64 lg:w-80 opacity-90">
        <motion.svg
          viewBox="0 0 250 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto -translate-x-4 -translate-y-4"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <g transform="scale(-1,1) translate(-250,0)">
            <Sprig />
          </g>
        </motion.svg>
      </div>
      <div className="pointer-events-none absolute top-0 right-0 w-36 sm:w-48 md:w-64 lg:w-80 opacity-90">
        <motion.svg
          viewBox="0 0 250 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto translate-x-4 -translate-y-4"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Sprig />
        </motion.svg>
      </div>

      {/* Bottom corner accents */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 opacity-70">
        <motion.svg
          viewBox="0 0 250 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto -translate-x-2 translate-y-2"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        >
          <g transform="scale(1,-1) translate(0,-300)">
            <Sprig />
          </g>
        </motion.svg>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-24 sm:w-32 md:w-40 opacity-70">
        <motion.svg
          viewBox="0 0 250 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto translate-x-2 translate-y-2"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        >
          <g transform="scale(-1,-1) translate(-250,-300)">
            <Sprig />
          </g>
        </motion.svg>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 w-full max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p
          className="text-wedding-charcoal/60 uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs md:text-sm mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Save the Date
        </motion.p>

        <motion.h1
          className="font-display text-wedding-charcoal leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em]">
            ALEX
          </span>
          <span className="block text-2xl sm:text-3xl md:text-5xl my-2 sm:my-3 md:my-5 italic font-light">
            &amp;
          </span>
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] sm:tracking-[0.18em] md:tracking-[0.22em]">
            ANDREEA
          </span>
        </motion.h1>

        <motion.div
          className="mt-12 md:mt-16 mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <div className="text-center sm:text-right">
            <p className="font-display text-xl md:text-2xl text-wedding-charcoal tracking-[0.2em]">
              09 AUGUST
            </p>
            <p className="font-display text-xl md:text-2xl text-wedding-charcoal tracking-[0.2em]">
              2026
            </p>
          </div>
          <div className="hidden sm:block h-16 md:h-20 w-px bg-wedding-charcoal/40" />
          <div className="sm:hidden h-px w-24 bg-wedding-charcoal/40" />
          <div className="text-center sm:text-left text-wedding-charcoal/80 text-sm md:text-base space-y-1">
            <p>Cununia religioasă, 17:00</p>
            <p>Masa și felicitările, 18:30</p>
            <p>Locație: MAO Events</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2, duration: 1 },
          y: { delay: 2, duration: 1.8, repeat: Infinity },
        }}
      >
        <div className="w-5 h-9 border border-wedding-charcoal/40 rounded-full flex justify-center pt-2">
          <div className="w-0.5 h-2 bg-wedding-charcoal/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
