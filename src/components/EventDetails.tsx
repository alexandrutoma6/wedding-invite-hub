import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Shirt, ExternalLink, X } from "lucide-react";

const EventDetails = () => {
  // Change this to false when you want to reveal the ceremony and time details
  const ceremonyBlurred = true;
  const [showDressCodeGallery, setShowDressCodeGallery] = useState(false);
  
  const dressCodePhotos = [
    "/dresscode1.jpg",
    "/dresscode2.jpg",
    "/dresscode3.jpg",
    "/dresscode4.jpg",
  ];
  
  const visibleDetails = [
    {
      icon: MapPin,
      label: "Locație",
      value: "MAO Events",
      link: "https://maps.google.com/?q=MAO+Events",
    },
    {
      icon: Shirt,
      label: "Dress Code",
      value: "Garden party / semi-formal de nuntă",
    },
  ];
  
  const blurredDetails = [
    {
      icon: Calendar,
      label: "Religious Ceremony",
      value: "Details coming soon",
    },
    {
      icon: Clock,
      label: "Starting Hours",
      value: "To be announced",
    },
  ];
  
  return (
    <section className="py-20 md:py-28 bg-wedding-cream">
      <div className="container max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-wedding-charcoal text-center mb-12">
            Detaliile evenimentului
          </h2>
          
          <div className="space-y-8">
            {/* Visible details */}
            {visibleDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                className="flex items-start gap-6 bg-wedding-ivory p-6 rounded-lg border border-wedding-gold/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-wedding-gold/10 rounded-full flex items-center justify-center">
                  <detail.icon className="w-5 h-5 text-wedding-gold" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm uppercase tracking-widest text-wedding-charcoal/60">
                      {detail.label}
                    </h3>
                    {detail.label === "Dress Code" && (
                      <button
                        onClick={() => setShowDressCodeGallery(true)}
                        className="text-sm text-wedding-gold hover:text-wedding-gold/80 underline transition-colors"
                      >
                        Inspirație
                      </button>
                    )}
                  </div>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-wedding-charcoal hover:text-wedding-gold transition-colors"
                    >
                      <span>{detail.value}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <p className="text-wedding-charcoal whitespace-pre-line">
                      {detail.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
            
            {/* Blurred details */}
            <div className="relative">
              <div className={ceremonyBlurred ? "blur-md select-none pointer-events-none" : ""}>
                {blurredDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    className="flex items-start gap-6 bg-wedding-ivory p-6 rounded-lg border border-wedding-gold/20 mb-8 last:mb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (visibleDetails.length + index) * 0.1, duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-wedding-gold/10 rounded-full flex items-center justify-center">
                      <detail.icon className="w-5 h-5 text-wedding-gold" />
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-wedding-charcoal/60 mb-1">
                        {detail.label}
                      </h3>
                      <p className="text-wedding-charcoal whitespace-pre-line">
                        {detail.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {ceremonyBlurred && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-wedding-ivory/80 backdrop-blur-sm px-8 py-4 rounded-full border border-wedding-gold/30">
                    <span className="text-wedding-charcoal/70 font-light">Vor fi anunțate</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Dress Code Gallery Modal */}
      <AnimatePresence>
        {showDressCodeGallery && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDressCodeGallery(false)}
          >
            <motion.div
              className="relative bg-wedding-ivory rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDressCodeGallery(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-wedding-charcoal/10 hover:bg-wedding-charcoal/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-wedding-charcoal" />
              </button>
              
              <h3 className="font-serif text-2xl md:text-3xl text-wedding-charcoal mb-6 pr-12">
                Dress Code Inspiration
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dressCodePhotos.map((photo, index) => (
                  <motion.div
                    key={photo}
                    className="relative aspect-[3/4] overflow-hidden rounded-lg border border-wedding-gold/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img
                      src={photo}
                      alt={`Dress code inspiration ${index + 1}`}
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
