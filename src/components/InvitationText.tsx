import { motion } from "framer-motion";
import SprigDivider from "./SprigDivider";

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
          <SprigDivider className="mb-12" />

          <p className="font-display text-wedding-charcoal text-xl md:text-2xl leading-relaxed">
            Vă invităm să ne fiți alături la celebrarea căsătoriei noastre,
            având binecuvântarea lui Dumnezeu și a părinților noștri.
          </p>

          <div className="mt-16 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6 md:gap-12">
            <div className="text-center md:text-right">
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-wedding-charcoal tracking-wider">
                Toma
              </p>
              <p className="text-wedding-charcoal/70 mt-2 text-xs sm:text-sm md:text-base">
                Dorel &amp; Ligia
              </p>
            </div>

            <div className="font-display text-2xl sm:text-3xl md:text-4xl text-wedding-charcoal italic font-light">
              &amp;
            </div>

            <div className="text-center md:text-left">
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-wedding-charcoal tracking-wider">
                Csora
              </p>
              <p className="text-wedding-charcoal/70 mt-2 text-xs sm:text-sm md:text-base">
                Cristian &amp; Ioana
              </p>
            </div>
          </div>

          <SprigDivider className="mt-16" />

          <p className="mt-16 text-wedding-charcoal/75 text-base md:text-lg font-light leading-relaxed italic">
            Am decis să facem pasul cel mare și vrem să sărbătorim alături de cei dragi.
            Ne bucurăm să vă avem aproape în ziua noastră specială și abia așteptăm să petrecem împreună!
            <br />
            Vă așteptăm cu drag!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationText;
