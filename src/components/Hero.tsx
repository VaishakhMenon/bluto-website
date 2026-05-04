"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden">
      {/* Image area */}
      <div className="relative w-full min-h-screen">
        <Image
          src="/images/hero-image.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Minimal gradient — only fades at the very bottom to blend into next section */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              transparent 65%,
              rgba(250, 245, 238, 0.4) 80%,
              rgba(250, 245, 238, 0.8) 90%,
              #faf5ee 100%
            )`,
          }}
        />
        {/* Subtle top vignette for nav readability */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/20 to-transparent" />

        {/* All content overlaid on the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-white drop-shadow-lg max-w-4xl"
          >
            Navigate everyday life with{" "}
            <span className="serif-italic">a companion that remembers</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-white/85 max-w-xl mx-auto mb-10 leading-relaxed drop-shadow-md"
          >
            Bluto is your personal AI companion — always curious, kind, and ready
            to help you think, plan, and grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#features"
              className="px-8 py-3.5 rounded-full border border-white/40 text-white hover:bg-white/10 transition-all font-medium text-sm backdrop-blur-[2px]"
            >
              See what Bluto can do
            </a>
            <a
              href="#download"
              className="px-8 py-3.5 rounded-full bg-white text-foreground hover:bg-white/90 transition-colors font-medium text-sm shadow-lg"
            >
              Get Bluto
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
