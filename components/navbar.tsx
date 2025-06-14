"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/#about" },
  { name: "Destinations", href: "/#destinations" },
  { name: "Trips", href: "/#trips" },
  { name: "Campus Ambassador", href: "/#campus" },
  { name: "Testimonials", href: "/#testimonials" },
];

const Navbar: React.FC = () => {
  // State for drawer (mobile menu) and scroll-based show/hide logic
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Dark mode theme hook from next-themes
  const { theme, setTheme } = useTheme();

  // Scroll handler: show navbar on upward scroll, hide on downward scroll after a threshold
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle function for theme switching
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`transition-transform duration-300 ease-in-out sticky top-0 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white/70 backdrop-blur-sm shadow-sm`}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            aria-label="AllTripp Home"
            className="font-bold text-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-40 h-20 relative flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="AllTripp Logo"
                  width={160}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation & Theme Toggle */}
        {isDesktop ? (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
            >
              {mounted ? (
                theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )
              ) : (
                <div className="h-5 w-5" />
              )}
            </Button>
          </div>
        ) : (
          // Mobile Navigation: include both Theme Toggle and Drawer icon side by side
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="mr-2"
            >
              {mounted ? (
                theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )
              ) : (
                <div className="h-5 w-5" />
              )}
            </Button>
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Toggle menu">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-white/70 backdrop-blur-sm">
                <DrawerHeader>
                  <DrawerTitle>AllTripp</DrawerTitle>
                  <DrawerDescription>
                    One Solution For All Your Travel Needs
                  </DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-col gap-4 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsDrawerOpen(false)}
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
