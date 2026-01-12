import { motion } from "framer-motion";

const InvitationText = () => {
  return (
    <section className="py-24 md:py-32 bg-wedding-ivory">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative flourish */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-wedding-gold/50" />
            <span className="text-wedding-gold text-2xl">✦</span>
            <div className="h-px w-16 bg-wedding-gold/50" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-wedding-charcoal mb-8">
            Together with their families
          </h2>
          
          <p className="text-wedding-charcoal/80 text-lg md:text-xl leading-relaxed mb-8 font-light">
            We joyfully invite you to celebrate the beginning of our forever. 
            Your presence would make our special day complete as we exchange vows 
            and begin this beautiful journey together.
          </p>
          
          <p className="text-wedding-charcoal/70 text-base md:text-lg italic">
            "Two souls, one heart, infinite love"
          </p>
          
          {/* Decorative flourish */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="h-px w-16 bg-wedding-gold/50" />
            <span className="text-wedding-gold text-2xl">✦</span>
            <div className="h-px w-16 bg-wedding-gold/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationText;
