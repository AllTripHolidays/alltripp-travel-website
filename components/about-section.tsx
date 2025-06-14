"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import DotLottieReact with SSR disabled so it only loads on the client.
const DotLottieReactDynamic = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-light-sky-blue/20 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Animated Lottie Component */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md h-[400px]">
              <DotLottieReactDynamic
                src="https://lottie.host/5431775f-d473-49be-a5ab-4d37b07b249d/uDLEAkNPXT.lottie"
                loop
                autoplay
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-6">About Us</h2>
            <p className="text-lg">
              At AllTripp, we believe that travel is about more than just
              destinations—it's about the people you meet, the stories you
              share, and the memories you create. Our mission is to connect
              travelers with unique experiences and a vibrant community of
              like-minded adventurers. Whether you're seeking cultural
              immersion, thrilling adventures, or simply a chance to connect
              with others who share your passion for exploration, AllTripp is
              your home for unforgettable journeys.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
