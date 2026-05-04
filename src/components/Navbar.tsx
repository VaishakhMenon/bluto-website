"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-card-border/50"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-icon.png"
            alt="Bluto icon"
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <Image
            src="/images/logo-text-name-2x.png"
            alt="Bluto"
            width={90}
            height={28}
            className="h-6 w-auto"
          />
        </Link>

        {/* Desktop nav — white text when over hero, dark when scrolled */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            How it works
          </a>
          <a
            href="#download"
            className={`text-sm font-medium px-6 py-2.5 rounded-full transition-colors ${
              scrolled
                ? "bg-foreground text-background hover:bg-accent-hover"
                : "bg-white text-foreground hover:bg-white/90"
            }`}
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-background border-b border-card-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#features" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">
                Features
              </a>
              <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">
                How it works
              </a>
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium px-5 py-2.5 rounded-full bg-foreground text-background text-center"
              >
                Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
