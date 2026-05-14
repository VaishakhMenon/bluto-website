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

      {/* Device image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-md mx-auto mt-16"
      >
        <Image
          src="/images/hero-device.png"
          alt="Bluto app on mobile"
          width={800}
          height={1000}
          className="w-full h-auto"
          priority
          quality={90}
        />
      </motion.div>
    </section>
  );
}
