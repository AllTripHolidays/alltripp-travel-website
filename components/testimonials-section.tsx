"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    testimonial:
      "My trip to Kashmir with AllTripp was absolutely magical. The team took care of everything, from accommodation to local experiences. I'll definitely be booking with them again!",
    rating: 5,
    image: "/testimonials/priya-sharma.jpg",
  },
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    testimonial:
      "The Rajasthan tour was well-organized and gave us a perfect blend of luxury and authentic experiences. The local guides were knowledgeable and friendly.",
    rating: 5,
    image: "/testimonials/rahul-mehta.jpg",
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    testimonial:
      "Kerala backwaters cruise was the highlight of our honeymoon. AllTripp arranged everything perfectly, and the houseboat experience was unforgettable.",
    rating: 5,
    image: "/testimonials/ananya-patel.jpg",
  },
  {
    name: "Vikram Singh",
    location: "Chandigarh",
    testimonial:
      "As a solo traveler, I was a bit apprehensive, but the AllTripp team made me feel safe and comfortable throughout my Himachal trip. Highly recommended!",
    rating: 4,
    image: "/testimonials/vikram-singh.jpg",
  },
];

export default function TestimonialsSection() {
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
    <section id="testimonials" ref={ref} className="py-20 bg-creamy-sand/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from travelers who have experienced the AllTripp
            difference.
          </p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    {testimonial.testimonial}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
