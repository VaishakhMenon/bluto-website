"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] text-foreground"
        >
          The AI that actually{" "}
          <span className="serif-italic">knows you.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed"
        >
          Bluto remembers your story, tracks your goals, and helps you think
          clearly. One companion for your workouts, meals, tasks, and the
          moments when you just need to talk.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10"
        >
          <a
            href="#download"
            className="inline-flex px-8 py-3.5 rounded-full bg-foreground text-background hover:bg-accent-hover transition-colors font-medium text-sm"
          >
            Try it free
          </a>
        </motion.div>
      </div>

      {/* Device with background card — full width aligned with navbar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl mx-auto mt-16 px-6 md:px-10 relative"
      >
        {/* Background image card */}
        <div className="rounded-2xl md:rounded-3xl overflow-hidden relative h-[340px] md:h-[480px] lg:h-[560px]">
          <Image
            src="/images/hero-device-image-backgound-card.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Phone overlapping — top half sits on the card, bottom half extends below */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[40%]">
          <Image
            src="/images/hero-device.png"
            alt="Bluto app on mobile"
            width={600}
            height={750}
            className="w-[220px] md:w-[280px] lg:w-[320px] h-auto"
            priority
            quality={90}
            style={{ filter: "drop-shadow(0 20px 40px rgba(26,58,42,0.12))" }}
          />
        </div>
      </motion.div>

      {/* Spacer for the phone extending below the card */}
      <div className="h-[120px] md:h-[160px] lg:h-[200px]" />
    </section>
  );
}
