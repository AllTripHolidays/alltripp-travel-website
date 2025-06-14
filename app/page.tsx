import { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import FeaturesSection from "@/components/features-section";
import DestinationsSection from "@/components/destinations-section";
import TripsSection from "@/components/trips-section";
import CampusAmbassadorSection from "@/components/campus-ambassador-section";
import TestimonialsSection from "@/components/testimonials-section";
import EventSection from "@/components/event-section";

export const metadata: Metadata = {
  title: "AllTripp - Discover India's Hidden Gems | Premium Travel Experiences",
  description: "Explore incredible India with AllTripp's curated travel experiences. From Kashmir's snow-capped mountains to Kerala's backwaters, discover authentic cultural tours, adventure trips, and customized holiday packages across India.",
  keywords: [
    "India travel packages",
    "cultural tours India",
    "adventure travel India",
    "holiday packages India",
    "Kashmir tours",
    "Kerala backwaters",
    "Rajasthan travel",
    "Himachal Pradesh",
    "Goa packages",
    "Northeast India",
    "travel experiences",
    "authentic India tours"
  ],
  openGraph: {
    title: "AllTripp - Discover India's Hidden Gems",
    description: "Explore incredible India with AllTripp's curated travel experiences. Authentic cultural tours, adventure trips, and customized holiday packages.",
    url: "https://alltripp.com",
    images: [
      {
        url: "/himalayas.jpg",
        width: 1200,
        height: 630,
        alt: "Beautiful Indian Himalayas - AllTripp Travel",
      },
    ],
  },
  twitter: {
    title: "AllTripp - Discover India's Hidden Gems",
    description: "Explore incredible India with AllTripp's curated travel experiences. Authentic cultural tours and adventure trips.",
    images: ["/himalayas.jpg"],
  },
  alternates: {
    canonical: 'https://alltripp.com',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DestinationsSection />
      <TripsSection />
      <EventSection />
      <CampusAmbassadorSection />
      <TestimonialsSection />
    </>
  );
}
