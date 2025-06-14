"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Briefcase, BadgeIcon as Certificate, Gift } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    title: "Free Trips",
    description:
      "Earn free trips to popular destinations across India based on your performance.",
    icon: Award,
  },
  {
    title: "Internship Opportunities",
    description:
      "Get exclusive internship opportunities with AllTripp and partner companies.",
    icon: Briefcase,
  },
  {
    title: "Certification",
    description:
      "Receive official certification recognizing your skills and contributions.",
    icon: Certificate,
  },
  {
    title: "Exclusive Merchandise",
    description:
      "Get branded merchandise and special gifts as rewards for your efforts.",
    icon: Gift,
  },
];

export default function CampusAmbassadorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="campus" ref={ref} className="py-20 bg-soft-rose/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Campus Ambassador Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our Campus Ambassador Program and become a travel influencer
            while earning exciting rewards.
          </p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-soft-rose/30 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Button
            asChild
            className="bg-green-600 hover:bg-emerald-700 rounded-lg shadow-md"
          >
            <Link
              href="https://chat.whatsapp.com/LSCvkKHKeVj0tighxr2C4m"
              target="_blank"
            >
              Join WhatsApp Group
            </Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg shadow-md"
          >
            <Link href="https://www.instagram.com/alltripp_/" target="_blank">
              Follow on Instagram
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
