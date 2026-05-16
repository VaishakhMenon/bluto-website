"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Your midnight sounding board",
    description:
      "3 AM thoughts? Big life decisions? Just need to vent? Bluto listens without judgment and actually remembers what you said last time.",
    detail: "Voice or text. Anytime. Bluto adapts to your communication style, remembers context from past conversations, and responds like someone who genuinely knows your story.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Never forget what matters",
    description:
      "Tasks, habits, reminders, daily streaks. Tell Bluto what you need to do and it holds you accountable.",
    detail: "Voice-powered task creation, smart categorization, daily ritual tracking, and gentle nudges when things slip through the cracks. Your second brain, minus the forgetting.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
    title: "A gym partner who shows up",
    description:
      "AI workout plans, exercise tracking, PR celebrations, and progressive overload hints. Bluto spots your gains before you do.",
    detail: "Log workouts by voice. Get AI-generated training plans. Track personal records automatically. Weekly recaps that actually tell you something useful about your progress.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
    title: "Just talk. Out loud.",
    description:
      "On your commute, during a walk, while you cook. Voice mode turns any moment into a real conversation.",
    detail: "8 companion voices across 5 languages. Natural speech recognition that handles accents, filler words, and interruptions. Hands free, judgment free.",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);

  return (
    <section id="features" className="relative py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Benefits
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight max-w-2xl">
            One companion.{" "}
            <span className="serif-italic">Every part of your day.</span>
          </h2>
        </motion.div>

        {/* Mobile: Accordion layout */}
        <div className="md:hidden mt-14 space-y-0">
          {features.map((feature, i) => (
            <div key={feature.title} className="border-t border-card-border">
              <button
                onClick={() => setMobileOpen(mobileOpen === i ? null : i)}
                className="w-full text-left py-5 px-4 flex items-center gap-4 transition-colors"
              >
                <div className={`transition-colors flex-shrink-0 ${mobileOpen === i ? "text-foreground" : "text-muted"}`}>
                  {feature.icon}
                </div>
                <h3 className="text-sm font-semibold text-foreground flex-1 leading-snug">
                  {feature.title}
                </h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-muted transition-transform duration-300 flex-shrink-0 ${mobileOpen === i ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <AnimatePresence>
                {mobileOpen === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-6 pt-1">
                      <p className="text-xs text-muted leading-relaxed mb-3">
                        {feature.description}
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {feature.detail}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="border-t border-card-border" />
        </div>

        {/* Desktop: Tab layout (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-0 mt-14"
        >
          {features.map((feature, i) => (
            <button
              key={feature.title}
              onClick={() => setActive(i)}
              className={`text-left p-6 border-t border-card-border transition-all duration-300 group cursor-pointer ${
                active === i
                  ? "bg-cream"
                  : "hover:bg-cream/50"
              }`}
            >
              <div className={`mb-4 transition-colors ${active === i ? "text-foreground" : "text-muted"}`}>
                {feature.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {feature.description}
              </p>
            </button>
          ))}
        </motion.div>

        {/* Expanded detail area (desktop only) */}
        <div className="hidden md:block mt-0 rounded-b-2xl overflow-hidden border border-card-border border-t-0 bg-cream">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[320px]">
            {/* Detail text */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4 leading-snug">
                    {features[active].title}
                  </h3>
                  <p className="text-muted text-sm md:text-base leading-relaxed">
                    {features[active].detail}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image placeholder */}
            <div className="relative bg-card-border/30 flex items-center justify-center min-h-[280px] md:min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="text-center p-8"
                >
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-background/80 flex items-center justify-center mb-4">
                    <span className="text-foreground scale-150">
                      {features[active].icon}
                    </span>
                  </div>
                  <p className="text-xs text-muted">Feature image coming soon</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
