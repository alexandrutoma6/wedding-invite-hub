import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { ImageIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

/**
 * Edit this array to add / swap photos.
 * src "" → placeholder. Drop real images in /public and reference by path.
 */
const slides: { src: string; alt: string }[] = [
  { src: "/photos/1.JPG", alt: "Alex și Andreea 1" },
  { src: "/photos/2.jpg", alt: "Alex și Andreea 2" },
  { src: "/photos/3.jpeg", alt: "Alex și Andreea 3" },
  { src: "/photos/4.jpeg", alt: "Alex și Andreea 4" },
  { src: "/photos/5.jpeg", alt: "Alex și Andreea 5" },
  { src: "/photos/6.jpeg", alt: "Alex și Andreea 6" },
];

const Placeholder = ({ label }: { label: string }) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-wedding-cream border border-dashed border-wedding-sage/40">
    <ImageIcon className="w-10 h-10 text-wedding-sage/50 mb-3" strokeWidth={1} />
    <span className="text-xs uppercase tracking-[0.3em] text-wedding-charcoal/40">
      {label}
    </span>
  </div>
);

const CouplePhoto = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="py-20 md:py-28 bg-wedding-cream">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "center" }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="relative mx-auto max-w-3xl"
          >
            <CarouselContent>
              {slides.map((slide, i) => (
                <CarouselItem key={i}>
                  <div className="relative overflow-hidden">
                    <div className="w-full h-[420px] md:h-[560px]">
                      {slide.src ? (
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-full object-cover grayscale-[10%]"
                        />
                      ) : (
                        <Placeholder label={slide.alt} />
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-14 h-10 w-10 border-wedding-charcoal/20 bg-wedding-ivory/80 hover:bg-wedding-ivory text-wedding-charcoal" />
            <CarouselNext className="hidden md:flex -right-14 h-10 w-10 border-wedding-charcoal/20 bg-wedding-ivory/80 hover:bg-wedding-ivory text-wedding-charcoal" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-wedding-sage"
                    : "w-1.5 bg-wedding-charcoal/25 hover:bg-wedding-charcoal/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="font-display text-wedding-charcoal text-xl md:text-2xl italic leading-relaxed">
            „Dragostea este îndelung răbdătoare, este plină de bunătate…
            Dragostea nu va pieri niciodată.”
          </p>
          <p className="mt-4 text-wedding-charcoal/60 tracking-[0.3em] uppercase text-xs">
            1 Corinteni 13:4, 8
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CouplePhoto;
