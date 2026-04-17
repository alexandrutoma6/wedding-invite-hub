import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Shirt, ExternalLink, X } from "lucide-react";
import SprigDivider from "./SprigDivider";

const EventDetails = () => {
  const [showDressCodeGallery, setShowDressCodeGallery] = useState(false);

  const dressCodePhotos = [
    "/dresscode1.jpg",
    "/dresscode2.jpg",
    "/dresscode3.jpg",
    "/dresscode4.jpg",
  ];

  return (
    <section className="py-20 md:py-28 bg-wedding-cream">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center uppercase tracking-[0.4em] text-xs md:text-sm text-wedding-charcoal/60 mb-3">
            Detalii
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-wedding-charcoal text-center mb-10 tracking-wider">
            Evenimentul
          </h2>

          <SprigDivider className="mb-14" />

          {/* Invite-style split: date | schedule */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-12">
            <div className="text-center md:text-right">
              <p className="font-display text-2xl sm:text-3xl md:text-5xl text-wedding-charcoal tracking-[0.15em] md:tracking-[0.2em]">
                09 AUGUST
              </p>
              <p className="font-display text-2xl sm:text-3xl md:text-5xl text-wedding-charcoal tracking-[0.15em] md:tracking-[0.2em]">
                2026
              </p>
            </div>

            <div className="hidden md:block h-32 w-px bg-wedding-charcoal/40" />
            <div className="md:hidden h-px w-32 mx-auto bg-wedding-charcoal/40" />

            <div className="text-center md:text-left space-y-2 font-display text-lg md:text-xl text-wedding-charcoal">
              <p>Cununia religioasă, ora 17.00</p>
              <p>Masa și felicitările, ora 18.30</p>
              <p>Locație: Mao Events</p>
            </div>
          </div>

          <SprigDivider className="my-14" />

          {/* Venue + dress code cards (minimalist) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.a
              href="https://maps.google.com/?q=MAO+Events"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-wedding-ivory border border-wedding-charcoal/15 p-8 text-center hover:border-wedding-sage transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="w-6 h-6 mx-auto text-wedding-sage mb-4" strokeWidth={1.2} />
              <h3 className="text-xs uppercase tracking-[0.3em] text-wedding-charcoal/60 mb-2">
                Locație
              </h3>
              <p className="font-display text-xl md:text-2xl text-wedding-charcoal tracking-wider">
                MAO Events
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm text-wedding-charcoal/70 group-hover:text-wedding-sage transition-colors">
                Vezi pe hartă <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </motion.a>

            <motion.div
              className="bg-wedding-ivory border border-wedding-charcoal/15 p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Shirt className="w-6 h-6 mx-auto text-wedding-sage mb-4" strokeWidth={1.2} />
              <h3 className="text-xs uppercase tracking-[0.3em] text-wedding-charcoal/60 mb-2">
                Dress Code
              </h3>
              <p className="font-display text-lg md:text-xl text-wedding-charcoal">
                Garden party · semi-formal
              </p>
              <button
                onClick={() => setShowDressCodeGallery(true)}
                className="mt-3 text-sm text-wedding-sage hover:text-wedding-charcoal underline underline-offset-4 decoration-wedding-sage/50 transition-colors"
              >
                Inspirație
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showDressCodeGallery && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-wedding-charcoal/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDressCodeGallery(false)}
          >
            <motion.div
              className="relative bg-wedding-ivory p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDressCodeGallery(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center hover:bg-wedding-charcoal/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-wedding-charcoal" />
              </button>

              <h3 className="font-display text-2xl md:text-3xl text-wedding-charcoal mb-6 pr-12 tracking-wider text-center">
                Inspirație Dress Code
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dressCodePhotos.map((photo, index) => (
                  <motion.div
                    key={photo}
                    className="relative aspect-[3/4] overflow-hidden border border-wedding-charcoal/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img
                      src={photo}
                      alt={`Dress code ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventDetails;
