"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Dynamic import for Lottie
const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

export default function EventSection() {
  // Refs for each section to trigger animations independently
  const sectionRef = React.useRef(null);
  const meetupRef = React.useRef(null);
  const foodwalkRef = React.useRef(null);

  // InView hooks for each section
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isMeetupInView = useInView(meetupRef, { once: true, amount: 0.3 });
  const isFoodwalkInView = useInView(foodwalkRef, { once: true, amount: 0.3 });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="events"
      className="py-24 bg-gradient-to-b from-transparent to-slate-50/30"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          className="text-center mx-auto mb-16"
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join exclusive events hosted by AllTripp to celebrate the spirit of
            travel and community! From cultural festivals to adventure meetups
            and travel workshops, our events are designed to bring people
            together and inspire new journeys.
          </p>
        </motion.div>

        {/* Meetups */}
        <motion.div
          ref={meetupRef}
          className="flex flex-col md:flex-row items-center gap-10 mb-20"
          initial="hidden"
          animate={isMeetupInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="w-full md:w-1/2 h-64 overflow-hidden"
            variants={itemVariant}
          >
            <DotLottieReact
              src="https://lottie.host/42d6316e-69ee-485e-976c-895ac7ca830f/avSXHPZYyH.lottie"
              loop
              autoplay
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 space-y-4"
            variants={itemVariant}
          >
            <h3 className="text-2xl font-medium">Meetups</h3>
            <p className="text-muted-foreground">
              Connect with fellow adventurers, share stories, and plan future
              trips together.
            </p>
            <Button
              asChild
              variant="default"
              className="mt-2 bg-green-500 text-white hover:bg-green-500/90 rounded-full"
            >
              <Link
                href="https://wa.me/919266602470?text=Hi%20AllTripp!%20I%27m%20interested%20in%20the%20Meetups%20event."
                target="_blank"
                rel="noopener noreferrer"
              >
                Join on WhatsApp
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Foodwalks */}
        <motion.div
          ref={foodwalkRef}
          className="flex flex-col md:flex-row-reverse items-center gap-10 text-right md:text-left"
          initial="hidden"
          animate={isFoodwalkInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="w-full md:w-1/2 h-64 overflow-hidden"
            variants={itemVariant}
          >
            <DotLottieReact
              src="https://lottie.host/1261f9df-7473-4dd5-a18c-ed76872fb34e/Q8oA1GGBV3.lottie"
              loop
              autoplay
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 space-y-4"
            variants={itemVariant}
          >
            <h3 className="text-2xl font-medium">Foodwalks</h3>
            <p className="text-muted-foreground">
              Explore the culinary heart of destinations with guided foodwalks,
              discovering local flavors and traditions.
            </p>
            <Button
              asChild
              variant="default"
              className="mt-2 bg-green-500 text-white hover:bg-green-500/90 rounded-full"
            >
              <Link
                href="https://wa.me/919266602470?text=Hi%20AllTripp!%20I%27m%20interested%20in%20the%20Foodwalks%20event."
                target="_blank"
                rel="noopener noreferrer"
              >
                Join on WhatsApp
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
