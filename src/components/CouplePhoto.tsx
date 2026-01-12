import { motion } from "framer-motion";

const CouplePhoto = () => {
  return (
    <section className="py-16 md:py-24 bg-wedding-cream">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Gold frame effect */}
          <div className="absolute inset-0 border-4 border-wedding-gold/30 transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6" />
          
          {/* Photo container */}
          <div className="relative overflow-hidden bg-wedding-ivory">
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80"
              alt="Couple photo"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            
            {/* Subtle vignette overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
          </div>
        </motion.div>
        
        {/* Caption */}
        <motion.p
          className="text-center mt-8 text-wedding-charcoal/60 italic font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our love story continues...
        </motion.p>
      </div>
    </section>
  );
};

export default CouplePhoto;
