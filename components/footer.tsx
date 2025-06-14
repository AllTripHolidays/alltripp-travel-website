"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiLinkedin } from "react-icons/si";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { motion } from "framer-motion";

// Dynamically import DotLottieReact so it only loads on the client.
const DotLottieReactDynamic = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white rounded-t-3xl overflow-hidden">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Branding and Animation */}
          <div className="space-y-4">
            <div className="w-full">
              <DotLottieReactDynamic
                src="https://lottie.host/1261f9df-7473-4dd5-a18c-ed76872fb34e/Q8oA1GGBV3.lottie"
                loop
                autoplay
              />
            </div>
            <h3 className="text-xl font-bold">AllTripp</h3>
            <p className="text-gray-400">
              One Solution For All Your Travel Needs
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#destinations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="#trips"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Trips
                </Link>
              </li>
              <li>
                <Link
                  href="#campus"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Campus Ambassador
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">
                  alltrippofficial@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">+91 9266602470</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">New Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social and WhatsApp Booking */}
          <div className="space-y-4">
            <h3 className="text-lgfont-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SiInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SiFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SiX className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SiLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>

            <div className="pt-4">
              <motion.a
                href="https://wa.me/919266602470?text=Hi%20AllTipp%2C%20I%20am%20interested%20in%20planning%20a%20trip.%20Can%20you%20help%20me%20with%20the%20details%3F
" // Replace with your WhatsApp URL
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
              >
                <IconBrandWhatsapp className="h-6 w-6" />
                Book Your Trip
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} AllTripp. All rights reserved.</p>
      </div>
    </footer>
  );
}
