import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import SprigDivider from "./SprigDivider";

const ContactSection = () => {
  const contacts = [
    {
      name: "Alex",
      phoneNumber: "0758320009",
      displayNumber: "0758 320 009",
    },
    {
      name: "Andreea",
      phoneNumber: "0787418322",
      displayNumber: "0787 418 322",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-wedding-ivory">
      <div className="container max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-wedding-charcoal/60 mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-wedding-charcoal mb-6 tracking-wider">
            Întrebări?
          </h2>

          <p className="text-wedding-charcoal/70 mb-12 italic font-light">
            Ne-ar plăcea să discutăm cu tine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={`tel:${contact.phoneNumber}`}
                className="group inline-flex items-center gap-3 bg-wedding-ivory border border-wedding-charcoal/30 hover:border-wedding-sage hover:bg-wedding-cream text-wedding-charcoal px-8 py-4 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-wedding-sage" strokeWidth={1.5} />
                <span className="font-display text-lg tracking-wider">
                  {contact.displayNumber}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-wedding-charcoal/60">
                  {contact.name}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-24">
            <SprigDivider className="mb-10" />
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-wedding-charcoal tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em]">
              ALEX &amp; ANDREEA
            </p>
            <p className="mt-3 text-wedding-charcoal/50 text-xs uppercase tracking-[0.3em]">
              09 · 08 · 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
