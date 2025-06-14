"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, Users, SlidersHorizontal, LifeBuoy } from "lucide-react";

const features = [
  {
    title: "Curated Experiences",
    description:
      "Discover hidden gems and immerse yourself in authentic local traditions for unforgettable journeys.",
    icon: Star,
  },
  {
    title: "Community",
    description:
      "Connect with like-minded travelers and build lasting friendships through shared adventures.",
    icon: Users,
  },
  {
    title: "Personalized Itineraries",
    description:
      "Enjoy trips tailored to your unique preferences, interests, and travel style.",
    icon: SlidersHorizontal,
  },
  {
    title: "Seamless Planning & Support",
    description:
      "Travel stress-free with our easy-to-use platform and dedicated support team by your side.",
    icon: LifeBuoy,
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const bgColors = [
    "bg-blue-600/20",
    "bg-pink-600/20",
    "bg-yellow-500/20",
    "bg-green-600/20",
  ];
  const iconTextColors = [
    "text-blue-600",
    "text-pink-600",
    "text-yellow-500",
    "text-green-600",
  ];

  return (
    <section id="why-choose" ref={ref} className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose AllTripp because we go the extra mile to craft experiences
            you'll cherish forever.
          </p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div
                    className={`w-12 h-12 rounded-full ${bgColors[index]} flex items-center justify-center mb-4`}
                  >
                    <feature.icon
                      className={`w-6 h-6 ${iconTextColors[index]}`}
                    />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
