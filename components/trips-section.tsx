"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Calendar,
} from "lucide-react";

type Trip = {
  title: string;
  description: string;
  image: string;
  duration: string;
};

const trips: Trip[] = [
  {
    title: "Golden Triangle Tour",
    description:
      "Experience India's most iconic circuit, blending the grandeur of Delhi's monuments, the timeless beauty of the Taj Mahal in Agra, and the royal heritage of Jaipur. Perfect for first-time visitors seeking a mix of history, culture, and vibrant city life.",
    image: "/featured/delhi.jpg",
    duration: "5 Days / 4 Nights",
  },
  {
    title: "Spiti Valley Adventure",
    description:
      "Embark on a high-altitude adventure through Spiti Valley's dramatic landscapes, ancient monasteries, and remote Himalayan villages. Ideal for thrill-seekers and nature lovers craving offbeat experiences.",
    image: "/featured/himachal.jpg",
    duration: "8 Days / 7 Nights",
  },
  {
    title: "Kerala Backwaters & Beaches",
    description:
      "Cruise through Kerala's tranquil backwaters on a traditional houseboat, unwind on palm-fringed beaches, and immerse yourself in lush greenery. Perfect for relaxation and rejuvenation in 'God's Own Country'.",
    image: "/featured/kerala-backwaters.webp",
    duration: "6 Days / 5 Nights",
  },
  {
    title: "Rajasthan Royal Heritage Tour",
    description:
      "Explore Rajasthan's majestic forts, opulent palaces, and colorful bazaars in cities like Udaipur, Jodhpur, and Jaisalmer. Discover the vibrant traditions and desert landscapes that define India's royal past.",
    image: "/featured/Rajasthan.jpg",
    duration: "7 Days / 6 Nights",
  },
  {
    title: "Ladakh Cultural & Scenic Expedition",
    description:
      "Journey through Ladakh's stark mountain landscapes, serene monasteries, and high-altitude lakes. A unique blend of adventure and spiritual discovery in the Himalayas.",
    image: "/featured/Ladakh.jpg",
    duration: "9 Days / 8 Nights",
  },
  {
    title: "Sikkim & Darjeeling Himalayan Explorer",
    description:
      "Travel through the lush hills of Sikkim and Darjeeling, famed for tea gardens, Buddhist monasteries, and breathtaking mountain views. Ideal for those seeking tranquility and cultural immersion.",
    image: "/featured/Darjeeling.jpg",
    duration: "6 Days / 5 Nights",
  },
  {
    title: "Goa Leisure & Heritage Tour",
    description:
      "Relax on Goa's sun-kissed beaches, explore Portuguese-influenced architecture, and savor vibrant nightlife. A perfect blend of relaxation and cultural exploration.",
    image: "/featured/goa.jpg",
    duration: "4 Days / 3 Nights",
  },
  {
    title: "Manali Adventure",
    description:
      "Enjoy thrilling adventures like paragliding and trekking amidst stunning Himalayan landscapes, along with visits to hot springs and cultural sites.",
    image: "/featured/Manali.jpg",
    duration: "5 Days / 4 Nights",
  },
  {
    title: "Shimla Colonial Heritage",
    description:
      "Explore colonial heritage landmarks, scenic mountain walks, and the charming Kalka-Shimla toy train experience.",
    image: "/featured/Shimla.jpg",
    duration: "4 Days / 3 Nights",
  },
  {
    title: "Meghalaya Living Roots & Culture",
    description:
      "Trek to living root bridges, enjoy water sports at Umiam Lake, and immerse yourself in rich Khasi tribal culture and scenic beauty.",
    image: "/featured/Meghalaya.jpg",
    duration: "5 Days / 4 Nights",
  },
];

export default function TripsSection() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollNext = () => {
    carouselRef.current?.scrollBy({
      left: carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    carouselRef.current?.scrollBy({
      left: -carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="trips" ref={ref} className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Featured Trips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your dream journey with AllTripp! Whether you're traveling
            solo, with friends, or as part of a group, our trips are designed to
            create unforgettable memories and lasting connections.
          </p>
        </div>

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? { opacity: 1, transition: { duration: 0.7, ease: "easeInOut" } }
              : {}
          }
        >
          <div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4"
          >
            {trips.map((trip, idx) => (
              <motion.div
                key={idx}
                className="snap-start flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
                initial={{ y: 30, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay: idx * 0.1,
                          duration: 0.7,
                          ease: "easeInOut",
                        },
                      }
                    : {}
                }
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="relative h-48 w-full">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    {/* WhatsApp quick inquiry button */}
                    <a
                      href={`https://wa.me/919266602470?text=Hi%20AllTripp%2C%20I'm%20interested%20in%20${encodeURIComponent(
                        trip.title
                      )}%20and%20would%20like%20to%20know%20more%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-md transform transition-all duration-300 ${
                        hoveredCard === idx
                          ? "scale-110 opacity-100"
                          : "opacity-70 scale-90"
                      }`}
                      aria-label={`Quick inquiry about ${trip.title} on WhatsApp`}
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {trip.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 text-sm">
                        {trip.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      {/* Duration display - more prominent now */}
                      <div className="inline-flex items-center text-sm font-medium mb-3 p-1 bg-slate-50 dark:bg-slate-800 rounded">
                        <Calendar className="h-4 w-4 mr-1 text-primary" />
                        <span>{trip.duration}</span>
                      </div>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
                        asChild
                      >
                        <a
                          href={`https://wa.me/919266602470?text=Hi%20AllTripp%2C%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(
                            trip.title
                          )}%20package.%20Please%20share%20more%20details%20about%20availability%20and%20pricing.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Book Now</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Arrows below center */}
          <div className="flex justify-center space-x-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
