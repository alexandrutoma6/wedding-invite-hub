import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background placeholder - replace with your photo */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-wedding-gold/20 via-wedding-cream to-wedding-ivory"
        style={{
          backgroundImage: `url('/photo1.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p 
          className="text-wedding-ivory/90 uppercase tracking-[0.3em] text-sm md:text-base mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Save the Date
        </motion.p>
        
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-wedding-ivory mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Alex și Andreea
        </motion.h1>
        
        <motion.div 
          className="w-24 h-px bg-wedding-gold mx-auto my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
        
        <motion.p 
          className="text-wedding-ivory/80 text-lg md:text-xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          August 9, 2026
        </motion.p>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 1 },
          y: { delay: 2, duration: 1.5, repeat: Infinity }
        }}
      >
        <div className="w-6 h-10 border-2 border-wedding-ivory/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-wedding-ivory/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
