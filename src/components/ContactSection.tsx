import { motion } from "framer-motion";
import { Phone, Heart } from "lucide-react";

const ContactSection = () => {
  const contacts = [
    {
      name: "Alex",
      phoneNumber: "0758320009",
      displayNumber: "+0758 320 009",
    },
    {
      name: "Andreea",
      phoneNumber: "0787418322",
      displayNumber: "+0787 418 322",
    },
  ];

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
            Întrebări?
          </h2>

          <p className="text-wedding-charcoal/70 mb-10">
            Ne-ar plăcea să discutăm cu tine!
          </p>

          {/* Phone buttons */}
          <div className="flex flex-col gap-4 items-center">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={`tel:${contact.phoneNumber}`}
                className="inline-flex items-center gap-3 bg-wedding-gold hover:bg-wedding-gold/90 text-wedding-ivory px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">
                  {contact.displayNumber}
                </span>
                <span className="text-sm opacity-80">
                  ({contact.name})
                </span>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20 pt-12 border-t border-wedding-gold/20">
            <div className="flex items-center justify-center gap-2 text-wedding-charcoal/50">
              <span>Făcut cu</span>
              <Heart className="w-4 h-4 text-wedding-gold fill-wedding-gold" />
              <span>pentru ziua noastră specială</span>
            </div>

            <p className="mt-4 font-serif text-2xl text-wedding-charcoal/70">
              Alex și Andreea
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;