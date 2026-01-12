import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Shirt } from "lucide-react";

const EventDetails = () => {
  // Change this to false when you want to reveal the details
  const isBlurred = true;
  
  const details = [
    {
      icon: Calendar,
      label: "Date",
      value: "Saturday, June 15th, 2025",
    },
    {
      icon: Clock,
      label: "Time",
      value: "Ceremony at 2:00 PM",
    },
    {
      icon: MapPin,
      label: "Venue",
      value: "The Grand Estate Gardens\n123 Wedding Lane, City, State 12345",
    },
    {
      icon: Shirt,
      label: "Dress Code",
      value: "Formal / Black Tie Optional",
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
          <h2 className="font-serif text-3xl md:text-4xl text-wedding-charcoal text-center mb-4">
            Wedding Details
          </h2>
          
          {isBlurred && (
            <p className="text-center text-wedding-charcoal/60 mb-12 italic">
              Details will be revealed soon...
            </p>
          )}
          
          <div className={`space-y-8 ${isBlurred ? "blur-md select-none pointer-events-none" : ""}`}>
            {details.map((detail, index) => (
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
          
          {isBlurred && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-wedding-ivory/80 backdrop-blur-sm px-8 py-4 rounded-full border border-wedding-gold/30">
                <span className="text-wedding-charcoal/70 font-light">Coming Soon</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
