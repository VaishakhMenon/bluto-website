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

      {/* Device with background card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-3xl mx-auto mt-16 relative"
      >
        {/* Background image card */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/hero-device-image-backgound-card.jpg"
            alt=""
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Phone floating on top */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 md:-bottom-16 drop-shadow-2xl">
          <Image
            src="/images/hero-device.png"
            alt="Bluto app on mobile"
            width={500}
            height={625}
            className="w-[200px] md:w-[260px] h-auto"
            priority
            quality={90}
            style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.25))" }}
          />
        </div>
      </motion.div>

      {/* Spacer for the overflowing phone */}
      <div className="h-16 md:h-20" />
    </section>
  );
}
