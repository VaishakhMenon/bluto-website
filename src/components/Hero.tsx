"use client";

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

      {/* Phone mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-sm mx-auto mt-16"
      >
        <div className="w-[280px] md:w-[320px] mx-auto rounded-[2.5rem] border-2 border-card-border bg-white overflow-hidden shadow-2xl relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-cream rounded-b-2xl z-10" />

          {/* Screen content */}
          <div className="pt-10 pb-6 px-5 space-y-3 min-h-[420px]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-full bg-cream flex items-center justify-center">
                <span className="text-foreground text-xs font-bold">B</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Bluto</div>
                <div className="text-[10px] text-muted">Online</div>
              </div>
            </div>

            <div className="bg-cream rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
              <p className="text-[12px] text-foreground leading-relaxed">
                Good morning! You crushed that 5-day streak. Ready to plan today&apos;s workout?
              </p>
            </div>
            <div className="bg-foreground rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[75%] ml-auto">
              <p className="text-[12px] text-background leading-relaxed">
                Let&apos;s go! Upper body today
              </p>
            </div>
            <div className="bg-cream rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
              <p className="text-[12px] text-foreground leading-relaxed">
                On it. I&apos;ll build on last week&apos;s gains. Here&apos;s your plan:
              </p>
            </div>
            <div className="bg-cream rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[90%]">
              <p className="text-[11px] text-foreground leading-relaxed font-medium">
                Bench Press 4x8 @ 80kg<br/>
                OHP 3x10 @ 40kg<br/>
                Cable Flyes 3x12<br/>
                Lateral Raises 4x15
              </p>
            </div>
            <div className="bg-foreground rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[60%] ml-auto">
              <p className="text-[12px] text-background leading-relaxed">
                Perfect, let&apos;s crush it
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
