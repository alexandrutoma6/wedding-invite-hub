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
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-wedding-gold/50" />
            <span className="text-wedding-gold text-2xl">✦</span>
            <div className="h-px w-16 bg-wedding-gold/50" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-wedding-charcoal mb-8">
            Împreună cu cei dragi
          </h2>
          
          <p className="text-wedding-charcoal/80 text-lg md:text-xl leading-relaxed font-light">
            Am decis să facem pasul cel mare și vrem să sărbătorim alături de cei dragi.
Ne bucurăm să vă avem aproape în ziua noastră specială și abia așteptăm să petrecem împreună!
Vă așteptăm cu drag!
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
