"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Function to handle smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="relative h-[85vh] w-full overflow-hidden">
      <Image
        src="/himalayas.jpg"
        alt="Scenic view of Himalayas/Kashmir"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl"
          variants={itemVariants}
        >
          One Solution For All Your{" "}
          <span className="text-[#FDBE00]">Travel Needs</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base sm:text-lg"
          variants={itemVariants}
        >
          Discover the beauty of India with AllTripp. We offer premium travel
          experiences across the country, from the Himalayas to the backwaters
          of Kerala.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-row gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#FDBE00] text-black hover:bg-[#FDBE00]/90 font-medium"
          >
            <Link href="#destinations">Explore More</Link>
          </Button>

          <Button
            size="lg"
            onClick={() => scrollToSection("events")}
            className="bg-white text-black hover:bg-white/90 dark:bg-transparent dark:text-white dark:border dark:border-white dark:hover:bg-white/10"
          >
            Events
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
