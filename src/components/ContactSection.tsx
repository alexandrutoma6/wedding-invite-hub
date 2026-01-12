import { motion } from "framer-motion";
import { Phone, Heart } from "lucide-react";

const ContactSection = () => {
  // Replace with your actual phone number
  const phoneNumber = "+1234567890";
  const displayNumber = "+1 (234) 567-890";
  
  return (
    <section className="py-20 md:py-28 bg-wedding-ivory">
      <div className="container max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-wedding-charcoal mb-6">
            Questions?
          </h2>
          
          <p className="text-wedding-charcoal/70 mb-8">
            We'd love to hear from you. Give us a call!
          </p>
          
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-3 bg-wedding-gold hover:bg-wedding-gold/90 text-wedding-ivory px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg">{displayNumber}</span>
          </a>
          
          {/* Footer */}
          <div className="mt-20 pt-12 border-t border-wedding-gold/20">
            <div className="flex items-center justify-center gap-2 text-wedding-charcoal/50">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-wedding-gold fill-wedding-gold" />
              <span>for our special day</span>
            </div>
            
            <p className="mt-4 font-serif text-2xl text-wedding-charcoal/70">
              Sarah & James
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
